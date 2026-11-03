import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationTerminalContent } from "@/content/app/terminal";

export const metadata: Metadata = { title: "Corvid App" };

export default function Page() {
  return (
    <AppShell mainClassName="pt-14 pb-6 flex-1" bare={false}>
      <ApplicationTerminalContent />
    </AppShell>
  );
}
