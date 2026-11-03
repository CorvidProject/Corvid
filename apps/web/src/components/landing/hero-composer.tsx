"use client";
import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { TextType } from "./text-type";

const PROMPTS = [
  "Paste a token: 0x6982…1933",
  "Paste a wallet: 0xd8dA…6045",
  "Find wallets that bought $PEPE in the last hour",
  "Build an agent that buys new Uniswap pairs",
];

// Kotak input hero: teks contoh mengetik sendiri saat kosong, kirim ke /application/chat.
export function HeroComposer({ initial }: { initial?: string }) {
  const [value, setValue] = useState(initial ?? "");
  const ref = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const has = value.trim().length > 0;

  const submit = (text: string) => {
    const q = text.trim();
    if (!q) return;
    router.push(`/application/chat?q=${encodeURIComponent(q)}`);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit(value);
  };

  return (
    <form
      className="hero-composer mt-10 w-full max-w-[680px] flex items-center gap-2 pl-5 pr-2 py-2"
      style={{ borderRadius: 999 }}
      onSubmit={onSubmit}
      data-reveal
    >
      <div className="relative flex-1 min-w-0">
        {!has && (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center pointer-events-none font-sans text-[15px] leading-[1.4] pl-0 pr-2 py-2"
            style={{ color: "rgba(255,255,255, 0.65)" }}
          >
            <TextType
              text={PROMPTS}
              cursorCharacter="_"
              cursorClassName="ml-1"
            />
          </div>
        )}
        <textarea
          ref={ref}
          className="hero-composer-input w-full bg-transparent resize-none font-sans text-[15px] leading-[1.4] py-2 relative"
          placeholder=""
          rows={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submit(value);
            }
          }}
          style={{
            color: "#ffffff",
            maxHeight: 90,
            minHeight: 28,
            outline: "none",
            border: "none",
            boxShadow: "none",
          }}
        />
      </div>
      <button
        aria-label="Send"
        className="shrink-0 inline-flex items-center justify-center transition-all"
        disabled={!has}
        type="submit"
        style={{
          width: 40,
          height: 40,
          borderRadius: 999,
          background: has ? "var(--v2-accent)" : "rgba(255,255,255,0.08)",
          color: has ? "#fff" : "rgba(255,255,255,0.4)",
          boxShadow: has
            ? "0 6px 18px -6px rgba(var(--v2-accent-rgb),0.7)"
            : "none",
          cursor: has ? "pointer" : "default",
        }}
      >
        <svg
          fill="currentColor"
          height="16"
          viewBox="0 0 256 256"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
        </svg>
      </button>
    </form>
  );
}

// Tombol aksi cepat di bawah kotak input: mengisi kotak input atau langsung mengirim.
export function HeroPill({
  prefill,
  submitnow,
  className,
  style,
  children,
}: {
  prefill?: string;
  submitnow?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={() => {
        if (submitnow) {
          router.push(`/application/chat?q=${encodeURIComponent(submitnow)}`);
          return;
        }
        const ta = document.querySelector<HTMLTextAreaElement>(
          ".hero-composer-input",
        );
        if (ta && prefill) {
          const setter = Object.getOwnPropertyDescriptor(
            HTMLTextAreaElement.prototype,
            "value",
          )?.set;
          setter?.call(ta, prefill);
          ta.dispatchEvent(new Event("input", { bubbles: true }));
          ta.focus();
        }
      }}
    >
      {children}
    </button>
  );
}
