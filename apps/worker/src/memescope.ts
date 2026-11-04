import { memescopeCoins } from "@corvid/db";
import type { Deps } from "./ingest";
import type { DsToken } from "./sources/dexscreener";
import { WSOL, type Pool } from "./sources/geckoterminal";

// Parameter bonding curve pump.fun (konstan protokol): reserve virtual awal 30 SOL dan 1.073.000.000 token,
// 793.100.000 token terjual saat lulus. Progress dihitung dari harga (SOL) dengan rumus kurva x*y=k.
// CATATAN: ini ESTIMASI dari harga, belum diverifikasi on-chain. Ganti dengan pembacaan akun bonding curve
// lewat RPC (Helius) setelah program pump.fun diverifikasi dari explorer.
const V_SOL0 = 30;
const V_TOKENS0 = 1_073_000_000;
const REAL_TOKENS = 793_100_000;
const K = V_SOL0 * V_TOKENS0;

/** Progress bonding curve 0..100 dari harga token dalam SOL; null bila harga tidak valid. */
export function bondingProgress(priceSol: number | null): number | null {
  if (priceSol === null || !isFinite(priceSol) || priceSol <= 0) return null;
  const vTokens = Math.sqrt(K / priceSol);
  const sold = V_TOKENS0 - vTokens;
  return Math.min(100, Math.max(0, (sold / REAL_TOKENS) * 100));
}

const PUMP_SUPPLY = 1_000_000_000; // supply token pump.fun tetap 1 miliar

const positive = (v: string | null | undefined) => (v !== null && v !== undefined && Number(v) > 0 ? v : null);

/** Market cap USD token pump.fun: FDV bila ada, lalu market_cap, lalu harga x 1 miliar. 0/kosong dianggap tidak ada. */
export function pumpMarketCap(pool: Pool): string | null {
  const byPrice = positive(pool.priceUsd) ? String(Number(pool.priceUsd) * PUMP_SUPPLY) : null;
  return positive(pool.fdvUsd) ?? positive(pool.marketCapUsd) ?? byPrice;
}

export type Stage = "new" | "stretch" | "migrated";
export const STRETCH_FROM = 50; // persen progress minimal untuk tahap "Final Stretch"
const MIGRATED_MAX_AGE_MS = 48 * 3600_000;
const PUMP_SUFFIX = /pump$/; // mint buatan pump.fun berakhiran "pump" (vanity address)

export interface Candidate {
  pool: Pool;
  stage: Stage;
  progress: number;
}

/** Tentukan tahap dari daftar pool. Pool non-pump.fun dan non-lulusan pump.fun dibuang. */
export function classify(pools: Pool[], now: Date): Candidate[] {
  const out = new Map<string, Candidate>();
  for (const pool of pools) {
    if (!PUMP_SUFFIX.test(pool.baseMint)) continue;
    // Bonding curve pump.fun dan pool hasil lulusnya berkuotasi SOL; pool berkuotasi token lain bukan kurva
    // asli (harga native-nya bukan harga dalam SOL, sehingga progress tidak valid).
    if (pool.quoteMint !== WSOL) continue;
    if (pumpMarketCap(pool) === null) continue; // tanpa harga/market cap positif: tidak ditampilkan
    if (pool.dex === "pump-fun") {
      const progress = bondingProgress(pool.priceNative === null ? null : Number(pool.priceNative));
      if (progress === null) continue;
      out.set(pool.baseMint, { pool, progress, stage: progress >= STRETCH_FROM ? "stretch" : "new" });
    } else if (pool.dex === "pumpswap") {
      const age = pool.createdAt ? now.getTime() - pool.createdAt.getTime() : Infinity;
      if (age > MIGRATED_MAX_AGE_MS) continue;
      out.set(pool.baseMint, { pool, progress: 100, stage: "migrated" }); // pumpswap menimpa pool pump-fun lama
    }
  }
  return [...out.values()];
}

/** Perbarui tabel memescope dari GeckoTerminal (pool baru, pump-fun, pumpswap) + gambar dari DexScreener. */
export async function refreshMemescope(deps: Deps): Promise<Record<Stage, number>> {
  const now = (deps.now ?? (() => new Date()))();
  const pools: Pool[] = [];
  for (const load of [() => deps.gt.newPools(1), () => deps.gt.newPools(2), () => deps.gt.dexPools("pump-fun"), () => deps.gt.dexPools("pumpswap")]) {
    try {
      pools.push(...(await load()));
    } catch (e) {
      deps.log?.(`memescope: sumber gagal: ${(e as Error).message}`);
    }
  }
  const cands = classify(pools, now);

  let ds: DsToken[] = [];
  try {
    ds = await deps.ds.tokens(cands.map((c) => c.pool.baseMint));
  } catch (e) {
    deps.log?.(`memescope: dexscreener gagal: ${(e as Error).message}`);
  }
  const byMint = new Map(ds.map((t) => [t.mint, t]));

  const counts: Record<Stage, number> = { new: 0, stretch: 0, migrated: 0 };
  for (const c of cands) {
    const d = byMint.get(c.pool.baseMint);
    const sym = c.pool.name ? c.pool.name.split(" / ")[0].trim() : null;
    const mcap = pumpMarketCap(c.pool) ?? positive(d?.marketCapUsd) ?? "0";
    const set = {
      stage: c.stage,
      name: d?.name ?? sym,
      symbol: d?.symbol ?? sym,
      progressPct: c.progress.toFixed(2),
      marketCapUsd: mcap,
      complete: c.stage === "migrated",
      dex: c.pool.dex,
      createdAtChain: c.pool.createdAt,
      ...(d?.image ? { imageUrl: d.image } : {}),
    };
    await deps.db
      .insert(memescopeCoins)
      .values({ mint: c.pool.baseMint, ...set })
      .onConflictDoUpdate({ target: memescopeCoins.mint, set });
    counts[c.stage]++;
  }
  return counts;
}
