import type { Metadata } from "next";
import { AppShell } from "@/components/app/app-shell";
import {
  ApplicationPortfolioContent,
  ApplicationPortfolioContentExtra,
} from "@/content/app/portfolio";

export const metadata: Metadata = { title: "Portfolio — Corvid" };

export default function Page() {
  return (
    <AppShell mainClassName="pt-14 flex-1" bare={false}>
      <ApplicationPortfolioContent />
      <ApplicationPortfolioContentExtra />
    </AppShell>
  );
}
