const STEPS: [string, string, string][] = [
  ["01", "Open Settings", "Sign in, open Settings, and find the Telegram alerts section. If it says alerts are not available yet, the bot is not switched on for this deployment."],
  ["02", "Press Connect Telegram", "You get a one-time 8-character code. It is valid for 10 minutes and works once."],
  ["03", "Send the code to the bot", "Press Open Telegram and then Start, or open the bot yourself and send the code as a normal message. The bot replies \"Connected\"."],
  ["04", "Turn it on per agent", "In the agent builder, switch on Telegram alerts. Agents with the switch off never message you."],
];

const FACTS: [string, string][] = [
  ["What is sent", "A short text summary when one of your agents finds a match: the agent name, the token, and the reason. While trading is simulated, a trade alert says it is a dry run."],
  ["Who gets it", "Only the owner of the agent. People who follow a published agent get its signals in their inbox, not on your Telegram."],
  ["Limits", "At most 20 Telegram messages per hour per account, so a busy agent cannot flood your phone. Everything is still kept in your inbox."],
  ["One chat, one account", "A Telegram chat can be linked to one Corvid account at a time. Linking it again from another account moves it."],
  ["Private chats only", "The bot ignores groups and channels."],
  ["Unlink", "Press Disconnect in Settings, or send /stop to the bot."],
];

export function DocsTelegramContent() {
  return (
    <article>
      <div
        className="flex items-center justify-between border-y border-white/[0.08] py-2.5 mb-12 font-mono text-[11px] tracking-[0.12em] uppercase"
        style={{ color: "rgba(255,255,255, 0.65)" }}
      >
        <span>
          <span style={{ color: "var(--v2-accent-text)" }}>●</span> DOC.SIGNAL.041
        </span>
        <span>TELEGRAM</span>
      </div>
      <div className="mb-14">
        <span className="inline-block font-mono text-[11px] tracking-[0.06em] uppercase mb-6" style={{ color: "var(--v2-accent-text)" }}>
          [ SIGNALS ]
        </span>
        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.94] text-white mb-6">Telegram setup</h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.65)" }}>
          Get a message on your phone when one of your agents finds a match. Linking takes under a minute and uses a one-time code, so you never share a password or key.
        </p>
      </div>

      <div className="mb-16">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span className="font-mono text-[11px] tracking-[0.12em]" style={{ color: "var(--v2-accent-text)" }}>[ 01 ]</span>
          <h2 className="font-heading font-bold text-[26px] tracking-[-0.02em] text-white m-0 p-0 border-0">Link your account</h2>
        </div>
        <ol className="list-none m-0 p-0 space-y-5 pl-4 border-l border-white/[0.08]">
          {STEPS.map(([n, title, body]) => (
            <li key={n} className="relative">
              <span
                className="absolute -left-[1.1rem] top-0 w-9 h-9 flex items-center justify-center font-mono text-[11px] tracking-[0.1em]"
                style={{ background: "var(--v2-bg-1)", border: "1px solid rgba(var(--v2-accent-rgb),0.5)", color: "var(--v2-accent-text)" }}
              >
                {n}
              </span>
              <div className="pl-8">
                <h3 className="font-heading font-semibold text-base text-white m-0 mb-1">{title}</h3>
                <p className="text-[14px] leading-relaxed m-0" style={{ color: "rgba(255,255,255,0.60)" }}>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mb-16">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span className="font-mono text-[11px] tracking-[0.12em]" style={{ color: "var(--v2-accent-text)" }}>[ 02 ]</span>
          <h2 className="font-heading font-bold text-[26px] tracking-[-0.02em] text-white m-0 p-0 border-0">What to expect</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {FACTS.map(([t, b]) => (
            <div key={t} className="p-5 border border-white/[0.08]" style={{ background: "rgba(255,255,255,0.02)" }}>
              <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">{t}</h3>
              <p className="text-[13px] leading-relaxed m-0" style={{ color: "rgba(255,255,255,0.55)" }}>{b}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12 relative pl-4 py-3" style={{ borderLeft: "2px solid var(--v2-accent)", background: "rgba(var(--v2-accent-rgb),0.05)" }}>
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-1.5" style={{ color: "var(--v2-accent-text)" }}>※ Note</div>
        <p className="m-0" style={{ color: "rgba(255,255,255,0.70)" }}>
          Telegram only reports. The bot never approves or executes a trade, and it will never ask for your seed phrase, private key, or password. Alerts are information, not financial advice.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-colors" style={{ background: "rgba(255,255,255,0.02)" }} href="/docs/signals">
          <div>
            <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-1" style={{ color: "rgba(255,255,255, 0.65)" }}>← BACK</div>
            <div className="font-heading font-semibold text-white">Signals</div>
          </div>
          <span style={{ color: "var(--v2-accent-text)" }} className="text-xl">→</span>
        </a>
        <a className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-colors" style={{ background: "rgba(255,255,255,0.02)" }} href="/docs/agents">
          <div>
            <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-1" style={{ color: "rgba(255,255,255, 0.65)" }}>DEEP DIVE →</div>
            <div className="font-heading font-semibold text-white">Agents</div>
          </div>
          <span style={{ color: "var(--v2-accent-text)" }} className="text-xl group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </article>
  );
}
