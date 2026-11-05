# Analisis database (Tahap 2a)

Sumber: `legacy/be/db/schema.sql` (titik awal), fixture di `packages/api-client/fixtures/` dan `apps/web/src/server/data/` (bentuk response yang dibaca UI), kebutuhan CLAUDE.md bagian 6.
Catatan: field diambil dari bentuk response fixture. Daftar endpoint diverifikasi dengan pencarian path `/api/*` di chunk klien lama (`legacy/_next/static/chunks`, grep lokal, bukan REA penuh; REA terlalu lambat untuk selisih sekecil ini). Verifikasi field per halaman lewat REA tetap opsional.

## 1. Temuan skema lama

| Temuan | Tindakan |
| --- | --- |
| `chain_t` berisi `ethereum`, `base` | Enum hanya `solana` (kolom `chain` dibuang dari tabel; Solana-only) |
| `tokens.buy_tax_pct`, `sell_tax_pct` (konsep EVM) | Diganti `transfer_fee_bps` (Token-2022), nullable |
| Tidak ada kolom keamanan yang dikirim API (`devWallet`, `sniperHoldingsPercent`, `bundlerHoldingsPercent`, `insidersPercent`, `insidersCount`, `bundlersCount`, `bundlersInitialPercent`, `snipersCount`, `jitoFees`, `jupiterVerified`, `poolId`, `creatorAddress`, buy/sell volume, buyers/sellers) | Tabel `token_security_metrics` (1:1 dengan `tokens`) |
| `freeze_authority`, `mint_authority` bertipe TEXT | Tetap TEXT nullable (null = revoked) |
| `change1m` ada di response, tidak di tabel | Tambah `change_1m_pct` |
| Tidak ada candle untuk `/tokens/:mint/chart` | Tabel `token_candles` (OHLCV, partisi per bulan atau retensi singkat) |
| `wallets.chain`, `curated_*` | `chain` dibuang; `curated_tier` jadi `CHAR(1)` dengan CHECK (`S`,`A`,`B`,`C`) |
| `agents.owner_wallet_id` mengacu ke `wallets` (wallet publik) | Diganti `owner_id` ke `profiles` |
| Tidak ada tabel user, wallet kustodian, watchlist, chat, signal, inbox, knowledge/persona/social agent, langganan, backtest, kredit, prefs, snapshot portfolio, login log, burn | Ditambah (bagian 3) |
| Data seed `curated-wallets.json` berisi 7 alamat `0x…` dan PnL ETH | **Tidak dipakai.** Seed dibuat ulang dari alamat Solana (fixture `leaderboard-wallets.json` / `alpha-curated.json`) atau dikosongkan |
| `seed.sql` memuat 9 baris `0x` | Seed lama tidak dimuat; seed baru dibuat dari nol |
| Semua tabel tanpa RLS | RLS aktif untuk tabel milik user (bagian 5) |

## 2. Kebutuhan per endpoint

| Endpoint | Tabel |
| --- | --- |
| `/stats` | `platform_stats` (rollup, diperbarui job) |
| `/tokens/trending`, `/tokens/live-batch`, `/search` | `tokens`, `token_trending` |
| `/tokens/:mint` (+ `/live`, `/quick`) | `tokens`, `token_security_metrics` |
| `/tokens/:mint/security` | `token_security_reports` → `groups` → `checks` |
| `/tokens/:mint/trades` | `token_trades` (retensi) |
| `/tokens/:mint/chart` | `token_candles` (retensi) |
| `/tokens/:mint/chat`, `/chats` | `chats`, `chat_messages` |
| `/solana/memescope` | `memescope_coins` (retensi) |
| `/prices/sol` | cache memori; tabel tidak perlu |
| `/tokenomics/summary`, `/corvid/token` | `burn_events`, konfigurasi (status `not_launched`) |
| `/alpha/curated`, `/alpha/dev-wallets`, `/alpha/activity` | `wallets`, `wallet_activity` |
| `/alpha/watchlists` | `watchlists`, `watchlist_wallets` |
| `/alpha/token-signal`, `/signals` | `signals` |
| `/auth/*`, `/profile`, `/profile/activity` | `profiles`, `login_log`, `credits` |
| `/user/trading-prefs` | `trading_prefs` |
| `/wallets*`, `/trade/*`, `/broadcast` | `user_wallets`, `swaps` (mode `dry`: simpan hasil simulasi) |
| `/portfolio/*` | `portfolio_snapshots`, `swaps` |
| `/agents*`, `/marketplace/feed`, `/public/live-agent` | `agents`, `agent_runs`, `agent_run_steps`, `agent_knowledge`, `agent_social_config`, `agent_backtests`, `subscriptions` |
| Inbox UI | `notifications` |

## 2b. Endpoint tambahan dari chunk klien (tidak ada di daftar CLAUDE.md)

| Endpoint | Kebutuhan data |
| --- | --- |
| `/wallets/chain-balances`, `/trade/quote` | tanpa tabel; Solana saja (RPC/Jupiter). `chain-balances` dipersempit ke satu chain |
| `/alpha/smart-money-by-mint` | query `wallet_activity` per mint |
| `/agents/following`, `/agents/feeds` | `subscriptions`, `agent_runs` |
| `/agents/:id/avatar`, `/profile/avatar`, `/profile/banner` | kolom `avatar_url`, `banner_url` (Supabase Storage atau placeholder) |
| `/agents/:id/withdraw-earnings` | `agent_earnings` (agent_id, amount, withdrawn_at); tertutup oleh `PAID_FEATURES_ENABLED=false` |
| `/profile/telegram-bot`, `/auth/telegram/unlink` | kolom `telegram_chat_id` di `profiles` |
| `/chats/feedback` | `chat_feedback` (message_id, rating) |
| `/portfolio/transfer`, `/portfolio/positions` | `swaps`/`portfolio_snapshots`; transfer ikut `TRADE_MODE=dry` |
| `/apevisor/burns` | menjadi `/corvid/burns`, tabel `burn_events` |

