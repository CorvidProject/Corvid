"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  CaretDown,
  ChatsCircle,
  Check,
  GearSix,
  List,
  MagnifyingGlass,
  TelegramLogo,
  Tray,
  Wallet,
  XLogo,
} from "@phosphor-icons/react";
import { NAV_SECTIONS, type NavSection } from "@/lib/nav-data";
import { site } from "@/lib/site";
import { NavDropdown } from "@/components/site/nav-dropdown";
import { useSigned } from "@/components/auth/signed";
import { loadSession, signOut } from "@/lib/auth";
import { connectWallet, disconnectWallet, shortAddress, switchToAppChain, useWallet } from "@/lib/wallet";
import { usePlan } from "@/lib/plan-store";
import { getChain } from "@corvid/shared/chains";
import { MobileDrawer } from "./mobile-drawer";

const CHAIN = getChain(process.env.NEXT_PUBLIC_CHAIN_ENV);

// Bagian "More" di navbar aplikasi (ikon dicocokkan dengan bentuk SVG di build referensi).
const MORE_SECTION: NavSection = {
  label: "More",
  columns: [
    [
      {
        title: "Account",
        items: [
          {
            icon: Tray,
            label: "Inbox",
            desc: "Alerts and signals from your agents",
            href: "/application/inbox",
          },
          {
            icon: GearSix,
            label: "Settings",
            desc: "Wallet, alerts and preferences",
            href: "/application/settings",
          },
          {
            icon: ChatsCircle,
            label: "Social",
            desc: "Our X and Telegram",
            href: "/social",
          },
        ],
      },
    ],
  ],
};

const ICON_BTN =
  "h-8 w-8 p-1.5 -m-1.5 box-content flex items-center justify-center rounded-sm transition-colors text-[var(--v2-t-3)] hover:text-[var(--v2-t-1)] hover:bg-[var(--v2-bg-2)]";

function ChainSelector({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        title={`Network: ${CHAIN.name}`}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-1.5 h-8 px-2 rounded-sm text-[12px] font-medium transition-colors"
        style={{
          background: "var(--v2-bg-1)",
          border: "1px solid var(--v2-line-1)",
          color: "var(--v2-t-2)",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.borderColor = "var(--v2-accent)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.borderColor = "var(--v2-line-1)")
        }
      >
        <img src="/brand/robinhood-chain-symbol.png" alt="" aria-hidden width={16} height={16} className="shrink-0" style={{ width: 16, height: 16 }} />
        {!compact && <span className="whitespace-nowrap">{CHAIN.name}</span>}
        <CaretDown size={10} weight="bold" style={{ color: "var(--v2-t-4)" }} />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute top-full right-0 mt-1.5 py-1 rounded-lg min-w-[200px] z-50"
          style={{
            background: "var(--v2-bg-1)",
            border: "1px solid var(--v2-line-1)",
            boxShadow: "0 12px 32px rgba(0,0,0,.45)",
          }}
        >
          <div
            className="px-3 pt-1.5 pb-1 text-[11px] uppercase tracking-[0.06em]"
            style={{ color: "var(--v2-t-4)" }}
          >
            Market data
          </div>
          <div
            role="menuitem"
            className="flex items-center gap-2.5 h-9 px-3 w-full text-left"
            style={{ cursor: "default" }}
          >
            <img src="/brand/robinhood-chain-symbol.png" alt="" aria-hidden width={16} height={16} className="shrink-0" style={{ width: 16, height: 16 }} />
            <span
              className="flex-1 text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              {CHAIN.name}
            </span>
            <Check size={12} weight="bold" style={{ color: "var(--v2-pos)" }} />
          </div>
          <div
            className="px-3 pt-2 pb-1.5 text-[11px]"
            style={{
              color: "var(--v2-t-4)",
              borderTop: "1px solid var(--v2-line-1)",
            }}
          >
            Trading and agents run on {CHAIN.name}
          </div>
        </div>
      )}
    </div>
  );
}

function TokenLink() {
  return (
    <Link
      href="/application/tokenomics"
      className="flex items-center gap-1.5 h-9 px-2.5 rounded-sm transition-colors"
      style={{
        background: "var(--v2-bg-1)",
        border: "1px solid var(--v2-line-1)",
        color: "var(--v2-t-1)",
      }}
      title={`${site.tokenTicker} · launching soon`}
    >
      <span
        className="num text-[11px] font-semibold"
        style={{ color: "var(--v2-accent-text)" }}
      >
        {site.tokenTicker}
      </span>
    </Link>
  );
}

