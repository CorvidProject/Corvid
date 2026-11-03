import Link from "next/link";
import { compact, pct, short, usd } from "@/lib/data";
import { Table, Tone } from "./ui";

export type TokenRow = {
  mint: string; symbol: string; name: string; image?: string | null; price: number; marketCap: number; liquidity: number;
  volume: number; change5m: number; change1h: number; change24h: number; riskScore?: number | null; top10?: number | null;
};

export function TokenTable({ tokens }: { tokens: TokenRow[] }) {
  return (
    <Table head={["Token", "Price", "5m", "1h", "24h", "Volume", "Liquidity", "MCap", "Risk"]} right={[1, 2, 3, 4, 5, 6, 7, 8]}>
      {tokens.map((t) => (
        <tr key={t.mint}>
          <td>
            <Link href={`/application/terminal?mint=${t.mint}`} className="flex items-center gap-2">
              {t.image ? <img src={t.image} alt="" width={22} height={22} className="rounded-full" /> : <span className="inline-block w-[22px] h-[22px] rounded-full" style={{ background: "var(--v2-bg-3)" }} />}
              <span className="font-medium" style={{ color: "var(--v2-t-1)" }}>{t.symbol}</span>
              <span className="text-[11px]" style={{ color: "var(--v2-t-4)" }}>{short(t.mint)}</span>
            </Link>
          </td>
          <td className="text-right tabular-nums">{usd(t.price)}</td>
          <td className="text-right"><Tone v={t.change5m}>{pct(t.change5m)}</Tone></td>
          <td className="text-right"><Tone v={t.change1h}>{pct(t.change1h)}</Tone></td>
          <td className="text-right"><Tone v={t.change24h}>{pct(t.change24h)}</Tone></td>
          <td className="text-right tabular-nums">{usd(t.volume, 0)}</td>
          <td className="text-right tabular-nums">{usd(t.liquidity, 0)}</td>
          <td className="text-right tabular-nums">{compact(t.marketCap)}</td>
          <td className="text-right tabular-nums">{t.riskScore ?? "—"}</td>
        </tr>
      ))}
    </Table>
  );
}
