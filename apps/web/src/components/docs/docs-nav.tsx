"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

interface DocsItem {
  label: string;
  href: string;
}
interface DocsGroup {
  title: string;
  items: DocsItem[];
}

const GROUPS: DocsGroup[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs" },
      { label: "Quick Start", href: "/docs/quick-start" },
      { label: "Credits & Billing", href: "/docs/credits" },
    ],
  },
  {
    title: "Pipelines",
    items: [
      { label: "How Pipelines Work", href: "/docs/agents" },
      { label: "Follow Wallet", href: "/docs/agents/follow-wallet" },
      { label: "New Tokens", href: "/docs/agents/new-tokens" },
      { label: "Token Trading", href: "/docs/agents/token-trading" },
      { label: "Templates", href: "/docs/agents/templates" },
    ],
  },
  {
    title: "Marketplace",
    items: [{ label: "Browse & Follow", href: "/docs/agents/marketplace" }],
  },
  {
    title: "Signals",
    items: [
      { label: "Signal Types", href: "/docs/signals" },
      { label: "Telegram Setup", href: "/docs/signals/telegram" },
    ],
  },
  {
    title: "Features",
    items: [
      { label: "Terminal", href: "/docs/terminal" },
      { label: "Portfolio", href: "/docs/portfolio" },
      { label: "Wallet Tracking", href: "/docs/wallet-tracking" },
      { label: "Token Analysis", href: "/docs/token-analysis" },
      { label: "Risk Scoring", href: "/docs/risk-scoring" },
    ],
  },
  {
    title: "Economy",
    items: [
      { label: "Splits & Fees", href: "/docs/economy" },
      { label: "Following", href: "/docs/following" },
      { label: "Graduation", href: "/docs/graduation" },
      { label: "Backing (Soon)", href: "/docs/backing" },
      { label: "Buyback (Soon)", href: "/docs/buyback" },
    ],
  },
  {
    title: `${site.tokenTicker} Token`,
    items: [
      { label: "Token Utilities", href: "/docs/token" },
      { label: "Burn Dashboard", href: "/docs/burn-dashboard" },
    ],
  },
];

// Navigasi samping dokumentasi (port dari komponen asli).
export function DocsNav() {
  const pathname = usePathname();
  let counter = 0;
  return (
    <nav className="flex flex-col gap-7">
      {GROUPS.map((group, gi) => (
        <div key={group.title}>
          <div className="flex items-center gap-2 mb-3 px-1">
            <span
              className="font-mono text-[11px] tracking-[0.06em] uppercase"
              style={{ color: "var(--v2-accent-text)" }}
            >
              {String(gi + 1).padStart(2, "0")}
            </span>
            <span
              className="font-mono text-[11px] font-semibold tracking-[0.06em] uppercase"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              {group.title}
            </span>
            <span
              className="flex-1 h-px"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
          </div>
          <ul className="flex flex-col">
            {group.items.map((item) => {
              counter += 1;
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 py-1.5 pl-3 pr-2 border-l-2 font-mono text-[11px] tracking-[0.04em] uppercase transition-colors"
                    style={{
                      borderColor: active
                        ? "var(--v2-accent)"
                        : "rgba(255,255,255,0.06)",
                      color: active ? "#FFFFFF" : "rgba(255,255,255,0.50)",
                      background: active
                        ? "rgba(var(--v2-accent-rgb),0.05)"
                        : "transparent",
                    }}
                  >
                    <span
                      style={{
                        color: active
                          ? "var(--v2-accent-text)"
                          : "rgba(255,255,255,0.25)",
                      }}
                    >
                      {String(counter).padStart(2, "0")}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
