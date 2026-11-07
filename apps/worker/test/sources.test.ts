import { describe, expect, it, vi } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { createHttp, HttpError } from "../src/http";
import { parseOhlcv, parsePools, parseTrades, WETH } from "../src/sources/geckoterminal";
import { parseTokens } from "../src/sources/dexscreener";
import { createGoPlus, parseSecurity } from "../src/sources/goplus";

const fx = (n: string) => JSON.parse(fs.readFileSync(path.join(__dirname, "fixtures", n), "utf8"));
const CASH = "0x020bfc650a365f8bb26819deaabf3e21291018b4"; // CASHCAT (token nyata di Robinhood Chain)

describe("GeckoTerminal parser (sampel respons asli, jaringan robinhood)", () => {
  it("parsePools: base token, quote, dex, angka sebagai string", () => {
    const pools = parsePools(fx("gt-trending.json"));
    expect(pools).toHaveLength(3);
    expect(pools[0]).toMatchObject({ baseMint: CASH, dex: "uniswap-v3-robinhood", poolAddress: "0xd42a491087a15e5afd51feb3606066cc152d2b09" });
    expect(pools[0].quoteMint).toBe(WETH);
    expect(typeof pools[0].priceUsd).toBe("string");
    expect(pools[0].change24h).toBe("-6.473");
    // Pool Uniswap v4: alamat pool berupa ID 32-byte, token dasar tetap alamat 20-byte.
    expect(pools[2].dex).toBe("uniswap-v4-robinhood");
    expect(pools[2].poolAddress).toMatch(/^0x[0-9a-f]{64}$/);
  });

  it("parsePools membuang token dasar non-EVM", () => {
    const j = fx("gt-trending.json");
    j.data[0].relationships.base_token.data.id = "robinhood_DDmGnuvroxVrb7CSyjYcezFU8gnAfhKasg4ZZezmpump";
    expect(parsePools(j)).toHaveLength(2);
  });

  it("parseOhlcv: urut naik, waktu detik menjadi Date", () => {
    const c = parseOhlcv(fx("gt-ohlcv.json"));
    expect(c).toHaveLength(3);
    expect(c[0].bucketStart.getTime()).toBeLessThan(c[2].bucketStart.getTime());
    expect(c[2].bucketStart.getTime()).toBe(1793854800 * 1000);
  });

  it("parseOhlcv: timestamp ganda digabung (entri terakhir dipakai), urut naik", () => {
    const raw = { data: { attributes: { ohlcv_list: [[200, 1, 2, 0.5, 1.5, 10], [100, 1, 1, 1, 1, 1], [200, 9, 9, 9, 9, 99]] } } };
    const c = parseOhlcv(raw);
    expect(c.map((x) => x.bucketStart.getTime() / 1000)).toEqual([100, 200]);
    expect(c[1]).toMatchObject({ open: "9", volumeUsd: "99" });
  });

  it("parseTrades: sisi base benar, ethAmount (ETH) hanya bila quote WETH", () => {
    const trades = parseTrades(fx("gt-trades.json"), CASH);
    expect(trades.length).toBeGreaterThan(0);
    for (const t of trades) {
      expect(["buy", "sell"]).toContain(t.side);
      expect(Number(t.ethAmount)).toBeGreaterThan(0); // pool CASHCAT/WETH: sisi quote = ETH
      expect(t.wallet).toMatch(/^0x[0-9a-f]{40}$/);
    }
    // Pool berkuotasi token lain: tidak ada jumlah ETH.
    const other = JSON.parse(JSON.stringify(fx("gt-trades.json")));
    for (const x of other.data) {
      if (x.attributes.kind === "sell") x.attributes.to_token_address = "0x00000000000000000000000000000000000000aa";
      else x.attributes.from_token_address = "0x00000000000000000000000000000000000000aa";
    }
    for (const t of parseTrades(other, CASH)) expect(t.ethAmount).toBeNull();
    const syn = {
      data: [
        {
          attributes: {
            block_timestamp: "2026-11-04T20:00:00Z",
            tx_hash: "h1",
            tx_from_address: "0x00000000000000000000000000000000000000B1",
            kind: "buy",
            from_token_address: WETH,
            to_token_address: CASH,
            from_token_amount: "2.5",
            to_token_amount: "1000",
            price_from_in_usd: "2400",
            price_to_in_usd: "0.375",
          },
        },
      ],
    };
    const [t] = parseTrades(syn, CASH);
    expect(t).toMatchObject({ side: "buy", tokenAmount: "1000", ethAmount: "2.5", priceUsd: "0.375", wallet: "0x00000000000000000000000000000000000000b1" });
    expect(parseTrades(syn, "0x00000000000000000000000000000000000000cc")).toHaveLength(0);
  });

  it("menolak bentuk respons tak valid (zod)", () => {
    expect(() => parsePools({ data: [{ id: "x" }] })).toThrow();
  });
});

