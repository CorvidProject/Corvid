import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { LegalLayout } from "@/components/site/legal-layout";
import { PrivacyContent } from "@/content/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy · Corvid",
  description: "How Corvid collects, uses, and protects your personal data.",
};

const sections = [
  {
    id: "intro",
    num: "01",
    label: "Introduction",
  },
  {
    id: "collect",
    num: "02",
    label: "What We Collect",
  },
  {
    id: "use",
    num: "03",
    label: "How We Use It",
  },
  {
    id: "ai",
    num: "04",
    label: "AI Disclaimer",
  },
  {
    id: "wallet",
    num: "05",
    label: "Wallet Statement",
  },
  {
    id: "share",
    num: "06",
    label: "Data Sharing",
  },
  {
    id: "retention",
    num: "07",
    label: "Retention",
  },
  {
    id: "rights",
    num: "08",
    label: "Your Rights",
  },
  {
    id: "cookies",
    num: "09",
    label: "Cookies",
  },
  {
    id: "children",
    num: "10",
    label: "Children",
  },
  {
    id: "changes",
    num: "11",
    label: "Changes",
  },
];

export default function PrivacyPage() {
  return (
    <SiteShell>
      <LegalLayout
        eyebrow="DOCUMENT · 01 / PRIVACY"
        title="Privacy Policy"
        intro="What data we touch, where it goes, and what stays between you and the chain"
        lastUpdated="April 19, 2026"
        docCode="DOC.PRI.v2026.04"
        sections={sections}
      >
        <PrivacyContent />
      </LegalLayout>
    </SiteShell>
  );
}
