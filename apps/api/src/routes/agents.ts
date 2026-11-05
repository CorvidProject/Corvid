import type { FastifyPluginAsync, FastifyRequest } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { and, desc, eq, sql } from "drizzle-orm";
import { z } from "zod";
import { agentRunSteps, agentRuns, agents, notifications, signals, tokens } from "@corvid/db";
import {
  agentCreateSchema,
  agentDetailSchema,
  agentIdParamSchema,
  agentRunsResponseSchema,
  runsQuerySchema,
  agentSummarySchema,
  agentUpdateSchema,
  errorSchema,
  inboxResponseSchema,
  pipelineSchema,
  signalsResponseSchema,
} from "@corvid/shared";
import type { Db } from "../app";

export const MAX_AGENTS_PER_USER = 20;

type AgentRow = typeof agents.$inferSelect;
type Pipeline = z.infer<typeof pipelineSchema>;

/** Jenis agent untuk tampilan, diturunkan dari pipeline dan mode builder. */
export function agentType(pipeline: string | null, mode: string): AgentRow["type"] {
  if (mode === "trading") return pipeline === "follow_wallet" ? "copy_trader" : "auto_trader";
  const m: Record<Pipeline, AgentRow["type"]> = { follow_wallet: "wallet_monitor", new_tokens: "signal_bot", token_trading: "token_analyst" };
  return (pipeline && m[pipeline as Pipeline]) || "signal_bot";
}

export interface AgentRouteOptions {
  db: Db;
  /** PreHandler dari userRoutes: mengisi req.user atau menolak 401/503. */
  requireAuth: (req: FastifyRequest, reply: import("fastify").FastifyReply) => Promise<unknown>;
  tradeMode: "dry" | "live";
}

const authErrors = { 401: errorSchema, 503: errorSchema };

