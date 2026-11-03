import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsQuickStartContent } from "@/content/docs/quick-start";

export const metadata: Metadata = {
  title: "Quick Start",
  description: "From sign-up to your first signal in five minutes",
};

export default function DocsQuickStartPage() {
  return (
    <DocsShell>
      <DocsQuickStartContent />
    </DocsShell>
  );
}
