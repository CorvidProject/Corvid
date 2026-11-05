# BLOCKERS

1. **Konfigurasi global (jalankan sendiri):**
   - `npm config set cache D:\.dev\npm-cache --global`
   - `setx PLAYWRIGHT_BROWSERS_PATH D:\.dev\playwright`
   - Pindahkan disk image Docker Desktop ke D: sebelum memakai Docker.
2. **Supabase:** project `Corvid` sudah dibuat pemilik (ref `qdlioftfvcoxxkqlkgqx`, 2026-11-05). Project lama `nexa-ai-*` milik proyek NEXA tidak dipakai. **Menunggu pemilik:** terapkan migrasi dan isi env (langkah di bawah).
3. **Railway:** `railway whoami` tidak menampilkan hasil; login ulang (`railway login`) sebelum "siapkan testnet".
4. **Email kontak, logo (PNG ≥512×512 transparan + favicon), domain:** belum diberikan. Pakai env `CONTACT_EMAIL` dan wordmark placeholder.
5. **Merek "Corvid" / ticker $CRVD:** cek merek, domain, dan ticker sebelum publik.
6. **terms/privacy:** perlu dibaca pihak hukum setelah nama entitas diganti.
7. **Placeholder yang perlu diganti** setelah data diberikan: `contact@corvid.example` (74 tempat di halaman docs/legal), `https://x.com/PLACEHOLDER`, `https://t.me/PLACEHOLDER`, nama entitas di terms/privacy, logo (`data-placeholder="logo"`), favicon, OG image. Pencarian: `grep -r "corvid.example\|PLACEHOLDER" apps/web/src`.
8. **Copy produk hasil crawl** masih menyebut konsep EVM yang tidak punya padanan Solana yang jelas (mis. "Uniswap v3 pool", "graduation ke ERC-20 / mint token agent"). Perlu keputusan produk sebelum copy final.
9. **Aset how-analyze/how-automate** (`apps/web/public/media`) berasal dari crawl lama dan mungkin menampilkan brand lama; ganti dengan aset Corvid.
10. **Fitur yang UI-nya belum dibuat:** `/application/admin`. (Detail token `/application/tokens/[mint]` sudah ada sejak 2026-11-05.) `NEXT_PUBLIC_API_URL` belum terhubung (Tahap 2).

- Avatar wallet (`/avatars/wallets/*.webp`) tidak ikut ter-crawl; dipakai placeholder SVG netral `public/avatars/wallets/placeholder.svg`. Kirim aset asli bila ada.

11. **Vercel ↔ GitHub: SELESAI** (2026-11-04). Project `corvid` tersambung ke `CorvidProject/Corvid`, Production Branch `main`, Root Directory `apps/web`. Push ke `main` otomatis men-deploy.
12. **Vercel Hobby:** project `corvid` ada di akun pribadi (`fauzanbayu123-1072s-projects`, sama dengan `nexa-ai-web`). Hobby melarang penggunaan komersial; pindahkan ke akun/tim Pro terpisah sebelum produksi berpenghasilan.
13. **Langkah pemilik untuk Supabase (jangan kirim password/key ke chat):**

    1. Dashboard Supabase > Connect: salin connection string **Session pooler** (IPv4, port 5432; direct connection hanya IPv6 di paket free). Jangan transaction pooler (port 6543).
    2. Isi `DATABASE_URL=` di `ROOT/.env` (file sudah dibuat, di-gitignore; ganti seluruh `[YOUR-PASSWORD]` termasuk kurungnya, URL-encode karakter khusus). Lalu terapkan skema:
       ```powershell
       # Jalankan di: ROOT
       pnpm --filter @corvid/db migrate
       ```
       `.env` dimuat otomatis oleh skrip `apps/api`, `apps/worker`, dan `drizzle.config.ts`. Jika error `ECONNREFUSED 127.0.0.1`, berarti `DATABASE_URL` masih kosong.
       Migrasi `0001_rls` otomatis memasang RLS dan FK ke `auth.users` karena schema `auth` ada di Supabase.
    3. Isi `ROOT/.env`: `DATABASE_URL`, `SUPABASE_URL=https://qdlioftfvcoxxkqlkgqx.supabase.co`. Isi `apps/web/.env.local`: `NEXT_PUBLIC_SUPABASE_URL` (sama), `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Project Settings > API Keys: kunci anon/publishable, **bukan** service role), `NEXT_PUBLIC_USE_FIXTURES=false`, `NEXT_PUBLIC_API_URL=http://localhost:8787`.
    4. Dashboard > Authentication: aktifkan Email; untuk uji lokal boleh matikan "Confirm email". Tambahkan `http://localhost:3000` dan `http://localhost:3217` ke URL Configuration > Redirect URLs.

14. **Migrasi baru untuk Supabase (pemilik):** setiap ada file baru di `packages/db/migrations`, jalankan lagi `pnpm --filter @corvid/db migrate` (di ROOT, `DATABASE_URL` di `ROOT/.env`). Saat ini ada migrasi `0002_agent_builder` yang belum diterapkan ke Supabase (dibutuhkan untuk membuat agent).

- [ ] Supabase Auth → Providers: aktifkan **Web3 Wallet (Ethereum)** agar login wallet berfungsi; pastikan `NEXT_PUBLIC_CHAIN_ENV=testnet` di `apps/web/.env.local` (parameter chain sudah di `packages/shared/src/chains.ts`). Uji manual dengan wallet asli belum dilakukan.

- [x] **Login wallet berfungsi** (dikonfirmasi pemilik, 2026-11-05): provider Web3 Wallet di Supabase aktif. Uji My lists dengan sesi nyata masih perlu dijalankan manual; pastikan migrasi terbaru sudah diterapkan (`pnpm --filter @corvid/db migrate`).

15. **Migrasi `0004_agent_marketplace` untuk Supabase (pemilik):** jalankan `pnpm --filter @corvid/db migrate` di ROOT (menambah `agents.description` dan `published_at`; dibutuhkan marketplace).
16. **Penyedia LLM untuk chat (keputusan pemilik):** kunci Anthropic pemilik TIDAK dipakai (arahan pemilik). Chat tetap menjawab "Chat is not available yet" sampai penyedia dipilih dan env diisi (`.env.example`, bagian Chat). Opsi: (a) Ollama lokal gratis untuk pengembangan (`LLM_BASE_URL=http://localhost:11434/v1`, `LLM_MODEL=<model>`); (b) penyedia kompatibel OpenAI berkunci milik proyek/head dev (OpenRouter, Groq, dll.); (c) akun Anthropic proyek terpisah. Apa pun pilihannya: pasang batas pengeluaran bulanan di penyedia, kunci hanya di Railway, dan batasi pembuatan akun (kredit gratis = biaya nyata).
17. **Proses postgres uji yatim:** `postgres.exe` PID 33052 (embedded-postgres proyek, induknya mati) menahan port 54333 sehingga `apps/worker/test/wallets.test.ts` gagal dan hook `pre-push` akan memblokir push. Hentikan dari PowerShell Anda: `Stop-Process -Id 33052 -Force`, lalu jalankan ulang tes.
