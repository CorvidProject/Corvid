-- Kapan data keamanan token terakhir dicoba diambil (berhasil atau tidak), supaya antrean berputar dan token yang tidak dikenal GoPlus tidak menyumbat.
ALTER TABLE "tokens" ADD COLUMN "security_checked_at" timestamp with time zone;
