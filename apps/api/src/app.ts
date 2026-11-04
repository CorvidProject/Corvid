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
import { coingeckoSolPrice, priceRoutes, type SolPriceSource } from "./routes/prices";

export type Db = NodePgDatabase<typeof schema>;

export interface AppOptions {
  db: Db;
  webOrigin?: string;
  logger?: boolean;
  /** Sumber harga SOL (default CoinGecko); diganti mock di test. */
  solPrice?: SolPriceSource;
}

export async function buildApp({ db, webOrigin = "http://localhost:3000", logger = false, solPrice = coingeckoSolPrice }: AppOptions) {
  const app = Fastify({ logger }).withTypeProvider<ZodTypeProvider>();
  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  await app.register(cors, { origin: webOrigin.split(",").map((s) => s.trim()) });
  await app.register(swagger, {
    openapi: { info: { title: "Corvid API", version: "0.1.0" } },
    transform: jsonSchemaTransform,
  });

  app.get("/health", async () => ({ ok: true }));
  app.get("/openapi.json", async () => app.swagger());

  await app.register(marketRoutes(db), { prefix: "/api" });
  await app.register(discoveryRoutes(db), { prefix: "/api" });
  await app.register(priceRoutes(solPrice), { prefix: "/api" });

  // Rute yang belum ada: 404 bersih (tanpa proxy ke situs lain).
  app.setNotFoundHandler((_req, reply) => reply.code(404).send({ error: "not_found" }));
  app.setErrorHandler((err: { statusCode?: number; message: string }, _req, reply) => {
    const status = err.statusCode ?? 500;
    reply.code(status).send({ error: status >= 500 ? "internal_error" : err.message });
  });

  return app;
}
