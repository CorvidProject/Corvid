import { defineConfig } from "drizzle-kit";

// Muat ROOT/.env (bila ada) supaya `pnpm --filter @corvid/db migrate` tidak perlu `$env:DATABASE_URL`.
// Variabel yang sudah di-set di terminal tidak ditimpa.
for (const f of ["../../.env", ".env"]) {
  try {
    process.loadEnvFile(f);
  } catch {
    /* file tidak ada */
  }
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema/index.ts",
  out: "./migrations",
  dbCredentials: { url: process.env.DATABASE_URL || "postgres://localhost:5432/corvid" },
});
