import type { FastifyPluginAsync } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { and, desc, eq, sql } from "drizzle-orm";
import { z } from "zod";
import {
  memescopeCoins,
  platformStats,
  tokenSecurityChecks,
  tokenSecurityGroups,
  tokenSecurityMetrics,
  tokenSecurityReports,
  tokenTrades,
  tokenTrending,
  tokens,
} from "@corvid/db";
import {
  errorSchema,
  memescopeQuerySchema,
  memescopeResponseSchema,
  mintParamSchema,
  securityResponseSchema,
  statsSchema,
  tokenDetailSchema,
  tradesQuerySchema,
  tradesResponseSchema,
  trendingQuerySchema,
  trendingResponseSchema,
} from "@corvid/shared";
import type { Db } from "../app";
import { num, toDetail, toTrending } from "../mappers";
import { loadSparks, markWatched } from "../live";

const secs = (d: Date | null) => (d ? Math.floor(d.getTime() / 1000) : null);

type CheckState = "pass" | "warn" | "fail" | "unknown";
const flag = (v: unknown): "1" | "0" | null => (v === null || v === undefined || v === "" ? null : String(v) === "1" ? "1" : "0");
const flagCheck = (label: string, raw: unknown, bad: CheckState, hint: string, invert = false): { label: string; state: CheckState; value?: string; hint?: string } => {
  const f = flag(raw);
  if (f === null) return { label, state: "unknown" };
  const risky = invert ? f === "0" : f === "1";
  return { label, state: risky ? bad : "pass", value: f === "1" ? "Yes" : "No", ...(risky ? { hint } : {}) };
};
const taxCheck = (label: string, raw: unknown): { label: string; state: CheckState; value?: string; hint?: string } => {
  const t = raw === null || raw === undefined || raw === "" ? null : Number(raw);
  if (t === null || !Number.isFinite(t)) return { label, state: "unknown" };
  const state: CheckState = t >= 0.2 ? "fail" : t > 0.05 ? "warn" : "pass";
  return { label, state, value: `${(t * 100).toFixed(2)}%`, ...(state !== "pass" ? { hint: "Tax is taken from every swap" } : {}) };
};

