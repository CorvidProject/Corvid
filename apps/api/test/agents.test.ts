import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import { generateKeyPair, SignJWT, type KeyLike } from "jose";
import EmbeddedPostgres from "embedded-postgres";
import { agentRunSteps, agentRuns, applyMigrations, createDb, profiles, signals } from "@corvid/db";
import { eq } from "drizzle-orm";
import { buildApp } from "../src/app";
import { createVerifier } from "../src/auth";
import { MAX_AGENTS_PER_USER } from "../src/routes/agents";

const dir = "D:/.dev/tmp/pgtest-agents";
const port = 54334;
const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
const ISS = "https://example-ref.supabase.co/auth/v1";
const A = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
const B = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb";
const WALLET = "9XeBxpUMTnpaJC5csiS4dkBTvXsChbaZ5ysTSp2ZeiuQ";
const MINT = "G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG";

let pgServer: EmbeddedPostgres;
let created: ReturnType<typeof createDb>;
let app: Awaited<ReturnType<typeof buildApp>>;
let key: KeyLike;
const tok = (sub: string) =>
  new SignJWT({ email: `${sub.slice(0, 4)}@x.io` }).setProtectedHeader({ alg: "ES256" }).setSubject(sub).setIssuer(ISS).setAudience("authenticated").setIssuedAt().setExpirationTime("1h").sign(key);
const call = async (method: "GET" | "POST" | "PUT" | "DELETE", u: string, sub?: string, payload?: unknown) =>
  app.inject({ method, url: u, headers: sub ? { authorization: `Bearer ${await tok(sub)}` } : {}, payload: payload as never });

const follow = (over: Record<string, unknown> = {}) => ({
  name: "Whale copy",
  pipeline: "follow_wallet",
  mode: "signal",
  config: { wallet_address: WALLET, only_buys: "true" },
  ...over,
});

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
  app = await buildApp({ db: created.db, verifier: createVerifier({ issuer: ISS, key: kp.publicKey }) });
  await app.ready();
}, 120_000);

afterAll(async () => {
  await app?.close();
  await created?.pool.end();
  await pgServer?.stop();
});

describe("agents: akses dan validasi", () => {
  it("tanpa token 401", async () => {
    expect((await call("GET", "/api/agents")).statusCode).toBe(401);
    expect((await call("POST", "/api/agents", undefined, follow())).statusCode).toBe(401);
    expect((await call("GET", "/api/inbox")).statusCode).toBe(401);
  });

  it("menolak input tidak valid (400)", async () => {
    expect((await call("POST", "/api/agents", A, follow({ name: "" }))).statusCode).toBe(400);
    expect((await call("POST", "/api/agents", A, follow({ pipeline: "unknown" }))).statusCode).toBe(400);
    expect((await call("POST", "/api/agents", A, follow({ config: { wallet_address: "0x8b65" } }))).statusCode).toBe(400); // 0x tidak lengkap
    expect((await call("POST", "/api/agents", A, follow({ config: {} }))).statusCode).toBe(400); // wallet wajib untuk follow_wallet
    expect((await call("POST", "/api/agents", A, follow({ mode: "trading" }))).statusCode).toBe(400); // trading tanpa batas per trade
    const many = Object.fromEntries(Array.from({ length: 41 }, (_, i) => [`k${i}`, "v"]));
    expect((await call("POST", "/api/agents", A, follow({ config: { wallet_address: WALLET, ...many } }))).statusCode).toBe(400);
  });
});

