-- Titik harga berkala per token (untuk sparkline asli) dan daftar token yang sedang dibuka pengguna (untuk penyegaran cepat).
CREATE TABLE "token_price_points" (
	"token_id" bigint NOT NULL,
	"at" timestamp with time zone NOT NULL,
	"price_usd" numeric(38, 18) NOT NULL,
	CONSTRAINT "token_price_points_token_id_at_pk" PRIMARY KEY("token_id","at")
);
--> statement-breakpoint
CREATE TABLE "token_watch" (
	"token_id" bigint PRIMARY KEY NOT NULL,
	"last_viewed_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
ALTER TABLE "token_price_points" ADD CONSTRAINT "token_price_points_token_id_tokens_id_fk" FOREIGN KEY ("token_id") REFERENCES "public"."tokens"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "token_watch" ADD CONSTRAINT "token_watch_token_id_tokens_id_fk" FOREIGN KEY ("token_id") REFERENCES "public"."tokens"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "token_watch_viewed_idx" ON "token_watch" USING btree ("last_viewed_at");--> statement-breakpoint
-- Hanya backend (role koneksi langsung) yang boleh membaca/menulis; tanpa policy untuk anon/authenticated.
ALTER TABLE "token_price_points" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "token_watch" ENABLE ROW LEVEL SECURITY;
