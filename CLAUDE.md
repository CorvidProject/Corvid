# PROMPT: CORVID (rebrand dari Apevisor) · Next.js + Railway + Supabase + Vercel

Kamu adalah **lead engineer** proyek **Corvid** (slug: `corvid`). Folder tempat Claude Code dijalankan adalah root proyek (`ROOT` = `D:\.PROJECT\corvid`). Semua perintah bash wajib diberi komentar direktori, contoh: `# Jalankan di: ROOT/apps/web`.

**Sumber kebenaran:** `docs/REBRAND-BRIEF.md` (brief dari head dev) dan file ini. Jika berbeda, **ikuti brief**, catat perbedaannya di `docs/DECISIONS.md`, lalu lanjutkan. Pilihan teknis yang tidak disebut brief ditandai **[di luar brief]** dan boleh diganti oleh tim (catat di `DECISIONS.md`).

Langsung mulai setelah saya mengetik **"Mulai"**.

---

## 1. Latar dan lingkup

- Isi `ROOT` adalah **hasil crawl apevisor.tech** (build Next.js ter-compile, 44 halaman HTML, `server.js`, `be/mock-api.js`). **Apevisor adalah brand milik pemberi project/saya sendiri**, jadi frontend ini boleh dipakai ulang.
- Tugas: (1) **frontend Next.js sungguhan** dari HTML yang ada, dengan brand Corvid dan palet baru; (2) **backend + database** menggantikan mock; (3) deploy bertahap testnet → mainnet.
- Jangan menambah fitur produk yang tidak ada di HTML/brief. Jangan menyalin brand atau aset pihak lain.

### Identitas brand (Fase 0 brief, terisi)

| Field | Nilai |
| --- | --- |
| Nama | **Corvid** |
| Tagline | *Agents that watch smart money, read the risk, then trade from your wallet.* |
| Positioning (draf, dipakai di hero + meta) | "Corvid adalah agent AI yang mengamati dompet smart money, membaca risiko token sebelum Anda masuk, lalu bertransaksi dari wallet Anda sendiri. Pasar dibaca terus-menerus, setiap keputusan bisa diperiksa." |
| Token | Ya: ticker **$CRVD**, tokenName `Corvid` |
| Font display | Pertahankan Bricolage Grotesque (skin swap, bukan redesign) |
| Domain | Subdomain Railway/Vercel untuk v1. Placeholder env `NEXT_PUBLIC_SITE_URL` |
| Email kontak | **BELUM DIBERIKAN.** Pakai env `CONTACT_EMAIL`, catat di `BLOCKERS.md` |
| Logo | **BELUM DIBERIKAN.** Pakai wordmark teks "Corvid" bertanda `PLACEHOLDER`; jangan membuat logo grafis sendiri. Perlu: PNG persegi ≥512×512 transparan + versi favicon |

Catatan: "Corvid" nama umum. Tandai di `BLOCKERS.md` agar saya cek merek, domain, dan ticker `$CRVD` sebelum token dipakai publik.

---

## 2. Penyimpanan: SEMUA di drive D:

