import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsAgentsAutoTraderContent } from "@/content/docs/agents__auto-trader";

export const metadata: Metadata = {
  title: "Auto Trader",
  description:
    "Acts on signals. Paper-trades by default. Live mode follows pre-authorized limits",
};

export default function DocsAgentsAutoTraderPage() {
  return (
    <DocsShell>
      <DocsAgentsAutoTraderContent />
    </DocsShell>
  );
}