describe("DexScreener parser", () => {
  it("parseTokens: gambar, sosial, buys/sells", () => {
    const [t] = parseTokens(fx("ds-tokens.json"));
    expect(t).toMatchObject({ mint: CASH, symbol: "CASHCAT", dex: "uniswap" }); // alamat checksum campuran → lowercase
    expect(t.image).toMatch(/^https:\/\/cdn\.dexscreener\.com/);
    expect(t.twitter).toMatch(/x\.com/);
    expect(t.buys24h).toBe(512);
    expect(t.createdAt).toBeInstanceOf(Date);
  });

  it("memilih pasangan dengan likuiditas tertinggi dan membuang chain lain", () => {
    const base = fx("ds-tokens.json")[0];
    const mk = (over: object, liq: number) => ({ ...base, ...over, liquidity: { usd: liq } });
    const out = parseTokens([mk({ pairAddress: "low" }, 10), mk({ pairAddress: "high" }, 999), mk({ chainId: "ethereum", pairAddress: "eth" }, 99999)]);
    expect(out).toHaveLength(1);
    expect(out[0].poolAddress).toBe("high");
  });
});

describe("GoPlus parser (sampel respons asli)", () => {
  it("token sehat: skor rendah, tiga grup pemeriksaan, alamat lowercase", () => {
    const [s] = parseSecurity(fx("goplus-cashcat.json"));
    expect(s.address).toBe(CASH);
    expect(s.rugged).toBe(false);
    expect(s.riskScore).toBeLessThan(40);
    expect(s.groups.map((g) => g.title)).toEqual(["Contract", "Trading", "Holders & liquidity"]);
    expect(s.holders).toBe(114625);
    expect(s.passed).toBeLessThanOrEqual(s.total);
    expect(s.creator).toMatch(/^0x[0-9a-f]{40}$/);
  });

  it("honeypot: skor 100, rugged, pemeriksaan Honeypot gagal", () => {
    const j = fx("goplus-cashcat.json");
    j.result[CASH].is_honeypot = "1";
    const [s] = parseSecurity(j);
    expect(s.riskScore).toBe(100);
    expect(s.rugged).toBe(true);
    const hp = s.groups.flatMap((g) => g.checks).find((c) => c.label === "Honeypot");
    expect(hp).toMatchObject({ state: "fail", value: "Yes" });
  });

  it("pajak tinggi dan field kosong: pajak 25% gagal, field hilang = unknown (bukan aman)", () => {
    const j = fx("goplus-cashcat.json");
    j.result[CASH].sell_tax = "0.25";
    delete j.result[CASH].is_proxy;
    const [s] = parseSecurity(j);
    const checks = s.groups.flatMap((g) => g.checks);
    expect(checks.find((c) => c.label === "Sell tax")).toMatchObject({ state: "fail", value: "25.00%" });
    expect(checks.find((c) => c.label === "Upgradeable proxy")?.state).toBe("unknown");
  });

  it("hasil kosong atau alamat bukan EVM tidak menghasilkan apa pun", () => {
    expect(parseSecurity({ code: 1, result: {} })).toEqual([]);
    expect(parseSecurity({ code: 1, result: null })).toEqual([]);
    expect(() => parseSecurity({ nope: true })).toThrow();
  });
});

