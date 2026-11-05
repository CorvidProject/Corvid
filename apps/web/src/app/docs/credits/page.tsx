import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsCreditsContent } from "@/content/docs/credits";

export const metadata: Metadata = {
  title: "AI analysis quota",
  description:
    "25 free AI analyses on signup, pay-as-you-go after. Trading has no subscription or credit cost",
};

export default function DocsCreditsPage() {
  return (
    <DocsShell>
      <DocsCreditsContent />
    </DocsShell>
  );
}
