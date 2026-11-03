import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsAgentsMarketplaceContent } from "@/content/docs/agents__marketplace";

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Discover public agents, follow for free, pay only per signal",
};

export default function DocsAgentsMarketplacePage() {
  return (
    <DocsShell>
      <DocsAgentsMarketplaceContent />
    </DocsShell>
  );
}
