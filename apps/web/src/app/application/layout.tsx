import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  { href: "/application/terminal", label: "Terminal" },
  { href: "/application/alpha", label: "Smart Wallets" },
  { href: "/application/memescope", label: "Memescope" },
  { href: "/application/agents", label: "Agents" },
  { href: "/application/marketplace", label: "Marketplace" },
  { href: "/application/portfolio", label: "Portfolio" },
  { href: "/application/chat", label: "Chat" },
  { href: "/application/inbox", label: "Inbox" },
];
const mobile = nav.filter((n) => ["Terminal", "Smart Wallets", "Agents", "Portfolio"].includes(n.label));

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen app-shell" style={{ background: "var(--v2-bg-0)" }}>
      <header className="fixed top-0 left-0 right-0 z-30 h-[64px] flex items-center px-4 gap-6" style={{ background: "var(--v2-bg-0)", borderBottom: "1px solid var(--v2-line-1)" }}>
        <Link href="/" className="font-heading font-extrabold text-[20px] tracking-tight" style={{ color: "var(--v2-t-0)" }} data-placeholder="logo">Corvid</Link>
        <nav className="hidden lg:flex items-center gap-5 text-[13px]" aria-label="Primary">
          {nav.map((n) => <Link key={n.href} href={n.href} style={{ color: "var(--v2-t-3)" }} className="hover:brightness-125">{n.label}</Link>)}
        </nav>
        <div className="ml-auto flex items-center gap-3 text-[13px]">
          <Link href="/application/pro" className="btn-v2 btn-v2-ghost btn-v2-sm">Pro</Link>
          <Link href="/application/settings" className="btn-v2 btn-v2-primary btn-v2-sm">Settings</Link>
        </div>
      </header>
      <div className="flex-1 flex flex-col pb-[calc(env(safe-area-inset-bottom,0px)+64px)] lg:pb-[30px]">{children}</div>
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 flex" style={{ background: "var(--v2-bg-0)", borderTop: "1px solid var(--v2-line-1)" }} aria-label="Primary mobile">
        {mobile.map((n) => <Link key={n.href} href={n.href} className="flex-1 text-center py-3 text-[11px] font-medium" style={{ color: "var(--v2-t-3)" }}>{n.label}</Link>)}
      </nav>
      <footer className="hidden lg:flex fixed bottom-0 left-0 right-0 z-20 items-center justify-between px-4 text-[11px]" style={{ height: 30, background: "var(--v2-bg-0)", borderTop: "1px solid var(--v2-line-1)", color: "var(--v2-t-4)" }}>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5"><span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "var(--v2-warn)" }} />Fixtures</span>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <span>Solana · trade mode: dry</span>
      </footer>
    </div>
  );
}
