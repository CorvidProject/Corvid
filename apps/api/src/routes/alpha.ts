import type { FastifyPluginAsync } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { and, desc, eq, isNotNull, sql } from "drizzle-orm";
import { tokens, walletActivity, wallets } from "@corvid/db";
import { alphaActivityQuerySchema, alphaActivityResponseSchema, alphaCuratedQuerySchema, alphaCuratedResponseSchema } from "@corvid/shared";
import type { Db } from "../app";
import { num } from "../mappers";

// Sumber data: tabel wallets/wallet_activity yang diisi worker dari trade yang diindeks (jendela WINDOW_HOURS).
// Hanya wallet bertier yang ditampilkan; tidak ada data bawaan atau karangan.
const WINDOW_HOURS = 48;
const secs = (d: Date | null) => (d ? Math.floor(d.getTime() / 1000) : null);

export const alphaRoutes =
  (db: Db): FastifyPluginAsync =>
  async (instance) => {
    const app = instance.withTypeProvider<ZodTypeProvider>();

    app.get(
      "/alpha/curated",
      { schema: { tags: ["alpha"], querystring: alphaCuratedQuerySchema, response: { 200: alphaCuratedResponseSchema } } },
      async (req) => {
        const { limit, tier } = req.query;
        const rows = await db
          .select()
          .from(wallets)
          .where(and(isNotNull(wallets.curatedTier), tier ? eq(wallets.curatedTier, tier) : undefined))
          .orderBy(sql`${wallets.totalPnlEth} desc nulls last`)
          .limit(limit);
        return {
          wallets: rows.map((w) => ({
            address: w.address,
            label: w.curatedLabel,
            tier: w.curatedTier as "S" | "A" | "B" | "C" | null,
            winRate: num(w.winRate30dPct),
            pnlEth: num(w.totalPnlEth) ?? 0,
            trades: w.txCount30d ?? 0,
            closedTokens: w.closedTokens30d ?? 0,
            tokensTraded: w.tokensTraded ?? 0,
            avgHoldHours: num(w.avgHoldHours),
            lastActive: secs(w.lastActiveAt),
          })),
          windowHours: WINDOW_HOURS,
          at: Math.floor(Date.now() / 1000),
        };
      },
    );

    app.get(
      "/alpha/activity",
      { schema: { tags: ["alpha"], querystring: alphaActivityQuerySchema, response: { 200: alphaActivityResponseSchema } } },
      async (req) => {
        const rows = await db
          .select({ wallet: wallets.address, side: walletActivity.side, mint: walletActivity.mint, symbol: tokens.symbol, eth: walletActivity.amountEth, at: walletActivity.at })
          .from(walletActivity)
          .innerJoin(wallets, eq(wallets.id, walletActivity.walletId))
          .leftJoin(tokens, eq(tokens.id, walletActivity.tokenId))
          .where(isNotNull(wallets.curatedTier))
          .orderBy(desc(walletActivity.at))
          .limit(req.query.limit);
        return { activity: rows.map((r) => ({ wallet: r.wallet, side: r.side, symbol: r.symbol, mint: r.mint, eth: num(r.eth), at: Math.floor(r.at.getTime() / 1000) })) };
      },
    );
  };
