import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsAgentsTemplatesContent } from "@/content/docs/agents__templates";

export const metadata: Metadata = {
  title: "Templates",
  description: "Prebuilt pipeline templates: deploy in under two minutes",
};

export default function DocsAgentsTemplatesPage() {
  return (
    <DocsShell>
      <DocsAgentsTemplatesContent />
    </DocsShell>
  );
}
