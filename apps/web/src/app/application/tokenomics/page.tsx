import { getData } from "@/lib/data";
import { Page, Panel, Stat } from "@/components/ui";

export const metadata = { title: "Tokenomics | Corvid" };

export default async function Tokenomics() {
  const t = await getData("tokenomics");
  return (
    <Page title="Tokenomics" subtitle="$CRVD has not launched. Figures appear after launch." width={900}>
      <div className="grid sm:grid-cols-3 gap-3 mb-4">
        <Stat label="Token" value={"$" + t.token} />
        <Stat label="Status" value={t.status.replace("_", " ")} />
        <Stat label="Burned" value={t.burned} />
      </div>
      <Panel><p className="text-[13px]" style={{ color: "var(--v2-t-3)" }}>No burn events yet.</p></Panel>
    </Page>
  );
}
