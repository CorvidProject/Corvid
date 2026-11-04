// Jalankan satu siklus penuh sekali (untuk uji manual): DATABASE_URL=... pnpm --filter @corvid/worker once
import { createDb } from "@corvid/db";
import { refreshBoard, refreshCandles, refreshTrades, runRetention } from "./ingest";
import { createDexScreener } from "./sources/dexscreener";
import { createGeckoTerminal } from "./sources/geckoterminal";

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL belum diisi");
const { db, pool } = createDb(url);
const deps = { db, gt: createGeckoTerminal({ minIntervalMs: Number(process.env.WORKER_GT_INTERVAL_MS ?? 6500) }), ds: createDexScreener(), log: console.log };
console.log("trending", await refreshBoard(deps, "trending"));
console.log("new", await refreshBoard(deps, "new"));
console.log("candles", await refreshCandles(deps, ["15m"], 3));
console.log("trades", await refreshTrades(deps, 3));
console.log("retention", await runRetention(db));
await pool.end();
