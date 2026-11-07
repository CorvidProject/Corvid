import { createDb } from "@corvid/db";
import { z } from "zod";
import { refreshBoard, refreshCandles, refreshLaunchpad, refreshMissingImages, refreshSecurity, refreshTrades, runRetention, type Deps } from "./ingest";
import { createRpc, PONS, VIRTUALS } from "./sources/launchpads";
import { pruneWallets, refreshWallets } from "./wallets";
import { runAgentCycle } from "./runner";
import { cachedEthUsd } from "./ethprice";
import { createDexScreener } from "./sources/dexscreener";
import { createGeckoTerminal } from "./sources/geckoterminal";
import { createGoPlus } from "./sources/goplus";
import { createNotifier, createTelegramApi, pollOnce } from "./telegram";

const env = z
  .object({
    DATABASE_URL: z.string().min(1),
    WORKER_BOARD_MS: z.coerce.number().int().min(10_000).default(120_000),
    /** Cari ulang logo token baru yang masih kosong (DexScreener belakangan memprosesnya). */
    WORKER_IMAGES_MS: z.coerce.number().int().min(60_000).default(300_000),
    WORKER_CANDLES_MS: z.coerce.number().int().min(30_000).default(600_000),
    WORKER_TRADES_MS: z.coerce.number().int().min(30_000).default(600_000),
    WORKER_SECURITY_MS: z.coerce.number().int().min(60_000).default(600_000),
    WORKER_WALLETS_MS: z.coerce.number().int().min(60_000).default(600_000),
    /** Jendela trade untuk menilai smart wallet (jam). Lebih panjang = lebih banyak data tersimpan; retensi trade 48 jam. */
    WALLETS_WINDOW_HOURS: z.coerce.number().int().min(1).max(48).default(48),
    WORKER_LAUNCHPAD_MS: z.coerce.number().int().min(60_000).default(300_000),
    /** RPC mainnet untuk membaca saldo kurva launchpad (data pasar selalu mainnet; RPC_URL bisa testnet). Kosong = RPC publik. */
    MAINNET_RPC_URL: z.string().optional(),
    /** Ambang kelulusan kurva (lihat sources/launchpads.ts untuk dasar verifikasi). Pons dalam ETH, Virtuals dalam VIRTUAL. */
    PONS_GRADUATION_ETH: z.coerce.number().positive().default(PONS.graduation),
    VIRTUALS_GRADUATION: z.coerce.number().positive().default(VIRTUALS.graduation),
    WORKER_AGENTS_MS: z.coerce.number().int().min(15_000).default(60_000),
    WORKER_RETENTION_MS: z.coerce.number().int().min(60_000).default(3_600_000),
    /** Jeda antar request GeckoTerminal; batas publik ketat (observasi: 429 pada ~2,2 dtk). */
    WORKER_GT_INTERVAL_MS: z.coerce.number().int().min(1000).default(6500),
    /** Token bot Telegram (dari @BotFather). Kosong = notifikasi Telegram mati. Jangan dicatat. */
    TELEGRAM_BOT_TOKEN: z.preprocess((v) => (v === "" ? undefined : v), z.string().min(10).optional()),
    WORKER_TOP_N: z.coerce.number().int().min(1).max(50).default(10),
  })
  .parse(process.env);

const log = (m: string) => console.log(`${new Date().toISOString()} ${m}`);
const { db, pool } = createDb(env.DATABASE_URL);
const deps: Deps = { db, gt: createGeckoTerminal({ minIntervalMs: env.WORKER_GT_INTERVAL_MS }), ds: createDexScreener(), sec: createGoPlus(), log };

const tg = env.TELEGRAM_BOT_TOKEN ? createTelegramApi(env.TELEGRAM_BOT_TOKEN) : null;
const notify = tg ? createNotifier(deps, tg) : undefined;
let tgOffset: number | undefined;

const rpc = createRpc({ url: env.MAINNET_RPC_URL });

// Satu job tidak berjalan tumpang tindih dengan dirinya sendiri; kegagalan dicatat, bukan mematikan proses.
function every(name: string, ms: number, fn: () => Promise<unknown>) {
  let running = false;
  const tick = async () => {
    if (running) return;
    running = true;
    try {
      const out = await fn();
      if (out !== undefined) log(`${name}: ${JSON.stringify(out)}`);
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
  every("images", env.WORKER_IMAGES_MS, () => refreshMissingImages(deps)),
  every("candles", env.WORKER_CANDLES_MS, () => refreshCandles(deps, ["15m", "1h"], env.WORKER_TOP_N)),
  every("trades", env.WORKER_TRADES_MS, () => refreshTrades(deps, env.WORKER_TOP_N)),
  every("security", env.WORKER_SECURITY_MS, () => refreshSecurity(deps, 30)),
  every("launchpad", env.WORKER_LAUNCHPAD_MS, () => refreshLaunchpad({ ...deps, rpc }, { graduation: { pons: env.PONS_GRADUATION_ETH, virtuals: env.VIRTUALS_GRADUATION } })),
  every("wallets", env.WORKER_WALLETS_MS, async () => ({ ...(await refreshWallets(db, { windowHours: env.WALLETS_WINDOW_HOURS })), pruned: await pruneWallets(db) })),
  every("agents", env.WORKER_AGENTS_MS, () => runAgentCycle({ ...deps, ethUsd: cachedEthUsd(), notify })),
  ...(tg
    ? [
        every("telegram", 3_000, async () => {
          const r = await pollOnce(deps, tg, tgOffset);
          tgOffset = r.next;
          return r.handled > 0 ? r : undefined;
        }),
      ]
    : []),
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