Drive C: penuh. **Jangan menaruh apa pun yang besar di C:.** Proyek ada di `D:\.PROJECT\corvid`; cache dan data alat di `D:\.dev\`.

| Item | Lokasi |
| --- | --- |
| pnpm store | `D:\.dev\pnpm-store` (`store-dir` di `ROOT/.npmrc`) |
| npm cache | `D:\.dev\npm-cache` |
| Browser Playwright | `D:\.dev\playwright` (`PLAYWRIGHT_BROWSERS_PATH`) |
| Cache build Next.js / Turborepo | di dalam `ROOT` |
| Backup database | `D:\.dev\backups` |
| File sementara / hasil analisis / unduhan | `D:\.dev\tmp` |
| REA | `D:\.dev\rea` (sudah dipindah) |

- Perubahan konfigurasi **global** (misalnya `npm config set cache D:\.dev\npm-cache --global`, variabel `TEMP`, lokasi disk image Docker Desktop) **tidak dijalankan Claude**: tulis perintah lengkapnya di `docs/BLOCKERS.md` agar saya jalankan sendiri.
- Docker opsional. Jika dipakai, disk image harus dipindah ke D: dulu. Alternatif untuk pengembangan lokal: Postgres embedded di `D:\.dev\` atau langsung ke Supabase.
- Sebelum memasang/mengunduh sesuatu yang besar, arahkan lokasinya ke D:.

---

## 3. Stack dan struktur

| Bagian | Pilihan |
| --- | --- |
| Frontend | **Next.js** (App Router) + TypeScript + Tailwind, di Vercel |
| Backend API | Fastify + zod + OpenAPI, di Railway **[di luar brief]** |
| Worker / ingest | Proses long-running di Railway (bukan serverless) |
| Database + Auth | **Supabase** (Postgres, Supabase Auth), migrasi Drizzle **[di luar brief]** |
| Monorepo | pnpm workspaces + Turborepo **[di luar brief]** |
| Test | Vitest, Playwright (screenshot) |
| REA | `rea-agents@6.8.0` di `D:\.dev\rea` untuk memetakan endpoint/halaman (lihat 8) |

```
ROOT/
├── CLAUDE.md
├── .claude/ (settings.json, skills/, agents/)
├── apps/
│   ├── web/        # Next.js, komponen dari HTML
│   ├── api/        # Fastify
│   └── worker/     # ingest pasar + agent runner
├── packages/
│   ├── db/         # skema + migrasi
│   ├── shared/     # tipe, zod, config chain
│   └── api-client/ # typed client + fixture
├── docs/           # REBRAND-BRIEF.md, PROGRESS.md, BLOCKERS.md, DECISIONS.md, infrastructure.md, api/, html-design/
├── legacy/         # crawl lama (acuan, tidak dijalankan di produksi)
└── .env.example
```

Pindahkan isi crawl lama (`_next/`, HTML, `server.js`, `be/`, `_crawl.js`) ke `legacy/` di Tahap 0 sebagai **acuan**. Jangan menjalankan `legacy/server.js` di produksi.

---

## 4. Environment dan siklus hidup

Hanya **satu environment aktif pada satu waktu**. Testnet bersifat sementara: setelah mainnet berjalan, testnet **dialihkan** ke mainnet pada **project yang sama** (hemat penyimpanan). Beri nama resource netral: `corvid` (bukan `corvid-testnet`).

| Environment | Branch | Frontend | Backend | Database | Chain |
| --- | --- | --- | --- | --- | --- |
| localhost | `main` | `pnpm dev` | `pnpm dev` | Postgres (Docker/embedded di D:) atau Supabase | Fixture/mock |
| testnet | `testnet` | Vercel (alias `corvid-testnet.vercel.app`) | Railway `corvid` | Supabase `corvid` | **Robinhood Chain testnet (46630)** |
| mainnet | `mainnet` | Vercel production | Railway `corvid` (env diganti) | Supabase `corvid` (dibersihkan) | **Robinhood Chain mainnet (4663)** |

**Chain: hanya Robinhood Chain (EVM L2, Arbitrum Orbit), gas ETH.** Arahan head dev menggantikan Solana. Buang semua referensi Solana dari UI, copy, dan data. Wallet milik user sendiri (MetaMask, dll.), bukan kustodian. Parameter chain: `packages/shared/src/chains.ts`, dipilih lewat `CHAIN_ENV` / `NEXT_PUBLIC_CHAIN_ENV`. Lihat `docs/MIGRATION-ROBINHOOD.md`.

Alur: fitur jalan di localhost → PR `main` → `testnet`; setelah testnet teruji → "pindah ke mainnet".

### Perintah dari saya (tidak dijalankan sebelum saya ketik)

| Perintah | Yang dikerjakan |
| --- | --- |
| **"siapkan testnet"** | Konfigurasi chain testnet, isi `.env.example`, migrasi + seed ke Supabase, service Railway (api, worker), project Vercel (Root Directory `apps/web`, branch `testnet` = preview), PR `main` → `testnet`. Langkah yang butuh login browser/password/key/faucet ditulis di `BLOCKERS.md` |
| **"pindah ke mainnet"** | (1) backup database ke `D:\.dev\backups`; (2) **minta konfirmasi eksplisit saya**, lalu bersihkan data uji (user, wallet, signal, chat) dan pertahankan skema; (3) ganti env: chain, RPC, `NEXT_PUBLIC_API_URL`; saya memasukkan key mainnet sendiri; (4) redeploy Vercel/Railway, Production Branch Vercel dialihkan; (5) verifikasi; (6) catat di `infrastructure.md`. Rotasi semua key dan token uji |
| **"HTML revisi"** | Bandingkan `docs/html-design/` dengan versi sebelumnya, perbarui hanya komponen yang berubah |

Aturan: **trade tetap `dry` di mainnet** sampai saya izinkan `live` secara eksplisit. Jangan force-push. Jangan menghapus project cloud tanpa konfirmasi saya.

### Akun terpisah
Akun Railway, Supabase, dan Vercel **baru dan terpisah** dari akun GitHub repo. Hubungkan lewat integrasi GitHub (pemilik repo memberi akses) atau `railway up` dari lokal sebagai cadangan. Tulis langkah penyambungan di `docs/infrastructure.md`. Claude **tidak membuat project cloud, tidak men-deploy, tidak memegang password/key** sebelum perintah di atas.

- Supabase: koneksi long-running (worker) memakai direct/session connection, bukan transaction pooler. Service role key tidak dipakai backend dan tidak disalin ke Railway/Vercel/repo.
- Supabase free 500 MB: buat job pembersihan (retensi) untuk data ingest pasar agar tidak penuh.
- Vercel Hobby melarang penggunaan komersial: catat di `DECISIONS.md` bahwa produksi berpenghasilan perlu paket Pro.
- `CORS` lewat env `WEB_ORIGIN`. Semua nama env vars (tanpa nilai) dicatat di `docs/infrastructure.md`.

---

## 5. Rebrand dan desain (skin swap, bukan redesign)

Pertahankan layout gelap, grid, dan komponen. Yang berubah: logo, token warna, nama, copy, favicon, OG image.

### Palet (WAJIB: dari gambar palet yang saya kirim)

Label teks di gambar palet saling bertentangan (Black tertulis `#000000`, Dove Grey RGB `109,0,26`, Casper `#FFFFFF`), jadi **yang dipakai adalah warna swatch yang terlihat**, diukur dari pikselnya:

