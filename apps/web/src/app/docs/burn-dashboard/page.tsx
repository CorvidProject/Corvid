import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocsBurnDashboardContent } from "@/content/docs/burn-dashboard";

export const metadata: Metadata = {
  title: "Burn Dashboard",
  description: "Status of burns: none yet, the dashboard comes with the token",
};

export default function DocsBurnDashboardPage() {
  return (
    <DocsShell>
      <DocsBurnDashboardContent />
    </DocsShell>
  );
}
