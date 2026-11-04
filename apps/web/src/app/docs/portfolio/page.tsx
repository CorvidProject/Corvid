import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsPortfolioContent } from "@/content/docs/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Your open positions, SPL tokens, and running PnL. Wallet keys encrypted at rest, exportable to Phantom anytime",
};

export default function DocsPortfolioPage() {
  return (
    <DocsShell>
      <DocsPortfolioContent />
    </DocsShell>
  );
}
