import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import {
  fetchDexScreenerDetail,
  fetchGoplusOnDemand,
  fetchGtTokenDetail,
  resolveOnDemandToken,
} from "../src/ondemand";

const TEST_ADDR = "0x7c297ea5888885b4f97c7d06b2c86aa6cf23ae24";

describe("on-demand token security and metadata resolution", () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it("parses GoPlus security response accurately", async () => {
    globalThis.fetch = vi.fn().mockImplementation(async (url: string) => {
      if (url.includes("gopluslabs.io")) {
        return new Response(
          JSON.stringify({
            code: 1,
            message: "OK",
            result: {
              [TEST_ADDR]: {
                token_name: "Mocked Alpha",
                token_symbol: "ALPHA",
                holder_count: "1500",
                creator_percent: "0.02",
                buy_tax: "0.00",
                sell_tax: "0.03",
                is_honeypot: "0",
                cannot_buy: "0",
                cannot_sell_all: "0",
                is_open_source: "1",
                is_proxy: "0",
                is_mintable: "0",
                hidden_owner: "0",
                can_take_back_ownership: "0",
                owner_change_balance: "0",
                selfdestruct: "0",
                transfer_pausable: "0",
                is_blacklisted: "0",
                slippage_modifiable: "0",
                holders: [
                  { percent: "0.10", is_locked: 0 },
                  { percent: "0.05", is_locked: 0 },
                ],
                lp_holders: [
                  { percent: "0.95", is_locked: 1 },
                ],
              },
            },
          }),
          { status: 200 },
        );
      }
      return new Response("Not found", { status: 404 });
    }) as unknown as typeof fetch;

    const res = await fetchGoplusOnDemand(TEST_ADDR);
    expect(res).not.toBeNull();
    expect(res?.tokenName).toBe("Mocked Alpha");
    expect(res?.tokenSymbol).toBe("ALPHA");
    expect(res?.holdersCount).toBe(1500);
    expect(res?.rugged).toBe(false);
    expect(res?.score).toBeLessThan(20);
    expect(res?.groups).toHaveLength(3);
    expect(res?.groups.map((g) => g.title)).toEqual(["Contract", "Trading", "Holders & liquidity"]);
    expect(res?.passed).toBeGreaterThan(10);
  });

  it("detects honeypot and assigns risk score 100", async () => {
    globalThis.fetch = vi.fn().mockImplementation(async (url: string) => {
      if (url.includes("gopluslabs.io")) {
        return new Response(
          JSON.stringify({
            code: 1,
            result: {
              [TEST_ADDR]: {
                token_name: "Scam Coin",
                token_symbol: "SCAM",
                is_honeypot: "1",
                cannot_buy: "0",
              },
            },
          }),
          { status: 200 },
        );
      }
      return new Response("Not found", { status: 404 });
    }) as unknown as typeof fetch;

    const res = await fetchGoplusOnDemand(TEST_ADDR);
    expect(res).not.toBeNull();
    expect(res?.score).toBe(100);
    expect(res?.rugged).toBe(true);
    const hp = res?.groups.flatMap((g) => g.checks).find((c) => c.label === "Honeypot");
    expect(hp?.state).toBe("fail");
    expect(hp?.value).toBe("Yes");
  });

  it("resolves on-demand token combining GoPlus and GeckoTerminal data", async () => {
    globalThis.fetch = vi.fn().mockImplementation(async (url: string) => {
      if (url.includes("gopluslabs.io")) {
        return new Response(
          JSON.stringify({
            code: 1,
            result: {
              [TEST_ADDR]: {
                token_name: "Corvid Token",
                token_symbol: "CRVD",
                holder_count: "250",
                is_honeypot: "0",
                is_open_source: "1",
                is_mintable: "0",
              },
            },
          }),
          { status: 200 },
        );
      }
      if (url.includes("geckoterminal.com")) {
        return new Response(
          JSON.stringify({
            data: {
              attributes: {
                name: "Corvid Token",
                symbol: "CRVD",
                price_usd: "1.25",
                fdv_usd: "1250000",
                total_reserve_in_usd: "450000",
                volume_usd: { h24: "85000" },
                image_url: "https://example.com/logo.png",
              },
            },
          }),
          { status: 200 },
        );
      }
      return new Response("Not found", { status: 404 });
    }) as unknown as typeof fetch;

    const tok = await resolveOnDemandToken(TEST_ADDR);
    expect(tok).not.toBeNull();
    expect(tok?.mint).toBe(TEST_ADDR.toLowerCase());
    expect(tok?.symbol).toBe("CRVD");
    expect(tok?.name).toBe("Corvid Token");
    expect(tok?.price).toBe(1.25);
    expect(tok?.marketCap).toBe(1250000);
    expect(tok?.liquidity).toBe(450000);
    expect(tok?.volume).toBe(85000);
    expect(tok?.holdersCount).toBe(250);
    expect(tok?.security).not.toBeNull();
    expect(tok?.security?.checked).toBe(true);
    expect(tok?.riskScore).toBeLessThan(40);
  });

  it("falls back to DexScreener if GeckoTerminal returns null", async () => {
    globalThis.fetch = vi.fn().mockImplementation(async (url: string) => {
      if (url.includes("gopluslabs.io")) {
        return new Response(JSON.stringify({ code: 1, result: {} }), { status: 200 });
      }
      if (url.includes("geckoterminal.com")) {
        return new Response(JSON.stringify({}), { status: 404 });
      }
      if (url.includes("dexscreener.com")) {
        return new Response(
          JSON.stringify({
            pairs: [
              {
                baseToken: { address: TEST_ADDR, name: "Dex Coin", symbol: "DEXC" },
                priceUsd: "0.05",
                fdv: 50000,
                liquidity: { usd: 12000 },
                volume: { h24: 3400 },
              },
            ],
          }),
          { status: 200 },
        );
      }
      return new Response("Not found", { status: 404 });
    }) as unknown as typeof fetch;

    const tok = await resolveOnDemandToken(TEST_ADDR);
    expect(tok).not.toBeNull();
    expect(tok?.symbol).toBe("DEXC");
    expect(tok?.name).toBe("Dex Coin");
    expect(tok?.price).toBe(0.05);
    expect(tok?.liquidity).toBe(12000);
  });

  it("returns null when no data is found across any source", async () => {
    globalThis.fetch = vi.fn().mockImplementation(async () => {
      return new Response(JSON.stringify({}), { status: 404 });
    }) as unknown as typeof fetch;

    const tok = await resolveOnDemandToken(TEST_ADDR);
    expect(tok).toBeNull();
  });
});
