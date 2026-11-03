import { DryBanner, Page, Panel } from "@/components/ui";

export const metadata = { title: "Swap | Corvid" };

export default function Swap() {
  return (
    <Page title="Swap" subtitle="Routes through Jupiter on Solana." width={520}>
      <DryBanner text="TRADE_MODE=dry: swaps are simulated, no transaction is sent." />
      <Panel>
        <form className="flex flex-col gap-3 text-[13px]">
          <label className="flex flex-col gap-1">You pay (SOL)<input className="input-v2" type="number" step="0.01" defaultValue="0.1" /></label>
          <label className="flex flex-col gap-1">You receive<input className="input-v2" placeholder="Token mint address" /></label>
          <button type="button" disabled className="btn-v2 btn-v2-primary">Simulate swap (needs backend)</button>
        </form>
      </Panel>
    </Page>
  );
}
