import {
  bigint, boolean, check, index, integer, jsonb, pgEnum, pgTable, primaryKey,
  smallint, text, uniqueIndex, uuid,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { money, ts, chainAddr } from "./common";
import { tokens, tradeSide } from "./market";

export const walletKind = pgEnum("wallet_kind", ["custodial", "external"]);
export const tradeMode = pgEnum("trade_mode", ["dry", "live"]);
export const agentType = pgEnum("agent_type", [
  "auto_trader", "signal_bot", "wallet_monitor", "token_analyst", "copy_trader",
]);
export const runOutcome = pgEnum("run_outcome", ["passed", "blocked", "stopped", "failed"]);

const id = () => bigint("id", { mode: "number" }).primaryKey().generatedAlwaysAsIdentity();
const profileRef = (name = "profile_id") =>
  // FK ke auth.users ditambahkan di migrasi khusus Supabase (schema `auth` tidak ada di Postgres lokal).
  uuid(name).notNull().references(() => profiles.id, { onDelete: "cascade" });

/* ---------------------------- Pengguna ---------------------------- */

export const profiles = pgTable("profiles", {
  /** = auth.users.id (Supabase Auth). */
  id: uuid("id").primaryKey(),
  displayName: text("display_name"),
  email: text("email"),
  plan: text("plan").notNull().default("free"),
  /** Pro aktif selama waktu sekarang < pro_until (UTC). Null = tidak pernah Pro. */
  proUntil: ts("pro_until"),
  avatarUrl: text("avatar_url"),
  bannerUrl: text("banner_url"),
  twitterHandle: text("twitter_handle"),
  telegramChatId: text("telegram_chat_id"),
  createdAt: ts("created_at").notNull().defaultNow(),
}, (t) => [uniqueIndex("profiles_telegram_chat_uq").on(t.telegramChatId).where(sql`${t.telegramChatId} is not null`)]);

/** Kode tautan Telegram sekali pakai (hanya hash). Satu kode aktif per pengguna. */
export const telegramLinkCodes = pgTable(
  "telegram_link_codes",
  {
    profileId: uuid("profile_id").primaryKey().references(() => profiles.id, { onDelete: "cascade" }),
    codeHash: text("code_hash").notNull(),
    expiresAt: ts("expires_at").notNull(),
  },
  (t) => [uniqueIndex("telegram_link_codes_hash_uq").on(t.codeHash)],
);

export const userWallets = pgTable(
  "user_wallets",
  {
    id: id(),
    profileId: profileRef(),
    address: text("address").notNull(),
    kind: walletKind("kind").notNull(),
    label: text("label"),
    createdAt: ts("created_at").notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("user_wallets_addr_uq").on(t.address),
    index("user_wallets_profile_idx").on(t.profileId),
    check("user_wallets_addr_chk", chainAddr("address")),
  ],
);

/** Kunci kustodian terenkripsi. Tanpa policy untuk role anon/authenticated; hanya role backend. */
export const userWalletSecrets = pgTable("user_wallet_secrets", {
  walletId: bigint("wallet_id", { mode: "number" })
    .primaryKey()
    .references(() => userWallets.id, { onDelete: "cascade" }),
  encryptedKey: text("encrypted_key").notNull(),
  keyRef: text("key_ref").notNull(),
  createdAt: ts("created_at").notNull().defaultNow(),
});

export const tradingPrefs = pgTable("trading_prefs", {
  profileId: uuid("profile_id").primaryKey().references(() => profiles.id, { onDelete: "cascade" }),
  slippageBps: integer("slippage_bps").notNull().default(100),
  priorityFeeLamports: bigint("priority_fee_lamports", { mode: "number" }).notNull().default(100000),
  mode: tradeMode("mode").notNull().default("dry"),
  updatedAt: ts("updated_at").notNull().defaultNow(),
});

export const credits = pgTable(
  "credits",
  {
    id: id(),
    profileId: profileRef(),
    delta: integer("delta").notNull(),
    reason: text("reason").notNull(),
    createdAt: ts("created_at").notNull().defaultNow(),
  },
  (t) => [index("credits_profile_idx").on(t.profileId, t.createdAt.desc())],
);

/** Satu baris per jawaban AI. source=quota: memakai kuota bulanan; credit: memakai 1 kredit. */
export const usageEvents = pgTable(
  "usage_events",
  {
    id: id(),
    profileId: profileRef(),
    /** chat = tanya jawab umum; deep = analisis token (konteks token terdeteksi). */
    kind: text("kind").notNull(),
    source: text("source").notNull(),
    createdAt: ts("created_at").notNull().defaultNow(),
  },
  (t) => [
    index("usage_events_profile_idx").on(t.profileId, t.createdAt.desc()),
    index("usage_events_at_idx").on(t.createdAt.desc()),
    check("usage_events_kind_chk", sql`${t.kind} in ('chat','deep')`),
    check("usage_events_source_chk", sql`${t.source} in ('quota','credit')`),
  ],
);

/** Pesanan pembayaran USDG. amount_units unik di antara pesanan pending agar tx tidak bisa diklaim akun lain. */
export const paymentOrders = pgTable(
  "payment_orders",
  {
    id: id(),
    profileId: profileRef(),
    product: text("product").notNull(),
    /** Jumlah token dalam unit terkecil (USDG = 6 desimal), disimpan sebagai teks agar tanpa pembulatan. */
    amountUnits: text("amount_units").notNull(),
    tokenAddress: text("token_address").notNull(),
    recipient: text("recipient").notNull(),
    chainId: integer("chain_id").notNull(),
    status: text("status").notNull().default("pending"),
    txHash: text("tx_hash"),
    payer: text("payer"),
    createdAt: ts("created_at").notNull().defaultNow(),
    expiresAt: ts("expires_at").notNull(),
    paidAt: ts("paid_at"),
  },
  (t) => [
    uniqueIndex("payment_orders_tx_uq").on(t.txHash),
    uniqueIndex("payment_orders_pending_amount_uq").on(t.chainId, t.recipient, t.amountUnits).where(sql`${t.status} = 'pending'`),
    index("payment_orders_profile_idx").on(t.profileId, t.createdAt.desc()),
    check("payment_orders_status_chk", sql`${t.status} in ('pending','paid','expired')`),
  ],
);

export const loginLog = pgTable(
  "login_log",
  {
    id: id(),
    profileId: profileRef(),
    ipHash: text("ip_hash"),
    userAgent: text("user_agent"),
    at: ts("at").notNull().defaultNow(),
  },
  (t) => [index("login_log_profile_idx").on(t.profileId, t.at.desc())],
);

export const notifications = pgTable(
  "notifications",
  {
    id: id(),
    profileId: profileRef(),
    kind: text("kind").notNull(),
    title: text("title").notNull(),
    body: text("body"),
    read: boolean("read").notNull().default(false),
    at: ts("at").notNull().defaultNow(),
  },
  (t) => [index("notifications_profile_idx").on(t.profileId, t.at.desc())],
);

export const chats = pgTable(
  "chats",
  {
    id: id(),
    profileId: profileRef(),
    title: text("title").notNull().default("New chat"),
    tokenMint: text("token_mint"),
    updatedAt: ts("updated_at").notNull().defaultNow(),
  },
  (t) => [index("chats_profile_idx").on(t.profileId, t.updatedAt.desc())],
);

export const chatMessages = pgTable(
  "chat_messages",
  {
    id: id(),
    chatId: bigint("chat_id", { mode: "number" })
      .notNull()
      .references(() => chats.id, { onDelete: "cascade" }),
    role: text("role").notNull(),
    content: text("content").notNull(),
    createdAt: ts("created_at").notNull().defaultNow(),
  },
  (t) => [
    index("chat_messages_chat_idx").on(t.chatId, t.id),
    check("chat_messages_role_chk", sql`${t.role} in ('user','assistant','system')`),
  ],
);

export const chatFeedback = pgTable("chat_feedback", {
  id: id(),
  messageId: bigint("message_id", { mode: "number" })
    .notNull()
    .references(() => chatMessages.id, { onDelete: "cascade" }),
  profileId: profileRef(),
  rating: smallint("rating").notNull(),
  createdAt: ts("created_at").notNull().defaultNow(),
});

export const portfolioSnapshots = pgTable(
  "portfolio_snapshots",
  {
    id: id(),
    profileId: profileRef(),
    at: ts("at").notNull().defaultNow(),
    totalUsd: money("total_usd", 20, 2).notNull(),
    positions: jsonb("positions").notNull().default([]),
  },
  (t) => [index("portfolio_snap_idx").on(t.profileId, t.at.desc())],
);

/* ------------------------------ Alpha ------------------------------ */

export const wallets = pgTable(
  "wallets",
  {
    id: id(),
    address: text("address").notNull(),
    category: text("category"),
    curatedTier: text("curated_tier"),
    curatedLabel: text("curated_label"),
    source: text("source"),
    winRate30dPct: money("win_rate_30d_pct", 5, 2),
    totalPnlEth: money("total_pnl_eth", 20, 6),
    pnlUsd: money("pnl_usd", 20, 2),
    txCount30d: integer("tx_count_30d"),
    closedTokens30d: integer("closed_tokens_30d"),
    tokensTraded: integer("tokens_traded"),
    avgHoldHours: money("avg_hold_hours", 10, 2),
    avgPositionEth: money("avg_position_eth", 20, 6),
    avatarUrl: text("avatar_url"),
    lastActiveAt: ts("last_active_at"),
    lastRefreshedAt: ts("last_refreshed_at"),
  },
  (t) => [
    uniqueIndex("wallets_addr_uq").on(t.address),
    index("wallets_tier_idx").on(t.curatedTier, t.totalPnlEth.desc()),
    check("wallets_addr_chk", chainAddr("address")),
    check("wallets_tier_chk", sql`${t.curatedTier} is null or ${t.curatedTier} in ('S','A','B','C')`),
  ],
);

export const walletActivity = pgTable(
  "wallet_activity",
  {
    id: id(),
    walletId: bigint("wallet_id", { mode: "number" })
      .notNull()
      .references(() => wallets.id, { onDelete: "cascade" }),
    tokenId: bigint("token_id", { mode: "number" }).references(() => tokens.id, { onDelete: "set null" }),
    mint: text("mint").notNull(),
    side: tradeSide("side").notNull(),
    amountEth: money("amount_eth", 20, 9),
    txHash: text("tx_hash").notNull(),
    at: ts("at").notNull(),
  },
  (t) => [
    uniqueIndex("wallet_activity_tx_uq").on(t.txHash),
    index("wallet_activity_wallet_idx").on(t.walletId, t.at.desc()),
    index("wallet_activity_mint_idx").on(t.mint, t.at.desc()),
  ],
);

export const watchlists = pgTable("watchlists", {
  id: id(),
  profileId: profileRef(),
  name: text("name").notNull(),
  createdAt: ts("created_at").notNull().defaultNow(),
});

export const watchlistWallets = pgTable(
  "watchlist_wallets",
  {
    watchlistId: bigint("watchlist_id", { mode: "number" })
      .notNull()
      .references(() => watchlists.id, { onDelete: "cascade" }),
    address: text("address").notNull(),
  },
  (t) => [primaryKey({ columns: [t.watchlistId, t.address] })],
);

export const signals = pgTable(
  "signals",
  {
    id: id(),
    type: text("type").notNull(),
    mint: text("mint").notNull(),
    symbol: text("symbol"),
    score: smallint("score").notNull().default(0),
    at: ts("at").notNull().defaultNow(),
  },
  (t) => [index("signals_at_idx").on(t.at.desc()), index("signals_mint_idx").on(t.mint)],
);

/* ------------------------------ Agent ------------------------------ */

export const agents = pgTable(
  "agents",
  {
    id: id(),
    ownerId: profileRef("owner_id"),
    name: text("name").notNull(),
    type: agentType("type").notNull(),
    avatarUrl: text("avatar_url"),
    tokenSymbol: text("token_symbol"),
    tokenMint: text("token_mint"),
    persona: text("persona"),
    /** Pipeline builder: follow_wallet | new_tokens | token_trading. */
    pipeline: text("pipeline"),
    /** signal = hanya notifikasi; trading = eksekusi (selama TRADE_MODE=dry hanya simulasi). */
    mode: text("mode").notNull().default("signal"),
    /** Konfigurasi field builder (semua nilai string). */
    config: jsonb("config").notNull().default({}),
    /** Batas trading dari builder (perTrade, daily, allowed). */
    limits: jsonb("limits").notNull().default({}),
    floor: smallint("floor"),
    conviction: smallint("conviction"),
    running: boolean("running").notNull().default(false),
    published: boolean("published").notNull().default(false),
    /** Deskripsi singkat untuk marketplace (maks 280 karakter, divalidasi di API). */
    description: text("description"),
    publishedAt: ts("published_at"),
    publicClones: integer("public_clones").notNull().default(0),
    createdAt: ts("created_at").notNull().defaultNow(),
  },
  (t) => [
    index("agents_owner_idx").on(t.ownerId),
    index("agents_published_idx").on(t.published),
    check("agents_mode_chk", sql`${t.mode} in ('signal','trading')`),
    check("agents_pipeline_chk", sql`${t.pipeline} is null or ${t.pipeline} in ('follow_wallet','new_tokens','token_trading')`),
  ],
);

export const agentRuns = pgTable(
  "agent_runs",
  {
    id: id(),
    agentId: bigint("agent_id", { mode: "number" })
      .notNull()
      .references(() => agents.id, { onDelete: "cascade" }),
    runNumber: integer("run_number").notNull(),
    ranAt: ts("ran_at").notNull(),
    ended: runOutcome("ended").notNull(),
  },
  (t) => [
    uniqueIndex("agent_runs_uq").on(t.agentId, t.runNumber),
    index("agent_runs_time_idx").on(t.agentId, t.ranAt.desc()),
  ],
);

export const agentRunSteps = pgTable(
  "agent_run_steps",
  {
    id: id(),
    runId: bigint("run_id", { mode: "number" })
      .notNull()
      .references(() => agentRuns.id, { onDelete: "cascade" }),
    stepName: text("step_name").notNull(),
    detail: text("detail"),
    outcome: runOutcome("outcome").notNull(),
    stepValues: jsonb("step_values").notNull().default({}),
    sortOrder: smallint("sort_order").notNull().default(0),
  },
  (t) => [index("agent_run_steps_idx").on(t.runId, t.sortOrder)],
);

export const agentKnowledge = pgTable("agent_knowledge", {
  id: id(),
  agentId: bigint("agent_id", { mode: "number" })
    .notNull()
    .references(() => agents.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: ts("created_at").notNull().defaultNow(),
});

export const agentSocialConfig = pgTable("agent_social_config", {
  agentId: bigint("agent_id", { mode: "number" })
    .primaryKey()
    .references(() => agents.id, { onDelete: "cascade" }),
  config: jsonb("config").notNull().default({}),
  /** Kunci Twitter terenkripsi (envelope); tidak pernah dikembalikan ke klien. */
  encryptedTwitterKeys: text("encrypted_twitter_keys"),
  updatedAt: ts("updated_at").notNull().defaultNow(),
});

export const agentBacktests = pgTable("agent_backtests", {
  id: id(),
  agentId: bigint("agent_id", { mode: "number" })
    .notNull()
    .references(() => agents.id, { onDelete: "cascade" }),
  result: jsonb("result").notNull(),
  createdAt: ts("created_at").notNull().defaultNow(),
});

export const agentEarnings = pgTable("agent_earnings", {
  id: id(),
  agentId: bigint("agent_id", { mode: "number" })
    .notNull()
    .references(() => agents.id, { onDelete: "cascade" }),
  amountEth: money("amount_eth", 20, 9).notNull(),
  withdrawnAt: ts("withdrawn_at"),
  createdAt: ts("created_at").notNull().defaultNow(),
});

export const subscriptions = pgTable(
  "subscriptions",
  {
    id: id(),
    profileId: profileRef(),
    agentId: bigint("agent_id", { mode: "number" })
      .notNull()
      .references(() => agents.id, { onDelete: "cascade" }),
    status: text("status").notNull().default("active"),
    createdAt: ts("created_at").notNull().defaultNow(),
  },
  (t) => [uniqueIndex("subscriptions_uq").on(t.profileId, t.agentId)],
);

/* ----------------------------- Eksekusi ----------------------------- */

export const swaps = pgTable(
  "swaps",
  {
    id: id(),
    agentId: bigint("agent_id", { mode: "number" }).references(() => agents.id, { onDelete: "set null" }),
    userWalletId: bigint("user_wallet_id", { mode: "number" }).references(() => userWallets.id, {
      onDelete: "set null",
    }),
    tokenId: bigint("token_id", { mode: "number" }).references(() => tokens.id, { onDelete: "set null" }),
    side: tradeSide("side").notNull(),
    amountUsd: money("amount_usd", 20, 2),
    txHash: text("tx_hash"),
    /** `dry` = simulasi; `live` hanya setelah pemilik mengizinkan. */
    mode: tradeMode("mode").notNull().default("dry"),
    report: jsonb("report"),
    executedAt: ts("executed_at").notNull().defaultNow(),
  },
  (t) => [index("swaps_time_idx").on(t.executedAt.desc())],
);

export const burnEvents = pgTable(
  "burn_events",
  {
    id: id(),
    txHash: text("tx_hash").notNull(),
    amount: money("amount", 38, 6).notNull(),
    at: ts("at").notNull(),
  },
  (t) => [uniqueIndex("burn_events_tx_uq").on(t.txHash)],
);
