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

## Supabase, Railway

Belum dibuat. Dibuat saat "siapkan testnet".
