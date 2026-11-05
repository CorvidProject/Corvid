import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsAgentsTokenAnalystContent } from "@/content/docs/agents__token-analyst";

export const metadata: Metadata = {
  title: "Token Analyst",
  description:
    "AI agent that reads project knowledge and produces a written verdict",
};

export default function DocsAgentsTokenAnalystPage() {
  return (
    <DocsShell>
      <DocsAgentsTokenAnalystContent />
    </DocsShell>
  );
}
