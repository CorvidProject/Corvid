# EVM vs Solana — perbedaan konsep dan sisa konteks EVM di Corvid

Corvid hanya mendukung **Solana** (devnet untuk testnet, mainnet-beta untuk mainnet). Referensi apevisor mendukung enam chain (Ethereum, Base, Arbitrum, BNB, Solana, Robinhood), sehingga banyak teks, data, dan skema masih berbau **EVM**. Dokumen ini mencatat perbedaannya agar penyesuaian nanti konsisten.

**EVM** = *Ethereum Virtual Machine*, mesin penjalan smart contract Ethereum. Base, Arbitrum, BNB Chain, Polygon, dll. memakai mesin yang sama ("chain EVM"). Solana memakai mesin dan model akun yang berbeda.

## 1. Perbedaan konsep

| Aspek | EVM (Ethereum, Base, Arbitrum, BNB) | Solana | Dampak untuk Corvid |
| --- | --- | --- | --- |
| Alamat wallet | Hex `0x…` (42 karakter) | Base58, 32–44 karakter, tanpa `0x` | Validasi input, seed, dan contoh UI hanya base58 |
| Alamat token | Alamat kontrak `0x…` | **Mint address** (base58) | Pakai istilah "mint", bukan "contract" |
| Mata uang native / gas | ETH, BNB | **SOL** (fee dibayar dalam SOL) | Semua "ETH" di UI/PnL/ambang menjadi SOL |
| Satuan terkecil | wei (18 desimal) | lamport (9 desimal untuk SOL) | Perhitungan uang `bigint` dengan desimal eksplisit per token |
| Standar token | ERC-20 | **SPL Token** dan **Token-2022** | Field keamanan mengikuti SPL |
| Pengecekan keamanan | Honeypot, buy/sell tax, owner bisa pause, proxy upgradeable | **Mint authority** (bisa cetak token baru), **freeze authority** (bisa bekukan akun), transfer hook, transfer fee (Token-2022), metadata mutable | Ganti checklist rugcheck; `buy_tax_pct`/`sell_tax_pct` menjadi `transfer_fee_bps` |
| Pajak token | Kontrak memotong persen tiap swap | Tidak ada pajak kontrak; hanya `transfer_fee` Token-2022 jika diaktifkan | Hapus konsep "tax" di UI |
| Biaya transaksi | Gas (gwei) yang naik-turun | Base fee kecil + **priority fee** (compute unit price) + tip Jito | Ganti kontrol gas dengan priority fee/tip |
| Rekening token | Saldo disimpan di dalam kontrak token | Tiap token punya **token account** (ATA) per wallet; membuka akun butuh sewa ~0,002 SOL | Itulah dasar fitur **Refund SOL** (menutup token account kosong) |
| Peluncuran memecoin | Uniswap/Aerodrome/PancakeSwap | **pump.fun** (bonding curve) lalu migrasi ke Raydium/PumpSwap | Memescope hanya pump.fun; tidak ada "LP lock/burn" gaya EVM |
| Swap / routing | 0x, 1inch, Uniswap | **Jupiter** | Ganti 0x → Jupiter |
| Perlindungan MEV | Flashbots | **Jito bundle** | Ganti Flashbots → Jito |
| Data on-chain / RPC | Alchemy, Etherscan | **Helius**, Solana explorer (Solscan/Solana Explorer) | Ganti Alchemy → Helius |
| Penandatanganan | ECDSA secp256k1, EIP-1559/EIP-712 | **Ed25519** | Key custodian: kurva berbeda; jangan pakai library EVM |
| Wallet browser | MetaMask, WalletConnect | Phantom, Solflare, Backpack | Tombol Connect memakai Solana wallet adapter |
| Nama domain | ENS (`vitalik.eth`) | SNS (`.sol`) | Contoh "Audit vitalik.eth" di chat perlu diganti |
| Jaringan uji | Sepolia, dst. | **devnet** (faucet SOL) | Testnet Corvid = Solana devnet |

## 2. Daftar sisa konteks EVM yang sudah ditemukan (belum diubah)

Pemilik akan menyesuaikan sendiri. Daftar ini hasil pencarian per 2026-11-04 dan belum tentu lengkap; jalankan ulang pencarian di bagian 3 sebelum menganggap selesai.

**Teks UI / copy**
- `apps/web/src/content/app/rugcheck.tsx`: "on six chains", "Six chains, one search", "Honeypot and mint checks".
- `apps/web/src/content/app/agents-new.tsx`: opsi "Ethereum" (± baris 999), "Skips trades under 0.05 ETH" (± baris 1617).
- `apps/web/src/content/app/alpha.tsx` dan `leaderboard.tsx`: PnL dalam **ETH** ("+17.72 ETH", "+7.50 ETH / 30d", dst.).
- `apps/web/src/content/app/chat.tsx`: contoh prompt "Audit vitalik.eth" (ENS).
- `apps/web/src/content/app/swap.tsx`: sudah diubah ke SOL (satu-satunya yang sudah beres).
- Landing/docs/legal: belum diaudit untuk kata "Ethereum", "ERC-20", "gas", "honeypot", "tax".

