import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import EmbeddedPostgres from "embedded-postgres";
import { eq } from "drizzle-orm";
import { agents, applyMigrations, createDb, profiles, telegramLinkCodes, tokens } from "@corvid/db";
import { createNotifier, createTelegramApi, handleMessage, hashCode, pollOnce, type TelegramApi, type Update } from "../src/telegram";
import { runAgentCycle } from "../src/runner";

const dir = "D:/.dev/tmp/pgtest-telegram";
const port = 54343;
const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
const A = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
const B = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb";
const MINT = "0x00000000000000000000000000000000000000a1";

let pg: EmbeddedPostgres;
let created: ReturnType<typeof createDb>;
const db = () => created.db;
const deps = () => ({ db: db(), gt: null as never, ds: null as never });
const sentMsgs: { chat: string; text: string }[] = [];
const fake = (updates: Update[] = []): TelegramApi => ({
  sendMessage: async (chat, text) => void sentMsgs.push({ chat, text }),
  getUpdates: async () => updates,
});
const chatOf = async (id: string) => (await db().select({ c: profiles.telegramChatId }).from(profiles).where(eq(profiles.id, id)))[0].c;
const putCode = (profileId: string, code: string, ttlMs = 600_000) =>
  db().insert(telegramLinkCodes).values({ profileId, codeHash: hashCode(code), expiresAt: new Date(Date.now() + ttlMs) }).onConflictDoUpdate({ target: telegramLinkCodes.profileId, set: { codeHash: hashCode(code), expiresAt: new Date(Date.now() + ttlMs) } });

beforeAll(async () => {
  fs.rmSync(dir, { recursive: true, force: true });
  pg = new EmbeddedPostgres({ databaseDir: dir, user: "corvid", password: "corvid-dev", port, persistent: false, initdbFlags: ["--encoding=UTF8", "--locale=C"] });
  await pg.initialise();
  await pg.start();
  await pg.createDatabase("corvid");
  await applyMigrations(url);
  created = createDb(url);
  await db().insert(profiles).values([{ id: A, email: "a@x.io" }, { id: B, email: "b@x.io" }]);
}, 120_000);
afterAll(async () => {
  await created?.pool.end();
  await pg?.stop();
});
beforeEach(async () => {
  sentMsgs.length = 0;
  await db().update(profiles).set({ telegramChatId: null });
  await db().delete(telegramLinkCodes);
});

describe("tautan akun", () => {
  it("kode valid menautkan chat dan hanya berlaku sekali", async () => {
    await putCode(A, "ABCD2345");
    await handleMessage(deps(), fake(), { id: 111, type: "private" }, "/start abcd2345");
    expect(await chatOf(A)).toBe("111");
    expect(sentMsgs.at(-1)?.text).toMatch(/Connected/);
    await handleMessage(deps(), fake(), { id: 222, type: "private" }, "ABCD2345");
    expect(await chatOf(A)).toBe("111");
    expect(sentMsgs.at(-1)?.text).toMatch(/not valid/);
  });
  it("kode kedaluwarsa ditolak", async () => {
    await putCode(A, "EXPIRED2", -1000);
    await handleMessage(deps(), fake(), { id: 111, type: "private" }, "EXPIRED2");
    expect(await chatOf(A)).toBeNull();
  });
  it("grup diabaikan; chat dipindah ke akun baru bila ditautkan ulang", async () => {
    await putCode(A, "GROUPCD2");
    await handleMessage(deps(), fake(), { id: 5, type: "group" }, "GROUPCD2");
    expect(await chatOf(A)).toBeNull();
    await putCode(A, "FIRSTCD2");
    await handleMessage(deps(), fake(), { id: 9, type: "private" }, "FIRSTCD2");
    await putCode(B, "SECONDC2");
    await handleMessage(deps(), fake(), { id: 9, type: "private" }, "SECONDC2");
    expect(await chatOf(A)).toBeNull();
    expect(await chatOf(B)).toBe("9");
  });
  it("/stop memutuskan; teks lain mendapat petunjuk", async () => {
    await db().update(profiles).set({ telegramChatId: "42" }).where(eq(profiles.id, A));
    await handleMessage(deps(), fake(), { id: 42, type: "private" }, "/stop");
    expect(await chatOf(A)).toBeNull();
    await handleMessage(deps(), fake(), { id: 42, type: "private" }, "hello");
    expect(sentMsgs.at(-1)?.text).toMatch(/Connect Telegram/);
  });
  it("pollOnce memproses pesan dan menaikkan offset", async () => {
    await putCode(A, "POLLCODE");
    const r = await pollOnce(deps(), fake([{ update_id: 7, message: { text: "POLLCODE", chat: { id: 77, type: "private" } } }, { update_id: 8 }]), undefined);
    expect(r).toEqual({ next: 9, handled: 1 });
    expect(await chatOf(A)).toBe("77");
  });
});

