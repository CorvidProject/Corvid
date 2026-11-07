import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsPortfolioContent } from "@/content/docs/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Your wallet balances read on-chain. Non-custodial: Corvid never holds your keys",
};

export default function DocsPortfolioPage() {
  return (
    <DocsShell>
      <DocsPortfolioContent />
    </DocsShell>
  );
}
