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
        title="Market data: Solana"
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
        <Image
          src="/chains/solana.png"
          alt=""
          width={16}
          height={16}
          className="rounded-full shrink-0"
        />
        {!compact && <span>Solana</span>}
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
            <Image
              src="/chains/solana.png"
              alt=""
              width={18}
              height={18}
              className="rounded-full shrink-0"
            />
            <span
              className="flex-1 text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              Solana
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
            Trading and agents run on Solana
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

// Header aplikasi (port dari komponen asli): navbar dropdown, pencarian, sosial, token, rantai, Connect.
export function AppHeader() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-30 h-14 flex items-center"
      style={{
        background: "var(--v2-bg-0)",
        borderBottom: "1px solid var(--v2-line-1)",
      }}
    >
      <div className="flex lg:hidden items-center w-full px-3">
        <button aria-label="Open menu" className={ICON_BTN}>
          <List size={16} weight="bold" />
        </button>
        <div className="flex-1 flex justify-center">
          <Link
            href="/"
            data-placeholder="logo"
            className="font-heading font-extrabold tracking-[-0.03em] text-[16px]"
            style={{ color: "var(--v2-t-1)" }}
          >
            {site.name.toUpperCase()}
          </Link>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <ChainSelector compact />
          <TokenLink />
          <ConnectButton />
        </div>
      </div>

      <div className="hidden lg:flex items-center w-full px-4 gap-1">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 mr-4"
          data-placeholder="logo"
        >
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
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}
