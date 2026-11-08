import { createDb } from "@corvid/db";
import { z } from "zod";
import { refreshBoard, refreshCandles, refreshLaunchpad, refreshHot, refreshHotCharts, refreshImagesGt, refreshMissingImages, refreshSecurity, refreshStale, snapshotPrices, refreshTrades, runRetention, type Deps } from "./ingest";
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
    WORKER_BOARD_MS: z.coerce.number().int().min(10_000).default(180_000),
    /** Cari ulang logo token baru yang masih kosong (DexScreener belakangan memprosesnya). */
    /** Logo dari GeckoTerminal untuk token yang kosong di DexScreener (30 token per request). */
    WORKER_IMAGES_GT_MS: z.coerce.number().int().min(60_000).default(300_000),
    WORKER_IMAGES_MS: z.coerce.number().int().min(60_000).default(300_000),
    /** Segarkan harga/market cap token yang tidak lagi di papan trending/new. */
    WORKER_STALE_MS: z.coerce.number().int().min(30_000).default(120_000),
    /** Jumlah token maksimal per putaran (30 token per request DexScreener, batas 300 request/menit). */
    WORKER_STALE_LIMIT: z.coerce.number().int().min(30).max(600).default(300),
    /** Token yang sedang dibuka pengguna: harga tiap beberapa detik, candle/trade lebih jarang (GeckoTerminal ketat). */
    WORKER_HOT_MS: z.coerce.number().int().min(3_000).default(10_000),
    WORKER_HOT_CHARTS_MS: z.coerce.number().int().min(10_000).default(60_000),
    /** Titik harga untuk sparkline. */
    WORKER_PRICES_MS: z.coerce.number().int().min(30_000).default(60_000),
    WORKER_CANDLES_MS: z.coerce.number().int().min(30_000).default(900_000),
    WORKER_TRADES_MS: z.coerce.number().int().min(30_000).default(900_000),
    WORKER_SECURITY_MS: z.coerce.number().int().min(60_000).default(300_000),
    /** Token per putaran pengecekan keamanan (satu request GoPlus per token, jeda 4 dtk). */
    WORKER_SECURITY_N: z.coerce.number().int().min(10).max(300).default(70),
    WORKER_WALLETS_MS: z.coerce.number().int().min(60_000).default(1_800_000),
    /** Jendela trade untuk menilai smart wallet (jam). Lebih panjang = lebih banyak data tersimpan; retensi trade 48 jam. */
    WALLETS_WINDOW_HOURS: z.coerce.number().int().min(1).max(48).default(24),
    WORKER_LAUNCHPAD_MS: z.coerce.number().int().min(60_000).default(300_000),
    /** RPC mainnet untuk membaca saldo kurva launchpad (data pasar selalu mainnet; RPC_URL bisa testnet). Kosong = RPC publik. */
    MAINNET_RPC_URL: z.string().optional(),
    /** Ambang kelulusan kurva (lihat sources/launchpads.ts untuk dasar verifikasi). Pons dalam ETH, Virtuals dalam VIRTUAL. */
    PONS_GRADUATION_ETH: z.coerce.number().positive().default(PONS.graduation),
    VIRTUALS_GRADUATION: z.coerce.number().positive().default(VIRTUALS.graduation),
    WORKER_AGENTS_MS: z.coerce.number().int().min(15_000).default(120_000),
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
const ethUsd = cachedEthUsd(); // satu cache bersama (agent dan leaderboard)

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
  every("images:gt", env.WORKER_IMAGES_GT_MS, () => refreshImagesGt(deps)),
  every("stale", env.WORKER_STALE_MS, () => refreshStale(deps, { olderThanMin: 1, limit: env.WORKER_STALE_LIMIT })),
  every("hot", env.WORKER_HOT_MS, () => refreshHot(deps)),
  every("hotcharts", env.WORKER_HOT_CHARTS_MS, () => refreshHotCharts(deps, ["15m"], { limit: 1 })),
  every("prices", env.WORKER_PRICES_MS, async () => ({ points: await snapshotPrices(db) })),
  every("candles", env.WORKER_CANDLES_MS, () => refreshCandles(deps, ["15m", "1h"], env.WORKER_TOP_N)),
  every("trades", env.WORKER_TRADES_MS, () => refreshTrades(deps, env.WORKER_TOP_N)),
  every("security", env.WORKER_SECURITY_MS, () => refreshSecurity(deps, env.WORKER_SECURITY_N)),
  every("launchpad", env.WORKER_LAUNCHPAD_MS, () => refreshLaunchpad({ ...deps, rpc }, { graduation: { pons: env.PONS_GRADUATION_ETH, virtuals: env.VIRTUALS_GRADUATION } })),
  every("wallets", env.WORKER_WALLETS_MS, async () => ({ ...(await refreshWallets(db, { windowHours: env.WALLETS_WINDOW_HOURS, ethUsd: await ethUsd() })), pruned: await pruneWallets(db) })),
  every("agents", env.WORKER_AGENTS_MS, () => runAgentCycle({ ...deps, ethUsd, notify })),
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
