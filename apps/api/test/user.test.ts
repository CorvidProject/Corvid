import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import { generateKeyPair, SignJWT, type KeyLike } from "jose";
import EmbeddedPostgres from "embedded-postgres";
import { applyMigrations, createDb } from "@corvid/db";
import { buildApp } from "../src/app";
import { createVerifier } from "../src/auth";

const dir = "D:/.dev/tmp/pgtest-user";
const port = 54333;
const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
const ISS = "https://example-ref.supabase.co/auth/v1";
const USER_A = "11111111-1111-4111-8111-111111111111";
const USER_B = "22222222-2222-4222-8222-222222222222";

let pgServer: EmbeddedPostgres;
let pool: ReturnType<typeof createDb>["pool"];
let app: Awaited<ReturnType<typeof buildApp>>;
let appNoAuth: Awaited<ReturnType<typeof buildApp>>;
let privateKey: KeyLike;
let otherKey: KeyLike;

async function token(sub: string, email: string | null, opts: { key?: KeyLike; iss?: string; aud?: string; exp?: string } = {}) {
  return new SignJWT(email ? { email } : {})
    .setProtectedHeader({ alg: "ES256" })
    .setSubject(sub)
    .setIssuer(opts.iss ?? ISS)
    .setAudience(opts.aud ?? "authenticated")
    .setIssuedAt()
    .setExpirationTime(opts.exp ?? "1h")
    .sign(opts.key ?? privateKey);
}
const call = (method: "GET" | "POST" | "PUT", u: string, tok?: string, payload?: unknown) =>
  app.inject({ method, url: u, headers: tok ? { authorization: `Bearer ${tok}` } : {}, payload: payload as never });

beforeAll(async () => {
  const kp = await generateKeyPair("ES256");
  privateKey = kp.privateKey;
  otherKey = (await generateKeyPair("ES256")).privateKey;

  fs.rmSync(dir, { recursive: true, force: true });
  pgServer = new EmbeddedPostgres({ databaseDir: dir, user: "corvid", password: "corvid-dev", port, persistent: false, initdbFlags: ["--encoding=UTF8", "--locale=C"] });
  await pgServer.initialise();
  await pgServer.start();
  await pgServer.createDatabase("corvid");
  await applyMigrations(url);
  const created = createDb(url);
  pool = created.pool;
  const verifier = createVerifier({ issuer: ISS, key: kp.publicKey });
  app = await buildApp({ db: created.db, verifier });
  appNoAuth = await buildApp({ db: created.db, verifier: null });
  await app.ready();
  await appNoAuth.ready();
}, 120_000);

afterAll(async () => {
  await app?.close();
  await appNoAuth?.close();
  await pool?.end();
  await pgServer?.stop();
});

describe("autentikasi JWT", () => {
  it("tanpa token, token rusak, kedaluwarsa, issuer/audience salah, atau kunci lain: 401", async () => {
    expect((await call("GET", "/api/profile")).statusCode).toBe(401);
    expect((await call("GET", "/api/profile", "bukan.jwt.valid")).statusCode).toBe(401);
    expect((await call("GET", "/api/profile", await token(USER_A, "a@x.io", { exp: "-10s" }))).statusCode).toBe(401);
    expect((await call("GET", "/api/profile", await token(USER_A, "a@x.io", { iss: "https://evil.example/auth/v1" }))).statusCode).toBe(401);
    expect((await call("GET", "/api/profile", await token(USER_A, "a@x.io", { aud: "anon" }))).statusCode).toBe(401);
    expect((await call("GET", "/api/profile", await token(USER_A, "a@x.io", { key: otherKey }))).statusCode).toBe(401);
    expect((await call("GET", "/api/profile", await token("bukan-uuid", "a@x.io"))).statusCode).toBe(401);
  });

  it("auth belum dikonfigurasi: 503, bukan lolos", async () => {
    const r = await appNoAuth.inject({ method: "GET", url: "/api/profile", headers: { authorization: `Bearer ${await token(USER_A, "a@x.io")}` } });
    expect(r.statusCode).toBe(503);
    expect(r.json()).toEqual({ error: "auth_not_configured" });
  });
});