describe("agents: siklus hidup dan isolasi", () => {
  let id = 0;

  it("membuat agent sinyal: jenis diturunkan, belum berjalan, eksekusi dry", async () => {
    const r = await call("POST", "/api/agents", A, follow());
    expect(r.statusCode).toBe(201);
    const a = r.json();
    id = a.id;
    expect(a).toMatchObject({ name: "Whale copy", type: "wallet_monitor", pipeline: "follow_wallet", mode: "signal", running: false, execution: "dry", chain: "robinhood", runs: 0, winRate: null });
    expect(a.config.wallet_address).toBe(WALLET);
  });

  it("mode trading dengan batas per trade menjadi copy_trader (tetap dry)", async () => {
    const r = await call("POST", "/api/agents", A, follow({ name: "Copy", mode: "trading", limits: { perTrade: "0.05" } }));
    expect(r.statusCode).toBe(201);
    expect(r.json()).toMatchObject({ type: "copy_trader", mode: "trading", execution: "dry" });
    expect(r.json().limits.perTrade).toBe("0.05");
  });

  it("pipeline lain: new_tokens = signal_bot, token_trading trading = auto_trader", async () => {
    const n = await call("POST", "/api/agents", A, { name: "New", pipeline: "new_tokens", mode: "signal", config: { min_lp_usd: "5000" } });
    expect(n.json().type).toBe("signal_bot");
    const t = await call("POST", "/api/agents", A, { name: "TT", pipeline: "token_trading", mode: "trading", config: { token_mint: MINT }, limits: { perTrade: "0.1" } });
    expect(t.json().type).toBe("auto_trader");
    expect(t.json().tokenSymbol).toBeNull(); // token belum terindeks
    // token_trading tanpa mint valid ditolak
    expect((await call("POST", "/api/agents", A, { name: "bad", pipeline: "token_trading", mode: "signal", config: {} })).statusCode).toBe(400);
  });

  it("daftar hanya milik sendiri; pengguna lain melihat kosong", async () => {
    const mine = (await call("GET", "/api/agents", A)).json().agents;
    expect(mine.length).toBe(4);
    expect(mine.every((x: { chain: string }) => x.chain === "robinhood")).toBe(true);
    expect((await call("GET", "/api/agents", B)).json().agents).toEqual([]);
  });

  it("pengguna lain tidak bisa melihat, mengubah, atau menghapus (404, bukan 403)", async () => {
    expect((await call("GET", `/api/agents/${id}`, B)).statusCode).toBe(404);
    expect((await call("PUT", `/api/agents/${id}`, B, { running: true })).statusCode).toBe(404);
    expect((await call("DELETE", `/api/agents/${id}`, B)).statusCode).toBe(404);
    expect((await call("GET", `/api/agents/${id}`, A)).json().running).toBe(false); // tidak berubah
  });

  it("pemilik: jeda/lanjut, ganti nama, hapus", async () => {
    const on = await call("PUT", `/api/agents/${id}`, A, { running: true, name: "Renamed" });
    expect(on.json()).toMatchObject({ running: true, name: "Renamed" });
    expect((await call("PUT", `/api/agents/${id}`, A, { running: false })).json().running).toBe(false);
    expect((await call("PUT", `/api/agents/${id}`, A, { name: "" })).statusCode).toBe(400);
    expect((await call("DELETE", `/api/agents/${id}`, A)).json()).toEqual({ ok: true });
    expect((await call("GET", `/api/agents/${id}`, A)).statusCode).toBe(404);
    expect((await call("DELETE", `/api/agents/${id}`, A)).statusCode).toBe(404);
  });

  it(`batas ${MAX_AGENTS_PER_USER} agent per pengguna: berikutnya 409`, async () => {
    let n = (await call("GET", "/api/agents", A)).json().agents.length;
    while (n < MAX_AGENTS_PER_USER) {
      expect((await call("POST", "/api/agents", A, follow({ name: `a${n}` }))).statusCode).toBe(201);
      n++;
    }
    const over = await call("POST", "/api/agents", A, follow());
    expect(over.statusCode).toBe(409);
    expect(over.json()).toEqual({ error: "agent_limit" });
    expect((await call("POST", "/api/agents", B, follow())).statusCode).toBe(201); // pengguna lain tidak terpengaruh
  });
});

