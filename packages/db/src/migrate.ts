import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";

const migrationsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../migrations");

/** Terapkan semua file SQL di migrations/ berurutan (untuk dev/test; produksi pakai drizzle-kit migrate). */
export async function applyMigrations(connectionString: string) {
  const client = new pg.Client({ connectionString });
  await client.connect();
  try {
    const files = fs.readdirSync(migrationsDir).filter((f) => f.endsWith(".sql")).sort();
    for (const f of files) {
      const sql = fs.readFileSync(path.join(migrationsDir, f), "utf8");
      for (const stmt of sql.split("--> statement-breakpoint")) {
        if (stmt.trim()) await client.query(stmt);
      }
    }
  } finally {
    await client.end();
  }
}
