import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsContent } from "@/content/docs/index";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Corvid runs autonomous trading agents on Robinhood Chain. Build pipelines, follow smart money, pay per action",
};

export default function DocsPage() {
  return (
    <DocsShell>
      <DocsContent />
    </DocsShell>
  );
}
