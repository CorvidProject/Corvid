"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import {
  ChartLineUp,
  Fire,
  Lightning,
  Robot,
  Wallet,
} from "@phosphor-icons/react";
import { site } from "@/lib/site";
import { AppHeader } from "./app-header";

const MOBILE_TABS = [
  { href: "/application/terminal", label: "Terminal", icon: ChartLineUp },
  { href: "/application/alpha", label: "Smart Wallets", icon: Fire },
  { href: "/application/agents", label: "Agents", icon: Robot },
  { href: "/application/portfolio", label: "Wallet", icon: Wallet },
];

function StatusBar() {
  const [sol, setSol] = useState<string>("—");
  useEffect(() => {
    let alive = true;
    const load = () =>
      fetch("/api/prices/sol")
        .then((r) => (r.ok ? r.json() : null))
        .then((j) => {
          if (alive && j && typeof j.usd === "number")
            setSol(`$${j.usd.toFixed(2)}`);
        })
        .catch(() => {});
    load();
    const t = setInterval(load, 30000);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, []);

  return (
    <footer
      className="hidden lg:flex fixed bottom-0 left-0 right-0 z-20 items-center justify-between px-4 text-[11px] font-medium select-none"
      style={{
        height: 30,
        background: "var(--v2-bg-0)",
        borderTop: "1px solid var(--v2-line-1)",
        color: "var(--v2-t-4)",
      }}
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "var(--v2-pos)" }}
          />
          Live
        </span>
        <span
          className="w-px h-3.5"
          style={{ background: "var(--v2-line-1)" }}
        />
        <a
          className="transition-colors hover:brightness-125"
          href="/terms"
          style={{ color: "var(--v2-t-4)" }}
        >
          Terms of Service
        </a>
        <a
          className="transition-colors hover:brightness-125"
          href="/privacy"
          style={{ color: "var(--v2-t-4)" }}
        >
          Privacy Policy
        </a>
      </div>
      <div className="flex items-center gap-3">
        <span
          className="flex items-center gap-1 tabular-nums rounded px-1 transition-colors"
          style={{ color: "var(--v2-t-3)" }}
        >
          <Image
            src="/chains/solana.png"
            alt="SOL"
            width={12}
            height={12}
            className="rounded-full shrink-0"
          />
          SOL {sol}
        </span>
        <span
          className="w-px h-3.5"
          style={{ background: "var(--v2-line-1)" }}
        />
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--v2-neg)" }}
          />
          <span style={{ color: "var(--v2-neg)" }}>Offline</span>
        </span>
        <span
          className="w-px h-3.5"
          style={{ background: "var(--v2-line-1)" }}
        />
        <a
          className="transition-colors hover:brightness-125"
          href={site.socialLinks.telegram}
          rel="noopener noreferrer"
          style={{ color: "var(--v2-t-4)" }}
          target="_blank"
        >
          Support
        </a>
        <span
          className="w-px h-3.5"
          style={{ background: "var(--v2-line-1)" }}
        />
        <a
          className="flex items-center gap-1 tabular-nums transition-colors hover:brightness-125"
          href="/application/credits"
          style={{ color: "var(--v2-warn)" }}
        >
          <Lightning size={12} weight="fill" />0 credits
        </a>
      </div>
    </footer>
  );
}

// Kerangka layar aplikasi: header tetap, isi halaman, bilah tab mobile, dan bilah status bawah.
export function AppShell({
  mainClassName,
  bare = false,
  children,
}: {
  mainClassName: string;
  bare?: boolean;
  children: ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-col min-h-screen app-shell">
        <div className="flex-1 flex flex-col">
          <div className="pb-[calc(env(safe-area-inset-bottom,0px)+64px)] lg:pb-[30px]">
            {bare ? (
              children
            ) : (
              <>
                <AppHeader />
                <main className={mainClassName}>{children}</main>
              </>
            )}
          </div>
        </div>
      </div>
      <nav
        aria-label="Primary"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-30 flex"
        style={{
          background: "var(--v2-bg-0)",
          borderTop: "1px solid var(--v2-line-1)",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        {MOBILE_TABS.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2"
            style={{
              color:
                pathname === href ? "var(--v2-accent-text)" : "var(--v2-t-3)",
              minHeight: 52,
            }}
          >
            <Icon size={20} weight={pathname === href ? "fill" : "regular"} />
            <span className="text-[11px] font-medium tracking-wide">
              {label}
            </span>
          </Link>
        ))}
      </nav>
      <StatusBar />
    </>
  );
}