| Nama | Nilai swatch (resmi) | Peran |
| --- | --- | --- |
| **Black** | `#262626` | Permukaan utama / panel |
| **Dove Grey** | `#676B6C` | Sekunder, garis, teks redup |
| **Casper** | `#AABBC5` | Primer / aksen |

Turunan (hanya penyesuaian tingkat terang dari tiga warna di atas; jangan menambah hue baru):

| Token | Nilai |
| --- | --- |
| `--v2-accent` / hover | `#AABBC5` / `#C0CDD5` |
| `--v2-btn-text` | `#262626` (teks tombol gelap di atas aksen terang) |
| Skala bg | `#1B1B1B` (latar halaman, lebih gelap untuk kedalaman), `#262626`, `#2F3031`, `#383A3B`, `#424546` |
| Garis | `#3A3D3E`, `#4B4F50`, `#676B6C` |
| Teks | `#FFFFFF`, `#EEF1F3`, `#C9D3D9`, `#AABBC5`, `#8E979B`, `#676B6C` |
| Semantik | **Hijau naik / merah turun / kuning peringatan tetap** (konvensi trading); sesuaikan nuansanya agar harmonis |

Aturan: tiga warna swatch tidak boleh diganti tanpa persetujuan saya. Jangan ada warna oranye, cyan, atau warna brand lama di UI. Jika kontras WCAG AA tidak lolos (mis. `#676B6C` untuk teks kecil), pakai turunan lebih terang untuk teks dan catat di `DECISIONS.md`.

