# PROGRESS

## Tahap 0 — Setup
- [x] Crawl lama dipindah ke `legacy/` (`docs/` HTML lama → `legacy/docs-pages/`)
- [x] `git init`, remote `origin` (CorvidProject/Corvid), merge commit awal remote (hanya LICENSE), branch `testnet` & `mainnet`
- [x] Skeleton monorepo (pnpm + Turborepo), `.claude/settings.json`, `.githooks/`, `.env.example`
- [x] Folder `D:\.dev\*` dibuat
- [x] Push `main`, `testnet`, `mainnet` ke origin (akses OK)
- [ ] Skill/subagent proyek (opsional, tidak diminta CLAUDE.md corvid)

## Tahap 1 — Frontend Next.js (fixture)
- [x] `apps/web` (Next 15, App Router) + token CSS Corvid (palet swatch, kontras AA untuk teks redup)
- [x] 25 halaman statis (landing, about, docs ×17, privacy, terms, social) dari crawl, copy Solana-only, integrasi EVM dibuang
- [x] 23 layar app + `auth/signin` ditulis ulang dengan fixture (`packages/api-client/fixtures`, salinan di `docs/api/fixtures`)
- [x] OG image placeholder, JSON-LD, `grep apevisor` nol di luar `legacy/`, `CLAUDE.md`, dan brief
- [ ] Detail token `/application/token/[mint]` dan `/application/admin` (belum ada UI)
- [ ] Screenshot Playwright perbandingan sebelum/sesudah (hanya dicek manual untuk 4 halaman)
- [ ] Audit kontras teks alfa rendah di docs/legal; `legacy/` dipertahankan sebagai acuan (lihat DECISIONS)
- Build: `next build` 48 halaman OK, `tsc` OK.

## Tahap 1 — efek hero/landing (menyusul)
- [x] Glow dot-screen WebGL (port shader lama, warna Casper), typewriter placeholder, banner cookie, tombol TOP, reveal saat scroll, dropdown navbar (Trading/Agents/Tools/Developers)
- [ ] Belum: widget data live di landing ("Loading smart wallets…"), tab Analyze/Build/Automate dan FAQ accordion interaktif, ring glow tombol "Launch App", efek di halaman docs/social lain yang digerakkan JS

## 2026-11-04 — samakan efek landing (lanjutan)
- Selesai: palet hitam/putih-abu, font heading, bracket footer hover-only, cincin tombol Launch App, section terang `#686B6C`, reveal clip-path (roadmap, token), panel demo live (agent + torus canvas, rugcheck, memescope) dari fixture.
- Belum: panel template (Copy trader dll.) masih placeholder "loading", tab Analyze/Build/Automate, FAQ accordion interaktif, efek JS halaman docs/social.

## 2026-11-04 — palet baru + layar aplikasi
- Palet baru (Cloud Mist/Signal Blue/Pure White/Deep Charcoal) diterapkan di CSS, generator halaman, glow WebGL, dan komponen.
- 21 layar aplikasi + signin dari snapshot referensi (statis, identik; tinggi halaman dan jumlah gambar cocok). Dropdown navbar jalan di app.
- Belum: interaktivitas layar aplikasi (filter, tab, klik baris, chat, builder), panel template landing, tab Analyze/Build/Automate, FAQ accordion, carousel "next ›", /application/token/[mint], /application/admin.

## 2026-11-04 — pindah ke bundel asli + rebrand
- Semua 44 rute dari referensi disajikan dari kode klien asli (efek identik), palet baru ditanam, 0 error hydration di semua rute.
- API contoh: `/api/*` dari `src/server` (rute belum ada -> 401/404 bersih; tidak ada proxy ke situs lama).
- Belum: aset raster/video how-* masih berwarna lama; copy EVM; halaman detail token `/application/tokens/[mint]` (404 seperti referensi offline); ganti API contoh dengan backend nyata (Tahap 2).

