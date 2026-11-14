import { site } from "@/lib/site";
import { ContractAddress } from "@/components/site/contract-address";

const BORDER = "1px solid rgba(255,255,255,0.08)";

// Footer ringkas: merek, satu baris tautan penting, akun X resmi, dan satu baris hak cipta.
const LINKS = [
  { label: "Docs", href: "/docs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: `mailto:${site.contactEmail}` },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  return (
    <footer style={{ background: "var(--v2-bg-0, #0A0A0F)", borderTop: BORDER }}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 px-6 lg:px-12 py-10">
        <div className="max-w-xs">
          <a href="/" className="inline-flex items-center gap-3 mb-3" aria-label={`${site.name} home`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/corvid-logo-512.png" alt="" width={30} height={30} style={{ width: 30, height: 30 }} />
            <span className="font-heading text-xl font-bold tracking-tight" style={{ color: "rgba(255,255,255,0.95)" }}>
              {site.name}
            </span>
          </a>
          <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            {site.tagline}
          </p>
          <ContractAddress className="mt-3" />
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-1">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} className="font-sans text-sm py-2 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.65)" }}>
                {l.label}
              </a>
            ))}
            <a
              href={site.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Corvid on X"
              className="inline-flex items-center justify-center w-10 h-10 transition-colors hover:text-white"
              style={{ border: BORDER, color: "rgba(255,255,255,0.70)" }}
            >
              <XIcon />
            </a>
          </nav>
          <p className="font-sans text-[12px]" style={{ color: "rgba(255,255,255,0.45)" }}>
            Official X: {site.twitterHandle}. No other account speaks for {site.name}.
          </p>
        </div>
      </div>
      <div className="px-6 lg:px-12 py-4" style={{ borderTop: BORDER }}>
        <p className="font-sans text-[12px]" style={{ color: "rgba(255,255,255,0.50)" }}>
          © {new Date().getFullYear()} {site.name}. {site.operator}.
        </p>
      </div>
    </footer>
  );
}
