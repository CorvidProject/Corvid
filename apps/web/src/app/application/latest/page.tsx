import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationLatestContent } from "@/content/app/latest";

export const metadata: Metadata = { title: "Latest Tokens | Corvid" };

export default function Page() {
  return (
    <AppShell mainClassName="pt-[80px] pb-16 px-3 sm:px-6 flex-1" bare={false}>
      <ApplicationLatestContent />
    </AppShell>
  );
}
