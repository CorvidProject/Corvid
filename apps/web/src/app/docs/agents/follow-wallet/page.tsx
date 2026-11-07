import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocArticle } from "@/components/docs/doc-article";
import { PAGES } from "@/content/docs/pages";

export const metadata: Metadata = {
  title: "Follow Wallet",
  description:
    "Watch a wallet and get a signal or a simulated copy trade when it buys",
};

export default function DocsFollowWalletPage() {
  return (
    <DocsShell>
      <DocArticle d={PAGES.followWallet} />
    </DocsShell>
  );
}