- Definisikan sebagai CSS variables + Tailwind theme, **tanpa hex hardcode di komponen**. Pertahankan nama token acuan `--v2-*` agar mudah dipetakan dari `legacy/`.
- Kontras WCAG AA untuk teks di atas semua permukaan. Jika tidak lolos, sesuaikan nilai dan catat di `DECISIONS.md`.
- Brand Corvid hanya satu tema gelap (seperti acuan). Jangan membawa blok brand lain (`luminara`, `lunaris`, `lumex`, `byteforge`, `monolyth`, `senara`, dll.) dan **hapus kartu "sibling product"**.

### Copy dan metadata
- Tulis ulang copy sesuai positioning (bukan sed buta). Prioritas: hero, `about`, `docs` intro + `quick-start`, `<title>`/meta description/OG di setiap halaman.
- OG image: aset **lokal** `/og-image.png` (1200×630), bukan URL domain lama. Favicon dan logo dari berkas yang saya berikan; sebelum itu wordmark placeholder.
- JSON-LD: `name`, `tagline`, `url`, `logo`, `tokenTicker=CRVD`, `tokenName=Corvid`, `contactEmail=$CONTACT_EMAIL`.
- `terms` dan `privacy`: ganti nama entitas dan email, **jangan mengubah substansi hukum**; tandai untuk dibaca pihak hukum di `BLOCKERS.md`.

### Konversi HTML → Next.js
1. Petakan setiap halaman (16 layar `application/*`, `auth/signin`, landing, `about`, `docs/*`, `social`, `legal`) ke route dan endpoint di `docs/api/mapping.md`.
2. Ubah markup jadi komponen tanpa mengubah tampilan. Prioritaskan 16 layar app, lalu landing, docs, legal.
3. Kembangkan dengan fixture dulu (`NEXT_PUBLIC_USE_FIXTURES=true`), lalu sambungkan ke API.
4. Verifikasi dengan screenshot Playwright (sebelum/sesudah rebrand) untuk halaman utama.

---

## 6. Backend dan database

### Kontrak API (dari bundle frontend lama; konfirmasi dengan REA, lihat 8)

| Grup | Endpoint |
| --- | --- |
| Pasar | `/stats`, `/tokens/trending`, `/tokens/:mint` (+ `/security`, `/trades`, `/chart`, `/live`, `/quick`, `/chat`), `/tokens/live-batch`, `/search`, `/solana/memescope`, `/solana/refund`, `/prices/sol`, `/tokenomics/summary`, `/apevisor/token` → ganti nama jadi `/corvid/token` |
| Alpha | `/alpha/curated`, `/alpha/watchlists`, `/alpha/token-signal`, `/alpha/dev-wallets`, `/alpha/activity`, `/signals` |
| Auth/profil | `/auth/create-wallet`, `/auth/log-login`, `/auth/twitter`, `/profile`, `/profile/activity`, `/user/trading-prefs` |
| Wallet/trade | `/wallets` (+ `quick`, `balance`, `token-balance`, `withdraw`), `/trade/execute`, `/trade/gas-reserve`, `/broadcast` |
| Portfolio | `/portfolio/aggregated`, `/portfolio/pnl`, `/portfolio/agents` |
| Agent | `/agents` (+ `persona`, `knowledge`, `social-config`, `twitter-keys`, `backtest`, `subscribe`), `/marketplace/feed`, `/chats`, `/public/live-agent` |

