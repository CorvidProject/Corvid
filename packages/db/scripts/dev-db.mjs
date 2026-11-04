// Postgres embedded untuk pengembangan lokal. Data di D:\.dev\pgdata (bukan C:).
// Pakai: node scripts/dev-db.mjs [start|migrate-test]
//   start         -> jalankan server di port 54329 sampai Ctrl+C
//   migrate-test  -> jalankan server sementara, terapkan migrasi, cek tabel, matikan
import EmbeddedPostgres from "embedded-postgres";
import pg from "pg";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const migrationsDir = path.resolve(here, "../migrations");
const mode = process.argv[2] ?? "start";
const dataDir = mode === "migrate-test" ? "D:/.dev/tmp/pgtest" : "D:/.dev/pgdata";
const port = 54329;

if (mode === "migrate-test") fs.rmSync(dataDir, { recursive: true, force: true });
const fresh = !fs.existsSync(path.join(dataDir, "PG_VERSION"));

const server = new EmbeddedPostgres({
  databaseDir: dataDir,
  user: "corvid",
  password: "corvid-dev",
  port,
  persistent: mode !== "migrate-test",
  initdbFlags: ["--encoding=UTF8", "--locale=C"],
});

if (fresh) await server.initialise();
await server.start();
if (fresh) await server.createDatabase("corvid");

const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
console.log("DATABASE_URL=" + url);

async function applyMigrations() {
  const client = new pg.Client({ connectionString: url });
  await client.connect();
  const files = fs.readdirSync(migrationsDir).filter((f) => f.endsWith(".sql")).sort();
  for (const f of files) {
    const sql = fs.readFileSync(path.join(migrationsDir, f), "utf8");
    for (const stmt of sql.split("--> statement-breakpoint")) {
      if (stmt.trim()) await client.query(stmt);
    }
    console.log("applied", f);
  }
  const { rows } = await client.query(
    "select count(*)::int as n from information_schema.tables where table_schema='public'",
  );
  console.log("tabel public:", rows[0].n);
  // cek CHECK alamat Solana menolak 0x
  try {
    await client.query("insert into tokens (mint) values ('0x8b65363a01510490fba03cea97b14c73b7ee8f75')");
    console.log("GAGAL: alamat 0x diterima");
  } catch {
    console.log("OK: alamat 0x ditolak");
  }
  await client.query("insert into tokens (mint) values ('G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG')");
  console.log("OK: mint Solana diterima");
  await client.end();
}

if (mode === "migrate-test") {
  try {
    await applyMigrations();
  } finally {
    await server.stop();
  }
} else {
  await applyMigrations().catch((e) => console.error("migrasi:", e.message));
  process.on("SIGINT", async () => {
    await server.stop();
    process.exit(0);
  });
}
