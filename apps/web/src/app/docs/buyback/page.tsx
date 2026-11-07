import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocArticle } from "@/components/docs/doc-article";
import { PAGES } from "@/content/docs/pages";

export const metadata: Metadata = {
  title: "Buyback",
  description:
    "Status of buyback on Corvid",
};

export default function DocsBuybackPage() {
  return (
    <DocsShell>
      <DocArticle d={PAGES.buyback} />
    </DocsShell>
  );
}
