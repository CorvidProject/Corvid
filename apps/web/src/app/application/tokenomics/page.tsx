import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationTokenomicsContent } from "@/content/app/tokenomics";

export const metadata: Metadata = { title: "Corvid App" };

export default function Page() {
  return (
    <AppShell mainClassName="min-h-screen" bare={false}>
      <ApplicationTokenomicsContent />
    </AppShell>
  );
}
