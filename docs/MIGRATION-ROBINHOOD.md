# Rencana migrasi: Solana → Robinhood Chain (revisi)

Status: **RENCANA, belum ada kode diubah.** Dasar: instruksi head dev "ganti semua dari Solana ke Robinhood" (2026-11-05). Perubahan ini menggantikan aturan "Solana saja / tanpa EVM" di CLAUDE.md bagian 4, 6, dan 12 serta `docs/EVM-vs-SOLANA.md`. Brief belum direvisi: lihat G0.

## 0. Gerbang (harus selesai sebelum Fase M1)

| # | Item | Pemilik | Catatan |
| --- | --- | --- | --- |
| G0 | Brief `docs/REBRAND-BRIEF.md` versi baru, atau konfirmasi tertulis bahwa instruksi lisan menggantikannya | head dev | CLAUDE.md: brief = sumber kebenaran. Perbedaan dicatat di DECISIONS.md |
| G1 | Parameter resmi Robinhood Chain **testnet dan mainnet**: chain ID, RPC publik, explorer, faucet, simbol native/gas, status mainnet | head dev / dokumentasi resmi | Tidak boleh ditebak. Setahu saya Robinhood Chain adalah L2 EVM (Arbitrum Orbit) untuk aset ternokenisasi; **verifikasi** |
| G2 | Konsep produk di chain ini: tetap "smart money + risk token + trade dari wallet", atau aset ternokenisasi (saham/ETF)? | head dev | Menentukan nasib memescope, rugcheck, refund, dan "token baru" |
| G3 | Penyedia RPC/indexer dan DEX/aggregator yang aktif di chain ini | head dev | Pengganti Helius dan Jupiter. Key baru: dicarikan setelah G3 |
| G4 | Domain hukum: terms/privacy menyebut pemroses data lama | pihak hukum | Tetap tidak diubah sepihak |

Sampai G0 sampai G3 jelas, hanya pekerjaan netral-chain (M0) yang dikerjakan.

## 1. Keputusan arsitektur yang diusulkan **[di luar brief]**

- Chain EVM: **viem** untuk klien, **bukan** `@solana/web3.js`. Penandatanganan secp256k1 (bukan Ed25519).
- Konfigurasi di `packages/shared/src/chains.ts` (belum ada; dibuat di M1): `testnet` dan `mainnet` berisi chainId, RPC (dari env), explorer, native symbol, sumber data. Satu sumber kebenaran, tanpa alamat hardcode yang belum diverifikasi.
- Satu chain aktif saja (pola lama): kolom `chain` tidak perlu dipakai di tabel; cukup `chain_id` di konfigurasi. Kembali ke prinsip "satu environment aktif".
- Uang: `numeric` + desimal eksplisit per token (ERC-20 sering 18, tetapi tidak boleh diasumsikan). Native gas token mengikuti hasil G1.
- Trade tetap `TRADE_MODE=dry` di testnet dan mainnet sampai izin eksplisit.
- Wallet kustodian: key secp256k1, enkripsi envelope tetap seperti rencana (KMS belum diputuskan, lihat DECISIONS).

## 2. Peta perubahan (hasil pemindaian repo: ±1000 kemunculan di 134 file)