/** On-demand GoPlus security fetch for tokens not yet indexed by the worker. */
async function fetchGoplusOnDemand(address: string): Promise<{ checked: boolean; groups: { title: string; checks: { label: string; state: CheckState; value?: string; hint?: string }[] }[]; passed: number; total: number } | null> {
  try {
    const url = `https://api.gopluslabs.io/api/v1/token_security/4663?contract_addresses=${address}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const json = (await res.json()) as { code?: number; result?: Record<string, Record<string, unknown>> };
    if (json.code !== 1 || !json.result) return null;
    const e = json.result[address] ?? json.result[address.toLowerCase()];
    if (!e) return null;
    const contract = { title: "Contract", checks: [
      flagCheck("Source code verified", e.is_open_source, "warn", "Contract source is not published", true),
      flagCheck("Upgradeable proxy", e.is_proxy, "warn", "Owner can change the contract logic"),
      flagCheck("Mintable", e.is_mintable, "warn", "Owner can create new tokens"),
      flagCheck("Hidden owner", e.hidden_owner, "fail", "Ownership is concealed"),
      flagCheck("Owner can reclaim ownership", e.can_take_back_ownership, "fail", "Renounced ownership can be taken back"),
      flagCheck("Owner can change balances", e.owner_change_balance, "fail", "Owner can edit holder balances"),
      flagCheck("Self-destruct", e.selfdestruct, "fail", "Contract can destroy itself"),
    ]};
    const trading = { title: "Trading", checks: [
      flagCheck("Honeypot", e.is_honeypot, "fail", "Buyers cannot sell"),
      flagCheck("Buying blocked", e.cannot_buy, "fail", "Buyers are prevented from buying"),
      flagCheck("Selling full balance blocked", e.cannot_sell_all, "fail", "Holders cannot sell their whole balance"),
      taxCheck("Buy tax", e.buy_tax),
      taxCheck("Sell tax", e.sell_tax),
      flagCheck("Transfers can be paused", e.transfer_pausable, "warn", "Owner can freeze trading"),
      flagCheck("Blacklist function", e.is_blacklisted, "warn", "Owner can block addresses"),
    ]};
    const groups = [contract, trading];
    const all = [...contract.checks, ...trading.checks];
    const passed = all.filter((c) => c.state === "pass").length;
    return { checked: true, groups, passed, total: all.length };
  } catch {
    return null;
  }
}

/** On-demand GeckoTerminal token detail fetch for tokens not yet indexed by the worker. */
async function fetchGtTokenDetail(address: string): Promise<{ name: string | null; symbol: string | null; price: number | null; marketCap: number | null; liquidity: number | null; volume: number | null; change24h: number | null; image: string | null; launchpadPct: number | null } | null> {
  try {
    const res = await fetch(`https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/${address}`, { headers: { Accept: "application/json;version=20230302" }, signal: AbortSignal.timeout(5000) });
    if (!res.ok) return null;
    const json = (await res.json()) as { data?: { attributes?: { name?: string; symbol?: string; price_usd?: string; fdv_usd?: string; volume_usd?: { h24?: string }; total_reserve_in_usd?: string; image_url?: string; launchpad_details?: { graduation_percentage?: number } } } };
    const a = json.data?.attributes;
    if (!a?.symbol) return null;
    return {
      name: a.name ?? null,
      symbol: a.symbol ?? null,
      price: a.price_usd ? Number(a.price_usd) : null,
      marketCap: a.fdv_usd ? Number(a.fdv_usd) : null,
      liquidity: a.total_reserve_in_usd ? Number(a.total_reserve_in_usd) : null,
      volume: a.volume_usd?.h24 ? Number(a.volume_usd.h24) : null,
      change24h: null,
      image: a.image_url ?? null,
      launchpadPct: a.launchpad_details?.graduation_percentage ?? null,
    };
  } catch {
    return null;
  }
}

export const marketRoutes =
  (db: Db): FastifyPluginAsync =>
  async (instance) => {
    const app = instance.withTypeProvider<ZodTypeProvider>();

    app.get("/stats", { schema: { tags: ["market"], response: { 200: statsSchema } } }, async () => {
      const [row] = await db.select().from(platformStats).limit(1);
      return {
        activeAgents: row?.activeAgents ?? 0,
        publishedAgents: row?.publishedAgents ?? 0,
        smartWallets: row?.smartWallets ?? 0,
        swapsExecuted: row?.swapsExecuted ?? 0,
      };
    });

    app.get(
      "/tokens/trending",
      { schema: { tags: ["market"], querystring: trendingQuerySchema, response: { 200: trendingResponseSchema } } },
      async (req) => {
        const { tab, limit } = req.query;
        const latest = db
          .select({ at: sql<Date>`max(${tokenTrending.snapshotAt})`.as("at") })
          .from(tokenTrending)
          .where(eq(tokenTrending.tab, tab))
          .as("latest");
        const rows = await db
          .select({ token: tokens })
          .from(tokenTrending)
          .innerJoin(tokens, eq(tokens.id, tokenTrending.tokenId))
          .innerJoin(latest, eq(latest.at, tokenTrending.snapshotAt))
          .where(eq(tokenTrending.tab, tab))
          .orderBy(tokenTrending.rank)
          .limit(limit);
        const sparks = await loadSparks(db, rows.map((r) => r.token.id));
        return {
          tokens: rows.map((r) => {
            const spark = sparks.get(r.token.id);
            const price = Number(r.token.priceUsd);
            // Last point = current price, ensuring line endpoint matches table price.
            return { ...toTrending(r.token), ...(spark ? { spark: price > 0 ? [...spark, price] : spark } : {}) };
          }),
        };
      },
    );

    app.get(
      "/tokens/trades",
      { schema: { tags: ["market"], querystring: tradesQuerySchema, response: { 200: tradesResponseSchema } } },
      async (req) => {
        const { mint, limit } = req.query;
        markWatched(db, [mint]);
        const rows = await db
          .select({ t: tokenTrades })
          .from(tokenTrades)
          .innerJoin(tokens, eq(tokens.id, tokenTrades.tokenId))
          .where(eq(tokens.mint, mint))
          .orderBy(desc(tokenTrades.tradedAt))
          .limit(limit);
        return {
          trades: rows.map(({ t }) => ({
            txHash: t.txHash,
            wallet: t.walletAddress,
            type: t.side,
            tokenAmount: Number(t.tokenAmount),
            ethAmount: num(t.ethAmount),
            priceUsd: num(t.priceUsd),
            marketCapUsd: num(t.marketCapUsd),
            timestamp: t.tradedAt.getTime(),
          })),
        };
      },
    );

    app.get(
      "/tokens/:mint/security",
      {
        schema: {
          tags: ["market"],
          params: mintParamSchema,
          response: { 200: securityResponseSchema, 404: errorSchema },
        },
      },
      async (req, reply) => {
        const [tok] = await db.select({ id: tokens.id }).from(tokens).where(eq(tokens.mint, req.params.mint)).limit(1);
        if (!tok) {
          const gt = await fetchGoplusOnDemand(req.params.mint);
          if (gt) return gt;
          return reply.code(404).send({ error: "token_not_found" });
        }
        const [report] = await db
          .select()
          .from(tokenSecurityReports)
          .where(eq(tokenSecurityReports.tokenId, tok.id))
          .orderBy(desc(tokenSecurityReports.checkedAt))
          .limit(1);
        if (!report) return { checked: false, groups: [], passed: 0, total: 0 };
        const groups = await db
          .select()
          .from(tokenSecurityGroups)
          .where(eq(tokenSecurityGroups.reportId, report.id))
          .orderBy(tokenSecurityGroups.sortOrder);
        const out = [];
        for (const g of groups) {
          const checks = await db
            .select()
            .from(tokenSecurityChecks)
            .where(eq(tokenSecurityChecks.groupId, g.id))
            .orderBy(tokenSecurityChecks.sortOrder);
          out.push({
            title: g.title,
            checks: checks.map((c) => ({
              label: c.label,
              state: c.state,
              ...(c.value ? { value: c.value } : {}),
              ...(c.hint ? { hint: c.hint } : {}),
            })),
          });
        }
        return { checked: report.checked, groups: out, passed: report.passed, total: report.total };
      },
    );

    app.get(
      "/tokens/:mint",
      {
        schema: {
          tags: ["market"],
          params: mintParamSchema,
          response: { 200: tokenDetailSchema, 404: errorSchema },
        },
      },
      async (req, reply) => {
        const [tok] = await db.select().from(tokens).where(eq(tokens.mint, req.params.mint)).limit(1);
        if (!tok) {
          // Canonical Paxos Global Dollar (USDG) stablecoin on Robinhood Chain
          const m = req.params.mint.toLowerCase();
          if (m === "0x5fc5360d0400a0fd4f2af552add042d716f1d168") {
            return {
              token: {
                name: "Global Dollar",
                symbol: "USDG",
                mint: m,
                image: "/brand/usdg.svg",
                description: "Global Dollar (USDG) is the official native US dollar stablecoin on Robinhood Chain, issued by Paxos.",
                links: ["https://paxos.com/usdg"],
                decimals: 6,
                price: 1.0,
                marketCap: null,
                liquidity: null,
                lpBurn: null,
                volume: null,
                buys: null,
                sells: null,
                txns: null,
                change1m: 0,
                change5m: 0,
                change1h: 0,
                change6h: 0,
                change24h: 0,
                risk: { score: 0, rugged: false, risks: [] },
                security: { freezeAuthority: null, mintAuthority: null },
                transferFeeBps: 0,
                totalSupply: null,
                topHoldersPercent: null,
                devHoldingsPercent: null,
                devWallet: null,
                sniperHoldingsPercent: null,
                bundlerHoldingsPercent: null,
                insidersPercent: null,
                insidersCount: null,
                bundlersCount: null,
                bundlersInitialPercent: null,
                snipersCount: null,
                jitoFees: null,
                jupiterVerified: true,
                holdersCount: null,
                creatorAddress: null,
                buyVolume: null,
                sellVolume: null,
                makers: null,
                buyers: null,
                sellers: null,
                poolId: null,
                market: "uniswap",
                createdAt: null,
              },
            };
          }
          const gt = await fetchGtTokenDetail(req.params.mint);
          if (gt) {
            return {
              token: {
                name: gt.name, symbol: gt.symbol, mint: req.params.mint, image: gt.image,
                description: gt.launchpadPct !== null ? `Launchpad token — ${gt.launchpadPct.toFixed(1)}% to graduation. Not yet indexed by Corvid.` : "Not yet indexed by Corvid.",
                links: [], decimals: 18, price: gt.price, marketCap: gt.marketCap, liquidity: gt.liquidity,
                lpBurn: null, volume: gt.volume, buys: null, sells: null, txns: null,
                change1m: null, change5m: null, change1h: null, change6h: null, change24h: gt.change24h,
                risk: { score: null, rugged: false, risks: [] },
                security: { freezeAuthority: null, mintAuthority: null },
                transferFeeBps: null, totalSupply: null, topHoldersPercent: null, devHoldingsPercent: null,
                devWallet: null, sniperHoldingsPercent: null, bundlerHoldingsPercent: null,
                insidersPercent: null, insidersCount: null, bundlersCount: null, bundlersInitialPercent: null,
                snipersCount: null, jitoFees: null, jupiterVerified: null, holdersCount: null,
                creatorAddress: null, buyVolume: null, sellVolume: null, makers: null, buyers: null, sellers: null,
                poolId: null, market: "uniswap", createdAt: null,
              },
            };
          }
          return reply.code(404).send({ error: "token_not_found" });
        }
        markWatched(db, [tok.mint]);
        const [m] = await db.select().from(tokenSecurityMetrics).where(eq(tokenSecurityMetrics.tokenId, tok.id)).limit(1);
        return toDetail(tok, m ?? null);
      },
    );

    const memescopeHandler = async (req: { query: { stage: "new" | "stretch" | "migrated" } }) => {
        const rows = await db
          .select()
          .from(memescopeCoins)
          .where(and(eq(memescopeCoins.stage, req.query.stage)))
          // Final Stretch: closest to graduation first; others: newest first (NULLs last).
          .orderBy(
            req.query.stage === "stretch"
              ? sql`${memescopeCoins.progressPct} desc`
              : sql`${memescopeCoins.createdAtChain} desc nulls last`,
          )
          .limit(100);
        return {
          coins: rows.map((c) => ({
            mint: c.mint,
            name: c.name,
            symbol: c.symbol,
            image: c.imageUrl,
            progress: Number(c.progressPct),
            marketCapUsd: Number(c.marketCapUsd),
            athMarketCapUsd: num(c.athMarketCapUsd),
            createdAt: secs(c.createdAtChain),
            lastTradeAt: secs(c.lastTradeAt),
            replies: c.replies,
            complete: c.complete,
            live: c.live,
            creator: c.creator ?? "",
            dex: c.dex,
          })),
          at: Math.floor(Date.now() / 1000),
          stale: false,
        };
    };
    const memescopeSchema = { tags: ["market"], querystring: memescopeQuerySchema, response: { 200: memescopeResponseSchema } };
    app.get("/memescope", { schema: memescopeSchema }, memescopeHandler);
    // Legacy route kept temporarily for compatibility with older frontend deployments; remove after full migration.
    app.get("/solana/memescope", { schema: { ...memescopeSchema, hide: true } }, memescopeHandler);

    void z; // z used by imported schema
  };
