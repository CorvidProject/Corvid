import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationRugcheckContent } from "@/content/app/rugcheck";

export const metadata: Metadata = { title: "Rugcheck | Corvid" };

export default function Page() {
  return (
    <AppShell mainClassName="flex-1" bare={false}>
      <ApplicationRugcheckContent />
    </AppShell>
  );
}
