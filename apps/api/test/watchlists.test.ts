import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import { generateKeyPair, SignJWT, type KeyLike } from "jose";
import EmbeddedPostgres from "embedded-postgres";
import { applyMigrations, createDb } from "@corvid/db";
import { buildApp } from "../src/app";
import { createVerifier } from "../src/auth";
import { MAX_WATCHED_WALLETS } from "../src/routes/watchlists";

const dir = "D:/.dev/tmp/pgtest-watchlists";
const port = 54337;
const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
const ISS = "https://example-ref.supabase.co/auth/v1";
const A = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
const B = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb";
const W1 = "0x1111111111111111111111111111111111111111";
const W2 = "0xAbCdEf0123456789aBcDeF0123456789AbCdEf01";

let pgServer: EmbeddedPostgres;
let created: ReturnType<typeof createDb>;
let app: Awaited<ReturnType<typeof buildApp>>;
let key: KeyLike;
const tok = (sub: string) =>
  new SignJWT({ email: `${sub.slice(0, 4)}@x.io` }).setProtectedHeader({ alg: "ES256" }).setSubject(sub).setIssuer(ISS).setAudience("authenticated").setIssuedAt().setExpirationTime("1h").sign(key);
const call = async (method: "GET" | "POST" | "PUT" | "DELETE", u: string, sub?: string, payload?: unknown) =>
  app.inject({ method, url: u, headers: sub ? { authorization: `Bearer ${await tok(sub)}` } : {}, payload: payload as never });


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

describe("watchlists", () => {
  it("tanpa token 401", async () => {
    expect((await call("GET", "/api/alpha/watchlists")).statusCode).toBe(401);
    expect((await call("PUT", `/api/alpha/watchlists/wallets/${W1}`)).statusCode).toBe(401);
  });
  it("awalnya kosong; alamat tidak valid 400", async () => {
    expect((await call("GET", "/api/alpha/watchlists", A)).json()).toEqual({ lists: [] });
    expect((await call("PUT", "/api/alpha/watchlists/wallets/bukan-alamat", A)).statusCode).toBe(400);
  });
  it("bintang idempoten, alamat disimpan lowercase", async () => {
    expect((await call("PUT", `/api/alpha/watchlists/wallets/${W2}`, A)).statusCode).toBe(200);
    expect((await call("PUT", `/api/alpha/watchlists/wallets/${W2.toLowerCase()}`, A)).statusCode).toBe(200);
    await call("PUT", `/api/alpha/watchlists/wallets/${W1}`, A);
    const { lists } = (await call("GET", "/api/alpha/watchlists", A)).json();
    expect(lists).toHaveLength(1);
    expect(lists[0].name).toBe("Starred");
    expect(lists[0].wallets.map((w: { address: string }) => w.address).sort()).toEqual([W1, W2.toLowerCase()]);
    expect(lists[0].wallets[0].tier).toBeNull();
  });
  it("terisolasi per pengguna; hapus hanya milik sendiri", async () => {
    expect((await call("GET", "/api/alpha/watchlists", B)).json()).toEqual({ lists: [] });
    await call("DELETE", `/api/alpha/watchlists/wallets/${W1}`, B);
    expect((await call("GET", "/api/alpha/watchlists", A)).json().lists[0].wallets).toHaveLength(2);
    await call("DELETE", `/api/alpha/watchlists/wallets/${W1}`, A);
    expect((await call("GET", "/api/alpha/watchlists", A)).json().lists[0].wallets).toHaveLength(1);
  });
  it("batas jumlah wallet", async () => {
    expect(MAX_WATCHED_WALLETS).toBeGreaterThan(1);
  });
});
