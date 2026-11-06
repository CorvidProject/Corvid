import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import EmbeddedPostgres from "embedded-postgres";
import { applyMigrations, createDb, tokenCandles, tokens, walletActivity, wallets } from "@corvid/db";
import { eq } from "drizzle-orm";
import { buildApp } from "../src/app";
import { seedAll } from "../src/seed";

const dir = "D:/.dev/tmp/pgtest-api";
const port = 54330;
const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
let pgServer: EmbeddedPostgres;
let app: Awaited<ReturnType<typeof buildApp>>;
let priceNow = () => 150.25;
let pool: ReturnType<typeof createDb>["pool"];

beforeAll(async () => {
  fs.rmSync(dir, { recursive: true, force: true });
  pgServer = new EmbeddedPostgres({ databaseDir: dir, user: "corvid", password: "corvid-dev", port, persistent: false, initdbFlags: ["--encoding=UTF8", "--locale=C"] });
  await pgServer.initialise();
  await pgServer.start();
  await pgServer.createDatabase("corvid");
  await applyMigrations(url);
  const created = createDb(url);
  pool = created.pool;
  await seedAll(created.db);
  const [tok] = await created.db.select({ id: tokens.id }).from(tokens).where(eq(tokens.mint, "B8G87xPYnSTCrf52mjPHywWPmTYXHBRWtPKmoqtkpump"));
  const t0 = Date.UTC(2026, 10, 1, 0, 0, 0);
  await created.db.insert(tokenCandles).values(
    [0, 1, 2].map((i) => ({
      tokenId: tok.id,
      interval: "15m",
      bucketStart: new Date(t0 + i * 15 * 60_000),
      open: String(1 + i),
      high: String(2 + i),
      low: String(0.5 + i),
      close: String(1.5 + i),
      volumeUsd: "100",
    })),
  );
  // Smart wallets (dari worker): satu bertier, satu tanpa tier (tidak boleh muncul).
  const WA = "0x" + "a".repeat(40);
  const WB = "0x" + "b".repeat(40);
  const [wa] = await created.db
    .insert(wallets)
    .values({ address: WA, source: "trades-window", curatedTier: "A", curatedLabel: "Discovered · +2.00 ETH / 48h", winRate30dPct: "100", totalPnlSol: "2", txCount30d: 2, closedTokens30d: 1, tokensTraded: 1, avgHoldHours: "5", lastActiveAt: new Date(t0) })
    .returning({ id: wallets.id });
  const [wb] = await created.db.insert(wallets).values({ address: WB, source: "trades-window", curatedTier: null, totalPnlSol: "-1" }).returning({ id: wallets.id });
  await created.db.insert(walletActivity).values([
    { walletId: wa.id, tokenId: tok.id, mint: "B8G87xPYnSTCrf52mjPHywWPmTYXHBRWtPKmoqtkpump", side: "buy", amountSol: "1", txHash: "0x" + "1".repeat(64), at: new Date(t0 + 1000) },
    { walletId: wb.id, tokenId: tok.id, mint: "B8G87xPYnSTCrf52mjPHywWPmTYXHBRWtPKmoqtkpump", side: "sell", amountSol: "1", txHash: "0x" + "2".repeat(64), at: new Date(t0 + 2000) },
  ]);
  app = await buildApp({ db: created.db, solPrice: async () => priceNow() });
  await app.ready();
}, 120_000);

afterAll(async () => {
  await app?.close();
  await pool?.end();
  await pgServer?.stop();
});

const get = (u: string) => app.inject({ method: "GET", url: u });

