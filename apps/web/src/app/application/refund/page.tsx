import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationRefundContent } from "@/content/app/refund";

export const metadata: Metadata = { title: "Refund | Corvid" };

export default function Page() {
  return (
    <AppShell
      mainClassName="relative overflow-hidden flex-1 min-h-[calc(100vh-30px)] flex items-center justify-center px-4 pt-[72px] pb-12"
      bare={false}
    >
      <ApplicationRefundContent />
    </AppShell>
  );
}
