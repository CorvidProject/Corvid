import type { FastifyPluginAsync } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { errorSchema, ethPriceSchema } from "@corvid/shared";
import { getChain } from "@corvid/shared/chains";

/** Mengembalikan harga ETH (native Robinhood Chain) dalam USD. Boleh melempar bila sumber gagal. */
export type EthPriceSource = () => Promise<number>;

/** Cadangan: harga WETH di jaringan Robinhood Chain dari GeckoTerminal (dipakai bila CoinGecko menolak IP server, mis. 429). */
const geckoTerminalEthPrice: EthPriceSource = async () => {
  const weth = getChain("mainnet").wrappedNative;
  const res = await fetch(`https://api.geckoterminal.com/api/v2/simple/networks/robinhood/token_price/${weth}`, {
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(5000),
  });
  if (!res.ok) throw new Error(`geckoterminal ${res.status}`);
  const j = (await res.json()) as { data?: { attributes?: { token_prices?: Record<string, string> } } };
  const usd = Number(j.data?.attributes?.token_prices?.[weth]);
  if (!isFinite(usd) || usd <= 0) throw new Error("geckoterminal: bentuk tidak valid");
  return usd;
};

/** CoinGecko (tanpa key, rate limit publik); gagal → GeckoTerminal. */
export const ethPriceSource: EthPriceSource = async () => {
  try {
    return await coingeckoEthPrice();
  } catch {
    return geckoTerminalEthPrice();
  }
};

const coingeckoEthPrice: EthPriceSource = async () => {
  const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd", {
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(5000),
  });
  if (!res.ok) throw new Error(`coingecko ${res.status}`);
  const j = (await res.json()) as { ethereum?: { usd?: number } };
  const usd = j.ethereum?.usd;
  if (typeof usd !== "number" || !isFinite(usd) || usd <= 0) throw new Error("coingecko: bentuk tidak valid");
  return usd;
};

const TTL_MS = 30_000;
const STALE_MS = 10 * 60_000;

export const priceRoutes =
  (source: EthPriceSource): FastifyPluginAsync =>
  async (instance) => {
    const app = instance.withTypeProvider<ZodTypeProvider>();
    let cache: { usd: number; at: number } | null = null;
    let inflight: Promise<number> | null = null;

    app.get(
      "/prices/native",
      { schema: { tags: ["market"], response: { 200: ethPriceSchema, 503: errorSchema } } },
      async (_req, reply) => {
        const now = Date.now();
        if (cache && now - cache.at < TTL_MS) return { usd: cache.usd };
        try {
          inflight ??= source().finally(() => (inflight = null));
          const usd = await inflight;
          cache = { usd, at: Date.now() };
          return { usd };
        } catch {
          // Sumber gagal: pakai nilai lama sampai 10 menit, selebihnya 503.
          if (cache && now - cache.at < STALE_MS) return { usd: cache.usd };
          return reply.code(503).send({ error: "price_unavailable" });
        }
      },
    );
  };
