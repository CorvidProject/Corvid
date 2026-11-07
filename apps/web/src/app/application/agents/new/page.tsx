import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationAgentsNewContent } from "@/content/app/agents-new";

export const metadata: Metadata = { title: "AI Agents | Corvid" };

export default function Page() {
  return (
    <AppShell mainClassName="" bare={true}>
      <ApplicationAgentsNewContent />
    </AppShell>
  );
}
