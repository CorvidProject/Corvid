import { and, eq, gte, inArray, isNotNull, lt, notInArray, sql } from "drizzle-orm";
import { platformStats, signals, tokens, tokenTrades, walletActivity, wallets } from "@corvid/db";
import type { Db } from "./ingest";

// Penemuan "smart wallet" dari trade yang sudah dikumpulkan worker (token_trades, jendela pendek).
// PnL ini ESTIMASI, bukan riwayat penuh wallet:
//  - hanya trade dengan jumlah ETH diketahui (pool berpasangan WETH) dan hanya token yang diindeks worker;
//  - biaya rata-rata dihitung dari pembelian DI DALAM jendela; penjualan tanpa pembelian di jendela diabaikan (inventaris tidak diketahui).
// Kolom `*_30d` di tabel wallets memuat nilai jendela pengamatan (windowHours); API menyebut jendelanya secara eksplisit.

export type Tier = "S" | "A" | "B" | "C";
export interface TradeRow {
  wallet: string;
  mint: string;
  side: "buy" | "sell";
  tokenAmount: number;
  /** ETH; null bila pasangan bukan WETH */
  eth: number | null;
  at: Date;
}
export interface WalletScore {
  address: string;
  trades: number;
  tokensTraded: number;
  closedTokens: number;
  wins: number;
  winRate: number | null;
  pnlEth: number;
  avgHoldHours: number | null;
  lastActive: Date;
  tier: Tier | null;
}

/** Ambang tier (ETH realisasi dalam jendela). Hanya wallet ber-PnL positif dengan minimal satu token tertutup yang diberi tier. */
export function tierOf(s: { pnlEth: number; winRate: number | null; closedTokens: number }): Tier | null {
  if (s.closedTokens < 1 || s.pnlEth <= 0) return null;
  const win = s.winRate ?? 0;
  if (s.pnlEth >= 2 && win >= 60 && s.closedTokens >= 3) return "S";
  if (s.pnlEth >= 0.5 && win >= 50) return "A";
  if (s.pnlEth >= 0.1) return "B";
  return "C";
}

const HOUR = 3_600_000;
const ZERO = "0x0000000000000000000000000000000000000000";

export function scoreWallets(rows: TradeRow[]): WalletScore[] {
  const byWallet = new Map<string, TradeRow[]>();
  for (const r of rows) {
    if (r.wallet === ZERO) continue;
    (byWallet.get(r.wallet) ?? byWallet.set(r.wallet, []).get(r.wallet)!).push(r);
  }
  const out: WalletScore[] = [];
  for (const [address, list] of byWallet) {
    list.sort((a, b) => a.at.getTime() - b.at.getTime());
    const perToken = new Map<string, { inv: number; cost: number; firstBuy: number | null; realized: number; matched: boolean; lastMatchedSell: number }>();
    for (const t of list) {
      const p = perToken.get(t.mint) ?? perToken.set(t.mint, { inv: 0, cost: 0, firstBuy: null, realized: 0, matched: false, lastMatchedSell: 0 }).get(t.mint)!;
      if (t.eth === null || !(t.tokenAmount > 0)) continue;
      if (t.side === "buy") {
        p.inv += t.tokenAmount;
        p.cost += t.eth;
        p.firstBuy ??= t.at.getTime();
      } else if (p.inv > 0) {
        const sold = Math.min(t.tokenAmount, p.inv);
        const basis = p.cost * (sold / p.inv);
        p.realized += t.eth * (sold / t.tokenAmount) - basis;
        p.cost -= basis;
        p.inv -= sold;
        p.matched = true;
        p.lastMatchedSell = t.at.getTime();
      }
    }
    const closed = [...perToken.values()].filter((p) => p.matched);
    const wins = closed.filter((p) => p.realized > 0).length;
    const holds = closed.filter((p) => p.firstBuy !== null).map((p) => (p.lastMatchedSell - p.firstBuy!) / HOUR);
    const score: WalletScore = {
      address,
      trades: list.length,
      tokensTraded: perToken.size,
      closedTokens: closed.length,
      wins,
      winRate: closed.length ? Math.round((wins / closed.length) * 10_000) / 100 : null,
      pnlEth: closed.reduce((a, p) => a + p.realized, 0),
      avgHoldHours: holds.length ? Math.round((holds.reduce((a, b) => a + b, 0) / holds.length) * 100) / 100 : null,
      lastActive: list[list.length - 1].at,
      tier: null,
    };
    score.tier = tierOf(score);
    out.push(score);
  }
  return out;
}

export const WALLET_SOURCE = "trades-window";
/** Pembelian wallet bertier yang lebih tua dari ini tidak menjadi sinyal (mencegah banjir saat worker baru menyala). */
export const SIGNAL_WINDOW_MS = 30 * 60_000;
const fmtEth = (n: number) => `${n >= 0 ? "+" : ""}${n.toFixed(2)} ETH`;

/** Batas nilai satu trade yang nilai ETH-nya diturunkan dari harga USD; di atas ini dianggap anomali harga (nilai ETH pasti dari pool WETH tidak dibatasi). */
export const MAX_DERIVED_TRADE_USD = 1_000_000;

