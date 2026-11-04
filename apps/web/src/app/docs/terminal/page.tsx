import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsTerminalContent } from "@/content/docs/terminal";

export const metadata: Metadata = {
  title: "Terminal",
  description:
    "Paste any Solana token address: price, holders, risk, live trades on one screen",
};

export default function DocsTerminalPage() {
  return (
    <DocsShell>
      <DocsTerminalContent />
    </DocsShell>
  );
}
