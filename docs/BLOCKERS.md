# BLOCKERS

1. **Konfigurasi global (jalankan sendiri):**
   - `npm config set cache D:\.dev\npm-cache --global`
   - `setx PLAYWRIGHT_BROWSERS_PATH D:\.dev\playwright`
   - Pindahkan disk image Docker Desktop ke D: sebelum memakai Docker.
2. **Supabase:** project `Corvid` sudah dibuat pemilik (ref `qdlioftfvcoxxkqlkgqx`, 2026-11-05). Project lama `nexa-ai-*` milik proyek NEXA tidak dipakai. **Menunggu pemilik:** terapkan migrasi dan isi env (langkah di bawah).
3. **Railway: SELESAI** (2026-11-06). CLI terlogin; project `Corvid` dengan service `@corvid/api` dan `@corvid/worker` sudah hidup (lihat `docs/infrastructure.md`).
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
16. **Penyedia LLM untuk chat: Xiaomi MiMo (dipilih pemilik, 2026-11-06).** Pakai mode OpenAI-compatible. Isi `ROOT/.env` sendiri (jangan kirim kunci ke chat):
    ```
    LLM_BASE_URL=https://token-plan-sgp.xiaomimimo.com/v1
    LLM_API_KEY=<kunci dari dashboard MiMo>
    LLM_MODEL=mimo-v2.6-flash
    ```
    Model chat yang tersedia di paket: `mimo-v2.6-pro` (lebih kuat) dan `mimo-v2.6-flash` (lebih cepat/murah); model `asr`/`tts` adalah suara dan tidak dipakai chat. Cek koneksi: `pnpm --filter @corvid/api llm:check` (di ROOT; hanya mencetak status). Untuk testnet isi variabel yang sama di Railway. Endpoint `/anthropic` milik MiMo tidak dipakai (adapter Anthropic kita menunjuk ke api.anthropic.com). Catatan privasi: pesan chat beserta data token/wallet yang ikut dikirim sebagai konteks diproses penyedia ini (server Singapura); sebutkan di privacy policy dan minta pihak hukum membacanya (no. 6).
17. **Proses postgres uji yatim:** `postgres.exe` PID 33052 (embedded-postgres proyek, induknya mati) menahan port 54333 sehingga `apps/worker/test/wallets.test.ts` gagal dan hook `pre-push` akan memblokir push. Hentikan dari PowerShell Anda: `Stop-Process -Id 33052 -Force`, lalu jalankan ulang tes.

## Testnet (2026-11-06): yang menunggu pemilik
18. **Merge PR #1 `main` -> `testnet`:** semua check hijau (Railway api/worker, Vercel), status CLEAN. Merge ditolak pengaman otomatis saat saya coba, jadi lakukan sendiri: `gh pr merge 1 --merge` di ROOT, atau tombol Merge di https://github.com/CorvidProject/Corvid/pull/1. Setelah merge, Vercel membangun preview branch `testnet` di https://corvid-git-testnet-fauzanbayu123-1072s-projects.vercel.app (variabel Preview dan `NEXT_PUBLIC_API_URL` branch testnet sudah dipasang; CORS API sudah mengizinkan origin itu).
19. **Supabase Auth > URL Configuration:** tambahkan https://corvid-tau.vercel.app dan URL branch testnet di atas ke Redirect URLs (dan Site URL bila perlu), agar login dari situs yang di-deploy berfungsi.
20. **Kunci chat LLM di Railway** (rahasia, no. 16): pasang `LLM_BASE_URL`, `LLM_API_KEY`, `LLM_MODEL` pada service `@corvid/api`. Sebelum itu chat di situs menjawab "Chat is not available yet". Pastikan paket MiMo boleh dipakai sebagai backend aplikasi.
21. **RPC berkunci (opsional tapi disarankan):** `RPC_URL` dan `MAINNET_RPC_URL` memakai RPC publik yang dibatasi laju (log worker menunjukkan "RPC HTTP 429" pada launchpad Pons). Isi RPC Alchemy milik proyek di Railway.
22. **Alias `corvid-testnet.vercel.app` tidak tersedia** (sudah dimiliki proyek lain). Bila ingin nama pendek, tentukan nama lain atau domain sendiri.
23. **Faucet testnet:** belum diverifikasi. Wallet uji butuh ETH testnet untuk estimasi gas simulasi swap.

## Testnet (2026-11-06, sore): hasil setelah PR #1 digabung
24. **Branch `testnet` tidak dibangun Vercel.** Ignored Build Step proyek `corvid` berbunyi `test "$VERCEL_GIT_COMMIT_REF" != "main"`, sehingga semua branch selain main dilewati (merge PR #1 ke testnet tidak menghasilkan deployment). Perubahan lewat API ditolak pengaman; ubah di dashboard: Vercel > corvid > Settings > Git > Ignored Build Step > Override, isi `test "$VERCEL_GIT_COMMIT_REF" != "main" && test "$VERCEL_GIT_COMMIT_REF" != "testnet"`. Lalu picu build: Deployments > deployment testnet yang berstatus Canceled/Skipped > Redeploy (atau push commit kecil ke testnet).
25. **Deployment Protection (SSO) aktif untuk preview** (`all_except_custom_domains`): URL branch testnet meminta login Vercel (302) dan tidak bisa dibuka orang lain. Keputusan pemilik: matikan di Settings > Deployment Protection (testnet publik) atau tetap aktif (hanya akun Vercel Anda/tim yang bisa membuka; head dev harus diundang ke tim atau diberi Protection Bypass).
26. Variabel LLM (`LLM_BASE_URL`, `LLM_API_KEY`, `LLM_MODEL`) sudah terpasang di Railway `@corvid/api` (nama terverifikasi 2026-11-06). Uji jawaban chat nyata perlu sesi login; belum dijalankan.

## Keputusan pemilik 2026-11-06: testnet = `main`
27. **Tidak perlu lagi:** no. 24 (Ignored Build Step untuk branch testnet) dan no. 25 (proteksi preview). Frontend testnet cukup situs production dari `main` (https://corvid-tau.vercel.app, domain production tidak diminta login). Biarkan Ignored Build Step apa adanya. Branch `testnet` dan PR #1 dibiarkan (tidak dihapus), tidak dipakai deploy.

- [x] **No. 19 selesai** (pemilik, 2026-11-06): Redirect URLs Supabase untuk https://corvid-tau.vercel.app sudah ditambahkan.

24b. **Railway `@corvid/api`: pasang `TRUST_PROXY_HOPS=1`** (pemilik/lewat dashboard). Tanpa ini API melihat semua pengguna dari IP proxy Railway yang sama, sehingga batas "5 kredit selamat datang per IP per 24 jam" akan menghitung semua orang sebagai satu IP. Opsional: `CHAT_DAILY_CAP` (bawaan 3000 jawaban/24 jam untuk semua pengguna, pengaman tagihan LLM).
24c. **Tes lengkap perlu dijalankan ulang** saat memori Windows lega: pada 2026-11-06 RAM bebas hanya 0,2 GB sehingga vitest gagal (spawn UNKNOWN, heap out of memory). Tes pembatas tanpa DB lulus; tes chat/pembatasan (apps/api/test/chats.test.ts) belum terbukti.
