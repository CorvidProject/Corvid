import type { ReactNode } from "react";

export function Page({ title, subtitle, actions, children, width = 1200 }: { title: string; subtitle?: string; actions?: ReactNode; children: ReactNode; width?: number }) {
  return (
    <main className="pt-[88px] pb-16 px-3 sm:px-6 flex-1">
      <div className="mx-auto" style={{ maxWidth: width }}>
        <div className="flex items-end justify-between gap-4 mb-5 flex-wrap">
          <div>
            <h1 className="text-[22px] font-semibold leading-tight" style={{ color: "var(--v2-t-1)" }}>{title}</h1>
            {subtitle && <p className="text-[13px] mt-1" style={{ color: "var(--v2-t-4)" }}>{subtitle}</p>}
          </div>
          {actions}
        </div>
        {children}
      </div>
    </main>
  );
}

export const Panel = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <section className={`panel rounded-2xl p-4 ${className}`}>{children}</section>
);

export const Stat = ({ label, value, tone }: { label: string; value: ReactNode; tone?: "pos" | "neg" }) => (
  <div className="panel rounded-2xl p-4">
    <p className="eyebrow">{label}</p>
    <p className="text-[22px] font-semibold tabular-nums mt-1" style={{ color: tone ? `var(--v2-${tone})` : "var(--v2-t-1)" }}>{value}</p>
  </div>
);

export const Tone = ({ v, children }: { v: number | null | undefined; children: ReactNode }) => (
  <span className="tabular-nums" style={{ color: v == null ? "var(--v2-t-4)" : v >= 0 ? "var(--v2-pos)" : "var(--v2-neg)" }}>{children}</span>
);

export const DryBanner = ({ text = "Mode dry: tidak ada transaksi nyata yang dikirim." }: { text?: string }) => (
  <div className="rounded-xl px-3 py-2 text-[12px] mb-4" style={{ background: "var(--v2-warn-dim)", color: "var(--v2-warn)", border: "1px solid var(--v2-line-2)" }}>{text}</div>
);

export const Empty = ({ children }: { children: ReactNode }) => (
  <div className="py-16 text-center text-[13px]" style={{ color: "var(--v2-t-4)" }}>{children}</div>
);

export function Table({ head, children, right = [] }: { head: string[]; children: ReactNode; right?: number[] }) {
  return (
    <div className="panel rounded-2xl overflow-x-auto">
      <table className="v2-table w-full text-[13px]">
        <thead><tr>{head.map((h, i) => <th key={h} className={right.includes(i) ? "text-right" : "text-left"}>{h}</th>)}</tr></thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
