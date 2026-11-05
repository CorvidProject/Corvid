import type { FastifyPluginAsync } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { errorSchema, solPriceSchema } from "@corvid/shared";

/** Mengembalikan harga ETH (native Robinhood Chain) dalam USD. Boleh melempar bila sumber gagal. */
export type SolPriceSource = () => Promise<number>;

/** CoinGecko (tanpa key, rate limit publik). Diganti/ditambah Jupiter bila perlu. */
export const coingeckoSolPrice: SolPriceSource = async () => {
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
  (source: SolPriceSource): FastifyPluginAsync =>
  async (instance) => {
    const app = instance.withTypeProvider<ZodTypeProvider>();
    let cache: { usd: number; at: number } | null = null;
    let inflight: Promise<number> | null = null;

    // "/prices/native" = nama baru; "/prices/sol" dipertahankan sementara untuk klien lama (mengembalikan harga ETH).
    for (const url of ["/prices/native", "/prices/sol"]) app.get(
      url,
      { schema: { tags: ["market"], response: { 200: solPriceSchema, 503: errorSchema } } },
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
