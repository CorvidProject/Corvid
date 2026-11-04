import { z } from "zod";
import { solanaAddress } from "@corvid/shared";
import { createHttp, type FetchLike, type Http } from "../http";

// GeckoTerminal API v2 (publik, tanpa key; batas laju ketat dan tidak terdokumentasi pasti, jaga <10 request/menit). Semua respons divalidasi zod.
const BASE = "https://api.geckoterminal.com/api/v2/networks/solana";
export const WSOL = "So11111111111111111111111111111111111111112";

const strNum = z.union([z.string(), z.number()]).nullable().optional();
const poolSchema = z.object({
  id: z.string(),
  attributes: z.object({
    address: z.string(),
    name: z.string().nullable().optional(),
    pool_created_at: z.string().nullable().optional(),
    base_token_price_usd: strNum,
    base_token_price_native_currency: strNum,
    fdv_usd: strNum,
    market_cap_usd: strNum,
    reserve_in_usd: strNum,
    volume_usd: z.object({ h1: strNum, h24: strNum }).partial().optional(),
    price_change_percentage: z.object({ m5: strNum, h1: strNum, h6: strNum, h24: strNum }).partial().optional(),
    transactions: z
      .object({ h24: z.object({ buys: z.number().nullable().optional(), sells: z.number().nullable().optional() }).partial() })
      .partial()
      .optional(),
  }),
  relationships: z.object({
    base_token: z.object({ data: z.object({ id: z.string() }) }),
    quote_token: z.object({ data: z.object({ id: z.string() }) }),
    dex: z.object({ data: z.object({ id: z.string() }) }).optional(),
  }),
});
const poolsResponse = z.object({ data: z.array(poolSchema) });

const tradeSchema = z.object({
  attributes: z.object({
    block_timestamp: z.string(),
    tx_hash: z.string(),
    tx_from_address: z.string(),
    kind: z.enum(["buy", "sell"]),
    from_token_address: z.string(),
    to_token_address: z.string(),
    from_token_amount: z.string(),
    to_token_amount: z.string(),
    price_from_in_usd: z.string().nullable().optional(),
    price_to_in_usd: z.string().nullable().optional(),
    is_anomalous: z.boolean().optional(),
  }),
});
const tradesResponse = z.object({ data: z.array(tradeSchema) });

const ohlcvResponse = z.object({
  data: z.object({ attributes: z.object({ ohlcv_list: z.array(z.tuple([z.number(), z.number(), z.number(), z.number(), z.number(), z.number()])) }) }),
});

export interface Pool {
  poolAddress: string;
  baseMint: string;
  quoteMint: string;
  dex: string | null;
  name: string | null;
  createdAt: Date | null;
  priceUsd: string | null;
  /** Harga dalam mata uang native chain (SOL). */
  priceNative: string | null;
  marketCapUsd: string | null;
  /** FDV = harga x total supply. Untuk token pump.fun (supply tetap 1 miliar) lebih andal daripada market_cap_usd. */
  fdvUsd: string | null;
  liquidityUsd: string | null;
  volume24hUsd: string | null;
  volume1hUsd: string | null;
  change5m: string | null;
  change1h: string | null;
  change6h: string | null;
  change24h: string | null;
  buys24h: number | null;
  sells24h: number | null;
}
export interface PoolTrade {
  txHash: string;
  wallet: string;
  side: "buy" | "sell";
  tokenAmount: string;
  /** Jumlah SOL hanya bila token kuotasi pool adalah wSOL; selain itu null. */
  solAmount: string | null;
  priceUsd: string | null;
  at: Date;
}
export interface Candle {
  bucketStart: Date;
  open: string;
  high: string;
  low: string;
  close: string;
  volumeUsd: string;
}

const s = (v: string | number | null | undefined) => (v === null || v === undefined || v === "" ? null : String(v));
const mintOf = (id: string) => id.replace(/^solana_/, "");

