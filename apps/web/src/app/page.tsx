import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { RevealObserver } from "@/components/landing/reveal-observer";
import { Hero } from "@/content/landing/hero";
import { BuiltOn } from "@/content/landing/built-on";
import { HowItWorks } from "@/content/landing/how-it-works";
import { LiveDemoSection } from "@/content/landing/live-demo-section";
import { Agents } from "@/content/landing/agents";
import { Roadmap } from "@/content/landing/roadmap";
import { TokenSection } from "@/content/landing/token-section";
import { FaqSection } from "@/content/landing/faq-section";
import { FooterCta } from "@/content/landing/footer-cta";

export const metadata: Metadata = {
  title: "Corvid",
  description:
    "Autonomous trading agents on Robinhood Chain. Analyze tokens with AI, deploy autonomous trading agents, and execute on-chain swaps. Built on Robinhood Chain, with real-time data from GeckoTerminal.",
};

export default function HomePage() {
  return (
    <SiteShell>
      <RevealObserver />
      <main className="">
        <Hero />
        <BuiltOn />
        <HowItWorks />
        <LiveDemoSection />
        <Agents />
        <Roadmap />
        <TokenSection />
        <FaqSection />
        <FooterCta />
      </main>
    </SiteShell>
  );
}
