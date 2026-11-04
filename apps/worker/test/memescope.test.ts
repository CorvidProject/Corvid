import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import EmbeddedPostgres from "embedded-postgres";
import { applyMigrations, createDb, memescopeCoins } from "@corvid/db";
import { bondingProgress, classify, pumpMarketCap, refreshMemescope, STRETCH_FROM } from "../src/memescope";
import { createDexScreener } from "../src/sources/dexscreener";
import { createGeckoTerminal, parsePools, WSOL } from "../src/sources/geckoterminal";

const fx = (n: string) => JSON.parse(fs.readFileSync(path.join(__dirname, "fixtures", n), "utf8"));
const AMD = "DDmGnuvroxVrb7CSyjYcezFU8gnAfhKasg4ZZezmpump";
const RAM = "6QUHcqYuiPRHxhnYZoygewXtNQr9kUrhc9Tmwgtbpump";
const ANSEM = "9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump";
const NOT_PUMP = "3LPh7nQirnGSc1BZ98K82vx6hiYojH1gQfvKvoxGtw4d";
const NOW = new Date("2026-11-05T00:00:00Z");

// harga (SOL) yang menghasilkan progress ~10% dan ~70% menurut kurva
const P10 = 3.26e-8;
const P70 = 1.2004e-7;

function pool(mint: string, dex: string, priceNative: string, created: string, name = "TKN / SOL") {
  const base = fx("gt-trending.json").data[0];
  const p = JSON.parse(JSON.stringify(base));
  p.id = `solana_pool_${mint.slice(0, 6)}`;
  p.attributes.address = `pool${mint.slice(0, 6)}`;
  p.attributes.name = name;
  p.attributes.pool_created_at = created;
  p.attributes.base_token_price_native_currency = priceNative;
  p.attributes.market_cap_usd = "12345";
  p.attributes.fdv_usd = "12345";
  p.relationships.base_token.data.id = `solana_${mint}`;
  p.relationships.quote_token.data.id = `solana_${WSOL}`;
  p.relationships.dex.data.id = dex;
  return p;
}

describe("bondingProgress", () => {
  it("0% pada harga awal kurva, ~100% pada harga kelulusan, monoton naik", () => {
    expect(bondingProgress(30 / 1_073_000_000)).toBeCloseTo(0, 6); // harga awal 30 SOL / 1.073B token
    expect(bondingProgress(115 / 279_900_000)).toBeGreaterThan(99.9); // virtual SOL 115 saat lulus
    expect(bondingProgress(P10)!).toBeCloseTo(10, 0);
    expect(bondingProgress(P70)!).toBeCloseTo(70, 0);
    const a = bondingProgress(1e-7)!;
    const b = bondingProgress(2e-7)!;
    expect(b).toBeGreaterThan(a);
  });
  it("null untuk harga tidak valid, dan dibatasi 0..100", () => {
    expect(bondingProgress(null)).toBeNull();
    expect(bondingProgress(0)).toBeNull();
    expect(bondingProgress(NaN)).toBeNull();
    expect(bondingProgress(1e-12)).toBe(0); // di bawah harga awal
    expect(bondingProgress(1)).toBe(100);
  });
});

describe("pumpMarketCap", () => {
  const mk = (over: Record<string, string>) => {
    const p = pool(AMD, "pump-fun", String(P10), "2026-11-04T23:00:00Z");
    Object.assign(p.attributes, over);
    return parsePools({ data: [p] })[0];
  };
  it("memakai FDV, abaikan market_cap 0 atau kosong", () => {
    expect(pumpMarketCap(mk({ fdv_usd: "5000", market_cap_usd: "0" }))).toBe("5000");
    expect(pumpMarketCap(mk({ fdv_usd: "5000", market_cap_usd: "9999" }))).toBe("5000");
  });
  it("jatuh ke market_cap lalu harga x 1 miliar", () => {
    expect(pumpMarketCap(mk({ fdv_usd: "0", market_cap_usd: "777" }))).toBe("777");
    expect(Number(pumpMarketCap(mk({ fdv_usd: "0", market_cap_usd: "0", base_token_price_usd: "0.000004" })))).toBeCloseTo(4000, 3);
  });
});

