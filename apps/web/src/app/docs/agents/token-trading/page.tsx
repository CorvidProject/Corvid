import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocArticle } from "@/components/docs/doc-article";
import { PAGES } from "@/content/docs/pages";

export const metadata: Metadata = {
  title: "Token Trading",
  description:
    "Pick a token and a trigger: price move, volume spike or liquidity drop",
};

export default function DocsTokenTradingPage() {
  return (
    <DocsShell>
      <DocArticle d={PAGES.tokenTrading} />
    </DocsShell>
  );
}
