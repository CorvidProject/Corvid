// Uji manual: satu siklus memescope terhadap API publik. DATABASE_URL=... tsx src/once-memescope.ts
import { createDb, memescopeCoins } from "@corvid/db";
import { desc } from "drizzle-orm";
import { refreshMemescope } from "./memescope";
import { createDexScreener } from "./sources/dexscreener";
import { createGeckoTerminal } from "./sources/geckoterminal";

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL belum diisi");
const { db, pool } = createDb(url);
const deps = { db, gt: createGeckoTerminal({ minIntervalMs: Number(process.env.WORKER_GT_INTERVAL_MS ?? 6500) }), ds: createDexScreener(), log: console.log };
console.log("counts", await refreshMemescope(deps));
const rows = await db.select().from(memescopeCoins).orderBy(desc(memescopeCoins.progressPct)).limit(40);
for (const r of rows.filter((x) => x.createdAtChain && Date.now() - x.createdAtChain.getTime() < 48 * 3600_000).slice(0, 12))
  console.log(r.stage.padEnd(8), r.symbol?.padEnd(12), "prog", Number(r.progressPct).toFixed(1).padStart(5), "mcap $" + Math.round(Number(r.marketCapUsd)), r.dex, r.imageUrl ? "img" : "-", "mcap/prog=" + Math.round(Number(r.marketCapUsd) / Math.max(1, Number(r.progressPct)))); 
await pool.end();
