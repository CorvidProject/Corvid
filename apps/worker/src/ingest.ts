import { and, gt as gtOp, isNotNull, sql } from "drizzle-orm";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import {
  signals,
  tokenCandles,
  tokenSecurityChecks,
  tokenSecurityGroups,
  tokenSecurityMetrics,
  tokenSecurityReports,
  tokenTrades,
  tokenTrending,
  tokens,
  type schema,
} from "@corvid/db";
import { eq, and as andOp, ne } from "drizzle-orm";
import type { GoPlus } from "./sources/goplus";
import type { DexScreener, DsToken } from "./sources/dexscreener";
import type { ChartInterval, GeckoTerminal, Pool } from "./sources/geckoterminal";

export type Db = NodePgDatabase<typeof schema>;
export interface Deps {
  db: Db;
  gt: GeckoTerminal;
  ds: DexScreener;
  /** Data keamanan token (GoPlus). Opsional agar tes/siklus lain tidak wajib menyediakannya. */
  sec?: GoPlus;
  now?: () => Date;
  log?: (msg: string) => void;
}
const logOf = (d: Deps) => d.log ?? (() => {});

type TokenValues = typeof tokens.$inferInsert;

const symbolFromPoolName = (name: string | null) => (name ? name.split(" / ")[0].trim() || null : null);

/** Gabungkan data pool (GeckoTerminal) dengan DexScreener; DexScreener diutamakan bila ada. */
export function mergeToken(pool: Pool, ds: DsToken | undefined): TokenValues {
  const fromName = symbolFromPoolName(pool.name);
  const buys = ds?.buys24h ?? pool.buys24h;
  const sells = ds?.sells24h ?? pool.sells24h;
  return {
    mint: pool.baseMint,
    name: ds?.name ?? fromName,
    symbol: ds?.symbol ?? fromName,
    imageUrl: ds?.image ?? null,
    dex: ds?.dex ?? pool.dex,
    poolId: ds?.poolAddress ?? pool.poolAddress,
    priceUsd: ds?.priceUsd ?? pool.priceUsd,
    marketCapUsd: ds?.marketCapUsd ?? pool.marketCapUsd,
    liquidityUsd: ds?.liquidityUsd ?? pool.liquidityUsd,
    volumeUsd: ds?.volume24hUsd ?? pool.volume24hUsd,
    volume1hUsd: ds?.volume1hUsd ?? pool.volume1hUsd,
    change5mPct: ds?.change5m ?? pool.change5m,
    change1hPct: ds?.change1h ?? pool.change1h,
    change6hPct: ds?.change6h ?? pool.change6h,
    change24hPct: ds?.change24h ?? pool.change24h,
    buys,
    sells,
    txns: buys != null && sells != null ? buys + sells : null,
    twitterUrl: ds?.twitter ?? null,
    telegramUrl: ds?.telegram ?? null,
    websiteUrl: ds?.website ?? null,
    createdAtChain: ds?.createdAt ?? pool.createdAt,
  };
}

/** Upsert tanpa menimpa kolom yang sudah terisi dengan null. Kolom keamanan (risk, holders, dll.) tidak disentuh. */
export async function upsertToken(db: Db, v: TokenValues, now: Date): Promise<{ id: number; inserted: boolean }> {
  const set: Record<string, unknown> = { updatedAt: now, lastSeenAt: now };
  for (const [k, val] of Object.entries(v)) if (k !== "mint" && val !== null && val !== undefined) set[k] = val;
  const [row] = await db.insert(tokens).values({ ...v, lastSeenAt: now, updatedAt: now }).onConflictDoUpdate({ target: tokens.mint, set }).returning({ id: tokens.id, inserted: sql<boolean>`(xmax = 0)` });
  return { id: row.id, inserted: row.inserted };
}