| Area | File/folder utama | Perubahan |
| --- | --- | --- |
| Env | `.env.example`, `.env` | `SOLANA_CLUSTER` → `CHAIN_ENV` (`testnet`/`mainnet`); `HELIUS_RPC_URL` → `RPC_URL`; `JUPITER_API_KEY` diganti sesuai G3 (variabel yang baru ditambahkan tadi sementara dibiarkan) |
| Shared | `packages/shared/src/schemas.ts` (27) | Validasi alamat: base58 → `0x` 40 hex (viem `isAddress`); hapus `mint` → `address`; enum chain |
| DB | `packages/db/src/schema/{market,app,common}.ts`, migrasi 0000–0002 | Migrasi **baru** (jangan edit yang lama): `token_mint` → `token_address`, `transfer_fee_bps` dihapus; `buy_tax_pct`/`sell_tax_pct` kembali relevan bila G2 tetap token ERC-20 biasa; ubah `token_security_metrics` (hapus sniper/bundler/jito bila tidak ada padanan); seed lama dibuang |
| API | `apps/api/src/routes/{market,prices,discovery,user,agents}.ts`, `mappers.ts`, `seed.ts` | Rute `/solana/memescope` & `/solana/refund` diganti nama atau dibuang (tergantung G2); `/prices/sol` → harga native; validasi alamat EVM; `openapi.json` dibangun ulang |
| Worker | `apps/worker/src/{memescope,solprice,runner,ingest}.ts`, `sources/{dexscreener,geckoterminal}.ts` | Sumber data ganti sesuai G3 (DexScreener/GeckoTerminal hanya bila mendukung chain ini, **verifikasi**); memescope pump.fun dibuang; runner agent memakai fungsi EVM |
| Web: konten | `apps/web/src/content/**` (landing, docs, app), `lib/{nav-data,builder-defs}.ts` | Tulis ulang copy: SOL→native baru, SPL→ERC-20, mint→contract, Jupiter/Jito/Helius/pump.fun/Raydium/Phantom dihapus; wallet connect memakai penyedia EVM (mis. wagmi/WalletConnect, **[di luar brief]**) |
| Web: data/fixture | `apps/web/src/data/*.json`, `server/data/*`, `packages/api-client/fixtures/*`, `docs/api/fixtures/*` | Dibuat ulang dengan alamat `0x`; `make-fixtures.mjs` disesuaikan. Fixture Solana dibuang |
| Aset | `public/chains/*`, `public/shared/*` | Ikon Robinhood Chain (izin merek perlu dicatat di DECISIONS), buang logo Solana/Jupiter/Helius |
| Docs | `CLAUDE.md`, `PROGRESS.md`, `DECISIONS.md`, `db-analysis.md`, `infrastructure.md`, `EVM-vs-SOLANA.md` | Perbarui; `EVM-vs-SOLANA.md` diganti `SOLANA-vs-ROBINHOOD.md` atau diarsipkan. Terms/privacy tetap menunggu hukum |
| Test | `apps/api/test`, `apps/worker/test` (+fixture) | Ganti fixture dan ekspektasi |

## 3. Fase

| Fase | Isi | Selesai jika |
| --- | --- | --- |
| M0 (bisa mulai sekarang, netral) | Pindahkan semua istilah chain ke satu modul konfigurasi; tulis daftar lengkap kemunculan Solana; catat perubahan di DECISIONS.md; ubah CLAUDE.md setelah G0 | Daftar + keputusan tertulis, tidak ada perubahan perilaku |
| M1 (setelah G0, G1) | `chains.ts`, env baru, validasi alamat EVM di `shared`, migrasi DB baru, hapus tipe Solana | `pnpm typecheck` dan test lulus dengan fixture kosong |
| M2 (setelah G2, G3) | Adapter data (RPC/indexer/DEX), worker ingest, rute API baru, `openapi.json` | Endpoint pasar jalan dari data testnet |
| M3 | Rewrite copy dan fixture web, wallet connect EVM, buang aset lama; screenshot Playwright; `grep -ri "solana\|helius\|jupiter"` nol di luar `legacy/` dan dokumen sejarah | Semua halaman jalan, kontras AA tetap |
| M4 | Agent, wallet kustodian (secp256k1), trade `dry` di testnet | Siklus agent penuh dengan mock |
| M5 | "siapkan testnet" lalu "pindah ke mainnet" mengikuti prosedur CLAUDE.md (bagian 4) dengan chain baru | Live, trade tetap `dry` |

## 4. Risiko

- **Ketersediaan data:** DexScreener/GeckoTerminal/CoinGecko mungkin belum atau tidak mencakup chain ini. Bila tidak, ingest harus lewat indexer sendiri (biaya dan ukuran DB naik; Supabase 500 MB perlu retensi lebih ketat).
- **Fitur Solana-spesifik tanpa padanan:** memescope pump.fun, sniper/bundler/insider/jito, Refund SOL (token account rent). Perlu keputusan buang atau ganti (G2).
- **Menyatu dengan tema aset ternokenisasi:** klaim keuangan/regulasi untuk aset saham ternokenisasi perlu tinjauan hukum.
- **Pekerjaan sebelumnya terbuang:** pembersihan EVM→Solana (2026-11-04), migrasi 0000–0002, dan sebagian besar fixture harus diulang.
- **Merek:** logo/nama "Robinhood" milik pihak lain. Pakai hanya nama chain sesuai izin merek; catat di DECISIONS.md.

## 5. Yang tidak berubah

Palet dan tema gelap, nama Corvid, struktur monorepo, stack (Next.js, Fastify, Supabase, Drizzle), Railway/Vercel, aturan git, `TRADE_MODE=dry`, penyimpanan di drive D:.
