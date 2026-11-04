CREATE TYPE "public"."check_state" AS ENUM('pass', 'warn', 'fail', 'unknown');--> statement-breakpoint
CREATE TYPE "public"."memescope_stage" AS ENUM('new', 'stretch', 'migrated');--> statement-breakpoint
CREATE TYPE "public"."trade_side" AS ENUM('buy', 'sell');--> statement-breakpoint
CREATE TYPE "public"."trending_tab" AS ENUM('trending', 'new');--> statement-breakpoint
CREATE TYPE "public"."agent_type" AS ENUM('auto_trader', 'signal_bot', 'wallet_monitor', 'token_analyst', 'copy_trader');--> statement-breakpoint
CREATE TYPE "public"."run_outcome" AS ENUM('passed', 'blocked', 'stopped', 'failed');--> statement-breakpoint
CREATE TYPE "public"."trade_mode" AS ENUM('dry', 'live');--> statement-breakpoint
CREATE TYPE "public"."wallet_kind" AS ENUM('custodial', 'external');--> statement-breakpoint
CREATE TABLE "memescope_coins" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "memescope_coins_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"mint" text NOT NULL,
	"stage" "memescope_stage" NOT NULL,
	"name" text,
	"symbol" text,
	"image_url" text,
	"progress_pct" numeric(7,2) DEFAULT '0' NOT NULL,
	"market_cap_usd" numeric(20,2) DEFAULT '0' NOT NULL,
	"ath_market_cap_usd" numeric(20,2),
	"replies" integer DEFAULT 0 NOT NULL,
	"complete" boolean DEFAULT false NOT NULL,
	"live" boolean DEFAULT false NOT NULL,
	"creator" text,
	"dex" text,
	"created_at_chain" timestamp with time zone,
	"last_trade_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "platform_stats" (
	"id" smallint PRIMARY KEY DEFAULT 1 NOT NULL,
	"active_agents" integer DEFAULT 0 NOT NULL,
	"published_agents" integer DEFAULT 0 NOT NULL,
	"smart_wallets" integer DEFAULT 0 NOT NULL,
	"swaps_executed" integer DEFAULT 0 NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "token_candles" (
	"token_id" bigint NOT NULL,
	"interval" text NOT NULL,
	"bucket_start" timestamp with time zone NOT NULL,
	"open" numeric(38,18) NOT NULL,
	"high" numeric(38,18) NOT NULL,
	"low" numeric(38,18) NOT NULL,
	"close" numeric(38,18) NOT NULL,
	"volume_usd" numeric(20,2) DEFAULT '0' NOT NULL,
	CONSTRAINT "token_candles_token_id_interval_bucket_start_pk" PRIMARY KEY("token_id","interval","bucket_start"),
	CONSTRAINT "candles_interval_chk" CHECK ("token_candles"."interval" in ('1m','5m','15m','1h','4h','1d'))
);
--> statement-breakpoint
CREATE TABLE "token_security_checks" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "token_security_checks_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"group_id" bigint NOT NULL,
	"label" text NOT NULL,
	"state" "check_state" NOT NULL,
	"value" text,
	"hint" text,
	"sort_order" smallint DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "token_security_groups" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "token_security_groups_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"report_id" bigint NOT NULL,
	"title" text NOT NULL,
	"sort_order" smallint DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "token_security_metrics" (
	"token_id" bigint PRIMARY KEY NOT NULL,
	"dev_wallet" text,
	"creator_address" text,
	"sniper_holdings_pct" numeric(7,2),
	"bundler_holdings_pct" numeric(7,2),
	"insiders_pct" numeric(7,2),
	"insiders_count" integer,
	"bundlers_count" integer,
	"bundlers_initial_pct" numeric(7,2),
	"snipers_count" integer,
	"jito_fees" numeric(20,9),
	"jupiter_verified" boolean,
	"buy_volume_usd" numeric(20,2),
	"sell_volume_usd" numeric(20,2),
	"buyers" integer,
	"sellers" integer,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "token_security_reports" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "token_security_reports_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"token_id" bigint NOT NULL,
	"checked" boolean DEFAULT true NOT NULL,
	"passed" integer NOT NULL,
	"total" integer NOT NULL,
	"checked_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "token_trades" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "token_trades_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"token_id" bigint NOT NULL,
	"tx_hash" text NOT NULL,
	"wallet_address" text NOT NULL,
	"side" "trade_side" NOT NULL,
	"token_amount" numeric(38,6) NOT NULL,
	"sol_amount" numeric(38,9),
	"price_usd" numeric(38,18),
	"market_cap_usd" numeric(20,2),
	"traded_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "token_trending" (
	"tab" "trending_tab" NOT NULL,
	"rank" integer NOT NULL,
	"token_id" bigint NOT NULL,
	"snapshot_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "token_trending_tab_rank_snapshot_at_pk" PRIMARY KEY("tab","rank","snapshot_at")
);
--> statement-breakpoint
CREATE TABLE "tokens" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "tokens_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"mint" text NOT NULL,
	"name" text,
	"symbol" text,
	"image_url" text,
	"description" text,
	"decimals" smallint DEFAULT 9 NOT NULL,
	"dex" text,
	"pool_id" text,
	"price_usd" numeric(38,18),
	"market_cap_usd" numeric(20,2),
	"liquidity_usd" numeric(20,2),
	"lp_burn_pct" numeric(5,2),
	"volume_usd" numeric(20,2),
	"volume_1h_usd" numeric(20,2),
	"buys" integer,
	"sells" integer,
	"txns" integer,
	"makers" integer,
	"change_1m_pct" numeric(12,2),
	"change_5m_pct" numeric(12,2),
	"change_1h_pct" numeric(12,2),
	"change_6h_pct" numeric(12,2),
	"change_24h_pct" numeric(12,2),
	"risk_score" smallint,
	"rugged" boolean DEFAULT false NOT NULL,
	"top10_pct" numeric(5,2),
	"dev_pct" numeric(5,2),
	"transfer_fee_bps" integer,
	"total_supply" numeric(38,6),
	"holders" integer,
	"twitter_url" text,
	"telegram_url" text,
	"website_url" text,
	"freeze_authority" text,
	"mint_authority" text,
	"created_at_chain" timestamp with time zone,
	"last_seen_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "tokens_mint_chk" CHECK (mint ~ '^[1-9A-HJ-NP-Za-km-z]{32,44}$')
);
--> statement-breakpoint
CREATE TABLE "agent_backtests" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "agent_backtests_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"agent_id" bigint NOT NULL,
	"result" jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "agent_earnings" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "agent_earnings_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"agent_id" bigint NOT NULL,
	"amount_sol" numeric(20,9) NOT NULL,
	"withdrawn_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "agent_knowledge" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "agent_knowledge_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"agent_id" bigint NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "agent_run_steps" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "agent_run_steps_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"run_id" bigint NOT NULL,
	"step_name" text NOT NULL,
	"detail" text,
	"outcome" "run_outcome" NOT NULL,
	"step_values" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"sort_order" smallint DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "agent_runs" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "agent_runs_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"agent_id" bigint NOT NULL,
	"run_number" integer NOT NULL,
	"ran_at" timestamp with time zone NOT NULL,
	"ended" "run_outcome" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "agent_social_config" (
	"agent_id" bigint PRIMARY KEY NOT NULL,
	"config" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"encrypted_twitter_keys" text,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "agents" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "agents_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"owner_id" uuid NOT NULL,
	"name" text NOT NULL,
	"type" "agent_type" NOT NULL,
	"avatar_url" text,
	"token_symbol" text,
	"token_mint" text,
	"persona" text,
	"floor" smallint,
	"conviction" smallint,
	"running" boolean DEFAULT false NOT NULL,
	"published" boolean DEFAULT false NOT NULL,
	"public_clones" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "burn_events" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "burn_events_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"tx_hash" text NOT NULL,
	"amount" numeric(38,6) NOT NULL,
	"at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "chat_feedback" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "chat_feedback_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"message_id" bigint NOT NULL,
	"profile_id" uuid NOT NULL,
	"rating" smallint NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "chat_messages" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "chat_messages_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"chat_id" bigint NOT NULL,
	"role" text NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "chat_messages_role_chk" CHECK ("chat_messages"."role" in ('user','assistant','system'))
);
--> statement-breakpoint
CREATE TABLE "chats" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "chats_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"title" text DEFAULT 'New chat' NOT NULL,
	"token_mint" text,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "credits" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "credits_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"delta" integer NOT NULL,
	"reason" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "login_log" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "login_log_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"ip_hash" text,
	"user_agent" text,
	"at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "notifications" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "notifications_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"kind" text NOT NULL,
	"title" text NOT NULL,
	"body" text,
	"read" boolean DEFAULT false NOT NULL,
	"at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "portfolio_snapshots" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "portfolio_snapshots_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"at" timestamp with time zone DEFAULT now() NOT NULL,
	"total_usd" numeric(20,2) NOT NULL,
	"positions" jsonb DEFAULT '[]'::jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"display_name" text,
	"email" text,
	"plan" text DEFAULT 'free' NOT NULL,
	"avatar_url" text,
	"banner_url" text,
	"twitter_handle" text,
	"telegram_chat_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "signals" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "signals_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"type" text NOT NULL,
	"mint" text NOT NULL,
	"symbol" text,
	"score" smallint DEFAULT 0 NOT NULL,
	"at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "subscriptions" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "subscriptions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"agent_id" bigint NOT NULL,
	"status" text DEFAULT 'active' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "swaps" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "swaps_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"agent_id" bigint,
	"user_wallet_id" bigint,
	"token_id" bigint,
	"side" "trade_side" NOT NULL,
	"amount_usd" numeric(20,2),
	"tx_hash" text,
	"mode" "trade_mode" DEFAULT 'dry' NOT NULL,
	"report" jsonb,
	"executed_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "trading_prefs" (
	"profile_id" uuid PRIMARY KEY NOT NULL,
	"slippage_bps" integer DEFAULT 100 NOT NULL,
	"priority_fee_lamports" bigint DEFAULT 100000 NOT NULL,
	"mode" "trade_mode" DEFAULT 'dry' NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_wallet_secrets" (
	"wallet_id" bigint PRIMARY KEY NOT NULL,
	"encrypted_key" text NOT NULL,
	"key_ref" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_wallets" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "user_wallets_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"address" text NOT NULL,
	"kind" "wallet_kind" NOT NULL,
	"label" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "user_wallets_addr_chk" CHECK (address ~ '^[1-9A-HJ-NP-Za-km-z]{32,44}$')
);
--> statement-breakpoint
CREATE TABLE "wallet_activity" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "wallet_activity_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"wallet_id" bigint NOT NULL,
	"token_id" bigint,
	"mint" text NOT NULL,
	"side" "trade_side" NOT NULL,
	"amount_sol" numeric(20,9),
	"tx_hash" text NOT NULL,
	"at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "wallets" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "wallets_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"address" text NOT NULL,
	"category" text,
	"curated_tier" text,
	"curated_label" text,
	"source" text,
	"win_rate_30d_pct" numeric(5,2),
	"total_pnl_sol" numeric(20,6),
	"pnl_usd" numeric(20,2),
	"tx_count_30d" integer,
	"closed_tokens_30d" integer,
	"tokens_traded" integer,
	"avg_hold_hours" numeric(10,2),
	"avg_position_sol" numeric(20,6),
	"avatar_url" text,
	"last_active_at" timestamp with time zone,
	"last_refreshed_at" timestamp with time zone,
	CONSTRAINT "wallets_addr_chk" CHECK (address ~ '^[1-9A-HJ-NP-Za-km-z]{32,44}$'),
	CONSTRAINT "wallets_tier_chk" CHECK ("wallets"."curated_tier" is null or "wallets"."curated_tier" in ('S','A','B','C'))
);
--> statement-breakpoint
CREATE TABLE "watchlist_wallets" (
	"watchlist_id" bigint NOT NULL,
	"address" text NOT NULL,
	CONSTRAINT "watchlist_wallets_watchlist_id_address_pk" PRIMARY KEY("watchlist_id","address")
);
--> statement-breakpoint
CREATE TABLE "watchlists" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "watchlists_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "token_candles" ADD CONSTRAINT "token_candles_token_id_tokens_id_fk" FOREIGN KEY ("token_id") REFERENCES "public"."tokens"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "token_security_checks" ADD CONSTRAINT "token_security_checks_group_id_token_security_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."token_security_groups"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "token_security_groups" ADD CONSTRAINT "token_security_groups_report_id_token_security_reports_id_fk" FOREIGN KEY ("report_id") REFERENCES "public"."token_security_reports"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "token_security_metrics" ADD CONSTRAINT "token_security_metrics_token_id_tokens_id_fk" FOREIGN KEY ("token_id") REFERENCES "public"."tokens"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "token_security_reports" ADD CONSTRAINT "token_security_reports_token_id_tokens_id_fk" FOREIGN KEY ("token_id") REFERENCES "public"."tokens"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "token_trades" ADD CONSTRAINT "token_trades_token_id_tokens_id_fk" FOREIGN KEY ("token_id") REFERENCES "public"."tokens"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "token_trending" ADD CONSTRAINT "token_trending_token_id_tokens_id_fk" FOREIGN KEY ("token_id") REFERENCES "public"."tokens"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "agent_backtests" ADD CONSTRAINT "agent_backtests_agent_id_agents_id_fk" FOREIGN KEY ("agent_id") REFERENCES "public"."agents"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "agent_earnings" ADD CONSTRAINT "agent_earnings_agent_id_agents_id_fk" FOREIGN KEY ("agent_id") REFERENCES "public"."agents"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "agent_knowledge" ADD CONSTRAINT "agent_knowledge_agent_id_agents_id_fk" FOREIGN KEY ("agent_id") REFERENCES "public"."agents"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "agent_run_steps" ADD CONSTRAINT "agent_run_steps_run_id_agent_runs_id_fk" FOREIGN KEY ("run_id") REFERENCES "public"."agent_runs"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "agent_runs" ADD CONSTRAINT "agent_runs_agent_id_agents_id_fk" FOREIGN KEY ("agent_id") REFERENCES "public"."agents"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "agent_social_config" ADD CONSTRAINT "agent_social_config_agent_id_agents_id_fk" FOREIGN KEY ("agent_id") REFERENCES "public"."agents"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "agents" ADD CONSTRAINT "agents_owner_id_profiles_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chat_feedback" ADD CONSTRAINT "chat_feedback_message_id_chat_messages_id_fk" FOREIGN KEY ("message_id") REFERENCES "public"."chat_messages"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chat_feedback" ADD CONSTRAINT "chat_feedback_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_chat_id_chats_id_fk" FOREIGN KEY ("chat_id") REFERENCES "public"."chats"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chats" ADD CONSTRAINT "chats_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "credits" ADD CONSTRAINT "credits_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "login_log" ADD CONSTRAINT "login_log_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "portfolio_snapshots" ADD CONSTRAINT "portfolio_snapshots_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_agent_id_agents_id_fk" FOREIGN KEY ("agent_id") REFERENCES "public"."agents"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "swaps" ADD CONSTRAINT "swaps_agent_id_agents_id_fk" FOREIGN KEY ("agent_id") REFERENCES "public"."agents"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "swaps" ADD CONSTRAINT "swaps_user_wallet_id_user_wallets_id_fk" FOREIGN KEY ("user_wallet_id") REFERENCES "public"."user_wallets"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "swaps" ADD CONSTRAINT "swaps_token_id_tokens_id_fk" FOREIGN KEY ("token_id") REFERENCES "public"."tokens"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trading_prefs" ADD CONSTRAINT "trading_prefs_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_wallet_secrets" ADD CONSTRAINT "user_wallet_secrets_wallet_id_user_wallets_id_fk" FOREIGN KEY ("wallet_id") REFERENCES "public"."user_wallets"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_wallets" ADD CONSTRAINT "user_wallets_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "wallet_activity" ADD CONSTRAINT "wallet_activity_wallet_id_wallets_id_fk" FOREIGN KEY ("wallet_id") REFERENCES "public"."wallets"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "wallet_activity" ADD CONSTRAINT "wallet_activity_token_id_tokens_id_fk" FOREIGN KEY ("token_id") REFERENCES "public"."tokens"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "watchlist_wallets" ADD CONSTRAINT "watchlist_wallets_watchlist_id_watchlists_id_fk" FOREIGN KEY ("watchlist_id") REFERENCES "public"."watchlists"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "watchlists" ADD CONSTRAINT "watchlists_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "memescope_mint_uq" ON "memescope_coins" USING btree ("mint");--> statement-breakpoint
CREATE INDEX "memescope_stage_idx" ON "memescope_coins" USING btree ("stage","last_trade_at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "sec_report_token_idx" ON "token_security_reports" USING btree ("token_id","checked_at" DESC NULLS LAST);--> statement-breakpoint
CREATE UNIQUE INDEX "trades_tx_uq" ON "token_trades" USING btree ("tx_hash");--> statement-breakpoint
CREATE INDEX "trades_token_time_idx" ON "token_trades" USING btree ("token_id","traded_at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "trades_time_idx" ON "token_trades" USING btree ("traded_at");--> statement-breakpoint
CREATE INDEX "trending_token_idx" ON "token_trending" USING btree ("token_id");--> statement-breakpoint
CREATE UNIQUE INDEX "tokens_mint_uq" ON "tokens" USING btree ("mint");--> statement-breakpoint
CREATE INDEX "tokens_mcap_idx" ON "tokens" USING btree ("market_cap_usd" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "tokens_volume_idx" ON "tokens" USING btree ("volume_usd" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "tokens_created_idx" ON "tokens" USING btree ("created_at_chain" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "tokens_last_seen_idx" ON "tokens" USING btree ("last_seen_at");--> statement-breakpoint
CREATE INDEX "agent_run_steps_idx" ON "agent_run_steps" USING btree ("run_id","sort_order");--> statement-breakpoint
CREATE UNIQUE INDEX "agent_runs_uq" ON "agent_runs" USING btree ("agent_id","run_number");--> statement-breakpoint
CREATE INDEX "agent_runs_time_idx" ON "agent_runs" USING btree ("agent_id","ran_at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "agents_owner_idx" ON "agents" USING btree ("owner_id");--> statement-breakpoint
CREATE INDEX "agents_published_idx" ON "agents" USING btree ("published");--> statement-breakpoint
CREATE UNIQUE INDEX "burn_events_tx_uq" ON "burn_events" USING btree ("tx_hash");--> statement-breakpoint
CREATE INDEX "chat_messages_chat_idx" ON "chat_messages" USING btree ("chat_id","id");--> statement-breakpoint
CREATE INDEX "chats_profile_idx" ON "chats" USING btree ("profile_id","updated_at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "credits_profile_idx" ON "credits" USING btree ("profile_id","created_at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "login_log_profile_idx" ON "login_log" USING btree ("profile_id","at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "notifications_profile_idx" ON "notifications" USING btree ("profile_id","at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "portfolio_snap_idx" ON "portfolio_snapshots" USING btree ("profile_id","at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "signals_at_idx" ON "signals" USING btree ("at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "signals_mint_idx" ON "signals" USING btree ("mint");--> statement-breakpoint
CREATE UNIQUE INDEX "subscriptions_uq" ON "subscriptions" USING btree ("profile_id","agent_id");--> statement-breakpoint
CREATE INDEX "swaps_time_idx" ON "swaps" USING btree ("executed_at" DESC NULLS LAST);--> statement-breakpoint
CREATE UNIQUE INDEX "user_wallets_addr_uq" ON "user_wallets" USING btree ("address");--> statement-breakpoint
CREATE INDEX "user_wallets_profile_idx" ON "user_wallets" USING btree ("profile_id");--> statement-breakpoint
CREATE UNIQUE INDEX "wallet_activity_tx_uq" ON "wallet_activity" USING btree ("tx_hash");--> statement-breakpoint
CREATE INDEX "wallet_activity_wallet_idx" ON "wallet_activity" USING btree ("wallet_id","at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "wallet_activity_mint_idx" ON "wallet_activity" USING btree ("mint","at" DESC NULLS LAST);--> statement-breakpoint
CREATE UNIQUE INDEX "wallets_addr_uq" ON "wallets" USING btree ("address");--> statement-breakpoint
CREATE INDEX "wallets_tier_idx" ON "wallets" USING btree ("curated_tier","total_pnl_sol" DESC NULLS LAST);