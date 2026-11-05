import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsSignalsContent } from "@/content/docs/signals";

export const metadata: Metadata = {
  title: "Signals",
  description:
    "Your inbox: real-time delivery, filters, and signal types from all pipelines",
};

export default function DocsSignalsPage() {
  return (
    <DocsShell>
      <DocsSignalsContent />
    </DocsShell>
  );
}
