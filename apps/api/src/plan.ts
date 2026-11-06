import { and, eq, gte, lt, sql } from "drizzle-orm";
import { credits, profiles, usageEvents } from "@corvid/db";
import { monthWindow, PLAN_LIMITS, type PlanLimits, type PlanLimitsByPlan, type UsageKind } from "@corvid/shared";
import type { Db } from "./app";

type Tx = Parameters<Parameters<Db["transaction"]>[0]>[0];
type Q = Db | Tx;

export const isPro = (proUntil: Date | null, now = new Date()) => !!proUntil && proUntil.getTime() > now.getTime();

export interface Allowance {
  pro: boolean;
  proUntil: Date | null;
  limits: PlanLimits;
  used: Record<UsageKind, number>;
  credits: number;
}

export async function loadAllowance(q: Q, profileId: string, limits: PlanLimitsByPlan = PLAN_LIMITS, now = new Date()): Promise<Allowance> {
  const [p] = await q.select({ proUntil: profiles.proUntil }).from(profiles).where(eq(profiles.id, profileId)).limit(1);
  const pro = isPro(p?.proUntil ?? null, now);
  const { start, next } = monthWindow(now);
  const rows = await q
    .select({ kind: usageEvents.kind, n: sql<number>`count(*)::int` })
    .from(usageEvents)
    .where(and(eq(usageEvents.profileId, profileId), eq(usageEvents.source, "quota"), gte(usageEvents.createdAt, start), lt(usageEvents.createdAt, next)))
    .groupBy(usageEvents.kind);
  const used: Record<UsageKind, number> = { chat: 0, deep: 0 };
  for (const r of rows) used[r.kind as UsageKind] = r.n;
  const [b] = await q.select({ n: sql<number>`coalesce(sum(${credits.delta}), 0)::int` }).from(credits).where(eq(credits.profileId, profileId));
  return { pro, proUntil: p?.proUntil ?? null, limits: pro ? limits.pro : limits.free, used, credits: b?.n ?? 0 };
}

/** Sumber yang akan dipakai untuk satu jawaban: kuota bulanan dulu, lalu 1 kredit, selain itu null. */
export const pickSource = (a: Allowance, kind: UsageKind): "quota" | "credit" | null =>
  a.used[kind] < a.limits[kind] ? "quota" : a.credits >= 1 ? "credit" : null;

/**
 * Catat pemakaian satu jawaban di dalam transaksi pemanggil (profil sudah dikunci FOR UPDATE).
 * Mengembalikan sumber dan saldo kredit sesudahnya, atau null bila tidak ada kuota maupun kredit.
 */
export async function consumeAnswer(tx: Tx, profileId: string, kind: UsageKind, limits: PlanLimitsByPlan = PLAN_LIMITS) {
  const a = await loadAllowance(tx, profileId, limits);
  const source = pickSource(a, kind);
  if (!source) return null;
  await tx.insert(usageEvents).values({ profileId, kind, source });
  if (source === "credit") await tx.insert(credits).values({ profileId, delta: -1, reason: kind === "deep" ? "deep" : "chat" });
  return { source, credits: a.credits - (source === "credit" ? 1 : 0) };
}
