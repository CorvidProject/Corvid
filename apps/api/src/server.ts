import { createDb } from "@corvid/db";
import { buildApp } from "./app";
import { supabaseVerifier } from "./auth";
import { loadEnv } from "./env";
import { llmFromEnv } from "./llm";
import { paymentsFromEnv } from "./payments-config";
import { createV4PoolResolver } from "./v4pool";
import { CHAINS } from "@corvid/shared/chains";

const env = loadEnv();
const { db, pool } = createDb(env.DATABASE_URL);
const verifier = env.SUPABASE_URL ? supabaseVerifier(env.SUPABASE_URL, env.SUPABASE_JWT_SECRET) : null;
const app = await buildApp({ db, webOrigin: env.WEB_ORIGIN, logger: true, verifier, tradeMode: env.TRADE_MODE, telegramBot: env.TELEGRAM_BOT_USERNAME ?? null, llm: llmFromEnv(env), trustProxyHops: env.TRUST_PROXY_HOPS, chatDailyCap: env.CHAT_DAILY_CAP, payments: paymentsFromEnv(env), v4Pools: CHAINS.mainnet.uniswapV4 ? createV4PoolResolver({ rpcUrl: env.MAINNET_RPC_URL ?? CHAINS.mainnet.publicRpcUrl, poolManager: CHAINS.mainnet.uniswapV4.poolManager }) : null });

const close = async () => {
  await app.close();
  await pool.end();
  process.exit(0);
};
process.on("SIGINT", close);
process.on("SIGTERM", close);

await app.listen({ port: env.PORT, host: env.HOST });