Setiap endpoint: skema zod → route → `openapi.json` → `api-client` → fixture (bentuk identik dengan response asli) → test. Fixture awal dari `legacy/be/data/*.json`.

### Database
Mulai dari `legacy/be/db/schema.sql` (tokens, trades, security, memescope, wallets, agents, runs, swaps, stats) lalu tambah: `profiles`, `user_wallets`, `watchlists`, `signals`, `chats`, `agent_knowledge`, `subscriptions`, `credits`, `trading_prefs`, `portfolio_snapshots`, `login_log`, `burn_events`. Semua lewat migrasi; RLS Supabase aktif untuk tabel milik user.

### Sumber data (Robinhood Chain)
Alchemy (RPC, pengganti Helius; arahan head dev), Uniswap v3 langsung lewat kontrak (swap; pengganti Jupiter), DexScreener, GeckoTerminal, GoPlus (keamanan token), CoinGecko. Data pasar selalu dari mainnet. Helius, Jupiter, Jito tidak dipakai (Solana). Dengan cache dan rate limit; API key diisi lewat env oleh saya. Parameter `chain` di endpoint menerima `robinhood`. Komisi/cashback ditunda (kata head dev: "next aja").

### Analisis database (Tahap 2a, wajib sebelum integrasi)
Database lama (`legacy/be/db/schema.sql` + `seed.sql`) hanya **titik awal**. Sebelum menulis migrasi, buat `docs/db-analysis.md` yang membandingkan skema lama dengan kebutuhan Corvid, per endpoint dan per halaman (pakai REA pada chunk halaman untuk memastikan field yang benar-benar dibaca UI). Temuan awal yang harus dikonfirmasi:
- **Kurang di skema:** field keamanan token yang ada di response tetapi tidak di tabel (`devWallet`, `sniperHoldingsPercent`, `bundlerHoldingsPercent`, `insidersPercent`, `insidersCount`, `bundlersCount`, `bundlersInitialPercent`, `snipersCount`, `jitoFees`); candle OHLCV untuk `/tokens/chart`; tabel pengguna, wallet kustodian, watchlist, chat, signal, notifikasi/inbox, knowledge/persona/social config agent, langganan agent, backtest, kredit, dan `burn_events`.
- **Buang/ubah (EVM):** alamat Solana diganti alamat EVM (`0x`, kolom `chainAddr`); field khusus Solana (mint/freeze authority, Token-2022) dibuang. (Catatan lama, sudah dikerjakan di migrasi 0003.)
- **Data seed:** seed lama berisi alamat Solana; harus diganti data nyata Robinhood Chain (alamat `0x`) atau dikosongkan.
- **Retensi:** tabel ingest (trades, trending, candle) diberi kebijakan pembersihan agar muat di Supabase free 500 MB.
Hasil analisis berupa daftar tabel final, relasi, indeks, kebijakan RLS, dan perkiraan ukuran data.

### Auth
Supabase Auth milik project baru. **Ganti URL dan anon key Supabase milik apevisor lama** yang tertanam di bundle `legacy/` (jangan pernah dipakai lagi).

### Wallet kustodian dan trade (sensitif)
- Private key user terenkripsi (envelope/KMS), tidak pernah di log atau repo.
- `/trade/execute`, `/wallets/withdraw`, `/broadcast`: **default `TRADE_MODE=dry`** (simulasi dengan laporan). `live` hanya setelah saya mengizinkan.
- Konfigurasi chain Robinhood (testnet/mainnet) di `packages/shared/src/chains.ts` dengan sumbernya; **jangan menebak alamat kontrak**, verifikasi lewat explorer atau RPC (viem). Gunakan RPC lewat env (`RPC_URL`, Alchemy), bukan hardcode.
- Token **$CRVD**: ditunda sampai saya putuskan (jika perlu, tambahkan tahap token ERC-20 di Robinhood Chain).

---

## 7. Putus dari apevisor.tech

