import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationVolumeContent } from "@/content/app/volume";

export const metadata: Metadata = { title: "High Volume | Corvid" };

export default function Page() {
  return (
    <AppShell mainClassName="pt-[80px] pb-16 px-3 sm:px-6 flex-1" bare={false}>
      <ApplicationVolumeContent />
    </AppShell>
  );
}
