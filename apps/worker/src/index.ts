import { createDb } from "@corvid/db";
import { z } from "zod";
import { refreshBoard, refreshCandles, refreshLaunchpad, refreshSecurity, refreshTrades, runRetention, type Deps } from "./ingest";
import { createRpc, GRADUATION_ETH_DEFAULT } from "./sources/pons";
import { runAgentCycle } from "./runner";
import { cachedSolUsd } from "./solprice";
import { createDexScreener } from "./sources/dexscreener";
import { createGeckoTerminal } from "./sources/geckoterminal";
import { createGoPlus } from "./sources/goplus";

const env = z
  .object({
    DATABASE_URL: z.string().min(1),
    WORKER_BOARD_MS: z.coerce.number().int().min(10_000).default(120_000),
    WORKER_CANDLES_MS: z.coerce.number().int().min(30_000).default(600_000),
    WORKER_TRADES_MS: z.coerce.number().int().min(30_000).default(600_000),
    WORKER_SECURITY_MS: z.coerce.number().int().min(60_000).default(600_000),
    WORKER_LAUNCHPAD_MS: z.coerce.number().int().min(60_000).default(300_000),
    /** RPC mainnet untuk membaca saldo kurva launchpad (data pasar selalu mainnet; RPC_URL bisa testnet). Kosong = RPC publik. */
    MAINNET_RPC_URL: z.string().optional(),
    /** Ambang kelulusan kurva Pons V2 (ETH). Perkiraan terverifikasi on-chain, lihat sources/pons.ts. */
    PONS_GRADUATION_ETH: z.coerce.number().positive().default(GRADUATION_ETH_DEFAULT),
    WORKER_AGENTS_MS: z.coerce.number().int().min(15_000).default(60_000),
    WORKER_RETENTION_MS: z.coerce.number().int().min(60_000).default(3_600_000),
    /** Jeda antar request GeckoTerminal; batas publik ketat (observasi: 429 pada ~2,2 dtk). */
    WORKER_GT_INTERVAL_MS: z.coerce.number().int().min(1000).default(6500),
    WORKER_TOP_N: z.coerce.number().int().min(1).max(50).default(10),
  })
  .parse(process.env);

const log = (m: string) => console.log(`${new Date().toISOString()} ${m}`);
const { db, pool } = createDb(env.DATABASE_URL);
const deps: Deps = { db, gt: createGeckoTerminal({ minIntervalMs: env.WORKER_GT_INTERVAL_MS }), ds: createDexScreener(), sec: createGoPlus(), log };

const rpc = createRpc({ url: env.MAINNET_RPC_URL });

// Satu job tidak berjalan tumpang tindih dengan dirinya sendiri; kegagalan dicatat, bukan mematikan proses.
function every(name: string, ms: number, fn: () => Promise<unknown>) {
  let running = false;
  const tick = async () => {
    if (running) return;
    running = true;
    try {
      log(`${name}: ${JSON.stringify(await fn())}`);
    } catch (e) {
      log(`${name} gagal: ${(e as Error).message}`);
    } finally {
      running = false;
    }
  };
  void tick();
  return setInterval(tick, ms);
}

const timers = [
  every("board:trending", env.WORKER_BOARD_MS, () => refreshBoard(deps, "trending")),
  every("board:new", env.WORKER_BOARD_MS, () => refreshBoard(deps, "new")),
  every("candles", env.WORKER_CANDLES_MS, () => refreshCandles(deps, ["15m", "1h"], env.WORKER_TOP_N)),
  every("trades", env.WORKER_TRADES_MS, () => refreshTrades(deps, env.WORKER_TOP_N)),
  every("security", env.WORKER_SECURITY_MS, () => refreshSecurity(deps, 30)),
  every("launchpad", env.WORKER_LAUNCHPAD_MS, () => refreshLaunchpad({ ...deps, rpc }, { graduationEth: env.PONS_GRADUATION_ETH })),
  every("agents", env.WORKER_AGENTS_MS, () => runAgentCycle({ ...deps, solUsd: cachedSolUsd() })),
  every("retention", env.WORKER_RETENTION_MS, () => runRetention(db)),
];

const stop = async () => {
  timers.forEach(clearInterval);
  await pool.end();
  process.exit(0);
};
process.on("SIGINT", stop);
process.on("SIGTERM", stop);
log("worker berjalan");