- Hapus proxy `UPSTREAM = 'https://apevisor.tech'` dan `LIVE_API`; route yang belum ada harus **404 bersih**, bukan diteruskan.
- Setelah Tahap 3: `grep -ril "apevisor" .` (kecuali `legacy/`, `docs/REBRAND-BRIEF.md`, `CLAUDE.md`) dan `grep -r "apevisor.tech" .` harus **nol hasil**. `_crawl.js` dihapus/dibiarkan di `legacy/`.
- Foto/ikon pihak ketiga di `shared/` (0x, Alchemy, dll.) hanya dipakai sesuai izin merek masing-masing; catat di `DECISIONS.md`.

---

## 8. Penggunaan REA

- Jalankan dari `D:\.dev\rea`: `node node_modules\rea-agents\scripts\rea.mjs <perintah>` (`npx -y rea-agents@latest` pernah macet tanpa output).
- Analisis penuh `_next` melewati batas 15 menit. **Pakai subset** dengan `--source-path` (chunk `app/application/*/page-*.js`, `app/auth/signin`) atau `--analysis-timeout-ms` lebih besar. `--detail summary` hanya mengecilkan respons, bukan kerja analisis.
- Simpan output di `D:\.dev\tmp`, bukan di C:. Hanya analisis berkas lokal; jangan memakai REA untuk menyentuh situs pihak lain.

---

## 9. Git dan setup

**Tahap 0:**
1. **Repo GitHub sudah ada: https://github.com/CorvidProject/Corvid** (remote `origin`). **Jangan membuat repo baru.** `git init -b main` di `ROOT`, `git remote add origin https://github.com/CorvidProject/Corvid.git`, lalu `git fetch origin`. Remote **sudah berisi commit di `main`**: gabungkan ke `main` lokal tanpa menimpa isinya (jangan force-push); jika bentrok atau tidak jelas, catat di `BLOCKERS.md`. Commit baseline lokal **sebelum** mengedit. Jika `gh` tidak punya akses push ke organisasi `CorvidProject`, catat di `BLOCKERS.md` agar saya memberi akses, lalu lanjutkan kerja lokal. Buat branch `testnet` dan `mainnet`. Jangan mengubah visibilitas repo.
2. `.claude/settings.json`:
   ```json
   {
     "attribution": { "commit": "", "pr": "" },
     "permissions": {
       "allow": [
         "Bash(pnpm:*)", "Bash(npm:*)", "Bash(npx:*)", "Bash(node:*)",
         "Bash(git:*)", "Bash(gh:*)", "Bash(curl:*)", "Bash(mkdir:*)",
         "Bash(supabase:*)", "Bash(railway:*)", "Bash(vercel:*)"
       ]
     }
   }
   ```
   Jika izin belum aktif, minta saya restart Claude Code sekali.
3. Cek Node ≥ 22, pnpm, GitHub CLI, Supabase/Railway/Vercel CLI. Cek login (`gh auth status`, `supabase projects list`, `railway whoami`, `vercel whoami`); jika belum, minta saya konfirmasi di browser. Login hanya dicek di Tahap 0.
4. Pasang `.githooks/` (`git config core.hooksPath .githooks`): `commit-msg` membuang baris atribusi AI; `pre-push` menjalankan lint, typecheck, `pnpm test`.
5. Buat `docs/PROGRESS.md`, `BLOCKERS.md`, `DECISIONS.md`, `infrastructure.md`; salin brief ke `docs/` (sudah ada).

**Aturan git:** tanpa force-push; Conventional Commits; commit kecil ke `main`, lalu PR `main` → `testnet`; commit/PR atas nama identitas git saya **tanpa atribusi AI** (tidak ada `Co-Authored-By`, "Generated with Claude Code", atau 🤖), sesuai pola proyek saya sebelumnya.

---

## 10. Tahapan

