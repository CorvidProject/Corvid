import { z } from "zod";

/** Alamat/mint Solana base58 (data lama; dibuang setelah migrasi data selesai). */
export const solanaAddress = z
  .string()
  .regex(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/, "bukan alamat Solana yang valid");

/** Alamat EVM (Robinhood Chain): 0x + 40 hex. Checksum EIP-55 divalidasi di klien (viem); server menyimpan lowercase. */
export const evmAddress = z
  .string()
  .regex(/^0x[0-9a-fA-F]{40}$/, "bukan alamat EVM yang valid")
  .transform((a) => a.toLowerCase());

/** Alamat on-chain yang diterima API selama transisi: EVM (utama) atau Solana (data lama). */
export const chainAddress = z.union([evmAddress, solanaAddress]);

/** Normalisasi untuk penyimpanan/pembandingan: EVM → lowercase, lainnya (base58) apa adanya. */
export const normalizeAddress = (a: string) => (/^0x[0-9a-fA-F]{40}$/.test(a) ? a.toLowerCase() : a);

/** Parameter `chain`: nilai bawaan "robinhood"; "solana" masih diterima untuk data lama selama transisi. */
export const chainParam = z.enum(["robinhood", "solana"]).default("robinhood");

export const statsSchema = z.object({
  activeAgents: z.number().int(),
  publishedAgents: z.number().int(),
  smartWallets: z.number().int(),
  swapsExecuted: z.number().int(),
});

export const riskItemSchema = z.object({
  name: z.string(),
  level: z.string(),
  score: z.number(),
});

/** Item daftar /tokens/trending. Waktu `createdAt` dalam detik (epoch). */
export const trendingTokenSchema = z.object({
  name: z.string().nullable(),
  symbol: z.string().nullable(),
  mint: chainAddress,
  image: z.string().nullable(),
  price: z.number().nullable(),
  marketCap: z.number().nullable(),
  liquidity: z.number().nullable(),
  volume: z.number().nullable(),
  change5m: z.number().nullable(),
  change1h: z.number().nullable(),
  change6h: z.number().nullable(),
  change24h: z.number().nullable(),
  buys: z.number().nullable(),
  sells: z.number().nullable(),
  txns: z.number().nullable(),
  makers: z.number().nullable(),
  twitter: z.string().nullable(),
  telegram: z.string().nullable(),
  website: z.string().nullable(),
  riskScore: z.number().nullable(),
  top10: z.number().nullable(),
  devPct: z.number().nullable(),
  /** Turunan dari transferFeeBps (persen) supaya UI lama tetap terbaca. */
  buyTax: z.number().nullable(),
  sellTax: z.number().nullable(),
  transferFeeBps: z.number().int().nullable(),
  dex: z.string().nullable(),
  rugged: z.boolean(),
  riskChecked: z.boolean(),
  risks: z.array(riskItemSchema),
  lpBurn: z.number().nullable(),
  createdAt: z.number().nullable(),
  holders: z.number().nullable(),
  chain: z.enum(["robinhood", "solana"]),
  volume1h: z.number().nullable(),
});
export type TrendingToken = z.infer<typeof trendingTokenSchema>;

export const trendingQuerySchema = z.object({
  tab: z.enum(["trending", "new"]).default("trending"),
  chain: chainParam,
  limit: z.coerce.number().int().min(1).max(200).default(100),
});
export const trendingResponseSchema = z.object({ tokens: z.array(trendingTokenSchema) });

const nullableNum = z.number().nullable();

