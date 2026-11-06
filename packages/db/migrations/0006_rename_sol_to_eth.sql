-- Ganti nama kolom bekas era Solana (*_sol) menjadi *_eth. Hanya ganti nama: tidak ada data yang berubah atau hilang.
ALTER TABLE "token_trades" RENAME COLUMN "sol_amount" TO "eth_amount";--> statement-breakpoint
ALTER TABLE "wallet_activity" RENAME COLUMN "amount_sol" TO "amount_eth";--> statement-breakpoint
ALTER TABLE "agent_earnings" RENAME COLUMN "amount_sol" TO "amount_eth";--> statement-breakpoint
ALTER TABLE "wallets" RENAME COLUMN "total_pnl_sol" TO "total_pnl_eth";--> statement-breakpoint
ALTER TABLE "wallets" RENAME COLUMN "avg_position_sol" TO "avg_position_eth";
