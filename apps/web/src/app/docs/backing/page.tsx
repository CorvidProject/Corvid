import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocArticle } from "@/components/docs/doc-article";
import { PAGES } from "@/content/docs/pages";

export const metadata: Metadata = {
  title: "Backing agents",
  description:
    "Status of agent backing on Corvid",
};

export default function DocsBackingPage() {
  return (
    <DocsShell>
      <DocArticle d={PAGES.backing} />
    </DocsShell>
  );
}
