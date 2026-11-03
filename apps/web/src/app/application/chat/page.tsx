import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import { ApplicationChatContent } from "@/content/app/chat";

export const metadata: Metadata = { title: "Corvid App" };

export default function Page() {
  return (
    <AppShell
      mainClassName="pt-14 lg:pt-16 flex-1 flex h-[calc(100dvh-0px)] overflow-hidden"
      bare={false}
    >
      <ApplicationChatContent />
    </AppShell>
  );
}
