import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import EmbeddedPostgres from "embedded-postgres";
import { applyMigrations, createDb, tokens } from "@corvid/db";
import { buildApp } from "../src/app";
import { createV4PoolResolver, INITIALIZE_TOPIC, int24, type V4PoolKey } from "../src/v4pool";

const POOL = "0x" + "ab".repeat(32);
const OTHER = "0x" + "cd".repeat(32);
const KEY: V4PoolKey = { poolId: POOL, currency0: "0x" + "1".repeat(40), currency1: "0x" + "2".repeat(40), fee: 500, tickSpacing: -60, hooks: "0x" + "3".repeat(40) };

describe("int24", () => {
  it("men-decode bilangan negatif yang di-sign-extend", () => {
    expect(int24("f".repeat(58) + "ffffc4".slice(0, 6))).toBe(-60);
    expect(int24("0".repeat(62) + "0a")).toBe(10);
    expect(int24("0".repeat(58) + "000001")).toBe(1);
  });
});

describe("createV4PoolResolver (RPC dan DexScreener palsu)", () => {
  const HEAD = 10_000_000;
  const T0 = 1_700_000_000;
  const CREATED_BLOCK = 6_000_000;
  const pad = (hex: string) => hex.padStart(64, "0");
  const signed24 = (n: number) => (n < 0 ? (0x1000000 + n).toString(16).padStart(6, "f").padStart(64, "f") : pad(n.toString(16)));
  const log = {
    topics: [INITIALIZE_TOPIC, POOL, "0x" + pad("1".repeat(40)), "0x" + pad("2".repeat(40))],
    data: "0x" + pad((500).toString(16)) + signed24(-60) + pad("3".repeat(40)) + pad("0") + pad("0"),
  };
  const mk = (calls: { rpc: string[]; ds: number }) =>
    (async (url: string, init?: RequestInit) => {
      if (String(url).includes("dexscreener")) {
        calls.ds++;
        return new Response(JSON.stringify({ pair: { pairCreatedAt: (T0 + CREATED_BLOCK) * 1000 } }), { status: 200 });
      }
      const body = JSON.parse(String(init?.body));
      calls.rpc.push(body.method);
      let result: unknown = null;
      if (body.method === "eth_blockNumber") result = "0x" + HEAD.toString(16);
      else if (body.method === "eth_getBlockByNumber") result = { timestamp: "0x" + (T0 + parseInt(body.params[0], 16)).toString(16) };
      else if (body.method === "eth_getLogs") {
        const f = parseInt(body.params[0].fromBlock, 16);
        const t = parseInt(body.params[0].toBlock, 16);
        result = t - f > 100_000 ? (() => { throw new Error("range"); })() : CREATED_BLOCK >= f && CREATED_BLOCK <= t ? [log] : [];
      }
      return new Response(JSON.stringify({ jsonrpc: "2.0", id: body.id, result }), { status: 200 });
    }) as unknown as typeof fetch;

  it("menemukan PoolKey dari event Initialize dan menyimpannya di cache", async () => {
    const calls = { rpc: [] as string[], ds: 0 };
    const resolve = createV4PoolResolver({ rpcUrl: "http://rpc", poolManager: "0x" + "9".repeat(40), fetchFn: mk(calls) });
    const key = await resolve(POOL.toUpperCase().replace("0X", "0x"));
    expect(key).toEqual(KEY);
    const rpcCalls = calls.rpc.length;
    expect(await resolve(POOL)).toEqual(KEY); // dari cache: tanpa panggilan baru
    expect(calls.rpc.length).toBe(rpcCalls);
    expect(calls.ds).toBe(1);
  });

  it("null bila DexScreener tidak mengenal pool", async () => {
    const resolve = createV4PoolResolver({ rpcUrl: "http://rpc", poolManager: "0x" + "9".repeat(40), fetchFn: (async () => new Response("{}", { status: 404 })) as unknown as typeof fetch });
    expect(await resolve(OTHER)).toBeNull();
  });
});

describe("GET /api/v4/pool-key", () => {
  const dir = "D:/.dev/tmp/pgtest-api-v4";
  const port = 54339;
  const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
  let pg: EmbeddedPostgres;
  let pool: ReturnType<typeof createDb>["pool"];
  let db: ReturnType<typeof createDb>["db"];

  beforeAll(async () => {
    fs.rmSync(dir, { recursive: true, force: true });
    pg = new EmbeddedPostgres({ databaseDir: dir, user: "corvid", password: "corvid-dev", port, persistent: false, initdbFlags: ["--encoding=UTF8", "--locale=C"] });
    await pg.initialise();
    await pg.start();
    await pg.createDatabase("corvid");
    await applyMigrations(url);
    const c = createDb(url);
    pool = c.pool;
    db = c.db;
    await db.insert(tokens).values({ mint: "0x" + "5".repeat(40), symbol: "V4T", poolId: POOL, decimals: 18, lastSeenAt: new Date() });
  }, 120_000);
  afterAll(async () => {
    await pool?.end();
    await pg?.stop();
  });

  const get = async (resolver: Parameters<typeof buildApp>[0]["v4Pools"], q: string) => {
    const app = await buildApp({ db, v4Pools: resolver });
    await app.ready();
    const r = await app.inject({ method: "GET", url: `/api/v4/pool-key${q}` });
    await app.close();
    return r;
  };

  it("200 dengan PoolKey untuk pool yang terindeks", async () => {
    const r = await get(async (id) => (id === POOL ? KEY : null), `?poolId=${POOL}`);
    expect(r.statusCode).toBe(200);
    expect(r.json()).toEqual(KEY);
  });
  it("404 untuk pool yang tidak ada di tabel tokens (resolver tidak dipanggil)", async () => {
    let called = false;
    const r = await get(async () => ((called = true), KEY), `?poolId=${OTHER}`);
    expect(r.statusCode).toBe(404);
    expect(called).toBe(false);
  });
  it("404 bila PoolKey tidak ditemukan di chain", async () => {
    expect((await get(async () => null, `?poolId=${POOL}`)).statusCode).toBe(404);
  });
  it("502 bila pencarian chain gagal", async () => {
    const r = await get(async () => { throw new Error("rpc"); }, `?poolId=${POOL}`);
    expect(r.statusCode).toBe(502);
  });
  it("503 tanpa resolver dan 400 untuk poolId yang salah", async () => {
    expect((await get(null, `?poolId=${POOL}`)).statusCode).toBe(503);
    expect((await get(async () => KEY, `?poolId=0x1234`)).statusCode).toBe(400);
  });
});
