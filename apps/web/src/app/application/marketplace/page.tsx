import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationMarketplaceContent } from "@/content/app/marketplace";

export const metadata: Metadata = { title: "Agent Marketplace | Corvid" };

export default function Page() {
  return (
    <AppShell mainClassName="pt-16 px-3 sm:px-6 pb-6 flex-1" bare={false}>
      <ApplicationMarketplaceContent />
    </AppShell>
  );
}
