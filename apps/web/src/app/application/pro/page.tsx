import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationProContent } from "@/content/app/pro";

export const metadata: Metadata = { title: "Plan & Usage | Corvid" };

export default function Page() {
  return (
    <AppShell mainClassName="min-h-screen" bare={false}>
      <ApplicationProContent />
    </AppShell>
  );
}
