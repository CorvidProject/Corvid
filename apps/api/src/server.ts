import { createDb } from "@corvid/db";
import { buildApp } from "./app";
import { supabaseVerifier } from "./auth";
import { loadEnv } from "./env";
import { llmFromEnv } from "./llm";

const env = loadEnv();
const { db, pool } = createDb(env.DATABASE_URL);
const verifier = env.SUPABASE_URL ? supabaseVerifier(env.SUPABASE_URL, env.SUPABASE_JWT_SECRET) : null;
const app = await buildApp({ db, webOrigin: env.WEB_ORIGIN, logger: true, verifier, tradeMode: env.TRADE_MODE, llm: llmFromEnv(env) });

const close = async () => {
  await app.close();
  await pool.end();
  process.exit(0);
};
process.on("SIGINT", close);
process.on("SIGTERM", close);

await app.listen({ port: env.PORT, host: env.HOST });
