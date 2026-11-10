# Panduan Migrasi ke Supabase Baru

Alasan: egress lama melewati 5 GB/bulan dan database mendekati 500 MB.

---

## Ringkasan strategi

- **Data user** (profiles, agents, chats, credits, orders) → export dari Supabase lama, import ke yang baru.
- **Data pasar** (tokens, candles, trades, trending, wallets, signals, memescope, security) → **tidak perlu dipindah** - worker akan mengisi ulang dalam 1–2 jam setelah online.
- Ini membuat DB baru mulai kecil (~5–15 MB) lalu tumbuh terkontrol.

---

## Langkah 1 - Buat Supabase project baru (pemilik)

1. Dashboard Supabase → **New project**, nama `corvid-v2` (atau lainnya).
2. Catat **ref ID** baru (mis. `abcdefghijklmnop`).
3. Settings → API Keys → salin **anon key** (publishable) dan **service role key** (simpan di tempat aman, jangan share).
4. Settings → Database → Connection string → **Session pooler** (IPv4, port 5432).  
   Format: `postgresql://postgres.REF:[PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres`

---

## Langkah 2 - Terapkan migrasi ke DB baru

Isi `ROOT/.env` dengan `DATABASE_URL` baru (sementara, untuk migrasi):

```powershell
# Jalankan di: ROOT
# Edit .env: ganti DATABASE_URL ke connection string Supabase baru
pnpm --filter @corvid/db migrate
```

Migrasi `0001_rls` otomatis memasang RLS dan FK ke `auth.users` (schema `auth` ada di Supabase).  
Semua 10 migrasi (`0000`–`0009`) harus berstatus `applied`.

---

## Langkah 3 - Export data user dari Supabase lama (pemilik)

Buka SQL Editor di **Supabase lama**, jalankan satu per satu, simpan hasilnya sebagai CSV atau copy JSON.

Tabel yang perlu diexport (data milik user, tidak bisa di-regenerate):

| Tabel | Isi |
|---|---|
| `profiles` | Akun user, credits, pro_until |
| `trading_prefs` | Preferensi trading per user |
| `user_wallets` | Custodial wallet (jika ada) |
| `watchlist_wallets` | Wallet yang di-star user |
| `agents` | Konfigurasi agent user |
| `agent_runs` | Riwayat run agent |
| `agent_subscriptions` | Marketplace follow |
| `chats` + `chat_messages` | Riwayat percakapan |
| `inbox_items` | Notifikasi yang sudah masuk |
| `usage_events` | Untuk quota bulanan |
| `payment_orders` | Riwayat pembelian |

Cara export via SQL Editor (ganti nama tabel):
```sql
-- Jalankan di Supabase LAMA, klik Download CSV
SELECT * FROM profiles;
SELECT * FROM trading_prefs;
-- dst per tabel
```

Atau gunakan `pg_dump` untuk tabel spesifik:
```powershell
# Jalankan di: D:\.dev\tmp
# Ganti CONNECTION_STRING_LAMA dengan string dari Supabase lama
pg_dump "CONNECTION_STRING_LAMA" --data-only --table=profiles --table=trading_prefs --table=user_wallets --table=watchlist_wallets --table=agents --table=agent_runs --table=agent_subscriptions --table=chats --table=chat_messages --table=inbox_items --table=usage_events --table=payment_orders -f corvid-user-data.sql
```

---

## Langkah 4 - Import ke Supabase baru (pemilik)

```powershell
# Jalankan di: D:\.dev\tmp
# Ganti CONNECTION_STRING_BARU dengan string dari Supabase baru
psql "CONNECTION_STRING_BARU" -f corvid-user-data.sql
```

Pastikan tidak ada error FK (urutan import: `profiles` dulu, baru tabel yang mereferensinya).

---

## Langkah 5 - Konfigurasi Auth Supabase baru (pemilik)