Semua nama `apevisor` di path diganti `corvid`.

## 3. Daftar tabel final

**Pasar (publik, tulis oleh worker, baca publik):**
`tokens`, `token_security_metrics`, `token_security_reports`/`_groups`/`_checks`, `token_trending` (tab: trending/new, rank, snapshot), `token_trades`, `token_candles`, `memescope_coins`, `platform_stats`.

**Alpha:** `wallets` (curated), `wallet_activity`, `watchlists`, `watchlist_wallets`, `signals`.

**Pengguna (RLS):**
- `profiles` (id = `auth.users.id`, display_name, plan, twitter_handle)
- `user_wallets` (profile_id, address, kind `custodial|external`, `encrypted_key` + `key_ref` hanya untuk kustodian, label, created_at)
- `trading_prefs` (profile_id PK, slippage_bps, priority_fee_lamports, mode default `dry`)
- `credits` (ledger: profile_id, delta, reason, created_at; saldo = SUM)
- `login_log` (profile_id, ip_hash, user_agent, at)
- `notifications` (profile_id, kind, title, body, read, at)
- `chats`, `chat_messages` (profile_id, token_mint opsional)
- `portfolio_snapshots` (profile_id, at, total_usd, positions jsonb)
- `subscriptions` (profile_id, agent_id, status)

**Agent:** `agents` (owner_id, type, running, published, floor, conviction, token_mint, persona), `agent_runs`, `agent_run_steps`, `agent_knowledge`, `agent_social_config` (kunci Twitter terenkripsi), `agent_backtests`.

**Eksekusi:** `swaps` (agent_id, user_wallet_id, token_id, side, amount_usd, tx_hash, `mode` `dry|live`, `report` jsonb).

**Tambahan:** `agent_earnings`, `chat_feedback`.

**Token $CRVD:** `burn_events` (tx_hash, amount, at). Kosong sampai token diluncurkan.

Tipe: harga/uang `NUMERIC` dengan skala eksplisit, waktu `TIMESTAMPTZ` UTC, id `BIGINT` identity; id user `UUID` dari Supabase Auth. Alamat Solana base58 `TEXT` dengan CHECK panjang 32–44.

## 4. Indeks utama
- `tokens`: unik `mint`; `market_cap_usd DESC`, `volume_usd DESC`, `created_at DESC`.
- `token_trending`: `(tab, rank)`.
- `token_trades`: `(token_id, traded_at DESC)`, unik `tx_hash`.
- `token_candles`: PK `(token_id, interval, bucket_start)`.
- `memescope_coins`: `(stage, last_trade_at DESC)`.
- `wallets`: `(curated_tier, total_pnl_sol DESC)`.
- `agent_runs`: `(agent_id, ran_at DESC)`.
- `notifications`: `(profile_id, at DESC)`; `chat_messages`: `(chat_id, id)`.

## 5. Kebijakan RLS
- Tabel pengguna (`profiles`, `user_wallets`, `trading_prefs`, `credits`, `login_log`, `notifications`, `chats`, `chat_messages`, `portfolio_snapshots`, `subscriptions`, `agents` milik sendiri, `agent_*`, `watchlists`): `auth.uid() = profile_id` (atau `owner_id`) untuk SELECT/INSERT/UPDATE/DELETE.
- `agents` dengan `published = true`: SELECT publik (marketplace).
- `user_wallets.encrypted_key` tidak pernah dikembalikan lewat kolom yang bisa dibaca klien: backend memakai koneksi langsung (bukan PostgREST), kolom dipisah ke tabel `user_wallet_secrets` tanpa policy untuk role `anon`/`authenticated`.
- Tabel pasar: SELECT publik; INSERT/UPDATE hanya role backend/worker.
- Service role key tidak dipakai backend (CLAUDE.md bagian 4). Backend dan worker memakai role Postgres khusus lewat direct/session connection.

## 6. Retensi dan perkiraan ukuran (Supabase free 500 MB)

| Tabel | Retensi | Perkiraan |
| --- | --- | --- |
| `token_trades` | 48 jam, maks 500 baris/token untuk token aktif | ≤ 120 MB |
| `token_candles` | 1m: 24 jam; 5m: 7 hari; 1h: 30 hari | ≤ 100 MB |
| `memescope_coins` | 7 hari sejak aktivitas terakhir | ≤ 20 MB |
| `token_trending` | simpan snapshot terbaru + 24 jam | ≤ 10 MB |
| `tokens` | hanya token yang pernah ditampilkan/dicari, buang yang tidak disentuh 30 hari | ≤ 60 MB |
| `swaps`, `agent_runs`, `agent_run_steps` | `agent_run_steps` 30 hari | ≤ 80 MB |
| Tabel pengguna | tidak dibuang | kecil di fase uji |

Total target ≈ 400 MB di bawah batas. Job `pg_cron` (atau worker terjadwal) menjalankan pembersihan tiap jam; ukuran dipantau lewat `pg_total_relation_size` dan dicatat di `infrastructure.md`.

## 7. Langkah berikutnya
1. Jalankan REA pada subset chunk `app/application/*/page-*.js` (keluaran ke `D:\.dev\tmp`) untuk memastikan field yang benar-benar dibaca UI; koreksi daftar kolom jika ada selisih.
2. Tulis skema Drizzle di `packages/db` dan migrasi pertama (pasar + pengguna).
3. Seed Solana-only dari fixture; Fastify + zod + `openapi.json` dimulai dari `/stats` dan `/tokens/*`.
