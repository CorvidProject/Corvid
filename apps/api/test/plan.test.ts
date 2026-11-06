import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import { generateKeyPair, SignJWT, type KeyLike } from "jose";
import EmbeddedPostgres from "embedded-postgres";
import { eq, sql } from "drizzle-orm";
import { applyMigrations, createDb, credits, profiles, tokens, usageEvents } from "@corvid/db";
import { buildApp } from "../src/app";
import { createVerifier } from "../src/auth";
import type { LlmClient } from "../src/llm";
import { RateLimiter } from "../src/ratelimit";

const dir = "D:/.dev/tmp/pgtest-plan";
const port = 54342;
const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
const ISS = "https://example-ref.supabase.co/auth/v1";
const U1 = "11111111-1111-4111-8111-111111111111";
const U2 = "22222222-2222-4222-8222-222222222222";
const U3 = "33333333-3333-4333-8333-333333333333";
const TOKEN = "0x2222222222222222222222222222222222222222";

let pgServer: EmbeddedPostgres;
let created: ReturnType<typeof createDb>;
let app: Awaited<ReturnType<typeof buildApp>>;
let key: KeyLike;
const llm: LlmClient = { complete: async () => "mock answer" };
const tok = (sub: string) =>
  new SignJWT({ email: `${sub.slice(0, 4)}@x.io` }).setProtectedHeader({ alg: "ES256" }).setSubject(sub).setIssuer(ISS).setAudience("authenticated").setIssuedAt().setExpirationTime("1h").sign(key);
const call = async (method: "GET" | "POST", u: string, sub: string, payload?: unknown) =>
  app.inject({ method, url: u, headers: { authorization: `Bearer ${await tok(sub)}` }, payload: payload as never });
const plan = async (sub: string) => (await call("GET", "/api/plan", sub)).json();
const ask = async (sub: string, content: string) => {
  const id = (await call("POST", "/api/chats", sub)).json().id as number;
  return call("POST", `/api/chats/${id}/messages`, sub, { content });
};

beforeAll(async () => {
  const kp = await generateKeyPair("ES256");
  key = kp.privateKey;
  fs.rmSync(dir, { recursive: true, force: true });
  pgServer = new EmbeddedPostgres({ databaseDir: dir, user: "corvid", password: "corvid-dev", port, persistent: false, initdbFlags: ["--encoding=UTF8", "--locale=C"] });
  await pgServer.initialise();
  await pgServer.start();
  await pgServer.createDatabase("corvid");
  await applyMigrations(url);
  created = createDb(url);
  await created.db.insert(tokens).values({ mint: TOKEN, symbol: "TST", name: "Test Token", priceUsd: "0.0123", liquidityUsd: "50000", riskScore: 12 });
  const verifier = createVerifier({ issuer: ISS, key: kp.publicKey });
  // Kuota kecil agar habisnya mudah diuji: free 2 chat + 1 deep, pro 4 chat + 3 deep.
  app = await buildApp({
    db: created.db,
    verifier,
    llm,
    chatLimiter: new RateLimiter(1000, 60_000),
    planLimits: { free: { chat: 2, deep: 1 }, pro: { chat: 4, deep: 3 } },
  });
  await app.ready();
}, 120_000);

afterAll(async () => {
  await app?.close();
  await created?.pool.end();
  await pgServer?.stop();
});

describe("plan & usage", () => {
  it("butuh login", async () => {
    expect((await app.inject({ method: "GET", url: "/api/plan" })).statusCode).toBe(401);
  });

  it("pengguna baru: free, kuota belum terpakai, 25 kredit starter", async () => {
    const p = await plan(U1);
    expect(p).toMatchObject({ plan: "free", proUntil: null, limits: { chat: 2, deep: 1 }, used: { chat: 0, deep: 0 }, credits: 25, paymentsEnabled: false });
    expect(new Date(p.resetsAt).getUTCDate()).toBe(1);
  });

  it("jawaban memakai kuota dulu; kredit tidak berkurang", async () => {
    expect((await ask(U1, "hello")).json().credits).toBe(25);
    expect((await ask(U1, "again")).json().credits).toBe(25);
    expect((await plan(U1)).used).toEqual({ chat: 2, deep: 0 });
  });

  it("kuota chat habis: jatuh ke 1 kredit, usage tercatat sebagai credit", async () => {
    const r = await ask(U1, "third");
    expect(r.statusCode).toBe(200);
    expect(r.json().credits).toBe(24);
    const p = await plan(U1);
    expect(p.used.chat).toBe(2); // yang dihitung hanya pemakaian kuota
    const rows = await created.db.select().from(usageEvents).where(eq(usageEvents.profileId, U1));
    expect(rows.map((x) => `${x.kind}:${x.source}`).sort()).toEqual(["chat:credit", "chat:quota", "chat:quota"]);
  });

  it("analisis token (alamat 0x) memakai kuota deep, terpisah dari chat", async () => {
    expect((await ask(U1, `analyze ${TOKEN}`)).json().credits).toBe(24);
    expect((await plan(U1)).used).toEqual({ chat: 2, deep: 1 });
    expect((await ask(U1, `analyze ${TOKEN} again`)).json().credits).toBe(23); // deep habis -> kredit
  });

  it("kuota habis dan kredit habis: 402", async () => {
    await created.db.insert(credits).values({ profileId: U1, delta: -23, reason: "test" });
    const r = await ask(U1, "no more");
    expect(r.statusCode).toBe(402);
    expect(r.json().error).toBe("no_credits");
  });

  it("Pro aktif: kuota Pro; kedaluwarsa kembali ke free", async () => {
    await plan(U2); // buat profil
    await created.db.update(profiles).set({ proUntil: new Date(Date.now() + 86_400_000) }).where(eq(profiles.id, U2));
    const p = await plan(U2);
    expect(p).toMatchObject({ plan: "pro", limits: { chat: 4, deep: 3 } });
    expect(p.proUntil).toBeTruthy();
    await created.db.update(profiles).set({ proUntil: new Date(Date.now() - 1000) }).where(eq(profiles.id, U2));
    expect(await plan(U2)).toMatchObject({ plan: "free", proUntil: null, limits: { chat: 2, deep: 1 } });
  });

  it("kuota dihitung per bulan UTC: pemakaian bulan lalu tidak dihitung", async () => {
    await plan(U3);
    const lastMonth = new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth() - 1, 15));
    await created.db.execute(sql`insert into usage_events (profile_id, kind, source, created_at) values (${U3}, 'chat', 'quota', ${lastMonth.toISOString()}), (${U3}, 'chat', 'quota', ${lastMonth.toISOString()})`);
    expect((await plan(U3)).used.chat).toBe(0);
    expect((await ask(U3, "fresh month")).json().credits).toBe(25);
  });
});
