import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsContent } from "@/content/docs/index";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Corvid runs agents on Robinhood Chain that watch smart money and read token risk. Your wallet stays yours",
};

export default function DocsPage() {
  return (
    <DocsShell>
      <DocsContent />
    </DocsShell>
  );
}
