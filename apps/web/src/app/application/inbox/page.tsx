import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import {
  ApplicationInboxContent,
  ApplicationInboxContentExtra,
} from "@/content/app/inbox";

export const metadata: Metadata = { title: "Inbox | Corvid" };

export default function Page() {
  return (
    <AppShell mainClassName="pt-14 flex-1" bare={false}>
      <ApplicationInboxContent />
      <ApplicationInboxContentExtra />
    </AppShell>
  );
}
