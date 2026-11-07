import { and, gt as gtOp, isNotNull, isNull, sql } from "drizzle-orm";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import {
  memescopeCoins,
  signals,
  tokenCandles,
  tokenSecurityChecks,
  tokenSecurityGroups,
  tokenSecurityMetrics,
  tokenSecurityReports,
  tokenTrades,
  tokenTrending,
  tokenWatch,
  tokens,
  type schema,
} from "@corvid/db";
import { eq, and as andOp, ne } from "drizzle-orm";
import type { GoPlus } from "./sources/goplus";
import { classifyCurve, FRESH_MIN_SHARE, LAUNCHPADS, migratedDexOf, type Launchpad, type LaunchpadId, type Rpc } from "./sources/launchpads";
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

/** Pesan galat ringkas: drizzle membungkus galat Postgres (penyebab asli ada di `cause`) dan menyertakan seluruh teks query. */
export function errText(e: unknown): string {
  const err = e as { message?: string; cause?: { message?: string; code?: string; detail?: string } };
  const head = String(err.message ?? e).split(/\r?\n/)[0].slice(0, 120);
  const c = err.cause;
  return c?.message ? `${head} | ${c.code ? `${c.code} ` : ""}${c.message}${c.detail ? ` (${c.detail})` : ""}`.slice(0, 400) : head;
}

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

/**
 * Token baru biasanya belum punya logo di DexScreener saat pertama terlihat. Cari ulang logo untuk token yang dibuat
 * dalam `maxAgeHours` terakhir dan masih kosong, walau sudah tergeser keluar dari papan "new". Satu permintaan batch.
 */
export async function refreshMissingImages(deps: Deps, opts: { maxAgeHours?: number; limit?: number } = {}): Promise<{ checked: number; filled: number }> {
  const now = (deps.now ?? (() => new Date()))();
  const since = new Date(now.getTime() - (opts.maxAgeHours ?? 24) * 3_600_000);
  const rows = await deps.db
    .select({ mint: tokens.mint })
    .from(tokens)
    .where(and(isNull(tokens.imageUrl), isNotNull(tokens.createdAtChain), gtOp(tokens.createdAtChain, since)))
    .orderBy(sql`${tokens.createdAtChain} desc`)
    .limit(opts.limit ?? 30);
  if (rows.length === 0) return { checked: 0, filled: 0 };
  let ds: DsToken[] = [];
  try {
    ds = await deps.ds.tokens(rows.map((r) => r.mint));
  } catch (e) {
    logOf(deps)(`dexscreener gagal (logo): ${(e as Error).message}`);
    return { checked: rows.length, filled: 0 };
  }
  let filled = 0;
  for (const t of ds) {
    if (!t.image) continue;
    await deps.db.update(tokens).set({ imageUrl: t.image, updatedAt: now }).where(and(eq(tokens.mint, t.mint), isNull(tokens.imageUrl)));
    await deps.db.update(memescopeCoins).set({ imageUrl: t.image }).where(and(eq(memescopeCoins.mint, t.mint), isNull(memescopeCoins.imageUrl)));
    filled++;
  }
  return { checked: rows.length, filled };
}

/**
 * Token yang sudah keluar dari papan trending/new tidak lagi disentuh refreshBoard, jadi harga, market cap, dan likuiditasnya
 * membeku. Segarkan yang paling lama tidak diperbarui lewat DexScreener (batch). `lastSeenAt` tidak diubah supaya retensi
 * tetap membersihkan token yang sudah mati.
 */
export async function refreshStale(deps: Deps, opts: { olderThanMin?: number; limit?: number } = {}): Promise<{ checked: number; updated: number }> {
  const now = (deps.now ?? (() => new Date()))();
  const before = new Date(now.getTime() - (opts.olderThanMin ?? 5) * 60_000);
  const rows = await deps.db
    .select({ mint: tokens.mint })
    .from(tokens)
    .where(and(isNotNull(tokens.poolId), sql`${tokens.updatedAt} < ${before}`))
    .orderBy(sql`${tokens.updatedAt} asc`)
    .limit(opts.limit ?? 90);
  if (rows.length === 0) return { checked: 0, updated: 0 };
  let ds: DsToken[] = [];
  try {
    ds = await deps.ds.tokens(rows.map((r) => r.mint));
  } catch (e) {
    logOf(deps)(`dexscreener gagal (stale): ${(e as Error).message}`);
    return { checked: rows.length, updated: 0 };
  }
  await applyDs(deps.db, rows.map((r) => r.mint), ds, now);
  return { checked: rows.length, updated: ds.length };
}

