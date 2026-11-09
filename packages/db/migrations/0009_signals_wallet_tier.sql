-- Add wallet_tier to signals so smart money tier (S/A) is queryable without joining wallets.
alter table signals add column if not exists wallet_tier text
  constraint signals_wallet_tier_chk check (wallet_tier is null or wallet_tier in ('S','A','B','C'));
