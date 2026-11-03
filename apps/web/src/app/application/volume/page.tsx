import { getData } from "@/lib/data";
import { Page } from "@/components/ui";
import { TokenTable } from "@/components/token-table";

export const metadata = { title: "Volume | Corvid" };

export default async function Volume() {
  const { tokens } = await getData("tokens-trending");
  const sorted = [...tokens].sort((a, b) => b.volume - a.volume);
  return <Page title="Volume" subtitle="Highest 24h volume."><TokenTable tokens={sorted} /></Page>;
}