/** Tulis data pasar DexScreener ke tabel tokens. Token yang tidak ditemukan tetap dicap agar tidak menyumbat antrean. */
async function applyDs(db: Db, mints: string[], ds: DsToken[], now: Date): Promise<void> {
  for (const t of ds) {
    const set: Record<string, unknown> = { updatedAt: now };
    const put = (k: string, v: unknown) => {
      if (v !== null && v !== undefined) set[k] = v;
    };
    put("priceUsd", t.priceUsd);
    put("marketCapUsd", t.marketCapUsd);
    put("liquidityUsd", t.liquidityUsd);
    put("volumeUsd", t.volume24hUsd);
    put("volume1hUsd", t.volume1hUsd);
    put("change5mPct", t.change5m);
    put("change1hPct", t.change1h);
    put("change6hPct", t.change6h);
    put("change24hPct", t.change24h);
    put("buys", t.buys24h);
    put("sells", t.sells24h);
    if (t.buys24h != null && t.sells24h != null) set.txns = t.buys24h + t.sells24h;
    await db.update(tokens).set(set).where(eq(tokens.mint, t.mint));
  }
  const found = new Set(ds.map((t) => t.mint));
  for (const m of mints) if (!found.has(m)) await db.update(tokens).set({ updatedAt: now }).where(eq(tokens.mint, m));
}

/** Token yang dibuka pengguna dalam `withinMin` menit terakhir, yang terbaru dulu. */
async function watchedTokens(deps: Deps, withinMin: number, limit: number) {
  const now = (deps.now ?? (() => new Date()))();
  return deps.db
    .select({ id: tokens.id, mint: tokens.mint, poolId: tokens.poolId })
    .from(tokenWatch)
    .innerJoin(tokens, eq(tokens.id, tokenWatch.tokenId))
    .where(and(isNotNull(tokens.poolId), gtOp(tokenWatch.lastViewedAt, new Date(now.getTime() - withinMin * 60_000))))
    .orderBy(sql`${tokenWatch.lastViewedAt} desc`)
    .limit(limit);
}

/** Segarkan harga token yang sedang dibuka pengguna (jalan tiap beberapa detik; satu request DexScreener per 30 token). */
export async function refreshHot(deps: Deps, opts: { withinMin?: number; limit?: number } = {}): Promise<{ checked: number; updated: number }> {
  const now = (deps.now ?? (() => new Date()))();
  const rows = await watchedTokens(deps, opts.withinMin ?? 3, opts.limit ?? 30);
  if (rows.length === 0) return { checked: 0, updated: 0 };
  let ds: DsToken[] = [];
  try {
    ds = await deps.ds.tokens(rows.map((r) => r.mint));
  } catch (e) {
    logOf(deps)(`dexscreener gagal (hot): ${(e as Error).message}`);
    return { checked: rows.length, updated: 0 };
  }
  await applyDs(deps.db, rows.map((r) => r.mint), ds, now);
  return { checked: rows.length, updated: ds.length };
}

/** Candle dan trade baru untuk token yang sedang dibuka (paling baru dulu, dibatasi karena GeckoTerminal ketat). */
export async function refreshHotCharts(deps: Deps, intervals: ChartInterval[], opts: { withinMin?: number; limit?: number } = {}): Promise<{ tokens: number; candles: number; trades: number }> {
  const rows = await watchedTokens(deps, opts.withinMin ?? 3, opts.limit ?? 2);
  let candles = 0;
  let trades = 0;
  for (const t of rows) {
    candles += (await storeCandles(deps, t, intervals)).candles;
    trades += (await storeTrades(deps, t)).trades;
  }
  return { tokens: rows.length, candles, trades };
}

/**
 * Catat harga terkini sebagai titik sparkline. Satu titik per token paling sering tiap `everyMin` menit, hanya untuk token yang
 * datanya baru diperbarui (`freshMin`). Memakai satu pernyataan SQL.
 */