## 2026-11-04 — TypeScript bertahap
- Selesai (TypeScript, perilaku diverifikasi vs referensi: loader, cookie, dropdown, indeks aktif, progres, TOC, tinggi halaman): /about, /privacy, /terms, /docs + 16 subhalaman.
- Belum: landing (/), /social, 22 layar aplikasi, /auth/signin (masih bundel asli), "More" + chain selector di header aplikasi, footer varian lain.

## 2026-11-04 — semua 44 rute TypeScript
- Landing, /social, /auth/signin, 20 layar aplikasi + redirect /application: TypeScript. 0 error hydration; tinggi halaman cocok (selisih <30px pada / dan /terms karena panjang kata brand).
- Interaktif & diverifikasi: dropdown navbar, cookie, loader, FAQ/roadmap/token akordeon (tinggi buka/tutup sama persis), typewriter hero, input hero, glow WebGL, form masuk/daftar.
- Belum interaktif: isi layar aplikasi (lihat DECISIONS), tab Analyze/Build/Automate dan panel template di landing, carousel "next ›", panel LiveDemo masih data statis.

## 2026-11-04 — catatan EVM vs Solana
- Ditambahkan `docs/EVM-vs-SOLANA.md`: tabel perbedaan konsep (alamat, token, fee, keamanan, swap, MEV, penandatanganan), daftar sisa konteks EVM yang ditemukan, dan perintah pencarian ulang. Penyesuaian dikerjakan pemilik.
- Latar animasi WebGL Signal Blue terpasang di swap, refund, chat, rugcheck, tokens (komponen `DotBackdrop`).

## 2026-11-05 — interaktivitas layar aplikasi
- Selesai (fixture, diverifikasi Playwright tanpa error klien): Chat (sesi di localStorage, balasan simulasi, chip, drawer mobile), Tokens (memakai chat), Latest/Gainers/Volume (satu `TokenBoard`: cari, urut per kolom, tampilkan lebih banyak, hanya mint Solana), Memescope (cari, urut, 3 kolom), Leaderboard (filter tier, urut, cari), Inbox (tab + filter), Portfolio, Agents (jeda/lanjut/hapus), Settings (profil + preferensi trading, mode live terkunci), Tokenomics (status $CRVD belum diluncurkan), panel "platform" di landing.
- Portfolio/Inbox/Agents/Settings menampilkan data fixture hanya saat ada sesi (`useSigned`); tanpa sesi tetap gate "Sign-in required".
- Sengaja tidak diubah: tombol Activate di /application/pro (nonaktif; fitur berbayar di belakang `PAID_FEATURES_ENABLED=false`); how-it-works memang tata letak scroll, bukan tab.
- Catatan: tabel Latest/Gainers/Volume/Memescope kini dari fixture `src/server/data`, bukan snapshot crawl lama. `/api/prices/sol` masih 404 bersih sampai Tahap 2.

## 2026-11-05 — Tahap 2a
- Selesai: `docs/db-analysis.md` (temuan skema, kebutuhan per endpoint, daftar tabel, indeks, RLS, retensi). Default dicatat di DECISIONS.
- Berikut: REA subset untuk verifikasi field, skema Drizzle di `packages/db`, migrasi, Fastify `apps/api` (mulai `/stats`, `/tokens/*`).