| Tahap | Pekerjaan | Selesai jika |
| --- | --- | --- |
| 0 | Setup (bagian 9), pindahkan crawl ke `legacy/`, struktur monorepo, penyimpanan di D: | Repo + docs siap, baseline ter-commit |
| 1 | **Seluruh frontend Next.js dulu, dengan fixture**: token Corvid, layout, 16 layar app, `auth/signin`, landing, docs, legal, copy baru, favicon/OG, hapus kartu sibling, buang referensi EVM. Backend belum disentuh | Semua halaman jalan dengan fixture; screenshot cocok; kontras AA; `grep apevisor` nol (selain legacy) |
| 2a | **Analisis database** (bagian 6) → `docs/db-analysis.md` | Daftar tabel final disetujui dengan default tertulis di `DECISIONS.md` |
| 2 | **Integrasi backend + DB**: migrasi, Fastify, endpoint publik + `openapi.json`, Supabase Auth, ingest Robinhood Chain + retensi; ganti fixture dengan API halaman demi halaman (`NEXT_PUBLIC_USE_FIXTURES=false`) | Tidak ada halaman 404 setelah proxy dihapus |
| 3 | Agents, signals, marketplace, portfolio, chat; wallet + trade mode `dry` | Siklus agent penuh jalan dengan mock |
| 4 | **"siapkan testnet"**: Supabase + Railway + Vercel, uji end-to-end | Testnet live, smoke test lolos (beranda, ≥3 layar app, docs, legal) |
| 5 | **"pindah ke mainnet"**: backup, bersihkan, ganti env, redeploy, verifikasi | Mainnet live, trade tetap `dry` |
| Opsional | Token $CRVD di Robinhood Chain (ERC-20), `live` trade | Hanya atas perintah saya |

---

## 11. Cara kerja

- Jangan menunggu konfirmasi di antara langkah. Keputusan teknis ambigu: pilih yang paling masuk akal, catat satu baris di `DECISIONS.md`, lanjutkan.
- Task gagal 3 kali dengan pendekatan berbeda: catat di `BLOCKERS.md`, lanjutkan task lain.
- **Berhenti hanya untuk:** login browser (GitHub/Supabase/Railway/Vercel), perintah deploy saya, memasukkan key/API key/password di dashboard, dana faucet, konfigurasi global mesin (lihat bagian 2), mengaktifkan trade `live`, penghapusan data/resource yang tidak bisa dibatalkan.
- Konvensi: TypeScript strict; input eksternal divalidasi zod; uang/harga `bigint`/`numeric` + desimal eksplisit; waktu UTC; rahasia hanya di `.env` dan `.env.example` selalu diperbarui; private key, password, API key tidak pernah di log atau repo.
- `PROGRESS.md` dan `BLOCKERS.md` selalu terkini. Laporkan hanya saat tahap selesai atau ada blocker baru.

**Sesi berikutnya:** baca `PROGRESS.md`, `BLOCKERS.md`, `DECISIONS.md`, cek blocker yang sudah saya selesaikan, lalu lanjutkan dari task terakhir.

---

## 12. Keputusan terbuka (pakai default, jangan menunggu)

| Keputusan | Default sementara |
| --- | --- |
| Palet | Wajib dari gambar: Black `#262626`, Dove Grey `#676B6C`, Casper `#AABBC5` (bagian 5) |
| Chain testnet/mainnet | **Robinhood Chain saja** (testnet 46630 / mainnet 4663) |
| Token $CRVD (Robinhood Chain) | Ditunda |
| Email kontak, logo, domain | Placeholder lewat env / wordmark |
| Wallet kustodian + trade | Dibangun, `TRADE_MODE=dry` |
| LLM untuk agent | Adapter dengan penyedia lewat env; test pakai mock |
| Docker | Opsional (disk image harus di D:) |
| Hukum (terms/privacy, fitur berbayar) | Tandai untuk dibaca pihak hukum; fitur berbayar di belakang flag `PAID_FEATURES_ENABLED=false` |
