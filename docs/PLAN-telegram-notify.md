# Rencana: notifikasi Telegram untuk agent

Status: **opsi A sudah dibangun** (2026-11-07), belum diuji dengan bot nyata. Perlu `TELEGRAM_BOT_TOKEN` (worker) + `TELEGRAM_BOT_USERNAME` (API) dari pemilik; lihat `docs/infrastructure.md`. Bagian "Kondisi saat ini" di bawah adalah keadaan sebelum pembangunan.

## Kondisi saat ini (hasil pemeriksaan kode)
- Builder (`apps/web/src/components/app/agent-builder.tsx`): "Telegram alerts" hanya tombol geser di layar. Nilainya (`telegram`, bawaan `true`) hanya mengubah teks node Notify ("In-App + Telegram" / "In-App"). **Tidak ikut dikirim saat agent disimpan.**
- Tidak ada kode pengiriman Telegram: tidak ada bot, tidak ada `TELEGRAM_BOT_TOKEN`, tidak ada langkah di worker.
- Kolom `profiles.telegram_chat_id` (`packages/db/src/schema/app.ts`) ada tetapi tidak dipakai kode mana pun.
- Teks situs menjanjikan lebih dari yang ada: docs "Telegram Setup" (`/docs/signals/telegram`), FAQ/accordion landing, `terms`, `agents__auto-trader`, `agents__marketplace` (persetujuan trade lewat Telegram, signal delivery).
- Yang berfungsi: notifikasi di dalam aplikasi (inbox). Belum diuji ulang ujung ke ujung.

## Opsi
**A. Dibuat berfungsi** (butuh token bot dari pemilik)
1. Pemilik membuat bot lewat `@BotFather`, memasukkan token ke Railway sebagai `TELEGRAM_BOT_TOKEN` (service API dan worker). Token tidak boleh masuk repo/log.
2. Menghubungkan akun: Settings → "Connect Telegram" menampilkan kode sekali pakai (kedaluwarsa singkat, tersimpan ter-hash). Pengguna mengirim kode ke bot; chat id disimpan di `profiles.telegram_chat_id`. Tombol "Disconnect" menghapusnya.
3. Per agent: simpan flag notifikasi Telegram bersama konfigurasi agent (builder harus mengirim nilainya; API menyimpannya).
4. Pengiriman: worker mengirim ringkasan sinyal / hasil run ke chat id bila flag agent aktif dan akun terhubung. Mode polling (`getUpdates`) di worker, tanpa webhook publik. Batas laju per pengguna agar tidak spam; pesan hanya ringkasan, tanpa data sensitif; kegagalan kirim dicatat, tidak menghentikan run.
5. Tes: Vitest dengan fetch palsu untuk Telegram API (kode tautan, kirim, putuskan, batas laju).
6. Persetujuan trade lewat Telegram (tombol approve) **bukan bagian tahap ini**; trade tetap `dry`.

Perkiraan: satu sesi kerja (API, worker, Settings, builder, tes).

**B. Jujur dulu (kecil, cepat)**
- Tombol di builder menjadi "Telegram (coming soon)" nonaktif; teks node Notify menjadi "In-App".
- Lunakkan klaim di docs "Telegram Setup", FAQ/accordion landing, dan daftar fitur sampai fiturnya ada. `terms` hanya diubah bila pihak hukum setuju.

## Saran
Lakukan B sekarang (mencegah klaim palsu), lalu A bila pemilik ingin fitur ini.

## Prasyarat dari pemilik untuk A
- Bot Telegram (BotFather) + token via env Railway.
- Tautan Telegram komunitas resmi (`site.socialLinks.telegram` masih placeholder).
