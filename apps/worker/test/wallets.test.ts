import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import EmbeddedPostgres from "embedded-postgres";
import { eq } from "drizzle-orm";
import { applyMigrations, createDb, signals, tokenTrades, walletActivity, wallets } from "@corvid/db";
import { upsertToken } from "../src/ingest";
import { MAX_DERIVED_TRADE_USD, pruneWallets, refreshWallets, scoreWallets, SIGNAL_WINDOW_MS, tierOf, tradeEth, type TradeRow } from "../src/wallets";

const T0 = Date.UTC(2026, 10, 4, 0, 0, 0);
const at = (h: number) => new Date(T0 + h * 3_600_000);
const W = (n: number) => "0x" + n.toString(16).padStart(40, "0");
const MINT = (n: number) => "0x" + (0xa00 + n).toString(16).padStart(40, "0");
const tr = (wallet: string, mint: string, side: "buy" | "sell", tokenAmount: number, eth: number | null, h: number): TradeRow => ({ wallet, mint, side, tokenAmount, eth, at: at(h) });
const one = (rows: TradeRow[], wallet: string) => scoreWallets(rows).find((s) => s.address === wallet)!;

describe("scoreWallets (biaya rata-rata, hanya pembelian dalam jendela)", () => {
  it("beli 1 ETH, jual semua 3 ETH → +2 ETH, win 100%, tier A (token tertutup baru 1)", () => {
    const s = one([tr(W(1), MINT(1), "buy", 1000, 1, 0), tr(W(1), MINT(1), "sell", 1000, 3, 5)], W(1));
    expect(s.pnlEth).toBeCloseTo(2, 9);
    expect(s).toMatchObject({ closedTokens: 1, wins: 1, winRate: 100, trades: 2, tokensTraded: 1, tier: "A" });
    expect(s.avgHoldHours).toBe(5);
  });
  it("jual sebagian: biaya dibagi proporsional", () => {
    const s = one([tr(W(2), MINT(1), "buy", 1000, 1, 0), tr(W(2), MINT(1), "sell", 500, 0.8, 1)], W(2));
    expect(s.pnlEth).toBeCloseTo(0.3, 9); // 0,8 - 0,5
    expect(s.tier).toBe("B");
  });
  it("penjualan tanpa pembelian di jendela diabaikan (inventaris tidak diketahui)", () => {
    const s = one([tr(W(3), MINT(1), "sell", 1000, 5, 0)], W(3));
    expect(s).toMatchObject({ closedTokens: 0, pnlEth: 0, winRate: null, tier: null, trades: 1 });
  });
  it("rugi: tidak diberi tier, win 0%", () => {
    const s = one([tr(W(4), MINT(1), "buy", 1000, 2, 0), tr(W(4), MINT(1), "sell", 1000, 1, 1)], W(4));
    expect(s.pnlEth).toBeCloseTo(-1, 9);
    expect(s).toMatchObject({ winRate: 0, tier: null });
  });
  it("trade tanpa jumlah ETH dihitung sebagai trade tapi tidak masuk PnL", () => {
    const s = one([tr(W(5), MINT(1), "buy", 1000, null, 0), tr(W(5), MINT(1), "sell", 1000, 3, 1)], W(5));
    expect(s).toMatchObject({ trades: 2, closedTokens: 0, tier: null });
  });
  it("tier S: PnL ≥ 2 ETH, win ≥ 60%, ≥ 3 token tertutup", () => {
    const rows = [1, 2, 3].flatMap((m) => [tr(W(6), MINT(m), "buy", 100, 1, m), tr(W(6), MINT(m), "sell", 100, 2, m + 1)]);
    const s = one(rows, W(6));
    expect(s).toMatchObject({ closedTokens: 3, wins: 3, tier: "S" });
    expect(s.pnlEth).toBeCloseTo(3, 9);
  });
  it("tierOf: batas", () => {
    expect(tierOf({ pnlEth: 0.05, winRate: 100, closedTokens: 2 })).toBe("C");
    expect(tierOf({ pnlEth: 0.1, winRate: 10, closedTokens: 2 })).toBe("B");
    expect(tierOf({ pnlEth: 0.5, winRate: 50, closedTokens: 2 })).toBe("A");
    expect(tierOf({ pnlEth: 5, winRate: 90, closedTokens: 2 })).toBe("A"); // S butuh ≥ 3 token tertutup
    expect(tierOf({ pnlEth: -1, winRate: 0, closedTokens: 2 })).toBeNull();
    expect(tierOf({ pnlEth: 1, winRate: null, closedTokens: 0 })).toBeNull();
  });
  it("alamat nol diabaikan", () => {
    expect(scoreWallets([tr("0x" + "0".repeat(40), MINT(1), "buy", 1, 1, 0)])).toEqual([]);
  });
});

