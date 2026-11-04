import type { TrendingToken, TokenDetail } from "@corvid/shared";
import type { tokens, tokenSecurityMetrics } from "@corvid/db";

type TokenRow = typeof tokens.$inferSelect;
type MetricsRow = typeof tokenSecurityMetrics.$inferSelect;

export const num = (v: string | number | null | undefined): number | null =>
  v === null || v === undefined ? null : Number(v);

const secs = (d: Date | null) => (d ? Math.floor(d.getTime() / 1000) : null);

/** Daftar risiko diturunkan dari kolom yang tersimpan (bukan disimpan terpisah). */
export function deriveRisks(t: TokenRow): TrendingToken["risks"] {
  const risks: TrendingToken["risks"] = [];
  const top10 = num(t.top10Pct);
  const dev = num(t.devPct);
  if (top10 !== null && top10 >= 50) risks.push({ name: "Top holder concentration", level: top10 >= 80 ? "danger" : "warning", score: Math.round(top10 / 6) });
  if (dev !== null && dev >= 10) risks.push({ name: "Dev holds a large share", level: "warning", score: Math.round(dev) });
  if (t.mintAuthority) risks.push({ name: "Mint authority not revoked", level: "danger", score: 20 });
  if (t.freezeAuthority) risks.push({ name: "Freeze authority not revoked", level: "danger", score: 20 });
  if (t.rugged) risks.push({ name: "Marked as rugged", level: "danger", score: 100 });
  return risks;
}

export function toTrending(t: TokenRow): TrendingToken {
  const feePct = t.transferFeeBps === null ? null : t.transferFeeBps / 100;
  return {
    name: t.name,
    symbol: t.symbol,
    mint: t.mint,
    image: t.imageUrl,
    price: num(t.priceUsd),
    marketCap: num(t.marketCapUsd),
    liquidity: num(t.liquidityUsd),
    volume: num(t.volumeUsd),
    change5m: num(t.change5mPct),
    change1h: num(t.change1hPct),
    change6h: num(t.change6hPct),
    change24h: num(t.change24hPct),
    buys: t.buys,
    sells: t.sells,
    txns: t.txns,
    makers: t.makers,
    twitter: t.twitterUrl,
    telegram: t.telegramUrl,
    website: t.websiteUrl,
    riskScore: t.riskScore,
    top10: num(t.top10Pct),
    devPct: num(t.devPct),
    buyTax: feePct,
    sellTax: feePct,
    transferFeeBps: t.transferFeeBps,
    dex: t.dex,
    rugged: t.rugged,
    riskChecked: t.riskScore !== null,
    risks: deriveRisks(t),
    lpBurn: num(t.lpBurnPct),
    createdAt: secs(t.createdAtChain),
    holders: t.holders,
    chain: "solana",
    volume1h: num(t.volume1hUsd),
  };
}

export function toDetail(t: TokenRow, m: MetricsRow | null): TokenDetail {
  return {
    token: {
      name: t.name,
      symbol: t.symbol,
      mint: t.mint,
      image: t.imageUrl,
      description: t.description ?? "",
      links: [t.websiteUrl, t.twitterUrl, t.telegramUrl].filter((x): x is string => !!x),
      decimals: t.decimals,
      price: num(t.priceUsd),
      marketCap: num(t.marketCapUsd),
      liquidity: num(t.liquidityUsd),
      lpBurn: num(t.lpBurnPct),
      volume: num(t.volumeUsd),
      buys: t.buys,
      sells: t.sells,
      txns: t.txns,
      change1m: num(t.change1mPct),
      change5m: num(t.change5mPct),
      change1h: num(t.change1hPct),
      change6h: num(t.change6hPct),
      change24h: num(t.change24hPct),
      risk: { score: t.riskScore, rugged: t.rugged, risks: deriveRisks(t) },
      security: { freezeAuthority: t.freezeAuthority, mintAuthority: t.mintAuthority },
      transferFeeBps: t.transferFeeBps,
      totalSupply: num(t.totalSupply),
      topHoldersPercent: num(t.top10Pct),
      devHoldingsPercent: num(t.devPct),
      devWallet: m?.devWallet ?? null,
      sniperHoldingsPercent: num(m?.sniperHoldingsPct),
      bundlerHoldingsPercent: num(m?.bundlerHoldingsPct),
      insidersPercent: num(m?.insidersPct),
      insidersCount: m?.insidersCount ?? null,
      bundlersCount: m?.bundlersCount ?? null,
      bundlersInitialPercent: num(m?.bundlersInitialPct),
      snipersCount: m?.snipersCount ?? null,
      jitoFees: num(m?.jitoFees),
      jupiterVerified: m?.jupiterVerified ?? null,
      holdersCount: t.holders,
      creatorAddress: m?.creatorAddress ?? null,
      buyVolume: num(m?.buyVolumeUsd),
      sellVolume: num(m?.sellVolumeUsd),
      makers: t.makers,
      buyers: m?.buyers ?? null,
      sellers: m?.sellers ?? null,
      poolId: t.poolId,
      market: t.dex,
      createdAt: secs(t.createdAtChain),
    },
  };
}
