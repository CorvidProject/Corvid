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
| Integrasi Git | **Belum.** Deploy manual dari lokal (lihat di bawah) |
| Env vars | Belum ada. Nanti: `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_USE_FIXTURES` |

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

Belum dibuat. Dibuat saat "siapkan testnet".
