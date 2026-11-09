import type { FastifyPluginAsync } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { and, desc, eq, sql } from "drizzle-orm";
import { z } from "zod";
import {
  memescopeCoins,
  platformStats,
  tokenSecurityChecks,
  tokenSecurityGroups,
  tokenSecurityMetrics,
  tokenSecurityReports,
  tokenTrades,
  tokenTrending,
  tokens,
} from "@corvid/db";
import {
  errorSchema,
  memescopeQuerySchema,
  memescopeResponseSchema,
  mintParamSchema,
  securityResponseSchema,
  statsSchema,
  tokenDetailSchema,
  tradesQuerySchema,
  tradesResponseSchema,
  trendingQuerySchema,
  trendingResponseSchema,
} from "@corvid/shared";
import type { Db } from "../app";
import { num, toDetail, toTrending } from "../mappers";
import { loadSparks, markWatched } from "../live";

const secs = (d: Date | null) => (d ? Math.floor(d.getTime() / 1000) : null);

export const marketRoutes =
  (db: Db): FastifyPluginAsync =>
  async (instance) => {
    const app = instance.withTypeProvider<ZodTypeProvider>();

    app.get("/stats", { schema: { tags: ["market"], response: { 200: statsSchema } } }, async () => {
      const [row] = await db.select().from(platformStats).limit(1);
      return {
        activeAgents: row?.activeAgents ?? 0,
        publishedAgents: row?.publishedAgents ?? 0,
        smartWallets: row?.smartWallets ?? 0,
        swapsExecuted: row?.swapsExecuted ?? 0,
      };
    });

    app.get(
      "/tokens/trending",
      { schema: { tags: ["market"], querystring: trendingQuerySchema, response: { 200: trendingResponseSchema } } },
      async (req) => {
        const { tab, limit } = req.query;
        const latest = db
          .select({ at: sql<Date>`max(${tokenTrending.snapshotAt})`.as("at") })
          .from(tokenTrending)
          .where(eq(tokenTrending.tab, tab))
          .as("latest");
        const rows = await db
          .select({ token: tokens })
          .from(tokenTrending)
          .innerJoin(tokens, eq(tokens.id, tokenTrending.tokenId))
          .innerJoin(latest, eq(latest.at, tokenTrending.snapshotAt))
          .where(eq(tokenTrending.tab, tab))
          .orderBy(tokenTrending.rank)
          .limit(limit);
        const sparks = await loadSparks(db, rows.map((r) => r.token.id));
        return {
          tokens: rows.map((r) => {
            const spark = sparks.get(r.token.id);
            const price = Number(r.token.priceUsd);
            // Last point = current price, ensuring line endpoint matches table price.
            return { ...toTrending(r.token), ...(spark ? { spark: price > 0 ? [...spark, price] : spark } : {}) };
          }),
        };
      },
    );

    app.get(
      "/tokens/trades",
      { schema: { tags: ["market"], querystring: tradesQuerySchema, response: { 200: tradesResponseSchema } } },
      async (req) => {
        const { mint, limit } = req.query;
        markWatched(db, [mint]);
        const rows = await db
          .select({ t: tokenTrades })
          .from(tokenTrades)
          .innerJoin(tokens, eq(tokens.id, tokenTrades.tokenId))
          .where(eq(tokens.mint, mint))
          .orderBy(desc(tokenTrades.tradedAt))
          .limit(limit);
        return {
          trades: rows.map(({ t }) => ({
            txHash: t.txHash,
            wallet: t.walletAddress,
            type: t.side,
            tokenAmount: Number(t.tokenAmount),
            ethAmount: num(t.ethAmount),
            priceUsd: num(t.priceUsd),
            marketCapUsd: num(t.marketCapUsd),
            timestamp: t.tradedAt.getTime(),
          })),
        };
      },
    );

    app.get(
      "/tokens/:mint/security",
      {
        schema: {
          tags: ["market"],
          params: mintParamSchema,
          response: { 200: securityResponseSchema, 404: errorSchema },
        },
      },
      async (req, reply) => {
        const [tok] = await db.select({ id: tokens.id }).from(tokens).where(eq(tokens.mint, req.params.mint)).limit(1);
        if (!tok) return reply.code(404).send({ error: "token_not_found" });
        const [report] = await db
          .select()
          .from(tokenSecurityReports)
          .where(eq(tokenSecurityReports.tokenId, tok.id))
          .orderBy(desc(tokenSecurityReports.checkedAt))
          .limit(1);
        if (!report) return { checked: false, groups: [], passed: 0, total: 0 };
        const groups = await db
          .select()
          .from(tokenSecurityGroups)
          .where(eq(tokenSecurityGroups.reportId, report.id))
          .orderBy(tokenSecurityGroups.sortOrder);
        const out = [];
        for (const g of groups) {
          const checks = await db
            .select()
            .from(tokenSecurityChecks)
            .where(eq(tokenSecurityChecks.groupId, g.id))
            .orderBy(tokenSecurityChecks.sortOrder);
          out.push({
            title: g.title,
            checks: checks.map((c) => ({
              label: c.label,
              state: c.state,
              ...(c.value ? { value: c.value } : {}),
              ...(c.hint ? { hint: c.hint } : {}),
            })),
          });
        }
        return { checked: report.checked, groups: out, passed: report.passed, total: report.total };
      },
    );

    app.get(
      "/tokens/:mint",
      {
        schema: {
          tags: ["market"],
          params: mintParamSchema,
          response: { 200: tokenDetailSchema, 404: errorSchema },
        },
      },
      async (req, reply) => {
        const [tok] = await db.select().from(tokens).where(eq(tokens.mint, req.params.mint)).limit(1);
        if (!tok) {
          // Canonical Paxos Global Dollar (USDG) stablecoin on Robinhood Chain
          const m = req.params.mint.toLowerCase();
          if (m === "0x5fc5360d0400a0fd4f2af552add042d716f1d168") {
            return {
              token: {
                name: "Global Dollar",
                symbol: "USDG",
                mint: m,
                image: "/brand/usdg.svg",
                description: "Global Dollar (USDG) is the official native US dollar stablecoin on Robinhood Chain, issued by Paxos.",
                links: ["https://paxos.com/usdg"],
                decimals: 6,
                price: 1.0,
                marketCap: null,
                liquidity: null,
                lpBurn: null,
                volume: null,
                buys: null,
                sells: null,
                txns: null,
                change1m: 0,
                change5m: 0,
                change1h: 0,
                change6h: 0,
                change24h: 0,
                risk: { score: 0, rugged: false, risks: [] },
                security: { freezeAuthority: null, mintAuthority: null },
                transferFeeBps: 0,
                totalSupply: null,
                topHoldersPercent: null,
                devHoldingsPercent: null,
                devWallet: null,
                sniperHoldingsPercent: null,
                bundlerHoldingsPercent: null,
                insidersPercent: null,
                insidersCount: null,
                bundlersCount: null,
                bundlersInitialPercent: null,
                snipersCount: null,
                jitoFees: null,
                jupiterVerified: true,
                holdersCount: null,
                creatorAddress: null,
                buyVolume: null,
                sellVolume: null,
                makers: null,
                buyers: null,
                sellers: null,
                poolId: null,
                market: "uniswap",
                createdAt: null,
              },
            };
          }
          return reply.code(404).send({ error: "token_not_found" });
        }
        markWatched(db, [tok.mint]);
        const [m] = await db.select().from(tokenSecurityMetrics).where(eq(tokenSecurityMetrics.tokenId, tok.id)).limit(1);
        return toDetail(tok, m ?? null);
      },
    );

    const memescopeHandler = async (req: { query: { stage: "new" | "stretch" | "migrated" } }) => {
        const rows = await db
          .select()
          .from(memescopeCoins)
          .where(and(eq(memescopeCoins.stage, req.query.stage)))
          // Final Stretch: closest to graduation first; others: newest first (NULLs last).
          .orderBy(
            req.query.stage === "stretch"
              ? sql`${memescopeCoins.progressPct} desc`
              : sql`${memescopeCoins.createdAtChain} desc nulls last`,
          )
          .limit(100);
        return {
          coins: rows.map((c) => ({
            mint: c.mint,
            name: c.name,
            symbol: c.symbol,
            image: c.imageUrl,
            progress: Number(c.progressPct),
            marketCapUsd: Number(c.marketCapUsd),
            athMarketCapUsd: num(c.athMarketCapUsd),
            createdAt: secs(c.createdAtChain),
            lastTradeAt: secs(c.lastTradeAt),
            replies: c.replies,
            complete: c.complete,
            live: c.live,
            creator: c.creator ?? "",
            dex: c.dex,
          })),
          at: Math.floor(Date.now() / 1000),
          stale: false,
        };
    };
    const memescopeSchema = { tags: ["market"], querystring: memescopeQuerySchema, response: { 200: memescopeResponseSchema } };
    app.get("/memescope", { schema: memescopeSchema }, memescopeHandler);
    // Legacy route kept temporarily for compatibility with older frontend deployments; remove after full migration.
    app.get("/solana/memescope", { schema: { ...memescopeSchema, hide: true } }, memescopeHandler);

    void z; // z used by imported schema
  };
