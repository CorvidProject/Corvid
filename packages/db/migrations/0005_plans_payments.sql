CREATE TABLE "payment_orders" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "payment_orders_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"product" text NOT NULL,
	"amount_units" text NOT NULL,
	"token_address" text NOT NULL,
	"recipient" text NOT NULL,
	"chain_id" integer NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"tx_hash" text,
	"payer" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"paid_at" timestamp with time zone,
	CONSTRAINT "payment_orders_status_chk" CHECK ("payment_orders"."status" in ('pending','paid','expired'))
);
--> statement-breakpoint
CREATE TABLE "usage_events" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "usage_events_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"kind" text NOT NULL,
	"source" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "usage_events_kind_chk" CHECK ("usage_events"."kind" in ('chat','deep')),
	CONSTRAINT "usage_events_source_chk" CHECK ("usage_events"."source" in ('quota','credit'))
);
--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "pro_until" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "payment_orders" ADD CONSTRAINT "payment_orders_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "usage_events" ADD CONSTRAINT "usage_events_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "payment_orders_tx_uq" ON "payment_orders" USING btree ("tx_hash");--> statement-breakpoint
CREATE UNIQUE INDEX "payment_orders_pending_amount_uq" ON "payment_orders" USING btree ("chain_id","recipient","amount_units") WHERE "payment_orders"."status" = 'pending';--> statement-breakpoint
CREATE INDEX "payment_orders_profile_idx" ON "payment_orders" USING btree ("profile_id","created_at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "usage_events_profile_idx" ON "usage_events" USING btree ("profile_id","created_at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "usage_events_at_idx" ON "usage_events" USING btree ("created_at" DESC NULLS LAST);
--> statement-breakpoint
-- RLS Supabase: pemilik hanya boleh MEMBACA; tulis hanya lewat backend (role koneksi langsung).
DO $$
DECLARE tbl text;
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.schemata WHERE schema_name = 'auth') THEN
    RETURN;
  END IF;
  FOREACH tbl IN ARRAY ARRAY['usage_events', 'payment_orders'] LOOP
    EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', tbl);
    EXECUTE format('CREATE POLICY %I ON %I FOR SELECT TO authenticated USING (profile_id = auth.uid())', tbl || '_owner_read', tbl);
  END LOOP;
END $$;