export async function snapshotPrices(db: Db, now = new Date(), opts: { everyMin?: number; freshMin?: number } = {}): Promise<number> {
  const everyAgo = new Date(now.getTime() - (opts.everyMin ?? 3) * 60_000 + 5_000);
  const freshAgo = new Date(now.getTime() - (opts.freshMin ?? 10) * 60_000);
  const res = await db.execute(sql`
    insert into token_price_points (token_id, at, price_usd)
    select t.id, ${now}, t.price_usd from tokens t
    where t.price_usd is not null and t.price_usd > 0 and t.updated_at > ${freshAgo}
      and not exists (select 1 from token_price_points p where p.token_id = t.id and p.at > ${everyAgo})
    on conflict do nothing`);
  return res.rowCount ?? 0;
}

/**
 * Memescope Robinhood Chain: kurva launchpad (lihat sources/launchpads.ts). Progres = aset kuotasi yang terkumpul di kontrak
 * kurva (RPC mainnet) / ambang kelulusan; tahap menurut classifyCurve. Token ikut disimpan di tabel tokens supaya halaman
 * detailnya ada. Kegagalan satu launchpad tidak menghentikan yang lain.
 */
export interface LaunchpadResult {
  pools: number;
  new: number;
  stretch: number;
  migrated: number;
  skipped: number;
}
export async function refreshLaunchpad(
  deps: Deps & { rpc: Rpc },
  opts: { graduation?: Partial<Record<LaunchpadId, number>>; pages?: number; launchpads?: Launchpad[] } = {},
): Promise<Record<string, LaunchpadResult | { error: string }>> {
  const out: Record<string, LaunchpadResult | { error: string }> = {};
  // GeckoTerminal mengurutkan pool per DEX menurut jumlah transaksi 24 jam (bukan waktu dibuat), jadi pool yang baru lahir tidak
  // pernah masuk tiga halaman pertamanya. Pool terbaru se-jaringan diambil terpisah lalu disaring menurut DEX launchpad.
  const newest: Pool[] = [];
  for (let page = 1; page <= NEWEST_PAGES; page++) {
    try {
      newest.push(...(await deps.gt.newPools(page)));
    } catch (e) {
      logOf(deps)(`pool terbaru halaman ${page} gagal: ${(e as Error).message}`);
      break;
    }
  }
  for (const lp of opts.launchpads ?? LAUNCHPADS) {
    try {
      out[lp.id] = await refreshOneLaunchpad(deps, { ...lp, graduation: opts.graduation?.[lp.id] ?? lp.graduation }, opts.pages ?? 3, newest);
    } catch (e) {
      out[lp.id] = { error: (e as Error).message };
      logOf(deps)(`launchpad ${lp.id} gagal: ${(e as Error).message}`);
    }
  }
  return out;
}

const NEWEST_PAGES = 3; // 20 pool per halaman, terbaru lebih dulu

