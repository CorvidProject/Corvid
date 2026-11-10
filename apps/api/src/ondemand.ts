import { CHAINS } from "@corvid/shared/chains";

export type CheckState = "pass" | "warn" | "fail" | "unknown";

export interface SecurityCheckItem {
  label: string;
  state: CheckState;
  value?: string;
  hint?: string;
}

export interface SecurityGroupItem {
  title: string;
  checks: SecurityCheckItem[];
}

export interface ParsedOnDemandSecurity {
  checked: boolean;
  score: number;
  rugged: boolean;
  passed: number;
  total: number;
  groups: SecurityGroupItem[];
  tokenName: string | null;
  tokenSymbol: string | null;
  holdersCount: number | null;
  topHoldersPercent: number | null;
  devHoldingsPercent: number | null;
  lockedLpPercent: number | null;
  buyTax: number | null;
  sellTax: number | null;
  creatorAddress: string | null;
}

export interface OnDemandMarketData {
  name: string | null;
  symbol: string | null;
  price: number | null;
  marketCap: number | null;
  liquidity: number | null;
  volume: number | null;
  change24h: number | null;
  image: string | null;
  launchpadPct: number | null;
}

export interface ResolvedTokenData {
  mint: string;
  name: string;
  symbol: string;
  price: number | null;
  marketCap: number | null;
  liquidity: number | null;
  volume: number | null;
  change24h: number | null;
  image: string | null;
  launchpadPct: number | null;
  holdersCount: number | null;
  topHoldersPercent: number | null;
  devHoldingsPercent: number | null;
  lockedLpPercent: number | null;
  buyTax: number | null;
  sellTax: number | null;
  riskScore: number | null;
  rugged: boolean;
  security: {
    checked: boolean;
    passed: number;
    total: number;
    groups: SecurityGroupItem[];
  } | null;
}

const flag = (v: unknown): "1" | "0" | null =>
  v === null || v === undefined || v === "" ? null : String(v) === "1" ? "1" : "0";