export const tokenDetailSchema = z.object({
  token: z.object({
    name: z.string().nullable(),
    symbol: z.string().nullable(),
    mint: chainAddress,
    image: z.string().nullable(),
    description: z.string(),
    links: z.array(z.string()),
    decimals: z.number().int(),
    price: nullableNum,
    marketCap: nullableNum,
    liquidity: nullableNum,
    lpBurn: nullableNum,
    volume: nullableNum,
    buys: nullableNum,
    sells: nullableNum,
    txns: nullableNum,
    change1m: nullableNum,
    change5m: nullableNum,
    change1h: nullableNum,
    change6h: nullableNum,
    change24h: nullableNum,
    risk: z.object({
      score: nullableNum,
      rugged: z.boolean(),
      risks: z.array(riskItemSchema),
    }),
    security: z.object({
      freezeAuthority: z.string().nullable(),
      mintAuthority: z.string().nullable(),
    }),
    transferFeeBps: z.number().int().nullable(),
    totalSupply: nullableNum,
    topHoldersPercent: nullableNum,
    devHoldingsPercent: nullableNum,
    devWallet: z.string().nullable(),
    sniperHoldingsPercent: nullableNum,
    bundlerHoldingsPercent: nullableNum,
    insidersPercent: nullableNum,
    insidersCount: nullableNum,
    bundlersCount: nullableNum,
    bundlersInitialPercent: nullableNum,
    snipersCount: nullableNum,
    jitoFees: nullableNum,
    jupiterVerified: z.boolean().nullable(),
    holdersCount: nullableNum,
    creatorAddress: z.string().nullable(),
    buyVolume: nullableNum,
    sellVolume: nullableNum,
    makers: nullableNum,
    buyers: nullableNum,
    sellers: nullableNum,
    poolId: z.string().nullable(),
    market: z.string().nullable(),
    createdAt: nullableNum,
  }),
});
export type TokenDetail = z.infer<typeof tokenDetailSchema>;

export const securityResponseSchema = z.object({
  checked: z.boolean(),
  groups: z.array(
    z.object({
      title: z.string(),
      checks: z.array(
        z.object({
          label: z.string(),
          state: z.enum(["pass", "warn", "fail", "unknown"]),
          value: z.string().optional(),
          hint: z.string().optional(),
        }),
      ),
    }),
  ),
  passed: z.number().int(),
  total: z.number().int(),
});

export const tradesQuerySchema = z.object({
  mint: chainAddress,
  chain: chainParam,
  limit: z.coerce.number().int().min(1).max(500).default(100),
});
export const tradesResponseSchema = z.object({
  trades: z.array(
    z.object({
      txHash: z.string(),
      wallet: z.string(),
      type: z.enum(["buy", "sell"]),
      tokenAmount: z.number(),
      solAmount: nullableNum,
      priceUsd: nullableNum,
      marketCapUsd: nullableNum,
      /** Milidetik (epoch). */
      timestamp: z.number(),
    }),
  ),
});

export const memescopeQuerySchema = z.object({
  stage: z.enum(["new", "stretch", "migrated"]).default("new"),
});
export const memescopeResponseSchema = z.object({
  coins: z.array(
    z.object({
      mint: chainAddress,
      name: z.string().nullable(),
      symbol: z.string().nullable(),
      image: z.string().nullable(),
      progress: z.number(),
      marketCapUsd: z.number(),
      athMarketCapUsd: nullableNum,
      createdAt: nullableNum,
      lastTradeAt: nullableNum,
      replies: z.number().int(),
      complete: z.boolean(),
      live: z.boolean(),
      creator: z.string(),
      dex: z.string().nullable(),
    }),
  ),
  at: z.number(),
  stale: z.boolean(),
});