/**
 * Nilai ETH satu trade. Pool berpasangan WETH menyimpan jumlah ETH pasti. Pool lain (USDG, Uniswap v4, dll.) tidak punya jumlah
 * ETH, jadi nilainya diturunkan dari jumlah token x harga USD saat trade / harga ETH sekarang (perkiraan: harga ETH dianggap
 * tetap selama jendela; beli dan jual dikonversi dengan kurs yang sama sehingga PnL tetap konsisten).
 */
export function tradeEth(eth: string | number | null, tokenAmount: number, priceUsd: string | number | null, ethUsd: number | null): number | null {
  if (eth !== null && eth !== undefined) return Number(eth);
  if (!ethUsd || !(ethUsd > 0) || priceUsd === null || priceUsd === undefined) return null;
  const px = Number(priceUsd);
  if (!(px > 0) || !(tokenAmount > 0)) return null;
  const usd = tokenAmount * px;
  return usd <= MAX_DERIVED_TRADE_USD ? usd / ethUsd : null;
}

/**
 * Hitung ulang skor dari trade dalam jendela, simpan wallet bertier, dan isi aktivitas terbarunya.
 * Hanya wallet yang pernah membeli DAN menjual token yang sama di jendela yang ditarik dari database (hanya mereka yang bisa punya
 * PnL realisasi); ini menekan transfer data. `ethUsd` dipakai untuk trade tanpa jumlah ETH pasti (lihat tradeEth).
 */
export async function refreshWallets(
  db: Db,
  opts: { windowHours?: number; activityHours?: number; now?: Date; ethUsd?: number | null } = {},
): Promise<{ trades: number; wallets: number; tiered: number; activity: number }> {
  const now = opts.now ?? new Date();
  const windowHours = opts.windowHours ?? 48;
  const ethUsd = opts.ethUsd ?? null;
  const since = new Date(now.getTime() - windowHours * HOUR);
  const rows = await db
    .select({
      wallet: tokenTrades.walletAddress,
      tokenId: tokenTrades.tokenId,
      side: tokenTrades.side,
      tokenAmount: tokenTrades.tokenAmount,
      eth: tokenTrades.ethAmount,
      priceUsd: tokenTrades.priceUsd,
      at: tokenTrades.tradedAt,
    })
    .from(tokenTrades)
    .where(
      and(
        gte(tokenTrades.tradedAt, since),
        sql`${tokenTrades.walletAddress} in (select wallet_address from (select wallet_address, token_id from token_trades where traded_at >= ${since} group by wallet_address, token_id having count(distinct side) = 2) rt)`,
      ),
    )
    .limit(150_000);

  const scores = scoreWallets(rows.map((r) => ({ wallet: r.wallet.toLowerCase(), mint: String(r.tokenId), side: r.side, tokenAmount: Number(r.tokenAmount), eth: tradeEth(r.eth, Number(r.tokenAmount), r.priceUsd, ethUsd), at: r.at })));
  const tiered = scores.filter((s) => s.tier !== null);

  const idByAddr = new Map<string, number>();
  const tierByAddr = new Map(tiered.map((s) => [s.address, s.tier]));
  for (const s of tiered) {
    const v = {
      address: s.address,
      source: WALLET_SOURCE,
      category: "discovered",
      curatedTier: s.tier,
      curatedLabel: `Discovered · ${fmtEth(s.pnlEth)} / ${windowHours}h`,
      winRate30dPct: s.winRate === null ? null : s.winRate.toFixed(2),
      totalPnlEth: s.pnlEth.toFixed(6),
      txCount30d: s.trades,
      closedTokens30d: s.closedTokens,
      tokensTraded: s.tokensTraded,
      avgHoldHours: s.avgHoldHours === null ? null : s.avgHoldHours.toFixed(2),
      lastActiveAt: s.lastActive,
      lastRefreshedAt: now,
    };
    const [row] = await db.insert(wallets).values(v).onConflictDoUpdate({ target: wallets.address, set: v }).returning({ id: wallets.id });
    idByAddr.set(s.address, row.id);
  }
  // Wallet yang tidak lagi memenuhi syarat kehilangan tier (tidak dihapus: riwayatnya masih berguna).
  const keep = [...idByAddr.values()];
  await db
    .update(wallets)
    .set({ curatedTier: null })
    .where(and(eq(wallets.source, WALLET_SOURCE), keep.length ? notInArray(wallets.id, keep) : sql`true`));

  // Penghitung "smart wallets" di statistik landing = jumlah wallet bertier saat ini.
  await db.insert(platformStats).values({ id: 1, smartWallets: tiered.length }).onConflictDoUpdate({ target: platformStats.id, set: { smartWallets: tiered.length } });

  // Aktivitas hanya untuk wallet bertier dan hanya jendela pendek (activityHours): riwayat lama sudah tercatat putaran sebelumnya.
  const actSince = new Date(now.getTime() - (opts.activityHours ?? windowHours) * HOUR);
  const activity = await syncActivity(db, idByAddr, tierByAddr, actSince, now, ethUsd);
  return { trades: rows.length, wallets: scores.length, tiered: tiered.length, activity };
}


