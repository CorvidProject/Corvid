import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { LegalLayout } from "@/components/site/legal-layout";
import { AboutContent } from "@/content/about";

export const metadata: Metadata = {
  title: "About · Corvid",
  description:
    "Who operates Corvid, how to reach us, and which accounts are official.",
};

const sections = [
  {
    id: "company",
    num: "01",
    label: "Company",
  },
  {
    id: "product",
    num: "02",
    label: "What We Build",
  },
  {
    id: "contact",
    num: "03",
    label: "Contact",
  },
  {
    id: "official",
    num: "04",
    label: "Official Accounts",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <LegalLayout
        eyebrow="DOCUMENT · 03 / ABOUT"
        title="About Corvid"
        intro="Who operates this service, how to reach a human, and which accounts speak for us"
        lastUpdated="September 30, 2026"
        docCode="DOC.ABT.v2026.09"
        sections={sections}
      >
        <AboutContent />
      </LegalLayout>
    </SiteShell>
  );
}
