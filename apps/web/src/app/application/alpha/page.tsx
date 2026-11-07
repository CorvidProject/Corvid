import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationAlphaContent } from "@/content/app/alpha";

export const metadata: Metadata = { title: "Alpha Feed | Corvid" };

export default function Page() {
  return (
    <AppShell mainClassName="pt-16 px-3 sm:px-6 pb-10 flex-1" bare={false}>
      <ApplicationAlphaContent />
    </AppShell>
  );
}
