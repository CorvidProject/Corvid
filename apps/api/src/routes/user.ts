import { createHash } from "node:crypto";
import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { and, desc, eq, sql } from "drizzle-orm";
import { z } from "zod";
import { credits, loginLog, notifications, profiles, tradingPrefs, userWallets } from "@corvid/db";
import { errorSchema } from "@corvid/shared";
import type { AuthUser, Verifier } from "../auth";
import type { Db } from "../app";

declare module "fastify" {
  interface FastifyRequest {
    user: AuthUser | null;
  }
}

const WELCOME_CREDITS = 25;
/** Kredit selamat datang hanya untuk sekian akun baru per IP (hash) per 24 jam; sisanya tetap dibuat tanpa kredit gratis. */
export const WELCOME_PER_IP_24H = 5;
export const hashIp = (salt: string, ip: string) => createHash("sha256").update(`${salt}:${ip}`).digest("hex").slice(0, 32);

const profileSchema = z.object({
  id: z.string(),
  email: z.string().nullable(),
  displayName: z.string().nullable(),
  credits: z.number().int(),
  plan: z.string(),
  wallet: z.string().nullable(),
  avatarUrl: z.string().nullable(),
  bannerUrl: z.string().nullable(),
  twitterHandle: z.string().nullable(),
});
const profileUpdateSchema = z.object({
  displayName: z.string().trim().min(1).max(50).optional(),
  twitterHandle: z.string().trim().regex(/^@?[A-Za-z0-9_]{1,15}$/, "handle tidak valid").nullable().optional(),
});
const prefsSchema = z.object({
  slippageBps: z.number().int().min(1).max(5000),
  priorityFeeLamports: z.number().int().min(0).max(10_000_000),
  mode: z.enum(["dry", "live"]),
});
const prefsUpdateSchema = prefsSchema.partial();

/** Buat profil (+ kredit selamat datang, preferensi bawaan, notifikasi) sekali saja per pengguna. */
export async function ensureProfile(db: Db, user: AuthUser, ctx: { ipHash?: string | null; userAgent?: string | null } = {}): Promise<void> {
  await db.transaction(async (tx) => {
    const display = user.email ? user.email.split("@")[0].slice(0, 50) : null;
    const inserted = await tx
      .insert(profiles)
      .values({ id: user.id, email: user.email, displayName: display })
      .onConflictDoNothing()
      .returning({ id: profiles.id });
    if (inserted.length === 0) return;
    let grant = true;
    if (ctx.ipHash) {
      const r = await tx.execute(sql`
        select count(distinct c.profile_id)::int as n
        from credits c join login_log l on l.profile_id = c.profile_id
        where c.reason = 'welcome' and c.created_at > now() - interval '24 hours'
          and l.ip_hash = ${ctx.ipHash} and l.at > now() - interval '24 hours'`);
      grant = Number((r.rows[0] as { n: number } | undefined)?.n ?? 0) < WELCOME_PER_IP_24H;
      await tx.insert(loginLog).values({ profileId: user.id, ipHash: ctx.ipHash, userAgent: ctx.userAgent?.slice(0, 300) || null });
    }
    if (grant) await tx.insert(credits).values({ profileId: user.id, delta: WELCOME_CREDITS, reason: "welcome" });
    await tx.insert(tradingPrefs).values({ profileId: user.id }).onConflictDoNothing();
    await tx.insert(notifications).values({
      profileId: user.id,
      kind: "system",
      title: "Welcome to Corvid",
      body: grant ? `${WELCOME_CREDITS} free AI analyses on your account.` : "Free analyses are limited per network and this one has reached its daily limit. You can still explore everything else.",
    });
  });
}

export interface UserRouteOptions {
  /** Dipanggil dengan preHandler ber-auth supaya rute lain memakai verifier dan cache profil yang sama. */
  onAuth?: (requireAuth: (req: FastifyRequest, reply: FastifyReply) => Promise<unknown>) => void;
  db: Db;
  verifier: Verifier | null;
  /** TRADE_MODE server: `live` hanya bisa dipilih pengguna bila server memang `live`. */
  tradeMode: "dry" | "live";
  ipSalt?: string;
}

