# Infrastructure

Env vars (tanpa nilai): lihat `.env.example`.

## Vercel (frontend) — dibuat 2026-11-04

| Item | Nilai |
| --- | --- |
| Akun / scope | `fauzanbayu123-1072s-projects` |
| Project | `corvid` (`prj_F79KjBOUPwVCfwKb5xodEh8dcOna`) |
| Root Directory | `apps/web` (file di luar root ikut di-upload, untuk lockfile pnpm) |
| Framework / Node | Next.js / 22.x |
| Install / Build | `pnpm install --frozen-lockfile` / `pnpm build` |
| Domain | https://corvid-tau.vercel.app (production, branch `main`); testnet: https://corvid-git-testnet-fauzanbayu123-1072s-projects.vercel.app (URL branch otomatis). Alias `corvid-testnet.vercel.app` tidak bisa dipakai: sudah dimiliki proyek lain (409, 2026-11-06) |
| Integrasi Git | Terhubung ke `CorvidProject/Corvid` (2026-11-05); push ke `main` men-deploy. Ignored Build Step project ini hanya membangun `main` |
| Env vars (nilai tidak dicatat) | Production dan Preview: `NEXT_PUBLIC_CHAIN_ENV`, `NEXT_PUBLIC_TRADE_MODE` (dry), `NEXT_PUBLIC_USE_FIXTURES` (false), `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`. `NEXT_PUBLIC_API_URL`: Production dan Preview khusus branch `testnet` (URL publik API Railway). `NEXT_PUBLIC_RPC_URL` hanya Production (opsional). Daftar umum: `NEXT_PUBLIC_CHAIN_ENV` (testnet/mainnet), `NEXT_PUBLIC_TRADE_MODE` (dry), `NEXT_PUBLIC_USE_FIXTURES`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_API_URL` (setelah API ada), `NEXT_PUBLIC_SITE_URL`. Nilai `NEXT_PUBLIC_*` tertanam saat build: ubah lalu Redeploy |

Deploy ulang dari lokal:

```powershell
# Jalankan di: ROOT
vercel deploy --prod --yes
```

`.vercelignore` di ROOT membuang `/legacy`, `/docs`, `/.claude`, `/.githooks` dari upload. Pola wajib diawali `/`; tanpa itu `docs` ikut membuang `apps/web/src/app/docs`.

## Supabase — dibuat 2026-11-05 (oleh pemilik, lewat dashboard)

| Item | Nilai |
| --- | --- |
| Organisasi / project | `Corvid` (free) / `Corvid` |
| Project ref / URL | `qdlioftfvcoxxkqlkgqx` / https://qdlioftfvcoxxkqlkgqx.supabase.co |
| Region | West US (North California), dipilih pemilik karena pasar utama di US |
| Data API | Aktif; **Automatically expose new tables: mati**; **Enable automatic RLS: aktif** |
| Integrasi GitHub Supabase | Tidak dipakai (migrasi memakai Drizzle di `packages/db/migrations`) |
| Skema | Diterapkan oleh pemilik (migrasi `0000`-`0004` terpasang; `0004` terbukti lewat `/api/marketplace/feed` di Railway, 2026-11-06). Migrasi baru: `pnpm --filter @corvid/db migrate` |

Nama env (tanpa nilai): backend `SUPABASE_URL`, `DATABASE_URL` (direct/session, bukan transaction pooler), opsional `SUPABASE_JWT_SECRET` (hanya project lama dengan HS256); frontend `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Service role key tidak dipakai di mana pun.

## Railway — dibuat oleh pemilik 2026-11-05

| Item | Nilai |
| --- | --- |
| Akun / workspace | `Bayu Samudra's Projects` |
| Project / environment | `Corvid` / `production` (nama lingkungan netral; chain ditentukan `CHAIN_ENV`, bukan nama environment) |
| Service | `@corvid/api` dan `@corvid/worker`, dari repo `CorvidProject/Corvid`, branch `main` (deploy otomatis tiap push) |
| API publik | https://corvidapi-production.up.railway.app (`/health` untuk cek) |
| Config as code | `deploy/railway.api.json`, `deploy/railway.worker.json` (start: `pnpm --filter @corvid/api start` / `@corvid/worker`) |

Env vars yang terpasang (nama saja):

- `@corvid/api`: `DATABASE_URL` (Supabase session pooler), `SUPABASE_URL`, `WEB_ORIGIN` (daftar origin dipisah koma: production dan URL branch testnet Vercel, tanpa slash akhir), `TRADE_MODE=dry`, `CHAIN_ENV=testnet`, `RPC_URL`. `PORT` diisi Railway.
- `@corvid/worker`: `DATABASE_URL`, `CHAIN_ENV=testnet`, `RPC_URL`; opsional `WORKER_*_MS`, `MAINNET_RPC_URL`, `PONS_GRADUATION_ETH`, `VIRTUALS_GRADUATION`.
- **Belum dipasang (menunggu pemilik, rahasia):** chat LLM di `@corvid/api`: `LLM_BASE_URL`, `LLM_API_KEY`, `LLM_MODEL` (lihat BLOCKERS no. 16).

Cara pasang variabel rahasia (jangan lewat chat/repo): dashboard Railway > project Corvid > service `@corvid/api` > Variables > New Variable (atau Raw Editor). Railway otomatis deploy ulang.

Cek cepat dari terminal (hanya nama variabel): `railway variables -s "@corvid/api" --kv` lalu hapus bagian nilai. Log: `railway logs -s "@corvid/worker" --lines 50`.

