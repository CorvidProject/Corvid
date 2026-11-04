import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import EmbeddedPostgres from "embedded-postgres";
import { applyMigrations, createDb } from "@corvid/db";
import { buildApp } from "../src/app";
import { seedAll } from "../src/seed";

const dir = "D:/.dev/tmp/pgtest-api";
const port = 54330;
const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
let pgServer: EmbeddedPostgres;
let app: Awaited<ReturnType<typeof buildApp>>;
let pool: ReturnType<typeof createDb>["pool"];

beforeAll(async () => {
  fs.rmSync(dir, { recursive: true, force: true });
  pgServer = new EmbeddedPostgres({ databaseDir: dir, user: "corvid", password: "corvid-dev", port, persistent: false, initdbFlags: ["--encoding=UTF8", "--locale=C"] });
  await pgServer.initialise();
  await pgServer.start();
  await pgServer.createDatabase("corvid");
  await applyMigrations(url);
  const created = createDb(url);
  pool = created.pool;
  await seedAll(created.db);
  app = await buildApp({ db: created.db });
  await app.ready();
}, 120_000);

afterAll(async () => {
  await app?.close();
  await pool?.end();
  await pgServer?.stop();
});

const get = (u: string) => app.inject({ method: "GET", url: u });

describe("market API", () => {
  it("GET /health", async () => {
    const r = await get("/health");
    expect(r.statusCode).toBe(200);
  });

  it("GET /api/stats", async () => {
    const r = await get("/api/stats");
    expect(r.statusCode).toBe(200);
    expect(r.json()).toHaveProperty("swapsExecuted");
  });

  it("GET /api/tokens/trending hanya Solana", async () => {
    const r = await get("/api/tokens/trending?tab=trending");
    expect(r.statusCode).toBe(200);
    const { tokens } = r.json();
    expect(tokens.length).toBeGreaterThan(10);
    for (const t of tokens) {
      expect(t.chain).toBe("solana");
      expect(t.mint).not.toMatch(/^0x/);
      expect(t.dex?.toLowerCase()).not.toBe("uniswap");
    }
  });

  it("menolak chain selain solana", async () => {
    const r = await get("/api/tokens/trending?chain=ethereum");
    expect(r.statusCode).toBe(400);
  });

  it("GET /api/tokens/:mint, /security, /trades", async () => {
    const mint = "B8G87xPYnSTCrf52mjPHywWPmTYXHBRWtPKmoqtkpump";
    const d = await get(`/api/tokens/${mint}`);
    expect(d.statusCode).toBe(200);
    expect(d.json().token.symbol).toBe("Tripod");
    const s = await get(`/api/tokens/${mint}/security`);
    expect(s.statusCode).toBe(200);
    expect(s.json().groups.length).toBe(4);
    const t = await get(`/api/tokens/trades?mint=${mint}`);
    expect(t.statusCode).toBe(200);
    expect(t.json().trades.length).toBe(5);
  });

  it("mint tidak dikenal: 404 bersih; mint 0x: 400", async () => {
    const r = await get("/api/tokens/11111111111111111111111111111111");
    expect(r.statusCode).toBe(404);
    expect(r.json()).toEqual({ error: "token_not_found" });
    const bad = await get("/api/tokens/0x8b65363a01510490fba03cea97b14c73b7ee8f75");
    expect(bad.statusCode).toBe(400);
  });

  it("GET /api/solana/memescope per stage", async () => {
    for (const stage of ["new", "stretch", "migrated"]) {
      const r = await get(`/api/solana/memescope?stage=${stage}`);
      expect(r.statusCode).toBe(200);
      expect(r.json().coins.length).toBeGreaterThan(0);
    }
  });

  it("rute tidak ada: 404 bersih", async () => {
    const r = await get("/api/does-not-exist");
    expect(r.statusCode).toBe(404);
    expect(r.json()).toEqual({ error: "not_found" });
  });

  it("GET /openapi.json memuat path pasar", async () => {
    const r = await get("/openapi.json");
    expect(Object.keys(r.json().paths)).toContain("/api/tokens/trending");
  });
});
