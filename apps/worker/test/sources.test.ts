import { describe, expect, it, vi } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { createHttp, HttpError } from "../src/http";
import { parseOhlcv, parsePools, parseTrades, WSOL } from "../src/sources/geckoterminal";
import { parseTokens } from "../src/sources/dexscreener";

const fx = (n: string) => JSON.parse(fs.readFileSync(path.join(__dirname, "fixtures", n), "utf8"));
const AMD = "DDmGnuvroxVrb7CSyjYcezFU8gnAfhKasg4ZZezmpump";

describe("GeckoTerminal parser (sampel respons asli)", () => {
  it("parsePools: base token, quote, dex, angka sebagai string", () => {
    const pools = parsePools(fx("gt-trending.json"));
    expect(pools).toHaveLength(3);
    expect(pools[0]).toMatchObject({ baseMint: AMD, dex: "pumpswap", poolAddress: "7RD5YALHcMLUFKJ8FRePGd6ei11F15uXZF1rc7mPKeCv" });
    expect(pools[0].quoteMint).not.toBe(WSOL);
    expect(typeof pools[0].priceUsd).toBe("string");
    expect(pools[0].change24h).toBe("1330.669");
  });

  it("parsePools membuang token dasar non-Solana", () => {
    const j = fx("gt-trending.json");
    j.data[0].relationships.base_token.data.id = "solana_0x8b65363a01510490fba03cea97b14c73b7ee8f75";
    expect(parsePools(j)).toHaveLength(2);
  });

  it("parseOhlcv: urut naik, waktu detik menjadi Date", () => {
    const c = parseOhlcv(fx("gt-ohlcv.json"));
    expect(c).toHaveLength(3);
    expect(c[0].bucketStart.getTime()).toBeLessThan(c[2].bucketStart.getTime());
    expect(c[2].bucketStart.getTime()).toBe(1793822400 * 1000);
  });

  it("parseTrades: sisi base benar, solAmount hanya bila quote wSOL", () => {
    const trades = parseTrades(fx("gt-trades.json"), AMD);
    expect(trades.length).toBeGreaterThan(0);
    for (const t of trades) {
      expect(["buy", "sell"]).toContain(t.side);
      expect(t.solAmount).toBeNull(); // pool AMD berkuotasi token lain, bukan SOL
    }
    const syn = {
      data: [
        {
          attributes: {
            block_timestamp: "2026-11-04T20:00:00Z",
            tx_hash: "h1",
            tx_from_address: "w1",
            kind: "buy",
            from_token_address: WSOL,
            to_token_address: AMD,
            from_token_amount: "2.5",
            to_token_amount: "1000",
            price_from_in_usd: "150",
            price_to_in_usd: "0.375",
          },
        },
      ],
    };
    const [t] = parseTrades(syn, AMD);
    expect(t).toMatchObject({ side: "buy", tokenAmount: "1000", solAmount: "2.5", priceUsd: "0.375" });
    expect(parseTrades(syn, "OtherMint")).toHaveLength(0);
  });

  it("menolak bentuk respons tak valid (zod)", () => {
    expect(() => parsePools({ data: [{ id: "x" }] })).toThrow();
  });
});

describe("DexScreener parser", () => {
  it("parseTokens: gambar, sosial, buys/sells", () => {
    const [t] = parseTokens(fx("ds-tokens.json"));
    expect(t).toMatchObject({ mint: AMD, symbol: "AMD", dex: "pumpswap" });
    expect(t.image).toMatch(/^https:\/\/cdn\.dexscreener\.com/);
    expect(t.twitter).toMatch(/x\.com/);
    expect(t.buys24h).toBe(62060);
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