export function parsePools(json: unknown): Pool[] {
  const out: Pool[] = [];
  for (const p of poolsResponse.parse(json).data) {
    const baseMint = mintOf(p.relationships.base_token.data.id);
    if (!solanaAddress.safeParse(baseMint).success) continue; // buang alamat non-Solana
    const a = p.attributes;
    out.push({
      poolAddress: a.address,
      baseMint,
      quoteMint: mintOf(p.relationships.quote_token.data.id),
      dex: p.relationships.dex?.data.id ?? null,
      name: a.name ?? null,
      createdAt: a.pool_created_at ? new Date(a.pool_created_at) : null,
      priceUsd: s(a.base_token_price_usd),
      priceNative: s(a.base_token_price_native_currency),
      marketCapUsd: s(a.market_cap_usd) ?? s(a.fdv_usd),
      fdvUsd: s(a.fdv_usd),
      liquidityUsd: s(a.reserve_in_usd),
      volume24hUsd: s(a.volume_usd?.h24),
      volume1hUsd: s(a.volume_usd?.h1),
      change5m: s(a.price_change_percentage?.m5),
      change1h: s(a.price_change_percentage?.h1),
      change6h: s(a.price_change_percentage?.h6),
      change24h: s(a.price_change_percentage?.h24),
      buys24h: a.transactions?.h24?.buys ?? null,
      sells24h: a.transactions?.h24?.sells ?? null,
    });
  }
  return out;
}

/** Trade dilihat dari sisi token dasar (base) pool. */
export function parseTrades(json: unknown, baseMint: string): PoolTrade[] {
  const out: PoolTrade[] = [];
  for (const { attributes: t } of tradesResponse.parse(json).data) {
    if (t.is_anomalous) continue;
    const sell = t.kind === "sell"; // sell = menjual base, mendapat quote
    const baseAmount = sell ? t.from_token_amount : t.to_token_amount;
    const quoteAmount = sell ? t.to_token_amount : t.from_token_amount;
    const baseAddr = sell ? t.from_token_address : t.to_token_address;
    const quoteAddr = sell ? t.to_token_address : t.from_token_address;
    if (baseAddr !== baseMint) continue; // pastikan sisi yang benar
    out.push({
      txHash: t.tx_hash,
      wallet: t.tx_from_address,
      side: t.kind,
      tokenAmount: baseAmount,
      solAmount: quoteAddr === WSOL ? quoteAmount : null,
      priceUsd: s(sell ? t.price_from_in_usd : t.price_to_in_usd),
      at: new Date(t.block_timestamp),
    });
  }
  return out;
}

export function parseOhlcv(json: unknown): Candle[] {
  return ohlcvResponse
    .parse(json)
    .data.attributes.ohlcv_list.map(([t, o, h, l, c, v]) => ({
      bucketStart: new Date(t * 1000),
      open: String(o),
      high: String(h),
      low: String(l),
      close: String(c),
      volumeUsd: String(v),
    }))
    .sort((a, b) => a.bucketStart.getTime() - b.bucketStart.getTime());
}

export type ChartInterval = "1m" | "5m" | "15m" | "1h" | "4h" | "1d";
const TF: Record<ChartInterval, [string, number]> = {
  "1m": ["minute", 1],
  "5m": ["minute", 5],
  "15m": ["minute", 15],
  "1h": ["hour", 1],
  "4h": ["hour", 4],
  "1d": ["day", 1],
};

export function createGeckoTerminal(opts: { fetch?: FetchLike; minIntervalMs?: number; sleep?: (ms: number) => Promise<void> } = {}) {
  const http: Http = createHttp({
    fetch: opts.fetch,
    sleep: opts.sleep,
    minIntervalMs: opts.minIntervalMs ?? 6500, // ~9 request/menit; 2,2 dtk (27/mnt) terbukti kena 429
    headers: { accept: "application/json;version=20230203" },
  });
  return {
    async trendingPools(): Promise<Pool[]> {
      return parsePools(await http.getJson(`${BASE}/trending_pools?page=1`));
    },
    async newPools(page = 1): Promise<Pool[]> {
      return parsePools(await http.getJson(`${BASE}/new_pools?page=${page}`));
    },
    /** Pool per DEX (mis. "pump-fun", "pumpswap"), diurutkan menurut volume 24 jam. */
    async dexPools(dex: string): Promise<Pool[]> {
      return parsePools(await http.getJson(`${BASE}/dexes/${dex}/pools?page=1&sort=h24_volume_usd_desc`));
    },
    async ohlcv(pool: string, interval: ChartInterval, limit = 200): Promise<Candle[]> {
      const [tf, agg] = TF[interval];
      return parseOhlcv(await http.getJson(`${BASE}/pools/${pool}/ohlcv/${tf}?aggregate=${agg}&limit=${limit}`));
    },
    async poolTrades(pool: string, baseMint: string): Promise<PoolTrade[]> {
      return parseTrades(await http.getJson(`${BASE}/pools/${pool}/trades`), baseMint);
    },
  };
}
export type GeckoTerminal = ReturnType<typeof createGeckoTerminal>;