describe("riwayat run agent", () => {
  it("lastRun di daftar, /runs berisi langkah terurut, milik orang lain 404", async () => {
    const mk = await call("POST", "/api/agents", B, follow({ name: "Runs" }));
    const id = mk.json().id;
    expect(mk.json().lastRun).toBeNull();
    const [r1] = await created.db.insert(agentRuns).values({ agentId: id, runNumber: 1, ranAt: new Date("2026-11-01T10:00:00Z"), ended: "blocked" }).returning();
    const [r2] = await created.db.insert(agentRuns).values({ agentId: id, runNumber: 2, ranAt: new Date("2026-11-01T11:00:00Z"), ended: "passed" }).returning();
    await created.db.insert(agentRunSteps).values([
      { runId: r2.id, stepName: "safety", detail: "", outcome: "passed", stepValues: { checked: "yes" }, sortOrder: 1 },
      { runId: r2.id, stepName: "market", detail: "new token", outcome: "passed", stepValues: { mint: MINT }, sortOrder: 0 },
      { runId: r1.id, stepName: "market", detail: "", outcome: "blocked", stepValues: {}, sortOrder: 0 },
    ]);
    const list = (await call("GET", "/api/agents", B)).json().agents.find((x: { id: number }) => x.id === id);
    expect(list).toMatchObject({ runs: 2, lastRun: { n: 2, at: Math.floor(Date.parse("2026-11-01T11:00:00Z") / 1000), ended: "passed" } });
    expect((await call("GET", `/api/agents/${id}`, B)).json().lastRun.n).toBe(2);
    const runs = (await call("GET", `/api/agents/${id}/runs`, B)).json().runs;
    expect(runs.map((x: { n: number }) => x.n)).toEqual([2, 1]); // terbaru dulu
    expect(runs[0].steps.map((x: { step: string }) => x.step)).toEqual(["market", "safety"]); // urut sortOrder
    expect(runs[0].steps[0]).toMatchObject({ detail: "new token", outcome: "passed", values: { mint: MINT } });
    expect((await call("GET", `/api/agents/${id}/runs?limit=1`, B)).json().runs).toHaveLength(1);
    // run di waktu yang sama: nomor terbesar dianggap terakhir
    await created.db.insert(agentRuns).values([
      { agentId: id, runNumber: 3, ranAt: new Date("2026-11-02T00:00:00Z"), ended: "stopped" },
      { agentId: id, runNumber: 4, ranAt: new Date("2026-11-02T00:00:00Z"), ended: "failed" },
    ]);
    expect((await call("GET", `/api/agents/${id}`, B)).json().lastRun).toMatchObject({ n: 4, ended: "failed" });
    const l2 = (await call("GET", "/api/agents", B)).json().agents.find((x: { id: number }) => x.id === id);
    expect(l2.lastRun.n).toBe(4);
    expect((await call("GET", `/api/agents/${id}/runs`, B)).json().runs.map((x: { n: number }) => x.n)).toEqual([4, 3, 2, 1]);
    expect((await call("GET", `/api/agents/${id}/runs?limit=0`, B)).statusCode).toBe(400);
    expect((await call("GET", `/api/agents/${id}/runs`, A)).statusCode).toBe(404); // bukan pemilik
    expect((await call("GET", `/api/agents/${id}/runs`)).statusCode).toBe(401);
  });
});

describe("inbox dan signals", () => {
  it("notifikasi welcome ada, read-all menandai terbaca, terpisah antar pengguna", async () => {
    const inbox = (await call("GET", "/api/inbox", A)).json().items;
    expect(inbox).toHaveLength(1);
    expect(inbox[0]).toMatchObject({ kind: "system", title: "Welcome to Corvid", read: false });
    expect((await call("POST", "/api/inbox/read-all", A)).json()).toEqual({ updated: 1 });
    expect((await call("GET", "/api/inbox", A)).json().items[0].read).toBe(true);
    expect((await call("POST", "/api/inbox/read-all", A)).json()).toEqual({ updated: 0 });
    // pengguna B tetap belum membaca
    expect((await call("GET", "/api/inbox", B)).json().items[0].read).toBe(false);
  });

  it("GET /api/signals publik, terbaru dulu", async () => {
    await created.db.insert(signals).values([
      { type: "new_token", mint: MINT, symbol: "BIRB", score: 0, at: new Date("2026-11-01T00:00:00Z") },
      { type: "new_token", mint: WALLET, symbol: "NEW", score: 0, at: new Date("2026-11-02T00:00:00Z") },
    ]);
    const r = await call("GET", "/api/signals");
    expect(r.statusCode).toBe(200);
    const s = r.json().signals;
    expect(s.map((x: { symbol: string }) => x.symbol)).toEqual(["NEW", "BIRB"]);
    expect(s[0]).toMatchObject({ type: "new_token", mint: WALLET, score: 0 });
  });

  it("GET /api/signals: Free hanya token baru yang sudah lewat 15 menit; Pro real-time + smart money", async () => {
    await created.db.insert(signals).values([
      { type: "new_token", mint: MINT, symbol: "FRESH", score: 0, at: new Date(Date.now() - 2 * 60_000) },
      { type: "wallet_buy", mint: MINT, symbol: "SMART", score: 90, at: new Date(Date.now() - 20 * 60_000) },
    ]);
    const anon = (await call("GET", "/api/signals")).json();
    expect(anon).toMatchObject({ access: "free", delayMinutes: 15 });
    const anonSyms = anon.signals.map((x: { symbol: string }) => x.symbol);
    expect(anonSyms).not.toContain("FRESH");
    expect(anonSyms).not.toContain("SMART");
    expect(anonSyms).toContain("NEW");
    // pengguna login tanpa Pro = sama dengan anonim
    expect((await call("GET", "/api/signals", B)).json().access).toBe("free");
    await created.db.update(profiles).set({ proUntil: new Date(Date.now() + 86_400_000) }).where(eq(profiles.id, B));
    const pro = (await call("GET", "/api/signals", B)).json();
    expect(pro).toMatchObject({ access: "pro", delayMinutes: 0 });
    const proSyms = pro.signals.map((x: { symbol: string }) => x.symbol);
    expect(proSyms).toEqual(expect.arrayContaining(["FRESH", "SMART", "NEW"]));
    expect(pro.signals[0].symbol).toBe("FRESH"); // terbaru dulu
    // Pro kedaluwarsa kembali ke Free
    await created.db.update(profiles).set({ proUntil: new Date(Date.now() - 1000) }).where(eq(profiles.id, B));
    expect((await call("GET", "/api/signals", B)).json().access).toBe("free");
    // token tidak sah = anonim
    const bad = await app.inject({ method: "GET", url: "/api/signals", headers: { authorization: "Bearer nope" } });
    expect(bad.json().access).toBe("free");
  });
});