export const userRoutes =
  ({ db, verifier, tradeMode, ipSalt = "corvid", onAuth }: UserRouteOptions): FastifyPluginAsync =>
  async (instance) => {
    const app = instance.withTypeProvider<ZodTypeProvider>();
    app.decorateRequest("user", null);

    // Profil yang sudah dipastikan ada (hindari tulis ke DB di tiap request). Dibatasi agar tidak tumbuh tanpa batas.
    const known = new Set<string>();
    const requireAuth = async (req: FastifyRequest, reply: FastifyReply) => {
      if (!verifier) return reply.code(503).send({ error: "auth_not_configured" });
      const h = req.headers.authorization;
      const token = h?.startsWith("Bearer ") ? h.slice(7).trim() : "";
      if (!token) return reply.code(401).send({ error: "unauthorized" });
      try {
        req.user = await verifier(token);
      } catch {
        return reply.code(401).send({ error: "unauthorized" });
      }
      if (!known.has(req.user.id)) {
        await ensureProfile(db, req.user, { ipHash: hashIp(ipSalt, req.ip), userAgent: req.headers["user-agent"] });
        if (known.size > 10_000) known.clear();
        known.add(req.user.id);
      }
    };
    onAuth?.(requireAuth);
    const me = (req: FastifyRequest) => req.user!.id;

    async function loadProfile(id: string) {
      const [p] = await db.select().from(profiles).where(eq(profiles.id, id)).limit(1);
      const [bal] = await db.select({ n: sql<number>`coalesce(sum(${credits.delta}), 0)::int` }).from(credits).where(eq(credits.profileId, id));
      const [w] = await db.select({ a: userWallets.address }).from(userWallets).where(eq(userWallets.profileId, id)).orderBy(userWallets.id).limit(1);
      return {
        id: p.id,
        email: p.email,
        displayName: p.displayName,
        credits: bal?.n ?? 0,
        plan: p.plan,
        wallet: w?.a ?? null,
        avatarUrl: p.avatarUrl,
        bannerUrl: p.bannerUrl,
        twitterHandle: p.twitterHandle,
      };
    }

    const auth = { preHandler: requireAuth };
    const authErrors = { 401: errorSchema, 503: errorSchema };

    app.get("/profile", { ...auth, schema: { tags: ["user"], response: { 200: profileSchema, ...authErrors } } }, async (req) => {
      // Email yang baru dikonfirmasi (akun wallet yang menambah email) ada di token; samakan ke profil.
      const tokenEmail = req.user!.email;
      if (tokenEmail) await db.update(profiles).set({ email: tokenEmail }).where(and(eq(profiles.id, me(req)), sql`${profiles.email} is distinct from ${tokenEmail}`));
      return loadProfile(me(req));
    });

    app.put(
      "/profile",
      { ...auth, schema: { tags: ["user"], body: profileUpdateSchema, response: { 200: profileSchema, ...authErrors } } },
      async (req) => {
        const b = req.body;
        const set: Partial<typeof profiles.$inferInsert> = {};
        if (b.displayName !== undefined) set.displayName = b.displayName;
        if (b.twitterHandle !== undefined) set.twitterHandle = b.twitterHandle === null ? null : b.twitterHandle.replace(/^@/, "");
        if (Object.keys(set).length > 0) await db.update(profiles).set(set).where(eq(profiles.id, me(req)));
        return loadProfile(me(req));
      },
    );

    app.get(
      "/profile/activity",
      {
        ...auth,
        schema: {
          tags: ["user"],
          response: { 200: z.object({ items: z.array(z.object({ at: z.number(), userAgent: z.string().nullable() })) }), ...authErrors },
        },
      },
      async (req) => {
        const rows = await db.select().from(loginLog).where(eq(loginLog.profileId, me(req))).orderBy(desc(loginLog.at)).limit(20);
        return { items: rows.map((r) => ({ at: Math.floor(r.at.getTime() / 1000), userAgent: r.userAgent })) };
      },
    );

    // Catat login; maksimal satu entri per menit per pengguna. IP disimpan sebagai hash, bukan mentah.
    app.post(
      "/auth/log-login",
      { ...auth, schema: { tags: ["user"], response: { 200: z.object({ ok: z.literal(true), logged: z.boolean() }), ...authErrors } } },
      async (req) => {
        const [last] = await db.select({ at: loginLog.at }).from(loginLog).where(eq(loginLog.profileId, me(req))).orderBy(desc(loginLog.at)).limit(1);
        if (last && Date.now() - last.at.getTime() < 60_000) return { ok: true as const, logged: false };
        const ipHash = hashIp(ipSalt, req.ip);
        await db.insert(loginLog).values({ profileId: me(req), ipHash, userAgent: (req.headers["user-agent"] ?? "").slice(0, 300) || null });
        return { ok: true as const, logged: true };
      },
    );

    async function loadPrefs(id: string) {
      const [p] = await db.select().from(tradingPrefs).where(eq(tradingPrefs.profileId, id)).limit(1);
      return { slippageBps: p.slippageBps, priorityFeeLamports: p.priorityFeeLamports, mode: p.mode };
    }

    app.get("/user/trading-prefs", { ...auth, schema: { tags: ["user"], response: { 200: prefsSchema, ...authErrors } } }, async (req) => loadPrefs(me(req)));

    app.put(
      "/user/trading-prefs",
      { ...auth, schema: { tags: ["user"], body: prefsUpdateSchema, response: { 200: prefsSchema, 403: errorSchema, ...authErrors } } },
      async (req, reply) => {
        const b = req.body;
        // Trade `live` hanya bila server diizinkan pemilik (TRADE_MODE=live). Default: dry.
        if (b.mode === "live" && tradeMode !== "live") return reply.code(403).send({ error: "live_trading_disabled" });
        const set = { ...b, updatedAt: new Date() };
        await db.update(tradingPrefs).set(set).where(eq(tradingPrefs.profileId, me(req)));
        return loadPrefs(me(req));
      },
    );
  };
