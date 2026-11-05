import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationTokensContent } from "@/content/app/tokens";

export const metadata: Metadata = { title: "Corvid App" };

export default function Page() {
  return (
    <AppShell
      mainClassName="pt-14 lg:pt-16 flex-1 flex h-[calc(100dvh-0px)] overflow-hidden"
      bare={false}
    >
      <ApplicationTokensContent />
    </AppShell>
  );
}
