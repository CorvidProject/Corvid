import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app/app-shell";
import { TokenDetailContent } from "@/content/app/token-detail";

export const metadata: Metadata = { title: "Token · Corvid App" };

const SOLANA_MINT = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

export default async function Page({ params }: { params: Promise<{ mint: string }> }) {
  const { mint } = await params;
  if (!SOLANA_MINT.test(mint)) notFound(); // bukan alamat Solana (mis. 0x…): 404 bersih
  return (
    <AppShell mainClassName="pt-[80px] pb-10 px-3 sm:px-5 flex-1" bare={false}>
      <TokenDetailContent mint={mint} />
    </AppShell>
  );
}
