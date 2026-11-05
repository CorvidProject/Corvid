"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  BookOpen,
  Brain,
  ChartLineUp,
  Fire,
  GearSix,
  Robot,
  ShieldStar,
  Tray,
  UserCircle,
  Users,
  UsersThree,
  Wallet,
  X,
  type Icon,
} from "@phosphor-icons/react";
import { site } from "@/lib/site";

type Item = { icon: Icon; label: string; href: string };

const SECTIONS: { label: string; items: Item[] }[] = [
  {
    label: "Trade",
    items: [
      { icon: ChartLineUp, label: "Terminal", href: "/application/terminal" },
      { icon: Fire, label: "Smart Wallets", href: "/application/alpha" },
    ],
  },
  {
    label: "Agents",
    items: [
      { icon: Users, label: "All agents", href: "/application/agents" },
      { icon: Robot, label: "Builder", href: "/application/agents/new" },
      { icon: Brain, label: "Chat", href: "/application/chat" },
    ],
  },
  {
    label: "Economy",
    items: [
      { icon: ShieldStar, label: "Plan & Usage", href: "/application/pro" },
      { icon: Fire, label: "Tokenomics", href: "/application/tokenomics" },
    ],
  },
  {
    label: "Account",
    items: [
      { icon: Tray, label: "Inbox", href: "/application/inbox" },
      { icon: Wallet, label: "Portfolio", href: "/application/portfolio" },
      { icon: GearSix, label: "Settings", href: "/application/settings" },
    ],
  },
  {
    label: "More",
    items: [
      { icon: BookOpen, label: "Docs", href: "/docs" },
      { icon: UsersThree, label: "Social", href: "/social" },
    ],
  },
];

// Menu samping mobile (tombol garis tiga): port dari drawer referensi.
export function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", k);
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="lg:hidden fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <aside
        className="absolute left-0 top-0 bottom-0 w-[280px] flex flex-col cv-drawer-in"
        style={{
          background: "var(--v2-bg-0)",
          borderRight: "1px solid var(--v2-line-1)",
        }}
      >
        <div
          className="flex items-center shrink-0 h-12 px-4 gap-2.5"
          style={{ borderBottom: "1px solid var(--v2-line-1)" }}
        >
          <Link
            href="/application"
            className="text-[14px] font-semibold tracking-tight truncate"
            style={{ color: "var(--v2-t-1)" }}
          >
            {site.name}
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-sm transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ color: "var(--v2-t-3)" }}
          >
            <X size={18} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto overflow-x-hidden py-3">
          {SECTIONS.map((s) => (
            <div key={s.label}>
              <p
                className="eyebrow mx-3 mb-2 mt-5 flex items-center h-6"
                style={{
                  color: "var(--v2-t-4)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                }}
              >
                {s.label}
              </p>
              <div className="flex flex-col gap-0.5">
                {s.items.map(({ icon: Ic, label, href }) => {
                  const on = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center h-11 rounded-sm mx-3 px-3 gap-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                      style={{
                        background: on ? "var(--v2-bg-2)" : "transparent",
                        color: on ? "var(--v2-t-1)" : "var(--v2-t-3)",
                      }}
                    >
                      <Ic
                        size={17}
                        weight={on ? "fill" : "regular"}
                        className="shrink-0"
                      />
                      <span
                        className={`text-[13px] flex-1 ${on ? "font-medium" : ""}`}
                      >
                        {label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
        <div
          className="flex items-center h-12 mx-3 px-2 gap-3 shrink-0"
          style={{ borderTop: "1px solid var(--v2-line-1)" }}
        >
          <UserCircle size={24} style={{ color: "var(--v2-t-4)" }} />
          <span
            className="text-[12px] truncate flex-1"
            style={{ color: "var(--v2-t-2)" }}
          >
            Guest
          </span>
        </div>
      </aside>
    </div>
  );
}