// Smart wallets: ditemukan worker dari trade yang diindeks (estimasi, bukan riwayat penuh wallet).
export const alphaCuratedQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(200).default(100),
  tier: z.enum(["S", "A", "B", "C"]).optional(),
});
export const alphaCuratedResponseSchema = z.object({
  wallets: z.array(
    z.object({
      address: chainAddress,
      label: z.string().nullable(),
      tier: z.enum(["S", "A", "B", "C"]).nullable(),
      /** Persen token tertutup yang untung; null bila belum ada token tertutup. */
      winRate: nullableNum,
      /** PnL realisasi estimasi dalam ETH, pada jendela windowHours. */
      pnlEth: z.number(),
      trades: z.number().int(),
      closedTokens: z.number().int(),
      tokensTraded: z.number().int(),
      avgHoldHours: nullableNum,
      lastActive: nullableNum,
    }),
  ),
  /** Jendela data yang dipakai (jam): angka di atas hanya mencakup trade dalam jendela ini. */
  windowHours: z.number().int(),
  at: z.number(),
});
export const alphaActivityQuerySchema = z.object({ limit: z.coerce.number().int().min(1).max(200).default(50) });
export const alphaActivityResponseSchema = z.object({
  activity: z.array(
    z.object({
      wallet: chainAddress,
      side: z.enum(["buy", "sell"]),
      symbol: z.string().nullable(),
      mint: chainAddress,
      eth: nullableNum,
      at: z.number(),
    }),
  ),
});

export const mintParamSchema = z.object({ mint: chainAddress });

export const errorSchema = z.object({ error: z.string() });

export const solPriceSchema = z.object({ usd: z.number() });

/* ---- search, live-batch, chart ---- */

export const searchQuerySchema = z.object({
  q: z.string().trim().min(1).max(100),
  chain: chainParam,
});
export const searchResponseSchema = z.object({
  tokens: z.array(trendingTokenSchema),
  agents: z.array(
    z.object({
      id: z.number().int(),
      name: z.string(),
      type: z.string(),
      avatarUrl: z.string().nullable(),
      tokenSymbol: z.string().nullable(),
    }),
  ),
  wallets: z.array(
    z.object({
      address: chainAddress,
      label: z.string().nullable(),
      tier: z.string().nullable(),
      pnlSol: z.number().nullable(),
    }),
  ),
  notice: z.string().optional(),
});

export const liveBatchBodySchema = z.object({
  mints: z.array(chainAddress).min(1).max(50),
});
export const liveBatchQuerySchema = z.object({ chain: chainParam });
export const liveBatchResponseSchema = z.object({
  data: z.record(
    z.string(),
    z.object({
      price: z.number().nullable(),
      marketCap: z.number().nullable(),
      liquidity: z.number().nullable(),
      volume: z.number().nullable(),
      buys: z.number().nullable(),
      sells: z.number().nullable(),
      txns: z.number().nullable(),
      change5m: z.number().nullable(),
      change1h: z.number().nullable(),
      change6h: z.number().nullable(),
      change24h: z.number().nullable(),
      image: z.string().nullable(),
    }),
  ),
});

export const chartIntervals = ["1m", "5m", "15m", "1h", "4h", "1d"] as const;
export const chartQuerySchema = z.object({
  mint: chainAddress,
  type: z.enum(chartIntervals).default("15m"),
  chain: chainParam,
  limit: z.coerce.number().int().min(1).max(1000).default(300),
});
/** `time` dalam detik (epoch), urut naik. */
export const chartResponseSchema = z.object({
  mint: chainAddress,
  type: z.enum(chartIntervals),
  candles: z.array(
    z.object({
      time: z.number(),
      open: z.number(),
      high: z.number(),
      low: z.number(),
      close: z.number(),
      volume: z.number(),
    }),
  ),
});

/* ---- agents, inbox, signals ---- */

export const agentTypeSchema = z.enum(["auto_trader", "signal_bot", "wallet_monitor", "token_analyst", "copy_trader"]);
export const pipelineSchema = z.enum(["follow_wallet", "new_tokens", "token_trading"]);
export const agentModeSchema = z.enum(["signal", "trading"]);

