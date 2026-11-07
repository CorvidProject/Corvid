import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationSettingsContent } from "@/content/app/settings";

export const metadata: Metadata = { title: "Settings | Corvid" };

export default function Page() {
  return (
    <AppShell mainClassName="pt-14 flex-1" bare={false}>
      <ApplicationSettingsContent />
    </AppShell>
  );
}
