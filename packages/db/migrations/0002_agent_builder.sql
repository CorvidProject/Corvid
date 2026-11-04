ALTER TABLE "agents" ADD COLUMN "pipeline" text;--> statement-breakpoint
ALTER TABLE "agents" ADD COLUMN "mode" text DEFAULT 'signal' NOT NULL;--> statement-breakpoint
ALTER TABLE "agents" ADD COLUMN "config" jsonb DEFAULT '{}'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "agents" ADD COLUMN "limits" jsonb DEFAULT '{}'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "agents" ADD CONSTRAINT "agents_mode_chk" CHECK ("agents"."mode" in ('signal','trading'));--> statement-breakpoint
ALTER TABLE "agents" ADD CONSTRAINT "agents_pipeline_chk" CHECK ("agents"."pipeline" is null or "agents"."pipeline" in ('follow_wallet','new_tokens','token_trading'));