describe("http: retry dan antrean", () => {
  const res = (status: number, body: unknown = {}, headers: Record<string, string> = {}) =>
    new Response(JSON.stringify(body), { status, headers });

  it("retry 429 dengan Retry-After lalu berhasil", async () => {
    const f = vi
      .fn()
      .mockResolvedValueOnce(res(429, {}, { "retry-after": "2" }))
      .mockResolvedValueOnce(res(503))
      .mockResolvedValueOnce(res(200, { ok: 1 }));
    const sleeps: number[] = [];
    const http = createHttp({ fetch: f, minIntervalMs: 0, sleep: async (ms) => void sleeps.push(ms) });
    expect(await http.getJson("https://x/y")).toEqual({ ok: 1 });
    expect(f).toHaveBeenCalledTimes(3);
    expect(sleeps).toContain(2000);
  });

  it("404 tidak di-retry", async () => {
    const f = vi.fn().mockResolvedValue(res(404));
    const http = createHttp({ fetch: f, minIntervalMs: 0, sleep: async () => {} });
    await expect(http.getJson("https://x/y")).rejects.toBeInstanceOf(HttpError);
    expect(f).toHaveBeenCalledTimes(1);
  });

  it("menyerah setelah retry habis, dan satu kegagalan tidak memutus antrean", async () => {
    const f = vi.fn().mockImplementation(async (u: string) => (u.endsWith("bad") ? res(500) : res(200, { u })));
    const http = createHttp({ fetch: f, minIntervalMs: 0, retries: 1, sleep: async () => {} });
    const bad = http.getJson("https://x/bad");
    const good = http.getJson("https://x/good");
    await expect(bad).rejects.toBeInstanceOf(HttpError);
    expect(await good).toEqual({ u: "https://x/good" });
  });
});

describe("GoPlus lookup", () => {
  const noSleep = async () => {};
  const ADDR = (n: number) => "0x" + String(n).repeat(40);
  const entry = () => {
    const j = fx("goplus-cashcat.json");
    return j.result[Object.keys(j.result)[0]];
  };
  const okBody = (addr: string) => JSON.stringify({ code: 1, message: "OK", result: { [addr]: entry() } });
  const resp = (b: unknown) => new Response(typeof b === "string" ? b : JSON.stringify(b), { status: 200, headers: { "content-type": "application/json" } });

  it("meminta satu alamat per request", async () => {
    const urls: string[] = [];
    const gp = createGoPlus({ fetch: async (u) => (urls.push(u), resp(okBody(u.split("=")[1]))), minIntervalMs: 0, sleep: noSleep });
    const r = await gp.lookup([ADDR(1), ADDR(2), ADDR(3)]);
    expect(urls).toHaveLength(3);
    expect(urls.every((u) => !u.includes(","))).toBe(true);
    expect(r.attempted).toHaveLength(3);
    expect(r.infos).toHaveLength(3);
  });

  it("kode 4029 dicoba ulang sekali; bila tetap ditolak berhenti dan token sisa tidak dianggap tidak dikenal", async () => {
    let n = 0;
    const gp = createGoPlus({
      fetch: async (u) => {
        n++;
        const addr = u.split("=")[1];
        return resp(addr === ADDR(2) ? { code: 4029, message: "too many" } : okBody(addr));
      },
      minIntervalMs: 0,
      sleep: noSleep,
      throttleWaitMs: 0,
    });
    const r = await gp.lookup([ADDR(1), ADDR(2), ADDR(3)]);
    expect(r.throttled).toBe(true);
    expect(r.attempted).toEqual([ADDR(1)]); // ADDR(2) ditolak dua kali, ADDR(3) belum dicoba
    expect(n).toBe(3);
  });

  it("kode 4029 sekali lalu berhasil: lanjut", async () => {
    let hit = 0;
    const gp = createGoPlus({
      fetch: async (u) => (hit++ === 0 ? resp({ code: 4029, message: "too many" }) : resp(okBody(u.split("=")[1]))),
      minIntervalMs: 0,
      sleep: noSleep,
      throttleWaitMs: 0,
    });
    const r = await gp.lookup([ADDR(1)]);
    expect(r.throttled).toBe(false);
    expect(r.attempted).toEqual([ADDR(1)]);
  });
});
