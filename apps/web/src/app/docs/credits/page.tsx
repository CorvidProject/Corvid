import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsCreditsContent } from "@/content/docs/credits";

export const metadata: Metadata = {
  title: "Credits & billing",
  description: "Monthly AI quota, then credits. Trading, agents and following have no Corvid fee",
};

export default function DocsCreditsPage() {
  return (
    <DocsShell>
      <DocsCreditsContent />
    </DocsShell>
  );
}
