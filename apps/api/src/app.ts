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
import type { PlanLimitsByPlan } from "@corvid/shared";
import type { LlmClient } from "./llm";
import type { RateLimiter } from "./ratelimit";
import type { Verifier } from "./auth";
import { coingeckoSolPrice, priceRoutes, type SolPriceSource } from "./routes/prices";

export type Db = NodePgDatabase<typeof schema>;

export interface AppOptions {
  db: Db;
  webOrigin?: string;
  logger?: boolean;
  /** Sumber harga SOL (default CoinGecko); diganti mock di test. */
  solPrice?: SolPriceSource;
  /** Verifier JWT Supabase; null = endpoint ber-auth menjawab 503. */
  verifier?: Verifier | null;
  tradeMode?: "dry" | "live";
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
}

export async function buildApp({ db, webOrigin = "http://localhost:3000", logger = false, solPrice = coingeckoSolPrice, verifier = null, tradeMode = "dry", llm = null, trustProxyHops = 0, chatDailyCap = 3000, chatLimiter, planLimits, payments = null }: AppOptions) {
  const app = Fastify({ logger, trustProxy: trustProxyHops > 0 ? (_addr: string, hop: number) => hop < trustProxyHops : false }).withTypeProvider<ZodTypeProvider>();
  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  await app.register(cors, { origin: webOrigin.split(",").map((s) => s.trim()), methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"] });
  await app.register(swagger, {
    openapi: { info: { title: "Corvid API", version: "0.1.0" } },
    transform: jsonSchemaTransform,
  });

  app.get("/health", async () => ({ ok: true }));
  app.get("/openapi.json", async () => app.swagger());

  await app.register(marketRoutes(db), { prefix: "/api" });
  await app.register(discoveryRoutes(db), { prefix: "/api" });
  await app.register(alphaRoutes(db), { prefix: "/api" });
  await app.register(priceRoutes(solPrice), { prefix: "/api" });
  let requireAuth: Parameters<typeof agentRoutes>[0]["requireAuth"] | null = null;
  await app.register(userRoutes({ db, verifier, tradeMode, onAuth: (fn) => (requireAuth = fn) }), { prefix: "/api" });
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
