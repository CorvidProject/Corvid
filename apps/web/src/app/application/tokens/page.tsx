import { getData } from "@/lib/data";
import { Page } from "@/components/ui";
import { TokenTable } from "@/components/token-table";

export const metadata = { title: "Tokens | Corvid" };

export default async function Tokens() {
  const { tokens } = await getData("tokens-trending");
  return <Page title="Tokens" subtitle="All tracked Solana tokens."><TokenTable tokens={tokens} /></Page>;
}
