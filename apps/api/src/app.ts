import Fastify from "fastify";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type { schema } from "@corvid/db";
import { marketRoutes } from "./routes/market";
import { discoveryRoutes } from "./routes/discovery";
import { alphaRoutes } from "./routes/alpha";
import { userRoutes } from "./routes/user";
import { watchlistRoutes } from "./routes/watchlists";
import { agentRoutes } from "./routes/agents";
import { chatRoutes } from "./routes/chats";
import { planRoutes } from "./routes/plan";
import { paymentRoutes, type PaymentsConfig } from "./routes/payments";
import { marketplaceRoutes } from "./routes/marketplace";
import { v4Routes } from "./routes/v4";
import type { V4PoolResolver } from "./v4pool";
import type { PlanLimitsByPlan } from "@corvid/shared";
import type { LlmClient } from "./llm";
import type { RateLimiter } from "./ratelimit";
import type { Verifier } from "./auth";
import { ethPriceSource, priceRoutes, type EthPriceSource } from "./routes/prices";

export type Db = NodePgDatabase<typeof schema>;

export interface AppOptions {
  db: Db;
  webOrigin?: string;
  logger?: boolean;
  /** Sumber harga ETH (default CoinGecko); diganti mock di test. */
  ethPrice?: EthPriceSource;
  /** Verifier JWT Supabase; null = endpoint ber-auth menjawab 503. */
  verifier?: Verifier | null;
  tradeMode?: "dry" | "live";
  /** Username bot Telegram (tanpa @). null = fitur tautan Telegram mati (503). */
  telegramBot?: string | null;
  /** Klien LLM untuk chat; null = chat menjawab 503. */
  llm?: LlmClient | null;
  /** Jumlah proxy tepercaya di depan API (Railway = 1) agar req.ip memakai IP klien asli; 0 = langsung. */
  trustProxyHops?: number;
  /** Batas jawaban chat per 24 jam untuk seluruh pengguna (pengaman tagihan LLM). */
  chatDailyCap?: number;
  chatLimiter?: RateLimiter;
  /** Kuota bulanan per paket (default PLAN_LIMITS). */
  planLimits?: PlanLimitsByPlan;
  /** Konfigurasi pembayaran USDG; null = pembelian dimatikan (403 payments_disabled). */
  payments?: PaymentsConfig | null;
  /** Pencari PoolKey Uniswap v4; null = endpoint /v4/pool-key menjawab 503. */
  v4Pools?: V4PoolResolver | null;
  /** TTL (ms) cache respons GET publik tanpa login (hemat egress Supabase). 0 = mati (default, dipakai test). */
  publicCacheMs?: number;
}

// Hanya data pasar yang sama untuk semua pengunjung; jangan menambah rute per pengguna di sini.
const CACHEABLE = new Set(["/api/tokens/trending", "/api/stats", "/api/memescope", "/api/solana/memescope", "/api/marketplace/feed", "/api/alpha/curated", "/api/alpha/activity"]);

export async function buildApp({ db, webOrigin = "http://localhost:3000", logger = false, ethPrice = ethPriceSource, verifier = null, tradeMode = "dry", telegramBot = null, llm = null, trustProxyHops = 0, chatDailyCap = 3000, chatLimiter, planLimits, payments = null, v4Pools = null, publicCacheMs = 0 }: AppOptions) {
  const app = Fastify({ logger, trustProxy: trustProxyHops > 0 ? (_addr: string, hop: number) => hop < trustProxyHops : false }).withTypeProvider<ZodTypeProvider>();
  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  await app.register(cors, { origin: webOrigin.split(",").map((s) => s.trim()), methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"] });
  await app.register(swagger, {
    openapi: { info: { title: "Corvid API", version: "0.1.0" } },
    transform: jsonSchemaTransform,
  });

  if (publicCacheMs > 0) {
    const cache = new Map<string, { at: number; body: string; type: string }>();
    const keyOf = (req: { method: string; url: string; headers: { authorization?: string } }) => {
      if (req.method !== "GET" || req.headers.authorization) return null;
      const path = req.url.split("?")[0];
      return CACHEABLE.has(path) ? req.url : null;
    };
    app.addHook("onRequest", async (req, reply) => {
      const k = keyOf(req);
      const hit = k ? cache.get(k) : undefined;
      if (k && hit && Date.now() - hit.at < publicCacheMs) {
        return reply.header("cache-control", `public, max-age=${Math.ceil(publicCacheMs / 2000)}`).header("x-cache", "hit").type(hit.type).send(hit.body);
      }
    });
    app.addHook("onSend", async (req, reply, payload) => {
      const k = keyOf(req);
      if (k && reply.statusCode === 200 && typeof payload === "string") {
        if (cache.size > 200) cache.clear();
        cache.set(k, { at: Date.now(), body: payload, type: String(reply.getHeader("content-type") ?? "application/json") });
        reply.header("cache-control", `public, max-age=${Math.ceil(publicCacheMs / 2000)}`);
      }
      return payload;
    });
  }

  app.get("/health", async () => ({ ok: true }));
  app.get("/openapi.json", async () => app.swagger());

  await app.register(marketRoutes(db), { prefix: "/api" });
  await app.register(discoveryRoutes(db), { prefix: "/api" });
  await app.register(v4Routes(db, v4Pools), { prefix: "/api" });
  await app.register(alphaRoutes(db), { prefix: "/api" });
  await app.register(priceRoutes(ethPrice), { prefix: "/api" });
  let requireAuth: Parameters<typeof agentRoutes>[0]["requireAuth"] | null = null;
  await app.register(userRoutes({ db, verifier, tradeMode, telegramBot, onAuth: (fn) => (requireAuth = fn) }), { prefix: "/api" });
  await app.register(agentRoutes({ db, requireAuth: requireAuth!, tradeMode, verifier }), { prefix: "/api" });
  await app.register(marketplaceRoutes({ db, requireAuth: requireAuth! }), { prefix: "/api" });
  await app.register(chatRoutes({ db, requireAuth: requireAuth!, llm, dailyCap: chatDailyCap, limiter: chatLimiter, limits: planLimits }), { prefix: "/api" });
  await app.register(planRoutes({ db, requireAuth: requireAuth!, limits: planLimits, paymentsEnabled: !!payments }), { prefix: "/api" });
  await app.register(paymentRoutes({ db, requireAuth: requireAuth!, config: payments }), { prefix: "/api" });
  await app.register(watchlistRoutes({ db, requireAuth: requireAuth! }), { prefix: "/api" });

  // Rute yang belum ada: 404 bersih (tanpa proxy ke situs lain).
  app.setNotFoundHandler((_req, reply) => reply.code(404).send({ error: "not_found" }));
  app.setErrorHandler((err: { statusCode?: number; message: string }, _req, reply) => {
    const status = err.statusCode ?? 500;
    reply.code(status).send({ error: status >= 500 ? "internal_error" : err.message });
  });

  return app;
}