Dashboard Supabase baru:
1. Authentication → Providers → aktifkan **Email** dan **Web3 Wallet (Ethereum)**.
2. Authentication → URL Configuration → Redirect URLs → tambahkan:
   - `https://corvid-tau.vercel.app`
   - `http://localhost:3000`
   - `http://localhost:3217`

---

## Langkah 6 - Update env vars Railway (pemilik)

Service `@corvid/api` dan `@corvid/worker` di Railway:

| Variabel | Nilai baru |
|---|---|
| `DATABASE_URL` | Session pooler URL Supabase baru |
| `SUPABASE_URL` | `https://REF-BARU.supabase.co` |
| `SUPABASE_JWT_SECRET` | Hapus (project baru pakai JWKS otomatis) |

Tambah variabel baru untuk **kurangi egress** (lihat seksi bawah):

| Variabel | Nilai | Default lama |
|---|---|---|
| `WORKER_HOT_MS` | `30000` | 10000 |
| `WORKER_PRICES_MS` | `300000` | 60000 |
| `WORKER_STALE_MS` | `300000` | 120000 |
| `WORKER_STALE_LIMIT` | `50` | 300 |

---

## Langkah 7 - Update env vars Vercel (pemilik)

Project `corvid` di Vercel → Settings → Environment Variables:

| Variabel | Nilai baru |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://REF-BARU.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key dari project baru |

Setelah save → Redeploy (Deployments → Redeploy latest).

---

## Langkah 8 - Update `.env` lokal (pemilik)

```
DATABASE_URL=postgresql://postgres.REF-BARU:...
SUPABASE_URL=https://REF-BARU.supabase.co
```

`apps/web/.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://REF-BARU.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key baru>
```

---

## Langkah 9 - Verifikasi

1. Cek Railway logs worker → harus muncul `board:trending`, `wallets`, dll. dalam 5 menit.
2. Buka https://corvid-tau.vercel.app → login → pastikan profil/credits terbaca.
3. Buka `/application/swap` → pastikan token list muncul (data trending sudah diisi worker).
4. Cek Supabase baru → Table Editor → `tokens` mulai terisi dalam ~10 menit.

---

## Estimasi egress dan DB setelah migrasi

### Perubahan kode (sudah di-commit):
| Item | Sebelum | Sesudah |
|---|---|---|
| Cache API publik | 15 detik | 30 detik |
| Retention candles 1m | 1 hari | **4 jam** |
| Retention candles 5m/15m | 7 hari | **3 hari** |
| Retention candles 1d | 180 hari | **90 hari** |
| Retention trades | 48 jam | **24 jam** |
| Retention price_points | 1 hari | **6 jam** |

### Perubahan Railway env (pemilik set saat deploy):
| Variabel | Sebelum | Sesudah | Dampak |
|---|---|---|---|
| `WORKER_HOT_MS` | 10 detik | 30 detik | -66% hot reads |
| `WORKER_PRICES_MS` | 1 menit | 5 menit | -80% price_points writes |
| `WORKER_STALE_MS` | 2 menit | 5 menit | -60% stale cycles |
| `WORKER_STALE_LIMIT` | 300 token | 50 token | -83% per cycle |

### Estimasi ukuran DB stabil:
| Tabel | Sebelum | Setelah perketat |
|---|---|---|
| `token_candles` (1m) | ~86 MB/hari | ~6 MB/hari |
| `token_price_points` | ~20 MB/hari | ~5 MB/hari |
| `token_trades` | ~40 MB | ~20 MB |
| User data (semua tabel user) | ~5 MB | ~5 MB |
| **Total estimasi DB stabil** | mendekati 500 MB | **~150–200 MB** |

Egress estimasi per bulan setelah optimasi: **~2–3 GB** (dari 8+ GB).

---

## Catatan penting

- **Jangan hapus Supabase lama** sampai semua data user terverifikasi sudah ada di yang baru.
- Service role key Supabase baru: **jangan pernah masuk ke Railway/Vercel/repo**.
- Auth: semua sesi Supabase lama akan invalid setelah pindah - user perlu login ulang.
