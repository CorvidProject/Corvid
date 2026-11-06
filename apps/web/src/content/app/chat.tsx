"use client";
import { useEffect, useRef, useState } from "react";
import { DotBackdrop } from "@/components/app/dot-backdrop";
import { useSigned } from "@/components/auth/signed";
import { ApiError, USE_API, apiGet, apiSend } from "@/lib/api";

// Chat Corvid. Mode API (NEXT_PUBLIC_USE_FIXTURES=false, sudah masuk): percakapan tersimpan di backend (/api/chats), jawaban dari LLM
// dengan konteks data nyata Corvid, 1 kredit per jawaban. Mode fixture: balasan simulasi lokal, sesi di localStorage (try/catch).

type Msg = { role: "user" | "agent"; text: string; at: number };
type Session = { id: string; title: string; kind: "chat" | "token"; msgs: Msg[]; updated: number; loaded?: boolean };
type ApiChat = { id: number; title: string; kind: "chat" | "token"; updatedAt: string };
type ApiMsg = { role: "user" | "assistant"; content: string; createdAt: string };
const fromApi = (m: ApiMsg): Msg => ({ role: m.role === "user" ? "user" : "agent", text: m.content, at: Date.parse(m.createdAt) });
const ERRORS: Record<string, string> = {
  no_credits: "You are out of credits. Each answer uses 1 credit.",
  llm_unavailable: "Chat is not available yet. Try again later.",
  rate_limited: "You are sending messages too fast. Wait a few seconds and try again.",
  chat_busy: "Chat is at capacity for today. Try again tomorrow.",
  llm_error: "The assistant could not answer right now. No credit was used. Try again.",
  chat_full: "This chat is full. Start a new one.",
  too_many_chats: "You have too many chats. Delete one to start a new one.",
};

const KEY = "corvid.chat.sessions.v1";

const PATHS = {
  plus: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
  close: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
  down: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z",
  right: "M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z",
  menu: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z",
  send: "M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z",
  paste: "M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z",
  chat: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z",
  bot: "M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z",
  coins: "M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z",
  wallet: "M216,64H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,56V184a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,128H56a8,8,0,0,1-8-8V78.63A23.84,23.84,0,0,0,56,80H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,132Z",
  trend: "M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z",
  spark: "M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z",
};

function Ic({ d, size = 14, style }: { d: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256" style={style}>
      <path d={d}></path>
    </svg>
  );
}

const CHIPS: { icon: string; label: string; prompt?: string; href?: string }[] = [
  { icon: PATHS.trend, label: "Smart money today", prompt: "Smart money today" },
  { icon: PATHS.coins, label: "How is risk scored?", prompt: "How does Corvid score token risk?" },
  { icon: PATHS.bot, label: "Build an agent", href: "/application/agents/new" },
];

const NOTE = "\n\n— Simulated reply (fixture). Live market data and agents connect when the backend is available.";

function reply(q: string): string {
  const s = q.toLowerCase();
  if (/\.sol\b|wallet|audit/.test(s))
    return "Wallet audit\n• Holds 14 tokens, ~71% in ETH and stablecoins\n• 9 swaps in the last 7 days, mostly via Uniswap\n• No interactions with flagged contracts\n• Risk: low. Concentration is the only watch item." + NOTE;
  if (/smart money|smart wallet/.test(s))
    return "Smart money today\n• 3 tracked wallets bought into new Robinhood Chain pairs in the last 6h\n• Net flow: positive into ETH-quoted memecoins\n• Open Smart Wallets in Terminal to follow them live." + NOTE;
  if (/agent|new pairs|create/.test(s))
    return "Agent draft\nTrigger: new pair on Robinhood Chain with liquidity above 25 ETH\nChecks: ownership renounced, top-10 holders under 40%, no linked-wallet cluster\nAction: simulated buy (dry mode), TP +60%, SL -25%\nOpen the Agent Builder to refine and backtest it." + NOTE;
  if (/\$[a-z]{2,10}|token|mint|[1-9A-HJ-NP-Za-km-z]{32,44}/.test(s))
    return "Token read\n• Liquidity and holder spread look healthy for its size\n• Mint and freeze authority: revoked\n• Top-10 holders: 31%\n• Sniper and bundler share: low\nVerdict: no blocking risk found. Not financial advice." + NOTE;
  return "I can analyze a token or wallet, summarize smart-money flow, or draft an agent. Paste a mint or wallet address, or pick one of the suggestions." + NOTE;
}

function load(): Session[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Session[]) : [];
  } catch {
    return [];
  }
}

