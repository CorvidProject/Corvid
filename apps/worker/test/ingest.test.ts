import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import EmbeddedPostgres from "embedded-postgres";
import { eq, sql } from "drizzle-orm";
import { applyMigrations, createDb, signals, tokenCandles, tokenPricePoints, tokenTrades, tokenTrending, tokenWatch, tokens } from "@corvid/db";
import { errText, refreshBoard, refreshCandles, refreshHot, refreshHotCharts, refreshMissingImages, refreshSecurity, refreshStale, refreshTrades, runRetention, snapshotPrices } from "../src/ingest";
import { createDexScreener } from "../src/sources/dexscreener";
import { createGeckoTerminal } from "../src/sources/geckoterminal";
import { createGoPlus } from "../src/sources/goplus";
import { tokenSecurityChecks, tokenSecurityReports } from "@corvid/db";

const fx = (n: string) => fs.readFileSync(path.join(__dirname, "fixtures", n), "utf8");
const CASH = "0x020bfc650a365f8bb26819deaabf3e21291018b4";
const json = (body: string) => new Response(body, { status: 200, headers: { "content-type": "application/json" } });
const fakeFetch = async (url: string) => {
  if (url.includes("/trending_pools")) return json(fx("gt-trending.json"));
  if (url.includes("/new_pools")) return json(fx("gt-new.json"));
  if (url.includes("/ohlcv/")) return json(fx("gt-ohlcv.json"));
  if (url.includes("/trades")) return json(fx("gt-trades.json"));
  if (url.includes("api.gopluslabs.io/api/v1/token_security/4663")) return json(fx("goplus-cashcat.json"));
  if (url.includes("dexscreener.com/tokens/v1/robinhood/")) return json(fx("ds-tokens.json")); // hanya CASHCAT ada di DexScreener
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
  sec: createGoPlus({ fetch: fakeFetch, minIntervalMs: 0, sleep: noSleep }),
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
    expect(r).toEqual({ tokens: 3, withDexScreener: 1, newSignals: 0 }); // tab trending tidak membuat sinyal
    const [amd] = await created.db.select().from(tokens).where(eq(tokens.mint, CASH));
    expect(amd.imageUrl).toMatch(/dexscreener/);
    expect(amd.poolId).toBe("0xa70fc67c9f69da90b63a0e4c05d229954574e313"); // pasangan likuiditas tertinggi dari DexScreener
    expect(amd.buys).toBe(512);
    expect(amd.riskScore).toBeNull(); // data keamanan butuh Helius: tidak dikarang
    const others = (await created.db.select().from(tokens)).filter((t) => t.mint !== CASH);
    expect(others).toHaveLength(2);
    for (const o of others) {
      expect(o.symbol).toBeTruthy(); // dari nama pool "X / WETH"
      expect(o.imageUrl).toBeNull();
      expect(o.priceUsd).not.toBeNull();
    }
    const rows = await created.db.select().from(tokenTrending).where(eq(tokenTrending.tab, "trending")).orderBy(tokenTrending.rank);
    expect(rows.map((x) => x.rank)).toEqual([1, 2, 3]);
  });

  it("siklus kedua tanpa DexScreener tidak menimpa kolom terisi dengan null", async () => {
    const failingDs = createDexScreener({ fetch: async () => new Response("x", { status: 404 }), minIntervalMs: 0, sleep: noSleep });
    await refreshBoard({ ...deps(), ds: failingDs }, "trending");
    const [amd] = await created.db.select().from(tokens).where(eq(tokens.mint, CASH));
    expect(amd.imageUrl).toMatch(/dexscreener/);
  });

  it("refreshBoard(new) mengisi tab new dan membuat sinyal new_token sekali per token", async () => {
    const r1 = await refreshBoard(deps(), "new");
    expect(r1.newSignals).toBe(3);
    const rows = await created.db.select().from(tokenTrending).where(eq(tokenTrending.tab, "new"));
    expect(rows).toHaveLength(3);
    const sig = await created.db.select().from(signals);
    expect(sig).toHaveLength(3);
    expect(sig.every((x) => x.type === "new_token" && x.score === 0 && !!x.symbol)).toBe(true);
    // siklus berikutnya: token sudah dikenal, tidak ada sinyal ganda
    const r2 = await refreshBoard(deps(), "new");
    expect(r2.newSignals).toBe(0);
    expect(await created.db.select().from(signals)).toHaveLength(3);
  });

  it("refreshSecurity: skor, holders, laporan terbaru saja; token tak dikenal GoPlus tetap null", async () => {
    const r1 = await refreshSecurity(deps(), 10);
    expect(r1.checked).toBe(1); // hanya CASHCAT ada di respons GoPlus
    const [t] = await created.db.select().from(tokens).where(eq(tokens.mint, CASH));
    expect(t.riskScore).not.toBeNull();
    expect(t.holders).toBe(114625);
    expect(t.rugged).toBe(false);
    const others = (await created.db.select().from(tokens)).filter((x) => x.mint !== CASH);
    expect(others.every((o) => o.riskScore === null)).toBe(true); // tidak dikarang
    // ulang: laporan lama dibuang, tersisa satu
    await refreshSecurity(deps(), 10, { recheckMin: 0 });
    const reports = await created.db.select().from(tokenSecurityReports).where(eq(tokenSecurityReports.tokenId, t.id));
    expect(reports).toHaveLength(1);
    const checks = await created.db.select().from(tokenSecurityChecks);
    expect(checks.length).toBe(reports[0].total);
  });

  it("refreshSecurity: antrean berputar; token tak dikenal GoPlus dicap dan tidak menyumbat", async () => {
    const all = await created.db.select().from(tokens);
    const others = all.filter((x) => x.mint !== CASH);
    // semua token dianggap belum pernah dicek; token lain diberi volume lebih besar dari CASHCAT (meniru volume palsu)
    await created.db.update(tokens).set({ securityCheckedAt: null, lastSeenAt: new Date() });
    await created.db.update(tokens).set({ volumeUsd: "99999999" }).where(eq(tokens.id, others[0].id));
    const r1 = await refreshSecurity(deps(), 1, { recheckMin: 30 });
    expect(r1.checked + r1.unknown).toBe(1); // hanya satu dicoba
    const [first] = await created.db.select().from(tokens).where(eq(tokens.id, others[0].id));
    expect(first.securityCheckedAt).not.toBeNull();
    // putaran berikutnya melompati yang sudah dicap dan mengambil token lain, bukan mengulang yang sama
    const r2 = await refreshSecurity(deps(), 1, { recheckMin: 30 });
    expect(r2.checked + r2.unknown).toBe(1);
    const stamped = (await created.db.select().from(tokens)).filter((x) => x.securityCheckedAt !== null).length;
    expect(stamped).toBe(2);
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

  it("refreshMissingImages: mengisi logo token baru yang kosong, mengabaikan token lama", async () => {
    const recent = new Date(Date.now() - 10 * 60_000);
    await created.db.update(tokens).set({ imageUrl: null, createdAtChain: recent }).where(eq(tokens.mint, CASH));
    const r = await refreshMissingImages(deps());
    expect(r.filled).toBe(1);
    const [t] = await created.db.select().from(tokens).where(eq(tokens.mint, CASH));
    expect(t.imageUrl).toMatch(/dexscreener/);
    // token lebih dari 24 jam tidak dicek lagi
    await created.db.update(tokens).set({ imageUrl: null, createdAtChain: new Date(Date.now() - 48 * 3_600_000) }).where(eq(tokens.mint, CASH));
    expect((await refreshMissingImages(deps())).filled).toBe(0);
    const [old] = await created.db.select().from(tokens).where(eq(tokens.mint, CASH));
    expect(old.imageUrl).toBeNull();
  });

  it("refreshHot: hanya token yang sedang dibuka yang disegarkan", async () => {
    const [t] = await created.db.select().from(tokens).where(eq(tokens.mint, CASH));
    await created.db.update(tokens).set({ marketCapUsd: "1" }).where(eq(tokens.id, t.id));
    expect((await refreshHot(deps())).checked).toBe(0); // belum ada yang membuka
    expect(Number((await created.db.select().from(tokens).where(eq(tokens.id, t.id)))[0].marketCapUsd)).toBe(1);
    await created.db.insert(tokenWatch).values({ tokenId: t.id, lastViewedAt: new Date() }).onConflictDoNothing();
    const r = await refreshHot(deps());
    expect(r).toEqual({ checked: 1, updated: 1 });
    expect(Number((await created.db.select().from(tokens).where(eq(tokens.id, t.id)))[0].marketCapUsd)).toBeGreaterThan(1);
    // dibuka lebih dari 3 menit lalu: tidak lagi dianggap sedang dibuka
    await created.db.update(tokenWatch).set({ lastViewedAt: new Date(Date.now() - 10 * 60_000) }).where(eq(tokenWatch.tokenId, t.id));
    expect((await refreshHot(deps())).checked).toBe(0);
  });

  it("refreshHotCharts: candle dan trade token yang sedang dibuka", async () => {
    const [t] = await created.db.select().from(tokens).where(eq(tokens.mint, CASH));
    await created.db.update(tokenWatch).set({ lastViewedAt: new Date() }).where(eq(tokenWatch.tokenId, t.id));
    const r = await refreshHotCharts(deps(), ["15m"]);
    expect(r.tokens).toBe(1);
    expect(r.candles).toBeGreaterThan(0);
  });

  it("snapshotPrices: satu titik per token per jendela", async () => {
    const [t] = await created.db.select().from(tokens).where(eq(tokens.mint, CASH));
    await created.db.update(tokens).set({ updatedAt: new Date() }).where(eq(tokens.id, t.id));
    expect(await snapshotPrices(created.db)).toBeGreaterThanOrEqual(1);
    expect(await snapshotPrices(created.db)).toBe(0); // titik baru saja dicatat
  });

  it("refreshStale: token lama yang beku disegarkan dari DexScreener tanpa mengubah lastSeenAt", async () => {
    const old = new Date(Date.now() - 3_600_000);
    await created.db.update(tokens).set({ marketCapUsd: "1", updatedAt: old, lastSeenAt: old }).where(eq(tokens.mint, CASH));
    const r = await refreshStale(deps());
    expect(r.updated).toBe(1);
    const [t] = await created.db.select().from(tokens).where(eq(tokens.mint, CASH));
    expect(Number(t.marketCapUsd)).toBeGreaterThan(1);
    expect(t.lastSeenAt.getTime()).toBe(old.getTime());
    expect(t.updatedAt.getTime()).toBeGreaterThan(old.getTime());
    // token yang tidak ada di DexScreener tidak menyumbat antrean: updatedAt dicap sehingga tidak dipilih lagi
    const other = (await created.db.select().from(tokens)).find((x) => x.mint !== CASH)!;
    await created.db.update(tokens).set({ updatedAt: old }).where(eq(tokens.mint, other.mint));
    await refreshStale(deps());
    const [after] = await created.db.select().from(tokens).where(eq(tokens.mint, other.mint));
    expect(after.updatedAt.getTime()).toBeGreaterThan(old.getTime());
  });

  it("runRetention: membuang trade lama dan candle lama, snapshot terbaru tetap", async () => {
    const future = new Date(Date.now() + 10 * 24 * 3600_000);
    const r = await runRetention(created.db, future);
    expect(r.trades).toBeGreaterThan(0);
    expect(r.candles5m15m).toBeGreaterThan(0);
    expect(r.pricePoints).toBeGreaterThan(0); // titik harga > 24 jam dibuang
    expect(r.watch).toBeGreaterThan(0);
    expect(r.signals).toBe(3); // sinyal > 7 hari dibuang
    expect(await created.db.select().from(tokenTrades)).toHaveLength(0);
    const candles = await created.db.select().from(tokenCandles);
    expect(candles.filter((c) => c.interval === "15m")).toHaveLength(0);
    expect((await created.db.select().from(tokenTrending)).length).toBeGreaterThan(0);
  });
});

describe("errText", () => {
  it("memotong teks query dan menampilkan penyebab Postgres", () => {
    const e = Object.assign(new Error("Failed query: insert into token_candles (...)\nparams: 1,2,3"), { cause: { code: "22003", message: "numeric field overflow", detail: "A field with precision 38, scale 18 must round to an absolute value less than 10^20." } });
    const t = errText(e);
    expect(t).toContain("22003 numeric field overflow");
    expect(t).not.toContain("params");
    expect(t.length).toBeLessThanOrEqual(400);
    expect(errText(new Error("plain"))).toBe("plain");
  });
});