export const agentSummarySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  type: agentTypeSchema,
  chain: z.enum(["robinhood", "solana"]),
  running: z.boolean(),
  tokenSymbol: z.string().nullable(),
  /** Belum ada data trade agent: selalu null sampai siklus agent berjalan (tidak dikarang). */
  winRate: z.number().nullable(),
  runs: z.number().int(),
  createdAt: z.string(),
  /** Run terakhir (null bila belum pernah berjalan). `at` dalam detik. */
  lastRun: z.object({ n: z.number().int(), at: z.number(), ended: z.enum(["passed", "blocked", "stopped", "failed"]) }).nullable(),
});
export const agentDetailSchema = agentSummarySchema.extend({
  pipeline: pipelineSchema.nullable(),
  mode: agentModeSchema,
  config: z.record(z.string(), z.string()),
  limits: z.record(z.string(), z.string()),
  /** `dry` selama TRADE_MODE=dry: mode trading hanya simulasi. */
  execution: z.enum(["dry", "live"]),
});

/** Nilai config dari builder: string pendek; alamat wallet divalidasi Solana. */
export const agentCreateSchema = z
  .object({
    name: z.string().trim().min(1).max(80),
    pipeline: pipelineSchema,
    mode: agentModeSchema.default("signal"),
    config: z.record(z.string().max(60), z.string().max(300)).refine((c) => Object.keys(c).length <= 40, "terlalu banyak field"),
    limits: z.record(z.string().max(30), z.string().max(300)).default({}),
  })
  .superRefine((v, ctx) => {
    const w = v.config.wallet_address;
    if (v.pipeline === "follow_wallet" && !(typeof w === "string" && chainAddress.safeParse(w.trim()).success))
      ctx.addIssue({ code: "custom", path: ["config", "wallet_address"], message: "alamat wallet (EVM) wajib" });
    if (v.pipeline === "token_trading") {
      const m = v.config.token_mint;
      if (!(typeof m === "string" && chainAddress.safeParse(m.trim()).success))
        ctx.addIssue({ code: "custom", path: ["config", "token_mint"], message: "alamat token (EVM) wajib" });
    }
    if (v.mode === "trading") {
      const per = Number(v.limits.perTrade);
      if (!isFinite(per) || per <= 0) ctx.addIssue({ code: "custom", path: ["limits", "perTrade"], message: "batas per trade wajib untuk mode trading" });
    }
  });
export const agentUpdateSchema = z.object({ name: z.string().trim().min(1).max(80).optional(), running: z.boolean().optional() });
export const agentIdParamSchema = z.object({ id: z.coerce.number().int().positive() });

export const inboxResponseSchema = z.object({
  items: z.array(
    z.object({
      id: z.number().int(),
      kind: z.string(),
      title: z.string(),
      body: z.string().nullable(),
      /** Detik (epoch). */
      at: z.number(),
      read: z.boolean(),
    }),
  ),
});
export const signalsResponseSchema = z.object({
  signals: z.array(
    z.object({
      id: z.number().int(),
      type: z.string(),
      symbol: z.string().nullable(),
      mint: chainAddress,
      score: z.number().int(),
      at: z.number(),
    }),
  ),
});

export const runStepSchema = z.object({
  step: z.string(),
  detail: z.string(),
  outcome: z.enum(["passed", "blocked", "stopped", "failed"]),
  values: z.record(z.string(), z.unknown()),
});
export const agentRunsResponseSchema = z.object({
  runs: z.array(
    z.object({
      n: z.number().int(),
      at: z.string(),
      ended: z.enum(["passed", "blocked", "stopped", "failed"]),
      steps: z.array(runStepSchema),
    }),
  ),
});
export const runsQuerySchema = z.object({ limit: z.coerce.number().int().min(1).max(50).default(20) });

/* ---- watchlist wallet (My lists) ---- */

export const watchlistWalletParamSchema = z.object({ address: evmAddress });
export const watchlistsResponseSchema = z.object({
  lists: z.array(
    z.object({
      id: z.number().int(),
      name: z.string(),
      wallets: z.array(
        z.object({
          address: evmAddress,
          label: z.string().nullable(),
          tier: z.enum(["S", "A", "B", "C"]).nullable(),
          pnlEth: nullableNum,
          winRate: nullableNum,
          lastActive: nullableNum,
        }),
      ),
    }),
  ),
});
