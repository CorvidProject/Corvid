import { z } from "zod";
import { solanaAddress } from "@corvid/shared";
import { createHttp, type FetchLike } from "../http";

// DexScreener (publik, tanpa key). Endpoint batch: /tokens/v1/solana/{mint1,mint2,...} (maks 30).
const BASE = "https://api.dexscreener.com/tokens/v1/solana";
export const DS_BATCH = 30;

const n = z.number().nullable().optional();
const pairSchema = z.object({
  chainId: z.string(),
  dexId: z.string().optional(),
  pairAddress: z.string(),
  baseToken: z.object({ address: z.string(), name: z.string().nullable().optional(), symbol: z.string().nullable().optional() }),
  quoteToken: z.object({ address: z.string() }),
  priceUsd: z.string().nullable().optional(),
  txns: z.object({ h24: z.object({ buys: n, sells: n }).partial() }).partial().optional(),
  volume: z.object({ h24: n, h1: n }).partial().optional(),
  priceChange: z.object({ m5: n, h1: n, h6: n, h24: n }).partial().optional(),
  liquidity: z.object({ usd: n }).partial().optional(),
  marketCap: n,
  fdv: n,
  pairCreatedAt: n,
  info: z
    .object({
      imageUrl: z.string().nullable().optional(),
      websites: z.array(z.object({ url: z.string() })).optional(),
      socials: z.array(z.object({ type: z.string(), url: z.string() })).optional(),
    })
    .partial()
    .optional(),
});
const response = z.array(pairSchema);

export interface DsToken {
  mint: string;
  name: string | null;
  symbol: string | null;
  image: string | null;
  poolAddress: string;
  quoteMint: string;
  dex: string | null;
  priceUsd: string | null;
  marketCapUsd: string | null;
  liquidityUsd: string | null;
  volume24hUsd: string | null;
  volume1hUsd: string | null;
  change5m: string | null;
  change1h: string | null;
  change6h: string | null;
  change24h: string | null;
  buys24h: number | null;
  sells24h: number | null;
  createdAt: Date | null;
  website: string | null;
  twitter: string | null;
  telegram: string | null;
}

const s = (v: string | number | null | undefined) => (v === null || v === undefined ? null : String(v));

/** Satu entri per token: pasangan dengan likuiditas USD tertinggi. */
export function parseTokens(json: unknown): DsToken[] {
  const best = new Map<string, { liq: number; t: DsToken }>();
  for (const p of response.parse(json)) {
    if (p.chainId !== "solana" || !solanaAddress.safeParse(p.baseToken.address).success) continue;
    const liq = p.liquidity?.usd ?? 0;
    const prev = best.get(p.baseToken.address);
    if (prev && prev.liq >= liq) continue;
    const social = (type: string) => p.info?.socials?.find((x) => x.type === type)?.url ?? null;
    best.set(p.baseToken.address, {
      liq,
      t: {
        mint: p.baseToken.address,
        name: p.baseToken.name ?? null,
        symbol: p.baseToken.symbol ?? null,
        image: p.info?.imageUrl ?? null,
        poolAddress: p.pairAddress,
        quoteMint: p.quoteToken.address,
        dex: p.dexId ?? null,
        priceUsd: p.priceUsd ?? null,
        marketCapUsd: s(p.marketCap ?? p.fdv),
        liquidityUsd: s(p.liquidity?.usd),
        volume24hUsd: s(p.volume?.h24),
        volume1hUsd: s(p.volume?.h1),
        change5m: s(p.priceChange?.m5),
        change1h: s(p.priceChange?.h1),
        change6h: s(p.priceChange?.h6),
        change24h: s(p.priceChange?.h24),
        buys24h: p.txns?.h24?.buys ?? null,
        sells24h: p.txns?.h24?.sells ?? null,
        createdAt: p.pairCreatedAt ? new Date(p.pairCreatedAt) : null,
        website: p.info?.websites?.[0]?.url ?? null,
        twitter: social("twitter"),
        telegram: social("telegram"),
      },
    });
  }
  return [...best.values()].map((b) => b.t);
}

export function createDexScreener(opts: { fetch?: FetchLike; minIntervalMs?: number; sleep?: (ms: number) => Promise<void> } = {}) {
  const http = createHttp({ fetch: opts.fetch, sleep: opts.sleep, minIntervalMs: opts.minIntervalMs ?? 250 }); // < 300/menit
  return {
    async tokens(mints: string[]): Promise<DsToken[]> {
      const valid = [...new Set(mints)].filter((m) => solanaAddress.safeParse(m).success);
      const out: DsToken[] = [];
      for (let i = 0; i < valid.length; i += DS_BATCH) {
        const chunk = valid.slice(i, i + DS_BATCH);
        out.push(...parseTokens(await http.getJson(`${BASE}/${chunk.join(",")}`)));
      }
      return out;
    },
  };
}
export type DexScreener = ReturnType<typeof createDexScreener>;
