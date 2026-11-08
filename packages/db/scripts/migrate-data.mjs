// Pindahkan DATA PENGGUNA dari Supabase lama ke Supabase baru. Data pasar (tokens, trades, candle, wallets, signals, dll.)
// TIDAK dipindah: worker mengisinya ulang di project baru (hemat egress dan ukuran).
//
// Prasyarat: skema sudah ada di project BARU (`pnpm --filter @corvid/db migrate` dengan DATABASE_URL baru).
// Jalankan di: ROOT/packages/db
//   $env:OLD_DATABASE_URL="..."; $env:NEW_DATABASE_URL="..."
//   node scripts/migrate-data.mjs            # simulasi: hanya hitung baris, tidak menulis
//   node scripts/migrate-data.mjs --apply    # tulis (satu transaksi; gagal = rollback)
// Memakai direct/session connection (bukan transaction pooler). Kunci/URL tidak dicatat.
import pg from "pg";

const apply = process.argv.includes("--apply");
const { OLD_DATABASE_URL: oldUrl, NEW_DATABASE_URL: newUrl } = process.env;
if (!oldUrl || !newUrl) throw new Error("OLD_DATABASE_URL dan NEW_DATABASE_URL wajib diisi");
if (oldUrl === newUrl) throw new Error("OLD dan NEW sama; berhenti");

// Urutan mengikuti foreign key (induk dulu). auth.* menjaga login (hash password ikut) dan FK profiles -> auth.users.
const TABLES = [
  "auth.users", "auth.identities",
  "public.profiles", "public.credits", "public.trading_prefs", "public.login_log", "public.notifications", "public.usage_events",
  "public.payment_orders", "public.portfolio_snapshots", "public.telegram_link_codes",
  "public.user_wallets", "public.user_wallet_secrets",
  "public.watchlists", "public.watchlist_wallets",
  "public.chats", "public.chat_messages", "public.chat_feedback",
  "public.agents", "public.agent_knowledge", "public.agent_social_config", "public.agent_backtests", "public.agent_earnings",
  "public.agent_runs", "public.agent_run_steps", "public.subscriptions", "public.burn_events",
];
// Tabel yang menunjuk ke tokens: tidak dipindah. Bila ada isinya, berhenti supaya tidak hilang diam-diam.
const MUST_BE_EMPTY_ON_OLD = ["public.swaps"];

const q = (name) => name.split(".").map((p) => `"${p}"`).join(".");
const mk = (url) => new pg.Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
const o = mk(oldUrl);
const n = mk(newUrl);
await o.connect();
await n.connect();
try {
  for (const t of MUST_BE_EMPTY_ON_OLD) {
    const { rows } = await o.query(`select count(*)::int c from ${q(t)}`);
    if (rows[0].c > 0) throw new Error(`${t} berisi ${rows[0].c} baris di database lama; skrip ini belum memindahkannya`);
  }
  await o.query("BEGIN READ ONLY ISOLATION LEVEL REPEATABLE READ");
  await n.query("BEGIN");
  const report = {};
  for (const t of TABLES) {
    const [schema, table] = t.split(".");
    // Kolom yang boleh ditulis (kolom generated seperti auth.users.confirmed_at dilewati).
    const cols = (await n.query(
      `select column_name c from information_schema.columns where table_schema=$1 and table_name=$2
       and is_generated = 'NEVER' and (identity_generation is null or identity_generation <> 'ALWAYS') order by ordinal_position`, [schema, table])).rows.map((r) => r.c);
    if (!cols.length) throw new Error(`${t} tidak ada di database baru (migrasi sudah dijalankan?)`);
    const existing = (await n.query(`select count(*)::int c from ${q(t)}`)).rows[0].c;
    if (existing > 0) throw new Error(`${t} di database baru sudah berisi ${existing} baris; gunakan project kosong`);
    const list = cols.map((c) => `"${c}"`).join(", ");
    const src = (await o.query(`select ${list} from ${q(t)}`)).rows;
    report[t] = src.length;
    if (!apply) continue;
    for (let i = 0; i < src.length; i += 500) {
      const part = JSON.stringify(src.slice(i, i + 500));
      await n.query(`insert into ${q(t)} (${list}) select ${list} from json_populate_recordset(null::${q(t)}, $1::json)`, [part]);
    }
    // Perbarui sequence (kolom serial) supaya id baru tidak bentrok.
    const seqs = (await n.query(`select a.attname c, pg_get_serial_sequence($1, a.attname) s from pg_attribute a where a.attrelid=$1::regclass and a.attnum>0 and not a.attisdropped`, [q(t)])).rows.filter((r) => r.s);
    for (const { c, s } of seqs) await n.query(`select setval($1, coalesce((select max("${c}") from ${q(t)}), 1), (select count(*) > 0 from ${q(t)}))`, [s]);
  }
  console.table(report);
  if (apply) {
    await n.query("COMMIT");
    console.log("Selesai: data pengguna dipindah. Bandingkan jumlah di atas dengan database baru.");
  } else {
    await n.query("ROLLBACK");
    console.log("Simulasi saja (tidak ada yang ditulis). Tambahkan --apply untuk menulis.");
  }
} catch (e) {
  await n.query("ROLLBACK").catch(() => {});
  console.error("GAGAL, semua perubahan di database baru dibatalkan:", e.message);
  process.exitCode = 1;
} finally {
  await o.query("ROLLBACK").catch(() => {});
  await o.end();
  await n.end();
}
