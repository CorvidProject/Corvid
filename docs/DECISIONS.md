# DECISIONS

- `docs/` lama berisi HTML hasil crawl bercampur dengan brief; HTML dipindah ke `legacy/docs-pages/`, `docs/` hanya dokumen proyek.
- `.gitattributes` `eol=lf` dan `core.autocrlf=false` agar tidak ada noise CRLF di Windows.
- Vercel Hobby melarang penggunaan komersial: produksi berpenghasilan perlu paket Pro.
- Foto/ikon pihak ketiga di `legacy/shared/` hanya dipakai sesuai izin merek masing-masing.
- Crawl lama tetap disimpan di `legacy/` sebagai acuan sesuai CLAUDE.md; boleh dihapus setelah Tahap 1 selesai atas keputusan pemilik.
- **Palet/kontras:** swatch resmi `#262626/#676B6C/#AABBC5` dipakai apa adanya. `#676B6C` (3.2:1 di `#1B1B1B`) tidak lolos AA untuk teks, jadi hanya dipakai untuk garis. Teks redup memakai turunan lebih terang: `--v2-t-4 #A0A9AD`, `--v2-t-5 #98A1A5` (≥4.5:1 di semua permukaan bg). Teks putih alfa <0.5 di halaman docs/legal hasil crawl masih di bawah AA; perlu audit per halaman.
- **CSS:** halaman memakai CSS Tailwind terkompilasi hasil crawl (brand lain dibuang oleh `legacy/tools/build-css.py`), bukan Tailwind live. Kelas baru yang tidak ada di CSS itu ditaruh di `app-utils.css`. Migrasi ke Tailwind sungguhan ditunda **[di luar brief]**.
- **Halaman statis** (landing, about, docs, legal, social) dihasilkan oleh `legacy/tools/html-to-tsx.py` dari `legacy/`; copy ditulis ulang lewat tabel `PHRASES` di skrip itu. Setelah `legacy/` dihapus, file `page.tsx` hasil menjadi sumber kebenaran dan skrip tidak dipakai lagi.
- **Layar `/application/*` dan `/auth/signin`:** HTML crawl hanya berisi skeleton loading (UI aslinya di chunk JS), jadi layar ditulis ulang sebagai komponen React memakai kelas CSS yang sama dan data fixture. Fidelity visual terhadap aplikasi lama belum 1:1.
- **Fixture** dihasilkan `packages/api-client/scripts/make-fixtures.mjs` dari seed lama, hanya entri Solana (alamat `0x…` dibuang). Daftar smart wallet diisi alamat dari sampel trade dengan statistik sintetis (ditandai `fixture: true`).
- Logo belum ada: gambar logo lama dihapus dari halaman statis; teks wordmark "Corvid" jadi placeholder (`data-placeholder="logo"`). OG image `/og-image.png` adalah placeholder teks.

- 2026-11-04 Palet diperbarui atas permintaan pemilik: background halaman `#262626`; permukaan hitam (header, panel, input, cookie) `#000000`; teks putih sekunder `#686B6C`; aksen (ex-oranye) `#FFFFFF` ("Casper FFFFF" dibaca sebagai `#FFFFFF`, ubah di `PAL` build-css.py bila yang dimaksud `#AABBC5`). Kontras `#686B6C` di atas `#262626` sekitar 2.8:1 (di bawah AA), di atas `#000000` sekitar 3.7:1. Keputusan pemilik; tinjau ulang bila perlu AA.

- 2026-11-04 Palet BARU menggantikan semua palet sebelumnya (pemilik): Cloud Mist `#D7E1EC` (section terang), Signal Blue `#0030CF` (ex-oranye: tombol, garis, glow), Pure White `#FFFFFF` (teks utama), Deep Charcoal `#13171B` (latar & permukaan; turunan lebih terang `#171C21`..`#29323A` untuk lapisan). Teks sekunder memakai tint Cloud Mist (`#A9B5C2`, `#8E9AA8`). Teks aksen kecil di atas gelap memakai tint biru `#7C9BFF` (`--v2-accent-text`) karena `#0030CF` murni hanya ~2:1 di atas Deep Charcoal; isian/tombol tetap `#0030CF` murni. Catatan: tint-tint ini turunan dari palet, bukan hue baru.
- 2026-11-04 Layar aplikasi (`/application/*`, `/auth/signin`) dibuat dari snapshot DOM referensi (`legacy/snap`, view chain Solana) lewat `legacy/tools/snap-to-tsx.py`: tampilan identik, tetapi statis (belum interaktif) sampai integrasi Tahap 2/3. Data contoh berasal dari mock referensi, alamat `0x…` dipetakan ke string base58 dummy, DEX "uniswap" menjadi "raydium".