/** Perbarui papan token (tab trending/new) dan simpan snapshot peringkat. */
export async function refreshBoard(deps: Deps, tab: "trending" | "new", limit = 30): Promise<{ tokens: number; withDexScreener: number; newSignals: number }> {
  const now = (deps.now ?? (() => new Date()))();
  const pools = tab === "trending" ? await deps.gt.trendingPools() : await deps.gt.newPools();
  const seen = new Set<string>();
  const unique = pools.filter((p) => (seen.has(p.baseMint) ? false : (seen.add(p.baseMint), true))).slice(0, limit);

  let ds: DsToken[] = [];
  try {
    ds = await deps.ds.tokens(unique.map((p) => p.baseMint));
  } catch (e) {
    logOf(deps)(`dexscreener gagal, pakai data pool saja: ${(e as Error).message}`);
  }
  const byMint = new Map(ds.map((t) => [t.mint, t]));

  let rank = 1;
  let newSignals = 0;
  for (const pool of unique) {
    const values = mergeToken(pool, byMint.get(pool.baseMint));
    const { id, inserted } = await upsertToken(deps.db, values, now);
    await deps.db.insert(tokenTrending).values({ tab, rank: rank++, tokenId: id, snapshotAt: now });
    // Token yang baru pertama kali kita lihat di papan "new" = sinyal new_token (peristiwa nyata; skor risiko belum ada = 0).
    if (tab === "new" && inserted) {
      await deps.db.insert(signals).values({ type: "new_token", mint: pool.baseMint, symbol: values.symbol ?? null, score: 0, at: now });
      newSignals++;
    }
  }
  return { tokens: unique.length, withDexScreener: ds.length, newSignals };
}

async function activeTokens(deps: Deps, topN: number) {
  const now = (deps.now ?? (() => new Date()))();
  const since = new Date(now.getTime() - 60 * 60_000);
  return deps.db
    .select({ id: tokens.id, mint: tokens.mint, poolId: tokens.poolId })
    .from(tokens)
    .where(and(isNotNull(tokens.poolId), gtOp(tokens.lastSeenAt, since)))
    .orderBy(sql`${tokens.volumeUsd} desc nulls last`)
    .limit(topN);
}

/** Ambil data keamanan (GoPlus) untuk token aktif teratas dan simpan: kolom ringkas di tokens, metrik, serta laporan terbaru. */
export async function refreshSecurity(deps: Deps, topN = 30): Promise<{ checked: number; unknown: number }> {
  if (!deps.sec) return { checked: 0, unknown: 0 };
  const rows = await activeTokens(deps, topN);
  if (rows.length === 0) return { checked: 0, unknown: 0 };
  const infos = await deps.sec.tokens(rows.map((r) => r.mint));
  const byAddr = new Map(infos.map((i) => [i.address, i]));
  const now = (deps.now ?? (() => new Date()))();
  let checked = 0;
  for (const t of rows) {
    const info = byAddr.get(t.mint);
    if (!info) continue; // tidak dikenal GoPlus: biarkan null (tidak dikarang)
    await deps.db.transaction(async (tx) => {
      await tx
        .update(tokens)
        .set({
          riskScore: info.riskScore,
          rugged: info.rugged,
          top10Pct: info.top10Pct === null ? undefined : info.top10Pct.toFixed(2),
          devPct: info.devPct === null ? undefined : info.devPct.toFixed(2),
          holders: info.holders ?? undefined,
          lpBurnPct: info.lockedLpPct === null ? undefined : info.lockedLpPct.toFixed(2),
          updatedAt: now,
        })
        .where(eq(tokens.id, t.id));
      await tx
        .insert(tokenSecurityMetrics)
        .values({ tokenId: t.id, devWallet: info.creator, creatorAddress: info.creator, updatedAt: now })
        .onConflictDoUpdate({ target: tokenSecurityMetrics.tokenId, set: { devWallet: info.creator, creatorAddress: info.creator, updatedAt: now } });
      const [report] = await tx.insert(tokenSecurityReports).values({ tokenId: t.id, checked: true, passed: info.passed, total: info.total, checkedAt: now }).returning({ id: tokenSecurityReports.id });
      for (const [gi, g] of info.groups.entries()) {
        const [grp] = await tx.insert(tokenSecurityGroups).values({ reportId: report.id, title: g.title, sortOrder: gi }).returning({ id: tokenSecurityGroups.id });
        await tx.insert(tokenSecurityChecks).values(g.checks.map((c, ci) => ({ groupId: grp.id, label: c.label, state: c.state, value: c.value, hint: c.hint, sortOrder: ci })));
      }
      // Hanya laporan terbaru yang disimpan per token (hemat penyimpanan Supabase).
      await tx.delete(tokenSecurityReports).where(andOp(eq(tokenSecurityReports.tokenId, t.id), ne(tokenSecurityReports.id, report.id)));
    });
    checked++;
  }
  return { checked, unknown: rows.length - checked };
}

