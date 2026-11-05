import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import EmbeddedPostgres from "embedded-postgres";
import { eq } from "drizzle-orm";
import { applyMigrations, createDb, tokenTrades, walletActivity, wallets } from "@corvid/db";
import { upsertToken } from "../src/ingest";
import { pruneWallets, refreshWallets, scoreWallets, tierOf, type TradeRow } from "../src/wallets";

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
  const port = 54333;
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
      solAmount: eth === null ? null : String(eth),
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
    expect(Number(rows[0].totalPnlSol)).toBeCloseTo(2, 5);
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
});
