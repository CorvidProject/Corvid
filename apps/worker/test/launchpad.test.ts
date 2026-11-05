import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import EmbeddedPostgres from "embedded-postgres";
import { eq } from "drizzle-orm";
import { applyMigrations, createDb, memescopeCoins, tokens } from "@corvid/db";
import { refreshLaunchpad, type LaunchpadResult } from "../src/ingest";
import { createDexScreener } from "../src/sources/dexscreener";
import { createGeckoTerminal } from "../src/sources/geckoterminal";
import { classifyCurve, classifyPons, createRpc, migratedDexOf, PONS, VIRTUALS, VIRTUAL_TOKEN, type Rpc } from "../src/sources/launchpads";

const fx = (n: string) => fs.readFileSync(path.join(__dirname, "fixtures", n), "utf8");
const json = (body: string) => new Response(body, { status: 200, headers: { "content-type": "application/json" } });
const noSleep = async () => {};

// Alamat pool/token nyata dari fixture gt-pons-pools.json (respons asli GeckoTerminal, 5 Nov 2026).
const BYTE_POOL = "0x7b2ab0476f4b93a263c07e904b7e283fcf0dca59";
const DWRK_POOL = "0x609681152b79d7771d5340dc888e6a44024ade44";
const TACKLE_POOL = "0x946955d9f359977dc7a03d49317528a133216789";

describe("classifyPons", () => {
  it("kurva aktif: progres dari ETH terkumpul, Final Stretch mulai 50%", () => {
    expect(classifyPons({ ethRaised: 0.42, graduationEth: 4.2, migratedDex: null })).toEqual({ stage: "new", progress: 10, complete: false });
    expect(classifyPons({ ethRaised: 2.1, graduationEth: 4.2, migratedDex: null })).toEqual({ stage: "stretch", progress: 50, complete: false });
    expect(classifyPons({ ethRaised: 3.1123, graduationEth: 4.2, migratedDex: null })?.progress).toBeCloseTo(74.1, 1);
  });
  it("progres dibatasi 100 walau saldo melewati ambang", () => {
    expect(classifyPons({ ethRaised: 9, graduationEth: 4.2, migratedDex: null })).toEqual({ stage: "stretch", progress: 100, complete: false });
  });
  it("saldo 0: migrated bila ada pasangan DEX lain, selain itu tidak ditampilkan", () => {
    expect(classifyPons({ ethRaised: 0, graduationEth: 4.2, migratedDex: "uniswap" })).toEqual({ stage: "migrated", progress: 100, complete: true });
    expect(classifyPons({ ethRaised: 0, graduationEth: 4.2, migratedDex: null })).toBeNull();
  });
  it("classifyCurve: pool fresh (belum ada pembelian) = new 0%, bukan fresh = tidak ditampilkan", () => {
    expect(classifyCurve({ raised: 0, graduation: 42_000, migratedDex: null, fresh: true })).toEqual({ stage: "new", progress: 0, complete: false });
    expect(classifyCurve({ raised: 0, graduation: 42_000, migratedDex: null, fresh: false })).toBeNull();
    expect(classifyCurve({ raised: 0, graduation: 42_000, migratedDex: "uniswap", fresh: true })?.stage).toBe("migrated");
  });
  it("migratedDexOf mengabaikan DEX Pons dan pasangan tanpa likuiditas", () => {
    expect(migratedDexOf("uniswap", "5000")).toBe("uniswap");
    expect(migratedDexOf("pons", "5000")).toBeNull();
    expect(migratedDexOf("uniswap", "0")).toBeNull();
    expect(migratedDexOf(undefined, "5000")).toBeNull();
  });
});

describe("createRpc.balances", () => {
  it("membaca saldo batch (wei → ETH) dan menghilangkan alamat yang gagal", async () => {
    let body: { id: number; method: string; params: string[] }[] = [];
    const rpc = createRpc({
      url: "http://rpc.test",
      fetch: async (_u, init) => {
        body = JSON.parse(String(init?.body));
        return json(
          JSON.stringify([
            { jsonrpc: "2.0", id: 0, result: "0x" + (3_112_300_000_000_000_000n).toString(16) },
            { jsonrpc: "2.0", id: 1, error: { code: -32000, message: "boom" } },
          ]),
        );
      },
    });
    const out = await rpc.balances([BYTE_POOL.toUpperCase().replace("0X", "0x"), DWRK_POOL]);
    expect(body.map((b) => b.method)).toEqual(["eth_getBalance", "eth_getBalance"]);
    expect(out.get(BYTE_POOL)).toBeCloseTo(3.1123, 4);
    expect(out.has(DWRK_POOL)).toBe(false);
  });
  it("HTTP error melempar, bukan mengembalikan 0", async () => {
    const rpc = createRpc({ url: "http://rpc.test", fetch: async () => new Response("x", { status: 503 }) });
    await expect(rpc.balances([BYTE_POOL])).rejects.toThrow(/503/);
  });
});

