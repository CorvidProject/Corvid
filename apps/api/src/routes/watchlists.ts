import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { and, eq, inArray, sql } from "drizzle-orm";
import { z } from "zod";
import { watchlistWallets, watchlists, wallets } from "@corvid/db";
import { errorSchema, watchlistWalletParamSchema, watchlistsResponseSchema } from "@corvid/shared";
import type { Db } from "../app";
import { num } from "../mappers";

// Satu daftar bawaan per pengguna ("Starred"), dibuat saat bintang pertama. Alamat disimpan lowercase.
const DEFAULT_LIST = "Starred";
export const MAX_WATCHED_WALLETS = 200;
const authErrors = { 401: errorSchema, 503: errorSchema };

export const watchlistRoutes =
  ({ db, requireAuth }: { db: Db; requireAuth: (req: FastifyRequest, reply: FastifyReply) => Promise<unknown> }): FastifyPluginAsync =>
  async (instance) => {
    const app = instance.withTypeProvider<ZodTypeProvider>();
    const auth = { preHandler: requireAuth };
    const me = (req: FastifyRequest) => req.user!.id;

    app.get("/alpha/watchlists", { ...auth, schema: { tags: ["alpha"], response: { 200: watchlistsResponseSchema, ...authErrors } } }, async (req) => {
      const lists = await db.select().from(watchlists).where(eq(watchlists.profileId, me(req))).orderBy(watchlists.id);
      if (lists.length === 0) return { lists: [] };
      const members = await db.select().from(watchlistWallets).where(inArray(watchlistWallets.watchlistId, lists.map((l) => l.id)));
      const info = members.length
        ? await db.select().from(wallets).where(inArray(wallets.address, members.map((m) => m.address)))
        : [];
      const byAddr = new Map(info.map((w) => [w.address, w]));
      return {
        lists: lists.map((l) => ({
          id: l.id,
          name: l.name,
          wallets: members
            .filter((m) => m.watchlistId === l.id)
            .map((m) => {
              const w = byAddr.get(m.address);
              return {
                address: m.address,
                label: w?.curatedLabel ?? null,
                tier: (w?.curatedTier as "S" | "A" | "B" | "C" | null | undefined) ?? null,
                pnlEth: num(w?.totalPnlEth),
                winRate: num(w?.winRate30dPct),
                lastActive: w?.lastActiveAt ? Math.floor(w.lastActiveAt.getTime() / 1000) : null,
              };
            }),
        })),
      };
    });

    app.put(
      "/alpha/watchlists/wallets/:address",
      { ...auth, schema: { tags: ["alpha"], params: watchlistWalletParamSchema, response: { 200: z.object({ ok: z.literal(true) }), 409: errorSchema, ...authErrors } } },
      async (req, reply) => {
        const address = req.params.address.toLowerCase();
        return db.transaction(async (tx) => {
          let [list] = await tx.select().from(watchlists).where(and(eq(watchlists.profileId, me(req)), eq(watchlists.name, DEFAULT_LIST))).limit(1);
          if (!list) [list] = await tx.insert(watchlists).values({ profileId: me(req), name: DEFAULT_LIST }).returning();
          const [{ n }] = await tx.select({ n: sql<number>`count(*)::int` }).from(watchlistWallets).where(eq(watchlistWallets.watchlistId, list.id));
          if (n >= MAX_WATCHED_WALLETS) return reply.code(409).send({ error: "watchlist_full" });
          await tx.insert(watchlistWallets).values({ watchlistId: list.id, address }).onConflictDoNothing();
          return { ok: true as const };
        });
      },
    );

    app.delete(
      "/alpha/watchlists/wallets/:address",
      { ...auth, schema: { tags: ["alpha"], params: watchlistWalletParamSchema, response: { 200: z.object({ ok: z.literal(true) }), ...authErrors } } },
      async (req) => {
        const owned = db.select({ id: watchlists.id }).from(watchlists).where(eq(watchlists.profileId, me(req)));
        await db.delete(watchlistWallets).where(and(inArray(watchlistWallets.watchlistId, owned), eq(watchlistWallets.address, req.params.address.toLowerCase())));
        return { ok: true as const };
      },
    );
  };
