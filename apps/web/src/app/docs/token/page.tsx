import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsTokenContent } from "@/content/docs/token";

export const metadata: Metadata = {
  title: "$CRVD Token",
  description: "Status of the $CRVD token: not launched yet",
};

export default function DocsTokenPage() {
  return (
    <DocsShell>
      <DocsTokenContent />
    </DocsShell>
  );
}
