import { getData } from "@/lib/data";
import { Page, Panel } from "@/components/ui";

export const metadata = { title: "Chat | Corvid" };

export default async function Chat() {
  const { chats } = await getData("chats");
  const chat = chats[0];
  return (
    <Page title="Chat" subtitle="Ask Corvid about a token or wallet. Answers use tool data only." width={800}>
      <Panel className="flex flex-col gap-3 min-h-[360px]">
        {chat.messages.map((m, i) => (
          <div key={i} className={`max-w-[85%] rounded-xl px-3 py-2 text-[13px] ${m.role === "user" ? "self-end" : "self-start"}`} style={{ background: m.role === "user" ? "var(--v2-accent-dim)" : "var(--v2-bg-3)" }}>{m.content}</div>
        ))}
      </Panel>
      <form className="flex gap-2 mt-3">
        <input className="input-v2 flex-1" placeholder="Paste a token address or ask a question" />
        <button type="button" disabled className="btn-v2 btn-v2-primary">Send</button>
      </form>
    </Page>
  );
}
