import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsAgentsMarketplaceContent } from "@/content/docs/agents__marketplace";

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Discover published agents and follow them for free signals",
};

export default function DocsAgentsMarketplacePage() {
  return (
    <DocsShell>
      <DocsAgentsMarketplaceContent />
    </DocsShell>
  );
}
