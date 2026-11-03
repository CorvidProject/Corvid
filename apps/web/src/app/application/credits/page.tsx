import { getData } from "@/lib/data";
import { Page, Panel, Stat } from "@/components/ui";

export const metadata = { title: "Credits | Corvid" };

export default async function Credits() {
  const p = await getData("profile");
  return (
    <Page title="Credits" subtitle="Credits pay for AI analysis and automation." width={760}>
      <div className="grid sm:grid-cols-2 gap-3 mb-4"><Stat label="Balance" value={p.credits} /><Stat label="Plan" value={p.plan} /></div>
      <Panel><button disabled className="btn-v2 btn-v2-primary">Top up (disabled)</button></Panel>
    </Page>
  );
}
