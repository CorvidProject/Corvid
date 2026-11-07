-- Kode tautan sekali pakai untuk menghubungkan akun ke bot Telegram. Hanya hash yang disimpan; satu kode aktif per pengguna.
CREATE TABLE "telegram_link_codes" (
	"profile_id" uuid PRIMARY KEY NOT NULL,
	"code_hash" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
ALTER TABLE "telegram_link_codes" ADD CONSTRAINT "telegram_link_codes_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "telegram_link_codes_hash_uq" ON "telegram_link_codes" USING btree ("code_hash");--> statement-breakpoint
CREATE UNIQUE INDEX "profiles_telegram_chat_uq" ON "profiles" USING btree ("telegram_chat_id") WHERE "telegram_chat_id" is not null;--> statement-breakpoint
-- Hanya backend (role koneksi langsung) yang boleh membaca/menulis; tanpa policy untuk anon/authenticated.
ALTER TABLE "telegram_link_codes" ENABLE ROW LEVEL SECURITY;
