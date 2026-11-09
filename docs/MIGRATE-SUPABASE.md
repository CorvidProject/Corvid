# Pindah ke project Supabase baru

Dipakai bila egress project lama (Free, 5 GB/siklus) tetap melewati batas. Yang dipindah hanya **data pengguna** (4 akun, profil, agent, dst.). Data pasar (tokens, trades, candle, wallets, signals) **tidak dipindah**: worker mengisinya ulang. Hasilnya project baru mulai kecil dan egress-nya bersih.

## Anggaran sebulan (Free: egress 5 GB, database 500 MB)

| Item     | Target                     | Dasar                                                                                                                |
| -------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Egress   | ≤ 160 MB/hari (5 GB / 30) | Perkiraan setelah perbaikan skoring wallet: 60-100 MB/hari. Ukur dengan `pg_stat_statements` bila melenceng        |
| Database | ≤ 350 MB stabil           | Lama: 319 MB, 166 MB di antaranya `token_price_points`. Titik harga kini tiap 10 menit (bukan 3), perkiraan ~55 MB |

## Langkah (urut)

1. **Buat project baru** di akun Supabase baru. Region sama (West US). Data API: *Automatically expose new tables* **mati**, *Enable automatic RLS* **aktif** (sama dengan project lama).
2. **Auth project baru**: samakan dengan lama (Authentication > Providers: aktifkan Web3 Wallet/SIWE bila dipakai; URL Configuration: Site URL `https://corvid-tau.vercel.app` dan redirect URL yang sama). Salin `Project URL`, `anon key`, dan connection string **Session pooler / direct** (bukan transaction pooler).
3. **Backup lama** (baca-saja): `# Jalankan di: ROOT/packages/db` → `node scripts/backup.mjs` (hasil di `D:\.dev\backups`).
4. **Skema ke project baru** (jangan commit URL-nya):
   ```powershell
   # Jalankan di: ROOT
   $env:DATABASE_URL="<url session baru>"; pnpm --filter @corvid/db migrate
   ```
5. **Simulasi pemindahan data** (tidak menulis):
   ```powershell
   # Jalankan di: ROOT/packages/db
   $env:OLD_DATABASE_URL="<url lama>"; $env:NEW_DATABASE_URL="<url baru>"
   node scripts/migrate-data.mjs
   ```

   Cek jumlah baris per tabel. Skrip berhenti bila `swaps` di database lama berisi, atau tabel tujuan tidak kosong.
6. **Tulis**: `node scripts/migrate-data.mjs --apply` (satu transaksi; gagal = batal total). Akun ikut dengan hash passwordnya, jadi login email tetap jalan. Sesi lama tidak berlaku (kunci JWT berbeda): pengguna masuk ulang satu kali.
7. **Ganti env**:
   - Railway `@corvid/api`: `DATABASE_URL`, `SUPABASE_URL` baru (`SUPABASE_JWT_SECRET` hanya bila project baru memakai HS256).
   - Railway `@corvid/worker`: `DATABASE_URL` baru.
   - Vercel Production: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` baru, lalu **Redeploy** (nilai `NEXT_PUBLIC_*` tertanam saat build).
8. **Verifikasi**: `/health` API, beranda, Terminal terisi (papan trending muncul ±3 menit, candle ±15 menit, tier wallet setelah putaran skoring pertama, maks 2 jam), login, agent milik akun muncul.
9. **Project lama**: biarkan dulu sebagai cadangan, lalu *Pause* setelah semuanya terverifikasi. **Jangan hapus tanpa konfirmasi pemilik.** Lama dan baru tidak boleh dipakai worker bersamaan.
10. Catat project ref baru di `docs/infrastructure.md` (tanpa key) dan rotasi key lama.

## Catatan

- Worker tetap berjalan selama langkah 3-6 menulis ke database **lama**; perubahan data pengguna di jeda itu (jarang) bisa tertinggal. Bila perlu, hentikan service `@corvid/api` sebentar sebelum langkah 6.
- Pemindahan hanya benar-benar mengurangi egress jika perbaikan worker (skoring wallet 2 jam, jalur aktivitas ringan) ikut ter-deploy. Itu sudah ada di `main`.
- Siklus tagihan project baru mulai dari tanggal dibuat, dengan kuota 5 GB baru.