describe("refreshWallets (Postgres)", () => {
  const dir = "D:/.dev/tmp/pgtest-wallets";
  const port = 54340;
  const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
  let pg: EmbeddedPostgres;
  let created: ReturnType<typeof createDb>;
  const NOW = new Date(T0 + 24 * 3_600_000);

  beforeAll(async () => {
    fs.rmSync(dir, { recursive: true, force: true });
    pg = new EmbeddedPostgres({ databaseDir: dir, user: "corvid", password: "corvid-dev", port, persistent: false, initdbFlags: ["--encoding=UTF8", "--locale=C"] });
    await pg.initialise();
    await pg.start();
    await pg.createDatabase("corvid");
    await applyMigrations(url);
    created = createDb(url);
    const { id } = await upsertToken(created.db, { mint: MINT(1), symbol: "TST", name: "Test" }, NOW);
    const t = (n: number, wallet: string, side: "buy" | "sell", amount: number, eth: number | null, h: number) => ({
      tokenId: id,
      txHash: "0x" + n.toString(16).padStart(64, "0"),
      walletAddress: wallet,
      side,
      tokenAmount: String(amount),
      ethAmount: eth === null ? null : String(eth),
      tradedAt: at(h),
    });
    await created.db.insert(tokenTrades).values([
      t(1, W(1), "buy", 1000, 1, 2),
      t(2, W(1), "sell", 1000, 3, 6), // W1 +2 ETH → tier A
      t(3, W(2), "buy", 1000, 2, 3),
      t(4, W(2), "sell", 1000, 1, 4), // W2 rugi → tanpa tier
      t(5, W(3), "buy", 1000, 1, -100), // di luar jendela 48 jam
    ]);
  }, 120_000);
  afterAll(async () => {
    await created?.pool.end();
    await pg?.stop();
  });

  it("menyimpan hanya wallet bertier, dengan aktivitasnya; idempoten", async () => {
    const res = await refreshWallets(created.db, { now: NOW, windowHours: 48 });
    expect(res).toMatchObject({ trades: 4, wallets: 2, tiered: 1, activity: 2 });
    const rows = await created.db.select().from(wallets);
    expect(rows).toHaveLength(1);
    expect(rows[0]).toMatchObject({ address: W(1), curatedTier: "A", source: "trades-window", closedTokens30d: 1, txCount30d: 2 });
    expect(Number(rows[0].totalPnlEth)).toBeCloseTo(2, 5);
    expect(rows[0].curatedLabel).toBe("Discovered · +2.00 ETH / 48h");
    const again = await refreshWallets(created.db, { now: NOW, windowHours: 48 });
    expect(again.activity).toBe(0); // tx_hash unik: tidak digandakan
    expect(await created.db.select().from(walletActivity)).toHaveLength(2);
  });

  it("wallet yang tidak lagi memenuhi syarat kehilangan tier; retensi membuang aktivitas lama", async () => {
    await refreshWallets(created.db, { now: new Date(T0 + 24 * 3_600_000 + 100 * 3_600_000), windowHours: 48 }); // semua trade keluar dari jendela
    const [w] = await created.db.select().from(wallets).where(eq(wallets.address, W(1)));
    expect(w.curatedTier).toBeNull();
    const pr = await pruneWallets(created.db, new Date(T0 + 24 * 3_600_000 + 100 * 3_600_000));
    expect(pr.activity).toBe(2);
  });

  it("sinyal premium wallet_buy: hanya pembelian BARU wallet tier S/A dalam 30 menit; tanpa duplikat", async () => {
    const NOW2 = new Date(T0 + 400 * 3_600_000);
    const m = (min: number) => new Date(NOW2.getTime() - min * 60_000);
    const { id: t1 } = await upsertToken(created.db, { mint: MINT(7), symbol: "AAA", name: "A" }, NOW2);
    const { id: t2 } = await upsertToken(created.db, { mint: MINT(8), symbol: "BBB", name: "B" }, NOW2);
    const row = (n: number, tokenId: number, wallet: string, side: "buy" | "sell", eth: number, when: Date) => ({
      tokenId,
      txHash: "0x" + (1000 + n).toString(16).padStart(64, "0"),
      walletAddress: wallet,
      side,
      tokenAmount: "1000",
      ethAmount: String(eth),
      tradedAt: when,
    });
    await created.db.insert(tokenTrades).values([
      row(1, t1, W(4), "buy", 1, m(180)), // W4 menutup token AAA dengan untung → tier A
      row(2, t1, W(4), "sell", 4, m(120)),
      row(3, t2, W(4), "buy", 1.5, m(10)), // pembelian baru → sinyal
      row(4, t2, W(4), "buy", 1, m(60)), // lebih tua dari 30 menit → bukan sinyal
      row(5, t2, W(5), "buy", 2, m(5)), // W5 tanpa tier (belum ada token tertutup) → bukan sinyal
      row(6, t2, W(4), "sell", 1, m(3)), // penjualan → bukan sinyal
    ]);
    const res = await refreshWallets(created.db, { now: NOW2, windowHours: 48 });
    expect(res.tiered).toBe(1);
    const sigs = await created.db.select().from(signals).where(eq(signals.type, "wallet_buy"));
    expect(sigs).toHaveLength(1);
    expect(sigs[0]).toMatchObject({ mint: MINT(8), symbol: "BBB", score: 75 });
    expect(NOW2.getTime() - sigs[0].at.getTime()).toBeLessThanOrEqual(SIGNAL_WINDOW_MS);
    await refreshWallets(created.db, { now: NOW2, windowHours: 48 });
    expect(await created.db.select().from(signals).where(eq(signals.type, "wallet_buy"))).toHaveLength(1); // idempoten
  });
});

