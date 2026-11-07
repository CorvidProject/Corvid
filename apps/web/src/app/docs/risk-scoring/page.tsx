import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocArticle } from "@/components/docs/doc-article";
import { PAGES } from "@/content/docs/pages";

export const metadata: Metadata = {
  title: "Risk scoring",
  description:
    "How the 0 to 100 token risk score is built and how agents use it",
};

export default function DocsRiskScoringPage() {
  return (
    <DocsShell>
      <DocArticle d={PAGES.riskScoring} />
    </DocsShell>
  );
}
