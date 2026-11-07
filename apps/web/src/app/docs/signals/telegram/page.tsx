import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsTelegramContent } from "@/content/docs/signals__telegram";

export const metadata: Metadata = {
  title: "Telegram setup",
  description: "Link your Corvid account to the Corvid Telegram bot and choose which agents send you alerts",
};

export default function DocsTelegramPage() {
  return (
    <DocsShell>
      <DocsTelegramContent />
    </DocsShell>
  );
}
