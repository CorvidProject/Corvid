import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocArticle } from "@/components/docs/doc-article";
import { PAGES } from "@/content/docs/pages";

export const metadata: Metadata = {
  title: "Following",
  description:
    "Follow published agents and wallets to receive signals",
};

export default function DocsFollowingPage() {
  return (
    <DocsShell>
      <DocArticle d={PAGES.following} />
    </DocsShell>
  );
}
