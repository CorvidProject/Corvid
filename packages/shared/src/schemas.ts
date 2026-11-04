import { z } from "zod";

/** Alamat/mint Solana base58. */
export const solanaAddress = z
  .string()
  .regex(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/, "bukan alamat Solana yang valid");

/** Parameter `chain` hanya menerima `solana`. */
export const chainParam = z.literal("solana").default("solana");

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
  mint: solanaAddress,
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
  chain: z.literal("solana"),
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
    mint: solanaAddress,
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
  mint: solanaAddress,
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
      mint: solanaAddress,
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

export const mintParamSchema = z.object({ mint: solanaAddress });

export const errorSchema = z.object({ error: z.string() });

export const solPriceSchema = z.object({ usd: z.number() });
