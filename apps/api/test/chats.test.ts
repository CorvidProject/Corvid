import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import { generateKeyPair, SignJWT, type KeyLike } from "jose";
import EmbeddedPostgres from "embedded-postgres";
import { sql } from "drizzle-orm";
import { applyMigrations, createDb, credits, tokens } from "@corvid/db";
import { buildApp } from "../src/app";
import { createVerifier } from "../src/auth";
import { LlmError, type LlmClient, type LlmMessage } from "../src/llm";
import { RateLimiter } from "../src/ratelimit";
import { ensureProfile, WELCOME_PER_IP_24H } from "../src/routes/user";

const dir = "D:/.dev/tmp/pgtest-chats";
const port = 54338;
const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
const ISS = "https://example-ref.supabase.co/auth/v1";
const A = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
const B = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb";
const C = "cccccccc-cccc-4ccc-8ccc-cccccccccccc";
const TOKEN = "0x2222222222222222222222222222222222222222";
const UNKNOWN = "0x9999999999999999999999999999999999999999";

let pgServer: EmbeddedPostgres;
let created: ReturnType<typeof createDb>;
let app: Awaited<ReturnType<typeof buildApp>>;
let appNoLlm: Awaited<ReturnType<typeof buildApp>>;
let appStrict: Awaited<ReturnType<typeof buildApp>>;
let appCapped: Awaited<ReturnType<typeof buildApp>>;
let key: KeyLike;
const seen: { system: string; messages: LlmMessage[] }[] = [];
let failNext = false;
const llm: LlmClient = {
  async complete(system, messages) {
    seen.push({ system, messages });
    if (failNext) {
      failNext = false;
      throw new LlmError("llm_http_500");
    }
    return "mock answer";
  },
};
const tok = (sub: string) =>
  new SignJWT({ email: `${sub.slice(0, 4)}@x.io` }).setProtectedHeader({ alg: "ES256" }).setSubject(sub).setIssuer(ISS).setAudience("authenticated").setIssuedAt().setExpirationTime("1h").sign(key);
const call = async (method: "GET" | "POST" | "PUT" | "DELETE", u: string, sub?: string, payload?: unknown, a = app) =>
  a.inject({ method, url: u, headers: sub ? { authorization: `Bearer ${await tok(sub)}` } : {}, payload: payload as never });

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
  await created.db.insert(tokens).values({ mint: TOKEN, symbol: "TST", name: "Test Token", priceUsd: "0.0123", liquidityUsd: "50000", riskScore: 12 });
  const verifier = createVerifier({ issuer: ISS, key: kp.publicKey });
  app = await buildApp({ db: created.db, verifier, llm, chatLimiter: new RateLimiter(1000, 60_000) });
  appStrict = await buildApp({ db: created.db, verifier, llm, chatLimiter: new RateLimiter(2, 60_000) });
  appCapped = await buildApp({ db: created.db, verifier, llm, chatDailyCap: 0 });
  appNoLlm = await buildApp({ db: created.db, verifier, llm: null });
  await app.ready();
  await appNoLlm.ready();
  await appStrict.ready();
  await appCapped.ready();
}, 120_000);

afterAll(async () => {
  await app?.close();
  await appNoLlm?.close();
  await appStrict?.close();
  await appCapped?.close();
  await created?.pool.end();
  await pgServer?.stop();
});

const newChat = async (sub: string) => (await call("POST", "/api/chats", sub)).json().id as number;
const send = (id: number, sub: string, content: string, a = app) => call("POST", `/api/chats/${id}/messages`, sub, { content }, a);