describe("profil", () => {
  it("request pertama membuat profil dengan 25 kredit selamat datang, idempoten", async () => {
    const t = await token(USER_A, "alice@example.com");
    const r1 = await call("GET", "/api/profile", t);
    expect(r1.statusCode).toBe(200);
    expect(r1.json()).toMatchObject({ id: USER_A, email: "alice@example.com", displayName: "alice", credits: 25, plan: "free", wallet: null });
    const r2 = await call("GET", "/api/profile", t);
    expect(r2.json().credits).toBe(25); // tidak dobel
  });

  it("PUT /profile memperbarui nama dan validasi input", async () => {
    const t = await token(USER_A, "alice@example.com");
    const ok = await call("PUT", "/api/profile", t, { displayName: "Alice W", twitterHandle: "@alice_w" });
    expect(ok.statusCode).toBe(200);
    expect(ok.json()).toMatchObject({ displayName: "Alice W", twitterHandle: "alice_w" });
    expect((await call("PUT", "/api/profile", t, { displayName: "" })).statusCode).toBe(400);
    expect((await call("PUT", "/api/profile", t, { twitterHandle: "bad handle!" })).statusCode).toBe(400);
  });

  it("data antar pengguna terpisah", async () => {
    const b = await call("GET", "/api/profile", await token(USER_B, "bob@example.com"));
    expect(b.json()).toMatchObject({ id: USER_B, displayName: "bob", credits: 25 });
    const a = await call("GET", "/api/profile", await token(USER_A, "alice@example.com"));
    expect(a.json().displayName).toBe("Alice W"); // perubahan A tidak bocor ke B
  });

  it("log-login dibatasi satu per menit dan tampil di activity", async () => {
    const t = await token(USER_A, "alice@example.com");
    const l1 = await call("POST", "/api/auth/log-login", t);
    expect(l1.json()).toEqual({ ok: true, logged: true });
    expect((await call("POST", "/api/auth/log-login", t)).json()).toEqual({ ok: true, logged: false });
    const act = await call("GET", "/api/profile/activity", t);
    expect(act.json().items).toHaveLength(1);
    const otherAct = await call("GET", "/api/profile/activity", await token(USER_B, "bob@example.com"));
    expect(otherAct.json().items).toHaveLength(0);
  });
});

describe("preferensi trading", () => {
  const A = async () => token(USER_A, "alice@example.com");

  it("bawaan: dry, slippage 100 bps", async () => {
    const r = await call("GET", "/api/user/trading-prefs", await A());
    expect(r.json()).toEqual({ slippageBps: 100, priorityFeeLamports: 100000, mode: "dry" });
  });

  it("mengubah slippage dan priority fee; menolak di luar rentang", async () => {
    const ok = await call("PUT", "/api/user/trading-prefs", await A(), { slippageBps: 250, priorityFeeLamports: 50000 });
    expect(ok.json()).toEqual({ slippageBps: 250, priorityFeeLamports: 50000, mode: "dry" });
    expect((await call("PUT", "/api/user/trading-prefs", await A(), { slippageBps: 0 })).statusCode).toBe(400);
    expect((await call("PUT", "/api/user/trading-prefs", await A(), { slippageBps: 9999 })).statusCode).toBe(400);
    expect((await call("PUT", "/api/user/trading-prefs", await A(), { priorityFeeLamports: -1 })).statusCode).toBe(400);
  });

  it("mode live ditolak 403 selama server dry, dan tidak tersimpan", async () => {
    const r = await call("PUT", "/api/user/trading-prefs", await A(), { mode: "live" });
    expect(r.statusCode).toBe(403);
    expect(r.json()).toEqual({ error: "live_trading_disabled" });
    expect((await call("GET", "/api/user/trading-prefs", await A())).json().mode).toBe("dry");
  });
});
