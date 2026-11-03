# DECISIONS

- `docs/` lama berisi HTML hasil crawl bercampur dengan brief; HTML dipindah ke `legacy/docs-pages/`, `docs/` hanya dokumen proyek.
- `.gitattributes` `eol=lf` dan `core.autocrlf=false` agar tidak ada noise CRLF di Windows.
- Vercel Hobby melarang penggunaan komersial: produksi berpenghasilan perlu paket Pro.
- Foto/ikon pihak ketiga di `legacy/shared/` hanya dipakai sesuai izin merek masing-masing.
- Crawl lama tetap disimpan di `legacy/` sebagai acuan sesuai CLAUDE.md; boleh dihapus setelah Tahap 1 selesai atas keputusan pemilik.
