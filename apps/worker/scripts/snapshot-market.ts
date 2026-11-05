// Snapshot data pasar NYATA Robinhood Chain (mainnet) → berkas data contoh web, tanpa backend.
// Sumber: GeckoTerminal (trending + new pools), DexScreener (gambar, sosial), GoPlus (keamanan). Hanya baca.
// Jalankan: pnpm --filter @corvid/worker exec tsx scripts/snapshot-market.ts
import fs from "node:fs";
import path from "node:path";
import { mergeToken } from "../src/ingest";
import { createDexScreener } from "../src/sources/dexscreener";
import { createGeckoTerminal } from "../src/sources/geckoterminal";
import { createGoPlus } from "../src/sources/goplus";
import { toTrending } from "../../api/src/mappers";

const ROOT = path.resolve(import.meta.dirname, "../../..");
const gt = createGeckoTerminal();
const ds = createDexScreener();
const sec = createGoPlus();

const BASE_ROW = {
  id: 0, description: null, decimals: 18, imageUrl: null, lpBurnPct: null, makers: null, riskScore: null, rugged: false, top10Pct: null,
  devPct: null, transferFeeBps: null, totalSupply: null, holders: null, freezeAuthority: null, mintAuthority: null,
  change1mPct: null, lastSeenAt: new Date(), updatedAt: new Date(),
};

async function build(pools: Awaited<ReturnType<typeof gt.trendingPools>>) {
  const seen = new Set<string>();
  const unique = pools.filter((p) => (seen.has(p.baseMint) ? false : (seen.add(p.baseMint), true)));
  const mints = unique.map((p) => p.baseMint);
  const dsMap = new Map((await ds.tokens(mints)).map((t) => [t.mint, t]));
  const secMap = new Map((await sec.tokens(mints)).map((s) => [s.address, s]));
  return unique.map((pool) => {
    const v = mergeToken(pool, dsMap.get(pool.baseMint));
    const s = secMap.get(pool.baseMint);
    const row = {
      ...BASE_ROW,
      ...Object.fromEntries(Object.entries(v).filter(([, x]) => x !== undefined)),
      ...(s
        ? {
            riskScore: s.riskScore,
            rugged: s.rugged,
            top10Pct: s.top10Pct === null ? null : s.top10Pct.toFixed(2),
            devPct: s.devPct === null ? null : s.devPct.toFixed(2),
            holders: s.holders,
            lpBurnPct: s.lockedLpPct === null ? null : s.lockedLpPct.toFixed(2),
          }
        : {}),
    };
    return toTrending(row as never);
  });
}

const trending = await build(await gt.trendingPools());
const fresh = await build(await gt.newPools(1));
const out = (rel: string, tokens: unknown[]) => {
  fs.writeFileSync(path.join(ROOT, rel), JSON.stringify({ tokens }, null, 1) + "\n");
  console.log(`${rel}: ${tokens.length} token`);
};
out("apps/web/src/server/data/trending-robinhood-trending.json", trending);
out("apps/web/src/server/data/trending-robinhood-new.json", fresh);
out("apps/web/src/data/tokens-trending.json", trending);
out("packages/api-client/fixtures/tokens-trending.json", trending);
out("packages/api-client/fixtures/tokens-new.json", fresh);
console.log("contoh:", trending.slice(0, 3).map((t) => `${t.symbol} $${t.price} mc ${t.marketCap} risk ${t.riskScore}`));
