import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationMemescopeContent } from "@/content/app/memescope";

export const metadata: Metadata = { title: "Memescope | Corvid" };

export default function Page() {
  return (
    <AppShell mainClassName="pt-[80px] pb-10 px-3 sm:px-5 flex-1" bare={false}>
      <ApplicationMemescopeContent />
    </AppShell>
  );
}
