// Kerangka artikel docs bergaya sama dengan halaman docs lain. Isi halaman berupa data (lihat content/docs/pages.tsx).

export type DocSection = {
  title: string;
  /** Paragraf pembuka bagian. */
  text?: string[];
  /** Langkah bernomor. */
  steps?: [string, string][];
  /** Kartu judul + isi. */
  cards?: [string, string][];
  /** Baris label : nilai. */
  rows?: [string, string][];
};
export type DocLink = { href: string; kicker: string; label: string };
export type DocPageData = {
  code: string;
  tag: string;
  title: string;
  intro: string;
  sections: DocSection[];
  note?: { label: string; text: string };
  next: DocLink[];
};

const mute = "rgba(255,255,255,0.55)";
const SOON = " (Soon)";

/** Judul yang berakhiran " (Soon)" tampil dengan lencana SOON: fitur yang belum ada. */
function Label({ text }: { text: string }) {
  if (!text.endsWith(SOON)) return <>{text}</>;
  return (
    <>
      {text.slice(0, -SOON.length)}
      <span className="ml-2 align-middle font-mono text-[10px] tracking-[0.14em] uppercase px-1.5 py-0.5" style={{ color: "var(--v2-accent-text)", border: "1px solid rgba(var(--v2-accent-rgb),0.4)" }}>
        Soon
      </span>
    </>
  );
}

export function DocArticle({ d }: { d: DocPageData }) {
  return (
    <article>
      <div className="flex items-center justify-between border-y border-white/[0.08] py-2.5 mb-12 font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255, 0.65)" }}>
        <span>
          <span style={{ color: "var(--v2-accent-text)" }}>●</span> {d.code}
        </span>
        <span>{d.tag}</span>
      </div>
      <div className="mb-14">
        <span className="inline-block font-mono text-[11px] tracking-[0.06em] uppercase mb-6" style={{ color: "var(--v2-accent-text)" }}>
          [ {d.tag} ]
        </span>
        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.94] text-white mb-6">{d.title}</h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.65)" }}>
          {d.intro}
        </p>
      </div>

      {d.sections.map((s, i) => (
        <div key={s.title} className="mb-16">
          <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
            <span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "var(--v2-accent-text)" }}>
              [ {String(i + 1).padStart(2, "0")} ]
            </span>
            <h2 className="font-heading font-bold text-[26px] tracking-[-0.02em] text-white m-0 p-0 border-0">{s.title}</h2>
          </div>
          {s.text?.map((t) => (
            <p key={t} className="text-[14px] leading-relaxed mt-0 mb-4 max-w-2xl" style={{ color: "rgba(255,255,255,0.65)" }}>
              {t}
            </p>
          ))}
          {s.steps && (
            <ol className="list-none m-0 p-0 space-y-5 pl-4 border-l border-white/[0.08]">
              {s.steps.map(([title, body], n) => (
                <li key={title} className="relative">
                  <span
                    className="absolute -left-[1.1rem] top-0 w-9 h-9 flex items-center justify-center font-mono text-[11px] tracking-[0.1em]"
                    style={{ background: "var(--v2-bg-1)", border: "1px solid rgba(var(--v2-accent-rgb),0.5)", color: "var(--v2-accent-text)" }}
                  >
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  <div className="pl-8">
                    <h3 className="font-heading font-semibold text-base text-white m-0 mb-1">{title}</h3>
                    <p className="text-[14px] leading-relaxed m-0" style={{ color: "rgba(255,255,255,0.60)" }}>
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          )}
          {s.cards && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {s.cards.map(([t, b]) => (
                <div key={t} className="p-5 border border-white/[0.08]" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
                    <Label text={t} />
                  </h3>
                  <p className="text-[13px] leading-relaxed m-0" style={{ color: mute }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
          )}
          {s.rows && (
            <dl className="m-0 border-t border-white/[0.08]">
              {s.rows.map(([k, v]) => (
                <div key={k} className="grid gap-x-6 gap-y-1 py-3 border-b border-white/[0.08] sm:grid-cols-[200px_1fr]">
                  <dt className="font-mono text-[11px] tracking-[0.06em] uppercase pt-0.5" style={{ color: "var(--v2-accent-text)" }}>
                    <Label text={k} />
                  </dt>
                  <dd className="m-0 text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      ))}

      {d.note && (
        <div className="mb-12 relative pl-4 py-3" style={{ borderLeft: "2px solid var(--v2-accent)", background: "rgba(var(--v2-accent-rgb),0.05)" }}>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1.5" style={{ color: "var(--v2-accent-text)" }}>
            ※ {d.note.label}
          </div>
          <p className="m-0" style={{ color: "rgba(255,255,255,0.70)" }}>
            {d.note.text}
          </p>
        </div>
      )}

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {d.next.map((l) => (
          <a key={l.href} className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-colors" style={{ background: "rgba(255,255,255,0.02)" }} href={l.href}>
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(255,255,255, 0.65)" }}>
                {l.kicker}
              </div>
              <div className="font-heading font-semibold text-white">{l.label}</div>
            </div>
            <span style={{ color: "var(--v2-accent-text)" }} className="text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        ))}
      </div>
    </article>
  );
}