export async function refreshCandles(deps: Deps, intervals: ChartInterval[], topN = 10): Promise<{ candles: number; errors: number }> {
  let candles = 0;
  let errors = 0;
  for (const t of await activeTokens(deps, topN)) {
    for (const interval of intervals) {
      try {
        const list = await deps.gt.ohlcv(t.poolId!, interval, 100);
        if (list.length === 0) continue;
        await deps.db
          .insert(tokenCandles)
          .values(list.map((c) => ({ tokenId: t.id, interval, bucketStart: c.bucketStart, open: c.open, high: c.high, low: c.low, close: c.close, volumeUsd: c.volumeUsd })))
          .onConflictDoUpdate({
            target: [tokenCandles.tokenId, tokenCandles.interval, tokenCandles.bucketStart],
            set: { open: sql`excluded.open`, high: sql`excluded.high`, low: sql`excluded.low`, close: sql`excluded.close`, volumeUsd: sql`excluded.volume_usd` },
          });
        candles += list.length;
      } catch (e) {
        errors++;
        logOf(deps)(`candle ${t.mint} ${interval}: ${(e as Error).message}`);
      }
    }
  }
  return { candles, errors };
}

export async function refreshTrades(deps: Deps, topN = 10): Promise<{ trades: number; errors: number }> {
  let trades = 0;
  let errors = 0;
  for (const t of await activeTokens(deps, topN)) {
    try {
      const list = await deps.gt.poolTrades(t.poolId!, t.mint);
      if (list.length === 0) continue;
      const res = await deps.db
        .insert(tokenTrades)
        .values(list.map((x) => ({ tokenId: t.id, txHash: x.txHash, walletAddress: x.wallet, side: x.side, tokenAmount: x.tokenAmount, solAmount: x.solAmount, priceUsd: x.priceUsd, tradedAt: x.at })))
        .onConflictDoNothing()
        .returning({ id: tokenTrades.id });
      trades += res.length;
    } catch (e) {
      errors++;
      logOf(deps)(`trades ${t.mint}: ${(e as Error).message}`);
    }
  }
  return { trades, errors };
}

/** Kebijakan retensi (docs/db-analysis.md bagian 6) supaya muat di Supabase free 500 MB. */
export async function runRetention(db: Db, now = new Date()): Promise<Record<string, number>> {
  const ago = (ms: number) => new Date(now.getTime() - ms);
  const H = 3600_000;
  const D = 24 * H;
  const del = async (q: ReturnType<typeof sql>) => (await db.execute(q)).rowCount ?? 0;
  return {
    signals: await del(sql`delete from signals where at < ${ago(7 * D)}`),
    trades: await del(sql`delete from token_trades where traded_at < ${ago(48 * H)}`),
    candles1m: await del(sql`delete from token_candles where interval = '1m' and bucket_start < ${ago(D)}`),
    candles5m15m: await del(sql`delete from token_candles where interval in ('5m','15m') and bucket_start < ${ago(7 * D)}`),
    candles1h4h: await del(sql`delete from token_candles where interval in ('1h','4h') and bucket_start < ${ago(30 * D)}`),
    candles1d: await del(sql`delete from token_candles where interval = '1d' and bucket_start < ${ago(180 * D)}`),
    memescope: await del(sql`delete from memescope_coins where coalesce(last_trade_at, created_at_chain, now()) < ${ago(7 * D)}`),
    // snapshot lama dibuang, snapshot terbaru per tab selalu dipertahankan
    trending: await del(sql`delete from token_trending t where snapshot_at < ${ago(24 * H)} and snapshot_at < (select max(snapshot_at) from token_trending x where x.tab = t.tab)`),
    // token yang lama tidak terlihat dibuang (cascade); jangan hapus yang masih ada di snapshot terbaru
    tokens: await del(sql`delete from tokens where last_seen_at < ${ago(30 * D)} and id not in (select token_id from token_trending)`),
  };
}

