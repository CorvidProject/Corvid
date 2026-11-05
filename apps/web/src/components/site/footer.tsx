"use client";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

const BORDER = "1px solid rgba(255,255,255,0.08)";

const CORNERS = [
  { cls: "top-0 left-0", d: "M 7 1 L 1 1 L 1 7" },
  { cls: "top-0 right-0", d: "M 1 1 L 7 1 L 7 7" },
  { cls: "bottom-0 left-0", d: "M 1 1 L 1 7 L 7 7" },
  { cls: "bottom-0 right-0", d: "M 7 1 L 7 7 L 1 7" },
];

function FooterLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="relative inline-flex items-center font-sans text-sm transition-colors duration-150 hover:text-white group py-2 -my-2"
      style={{ color: "rgba(255,255,255,0.55)" }}
      whileHover="hovered"
      initial="idle"
    >
      {CORNERS.map(({ cls, d }) => (
        <motion.svg
          key={cls}
          className={`absolute ${cls} pointer-events-none`}
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          variants={{ idle: { opacity: 0, scale: 0.6 }, hovered: { opacity: 1, scale: 1 } }}
          transition={{ duration: 0.16 }}
        >
          <path d={d} stroke="var(--v2-accent-text)" strokeWidth="1.5" strokeLinecap="square" />
        </motion.svg>
      ))}
      <span className="px-1.5 py-0.5">{label}</span>
    </motion.a>
  );
}

const PRODUCT = [
  { label: "Token Analysis", href: "/#features" },
  { label: "AI Agents", href: "/#agents" },
  { label: "Auto Trader", href: "/docs/agents/auto-trader" },
  { label: "Marketplace", href: "/docs/agents/marketplace" },
];
const RESOURCES = [
  { label: "Docs", href: "/docs" },
  { label: "FAQ", href: "/#faq" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Community", href: "/social" },
];
const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Contact", href: `mailto:${site.contactEmail}` },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const TelegramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

export function Footer() {
  const socials = [
    { url: site.socialLinks.twitter, Icon: XIcon, label: "Twitter / X" },
    { url: site.socialLinks.telegram, Icon: TelegramIcon, label: "Telegram" },
  ].filter((s) => s.url);

  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--v2-bg-0, #0A0A0F)" }}>
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.2 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-y-10 gap-x-8 px-6 lg:px-12 py-12 lg:py-14"
        style={{ borderBottom: BORDER }}
      >
        <div className="pr-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-heading text-xl lg:text-2xl font-bold tracking-tight" style={{ color: "rgba(255,255,255,0.95)" }}>
              {site.name}
            </span>
          </div>
          <p className="font-sans text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
            {site.tagline}
          </p>
        </div>
        {([["[ PRODUCT ]", PRODUCT], ["[ RESOURCES ]", RESOURCES], ["[ COMPANY ]", COMPANY]] as const).map(([title, links]) => (
          <div key={title}>
            <p className="font-mono text-[11px] tracking-[0.12em] uppercase mb-5" style={{ color: "var(--v2-accent-text)" }}>
              {title}
            </p>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href} label={l.label} external={l.href.startsWith("http")} />
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase mb-5" style={{ color: "var(--v2-accent-text)" }}>
            [ COMMUNITY ]
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ url, Icon, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 transition-all"
                style={{ border: BORDER, color: "rgba(255,255,255,0.70)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(var(--v2-accent-rgb),0.55)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.70)";
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
          <p className="font-sans text-[12px] mt-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Official X:{" "}
            <a href={site.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {site.twitterHandle}
            </a>
            <br />
            No other account speaks for {site.name}.
          </p>
        </div>
      </motion.div>
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-6 lg:px-10 py-5">
        <div className="flex items-center gap-4 flex-wrap">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase" style={{ color: "rgba(255,255,255,0.60)" }}>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a href="/privacy" className="font-mono text-[11px] tracking-[0.14em] uppercase hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.60)" }}>
            Privacy
          </a>
          <span className="font-mono text-[11px] tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.50)" }}>
            ·
          </span>
          <a href="/terms" className="font-mono text-[11px] tracking-[0.14em] uppercase hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.60)" }}>
            Terms
          </a>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-mono text-[11px] tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.45)" }}>
            {site.operator}
          </span>
          <a href={`mailto:${site.contactEmail}`} className="font-mono text-[11px] tracking-[0.14em] lowercase hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.60)" }}>
            {site.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
