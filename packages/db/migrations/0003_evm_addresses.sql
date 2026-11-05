ALTER TABLE "tokens" DROP CONSTRAINT "tokens_mint_chk";--> statement-breakpoint
ALTER TABLE "user_wallets" DROP CONSTRAINT "user_wallets_addr_chk";--> statement-breakpoint
ALTER TABLE "wallets" DROP CONSTRAINT "wallets_addr_chk";--> statement-breakpoint
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_mint_chk" CHECK ((mint ~ '^[1-9A-HJ-NP-Za-km-z]{32,44}$' OR mint ~ '^0x[0-9a-f]{40}$'));--> statement-breakpoint
ALTER TABLE "user_wallets" ADD CONSTRAINT "user_wallets_addr_chk" CHECK ((address ~ '^[1-9A-HJ-NP-Za-km-z]{32,44}$' OR address ~ '^0x[0-9a-f]{40}$'));--> statement-breakpoint
ALTER TABLE "wallets" ADD CONSTRAINT "wallets_addr_chk" CHECK ((address ~ '^[1-9A-HJ-NP-Za-km-z]{32,44}$' OR address ~ '^0x[0-9a-f]{40}$'));