function ConnectButton() {
  return (
    <button
      data-auth-open="signin"
      className="flex items-center gap-1.5 h-8 text-[13px] font-medium whitespace-nowrap transition-colors rounded-full px-2.5"
      style={{ background: "var(--v2-accent)", color: "#fff" }}
    >
      <Wallet size={14} weight="bold" />
      Connect
    </button>
  );
}

// Setelah login tombol Connect diganti menu akun (email, Settings, Sign out).
const PRO_BADGE = {
  background: "rgba(var(--v2-accent-rgb), 0.16)",
  color: "var(--v2-accent-text)",
  border: "1px solid rgba(var(--v2-accent-rgb), 0.45)",
} as const;
function ProBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center px-1.5 h-[18px] font-mono text-[10px] font-semibold tracking-[0.08em] ${className}`} style={{ ...PRO_BADGE, borderRadius: 5 }} aria-label="Pro subscriber">
      PRO
    </span>
  );
}

function AccountMenu() {
  const signed = useSigned();
  const { plan } = usePlan(signed);
  const isPro = plan?.plan === "pro";
  const proUntil = isPro && plan?.proUntil ? new Date(plan.proUntil).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }) : null;
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEmail(loadSession()?.user?.email ?? null);
    if (!signed) setOpen(false);
  }, [signed]);

  useEffect(() => {
    if (!open) return;
    const down = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", down);
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("mousedown", down);
      document.removeEventListener("keydown", key);
    };
  }, [open]);

  const w = useWallet();
  const [walletErr, setWalletErr] = useState<string | null>(null);
  if (!signed && !w.address) return <ConnectButton />;
  const label = email ?? (w.address ? shortAddress(w.address) : "");
  const initial = (email ?? (w.address ? w.address.slice(2) : "?")).trim().charAt(0).toUpperCase() || "?";
  const pickWallet = async (id: string) => {
    setWalletErr(null);
    const r = await connectWallet(id);
    if (r.error) setWalletErr(r.error);
  };
  const item = "flex items-center w-full h-9 px-3 text-[13px] text-left transition-colors hover:bg-[var(--v2-bg-2)]";
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account menu"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 h-8 rounded-full pr-2.5 text-[13px]"
        style={{ paddingLeft: 4, background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)", color: "var(--v2-t-1)" }}
      >
        <span
          className="flex items-center justify-center rounded-full text-[12px] font-semibold"
          style={{ width: 24, height: 24, background: "var(--v2-accent)", color: "#fff" }}
        >
          {initial}
        </span>
        <span className="hidden xl:block truncate" style={{ maxWidth: 140 }}>
          {label}
        </span>
        {isPro && <ProBadge />}
        <CaretDown size={12} />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 rounded-xl overflow-hidden z-50"
          style={{ top: "calc(100% + 8px)", width: 224, background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-2)", boxShadow: "0 12px 40px rgba(0,0,0,0.55)" }}
        >
          <div className="px-3 py-2.5" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[12px] truncate" style={{ color: "var(--v2-t-3)" }}>
                {label}
              </span>
              {isPro && <ProBadge className="shrink-0" />}
            </div>
            {isPro && proUntil && (
              <div className="text-[11px] mt-1" style={{ color: "var(--v2-t-4)" }}>
                Pro active until {proUntil}
              </div>
            )}
          </div>
          {w.address ? (
            <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
              <div className="px-3 pt-2.5 pb-1 text-[11px]" style={{ color: "var(--v2-t-4)" }}>Wallet</div>
              <div className="num px-3 pb-2 text-[12px]" style={{ color: "var(--v2-t-1)" }}>{shortAddress(w.address)}</div>
              {w.wrongChain && w.appChain && (
                <button
                  type="button"
                  role="menuitem"
                  className={item}
                  style={{ color: "var(--v2-warn, var(--v2-t-1))" }}
                  onClick={async () => setWalletErr((await switchToAppChain()).error)}
                >
                  Switch to {w.appChain.name}
                </button>
              )}
              <button type="button" role="menuitem" className={item} style={{ color: "var(--v2-t-2)" }} onClick={() => { setOpen(false); disconnectWallet(); }}>
                Disconnect wallet
              </button>
            </div>
          ) : (
            <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
              {w.wallets.length === 0 ? (
                <div className="px-3 py-2.5 text-[12px]" style={{ color: "var(--v2-t-3)" }}>No wallet detected in this browser</div>
              ) : (
                w.wallets.map((x) => (
                  <button key={x.id} type="button" role="menuitem" disabled={w.busy} className={`${item} gap-2 disabled:opacity-50`} style={{ color: "var(--v2-t-1)" }} onClick={() => pickWallet(x.id)}>
                    <Wallet size={14} /> Connect {x.name}
                  </button>
                ))
              )}
            </div>
          )}
          {walletErr && (
            <div className="px-3 py-2 text-[11px]" style={{ color: "var(--v2-neg)", borderBottom: "1px solid var(--v2-line-1)" }}>{walletErr}</div>
          )}
          <Link role="menuitem" href="/application/pro" onClick={() => setOpen(false)} className={item} style={{ color: "var(--v2-t-1)" }}>
            Plan &amp; usage
          </Link>
          <Link role="menuitem" href="/application/settings" onClick={() => setOpen(false)} className={item} style={{ color: "var(--v2-t-1)" }}>
            Settings
          </Link>
          <button
            type="button"
            role="menuitem"
            className={item}
            style={{ color: "var(--v2-neg)", borderTop: "1px solid var(--v2-line-1)" }}
            onClick={() => {
              setOpen(false);
              disconnectWallet();
              void signOut();
            }}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

// Header aplikasi (port dari komponen asli): navbar dropdown, pencarian, sosial, token, rantai, Connect.
export function AppHeader() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-30 h-14 flex items-center"
        style={{
          background: "var(--v2-bg-0)",
          borderBottom: "1px solid var(--v2-line-1)",
        }}
      >
        <div className="flex lg:hidden items-center w-full px-3">
          <button
            aria-label="Open menu"
            className={ICON_BTN}
            onClick={() => setMenu(true)}
          >
            <List size={16} weight="bold" />
          </button>
          <div className="flex-1 flex justify-center">
            <Link
              href="/"
              aria-label={site.name}
              className="flex items-center gap-2 font-heading font-extrabold tracking-[-0.03em] text-[16px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/corvid-logo-512.png" alt="" width={22} height={22} style={{ width: 22, height: 22 }} />
              {site.name.toUpperCase()}
            </Link>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <ChainSelector compact />
            <TokenLink />
            <AccountMenu />
          </div>
        </div>

        <div className="hidden lg:flex items-center w-full px-4 gap-1">
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 mr-4"
            aria-label={site.name}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/corvid-logo-512.png" alt="" width={24} height={24} style={{ width: 24, height: 24 }} />
            <span
              className="font-heading font-extrabold tracking-[-0.03em] text-[16px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              {site.name.toUpperCase()}
            </span>
          </Link>
          <nav className="flex items-center gap-0.5">
            {[...NAV_SECTIONS, MORE_SECTION].map((s) => (
              <NavDropdown key={s.label} section={s} size="sm" />
            ))}
          </nav>
          <div className="flex-1" />
          <div className="flex items-center gap-1">
            <button
              data-palette-open
              className="group flex items-center gap-2.5 h-9 w-[210px] 2xl:w-[280px] pl-3.5 pr-1.5 rounded-full transition-colors cursor-pointer mr-1"
              style={{
                background: "var(--v2-bg-1)",
                border: "1px solid var(--v2-line-1)",
              }}
            >
              <MagnifyingGlass
                size={14}
                weight="bold"
                style={{ color: "var(--v2-t-4)" }}
              />
              <span
                className="text-[13px] truncate"
                style={{ color: "var(--v2-t-4)" }}
              >
                Search tokens, wallets…
              </span>
              <kbd
                className="num text-[11px] font-medium px-1.5 py-0.5 rounded-full shrink-0 ml-auto"
                style={{ color: "var(--v2-t-4)", background: "var(--v2-bg-2)" }}
              >
                ⌘K
              </kbd>
            </button>
            <a
              aria-label="X"
              className={ICON_BTN}
              href={site.socialLinks.twitter}
              rel="noopener noreferrer"
              target="_blank"
              title="X"
            >
              <XLogo size={14} weight="bold" />
            </a>
            {site.socialLinks.telegram && (
              <a
                aria-label="Telegram"
                className={`${ICON_BTN} ml-1`}
                href={site.socialLinks.telegram}
                rel="noopener noreferrer"
                target="_blank"
                title="Telegram"
              >
                <TelegramLogo size={14} weight="fill" />
              </a>
            )}
            <div
              className="mx-1.5 h-5 w-px shrink-0"
              style={{ background: "var(--v2-line-1)" }}
            />
            <TokenLink />
            <div
              className="mx-1.5 h-5 w-px shrink-0"
              style={{ background: "var(--v2-line-1)" }}
            />
            <ChainSelector />
            <div
              className="mx-1.5 h-5 w-px shrink-0"
              style={{ background: "var(--v2-line-1)" }}
            />
            <AccountMenu />
          </div>
        </div>
      </header>
      <MobileDrawer open={menu} onClose={() => setMenu(false)} />
    </>
  );
}
