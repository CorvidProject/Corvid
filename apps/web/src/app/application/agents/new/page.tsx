import { DryBanner, Page, Panel } from "@/components/ui";

export const metadata = { title: "New agent | Corvid" };

const types = [
  ["wallet_monitor", "Wallet monitor", "Alerts when followed wallets trade."],
  ["signal_bot", "Signal bot", "Alerts on one token only."],
  ["token_analyst", "Token analyst", "Risk reports on new tokens."],
  ["auto_trader", "Auto trader", "Trades from your wallet within the caps you set."],
];

export default function NewAgent() {
  return (
    <Page title="New agent" subtitle="Pick a type, set the caps, and start in dry mode." width={760}>
      <DryBanner />
      <Panel>
        <form className="flex flex-col gap-4">
          <label className="flex flex-col gap-1 text-[13px]">Name<input className="input-v2" name="name" placeholder="My agent" /></label>
          <fieldset className="flex flex-col gap-2">
            <legend className="eyebrow mb-1">Type</legend>
            {types.map(([v, l, d], i) => (
              <label key={v} className="flex items-start gap-2 text-[13px]">
                <input type="radio" name="type" value={v} defaultChecked={i === 0} />
                <span><span className="font-medium">{l}</span><br /><span style={{ color: "var(--v2-t-4)" }}>{d}</span></span>
              </label>
            ))}
          </fieldset>
          <label className="flex flex-col gap-1 text-[13px]">Max SOL per trade<input className="input-v2" name="maxSol" type="number" step="0.01" defaultValue="0.1" /></label>
          <button type="button" disabled className="btn-v2 btn-v2-primary self-start">Create agent (needs backend)</button>
        </form>
      </Panel>
    </Page>
  );
}
