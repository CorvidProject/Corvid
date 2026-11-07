import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsAgentsContent } from "@/content/docs/agents";

export const metadata: Metadata = {
  title: "Pipelines",
  description: "Three pipeline types with signal and simulated trading modes",
};

export default function DocsAgentsPage() {
  return (
    <DocsShell>
      <DocsAgentsContent />
    </DocsShell>
  );
}
