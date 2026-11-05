import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsBurnDashboardContent } from "@/content/docs/burn-dashboard";

export const metadata: Metadata = {
  title: "Burn Dashboard",
  description:
    "Public counter of everything ever burned: $CRVD and graduated agent tokens",
};

export default function DocsBurnDashboardPage() {
  return (
    <DocsShell>
      <DocsBurnDashboardContent />
    </DocsShell>
  );
}