describe("refreshLaunchpad", () => {
  const dir = "D:/.dev/tmp/pgtest-launchpad";
  const port = 54332;
  const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
  let pgServer: EmbeddedPostgres;
  let created: ReturnType<typeof createDb>;

  // DexScreener: hanya TACKLE yang punya pasangan aktif di Uniswap (sudah lulus). Bentuk respons mengikuti API asli.
  let tackleMint = "";
  const fakeFetch = async (u: string) => {
    if (u.includes("/dexes/pons-v2/pools")) return json(fx("gt-pons-pools.json"));
    if (u.includes("/dexes/virtuals-robinhood/pools")) return json(fx("gt-virtuals-pools.json"));
    if (u.includes("dexscreener.com/tokens/v1/robinhood/")) {
      return json(
        JSON.stringify([
          {
            chainId: "robinhood",
            dexId: "uniswap",
            pairAddress: "0x00000000000000000000000000000000000000aa",
            baseToken: { address: tackleMint, name: "Tackle", symbol: "TACKLE" },
            quoteToken: { address: "0x0000000000000000000000000000000000000001" },
            priceUsd: "0.0001",
            liquidity: { usd: 12000 },
            marketCap: 48000,
            info: { imageUrl: "https://example.test/tackle.png" },
          },
        ]),
      );
    }
    return new Response("not found", { status: 404 });
  };

  beforeAll(async () => {
    fs.rmSync(dir, { recursive: true, force: true });
    pgServer = new EmbeddedPostgres({ databaseDir: dir, user: "corvid", password: "corvid-dev", port, persistent: false, initdbFlags: ["--encoding=UTF8", "--locale=C"] });
    await pgServer.initialise();
    await pgServer.start();
    await pgServer.createDatabase("corvid");
    await applyMigrations(url);
    created = createDb(url);
    const pools = JSON.parse(fx("gt-pons-pools.json")).data as { attributes: { address: string }; relationships: { base_token: { data: { id: string } } } }[];
    tackleMint = pools.find((p) => p.attributes.address === TACKLE_POOL)!.relationships.base_token.data.id.replace(/^robinhood_/, "").toLowerCase();
  }, 120_000);
  afterAll(async () => {
    await created?.pool.end();
    await pgServer?.stop();
  });

  const deps = (balances: Record<string, number>) => ({
    db: created.db,
    gt: createGeckoTerminal({ fetch: fakeFetch, minIntervalMs: 0, sleep: noSleep }),
    ds: createDexScreener({ fetch: fakeFetch, minIntervalMs: 0, sleep: noSleep }),
    rpc: { balances: async () => new Map(Object.entries(balances)) } as unknown as Rpc,
  });

  it("mengisi tiga tahap dari data pool nyata; saldo 0 tanpa pasangan DEX dan saldo tak terbaca dilewati", async () => {
    // Fixture hanya 1 halaman (20 pool): halaman 2 dan seterusnya juga dijawab fixture yang sama → dedup per token.
    const out = await refreshLaunchpad(deps({ [BYTE_POOL]: 3.1123, [DWRK_POOL]: 0.3676, [TACKLE_POOL]: 0 }), { graduation: { pons: 4.2 }, pages: 1, launchpads: [PONS] });
    const res = out.pons as LaunchpadResult;
    expect(res).toMatchObject({ pools: 20, new: 1, stretch: 1, migrated: 1 });
    expect(res.skipped).toBe(17); // 17 pool lain: saldo tak terbaca → dilewati, tidak ditebak

    const rows = await created.db.select().from(memescopeCoins);
    const by = Object.fromEntries(rows.map((r) => [r.symbol, r]));
    expect(by.byte).toMatchObject({ stage: "stretch", dex: "pons-v2", complete: false });
    expect(Number(by.byte.progressPct)).toBeCloseTo(74.1, 1);
    expect(by.DWRK).toMatchObject({ stage: "new" });
    expect(Number(by.DWRK.progressPct)).toBeCloseTo(8.75, 1);
    expect(by.TACKLE).toMatchObject({ stage: "migrated", complete: true, dex: "uniswap" });
    expect(Number(by.TACKLE.progressPct)).toBe(100);
    expect(by.TACKLE.imageUrl).toBe("https://example.test/tackle.png");
    // Token juga tersimpan di tabel tokens (halaman detail token memerlukannya).
    const [t] = await created.db.select().from(tokens).where(eq(tokens.mint, tackleMint));
    expect(t).toBeTruthy();
  });

  it("idempoten dan memindahkan tahap bila saldo berubah", async () => {
    await refreshLaunchpad(deps({ [BYTE_POOL]: 3.1123, [DWRK_POOL]: 0.3676, [TACKLE_POOL]: 0 }), { pages: 1, launchpads: [PONS] });
    expect((await created.db.select().from(memescopeCoins)).length).toBe(3);
    await refreshLaunchpad(deps({ [BYTE_POOL]: 0, [DWRK_POOL]: 2.5, [TACKLE_POOL]: 0 }), { pages: 1, launchpads: [PONS] });
    const rows = await created.db.select().from(memescopeCoins);
    const by = Object.fromEntries(rows.map((r) => [r.symbol, r]));
    expect(by.DWRK.stage).toBe("stretch"); // 2.5 / 4.2 = 59,5%
    // byte kini saldo 0 tanpa pasangan DEX: baris lamanya tidak dihapus di sini (dibersihkan retensi), tahap tidak diubah.
    expect(by.byte.stage).toBe("stretch");
  });

  it("Virtuals: progres dari saldo VIRTUAL (ambang 42.000); pool baru (supply di kurva) = new 0%; saldo 0 tanpa DEX lain dilewati", async () => {
    const pools = JSON.parse(fx("gt-virtuals-pools.json")).data as { attributes: { address: string; name: string } }[];
    const addr = (name: string) => pools.find((p) => p.attributes.name.startsWith(name))!.attributes.address.toLowerCase();
    const HELIX = addr("HELIX"); // pool pertama di fixture
    const LOONA = addr("LOONA");
    const WORK = addr("WORK");
    const rpc = {
      erc20Balances: async (token: string) => {
        expect(token).toBe(VIRTUAL_TOKEN);
        return new Map([[HELIX, 21_000], [LOONA, 0], [WORK, 0]]); // pool lain: tak terbaca
      },
      erc20Share: async () => new Map([[LOONA, 1], [WORK, 0.45]]), // LOONA: semua supply di kurva; WORK: sudah banyak keluar
    } as unknown as Rpc;
    const out = await refreshLaunchpad({ ...deps({}), rpc }, { pages: 1, launchpads: [VIRTUALS] });
    const res = out.virtuals as LaunchpadResult;
    expect(res).toMatchObject({ new: 1, stretch: 1, migrated: 0 });
    const rows = await created.db.select().from(memescopeCoins).where(eq(memescopeCoins.dex, "virtuals-robinhood"));
    const by = Object.fromEntries(rows.map((r) => [r.symbol, r]));
    expect(by.HELIX).toMatchObject({ stage: "stretch" });
    expect(Number(by.HELIX.progressPct)).toBe(50); // 21.000 / 42.000
    expect(by.LOONA).toMatchObject({ stage: "new", complete: false });
    expect(Number(by.LOONA.progressPct)).toBe(0);
    expect(by.WORK).toBeUndefined(); // saldo 0 dan supply sebagian keluar, tanpa pasangan DEX: tidak ditampilkan
  });

  it("kegagalan satu launchpad tidak menghentikan yang lain", async () => {
    const rpc = {
      balances: async () => {
        throw new Error("RPC mati");
      },
      erc20Balances: async () => new Map<string, number>(),
      erc20Share: async () => new Map<string, number>(),
    } as unknown as Rpc;
    const out = await refreshLaunchpad({ ...deps({}), rpc }, { pages: 1, launchpads: [PONS, VIRTUALS] });
    expect(out.pons).toEqual({ error: "RPC mati" });
    expect(out.virtuals).toMatchObject({ pools: 20 });
  });
});