describe("chat", () => {
  it("tanpa token 401; tanpa LLM 503", async () => {
    expect((await call("GET", "/api/chats")).statusCode).toBe(401);
    const id = await newChat(A);
    const r = await send(id, A, "hi", appNoLlm);
    expect(r.statusCode).toBe(503);
    expect(r.json().error).toBe("llm_unavailable");
  });

  it("pesan dengan alamat token: konteks dari DB, jawaban tersimpan, 1 kredit terpotong, judul dan token terisi", async () => {
    const id = await newChat(A);
    const r = await send(id, A, `Analyze ${TOKEN.toUpperCase().replace("0X", "0x")}`);
    expect(r.statusCode).toBe(200);
    const body = r.json();
    expect(body.messages.map((m: { role: string }) => m.role)).toEqual(["user", "assistant"]);
    expect(body.messages[1].content).toBe("mock answer");
    expect(body.credits).toBe(24);
    const last = seen[seen.length - 1];
    expect(last.system).toContain("TOKEN TST");
    expect(last.system).toContain("price $0.0123");
    expect(last.system).toContain("Corvid risk score 12");
    expect(last.messages.at(-1)).toEqual({ role: "user", content: expect.stringContaining("Analyze") });
    const detail = (await call("GET", `/api/chats/${id}`, A)).json();
    expect(detail.chat.kind).toBe("token");
    expect(detail.chat.tokenMint).toBe(TOKEN);
    expect(detail.chat.title.startsWith("Analyze")).toBe(true);
    expect(detail.messages).toHaveLength(2);
  });

  it("simbol $TST dikenali; alamat tak dikenal dilaporkan apa adanya", async () => {
    const id = await newChat(A);
    await send(id, A, "what about $tst?");
    expect(seen.at(-1)!.system).toContain("TOKEN TST");
    await send(id, A, `check ${UNKNOWN}`);
    expect(seen.at(-1)!.system).toContain("no wallet data indexed");
    await send(id, A, "any $ZZZZ news");
    expect(seen.at(-1)!.system).toContain("no token with this symbol is indexed");
  });

  it("kata kunci smart money menyertakan blok SMART MONEY", async () => {
    const id = await newChat(A);
    await send(id, A, "smart money today");
    expect(seen.at(-1)!.system).toContain("SMART MONEY");
  });

  it("riwayat percakapan ikut dikirim ke model", async () => {
    const id = await newChat(B);
    await send(id, B, "first");
    await send(id, B, "second");
    expect(seen.at(-1)!.messages.map((m) => m.content)).toEqual(["first", "mock answer", "second"]);
  });

  it("galat LLM: 502, tanpa pesan tersimpan dan tanpa potongan kredit", async () => {
    const id = await newChat(C);
    failNext = true;
    const r = await send(id, C, "boom");
    expect(r.statusCode).toBe(502);
    expect((await call("GET", `/api/chats/${id}`, C)).json().messages).toHaveLength(0);
    const ok = await send(id, C, "retry");
    expect(ok.json().credits).toBe(24);
  });

  it("kredit habis: 402 dan LLM tidak dipanggil", async () => {
    const id = await newChat(C);
    await created.db.insert(credits).values({ profileId: C, delta: -24, reason: "test" });
    const before = seen.length;
    const r = await send(id, C, "no credits");
    expect(r.statusCode).toBe(402);
    expect(seen.length).toBe(before);
  });

  it("terisolasi per pengguna, validasi, dan hapus", async () => {
    const id = await newChat(A);
    expect((await call("GET", `/api/chats/${id}`, B)).statusCode).toBe(404);
    expect((await send(id, B, "x")).statusCode).toBe(404);
    expect((await send(id, A, "   ")).statusCode).toBe(400);
    expect((await send(id, A, "x".repeat(2001))).statusCode).toBe(400);
    await call("DELETE", `/api/chats/${id}`, B);
    expect((await call("GET", `/api/chats/${id}`, A)).statusCode).toBe(200);
    await call("DELETE", `/api/chats/${id}`, A);
    expect((await call("GET", `/api/chats/${id}`, A)).statusCode).toBe(404);
    const ids = (await call("GET", "/api/chats", A)).json().chats.map((c: { id: number }) => c.id);
    expect(ids).not.toContain(id);
  });
});

describe("pembatasan", () => {
  const D = "dddddddd-dddd-4ddd-8ddd-dddddddddddd";
  it("terlalu sering: pesan ke-3 dalam semenit ditolak 429 dengan Retry-After, tanpa memanggil LLM", async () => {
    const id = (await call("POST", "/api/chats", D, undefined, appStrict)).json().id as number;
    expect((await send(id, D, "one", appStrict)).statusCode).toBe(200);
    expect((await send(id, D, "two", appStrict)).statusCode).toBe(200);
    const before = seen.length;
    const r = await send(id, D, "three", appStrict);
    expect(r.statusCode).toBe(429);
    expect(r.json().error).toBe("rate_limited");
    expect(Number(r.headers["retry-after"])).toBeGreaterThan(0);
    expect(seen.length).toBe(before);
  });

  it("pesan paralel dari satu pengguna: hanya satu yang diproses", async () => {
    const E = "eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee";
    const id = (await call("POST", "/api/chats", E)).json().id as number;
    const [a, b] = await Promise.all([send(id, E, "parallel a"), send(id, E, "parallel b")]);
    expect([a.statusCode, b.statusCode].sort()).toEqual([200, 429]);
    expect((await call("GET", `/api/chats/${id}`, E)).json().messages).toHaveLength(2);
  });

  it("pagar harian: melewati batas 24 jam, chat menjawab 503 chat_busy dan LLM tidak dipanggil", async () => {
    const id = (await call("POST", "/api/chats", A, undefined, appCapped)).json().id as number;
    const before = seen.length;
    const r = await send(id, A, "capped", appCapped);
    expect(r.statusCode).toBe(503);
    expect(r.json().error).toBe("chat_busy");
    expect(seen.length).toBe(before);
  });

  it("kredit selamat datang: maksimal 5 akun baru per IP per 24 jam, sisanya tanpa kredit gratis", async () => {
    const ids = Array.from({ length: WELCOME_PER_IP_24H + 2 }, (_, i) => `00000000-0000-4000-8000-${String(i + 1).padStart(12, "0")}`);
    for (const id of ids) await ensureProfile(created.db, { id, email: `${id.slice(-3)}@x.io` }, { ipHash: "iphash-1", userAgent: "t" });
    await ensureProfile(created.db, { id: "00000000-0000-4000-8000-0000000000ff", email: "other@x.io" }, { ipHash: "iphash-2" });
    const bal = async (id: string) => Number((await created.db.execute(sql`select coalesce(sum(delta),0)::int as n from credits where profile_id = ${id}`)).rows[0].n);
    const got = await Promise.all(ids.map(bal));
    expect(got.filter((n) => n === 25)).toHaveLength(WELCOME_PER_IP_24H);
    expect(got.filter((n) => n === 0)).toHaveLength(2);
    expect(await bal("00000000-0000-4000-8000-0000000000ff")).toBe(25); // IP lain tidak terpengaruh
  });
});