export function ApplicationChatContent() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [open, setOpen] = useState({ chats: true, agents: false, tokens: true });
  const [drawer, setDrawer] = useState(false);
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const signed = useSigned();
  const api = USE_API && signed;
  const [notice, setNotice] = useState<string | null>(null);
  const [credits, setCredits] = useState<number | null>(null);

  useEffect(() => {
    if (USE_API) return;
    setSessions(load());
    setReady(true);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);
  // Tombol "AI" di tabel token membuka /application/chat?q=<alamat 0x>: isi kotak pesan (tidak dikirim otomatis,
  // karena tiap jawaban memakai kuota) lalu bersihkan parameter dari URL.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q")?.trim();
    if (!q) return;
    setText(/^0x[0-9a-fA-F]{40}$/.test(q) ? `Analyze ${q}: is it safe? Check holder concentration, dev holdings, and liquidity.` : q.slice(0, 500));
    window.history.replaceState(null, "", window.location.pathname);
  }, []);
  // Mode API: daftar percakapan dan saldo kredit dari backend saat sudah masuk.
  useEffect(() => {
    if (!api) {
      if (USE_API) setSessions([]);
      return;
    }
    let alive = true;
    apiGet<{ chats: ApiChat[] }>("/api/chats")
      .then((r) => alive && setSessions(r.chats.map((c) => ({ id: String(c.id), title: c.title, kind: c.kind, msgs: [], updated: Date.parse(c.updatedAt), loaded: false }))))
      .catch(() => alive && setNotice("Could not load your chats."));
    apiGet<{ credits: number }>("/api/profile")
      .then((p) => alive && setCredits(p.credits))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [api]);
  const open_ = (id: string) => {
    setActive(id);
    setDrawer(false);
    setNotice(null);
    if (!api) return;
    apiGet<{ messages: ApiMsg[] }>(`/api/chats/${id}`)
      .then((r) => setSessions((p) => p.map((x) => (x.id === id ? { ...x, msgs: r.messages.map(fromApi), loaded: true } : x))))
      .catch(() => setNotice("Could not load this chat."));
  };
  useEffect(() => {
    if (!ready || USE_API) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(sessions));
    } catch {}
  }, [sessions, ready]);

  const cur = sessions.find((x) => x.id === active) ?? null;
  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [cur?.msgs.length, busy]);

  const sendApi = async (q: string) => {
    setBusy(true);
    setNotice(null);
    try {
      let sid = active;
      if (!sid) {
        const c = await apiSend<ApiChat>("POST", "/api/chats");
        sid = String(c.id);
        setSessions((p) => [{ id: sid!, title: c.title, kind: c.kind, msgs: [], updated: Date.now(), loaded: true }, ...p]);
        setActive(sid);
      }
      const r = await apiSend<{ messages: ApiMsg[]; credits: number }>("POST", `/api/chats/${sid}/messages`, { content: q });
      const add = r.messages.map(fromApi);
      setSessions((p) =>
        p.map((x) =>
          x.id === sid ? { ...x, msgs: [...x.msgs, ...add], updated: Date.now(), title: x.msgs.length === 0 && x.title === "New chat" ? q.slice(0, 40) : x.title } : x,
        ),
      );
      setCredits(r.credits);
      setText("");
    } catch (e) {
      setNotice(e instanceof ApiError ? (ERRORS[e.message] ?? "Something went wrong. Try again.") : "Could not reach the server.");
    } finally {
      setBusy(false);
    }
  };

  const send = (raw?: string) => {
    const q = (raw ?? text).trim();
    if (!q || busy) return;
    if (USE_API) {
      if (!api) {
        setNotice("Sign in to chat with Corvid.");
        return;
      }
      void sendApi(q);
      return;
    }
    const now = Date.now();
    const isToken = /\$[a-z]{2,10}|^[1-9A-HJ-NP-Za-km-z]{32,44}$/i.test(q);
    const sid = active ?? "s" + now;
    const userMsg: Msg = { role: "user", text: q, at: now };
    setSessions((prev) =>
      prev.some((x) => x.id === sid)
        ? prev.map((x) => (x.id === sid ? { ...x, msgs: [...x.msgs, userMsg], updated: now } : x))
        : [{ id: sid, title: q.slice(0, 40), kind: isToken ? "token" : "chat", msgs: [userMsg], updated: now }, ...prev],
    );
    setActive(sid);
    setText("");
    setBusy(true);
    timer.current = setTimeout(() => {
      setSessions((prev) =>
        prev.map((x) => (x.id === sid ? { ...x, msgs: [...x.msgs, { role: "agent", text: reply(q), at: Date.now() }], updated: Date.now() } : x)),
      );
      setBusy(false);
    }, 650);
  };

  const newChat = () => {
    setActive(null);
    setText("");
    setDrawer(false);
  };
  const remove = (id: string) => {
    if (api) void apiSend("DELETE", `/api/chats/${id}`).catch(() => setNotice("Could not delete this chat."));
    setSessions((p) => p.filter((x) => x.id !== id));
    if (active === id) setActive(null);
  };

  const chats = sessions.filter((x) => x.kind === "chat");
  const tokens = sessions.filter((x) => x.kind === "token");

  const group = (key: "chats" | "tokens", label: string, icon: string, list: Session[], empty: string) => (
    <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
      <button
        onClick={() => setOpen((o) => ({ ...o, [key]: !o[key] }))}
        aria-expanded={open[key]}
        className="w-full flex items-center gap-2.5 px-4 py-3 transition-colors hover:bg-[var(--v2-bg-1)]"
      >
        <Ic d={open[key] ? PATHS.down : PATHS.right} size={11} style={{ color: "var(--v2-t-4)" }} />
        <Ic d={icon} style={{ color: "var(--v2-t-3)" }} />
        <span className="text-[13px] font-semibold flex-1 text-left" style={{ color: "var(--v2-t-2)" }}>
          {label}
        </span>
        <span className="num tabular-nums text-[11px]" style={{ color: "var(--v2-t-4)" }}>
          {list.length}
        </span>
      </button>
      {open[key] && (
        <div className="pb-1">
          {list.length === 0 ? (
            <p className="text-[12px] px-10 py-2" style={{ color: "var(--v2-t-4)" }}>
              {empty}
            </p>
          ) : (
            list.map((x) => (
              <div key={x.id} className="group flex items-center" style={{ background: x.id === active ? "var(--v2-bg-1)" : "transparent" }}>
                <button
                  onClick={() => open_(x.id)}
                  className="flex-1 min-w-0 text-left text-[12px] pl-10 pr-2 py-2 truncate hover:bg-[var(--v2-bg-1)]"
                  style={{ color: x.id === active ? "var(--v2-t-1)" : "var(--v2-t-3)" }}
                >
                  {x.title}
                </button>
                <button
                  onClick={() => remove(x.id)}
                  aria-label="Delete chat"
                  className="p-1.5 mr-2 opacity-0 group-hover:opacity-100 focus:opacity-100"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  <Ic d={PATHS.close} size={12} />
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );

  const sidebar = (
    <>
      <div className="flex items-center justify-between px-4 py-3.5" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
        <span className="text-[13px] font-semibold tracking-wide uppercase" style={{ color: "var(--v2-t-2)" }}>
          Sessions
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={newChat}
            className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wide px-2.5 py-1.5 rounded-sm transition-colors hover:bg-[var(--v2-bg-1)]"
            style={{ color: "var(--v2-accent-text)" }}
          >
            <Ic d={PATHS.plus} size={13} /> New
          </button>
          <button className="md:hidden p-1" onClick={() => setDrawer(false)} aria-label="Close" style={{ color: "var(--v2-t-4)" }}>
            <Ic d={PATHS.close} size={16} />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        {group("chats", "Chats", PATHS.chat, chats, "No chats yet")}
        <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
          <a
            href="/application/agents"
            className="w-full flex items-center gap-2.5 px-4 py-3 transition-colors hover:bg-[var(--v2-bg-1)]"
          >
            <Ic d={PATHS.right} size={11} style={{ color: "var(--v2-t-4)" }} />
            <Ic d={PATHS.bot} style={{ color: "var(--v2-t-3)" }} />
            <span className="text-[13px] font-semibold flex-1 text-left" style={{ color: "var(--v2-t-2)" }}>
              Agents
            </span>
            <span className="num tabular-nums text-[11px]" style={{ color: "var(--v2-t-4)" }}>
              0
            </span>
          </a>
        </div>
        {group("tokens", "Tokens", PATHS.coins, tokens, "No token threads yet")}
      </div>
    </>
  );

  const composer = (
    <div className="w-full">
      <div className="flex items-end gap-2">
        <button
          type="button"
          onClick={async () => {
            try {
              const t = await navigator.clipboard.readText();
              if (t) setText(t.trim());
            } catch {}
          }}
          className="h-11 w-11 shrink-0 flex items-center justify-center rounded-sm transition-colors"
          title="Paste from clipboard"
          style={{ border: "1px solid var(--v2-line-1)", color: "var(--v2-t-3)", background: "transparent" }}
        >
          <Ic d={PATHS.paste} />
        </button>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
              e.preventDefault();
              send();
            }
          }}
          placeholder="Paste token / wallet or ask anything about the market"
          rows={1}
          className="input-v2 composer-shell flex-1 resize-none max-h-32 overflow-y-auto"
          style={{ minHeight: "44px" }}
        />
        <button
          onClick={() => send()}
          disabled={!text.trim() || busy}
          className="btn-v2 btn-v2-primary h-11 w-11 shrink-0 justify-center disabled:opacity-40 disabled:cursor-not-allowed"
          title="Send (Cmd / Ctrl + Enter)"
        >
          <Ic d={PATHS.send} size={16} />
        </button>
      </div>
      {notice && (
        <p role="alert" className="text-[12px] mt-2" style={{ color: "var(--v2-neg)" }}>
          {notice}
        </p>
      )}
      <div className="flex items-center justify-between gap-3 mt-2">
        <div className="flex-1 min-w-0">
          <p className="eyebrow" style={{ color: "var(--v2-t-3)" }}>
            Ctrl+Enter
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 shrink-0" title={credits === null ? "Credits" : `${credits} credits · 1 credit per answer`}>
          <Ic d={PATHS.spark} size={11} style={{ color: "var(--v2-accent-text)" }} />
          <span className="eyebrow num" style={{ color: "var(--v2-t-2)" }}>
            {credits === null ? "0" : credits} cr
          </span>
        </span>
      </div>
    </div>
  );

  return (
    <>
      <aside
        className="hidden md:flex flex-col w-72 shrink-0"
        style={{ borderRight: "1px solid var(--v2-line-1)", background: "var(--v2-bg-0)" }}
      >
        {sidebar}
      </aside>
      {drawer && (
        <div className="md:hidden fixed inset-0 z-40 flex" style={{ top: 56 }}>
          <aside className="flex flex-col w-72 max-w-[85vw]" style={{ background: "var(--v2-bg-0)", borderRight: "1px solid var(--v2-line-1)" }}>
            {sidebar}
          </aside>
          <button className="flex-1" aria-label="Close sessions" onClick={() => setDrawer(false)} style={{ background: "rgba(0,0,0,0.6)" }} />
        </div>
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="md:hidden flex items-center gap-2 px-4 py-2" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
          <button className="p-1.5 rounded-sm" onClick={() => setDrawer(true)} aria-label="Sessions" style={{ color: "var(--v2-t-3)" }}>
            <Ic d={PATHS.menu} size={16} />
          </button>
          <span className="text-xs font-medium truncate" style={{ color: "var(--v2-t-2)" }}>
            {cur ? cur.title : "New chat"}
          </span>
        </div>

        {cur ? (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <div className="mx-auto w-full max-w-2xl flex flex-col gap-4">
                {cur.msgs.map((m, i) => (
                  <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                    <div
                      className="max-w-[85%] whitespace-pre-wrap text-[13.5px] leading-relaxed px-3.5 py-2.5 rounded-sm"
                      style={{
                        background: m.role === "user" ? "var(--v2-accent)" : "var(--v2-bg-1)",
                        color: m.role === "user" ? "#ffffff" : "var(--v2-t-2)",
                        border: m.role === "user" ? "none" : "1px solid var(--v2-line-1)",
                      }}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
                {busy && (
                  <div className="flex justify-start">
                    <div className="px-3.5 py-2.5 text-[13px] rounded-sm" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)", color: "var(--v2-t-4)" }}>
                      Analyzing…
                    </div>
                  </div>
                )}
                <div ref={endRef} />
              </div>
            </div>
            <div className="px-4 pb-4 pt-2" style={{ borderTop: "1px solid var(--v2-line-1)" }}>
              <div className="mx-auto max-w-2xl">{composer}</div>
            </div>
          </>
        ) : (
          <div className="relative flex-1 overflow-y-auto">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
              <DotBackdrop variant="rings" />
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 35%, var(--v2-bg-0) 85%)" }}></div>
            </div>
            <div className="relative z-10 min-h-full flex flex-col items-center justify-center px-4 py-10">
              <div className="w-full max-w-2xl flex flex-col items-center">
                <h1 className="hero-rise text-[28px] sm:text-[36px] font-semibold tracking-tight text-center" style={{ color: "var(--v2-t-1)", animationDelay: "0ms" }}>
                  Ask about any token, wallet or agent
                </h1>
                <div className="hero-rise w-full mt-8" style={{ animationDelay: "200ms" }}>
                  {composer}
                </div>
                <div className="hero-rise w-full mt-6 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "260ms" }}>
                  {CHIPS.map((c) => (
                    <button
                      key={c.label}
                      type="button"
                      onClick={() => (c.href ? (window.location.href = c.href) : send(c.prompt))}
                      className="hero-chip group relative inline-flex items-center gap-2 px-4 py-2.5 disabled:opacity-50"
                      style={{ borderRadius: "999px", color: "var(--v2-t-1)", fontSize: "13px" }}
                    >
                      <span className="opacity-75 group-hover:opacity-100 relative z-10 inline-flex">
                        <Ic d={c.icon} size={15} />
                      </span>
                      <span className="relative z-10">{c.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
