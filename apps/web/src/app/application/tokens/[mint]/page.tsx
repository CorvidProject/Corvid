import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app/app-shell";
import { TokenDetailContent } from "@/content/app/token-detail";

export const metadata: Metadata = { title: "Token | Corvid" };

// Alamat EVM (utama); base58 diterima sementara karena fixture lama masih memuat token Solana.
const TOKEN_ADDRESS = /^(0x[0-9a-fA-F]{40}|[1-9A-HJ-NP-Za-km-z]{32,44})$/;

export default async function Page({ params }: { params: Promise<{ mint: string }> }) {
  const { mint } = await params;
  if (!TOKEN_ADDRESS.test(mint)) notFound(); // bukan alamat token: 404 bersih
  return (
    <AppShell mainClassName="pt-[80px] pb-10 px-3 sm:px-5 flex-1" bare={false}>
      <TokenDetailContent mint={mint} />
    </AppShell>
  );
}
