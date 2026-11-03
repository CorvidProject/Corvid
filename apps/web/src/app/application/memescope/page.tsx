import { getData, short, usd } from "@/lib/data";
import { Page, Panel } from "@/components/ui";

export const metadata = { title: "Memescope | Corvid" };

type Coin = { mint: string; name: string; symbol: string; image?: string | null; progress: number; marketCapUsd: number };

function Column({ title, coins }: { title: string; coins: Coin[] }) {
  return (
    <Panel>
      <p className="eyebrow mb-3">{title}</p>
      <ul className="flex flex-col gap-2">
        {coins.slice(0, 12).map((c) => (
          <li key={c.mint} className="flex items-center justify-between gap-2 text-[13px]">
            <span className="truncate"><span className="font-medium">{c.symbol}</span> <span style={{ color: "var(--v2-t-4)" }}>{short(c.mint)}</span></span>
            <span className="tabular-nums">{usd(c.marketCapUsd, 0)}</span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export default async function Memescope() {
  const m = await getData("memescope");
  return (
    <Page title="Memescope" subtitle="New, about to graduate, and migrated launches on Solana.">
      <div className="grid md:grid-cols-3 gap-4">
        <Column title="New" coins={m.new as Coin[]} />
        <Column title="About to graduate" coins={m.stretch as Coin[]} />
        <Column title="Migrated" coins={m.migrated as Coin[]} />
      </div>
    </Page>
  );
}
