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
- [ ] Audit kontras teks alfa rendah di docs/legal; `legacy/` belum dihapus
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
