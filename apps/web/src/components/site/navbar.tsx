"use client";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { List, MagnifyingGlass, TelegramLogo, Wallet, X, XLogo } from "@phosphor-icons/react";
import { NAV_SECTIONS } from "@/lib/nav-data";
import { site } from "@/lib/site";
import { NavDropdown } from "./nav-dropdown";

function SearchLink() {
  return (
    <Link
      href="/application/tokens"
      className="hidden xl:inline-flex items-center gap-2.5 h-11 w-[260px] pl-4 pr-2 rounded-full text-[14px] text-white/45 hover:text-white/70 transition-colors"
      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <MagnifyingGlass size={16} weight="bold" />
      <span className="flex-1">Search tokens, wallets…</span>
      <kbd className="font-mono text-[11px] px-1.5 py-0.5 rounded-md text-white/45" style={{ background: "rgba(255,255,255,0.07)" }}>
        ⌘K
      </kbd>
    </Link>
  );
}

function IconLink({ href, label, plain = false, children }: { href: string; label: string; plain?: boolean; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center rounded-full transition-colors duration-150 ${
        plain ? "w-9 h-11 text-white/55 hover:text-white" : "w-11 h-11 text-white/75 hover:text-white bg-white/[0.06] hover:bg-white/[0.11]"
      }`}
    >
      {children}
    </Link>
  );
}

const MOBILE_LINKS = NAV_SECTIONS.flatMap((s) => s.columns.flat().flatMap((g) => g.items)).filter((i) => !i.soon);

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  // padanan perilaku asli: status "scrolled" dilacak, latar navbar selalu gelap pada brand ini
  const [, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          background: "rgba(19,23,27,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="mx-auto px-6 lg:px-16" style={{ maxWidth: 1440 }}>
          <div className="flex h-[72px] items-center">
            {/* Logo gambar belum diberikan: wordmark teks sebagai placeholder */}
            <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-70 shrink-0 mr-3" data-placeholder="logo">
              <span
                className="font-heading font-extrabold tracking-[-0.04em] leading-none"
                style={{ fontSize: "1.25rem", color: "#fff" }}
              >
                {site.name.toUpperCase()}
              </span>
            </Link>

            <div className="hidden lg:flex flex-1 items-center justify-start gap-1 ml-6">
              {NAV_SECTIONS.map((s) => (
                <NavDropdown key={s.label} section={s} />
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-5">
              <div className="flex items-center gap-2">
                <SearchLink />
                <IconLink href={site.socialLinks.twitter} label="X" plain>
                  <XLogo size={17} weight="bold" />
                </IconLink>
                <IconLink href={site.socialLinks.telegram} label="Telegram" plain>
                  <TelegramLogo size={18} weight="fill" />
                </IconLink>
                <IconLink href="/application/portfolio" label="Wallet">
                  <Wallet size={18} weight="bold" />
                </IconLink>
                <Link href="/application" className="crv-chrome-btn inline-flex items-center gap-2 font-sans text-[15px] font-semibold px-6 h-11">
                  Launch App
                  <span aria-hidden="true" style={{ fontSize: 10 }}>
                    ▶
                  </span>
                </Link>
              </div>
            </div>

            <Link
              href="/application"
              className="lg:hidden ml-auto mr-2 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.12em] uppercase font-bold px-4 py-2.5 rounded-full shrink-0 transition-transform active:scale-[0.97] crv-chrome-btn"
            >
              Launch App
              <span aria-hidden="true" style={{ fontSize: 9 }}>
                ▶
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 transition-opacity hover:opacity-60 shrink-0"
              style={{ color: "#fff" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0"
              style={{
                background: "#13171B",
                backgroundImage: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(var(--v2-accent-rgb),0.12) 0%, transparent 70%)",
              }}
              onClick={() => setMobileOpen(false)}
            />
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative pt-24 px-6 pb-10 flex flex-col gap-1 max-h-full overflow-y-auto"
            >
              <div className="flex flex-col items-start mb-6 pb-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="font-mono text-[11px] tracking-[0.12em] uppercase mb-2" style={{ color: "var(--v2-accent-text)" }}>
                  ※ Trading OS
                </span>
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255, 0.65)" }}>
                  six networks · agent-native
                </span>
              </div>
              {MOBILE_LINKS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="group relative font-heading font-bold tracking-[-0.02em] flex items-center justify-between transition-colors text-xl py-3"
                  style={{ color: "rgba(255,255,255,0.85)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold tracking-[0.18em]" style={{ color: "var(--v2-accent-text)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </span>
                  <span
                    className="font-mono text-base opacity-50 group-hover:opacity-100 group-hover:text-[var(--v2-accent-text)] transition-all group-hover:translate-x-1"
                    style={{ color: "rgba(255,255,255, 0.65)" }}
                  >
                    ▸
                  </span>
                </motion.a>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/application"
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-xs tracking-[0.10em] uppercase py-4 text-center font-bold text-white transition-all hover:brightness-110"
                  style={{
                    background: "var(--v2-accent)",
                    boxShadow: "0 8px 32px rgba(var(--v2-accent-rgb),0.35), 0 0 0 1px rgba(var(--v2-accent-rgb),0.5) inset",
                  }}
                >
                  Launch App ▶
                </Link>
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-center mt-2" style={{ color: "rgba(255,255,255, 0.65)" }}>
                  ※ Trading · Agents · Marketplace
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