describe("classify", () => {
  const pools = parsePools({
    data: [
      pool(AMD, "pump-fun", String(P10), "2026-11-04T23:00:00Z"),
      pool(RAM, "pump-fun", String(P70), "2026-11-04T20:00:00Z"),
      pool(ANSEM, "pumpswap", "0.001", "2026-11-04T23:30:00Z"),
      pool(NOT_PUMP, "pump-fun", String(P10), "2026-11-04T23:00:00Z"), // bukan mint "pump"
    ],
  });
  it("membagi new / stretch / migrated dan membuang mint non-pump", () => {
    const c = classify(pools, NOW);
    const by = Object.fromEntries(c.map((x) => [x.pool.baseMint, x.stage]));
    expect(by).toEqual({ [AMD]: "new", [RAM]: "stretch", [ANSEM]: "migrated" });
    expect(STRETCH_FROM).toBe(50);
  });
  it("pool berkuotasi token lain atau tanpa market cap dibuang", () => {
    const wrongQuote = pool(AMD, "pump-fun", String(P70), "2026-11-04T23:00:00Z");
    wrongQuote.relationships.quote_token.data.id = "solana_" + ANSEM; // bukan wSOL
    const noMcap = pool(RAM, "pump-fun", String(P70), "2026-11-04T23:00:00Z");
    noMcap.attributes.fdv_usd = "0";
    noMcap.attributes.market_cap_usd = null;
    noMcap.attributes.base_token_price_usd = "0";
    expect(classify(parsePools({ data: [wrongQuote, noMcap] }), NOW)).toHaveLength(0);
  });
  it("pumpswap lama (>48 jam) tidak dianggap baru lulus", () => {
    const old = parsePools({ data: [pool(ANSEM, "pumpswap", "0.001", "2026-11-01T00:00:00Z")] });
    expect(classify(old, NOW)).toHaveLength(0);
  });
  it("mint yang ada di pump-fun dan pumpswap dihitung sudah lulus", () => {
    const both = parsePools({ data: [pool(AMD, "pump-fun", String(P70), "2026-11-04T10:00:00Z"), pool(AMD, "pumpswap", "0.001", "2026-11-04T23:00:00Z")] });
    expect(classify(both, NOW).map((c) => c.stage)).toEqual(["migrated"]); // pumpswap menimpa
  });
});

describe("refreshMemescope (Postgres nyata)", () => {
  const dir = "D:/.dev/tmp/pgtest-memescope";
  const port = 54332;
  const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
  let pgServer: EmbeddedPostgres;
  let created: ReturnType<typeof createDb>;
  const json = (b: unknown) => new Response(JSON.stringify(b), { status: 200 });
  const fakeFetch = async (u: string) => {
    if (u.includes("/dexes/pump-fun/pools")) return json({ data: [pool(AMD, "pump-fun", String(P10), "2026-11-04T23:00:00Z", "AMD / SOL"), pool(RAM, "pump-fun", String(P70), "2026-11-04T20:00:00Z", "RAM / SOL")] });
    if (u.includes("/dexes/pumpswap/pools")) return json({ data: [pool(ANSEM, "pumpswap", "0.001", "2026-11-04T23:30:00Z", "ANSEM / SOL")] });
    if (u.includes("/new_pools")) return json({ data: [] });
    if (u.includes("dexscreener.com/tokens/v1/solana/")) return json(fx("ds-tokens.json"));
    return new Response("nf", { status: 404 });
  };
  const noSleep = async () => {};

  beforeAll(async () => {
    fs.rmSync(dir, { recursive: true, force: true });
    pgServer = new EmbeddedPostgres({ databaseDir: dir, user: "corvid", password: "corvid-dev", port, persistent: false, initdbFlags: ["--encoding=UTF8", "--locale=C"] });
    await pgServer.initialise();
    await pgServer.start();
    await pgServer.createDatabase("corvid");
    await applyMigrations(url);
    created = createDb(url);
  }, 120_000);
  afterAll(async () => {
    await created?.pool.end();
    await pgServer?.stop();
  });

  it("mengisi tiga tahap, progress dari kurva, gambar dari DexScreener", async () => {
    const deps = {
      db: created.db,
      gt: createGeckoTerminal({ fetch: fakeFetch, minIntervalMs: 0, sleep: noSleep }),
      ds: createDexScreener({ fetch: fakeFetch, minIntervalMs: 0, sleep: noSleep }),
      now: () => NOW,
    };
    expect(await refreshMemescope(deps)).toEqual({ new: 1, stretch: 1, migrated: 1 });
    const rows = await created.db.select().from(memescopeCoins);
    const by = Object.fromEntries(rows.map((r) => [r.mint, r]));
    expect(by[AMD].stage).toBe("new");
    expect(Number(by[AMD].progressPct)).toBeCloseTo(10, 0);
    expect(by[AMD].imageUrl).toMatch(/dexscreener/); // gambar dari DexScreener (hanya AMD ada di fixture)
    expect(by[RAM].stage).toBe("stretch");
    expect(Number(by[RAM].progressPct)).toBeCloseTo(70, 0);
    expect(by[ANSEM]).toMatchObject({ stage: "migrated", complete: true });
    expect(Number(by[ANSEM].progressPct)).toBe(100);
    // jalankan ulang: tidak menggandakan
    await refreshMemescope(deps);
    expect(await created.db.select().from(memescopeCoins)).toHaveLength(3);
  });
});