describe("agents: edit pengaturan", () => {
  const EO = "33333333-3333-4333-8333-333333333333";
  const W2 = "0x00000000000000000000000000000000000000b2";
  const TOK = "0x00000000000000000000000000000000000000c3";
  let id: number;
  beforeAll(async () => {
    const r = await call("POST", "/api/agents", EO, { name: "Editable", pipeline: "token_trading", mode: "signal", config: { token_mint: TOK, trigger_type: "price_drop", trigger_threshold: "5", telegram: "false" } });
    id = r.json().id;
    await call("PUT", `/api/agents/${id}`, EO, { running: true });
  });

  it("mengganti config dan limits tanpa menghentikan agent, tanpa mengubah identitas atau jumlah run", async () => {
    const r = await call("PUT", `/api/agents/${id}`, EO, { config: { token_mint: TOK, trigger_type: "percent_change", trigger_threshold: "0.1", telegram: "true" } });
    expect(r.statusCode).toBe(200);
    expect(r.json()).toMatchObject({ running: true, pipeline: "token_trading", mode: "signal", runs: 0, config: { trigger_type: "percent_change", trigger_threshold: "0.1", telegram: "true", token_mint: TOK } });
  });

  it("nama saja tidak menyentuh config", async () => {
    const r = await call("PUT", `/api/agents/${id}`, EO, { name: "Renamed edit" });
    expect(r.json()).toMatchObject({ name: "Renamed edit", running: true, config: { trigger_threshold: "0.1" } });
  });

  it("alamat token terkunci: mengubah atau menghapusnya ditolak, config lama utuh", async () => {
    const other = "0x00000000000000000000000000000000000000d4";
    const a = await call("PUT", `/api/agents/${id}`, EO, { config: { token_mint: other, trigger_threshold: "9" } });
    expect(a.statusCode).toBe(400);
    expect(a.json()).toEqual({ error: "locked_field" });
    expect((await call("PUT", `/api/agents/${id}`, EO, { config: { trigger_threshold: "9" } })).statusCode).toBe(400);
    expect((await call("GET", `/api/agents/${id}`, EO)).json().config).toMatchObject({ token_mint: TOK, trigger_threshold: "0.1" });
  });

  it("huruf besar/kecil pada alamat dinormalkan ke nilai tersimpan", async () => {
    const r = await call("PUT", `/api/agents/${id}`, EO, { config: { token_mint: TOK.toUpperCase().replace("0X", "0x"), trigger_threshold: "2" } });
    expect(r.statusCode).toBe(200);
    expect(r.json().config.token_mint).toBe(TOK);
  });

  it("wallet sumber follow_wallet terkunci; mode trading tetap butuh batas per trade", async () => {
    const f = await call("POST", "/api/agents", EO, follow({ name: "F", mode: "trading", limits: { perTrade: "0.05" } }));
    const fid = f.json().id;
    expect((await call("PUT", `/api/agents/${fid}`, EO, { config: { wallet_address: W2 } })).json()).toEqual({ error: "locked_field" });
    expect((await call("PUT", `/api/agents/${fid}`, EO, { config: { wallet_address: WALLET, only_buys: "false" }, limits: { perTrade: "0" } })).statusCode).toBe(400);
    const ok = await call("PUT", `/api/agents/${fid}`, EO, { config: { wallet_address: WALLET, only_buys: "false" }, limits: { perTrade: "0.2" } });
    expect(ok.json()).toMatchObject({ mode: "trading", config: { only_buys: "false" }, limits: { perTrade: "0.2" } });
  });

  it("pengguna lain tidak bisa mengedit (404)", async () => {
    expect((await call("PUT", `/api/agents/${id}`, B, { config: { token_mint: TOK } })).statusCode).toBe(404);
  });
});
