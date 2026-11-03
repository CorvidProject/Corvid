import { getData } from "@/lib/data";
import { Page } from "@/components/ui";
import { TokenTable } from "@/components/token-table";

export const metadata = { title: "Latest | Corvid" };

export default async function Latest() {
  const { tokens } = await getData("tokens-new");
  return <Page title="Latest" subtitle="Newest tokens first."><TokenTable tokens={tokens} /></Page>;
}
