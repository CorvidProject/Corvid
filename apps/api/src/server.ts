import { createDb } from "@corvid/db";
import { buildApp } from "./app";
import { loadEnv } from "./env";

const env = loadEnv();
const { db, pool } = createDb(env.DATABASE_URL);
const app = await buildApp({ db, webOrigin: env.WEB_ORIGIN, logger: true });

const close = async () => {
  await app.close();
  await pool.end();
  process.exit(0);
};
process.on("SIGINT", close);
process.on("SIGTERM", close);

await app.listen({ port: env.PORT, host: env.HOST });
