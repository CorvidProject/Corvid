import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocArticle } from "@/components/docs/doc-article";
import { PAGES } from "@/content/docs/pages";

export const metadata: Metadata = {
  title: "New Tokens",
  description:
    "Scan fresh launches on Robinhood Chain and pass only the ones that clear your safety filters",
};

export default function DocsNewTokensPage() {
  return (
    <DocsShell>
      <DocArticle d={PAGES.newTokens} />
    </DocsShell>
  );
}