export const agentRoutes =
  ({ db, requireAuth, tradeMode }: AgentRouteOptions): FastifyPluginAsync =>
  async (instance) => {
    const app = instance.withTypeProvider<ZodTypeProvider>();
    const auth = { preHandler: requireAuth };
    const me = (req: FastifyRequest) => req.user!.id;

    type LastRun = { n: number; at: number; ended: "passed" | "blocked" | "stopped" | "failed" } | null;
    const summary = (a: AgentRow, runs: number, lastRun: LastRun = null) => ({
      id: a.id,
      name: a.name,
      type: a.type,
      chain: "robinhood" as const,
      running: a.running,
      tokenSymbol: a.tokenSymbol,
      winRate: null,
      runs,
      createdAt: a.createdAt.toISOString(),
      lastRun,
    });
    const lastRunOf = async (id: number): Promise<LastRun> => {
      const [r] = await db.select().from(agentRuns).where(eq(agentRuns.agentId, id)).orderBy(desc(agentRuns.ranAt), desc(agentRuns.runNumber)).limit(1);
      return r ? { n: r.runNumber, at: Math.floor(r.ranAt.getTime() / 1000), ended: r.ended } : null;
    };
    const detail = (a: AgentRow, runs: number, lastRun: LastRun = null) => ({
      ...summary(a, runs, lastRun),
      pipeline: a.pipeline as Pipeline | null,
      mode: a.mode as "signal" | "trading",
      config: a.config as Record<string, string>,
      limits: a.limits as Record<string, string>,
      execution: tradeMode,
    });
    const owned = async (id: number, uid: string) => {
      const [a] = await db.select().from(agents).where(and(eq(agents.id, id), eq(agents.ownerId, uid))).limit(1);
      return a ?? null;
    };
    const runCount = async (id: number) =>
      (await db.select({ n: sql<number>`count(*)::int` }).from(agentRuns).where(eq(agentRuns.agentId, id)))[0]?.n ?? 0;

    app.get(
      "/agents",
      { ...auth, schema: { tags: ["agents"], response: { 200: z.object({ agents: z.array(agentSummarySchema) }), ...authErrors } } },
      async (req) => {
        const rows = await db.select().from(agents).where(eq(agents.ownerId, me(req))).orderBy(desc(agents.createdAt));
        const counts = rows.length
          ? await db
              .select({ id: agentRuns.agentId, n: sql<number>`count(*)::int` })
              .from(agentRuns)
              .where(sql`${agentRuns.agentId} in ${rows.map((r) => r.id)}`)
              .groupBy(agentRuns.agentId)
          : [];
        const by = new Map(counts.map((c) => [c.id, c.n]));
        const lasts = rows.length
          ? await db
              .selectDistinctOn([agentRuns.agentId], { id: agentRuns.agentId, n: agentRuns.runNumber, at: agentRuns.ranAt, ended: agentRuns.ended })
              .from(agentRuns)
              .where(sql`${agentRuns.agentId} in ${rows.map((r) => r.id)}`)
              .orderBy(agentRuns.agentId, desc(agentRuns.ranAt), desc(agentRuns.runNumber))
          : [];
        const lastBy = new Map(lasts.map((l) => [l.id, { n: l.n, at: Math.floor(l.at.getTime() / 1000), ended: l.ended }]));
        return { agents: rows.map((a) => summary(a, by.get(a.id) ?? 0, lastBy.get(a.id) ?? null)) };
      },
    );

    app.post(
      "/agents",
      { ...auth, schema: { tags: ["agents"], body: agentCreateSchema, response: { 201: agentDetailSchema, 409: errorSchema, ...authErrors } } },
      async (req, reply) => {
        const uid = me(req);
        const [{ n }] = await db.select({ n: sql<number>`count(*)::int` }).from(agents).where(eq(agents.ownerId, uid));
        if (n >= MAX_AGENTS_PER_USER) return reply.code(409).send({ error: "agent_limit" });
        const b = req.body;
        const mint = b.config.token_mint?.trim() ?? null;
        const [known] = mint ? await db.select({ symbol: tokens.symbol }).from(tokens).where(eq(tokens.mint, mint)).limit(1) : [];
        // Selama server `dry`, mode trading hanya simulasi (tidak ada transaksi nyata).
        const [row] = await db
          .insert(agents)
          .values({
            ownerId: uid,
            name: b.name,
            type: agentType(b.pipeline, b.mode),
            pipeline: b.pipeline,
            mode: b.mode,
            config: b.config,
            limits: b.limits,
            tokenMint: mint,
            tokenSymbol: known?.symbol?.trim() || null,
            running: false,
          })
          .returning();
        return reply.code(201).send(detail(row, 0));
      },
    );

    app.get(
      "/agents/:id",
      { ...auth, schema: { tags: ["agents"], params: agentIdParamSchema, response: { 200: agentDetailSchema, 404: errorSchema, ...authErrors } } },
      async (req, reply) => {
        const a = await owned(req.params.id, me(req));
        if (!a) return reply.code(404).send({ error: "agent_not_found" }); // milik orang lain = tidak ada
        return detail(a, await runCount(a.id), await lastRunOf(a.id));
      },
    );

    // Riwayat run (terbaru dulu) dengan langkah-langkahnya, bentuk sama dengan referensi.
    app.get(
      "/agents/:id/runs",
      { ...auth, schema: { tags: ["agents"], params: agentIdParamSchema, querystring: runsQuerySchema, response: { 200: agentRunsResponseSchema, 404: errorSchema, ...authErrors } } },
      async (req, reply) => {
        const a = await owned(req.params.id, me(req));
        if (!a) return reply.code(404).send({ error: "agent_not_found" });
        const runs = await db.select().from(agentRuns).where(eq(agentRuns.agentId, a.id)).orderBy(desc(agentRuns.ranAt), desc(agentRuns.runNumber)).limit(req.query.limit);
        const steps = runs.length
          ? await db.select().from(agentRunSteps).where(sql`${agentRunSteps.runId} in ${runs.map((r) => r.id)}`).orderBy(agentRunSteps.runId, agentRunSteps.sortOrder)
          : [];
        return {
          runs: runs.map((r) => ({
            n: r.runNumber,
            at: r.ranAt.toISOString(),
            ended: r.ended,
            steps: steps.filter((s) => s.runId === r.id).map((s) => ({ step: s.stepName, detail: s.detail ?? "", outcome: s.outcome, values: s.stepValues as Record<string, unknown> })),
          })),
        };
      },
    );

    app.put(
      "/agents/:id",
      { ...auth, schema: { tags: ["agents"], params: agentIdParamSchema, body: agentUpdateSchema, response: { 200: agentDetailSchema, 404: errorSchema, ...authErrors } } },
      async (req, reply) => {
        const a = await owned(req.params.id, me(req));
        if (!a) return reply.code(404).send({ error: "agent_not_found" });
        const set: Partial<typeof agents.$inferInsert> = {};
        if (req.body.name !== undefined) set.name = req.body.name;
        if (req.body.running !== undefined) set.running = req.body.running;
        const [row] = Object.keys(set).length ? await db.update(agents).set(set).where(eq(agents.id, a.id)).returning() : [a];
        return detail(row, await runCount(a.id));
      },
    );

    app.delete(
      "/agents/:id",
      { ...auth, schema: { tags: ["agents"], params: agentIdParamSchema, response: { 200: z.object({ ok: z.literal(true) }), 404: errorSchema, ...authErrors } } },
      async (req, reply) => {
        const res = await db.delete(agents).where(and(eq(agents.id, req.params.id), eq(agents.ownerId, me(req)))).returning({ id: agents.id });
        if (res.length === 0) return reply.code(404).send({ error: "agent_not_found" });
        return { ok: true as const };
      },
    );

    /* ---- inbox (notifikasi pengguna) ---- */
    app.get(
      "/inbox",
      { ...auth, schema: { tags: ["inbox"], response: { 200: inboxResponseSchema, ...authErrors } } },
      async (req) => {
        const rows = await db.select().from(notifications).where(eq(notifications.profileId, me(req))).orderBy(desc(notifications.at)).limit(100);
        return { items: rows.map((n) => ({ id: n.id, kind: n.kind, title: n.title, body: n.body, at: Math.floor(n.at.getTime() / 1000), read: n.read })) };
      },
    );
    app.post(
      "/inbox/read-all",
      { ...auth, schema: { tags: ["inbox"], response: { 200: z.object({ updated: z.number().int() }), ...authErrors } } },
      async (req) => {
        const res = await db.update(notifications).set({ read: true }).where(and(eq(notifications.profileId, me(req)), eq(notifications.read, false))).returning({ id: notifications.id });
        return { updated: res.length };
      },
    );

    /* ---- signals publik ---- */
    app.get("/signals", { schema: { tags: ["inbox"], response: { 200: signalsResponseSchema } } }, async () => {
      const rows = await db.select().from(signals).orderBy(desc(signals.at)).limit(50);
      return { signals: rows.map((s) => ({ id: s.id, type: s.type, symbol: s.symbol, mint: s.mint, score: s.score, at: Math.floor(s.at.getTime() / 1000) })) };
    });
  };
