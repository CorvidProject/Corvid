import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import EmbeddedPostgres from "embedded-postgres";
import { eq, sql } from "drizzle-orm";
import { applyMigrations, createDb, tokenCandles, tokenTrades, tokenTrending, tokens } from "@corvid/db";
import { refreshBoard, refreshCandles, refreshTrades, runRetention } from "../src/ingest";
import { createDexScreener } from "../src/sources/dexscreener";
import { createGeckoTerminal } from "../src/sources/geckoterminal";

const fx = (n: string) => fs.readFileSync(path.join(__dirname, "fixtures", n), "utf8");
const AMD = "DDmGnuvroxVrb7CSyjYcezFU8gnAfhKasg4ZZezmpump";
const json = (body: string) => new Response(body, { status: 200, headers: { "content-type": "application/json" } });
const fakeFetch = async (url: string) => {
  if (url.includes("/trending_pools")) return json(fx("gt-trending.json"));
  if (url.includes("/new_pools")) return json(fx("gt-new.json"));
  if (url.includes("/ohlcv/")) return json(fx("gt-ohlcv.json"));
  if (url.includes("/trades")) return json(fx("gt-trades.json"));
  if (url.includes("dexscreener.com/tokens/v1/solana/")) return json(fx("ds-tokens.json")); // hanya AMD ada di DexScreener
  return new Response("not found", { status: 404 });
};
const noSleep = async () => {};

const dir = "D:/.dev/tmp/pgtest-worker";
const port = 54331;
const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
let pgServer: EmbeddedPostgres;
let created: ReturnType<typeof createDb>;
const deps = () => ({
  db: created.db,
  gt: createGeckoTerminal({ fetch: fakeFetch, minIntervalMs: 0, sleep: noSleep }),
  ds: createDexScreener({ fetch: fakeFetch, minIntervalMs: 0, sleep: noSleep }),
});

beforeAll(async () => {
  fs.rmSync(dir, { recursive: true, force: true });
  pgServer = new EmbeddedPostgres({
    databaseDir: dir,
    user: "corvid",
    password: "corvid-dev",
    port,
    persistent: false,
    initdbFlags: ["--encoding=UTF8", "--locale=C"],
  });
  await pgServer.initialise();
  await pgServer.start();
  await pgServer.createDatabase("corvid");
  await applyMigrations(url);
  created = createDb(url);
}, 120_000);

afterAll(async () => {
  await created?.pool.end();
  await pgServer?.stop();
});

describe("siklus ingest (fetch palsu, Postgres nyata)", () => {
  it("refreshBoard(trending): upsert token, gabung DexScreener, simpan peringkat", async () => {
    const r = await refreshBoard(deps(), "trending");
    expect(r).toEqual({ tokens: 3, withDexScreener: 1 });
    const [amd] = await created.db.select().from(tokens).where(eq(tokens.mint, AMD));
    expect(amd.imageUrl).toMatch(/dexscreener/);
    expect(amd.poolId).toBe("7RD5YALHcMLUFKJ8FRePGd6ei11F15uXZF1rc7mPKeCv");
    expect(amd.buys).toBe(62060);
    expect(amd.riskScore).toBeNull(); // data keamanan butuh Helius: tidak dikarang
    const others = (await created.db.select().from(tokens)).filter((t) => t.mint !== AMD);
    expect(others).toHaveLength(2);
    for (const o of others) {
      expect(o.symbol).toBeTruthy(); // dari nama pool "X / SOL"
      expect(o.imageUrl).toBeNull();
      expect(o.priceUsd).not.toBeNull();
    }
    const rows = await created.db.select().from(tokenTrending).where(eq(tokenTrending.tab, "trending")).orderBy(tokenTrending.rank);
    expect(rows.map((x) => x.rank)).toEqual([1, 2, 3]);
  });

  it("siklus kedua tanpa DexScreener tidak menimpa kolom terisi dengan null", async () => {
    const failingDs = createDexScreener({ fetch: async () => new Response("x", { status: 404 }), minIntervalMs: 0, sleep: noSleep });
    await refreshBoard({ ...deps(), ds: failingDs }, "trending");
    const [amd] = await created.db.select().from(tokens).where(eq(tokens.mint, AMD));
    expect(amd.imageUrl).toMatch(/dexscreener/);
  });

  it("refreshBoard(new) mengisi tab new", async () => {
    await refreshBoard(deps(), "new");
    const rows = await created.db.select().from(tokenTrending).where(eq(tokenTrending.tab, "new"));
    expect(rows).toHaveLength(3);
  });

  it("refreshCandles: candle 15m tersimpan, ulang tidak menggandakan", async () => {
    const r1 = await refreshCandles(deps(), ["15m"], 5);
    expect(r1.errors).toBe(0);
    const count = async () =>
      Number((await created.db.execute(sql`select count(*)::int as n from token_candles where interval = '15m'`)).rows[0].n);
    const n1 = await count();
    expect(n1).toBeGreaterThanOrEqual(3);
    await refreshCandles(deps(), ["15m"], 5);
    expect(await count()).toBe(n1);
  });

  it("refreshTrades: trade tersimpan, unik per tx_hash", async () => {
    const r1 = await refreshTrades(deps(), 5);
    expect(r1.trades).toBeGreaterThan(0);
    const r2 = await refreshTrades(deps(), 5);
    expect(r2.trades).toBe(0);
  });

  it("runRetention: membuang trade lama dan candle lama, snapshot terbaru tetap", async () => {
    const future = new Date(Date.now() + 10 * 24 * 3600_000);
    const r = await runRetention(created.db, future);
    expect(r.trades).toBeGreaterThan(0);
    expect(r.candles5m15m).toBeGreaterThan(0);
    expect(await created.db.select().from(tokenTrades)).toHaveLength(0);
    const candles = await created.db.select().from(tokenCandles);
    expect(candles.filter((c) => c.interval === "15m")).toHaveLength(0);
    expect((await created.db.select().from(tokenTrending)).length).toBeGreaterThan(0);
  });
});
