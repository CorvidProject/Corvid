import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { RevealObserver } from "@/components/landing/reveal-observer";
import { SocialContent } from "@/content/social";

export const metadata: Metadata = {
  title: "Corvid | Autonomous trading agents on Robinhood Chain",
  description:
    "Token risk reports, smart-money tracking and agents that trade from your own wallet on Robinhood Chain.",
};

export default function SocialPage() {
  return (
    <SiteShell>
      <RevealObserver />
      <main className="">
        <SocialContent />
      </main>
    </SiteShell>
  );
}
