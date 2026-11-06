import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { monthWindow, PLAN_LIMITS, planResponseSchema, errorSchema, type PlanLimitsByPlan } from "@corvid/shared";
import type { Db } from "../app";
import { loadAllowance } from "../plan";

export const planRoutes =
  ({
    db,
    requireAuth,
    limits = PLAN_LIMITS,
    paymentsEnabled = false,
  }: {
    db: Db;
    requireAuth: (req: FastifyRequest, reply: FastifyReply) => Promise<unknown>;
    limits?: PlanLimitsByPlan;
    paymentsEnabled?: boolean;
  }): FastifyPluginAsync =>
  async (instance) => {
    const app = instance.withTypeProvider<ZodTypeProvider>();
    app.get(
      "/plan",
      { preHandler: requireAuth, schema: { tags: ["plan"], response: { 200: planResponseSchema, 401: errorSchema, 503: errorSchema } } },
      async (req) => {
        const now = new Date();
        const a = await loadAllowance(db, req.user!.id, limits, now);
        return {
          plan: a.pro ? ("pro" as const) : ("free" as const),
          proUntil: a.pro && a.proUntil ? a.proUntil.toISOString() : null,
          limits: a.limits,
          used: a.used,
          resetsAt: monthWindow(now).next.toISOString(),
          credits: a.credits,
          paymentsEnabled,
        };
      },
    );
  };