describe("pengiriman", () => {
  it("tanpa tautan tidak mengirim; dengan tautan mengirim; dibatasi per jam", async () => {
    let t = 1_000_000;
    const n = createNotifier(deps(), fake(), { perHour: 2, now: () => t });
    expect(await n(A, "x")).toBe(false);
    await db().update(profiles).set({ telegramChatId: "55" }).where(eq(profiles.id, A));
    expect(await n(A, "1")).toBe(true);
    expect(await n(A, "2")).toBe(true);
    expect(await n(A, "3")).toBe(false);
    t += 3_600_001;
    expect(await n(A, "4")).toBe(true);
    expect(sentMsgs.map((m) => m.text)).toEqual(["1", "2", "4"]);
  });
  it("gagal kirim tidak melempar", async () => {
    await db().update(profiles).set({ telegramChatId: "55" }).where(eq(profiles.id, A));
    const bad: TelegramApi = { sendMessage: async () => { throw new Error("boom"); }, getUpdates: async () => [] };
    expect(await createNotifier(deps(), bad)(A, "x")).toBe(false);
  });
  it("klien API tidak membocorkan token di galat", async () => {
    const api = createTelegramApi("SECRET:TOKEN", (async () => new Response(JSON.stringify({ ok: false, description: "Forbidden" }), { status: 403 })) as typeof fetch);
    await expect(api.sendMessage("1", "x")).rejects.toThrow(/403 Forbidden/);
    await expect(api.sendMessage("1", "x")).rejects.not.toThrow(/SECRET/);
  });
});

describe("runner", () => {
  it("mengirim hanya bila agent menyalakan Telegram", async () => {
    await db().insert(tokens).values({ mint: MINT, symbol: "GOOD", lastSeenAt: new Date(), decimals: 18, liquidityUsd: "80000", volumeUsd: "100000", holders: 5000, riskScore: 5, devPct: "2", lpBurnPct: "100", dex: "uniswap", priceUsd: "0.01", createdAtChain: new Date(Date.now() - 5 * 60_000) });
    const mk = (telegram: string | null) =>
      db().insert(agents).values({ ownerId: A, name: "Agent", type: "signal_bot", pipeline: "new_tokens", mode: "signal", config: telegram ? { telegram } : {}, limits: {}, running: true }).returning();
    const [off] = await mk("false");
    const calls: string[] = [];
    await runAgentCycle({ ...deps(), notify: async (_p, text) => (calls.push(text), true) });
    expect(calls).toEqual([]);
    await db().update(agents).set({ running: false }).where(eq(agents.id, off.id));
    await db().delete(agents);
    await mk("true");
    await runAgentCycle({ ...deps(), notify: async (_p, text) => (calls.push(text), true) });
    expect(calls).toHaveLength(1);
    expect(calls[0]).toMatch(/GOOD matches your pipeline/);
  });
});
