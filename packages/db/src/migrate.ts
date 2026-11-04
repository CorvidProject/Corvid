import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";

const migrationsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../migrations");

/**
 * Terapkan file SQL di migrations/ berurutan (untuk dev/test; produksi pakai drizzle-kit migrate).
 * Idempoten: file yang sudah diterapkan dicatat di tabel `_dev_migrations` dan dilewati.
 */
export async function applyMigrations(connectionString: string) {
  const client = new pg.Client({ connectionString });
  await client.connect();
  try {
    await client.query("create table if not exists _dev_migrations (name text primary key, applied_at timestamptz not null default now())");
    const done = new Set((await client.query("select name from _dev_migrations")).rows.map((r) => r.name as string));
    const files = fs.readdirSync(migrationsDir).filter((f) => f.endsWith(".sql")).sort();
    for (const f of files) {
      if (done.has(f)) continue;
      const sql = fs.readFileSync(path.join(migrationsDir, f), "utf8");
      for (const stmt of sql.split("--> statement-breakpoint")) {
        if (stmt.trim()) await client.query(stmt);
      }
      await client.query("insert into _dev_migrations (name) values ($1)", [f]);
    }
  } finally {
    await client.end();
  }
}