## Testnet (aktif) dan jalur ke mainnet

Keputusan pemilik 2026-11-06: **tidak ada deploy terpisah untuk testnet**. Satu lingkungan berjalan dari branch `main`, dan chain ditentukan variabel env. Branch `testnet`/`mainnet` di GitHub tidak dipakai deploy.

| Lapisan | Lokasi | Penentu chain |
| --- | --- | --- |
| Frontend | Vercel production, branch `main`: https://corvid-tau.vercel.app | `NEXT_PUBLIC_CHAIN_ENV` (dibaca saat build) |
| Backend | Railway `Corvid` (`@corvid/api`, `@corvid/worker`), branch `main` | `CHAIN_ENV`, `RPC_URL` |
| Database | Supabase `Corvid` | (data uji dibersihkan saat mainnet) |
| Chain | Robinhood Chain testnet (46630) untuk wallet; data pasar dari mainnet (hanya baca) | |

**Pindah ke mainnet = ganti env, bukan kode** (lalu testnet tidak dihidupkan lagi):
1. Backup database ke `D:\.devackups`; **minta konfirmasi eksplisit pemilik**, lalu bersihkan data uji (user, wallet, sinyal, chat), skema dipertahankan.
2. Railway, kedua service: `CHAIN_ENV=mainnet`, `RPC_URL` = RPC mainnet berkunci (Alchemy). `TRADE_MODE` tetap `dry`.
3. Vercel Production: `NEXT_PUBLIC_CHAIN_ENV=mainnet` (tombol Testnet di Portfolio hilang otomatis), `NEXT_PUBLIC_RPC_URL` bila dipakai. Redeploy karena nilai `NEXT_PUBLIC_*` tertanam saat build.
4. Rotasi semua kunci uji; verifikasi (beranda, 3 layar app, docs, legal, login wallet di chain 4663); catat di dokumen ini.

Konsekuensi memilih satu lingkungan: tidak ada staging terpisah. Setiap push ke `main` langsung tampil di situs dan di backend; uji lewat `pnpm dev` dan hook `pre-push` sebelum push.

## Pembayaran USDG (env, nilai tidak dicatat)
Railway `@corvid/api`: `PAID_FEATURES_ENABLED`, `PAYMENT_RECIPIENT` (alamat publik), `PAYMENT_TOKEN_ADDRESS` (tUSDG di testnet; kosong di mainnet = USDG resmi), `PAYMENT_TOKEN_DECIMALS` (6), `PAYMENT_CONFIRMATIONS` (2), `CHAIN_ENV`, `RPC_URL`. Tidak ada private key di server: wallet pengguna menandatangani sendiri, server hanya membaca receipt lewat RPC.

## Status mainnet (2026-11-06)
- Backup DB sebelum pindah: `D:\.dev\backups\corvid-db-2026-11-06T14-15-47-779Z` (di luar repo).
- Data uji pengguna dibersihkan (profil, agent, run, chat, signal, swap, wallet pengguna, kredit, pesanan bayar, log). Data ingest pasar dipertahankan (sudah dari mainnet). Akun uji di Supabase Auth tidak dihapus lewat SQL; hapus manual di dashboard bila perlu.
- Railway `@corvid/api` dan `@corvid/worker`: `CHAIN_ENV=mainnet`, `RPC_URL` = Alchemy mainnet. `PAYMENT_TOKEN_ADDRESS` (tUSDG) dihapus, sehingga pembayaran memakai USDG resmi mainnet.
- Vercel Production: `NEXT_PUBLIC_CHAIN_ENV=mainnet`, `NEXT_PUBLIC_RPC_URL` = Alchemy mainnet. Redeploy sudah dijalankan.
- `TRADE_MODE=live` (API) dan `NEXT_PUBLIC_TRADE_MODE=live` (web) diaktifkan atas perintah pemilik pada 2026-11-06. Live = swap Uniswap v3 lewat dompet pengguna sendiri (pengguna menandatangani); server tidak memegang private key. Worker/agent tetap simulasi (`dry`): belum ada penyimpanan kunci untuk transaksi otonom.
- Harga ETH: CoinGecko, cadangan GeckoTerminal (CoinGecko menolak IP Railway).

## Notifikasi Telegram (ditambahkan 2026-11-07)
- Pemilik membuat bot lewat `@BotFather`. **Token bot hanya di service worker** (`TELEGRAM_BOT_TOKEN`, Railway); jangan masuk repo/log/API.
- Service API: `TELEGRAM_BOT_USERNAME` (username bot tanpa `@`, bukan rahasia) untuk tautan "Connect Telegram". Kosong = Settings menampilkan "not available" dan `POST /api/user/telegram/link` menjawab 503.
- Worker memakai polling `getUpdates` (tanpa webhook). Jalankan **satu** instance worker dengan token yang sama (dua proses polling bot yang sama saling berebut pesan).
- Migrasi `0007_telegram_link` (tabel `telegram_link_codes`, indeks unik `profiles.telegram_chat_id`) harus diterapkan sebelum worker/API baru.
- Alur: Settings → Connect Telegram → kode 8 karakter (10 menit, hanya hash tersimpan) → kirim ke bot / tombol "Open Telegram" → chat id tersimpan. `/stop` di bot atau "Disconnect" memutus.
- Pengiriman: agent dengan `config.telegram = "true"` (toggle builder) mengirim ringkasan ke pemilik saat run lolos; maksimal 20 pesan/jam/pengguna; teks polos. Persetujuan trade lewat Telegram belum ada.
