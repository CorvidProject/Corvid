import type { Metadata } from "next";
import { SiteNav } from "@/components/site/site-nav";
import { AboutContent } from "@/components/site/about-content";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "About · Corvid",
  description: "Who operates Corvid, how to reach us, and which accounts are official.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <AboutContent />
      <SiteFooter />
    </>
  );
}
