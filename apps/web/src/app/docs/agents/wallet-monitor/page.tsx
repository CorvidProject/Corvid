import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsAgentsWalletMonitorContent } from "@/content/docs/agents__wallet-monitor";

export const metadata: Metadata = {
  title: "Wallet Monitor",
  description:
    "Tracks a list of wallets and signals when they buy or sell above a threshold",
};

export default function DocsAgentsWalletMonitorPage() {
  return (
    <DocsShell>
      <DocsAgentsWalletMonitorContent />
    </DocsShell>
  );
}
