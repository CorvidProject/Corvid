import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsTokenContent } from "@/content/docs/token";

export const metadata: Metadata = {
  title: "$CRVD Token",
  description:
    "The in-app currency that powers signals, graduation, and buybacks on Corvid",
};

export default function DocsTokenPage() {
  return (
    <DocsShell>
      <DocsTokenContent />
    </DocsShell>
  );
}
