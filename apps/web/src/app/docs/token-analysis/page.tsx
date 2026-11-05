import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsTokenAnalysisContent } from "@/content/docs/token-analysis";

export const metadata: Metadata = {
  title: "Token Analysis",
  description:
    "AI-powered on-chain analysis: six checks, one risk score, full breakdown",
};

export default function DocsTokenAnalysisPage() {
  return (
    <DocsShell>
      <DocsTokenAnalysisContent />
    </DocsShell>
  );
}
