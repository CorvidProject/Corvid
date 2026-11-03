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
