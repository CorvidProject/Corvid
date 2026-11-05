import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { and, desc, eq, inArray, sql, type SQL } from "drizzle-orm";
import { z } from "zod";
import { agentIdParamSchema, errorSchema, marketAgentDetailSchema, marketAgentIdParamSchema, marketFeedResponseSchema, marketFollowingResponseSchema, publishBodySchema } from "@corvid/shared";
import { agentRuns, agents, profiles, subscriptions, swaps } from "@corvid/db";
import type { Db } from "../app";

// Marketplace: agent yang dipublikasikan pemiliknya. Angka hanya dari data yang tercatat:
// trades = swap simulasi (dry), signals = run yang lolos pipeline. PnL/win rate null (belum ada posisi tertutup yang dilacak).
const authErrors = { 401: errorSchema, 503: errorSchema };
const MAX_FOLLOWS = 200;
export const FEED_LIMIT = 200;

type AgentRow = typeof agents.$inferSelect;

export const marketplaceRoutes =
  ({ db, requireAuth }: { db: Db; requireAuth: (req: FastifyRequest, reply: FastifyReply) => Promise<unknown> }): FastifyPluginAsync =>
  async (instance) => {
    const app = instance.withTypeProvider<ZodTypeProvider>();
    const auth = { preHandler: requireAuth };
    const me = (req: FastifyRequest) => req.user!.id;

    async function present(rows: { a: AgentRow; name: string | null; avatar: string | null }[]) {
      if (rows.length === 0) return [];
      const ids = rows.map((r) => r.a.id);
      const [runs, trades, subs] = await Promise.all([
        db
          .select({ id: agentRuns.agentId, runs: sql<number>`count(*)::int`, passed: sql<number>`count(*) filter (where ${agentRuns.ended} = 'passed')::int`, last: sql<Date | null>`max(${agentRuns.ranAt})` })
          .from(agentRuns)
          .where(inArray(agentRuns.agentId, ids))
          .groupBy(agentRuns.agentId),
        db.select({ id: swaps.agentId, n: sql<number>`count(*)::int` }).from(swaps).where(inArray(swaps.agentId, ids)).groupBy(swaps.agentId),
        db.select({ id: subscriptions.agentId, n: sql<number>`count(*)::int` }).from(subscriptions).where(and(inArray(subscriptions.agentId, ids), eq(subscriptions.status, "active"))).groupBy(subscriptions.agentId),
      ]);
      const R = new Map(runs.map((x) => [x.id, x]));
      const T = new Map(trades.map((x) => [x.id, x.n]));
      const S = new Map(subs.map((x) => [x.id, x.n]));
      return rows.map(({ a, name, avatar }) => ({
        id: a.id,
        name: a.name,
        type: a.type,
        description: a.description,
        chain: "robinhood" as const,
        config: { _pipeline: a.pipeline, _mode: a.mode },
        creator: { display_name: name, avatar_url: avatar },
        published_at: (a.publishedAt ?? a.createdAt).toISOString(),
        last_run_at: R.get(a.id)?.last ? new Date(R.get(a.id)!.last as unknown as string).toISOString() : null,
        trades_count: T.get(a.id) ?? 0,
        runs_count: R.get(a.id)?.runs ?? 0,
        signals_count: R.get(a.id)?.passed ?? 0,
        closed_trades_count: 0,
        subscriber_count: S.get(a.id) ?? 0,
        avg_pnl_pct: null,
        win_rate: null,
        per_action_cost: 0,
        clones_count: a.publicClones,
      }));
    }

    const publishedRows = (extra?: SQL) =>
      db
        .select({ a: agents, name: profiles.displayName, avatar: profiles.avatarUrl })
        .from(agents)
        .innerJoin(profiles, eq(profiles.id, agents.ownerId))
        .where(extra ? and(eq(agents.published, true), extra) : eq(agents.published, true));

    app.get("/marketplace/feed", { schema: { tags: ["marketplace"], response: { 200: marketFeedResponseSchema } } }, async () => {
      const rows = await publishedRows().orderBy(desc(agents.publishedAt)).limit(FEED_LIMIT);
      return { agents: await present(rows) };
    });

    app.get(
      "/marketplace/agents/:id",
      { schema: { tags: ["marketplace"], params: marketAgentIdParamSchema, response: { 200: marketAgentDetailSchema, 404: errorSchema } } },
      async (req, reply) => {
        const [row] = await publishedRows(eq(agents.id, req.params.id)).limit(1);
        if (!row) return reply.code(404).send({ error: "not_found" });
        const [agent] = await present([row]);
        // Hanya ringkasan publik. Konfigurasi, batas, dan alamat di builder tidak ikut dibuka.
        return { agent, pipeline: row.a.pipeline, mode: row.a.mode, floor: row.a.floor, conviction: row.a.conviction, tokenSymbol: row.a.tokenSymbol };
      },
    );

    app.get("/marketplace/following", { ...auth, schema: { tags: ["marketplace"], response: { 200: marketFollowingResponseSchema, ...authErrors } } }, async (req) => {
      const rows = await db.select({ id: subscriptions.agentId }).from(subscriptions).where(and(eq(subscriptions.profileId, me(req)), eq(subscriptions.status, "active")));
      return { ids: rows.map((r) => r.id) };
    });

    app.post(
      "/marketplace/agents/:id/follow",
      { ...auth, schema: { tags: ["marketplace"], params: marketAgentIdParamSchema, response: { 200: z.object({ ok: z.literal(true) }), 404: errorSchema, 409: errorSchema, ...authErrors } } },
      async (req, reply) => {
        const [a] = await db.select({ id: agents.id }).from(agents).where(and(eq(agents.id, req.params.id), eq(agents.published, true))).limit(1);
        if (!a) return reply.code(404).send({ error: "not_found" });
        const [{ n }] = await db.select({ n: sql<number>`count(*)::int` }).from(subscriptions).where(eq(subscriptions.profileId, me(req)));
        if (n >= MAX_FOLLOWS) return reply.code(409).send({ error: "too_many_follows" });
        await db.insert(subscriptions).values({ profileId: me(req), agentId: a.id }).onConflictDoUpdate({ target: [subscriptions.profileId, subscriptions.agentId], set: { status: "active" } });
        return { ok: true as const };
      },
    );

    app.delete(
      "/marketplace/agents/:id/follow",
      { ...auth, schema: { tags: ["marketplace"], params: marketAgentIdParamSchema, response: { 200: z.object({ ok: z.literal(true) }), ...authErrors } } },
      async (req) => {
        await db.delete(subscriptions).where(and(eq(subscriptions.profileId, me(req)), eq(subscriptions.agentId, req.params.id)));
        return { ok: true as const };
      },
    );

    // Publikasi oleh pemilik. Membatalkan publikasi menghapus agent dari feed; pengikut lama tetap tercatat tetapi tidak menerima apa pun.
    app.put(
      "/agents/:id/publish",
      { ...auth, schema: { tags: ["marketplace"], params: agentIdParamSchema, body: publishBodySchema, response: { 200: z.object({ published: z.boolean(), description: z.string().nullable() }), 400: errorSchema, 404: errorSchema, ...authErrors } } },
      async (req, reply) => {
        const [a] = await db.select().from(agents).where(and(eq(agents.id, req.params.id), eq(agents.ownerId, me(req)))).limit(1);
        if (!a) return reply.code(404).send({ error: "agent_not_found" });
        const description = req.body.description !== undefined ? req.body.description || null : a.description;
        if (req.body.published && !description) return reply.code(400).send({ error: "description_required" });
        const [row] = await db
          .update(agents)
          .set({ published: req.body.published, description, publishedAt: req.body.published ? (a.publishedAt ?? new Date()) : a.publishedAt })
          .where(eq(agents.id, a.id))
          .returning();
        return { published: row.published, description: row.description };
      },
    );
  };
