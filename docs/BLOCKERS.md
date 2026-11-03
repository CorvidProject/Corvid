# BLOCKERS

1. **Konfigurasi global (jalankan sendiri):**
   - `npm config set cache D:\.dev\npm-cache --global`
   - `setx PLAYWRIGHT_BROWSERS_PATH D:\.dev\playwright`
   - Pindahkan disk image Docker Desktop ke D: sebelum memakai Docker.
2. **Supabase:** project lama `nexa-ai-testnet` (INACTIVE) dan `nexa-ai-mainnet` ada di akun ini, milik proyek NEXA. Project `corvid` belum ada; dibuat saat "siapkan testnet".
3. **Railway:** `railway whoami` tidak menampilkan hasil; login ulang (`railway login`) sebelum "siapkan testnet".
4. **Email kontak, logo (PNG ≥512×512 transparan + favicon), domain:** belum diberikan. Pakai env `CONTACT_EMAIL` dan wordmark placeholder.
5. **Merek "Corvid" / ticker $CRVD:** cek merek, domain, dan ticker sebelum publik.
6. **terms/privacy:** perlu dibaca pihak hukum setelah nama entitas diganti.
7. **Placeholder yang perlu diganti** setelah data diberikan: `contact@corvid.example` (74 tempat di halaman docs/legal), `https://x.com/PLACEHOLDER`, `https://t.me/PLACEHOLDER`, nama entitas di terms/privacy, logo (`data-placeholder="logo"`), favicon, OG image. Pencarian: `grep -r "corvid.example\|PLACEHOLDER" apps/web/src`.
8. **Copy produk hasil crawl** masih menyebut konsep EVM yang tidak punya padanan Solana yang jelas (mis. "Uniswap v3 pool", "graduation ke ERC-20 / mint token agent"). Perlu keputusan produk sebelum copy final.
9. **Aset how-analyze/how-automate** (`apps/web/public/media`) berasal dari crawl lama dan mungkin menampilkan brand lama; ganti dengan aset Corvid.
10. **Fitur yang UI-nya belum dibuat:** `/application/token/[mint]` (detail token) dan `/application/admin`. `NEXT_PUBLIC_API_URL` belum terhubung (Tahap 2).

- Avatar wallet (`/avatars/wallets/*.webp`) tidak ikut ter-crawl; dipakai placeholder SVG netral `public/avatars/wallets/placeholder.svg`. Kirim aset asli bila ada.
