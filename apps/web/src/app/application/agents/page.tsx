import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationAgentsContent } from "@/content/app/agents";

export const metadata: Metadata = { title: "AI Agents — Corvid" };

export default function Page() {
  return (
    <AppShell mainClassName="pt-16 px-3 sm:px-6 pb-6 flex-1" bare={false}>
      <ApplicationAgentsContent />
    </AppShell>
  );
}