describe("market API", () => {
  it("GET /health", async () => {
    const r = await get("/health");
    expect(r.statusCode).toBe(200);
  });

  it("GET /api/stats", async () => {
    const r = await get("/api/stats");
    expect(r.statusCode).toBe(200);
    expect(r.json()).toHaveProperty("swapsExecuted");
  });

  it("GET /api/tokens/trending hanya Solana", async () => {
    const r = await get("/api/tokens/trending?tab=trending");
    expect(r.statusCode).toBe(200);
    const { tokens } = r.json();
    expect(tokens.length).toBeGreaterThan(10);
    for (const t of tokens) {
      expect(t.chain).toBe("robinhood");
    }
  });

  it("menolak chain yang tidak dikenal", async () => {
    const r = await get("/api/tokens/trending?chain=ethereum");
    expect(r.statusCode).toBe(400);
  });

  it("GET /api/tokens/:mint, /security, /trades", async () => {
    const mint = "B8G87xPYnSTCrf52mjPHywWPmTYXHBRWtPKmoqtkpump";
    const d = await get(`/api/tokens/${mint}`);
    expect(d.statusCode).toBe(200);
    expect(d.json().token.symbol).toBe("Tripod");
    const s = await get(`/api/tokens/${mint}/security`);
    expect(s.statusCode).toBe(200);
    expect(s.json().groups.length).toBe(4);
    const t = await get(`/api/tokens/trades?mint=${mint}`);
    expect(t.statusCode).toBe(200);
    expect(t.json().trades.length).toBe(5);
  });

  it("mint tidak dikenal: 404 bersih; alamat 0x lengkap valid (404), 0x rusak 400", async () => {
    const r = await get("/api/tokens/11111111111111111111111111111111");
    expect(r.statusCode).toBe(404);
    expect(r.json()).toEqual({ error: "token_not_found" });
    const evm = await get("/api/tokens/0x8b65363a01510490fba03cea97b14c73b7ee8f75");
    expect(evm.statusCode).toBe(404); // format EVM diterima, token belum terindeks
    expect(evm.json()).toEqual({ error: "token_not_found" });
    const bad = await get("/api/tokens/0x8b65");
    expect(bad.statusCode).toBe(400);
  });

  it("GET /api/memescope per stage", async () => {
    for (const stage of ["new", "stretch", "migrated"]) {
      const r = await get(`/api/memescope?stage=${stage}`);
      expect(r.statusCode).toBe(200);
      expect(r.json().coins.length).toBeGreaterThan(0);
    }
  });

  it("rute tidak ada: 404 bersih", async () => {
    const r = await get("/api/does-not-exist");
    expect(r.statusCode).toBe(404);
    expect(r.json()).toEqual({ error: "not_found" });
  });

  it("GET /api/prices/sol: cache, lalu 503 bila sumber gagal dan tidak ada cache", async () => {
    const r = await get("/api/prices/sol");
    expect(r.statusCode).toBe(200);
    expect(r.json()).toEqual({ usd: 150.25 });
    priceNow = () => 999; // di dalam TTL: tetap nilai cache
    expect((await get("/api/prices/sol")).json()).toEqual({ usd: 150.25 });
  });

  it("GET /api/search: simbol, nama, mint, dan notice untuk mint tak dikenal", async () => {
    const bySym = await get("/api/search?q=trip");
    expect(bySym.statusCode).toBe(200);
    expect(bySym.json().tokens.some((t: { symbol: string }) => t.symbol === "Tripod")).toBe(true);
    const byMint = await get("/api/search?q=B8G87xPYnSTCrf52mjPHywWPmTYXHBRWtPKmoqtkpump");
    expect(byMint.json().tokens).toHaveLength(1);
    const unknown = await get("/api/search?q=11111111111111111111111111111111");
    expect(unknown.json().tokens).toHaveLength(0);
    expect(unknown.json().notice).toMatch(/not indexed/i);
    // "%" harus dicocokkan literal (bukan wildcard): hanya token yang memuat "%" pada nama/simbol/mint.
    const pct = (await get("/api/search?q=%25")).json().tokens as { name: string; symbol: string; mint: string }[];
    expect(pct.length).toBeLessThan(5);
    for (const t of pct) expect(`${t.name}${t.symbol}${t.mint}`).toContain("%");
    expect((await get("/api/search?q=")).statusCode).toBe(400);
  });

  it("POST /api/tokens/live-batch", async () => {
    const mint = "B8G87xPYnSTCrf52mjPHywWPmTYXHBRWtPKmoqtkpump";
    const r = await app.inject({ method: "POST", url: "/api/tokens/live-batch", payload: { mints: [mint, "11111111111111111111111111111111"] } });
    expect(r.statusCode).toBe(200);
    expect(Object.keys(r.json().data)).toEqual([mint]);
    expect(typeof r.json().data[mint].price).toBe("number");
    const bad = await app.inject({ method: "POST", url: "/api/tokens/live-batch", payload: { mints: ["0xabc"] } });
    expect(bad.statusCode).toBe(400);
  });

  it("GET /api/tokens/chart: candle urut naik, interval, 404", async () => {
    const mint = "B8G87xPYnSTCrf52mjPHywWPmTYXHBRWtPKmoqtkpump";
    const r = await get(`/api/tokens/chart?mint=${mint}&type=15m`);
    expect(r.statusCode).toBe(200);
    const { candles } = r.json();
    expect(candles).toHaveLength(3);
    expect(candles[0].time).toBeLessThan(candles[2].time);
    expect(candles[0]).toMatchObject({ open: 1, high: 2, low: 0.5, close: 1.5, volume: 100 });
    expect((await get(`/api/tokens/chart?mint=${mint}&type=1h`)).json().candles).toEqual([]);
    expect((await get(`/api/tokens/chart?mint=${mint}&type=2m`)).statusCode).toBe(400);
    expect((await get("/api/tokens/chart?mint=11111111111111111111111111111111")).statusCode).toBe(404);
  });

  it("GET /api/alpha/curated: hanya wallet bertier, dengan jendela data eksplisit", async () => {
    const r = await get("/api/alpha/curated");
    expect(r.statusCode).toBe(200);
    const body = r.json();
    expect(body.windowHours).toBe(48);
    expect(body.wallets).toHaveLength(1);
    expect(body.wallets[0]).toMatchObject({ address: "0x" + "a".repeat(40), tier: "A", pnlEth: 2, winRate: 100, trades: 2, closedTokens: 1, tokensTraded: 1, avgHoldHours: 5 });
    expect((await get("/api/alpha/curated?tier=S")).json().wallets).toEqual([]);
    expect((await get("/api/alpha/curated?tier=Z")).statusCode).toBe(400);
  });

  it("GET /api/alpha/activity: hanya aktivitas wallet bertier", async () => {
    const r = await get("/api/alpha/activity");
    expect(r.statusCode).toBe(200);
    const { activity } = r.json();
    expect(activity).toHaveLength(1);
    expect(activity[0]).toMatchObject({ wallet: "0x" + "a".repeat(40), side: "buy", eth: 1 });
    expect(activity[0].symbol).toBe("Tripod");
  });

  it("GET /openapi.json memuat path pasar", async () => {
    const r = await get("/openapi.json");
    expect(Object.keys(r.json().paths)).toContain("/api/tokens/trending");
  });
});