## 2026-11-05 — Tahap 2 mulai: packages/db
- Skema Drizzle (`packages/db/src/schema`: market + app), migrasi `0000_init` (36 tabel) dan `0001_rls` (RLS + FK ke auth.users, dilewati di Postgres lokal).
- `node packages/db/scripts/dev-db.mjs migrate-test` memvalidasi migrasi di Postgres embedded (data di D:\.dev); `start` menjalankan server lokal port 54329.
- Teruji: CHECK menolak alamat 0x, menerima mint Solana. RLS belum teruji (butuh Supabase).
- Berikut: Fastify `apps/api` (/stats, /tokens/*), seed Solana-only, `packages/shared` (zod).

## 2026-11-05 — Tahap 2: API pasar
- `packages/shared` (zod) dan `apps/api` (Fastify): /health, /openapi.json, /api/stats, /api/tokens/trending, /api/tokens/trades, /api/tokens/:mint, /api/tokens/:mint/security, /api/solana/memescope. Rute lain 404 bersih.
- 9 tes Vitest lulus di Postgres embedded (migrasi + seed Solana-only). `docs/api/openapi.json` dihasilkan dari `pnpm --filter @corvid/api openapi`.
- Belum: /search, /tokens/chart, /tokens/live-batch, /prices/sol, alpha/*, auth/*, wallets/trade, agents, worker ingest, `packages/api-client`, sambungan frontend (`NEXT_PUBLIC_USE_FIXTURES=false`).

## 2026-11-05 — Frontend tersambung ke API
- Latest, Gainers, Volume, Memescope, dan harga SOL membaca dari Fastify (mode `NEXT_PUBLIC_USE_FIXTURES=false`). E2E Playwright terhadap Postgres embedded + API + `next dev`: 25/25/45 baris, tanpa error konsol. 10 tes API lulus.
- Tambah endpoint /api/prices/sol.
- Belum: /search, /tokens/chart, /tokens/live-batch, halaman detail token, alpha/auth/wallet/agent, worker ingest, packages/api-client.

## 2026-11-05 — Detail token
- `/application/tokens/[mint]`: header harga, 8 statistik, chart candle (SVG), rugcheck, trades terbaru. Diuji Playwright terhadap API + Postgres (80 candle lokal, rugcheck 8/11, trades, token tidak dikenal, 0x = 404). Endpoint search/live-batch/chart selesai (13 tes API lulus).
- Belum: tampilan search di command palette/navbar memakai /api/search, worker ingest (candle/trades nyata), /application/admin, alpha/auth/wallet/agent.

## 2026-11-05 — Search
- Command palette (Ctrl+K, kolom search navbar) memakai /api/search di mode API. Diuji Playwright: cari simbol, notice mint tak dikenal, hasil kosong, Enter membuka detail token; tanpa error konsol.
- Belum: worker ingest (data nyata), /application/admin, alpha/auth/wallet/agent via API.

## 2026-11-05 — Worker ingest
- `apps/worker`: papan trending/new, candle, trades, retensi dari GeckoTerminal + DexScreener (tanpa key). 16 tes lulus (parser pada sampel asli, retry HTTP, siklus penuh ke Postgres). Diuji sekali terhadap API publik sungguhan: AMD/RAM/ANSEM tampil lewat /api dengan harga, market cap, likuiditas, 91 candle 15m; satu panggilan trades kena 429 (batas laju dilonggarkan).
- Belum: Helius (risk/holders/authority/wallet), memescope, deploy worker ke Railway, auth/alpha/agent/wallet.

## 2026-11-05 — Memescope
- Worker mengisi memescope (new/stretch/migrated) dari GeckoTerminal + DexScreener tiap 3 menit; progress estimasi dari kurva bonding. Diuji pada data nyata (35-42 koin per siklus). 25 tes worker + 13 tes API lulus.
- Belum: verifikasi progress on-chain (Helius), replies/creator, Helius untuk data keamanan, auth/alpha/agent/wallet.

## 2026-11-05 — Auth + profil
- API: verifikasi JWT Supabase, profil otomatis (25 kredit), /api/profile (GET/PUT), /api/profile/activity, /api/auth/log-login, /api/user/trading-prefs (GET/PUT, live terkunci). 9 tes baru (22 total di API). Settings terhubung ke API; e2e Playwright lulus dengan JWT lokal.
- Menunggu pemilik: migrasi ke Supabase dan env (BLOCKERS no. 13), lalu uji login nyata.
- Belum: portfolio/inbox/agents via API, wallet kustodian + trade dry, Helius.
