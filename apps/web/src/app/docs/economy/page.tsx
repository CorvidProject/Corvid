import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocArticle } from "@/components/docs/doc-article";
import { CORE } from "@/content/docs/pages-core";

export const metadata: Metadata = {
  title: "Splits & fees",
  description: "What Corvid charges today and what is not live yet",
};

export default function DocsEconomyPage() {
  return (
    <DocsShell>
      <DocArticle d={CORE.economy} />
    </DocsShell>
  );
}
