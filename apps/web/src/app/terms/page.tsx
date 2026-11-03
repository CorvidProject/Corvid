import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { LegalLayout } from "@/components/site/legal-layout";
import { TermsContent } from "@/content/terms";

export const metadata: Metadata = {
  title: "Terms of Service · Corvid",
  description: "Terms and conditions for using the Corvid platform.",
};

const sections = [
  {
    id: "acceptance",
    num: "01",
    label: "Acceptance",
  },
  {
    id: "service",
    num: "02",
    label: "Service",
  },
  {
    id: "no-advice",
    num: "03",
    label: "No Advice",
  },
  {
    id: "eligibility",
    num: "04",
    label: "Eligibility",
  },
  {
    id: "wallet",
    num: "05",
    label: "Wallet",
  },
  {
    id: "agents",
    num: "06",
    label: "Agents",
  },
  {
    id: "credits",
    num: "07",
    label: "Credits",
  },
  {
    id: "marketplace",
    num: "08",
    label: "Marketplace",
  },
  {
    id: "prohibited",
    num: "09",
    label: "Prohibited Use",
  },
  {
    id: "ip",
    num: "10",
    label: "IP",
  },
  {
    id: "liability",
    num: "11",
    label: "Liability",
  },
  {
    id: "indemnity",
    num: "12",
    label: "Indemnity",
  },
  {
    id: "termination",
    num: "13",
    label: "Termination",
  },
  {
    id: "contact",
    num: "14",
    label: "Contact",
  },
];

export default function TermsPage() {
  return (
    <SiteShell>
      <LegalLayout
        eyebrow="DOCUMENT · 02 / TERMS"
        title="Terms of Service"
        intro="The rules of engagement between you and the platform. Read before you trade"
        lastUpdated="April 19, 2026"
        docCode="DOC.TOS.v2026.04"
        sections={sections}
      >
        <TermsContent />
      </LegalLayout>
    </SiteShell>
  );
}
