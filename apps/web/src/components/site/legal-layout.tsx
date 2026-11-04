"use client";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { site } from "@/lib/site";

export interface LegalSection {
  id: string;
  num: string;
  label: string;
}

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  docCode: string;
  sections: LegalSection[];
  children: ReactNode;
}

// Tema Corvid untuk halaman legal (padanan `p(slug)` di build asli).
const THEME = { accent: "var(--v2-accent-text)", rgb: "0,48,207", bg: "#111113" };
const MONO = "var(--font-jetbrains-mono,ui-monospace,monospace)";

// Layout halaman legal/about (port dari komponen asli): indeks kiri aktif sesuai scroll + bilah progres 2px.
export function LegalLayout({ eyebrow, title, intro, lastUpdated, docCode, sections, children }: LegalLayoutProps) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  const smallMono = { fontFamily: MONO, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" } as const;

  return (
    <main className="relative min-h-screen pt-28 pb-24" style={{ background: THEME.bg }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(to right, ${THEME.accent} 1px, transparent 1px), linear-gradient(to bottom, ${THEME.accent} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 0%, transparent 80%)",
        }}
      />
      <div aria-hidden className="fixed left-0 top-0 z-30 h-full w-[2px] pointer-events-none" style={{ background: `rgba(${THEME.rgb},0.06)` }}>
        <div className="w-full" style={{ height: `${100 * progress}%`, background: THEME.accent, transition: "height 100ms linear" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between border-y border-white/[0.08] py-3 mb-16" style={{ color: "rgba(255,255,255,0.40)", ...smallMono }}>
          <span>
            <span style={{ color: THEME.accent }}>●</span> {docCode}
          </span>
          <span className="hidden sm:inline">{`${site.name.toUpperCase()} · LEGAL SERIES`}</span>
          <span>{`LAST REV · ${lastUpdated.toUpperCase()}`}</span>
        </div>

        <header className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <span className="inline-block font-mono text-[10px] tracking-[0.06em] uppercase mb-8" style={{ color: THEME.accent }}>
              [ {eyebrow} ]
            </span>
            <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl tracking-[-0.04em] leading-[0.92] text-white">
              {title.split(" ").map((w, i) => (
                <span key={i} className="inline-block mr-3">
                  {w}
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              {intro}
            </p>
          </div>
          <aside className="lg:col-span-4 lg:pt-2">
            <div className="relative rounded-sm border border-white/[0.08] p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
              <span
                className="absolute -top-2 left-4 px-2 font-mono text-[9px] tracking-[0.06em] uppercase"
                style={{ color: "rgba(255,255,255,0.35)", background: THEME.bg }}
              >
                SUMMARY
              </span>
              <ul className="space-y-2.5 text-[13px]" style={{ color: "rgba(255,255,255,0.75)" }}>
                <li className="flex gap-2">
                  <span style={{ color: THEME.accent }}>→</span> Plain English where possible
                </li>
                <li className="flex gap-2">
                  <span style={{ color: THEME.accent }}>→</span> Scroll or jump via the left index
                </li>
              </ul>
              <div
                className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between"
                style={{ color: "rgba(255,255,255,0.30)", fontFamily: MONO, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase" }}
              >
                <span>BINDING</span>
                <span>JURISDICTION · INTL.</span>
              </div>
            </div>
          </aside>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <nav className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <div className="font-mono text-[9px] tracking-[0.06em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.30)" }}>
              {"// INDEX"}
            </div>
            <ul className="space-y-0.5">
              {sections.map((s) => {
                const on = active === s.id;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group flex items-center gap-3 py-2 pl-3 pr-2 border-l-2 transition-colors"
                      style={{
                        borderColor: on ? "var(--v2-accent)" : "rgba(255,255,255,0.06)",
                        color: on ? "#FFFFFF" : "rgba(255,255,255,0.45)",
                        background: on ? `rgba(${THEME.rgb},0.04)` : "transparent",
                        fontFamily: MONO,
                        fontSize: 11,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      <span style={{ color: on ? THEME.accent : "rgba(255,255,255,0.30)" }}>{s.num}</span>
                      <span>{s.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-2" style={{ color: "rgba(255,255,255,0.30)", fontFamily: MONO, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              <Link href="/privacy" className="flex items-center justify-between hover:text-white transition-colors">
                <span>PRIVACY</span>
                <span>↗</span>
              </Link>
              <Link href="/docs" className="flex items-center justify-between hover:text-white transition-colors">
                <span>DOCS</span>
                <span>↗</span>
              </Link>
            </div>
          </nav>

          <div className="lg:col-span-9 legal-prose">
            {children}
            <div className="mt-20 pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-6" style={{ color: "rgba(255,255,255,0.35)", ...smallMono }}>
              <span style={{ color: THEME.accent }}>● END OF DOCUMENT</span>
              <span>·</span>
              <span>{docCode}</span>
              <span>·</span>
              <a
                href="#top"
                className="ml-auto inline-flex items-center gap-1.5 transition-all duration-200 hover:brightness-110"
                style={{
                  color: "#fff",
                  background: `rgba(${THEME.rgb},0.10)`,
                  backdropFilter: "blur(14px) saturate(160%)",
                  WebkitBackdropFilter: "blur(14px) saturate(160%)",
                  border: `1px solid rgba(${THEME.rgb},0.32)`,
                  borderRadius: 999,
                  padding: "5px 12px",
                  fontFamily: MONO,
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  boxShadow: `0 4px 16px -4px rgba(${THEME.rgb},0.30), inset 0 1px 0 rgba(255,255,255,0.10)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `rgba(${THEME.rgb},0.18)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `rgba(${THEME.rgb},0.10)`;
                }}
              >
                ↑ TOP
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .legal-prose { color: rgba(255,255,255,0.70); font-size: 15px; line-height: 1.75; }
        .legal-prose p { margin: 0 0 1rem; }
        .legal-prose ul { margin: 0.5rem 0 1.25rem 0; padding: 0; list-style: none; }
        .legal-prose ul li { position: relative; padding: 0.25rem 0 0.25rem 1.5rem; margin: 0 0 0.35rem; }
        .legal-prose ul li::before { content: "→"; position: absolute; left: 0; color: ${THEME.accent}; font-family: var(--font-jetbrains-mono), ui-monospace, monospace; }
        .legal-prose a { color: ${THEME.accent}; text-decoration: none; border-bottom: 1px dotted rgba(${THEME.rgb},0.5); transition: color 120ms, border-color 120ms; }
        .legal-prose a:hover { color: #fff; border-bottom-color: #fff; }
        .legal-prose strong { color: #fff; font-weight: 600; }
        .legal-prose .legal-caps { font-family: var(--font-jetbrains-mono), ui-monospace, monospace; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.55); }
      `}</style>
    </main>
  );
}
