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
| Domain | https://corvid-tau.vercel.app (production), https://corvid-testnet.vercel.app (alias) |
| Integrasi Git | Terhubung ke `CorvidProject/Corvid` (2026-11-05); push ke `main` men-deploy. Ignored Build Step project ini hanya membangun `main` |
| Env vars | `NEXT_PUBLIC_CHAIN_ENV` (testnet/mainnet), `NEXT_PUBLIC_TRADE_MODE` (dry), `NEXT_PUBLIC_USE_FIXTURES`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_API_URL` (setelah API ada), `NEXT_PUBLIC_SITE_URL`. Nilai `NEXT_PUBLIC_*` tertanam saat build: ubah lalu Redeploy |

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
| Skema | **Belum diterapkan.** Dilakukan pemilik dengan `DATABASE_URL` miliknya (lihat BLOCKERS) |

Nama env (tanpa nilai): backend `SUPABASE_URL`, `DATABASE_URL` (direct/session, bukan transaction pooler), opsional `SUPABASE_JWT_SECRET` (hanya project lama dengan HS256); frontend `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Service role key tidak dipakai di mana pun.

## Railway

Akun pemilik sudah ada dan CLI `railway` terlogin (dicek 2026-11-05). **Project belum dibuat** (menunggu perintah "siapkan testnet").

Rencana: satu project `corvid`, dua service dari repo yang sama (root = ROOT, bukan subfolder, karena workspace pnpm):

| Service | Config as code | Start | Health |
| --- | --- | --- | --- |
| `api` | `deploy/railway.api.json` | `pnpm --filter @corvid/api start` | `/health` |
| `worker` | `deploy/railway.worker.json` | `pnpm --filter @corvid/worker start` | (proses long-running, tanpa HTTP) |

Env vars (tanpa nilai; diisi pemilik di dashboard Railway, jangan di repo):

- `api`: `DATABASE_URL` (Supabase direct/session, bukan transaction pooler), `SUPABASE_URL`, `WEB_ORIGIN` (URL Vercel, tanpa slash akhir), `TRADE_MODE=dry`, `CHAIN_ENV=testnet`. `PORT` diisi Railway.
- `worker`: `DATABASE_URL`, `CHAIN_ENV=testnet`; opsional `WORKER_*_MS`, `MAINNET_RPC_URL` (RPC mainnet untuk Memescope; kosong = RPC publik), `PONS_GRADUATION_ETH`, `VIRTUALS_GRADUATION` (lihat `.env.example`).

Setelah API hidup: isi `NEXT_PUBLIC_API_URL` di Vercel, set `NEXT_PUBLIC_USE_FIXTURES=false`, Redeploy. Migrasi DB: `pnpm --filter @corvid/db migrate` dengan `DATABASE_URL` Supabase (dijalankan pemilik).
