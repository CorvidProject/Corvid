import { getData, short } from "@/lib/data";
import { DryBanner, Page, Panel } from "@/components/ui";

export const metadata = { title: "Settings | Corvid" };

export default async function Settings() {
  const [profile, prefs] = await Promise.all([getData("profile"), getData("trading-prefs")]);
  return (
    <Page title="Settings" subtitle="Account and trading preferences." width={760}>
      <DryBanner />
      <div className="flex flex-col gap-4">
        <Panel>
          <p className="eyebrow mb-2">Account</p>
          <dl className="grid grid-cols-[120px_1fr] gap-y-2 text-[13px]">
            <dt style={{ color: "var(--v2-t-4)" }}>Email</dt><dd>{profile.email}</dd>
            <dt style={{ color: "var(--v2-t-4)" }}>Name</dt><dd>{profile.displayName}</dd>
            <dt style={{ color: "var(--v2-t-4)" }}>Wallet</dt><dd>{short(profile.wallet)}</dd>
            <dt style={{ color: "var(--v2-t-4)" }}>Credits</dt><dd>{profile.credits}</dd>
          </dl>
        </Panel>
        <Panel>
          <p className="eyebrow mb-2">Trading</p>
          <form className="flex flex-col gap-3 text-[13px]">
            <label className="flex flex-col gap-1">Slippage (bps)<input className="input-v2" type="number" defaultValue={prefs.slippageBps} /></label>
            <label className="flex flex-col gap-1">Priority fee (lamports)<input className="input-v2" type="number" defaultValue={prefs.priorityFeeLamports} /></label>
            <button type="button" disabled className="btn-v2 btn-v2-primary self-start">Save (needs backend)</button>
          </form>
        </Panel>
      </div>
    </Page>
  );
}
