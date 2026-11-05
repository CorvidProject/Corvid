import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import { generateKeyPair, SignJWT, type KeyLike } from "jose";
import EmbeddedPostgres from "embedded-postgres";
import { agentRuns, applyMigrations, createDb, swaps } from "@corvid/db";
import { buildApp } from "../src/app";
import { createVerifier } from "../src/auth";

const dir = "D:/.dev/tmp/pgtest-market";
const port = 54339;
const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
const ISS = "https://example-ref.supabase.co/auth/v1";
const A = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
const B = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb";
const WALLET = "0x1111111111111111111111111111111111111111";

let pgServer: EmbeddedPostgres;
let created: ReturnType<typeof createDb>;
let app: Awaited<ReturnType<typeof buildApp>>;
let key: KeyLike;
const tok = (sub: string) =>
  new SignJWT({ email: `${sub.slice(0, 4)}@x.io` }).setProtectedHeader({ alg: "ES256" }).setSubject(sub).setIssuer(ISS).setAudience("authenticated").setIssuedAt().setExpirationTime("1h").sign(key);
const call = async (method: "GET" | "POST" | "PUT" | "DELETE", u: string, sub?: string, payload?: unknown) =>
  app.inject({ method, url: u, headers: sub ? { authorization: `Bearer ${await tok(sub)}` } : {}, payload: payload as never });
const mkAgent = async (sub: string, name: string) =>
  (await call("POST", "/api/agents", sub, { name, pipeline: "follow_wallet", mode: "signal", config: { wallet_address: WALLET, only_buys: "true" } })).json().id as number;

beforeAll(async () => {
  const kp = await generateKeyPair("ES256");
  key = kp.privateKey;
  fs.rmSync(dir, { recursive: true, force: true });
  pgServer = new EmbeddedPostgres({ databaseDir: dir, user: "corvid", password: "corvid-dev", port, persistent: false, initdbFlags: ["--encoding=UTF8", "--locale=C"] });
  await pgServer.initialise();
  await pgServer.start();
  await pgServer.createDatabase("corvid");
  await applyMigrations(url);
  created = createDb(url);
  app = await buildApp({ db: created.db, verifier: createVerifier({ issuer: ISS, key: kp.publicKey }) });
  await app.ready();
}, 120_000);

afterAll(async () => {
  await app?.close();
  await created?.pool.end();
  await pgServer?.stop();
});

describe("marketplace", () => {
  it("feed publik kosong di awal; agent belum dipublikasikan tidak muncul", async () => {
    expect((await call("GET", "/api/marketplace/feed")).json()).toEqual({ agents: [] });
    const id = await mkAgent(A, "Hidden");
    expect((await call("GET", "/api/marketplace/feed")).json().agents).toHaveLength(0);
    expect((await call("GET", `/api/marketplace/agents/${id}`)).statusCode).toBe(404);
  });

  it("publish: butuh login, pemilik, dan deskripsi", async () => {
    const id = await mkAgent(A, "Whale watcher");
    expect((await call("PUT", `/api/agents/${id}/publish`, undefined, { published: true, description: "x" })).statusCode).toBe(401);
    expect((await call("PUT", `/api/agents/${id}/publish`, B, { published: true, description: "mine now" })).statusCode).toBe(404);
    const noDesc = await call("PUT", `/api/agents/${id}/publish`, A, { published: true });
    expect(noDesc.statusCode).toBe(400);
    expect(noDesc.json().error).toBe("description_required");
    expect((await call("PUT", `/api/agents/${id}/publish`, A, { published: true, description: "y".repeat(281) })).statusCode).toBe(400);
    const ok = await call("PUT", `/api/agents/${id}/publish`, A, { published: true, description: "Follows one wallet and flags its buys." });
    expect(ok.json()).toEqual({ published: true, description: "Follows one wallet and flags its buys." });
  });

  it("feed dan detail memuat angka nyata dan tidak membocorkan konfigurasi", async () => {
    const id = await mkAgent(A, "Counted");
    await call("PUT", `/api/agents/${id}/publish`, A, { published: true, description: "Counts things honestly." });
    const now = new Date();
    await created.db.insert(agentRuns).values([
      { agentId: id, runNumber: 1, ranAt: now, ended: "passed" },
      { agentId: id, runNumber: 2, ranAt: now, ended: "blocked" },
      { agentId: id, runNumber: 3, ranAt: now, ended: "passed" },
    ]);
    await created.db.insert(swaps).values({ agentId: id, side: "buy", mode: "dry", report: { simulated: true } });
    const feed = (await call("GET", "/api/marketplace/feed")).json().agents as Record<string, unknown>[];
    const a = feed.find((x) => x.id === id)!;
    expect(a).toMatchObject({ name: "Counted", runs_count: 3, signals_count: 2, trades_count: 1, subscriber_count: 0, avg_pnl_pct: null, win_rate: null, closed_trades_count: 0, per_action_cost: 0, chain: "robinhood" });
    expect(a.config).toEqual({ _pipeline: "follow_wallet", _mode: "signal" });
    const d = (await call("GET", `/api/marketplace/agents/${id}`)).json();
    expect(d.pipeline).toBe("follow_wallet");
    expect(JSON.stringify(d)).not.toContain(WALLET);
  });

  it("follow: butuh login, idempoten, dihitung, bisa dibatalkan; hanya agent publik", async () => {
    const id = await mkAgent(A, "Followable");
    expect((await call("POST", `/api/marketplace/agents/${id}/follow`, B)).statusCode).toBe(404);
    await call("PUT", `/api/agents/${id}/publish`, A, { published: true, description: "Can be followed." });
    expect((await call("POST", `/api/marketplace/agents/${id}/follow`)).statusCode).toBe(401);
    expect((await call("POST", `/api/marketplace/agents/${id}/follow`, B)).statusCode).toBe(200);
    expect((await call("POST", `/api/marketplace/agents/${id}/follow`, B)).statusCode).toBe(200);
    expect((await call("GET", "/api/marketplace/following", B)).json().ids).toEqual([id]);
    const count = () => call("GET", `/api/marketplace/agents/${id}`).then((r) => r.json().agent.subscriber_count);
    expect(await count()).toBe(1);
    await call("DELETE", `/api/marketplace/agents/${id}/follow`, B);
    expect((await call("GET", "/api/marketplace/following", B)).json().ids).toEqual([]);
    expect(await count()).toBe(0);
  });

  it("batal publikasi mengeluarkan dari feed; ringkasan agent milik memuat published", async () => {
    const id = await mkAgent(A, "Toggle");
    await call("PUT", `/api/agents/${id}/publish`, A, { published: true, description: "Temporary listing." });
    expect((await call("GET", "/api/marketplace/feed")).json().agents.some((x: { id: number }) => x.id === id)).toBe(true);
    await call("PUT", `/api/agents/${id}/publish`, A, { published: false });
    expect((await call("GET", "/api/marketplace/feed")).json().agents.some((x: { id: number }) => x.id === id)).toBe(false);
    const mine = (await call("GET", "/api/agents", A)).json().agents.find((x: { id: number }) => x.id === id);
    expect(mine).toMatchObject({ published: false, description: "Temporary listing." });
  });
});
