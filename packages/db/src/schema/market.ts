import {
  bigint, boolean, check, index, integer, pgEnum, pgTable, primaryKey,
  smallint, text, uniqueIndex,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { money, ts, chainAddr } from "./common";

export const memescopeStage = pgEnum("memescope_stage", ["new", "stretch", "migrated"]);
export const tradeSide = pgEnum("trade_side", ["buy", "sell"]);
export const checkState = pgEnum("check_state", ["pass", "warn", "fail", "unknown"]);
export const trendingTab = pgEnum("trending_tab", ["trending", "new"]);

export const tokens = pgTable(
  "tokens",
  {
    id: bigint("id", { mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
    mint: text("mint").notNull(),
    name: text("name"),
    symbol: text("symbol"),
    imageUrl: text("image_url"),
    description: text("description"),
    decimals: smallint("decimals").notNull().default(9),
    dex: text("dex"),
    poolId: text("pool_id"),
    priceUsd: money("price_usd"),
    marketCapUsd: money("market_cap_usd", 20, 2),
    liquidityUsd: money("liquidity_usd", 20, 2),
    lpBurnPct: money("lp_burn_pct", 5, 2),
    volumeUsd: money("volume_usd", 20, 2),
    volume1hUsd: money("volume_1h_usd", 20, 2),
    buys: integer("buys"),
    sells: integer("sells"),
    txns: integer("txns"),
    makers: integer("makers"),
    change1mPct: money("change_1m_pct", 12, 2),
    change5mPct: money("change_5m_pct", 12, 2),
    change1hPct: money("change_1h_pct", 12, 2),
    change6hPct: money("change_6h_pct", 12, 2),
    change24hPct: money("change_24h_pct", 12, 2),
    riskScore: smallint("risk_score"),
    rugged: boolean("rugged").notNull().default(false),
    top10Pct: money("top10_pct", 5, 2),
    devPct: money("dev_pct", 5, 2),
    /** Token-2022 transfer fee; null = tidak ada. Pengganti buy/sell tax EVM. */
    transferFeeBps: integer("transfer_fee_bps"),
    totalSupply: money("total_supply", 38, 6),
    holders: integer("holders"),
    twitterUrl: text("twitter_url"),
    telegramUrl: text("telegram_url"),
    websiteUrl: text("website_url"),
    /** null = authority sudah dicabut. */
    freezeAuthority: text("freeze_authority"),
    mintAuthority: text("mint_authority"),
    createdAtChain: ts("created_at_chain"),
    lastSeenAt: ts("last_seen_at").notNull().defaultNow(),
    updatedAt: ts("updated_at").notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("tokens_mint_uq").on(t.mint),
    index("tokens_mcap_idx").on(t.marketCapUsd.desc()),
    index("tokens_volume_idx").on(t.volumeUsd.desc()),
    index("tokens_created_idx").on(t.createdAtChain.desc()),
    index("tokens_last_seen_idx").on(t.lastSeenAt),
    check("tokens_mint_chk", chainAddr("mint")),
  ],
);

export const tokenSecurityMetrics = pgTable("token_security_metrics", {
  tokenId: bigint("token_id", { mode: "number" })
    .primaryKey()
    .references(() => tokens.id, { onDelete: "cascade" }),
  devWallet: text("dev_wallet"),
  creatorAddress: text("creator_address"),
  sniperHoldingsPct: money("sniper_holdings_pct", 7, 2),
  bundlerHoldingsPct: money("bundler_holdings_pct", 7, 2),
  insidersPct: money("insiders_pct", 7, 2),
  insidersCount: integer("insiders_count"),
  bundlersCount: integer("bundlers_count"),
  bundlersInitialPct: money("bundlers_initial_pct", 7, 2),
  snipersCount: integer("snipers_count"),
  jitoFees: money("jito_fees", 20, 9),
  jupiterVerified: boolean("jupiter_verified"),
  buyVolumeUsd: money("buy_volume_usd", 20, 2),
  sellVolumeUsd: money("sell_volume_usd", 20, 2),
  buyers: integer("buyers"),
  sellers: integer("sellers"),
  updatedAt: ts("updated_at").notNull().defaultNow(),
});

export const tokenSecurityReports = pgTable(
  "token_security_reports",
  {
    id: bigint("id", { mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
    tokenId: bigint("token_id", { mode: "number" })
      .notNull()
      .references(() => tokens.id, { onDelete: "cascade" }),
    checked: boolean("checked").notNull().default(true),
    passed: integer("passed").notNull(),
    total: integer("total").notNull(),
    checkedAt: ts("checked_at").notNull().defaultNow(),
  },
  (t) => [index("sec_report_token_idx").on(t.tokenId, t.checkedAt.desc())],
);

export const tokenSecurityGroups = pgTable("token_security_groups", {
  id: bigint("id", { mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  reportId: bigint("report_id", { mode: "number" })
    .notNull()
    .references(() => tokenSecurityReports.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  sortOrder: smallint("sort_order").notNull().default(0),
});

export const tokenSecurityChecks = pgTable("token_security_checks", {
  id: bigint("id", { mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  groupId: bigint("group_id", { mode: "number" })
    .notNull()
    .references(() => tokenSecurityGroups.id, { onDelete: "cascade" }),
  label: text("label").notNull(),
  state: checkState("state").notNull(),
  value: text("value"),
  hint: text("hint"),
  sortOrder: smallint("sort_order").notNull().default(0),
});

export const tokenTrending = pgTable(
  "token_trending",
  {
    tab: trendingTab("tab").notNull(),
    rank: integer("rank").notNull(),
    tokenId: bigint("token_id", { mode: "number" })
      .notNull()
      .references(() => tokens.id, { onDelete: "cascade" }),
    snapshotAt: ts("snapshot_at").notNull().defaultNow(),
  },
  (t) => [
    primaryKey({ columns: [t.tab, t.rank, t.snapshotAt] }),
    index("trending_token_idx").on(t.tokenId),
  ],
);

export const tokenTrades = pgTable(
  "token_trades",
  {
    id: bigint("id", { mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
    tokenId: bigint("token_id", { mode: "number" })
      .notNull()
      .references(() => tokens.id, { onDelete: "cascade" }),
    txHash: text("tx_hash").notNull(),
    walletAddress: text("wallet_address").notNull(),
    side: tradeSide("side").notNull(),
    tokenAmount: money("token_amount", 38, 6).notNull(),
    ethAmount: money("eth_amount", 38, 9),
    priceUsd: money("price_usd"),
    marketCapUsd: money("market_cap_usd", 20, 2),
    tradedAt: ts("traded_at").notNull(),
  },
  (t) => [
    uniqueIndex("trades_tx_uq").on(t.txHash),
    index("trades_token_time_idx").on(t.tokenId, t.tradedAt.desc()),
    index("trades_time_idx").on(t.tradedAt),
  ],
);

export const tokenCandles = pgTable(
  "token_candles",
  {
    tokenId: bigint("token_id", { mode: "number" })
      .notNull()
      .references(() => tokens.id, { onDelete: "cascade" }),
    interval: text("interval").notNull(),
    bucketStart: ts("bucket_start").notNull(),
    open: money("open").notNull(),
    high: money("high").notNull(),
    low: money("low").notNull(),
    close: money("close").notNull(),
    volumeUsd: money("volume_usd", 20, 2).notNull().default("0"),
  },
  (t) => [
    primaryKey({ columns: [t.tokenId, t.interval, t.bucketStart] }),
    check("candles_interval_chk", sql`${t.interval} in ('1m','5m','15m','1h','4h','1d')`),
  ],
);

export const memescopeCoins = pgTable(
  "memescope_coins",
  {
    id: bigint("id", { mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
    mint: text("mint").notNull(),
    stage: memescopeStage("stage").notNull(),
    name: text("name"),
    symbol: text("symbol"),
    imageUrl: text("image_url"),
    progressPct: money("progress_pct", 7, 2).notNull().default("0"),
    marketCapUsd: money("market_cap_usd", 20, 2).notNull().default("0"),
    athMarketCapUsd: money("ath_market_cap_usd", 20, 2),
    replies: integer("replies").notNull().default(0),
    complete: boolean("complete").notNull().default(false),
    live: boolean("live").notNull().default(false),
    creator: text("creator"),
    dex: text("dex"),
    createdAtChain: ts("created_at_chain"),
    lastTradeAt: ts("last_trade_at"),
  },
  (t) => [
    uniqueIndex("memescope_mint_uq").on(t.mint),
    index("memescope_stage_idx").on(t.stage, t.lastTradeAt.desc()),
  ],
);

export const platformStats = pgTable("platform_stats", {
  id: smallint("id").primaryKey().default(1),
  activeAgents: integer("active_agents").notNull().default(0),
  publishedAgents: integer("published_agents").notNull().default(0),
  smartWallets: integer("smart_wallets").notNull().default(0),
  swapsExecuted: integer("swaps_executed").notNull().default(0),
  updatedAt: ts("updated_at").notNull().defaultNow(),
});