describe("tradeEth", () => {
  it("memakai jumlah ETH pasti bila ada, termasuk nol", () => {
    expect(tradeEth("1.5", 100, "999", 2000)).toBe(1.5);
    expect(tradeEth(0, 100, "999", 2000)).toBe(0);
  });
  it("menurunkan ETH dari token x harga USD / harga ETH bila jumlah ETH tidak ada", () => {
    expect(tradeEth(null, 1000, "0.5", 2000)).toBeCloseTo(0.25, 9); // $500 / $2000
  });
  it("null bila harga ETH, harga token, atau jumlah tidak valid", () => {
    expect(tradeEth(null, 1000, "0.5", null)).toBeNull();
    expect(tradeEth(null, 1000, null, 2000)).toBeNull();
    expect(tradeEth(null, 1000, "0", 2000)).toBeNull();
    expect(tradeEth(null, 0, "0.5", 2000)).toBeNull();
    expect(tradeEth(null, 1000, "abc", 2000)).toBeNull();
  });
  it("membuang nilai turunan yang tidak masuk akal (anomali harga)", () => {
    expect(tradeEth(null, 1e12, "1", 2000)).toBeNull();
    expect(tradeEth(null, MAX_DERIVED_TRADE_USD, "1", 2000)).not.toBeNull();
    expect(tradeEth("5000", 1e12, "1", 2000)).toBe(5000); // nilai pasti tidak dibatasi
  });
});

describe("refreshWallets: trade berpasangan USDG/v4 (tanpa jumlah ETH) ikut dihitung lewat harga USD", () => {
  const dir = "D:/.dev/tmp/pgtest-wallets-usd";
  const port = 54343;
  const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
  let pg: EmbeddedPostgres;
  let created: ReturnType<typeof createDb>;
  const NOW = new Date(T0 + 24 * 3_600_000);

  beforeAll(async () => {
    fs.rmSync(dir, { recursive: true, force: true });
    pg = new EmbeddedPostgres({ databaseDir: dir, user: "corvid", password: "corvid-dev", port, persistent: false, initdbFlags: ["--encoding=UTF8", "--locale=C"] });
    await pg.initialise();
    await pg.start();
    await pg.createDatabase("corvid");
    await applyMigrations(url);
    created = createDb(url);
    const { id } = await upsertToken(created.db, { mint: MINT(21), symbol: "USD1", name: "Usd" }, NOW);
    const { id: id2 } = await upsertToken(created.db, { mint: MINT(22), symbol: "ONLYBUY", name: "Only buy" }, NOW);
    const t = (n: number, tokenId: number, wallet: string, side: "buy" | "sell", amount: number, price: string, h: number) => ({
      tokenId,
      txHash: "0x" + (5000 + n).toString(16).padStart(64, "0"),
      walletAddress: wallet,
      side,
      tokenAmount: String(amount),
      ethAmount: null,
      priceUsd: price,
      tradedAt: at(h),
    });
    await created.db.insert(tokenTrades).values([
      t(1, id, W(11), "buy", 1000, "0.5", 2), // $500
      t(2, id, W(11), "sell", 1000, "1.5", 6), // $1500: untung $1000 = 0,5 ETH pada ETH $2000
      t(3, id2, W(12), "buy", 1000, "1", 3), // hanya beli: tidak ditarik dan tidak punya PnL
      t(4, id, W(13), "buy", 1000, "1e12", 3), // harga anomali
      t(5, id, W(13), "sell", 1000, "1e12", 4),
    ]);
  }, 120_000);
  afterAll(async () => {
    await created?.pool.end();
    await pg?.stop();
  });

  it("menghitung PnL dari harga USD dan membuang anomali", async () => {
    const res = await refreshWallets(created.db, { now: NOW, windowHours: 48, ethUsd: 2000 });
    expect(res.tiered).toBe(1);
    const rows = await created.db.select().from(wallets);
    expect(rows).toHaveLength(1);
    expect(rows[0].address).toBe(W(11));
    expect(Number(rows[0].totalPnlEth)).toBeCloseTo(0.5, 6);
    expect(rows[0].curatedTier).toBe("A"); // 0,5 ETH dan win rate 100%: tier A
    expect(res.activity).toBe(2);
  });

  it("tanpa harga ETH, trade tanpa jumlah ETH diabaikan (tidak ada yang dikarang)", async () => {
    await created.db.delete(wallets);
    const res = await refreshWallets(created.db, { now: NOW, windowHours: 48, ethUsd: null });
    expect(res.tiered).toBe(0);
    expect(await created.db.select().from(wallets)).toHaveLength(0);
  });
});