const num = (v: unknown): number | null => {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

const flagCheck = (
  label: string,
  raw: unknown,
  bad: CheckState,
  weight: number,
  hint: string,
  invert = false,
): { check: SecurityCheckItem; penalty: number } => {
  const f = flag(raw);
  if (f === null) return { check: { label, state: "unknown" }, penalty: 0 };
  const risky = invert ? f === "0" : f === "1";
  const state: CheckState = risky ? bad : "pass";
  return {
    check: { label, state, value: f === "1" ? "Yes" : "No", ...(risky ? { hint } : {}) },
    penalty: risky ? weight : 0,
  };
};

const taxCheck = (
  label: string,
  raw: unknown,
): { check: SecurityCheckItem; penalty: number; rate: number | null } => {
  const t = num(raw);
  if (t === null) return { check: { label, state: "unknown" }, penalty: 0, rate: null };
  const state: CheckState = t >= 0.2 ? "fail" : t > 0.05 ? "warn" : "pass";
  const penalty = state === "fail" ? 30 : state === "warn" ? 10 : 0;
  return {
    check: {
      label,
      state,
      value: `${(t * 100).toFixed(2)}%`,
      ...(state !== "pass" ? { hint: "Tax is taken from every swap" } : {}),
    },
    penalty,
    rate: t,
  };
};

/** Fetch live token security from GoPlus for Robinhood Chain. */
export async function fetchGoplusOnDemand(address: string): Promise<ParsedOnDemandSecurity | null> {
  try {
    const url = `https://api.gopluslabs.io/api/v1/token_security/${CHAINS.mainnet.id}?contract_addresses=${address.toLowerCase()}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const json = (await res.json()) as {
      code?: number;
      result?: Record<string, Record<string, unknown>>;
    };
    if (json.code !== 1 || !json.result) return null;
    const e = json.result[address] ?? json.result[address.toLowerCase()];
    if (!e) return null;

    let score = 0;

    const c1 = flagCheck("Source code verified", e.is_open_source, "warn", 15, "Contract source is not published", true);
    const c2 = flagCheck("Upgradeable proxy", e.is_proxy, "warn", 10, "Owner can change the contract logic");
    const c3 = flagCheck("Mintable", e.is_mintable, "warn", 15, "Owner can create new tokens");
    const c4 = flagCheck("Hidden owner", e.hidden_owner, "fail", 25, "Ownership is concealed");
    const c5 = flagCheck("Owner can reclaim ownership", e.can_take_back_ownership, "fail", 25, "Renounced ownership can be taken back");
    const c6 = flagCheck("Owner can change balances", e.owner_change_balance, "fail", 25, "Owner can edit holder balances");
    const c7 = flagCheck("Self-destruct", e.selfdestruct, "fail", 20, "Contract can destroy itself");
    const c8 = flagCheck("External calls", e.external_call, "warn", 5, "Contract calls other contracts during transfers");
    const contractChecks = [c1, c2, c3, c4, c5, c6, c7, c8];
    for (const c of contractChecks) score += c.penalty;

    const t1 = flagCheck("Honeypot", e.is_honeypot, "fail", 100, "Buyers cannot sell");
    const t2 = flagCheck("Buying blocked", e.cannot_buy, "fail", 40, "Buyers are prevented from buying");
    const t3 = flagCheck("Selling full balance blocked", e.cannot_sell_all, "fail", 40, "Holders cannot sell their whole balance");
    const t4 = taxCheck("Buy tax", e.buy_tax);
    const t5 = taxCheck("Sell tax", e.sell_tax);
    const t6 = flagCheck("Transfers can be paused", e.transfer_pausable, "warn", 15, "Owner can freeze trading");
    const t7 = flagCheck("Blacklist function", e.is_blacklisted, "warn", 10, "Owner can block addresses");
    const t8 = flagCheck("Slippage modifiable", e.slippage_modifiable, "warn", 10, "Owner can change taxes after launch");
    const tradingChecks = [t1, t2, t3, t4, t5, t6, t7, t8];
    for (const t of tradingChecks) score += t.penalty;

    // Holders & liquidity distribution
    const rawHolders = Array.isArray(e.holders) ? (e.holders as Array<{ percent?: unknown; is_locked?: unknown }>) : [];
    const top10Sum = rawHolders.length
      ? rawHolders.slice(0, 10).reduce((acc, h) => acc + (num(h.percent) ?? 0), 0)
      : null;
    const top10Pct = top10Sum !== null ? top10Sum * 100 : null;

    const rawCreatorPct = num(e.creator_percent);
    const devPct = rawCreatorPct !== null ? rawCreatorPct * 100 : null;

    const rawLp = Array.isArray(e.lp_holders) ? (e.lp_holders as Array<{ percent?: unknown; is_locked?: unknown }>) : [];
    const lockedLpSum = rawLp.length
      ? rawLp.reduce((acc, h) => acc + (flag(h.is_locked) === "1" ? num(h.percent) ?? 0 : 0), 0)
      : null;
    const lockedLpPct = lockedLpSum !== null ? lockedLpSum * 100 : null;

    const distChecks: SecurityCheckItem[] = [];
    if (top10Sum === null) {
      distChecks.push({ label: "Top 10 holders", state: "unknown" });
    } else {
      const st: CheckState = top10Sum >= 0.8 ? "fail" : top10Sum >= 0.5 ? "warn" : "pass";
      score += st === "fail" ? 20 : st === "warn" ? 10 : 0;
      distChecks.push({
        label: "Top 10 holders",
        state: st,
        value: `${(top10Sum * 100).toFixed(2)}%`,
        ...(st !== "pass" ? { hint: "Supply is concentrated" } : {}),
      });
    }

    if (rawCreatorPct === null) {
      distChecks.push({ label: "Creator holdings", state: "unknown" });
    } else {
      const st: CheckState = rawCreatorPct >= 0.1 ? "warn" : "pass";
      score += st === "warn" ? 10 : 0;
      distChecks.push({
        label: "Creator holdings",
        state: st,
        value: `${(rawCreatorPct * 100).toFixed(2)}%`,
        ...(st === "warn" ? { hint: "Creator holds a large share" } : {}),
      });
    }

    if (lockedLpSum === null) {
      distChecks.push({ label: "Liquidity locked or burned", state: "unknown" });
    } else {
      const st: CheckState = lockedLpSum >= 0.5 ? "pass" : "warn";
      score += lockedLpSum < 0.2 ? 10 : lockedLpSum < 0.5 ? 5 : 0;
      distChecks.push({
        label: "Liquidity locked or burned",
        state: st,
        value: `${(lockedLpSum * 100).toFixed(2)}%`,
        ...(st === "pass" ? { hint: "Liquidity can be withdrawn" } : {}),
      });
    }

    const groups: SecurityGroupItem[] = [
      { title: "Contract", checks: contractChecks.map((c) => c.check) },
      { title: "Trading", checks: tradingChecks.map((t) => t.check) },
      { title: "Holders & liquidity", checks: distChecks },
    ];
    const all = groups.flatMap((g) => g.checks);
    const passed = all.filter((c) => c.state === "pass").length;
    const isHoneypot = flag(e.is_honeypot) === "1";

    return {
      checked: true,
      score: isHoneypot ? 100 : Math.min(100, score),
      rugged: isHoneypot,
      passed,
      total: all.length,
      groups,
      tokenName: e.token_name ? String(e.token_name).trim() : null,
      tokenSymbol: e.token_symbol ? String(e.token_symbol).trim() : null,
      holdersCount: num(e.holder_count) !== null ? Math.round(num(e.holder_count)!) : null,
      topHoldersPercent: top10Pct,
      devHoldingsPercent: devPct,
      lockedLpPercent: lockedLpPct,
      buyTax: t4.rate,
      sellTax: t5.rate,
      creatorAddress: typeof e.creator_address === "string" ? e.creator_address.toLowerCase() : null,
    };
  } catch {
    return null;
  }
}

/** Fetch token details from GeckoTerminal for tokens on Robinhood Chain. */
export async function fetchGtTokenDetail(address: string): Promise<OnDemandMarketData | null> {
  try {
    const res = await fetch(`https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/${address.toLowerCase()}`, {
      headers: { Accept: "application/json;version=20230302" },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as {
      data?: {
        attributes?: {
          name?: string;
          symbol?: string;
          price_usd?: string;
          fdv_usd?: string;
          volume_usd?: { h24?: string };
          total_reserve_in_usd?: string;
          image_url?: string;
          launchpad_details?: { graduation_percentage?: number; completed?: boolean };
        };
      };
    };
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

/** Fallback market data fetch from DexScreener if GeckoTerminal does not have active pool. */
export async function fetchDexScreenerDetail(address: string): Promise<OnDemandMarketData | null> {
  try {
    const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${address.toLowerCase()}`, {
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as {
      pairs?: Array<{
        chainId?: string;
        baseToken?: { address?: string; name?: string; symbol?: string };
        priceUsd?: string;
        fdv?: number;
        marketCap?: number;
        liquidity?: { usd?: number };
        volume?: { h24?: number };
        priceChange?: { h24?: number };
        info?: { imageUrl?: string };
      }>;
    };
    const pair = json.pairs?.[0];
    if (!pair || !pair.baseToken?.symbol) return null;
    return {
      name: pair.baseToken.name ?? null,
      symbol: pair.baseToken.symbol ?? null,
      price: pair.priceUsd ? Number(pair.priceUsd) : null,
      marketCap: pair.fdv ?? pair.marketCap ?? null,
      liquidity: pair.liquidity?.usd ?? null,
      volume: pair.volume?.h24 ?? null,
      change24h: pair.priceChange?.h24 ?? null,
      image: pair.info?.imageUrl ?? null,
      launchpadPct: null,
    };
  } catch {
    return null;
  }
}

/**
 * Resolve unindexed token by querying GoPlus security and market aggregators.
 * Returns null if the address has neither security records nor market pool data.
 */
export async function resolveOnDemandToken(address: string): Promise<ResolvedTokenData | null> {
  const norm = address.toLowerCase();
  const [sec, gt] = await Promise.all([
    fetchGoplusOnDemand(norm),
    fetchGtTokenDetail(norm),
  ]);
  const market = gt ?? (await fetchDexScreenerDetail(norm));

  if (!sec && !market) return null;

  const symbol = (market?.symbol || sec?.tokenSymbol || "UNKNOWN").trim();
  const name = (market?.name || sec?.tokenName || symbol).trim();

  return {
    mint: norm,
    name,
    symbol,
    price: market?.price ?? null,
    marketCap: market?.marketCap ?? null,
    liquidity: market?.liquidity ?? null,
    volume: market?.volume ?? null,
    change24h: market?.change24h ?? null,
    image: market?.image ?? null,
    launchpadPct: market?.launchpadPct ?? null,
    holdersCount: sec?.holdersCount ?? null,
    topHoldersPercent: sec?.topHoldersPercent ?? null,
    devHoldingsPercent: sec?.devHoldingsPercent ?? null,
    lockedLpPercent: sec?.lockedLpPercent ?? null,
    buyTax: sec?.buyTax ?? null,
    sellTax: sec?.sellTax ?? null,
    riskScore: sec ? sec.score : null,
    rugged: sec ? sec.rugged : false,
    security: sec
      ? {
          checked: sec.checked,
          passed: sec.passed,
          total: sec.total,
          groups: sec.groups,
        }
      : null,
  };
}