**Data / fixture**
- `legacy/be/data/curated-wallets.json` (dan salinannya di `apps/web/src/server/data/`): alamat `0x…` dan PnL dalam ETH. Seed harus dibuat ulang hanya dengan alamat Solana atau dikosongkan.
- Fixture token yang berisi field EVM (`buy_tax`, `sell_tax`, `honeypot`) bila ada.
- Aset `public/chains/ethereum.png` dan `base.png`: tidak dipakai lagi setelah EVM dibuang.

**Backend / database (rencana Tahap 2a)**
- Enum `chain_t` dikecilkan menjadi `solana`; parameter `chain` di API hanya menerima `solana`.
- `buy_tax_pct`/`sell_tax_pct` diganti `transfer_fee_bps` bila diperlukan.
- Tidak memakai Alchemy, 0x, Flashbots.

## 3. Cara mencari sisa konteks EVM

```bash
# Jalankan di: ROOT
grep -rniE "ethereum|\beth\b|\berc-?20\b|base chain|arbitrum|\bbnb\b|honeypot|\bgas\b|0x[0-9a-f]{6,}|six chains|\.eth\b|flashbots|alchemy|\b0x\b" apps packages docs --include=*.ts --include=*.tsx --include=*.json --include=*.md -l
```

Catatan: "gas" dan "ETH" juga muncul sebagai bagian kata lain, jadi hasilnya perlu dibaca manual. Kata "honeypot" kadang tetap valid sebagai istilah umum, tetapi pengecekannya di Solana adalah mint/freeze authority, transfer hook, dan transfer fee.

## 4. Aturan yang berlaku

- Chain: **hanya Solana** (CLAUDE.md bagian 4 dan 6). Tidak ada Ethereum/Base/EVM di UI, copy, dan data.
- Jangan menebak alamat program atau mint; verifikasi lewat explorer atau RPC.
- Trade tetap `TRADE_MODE=dry` sampai pemilik mengizinkan `live`.

## 5. Status pembersihan (2026-11-04)

Atas arahan pemilik ("project fix Solana, tidak pakai EVM") teks UI dibersihkan dengan pemetaan: Ethereum→Solana, ETH→SOL, ERC-20→SPL, 0x→Jupiter, Flashbots→Jito, Alchemy→Helius, Uniswap→Raydium, MetaMask→Phantom/Solflare. Pemeriksaan otomatis atas 21 halaman yang dirender: 0 sisa kata EVM di teks yang tampil.

**Sudah:** landing (hero, built-on tinggal 5 mitra, how-it-works, FAQ/accordion, footer CTA), about, social, docs (semua halaman), rugcheck, agents-new, alpha, leaderboard, latest (filter chain hanya Solana), chat/tokens (contoh prompt), metadata (`<title>`, description), `lib/site.ts` tagline (memakai tagline resmi), `lib/nav-data.ts`.

**Perlu keputusan/penyesuaian pemilik (penggantian kata saja, makna produk belum ditinjau):**
- Docs masih menjelaskan mekanisme gaya EVM yang hanya diganti kata: "graduation" agen menjadi token (kini "SPL" + kolam "Raydium"), cashback ETH→SOL, komisi 1% "via Jupiter". Aturan nyata di Solana (fee Jupiter, kurasi/pembagian cashback, peluncuran token lewat pump.fun/SPL) harus dikonfirmasi lalu ditulis ulang.
- Teks "Export key ke Phantom/Solflare" mengikuti format kunci Solana; periksa kalimat "64-byte key" dan alurnya.
- **Data contoh di layar aplikasi** (terminal, volume, gainers, latest, alpha, leaderboard) masih snapshot token dan wallet EVM dari referensi; hanya label dex ("uniswap"→"raydium") dan satuan (ETH→SOL) yang diganti. Ganti dengan fixture Solana (`trending-solana-*.json`, `memescope-*.json`) di Tahap 2.
- Alamat wallet `0x…` di tautan `/application/alpha/wallet/…` dan `wallet=…` masih format EVM (tidak tampil di UI, ada di URL).
- Gambar `public/chains/ethereum.png`, `base.png`, `public/shared/0x.png`, `flashbots.png`, `alchemy.png` sudah tidak dipakai; boleh dihapus.
- Logo Jito belum ada di `public/shared`; built-on hanya menampilkan Solana, Jupiter, Helius, DexScreener, GeckoTerminal.
- **`terms.tsx` dan `privacy.tsx` sengaja TIDAK diubah** (substansi hukum, CLAUDE.md bagian 5): `terms` menyebut "Ethereum-native trading platform", `privacy` mencantumkan Alchemy, 0x, Flashbots sebagai pemroses. Ganti bersama pihak hukum.