async function refreshOneLaunchpad(deps: Deps & { rpc: Rpc }, lp: Launchpad, pages: number, newest: Pool[] = []): Promise<LaunchpadResult> {
  const now = (deps.now ?? (() => new Date()))();
  const all: Pool[] = newest.filter((p) => p.dex === lp.dex);
  for (let page = 1; page <= pages; page++) {
    const batch = await deps.gt.launchpadPools(lp.dex, page);
    if (batch.length === 0) break;
    all.push(...batch);
  }
  const seen = new Set<string>();
  const pools = all.filter((p) => (seen.has(p.baseMint) ? false : (seen.add(p.baseMint), true)));
  const counts = { new: 0, stretch: 0, migrated: 0, skipped: 0 };
  if (pools.length === 0) return { pools: 0, ...counts };

  const addrs = pools.map((p) => p.poolAddress);
  const raisedBy = lp.quote.kind === "eth" ? await deps.rpc.balances(addrs) : await deps.rpc.erc20Balances(lp.quote.token, addrs);
  // Pool tanpa pembelian: pangsa supply token di kontrak kurva menentukan "fresh" (hanya untuk launchpad yang menampilkannya).
  const emptyPools = lp.showFresh ? pools.filter((p) => raisedBy.get(p.poolAddress.toLowerCase()) === 0) : [];
  const shareBy = emptyPools.length ? await deps.rpc.erc20Share(emptyPools.map((p) => ({ token: p.baseMint, holder: p.poolAddress }))) : new Map<string, number>();

  let ds: DsToken[] = [];
  try {
    ds = await deps.ds.tokens(pools.map((p) => p.baseMint));
  } catch (e) {
    logOf(deps)(`dexscreener gagal (launchpad ${lp.id}): ${(e as Error).message}`);
  }
  const dsBy = new Map(ds.map((t) => [t.mint, t]));

  for (const pool of pools) {
    const key = pool.poolAddress.toLowerCase();
    const raised = raisedBy.get(key);
    if (raised === undefined) {
      counts.skipped++; // saldo tidak terbaca: jangan menebak tahapnya
      continue;
    }
    const d = dsBy.get(pool.baseMint);
    const migratedDex = migratedDexOf(d?.dex, d?.liquidityUsd);
    const fresh = lp.showFresh && (shareBy.get(key) ?? 0) >= FRESH_MIN_SHARE;
    const c = classifyCurve({ raised, graduation: lp.graduation, migratedDex, fresh });
    if (!c) {
      counts.skipped++;
      continue;
    }
    const values = mergeToken(pool, d);
    await upsertToken(deps.db, values, now);
    const row = {
      mint: pool.baseMint,
      stage: c.stage,
      name: values.name ?? null,
      symbol: values.symbol ?? null,
      imageUrl: values.imageUrl ?? null,
      progressPct: c.progress.toFixed(2),
      marketCapUsd: Number(values.marketCapUsd ?? pool.fdvUsd ?? 0).toFixed(2),
      complete: c.complete,
      live: false,
      dex: c.stage === "migrated" ? (migratedDex ?? null) : lp.dex,
      createdAtChain: pool.createdAt,
      lastTradeAt: now,
    };
    await deps.db.insert(memescopeCoins).values(row).onConflictDoUpdate({ target: memescopeCoins.mint, set: row });
    counts[c.stage]++;
  }
  return { pools: pools.length, ...counts };
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

type PoolToken = { id: number; mint: string; poolId: string | null };

async function storeCandles(deps: Deps, t: PoolToken, intervals: ChartInterval[]): Promise<{ candles: number; errors: number }> {
  let candles = 0;
  let errors = 0;
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
      logOf(deps)(`candle ${t.mint} ${interval}: ${errText(e)}`);
    }
  }
  return { candles, errors };
}

async function storeTrades(deps: Deps, t: PoolToken): Promise<{ trades: number; errors: number }> {
  try {
    const list = await deps.gt.poolTrades(t.poolId!, t.mint);
    if (list.length === 0) return { trades: 0, errors: 0 };
    const res = await deps.db
      .insert(tokenTrades)
      .values(list.map((x) => ({ tokenId: t.id, txHash: x.txHash, walletAddress: x.wallet, side: x.side, tokenAmount: x.tokenAmount, ethAmount: x.ethAmount, priceUsd: x.priceUsd, tradedAt: x.at })))
      .onConflictDoNothing()
      .returning({ id: tokenTrades.id });
    return { trades: res.length, errors: 0 };
  } catch (e) {
    logOf(deps)(`trades ${t.mint}: ${(e as Error).message}`);
    return { trades: 0, errors: 1 };
  }
}

export async function refreshCandles(deps: Deps, intervals: ChartInterval[], topN = 10): Promise<{ candles: number; errors: number }> {
  let candles = 0;
  let errors = 0;
  for (const t of await activeTokens(deps, topN)) {
    const r = await storeCandles(deps, t, intervals);
    candles += r.candles;
    errors += r.errors;
  }
  return { candles, errors };
}

export async function refreshTrades(deps: Deps, topN = 10): Promise<{ trades: number; errors: number }> {
  let trades = 0;
  let errors = 0;
  for (const t of await activeTokens(deps, topN)) {
    const r = await storeTrades(deps, t);
    trades += r.trades;
    errors += r.errors;
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
    pricePoints: await del(sql`delete from token_price_points where at < ${ago(D)}`),
    watch: await del(sql`delete from token_watch where last_viewed_at < ${ago(D)}`),
    memescope: await del(sql`delete from memescope_coins where coalesce(last_trade_at, created_at_chain, now()) < ${ago(7 * D)}`),
    // snapshot lama dibuang, snapshot terbaru per tab selalu dipertahankan
    trending: await del(sql`delete from token_trending t where snapshot_at < ${ago(24 * H)} and snapshot_at < (select max(snapshot_at) from token_trending x where x.tab = t.tab)`),
    // token yang lama tidak terlihat dibuang (cascade); jangan hapus yang masih ada di snapshot terbaru
    tokens: await del(sql`delete from tokens where last_seen_at < ${ago(30 * D)} and id not in (select token_id from token_trending)`),
  };
}

