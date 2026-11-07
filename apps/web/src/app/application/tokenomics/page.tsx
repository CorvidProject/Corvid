import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationTokenomicsContent } from "@/content/app/tokenomics";

export const metadata: Metadata = { title: "Tokenomics | Corvid" };

export default function Page() {
  return (
    <AppShell mainClassName="min-h-screen" bare={false}>
      <ApplicationTokenomicsContent />
    </AppShell>
  );
}
