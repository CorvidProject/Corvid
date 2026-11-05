import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsAgentsSignalBotContent } from "@/content/docs/agents__signal-bot";

export const metadata: Metadata = {
  title: "Signal Bot",
  description: "Price and volume trigger agent: set a rule, get a signal",
};

export default function DocsAgentsSignalBotPage() {
  return (
    <DocsShell>
      <DocsAgentsSignalBotContent />
    </DocsShell>
  );
}
