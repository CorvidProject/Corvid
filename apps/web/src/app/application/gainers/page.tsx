import { getData } from "@/lib/data";
import { Page } from "@/components/ui";
import { TokenTable } from "@/components/token-table";

export const metadata = { title: "Gainers | Corvid" };

export default async function Gainers() {
  const { tokens } = await getData("tokens-trending");
  const sorted = [...tokens].sort((a, b) => b.change24h - a.change24h);
  return <Page title="Gainers" subtitle="Top 24h movers."><TokenTable tokens={sorted} /></Page>;
}
