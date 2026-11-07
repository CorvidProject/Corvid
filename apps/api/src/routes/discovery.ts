import type { FastifyPluginAsync } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { and, desc, eq, ilike, inArray, or, sql } from "drizzle-orm";
import { agents, tokenCandles, tokens, wallets } from "@corvid/db";
import {
  chartQuerySchema,
  chartResponseSchema,
  errorSchema,
  liveBatchBodySchema,
  liveBatchQuerySchema,
  liveBatchResponseSchema,
  searchQuerySchema,
  searchResponseSchema,
  chainAddress,
  normalizeAddress,
} from "@corvid/shared";
import type { Db } from "../app";
import { num, toTrending } from "../mappers";
import { markWatched } from "../live";

const escapeLike = (s: string) => s.replace(/[\%_]/g, (c) => "\\" + c);

export const discoveryRoutes =
  (db: Db): FastifyPluginAsync =>
  async (instance) => {
    const app = instance.withTypeProvider<ZodTypeProvider>();

    app.get(
      "/search",
      { schema: { tags: ["market"], querystring: searchQuerySchema, response: { 200: searchResponseSchema } } },
      async (req) => {
        const q = escapeLike(req.query.q);
        const isMint = chainAddress.safeParse(req.query.q).success;

        const tokenRows = await db
          .select()
          .from(tokens)
          .where(
            or(
              ilike(tokens.symbol, `${q}%`),
              ilike(tokens.name, `%${q}%`),
              isMint ? eq(tokens.mint, normalizeAddress(req.query.q)) : ilike(tokens.mint, `${q}%`),
            ),
          )
          .orderBy(sql`${tokens.marketCapUsd} desc nulls last`)
          .limit(20);

        const agentRows = await db
          .select()
          .from(agents)
          .where(and(eq(agents.published, true), or(ilike(agents.name, `%${q}%`), ilike(agents.tokenSymbol, `${q}%`))))
          .limit(10);

        const walletRows = await db
          .select()
          .from(wallets)
          .where(or(ilike(wallets.address, `${q}%`), ilike(wallets.curatedLabel, `%${q}%`)))
          .limit(10);

        const notice =
          isMint && tokenRows.length === 0
            ? "Token not indexed yet. Corvid only lists tokens it has seen on-chain."
            : undefined;

        return {
          tokens: tokenRows.map(toTrending),
          agents: agentRows.map((a) => ({
            id: a.id,
            name: a.name,
            type: a.type,
            avatarUrl: a.avatarUrl,
            tokenSymbol: a.tokenSymbol,
          })),
          wallets: walletRows.map((w) => ({
            address: w.address,
            label: w.curatedLabel,
            tier: w.curatedTier,
            pnlEth: num(w.totalPnlEth),
          })),
          ...(notice ? { notice } : {}),
        };
      },
    );

    app.post(
      "/tokens/live-batch",
      {
        schema: {
          tags: ["market"],
          querystring: liveBatchQuerySchema,
          body: liveBatchBodySchema,
          response: { 200: liveBatchResponseSchema },
        },
      },
      async (req) => {
        markWatched(db, req.body.mints);
        const rows = await db.select().from(tokens).where(inArray(tokens.mint, req.body.mints));
        const data: Record<string, ReturnType<typeof pick>> = {};
        for (const t of rows) data[t.mint] = pick(t);
        return { data };
      },
    );

    app.get(
      "/tokens/chart",
      {
        schema: {
          tags: ["market"],
          querystring: chartQuerySchema,
          response: { 200: chartResponseSchema, 404: errorSchema },
        },
      },
      async (req, reply) => {
        const { mint, type, limit } = req.query;
        markWatched(db, [mint]);
        const [tok] = await db.select({ id: tokens.id }).from(tokens).where(eq(tokens.mint, mint)).limit(1);
        if (!tok) return reply.code(404).send({ error: "token_not_found" });
        const rows = await db
          .select()
          .from(tokenCandles)
          .where(and(eq(tokenCandles.tokenId, tok.id), eq(tokenCandles.interval, type)))
          .orderBy(desc(tokenCandles.bucketStart))
          .limit(limit);
        return {
          mint,
          type,
          candles: rows
            .reverse()
            .map((c) => ({
              time: Math.floor(c.bucketStart.getTime() / 1000),
              open: Number(c.open),
              high: Number(c.high),
              low: Number(c.low),
              close: Number(c.close),
              volume: Number(c.volumeUsd),
            })),
        };
      },
    );
  };

function pick(t: typeof tokens.$inferSelect) {
  return {
    price: num(t.priceUsd),
    marketCap: num(t.marketCapUsd),
    liquidity: num(t.liquidityUsd),
    volume: num(t.volumeUsd),
    buys: t.buys,
    sells: t.sells,
    txns: t.txns,
    change5m: num(t.change5mPct),
    change1h: num(t.change1hPct),
    change6h: num(t.change6hPct),
    change24h: num(t.change24hPct),
    image: t.imageUrl,
  };
}
