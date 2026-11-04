import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema/index";

export * from "./schema/index";
export { schema };

/** Pakai direct/session connection (bukan transaction pooler) untuk worker long-running. */
export function createDb(connectionString: string) {
  const pool = new pg.Pool({ connectionString });
  return { db: drizzle(pool, { schema }), pool };
}
