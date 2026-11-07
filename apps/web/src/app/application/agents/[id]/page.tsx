import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app/app-shell";
import { AgentPublicContent } from "@/content/app/agent-public";

export const metadata: Metadata = { title: "Agent | Corvid" };

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!/^[1-9][0-9]{0,15}$/.test(id)) notFound(); // bukan id agent: 404 bersih
  return (
    <AppShell mainClassName="pt-[80px] pb-10 px-3 sm:px-5 flex-1" bare={false}>
      <AgentPublicContent id={id} />
    </AppShell>
  );
}
