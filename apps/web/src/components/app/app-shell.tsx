"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { apiGet } from "@/lib/api";
import { usePlan } from "@/lib/plan-store";
import { useSigned } from "@/components/auth/signed";
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
  // Harga ETH dari /api/prices/native (CoinGecko lewat API kita). Status Live/Offline = hasil pengambilan itu (API terjangkau atau tidak).
  const [ethPrice, setEthPrice] = useState<string>("—");
  const [online, setOnline] = useState<boolean | null>(null);
  const signed = useSigned();
  const { plan } = usePlan(signed);
  useEffect(() => {
    let alive = true;
    const load = () =>
      apiGet<{ usd?: number }>("/api/prices/native")
        .then((j) => {
          if (!alive) return;
          setOnline(true);
          if (j && typeof j.usd === "number") setEthPrice(`$${j.usd.toFixed(2)}`);
        })
        .catch(() => {
          if (alive) setOnline(false);
        });
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/corvid-logo-512.png" alt="Corvid" width={16} height={16} style={{ width: 16, height: 16 }} />
        <span
          className="w-px h-3.5"
          style={{ background: "var(--v2-line-1)" }}
        />
        <span className="flex items-center gap-1.5">
          <span
            className={`inline-block w-1.5 h-1.5 rounded-full ${online === false ? "" : "animate-pulse"}`}
            style={{ background: online === false ? "var(--v2-neg)" : "var(--v2-pos)" }}
          />
          <span style={online === false ? { color: "var(--v2-neg)" } : undefined}>{online === false ? "Offline" : "Live"}</span>
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
          ETH price {ethPrice}
        </span>
        {site.socialLinks.telegram && (
          <>
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
          </>
        )}
        {signed && plan && (
          <>
            <span
              className="w-px h-3.5"
              style={{ background: "var(--v2-line-1)" }}
            />
            <a
              className="flex items-center gap-1 tabular-nums transition-colors hover:brightness-125"
              href="/application/credits"
              style={{ color: "var(--v2-warn)" }}
            >
              <Lightning size={12} weight="fill" />
              {plan.credits} credits
            </a>
          </>
        )}
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
