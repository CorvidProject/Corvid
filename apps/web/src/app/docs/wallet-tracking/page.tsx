import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsWalletTrackingContent } from "@/content/docs/wallet-tracking";

export const metadata: Metadata = {
  title: "Wallet Tracking",
  description: "Discover and follow smart money wallets on Ethereum",
};

export default function DocsWalletTrackingPage() {
  return (
    <DocsShell>
      <DocsWalletTrackingContent />
    </DocsShell>
  );
}