/** Catat aktivitas (dan sinyal tier S/A) wallet bertier dari trade sejak `since`. Hanya baris baru yang masuk (on conflict do nothing). */
async function syncActivity(db: Db, idByAddr: Map<string, number>, tierByAddr: Map<string, string | null>, since: Date, now: Date, ethUsd: number | null): Promise<number> {
  const tieredAddrs = [...idByAddr.keys()];
  const actRows: {
    wallet: string; tokenId: number; mint: string; symbol: string | null; side: "buy" | "sell"; tokenAmount: string; eth: number | null; txHash: string; at: Date;
  }[] = [];
  for (let i = 0; i < tieredAddrs.length; i += 300) {
    const part = await db
      .select({
        wallet: tokenTrades.walletAddress,
        tokenId: tokenTrades.tokenId,
        mint: tokens.mint,
        symbol: tokens.symbol,
        side: tokenTrades.side,
        tokenAmount: tokenTrades.tokenAmount,
        eth: tokenTrades.ethAmount,
        priceUsd: tokenTrades.priceUsd,
        txHash: tokenTrades.txHash,
        at: tokenTrades.tradedAt,
      })
      .from(tokenTrades)
      .innerJoin(tokens, eq(tokens.id, tokenTrades.tokenId))
      .where(and(gte(tokenTrades.tradedAt, since), inArray(tokenTrades.walletAddress, tieredAddrs.slice(i, i + 300))));
    for (const r of part) {
      const eth = tradeEth(r.eth, Number(r.tokenAmount), r.priceUsd, ethUsd);
      if (eth !== null) actRows.push({ wallet: r.wallet, tokenId: r.tokenId, mint: r.mint, symbol: r.symbol, side: r.side, tokenAmount: r.tokenAmount, eth, txHash: r.txHash, at: r.at });
    }
  }
  let activity = 0;
  for (const r of actRows) {
    const walletId = idByAddr.get(r.wallet.toLowerCase());
    if (!walletId) continue;
    const res = await db
      .insert(walletActivity)
      .values({ walletId, tokenId: r.tokenId, mint: r.mint, side: r.side, amountEth: r.eth === null ? null : r.eth.toFixed(9), txHash: r.txHash, at: r.at })
      .onConflictDoNothing()
      .returning({ id: walletActivity.id });
    activity += res.length;
    // Sinyal premium: pembelian BARU oleh wallet tier S/A dalam SIGNAL_WINDOW_MS terakhir (riwayat lama tidak memicu sinyal).
    const tier = tierByAddr.get(r.wallet.toLowerCase());
    if (res.length && r.side === "buy" && r.eth !== null && (tier === "S" || tier === "A") && now.getTime() - r.at.getTime() <= SIGNAL_WINDOW_MS) {
      await db.insert(signals).values({ type: "wallet_buy", mint: r.mint, symbol: r.symbol ?? null, score: tier === "S" ? 90 : 75, walletTier: tier, at: r.at });
    }
  }
  return activity;
}

/**
 * Jalur ringan: hanya aktivitas/sinyal wallet yang SUDAH bertier, dari trade `hours` jam terakhir. Tidak menghitung ulang skor,
 * jadi baris yang ditarik dari database kecil (skoring penuh jarang dijalankan).
 */
export async function refreshWalletActivity(db: Db, opts: { hours?: number; now?: Date; ethUsd?: number | null } = {}): Promise<{ wallets: number; activity: number }> {
  const now = opts.now ?? new Date();
  const tiered = await db.select({ id: wallets.id, address: wallets.address, tier: wallets.curatedTier }).from(wallets).where(and(eq(wallets.source, WALLET_SOURCE), isNotNull(wallets.curatedTier)));
  const idByAddr = new Map(tiered.map((w) => [w.address.toLowerCase(), w.id]));
  const tierByAddr = new Map(tiered.map((w) => [w.address.toLowerCase(), w.tier as string | null]));
  const activity = await syncActivity(db, idByAddr, tierByAddr, new Date(now.getTime() - (opts.hours ?? 1) * HOUR), now, opts.ethUsd ?? null);
  return { wallets: tiered.length, activity };
}

/** Retensi: aktivitas lama dan wallet hasil penemuan yang lama tidak diperbarui. */
export async function pruneWallets(db: Db, now = new Date()): Promise<{ activity: number; wallets: number }> {
  const activity = await db.delete(walletActivity).where(lt(walletActivity.at, new Date(now.getTime() - 48 * HOUR))).returning({ id: walletActivity.id });
  const old = await db
    .delete(wallets)
    .where(and(eq(wallets.source, WALLET_SOURCE), lt(wallets.lastRefreshedAt, new Date(now.getTime() - 7 * 24 * HOUR))))
    .returning({ id: wallets.id });
  return { activity: activity.length, wallets: old.length };
}
