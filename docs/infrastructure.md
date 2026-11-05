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

## Testnet (aktif)

| Lapisan | Lokasi |
| --- | --- |
| Frontend | Vercel, branch `testnet` (preview, memakai env Preview) |
| Backend | Railway `Corvid` (satu lingkungan, `CHAIN_ENV=testnet`) |
| Database | Supabase `Corvid` |
| Chain | Robinhood Chain testnet (46630) untuk wallet; data pasar dari mainnet (hanya baca) |

Alur: commit kecil ke `main`, PR `main` -> `testnet`. Catatan: Railway mengikuti `main`, bukan `testnet`, sehingga backend ter-deploy begitu `main` didorong; frontend testnet baru berubah setelah PR digabung. Untuk memisahkannya, ubah Source > Branch kedua service Railway ke `testnet` di dashboard (opsional).

Setelah API hidup di Vercel, `NEXT_PUBLIC_*` tertanam saat build: ubah variabel lalu Redeploy.
