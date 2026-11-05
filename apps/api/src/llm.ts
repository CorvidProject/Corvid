// Adapter LLM untuk chat. Penyedia dipilih lewat env; tanpa konfigurasi chat menjawab 503 (tidak ada balasan karangan).
export type LlmMessage = { role: "user" | "assistant"; content: string };
export interface LlmClient {
  complete(system: string, messages: LlmMessage[]): Promise<string>;
}

export class LlmError extends Error {}

export interface AnthropicOptions {
  apiKey: string;
  model: string;
  maxTokens?: number;
  timeoutMs?: number;
  fetchImpl?: typeof fetch;
}

/** Anthropic Messages API lewat fetch (tanpa SDK). Kunci tidak pernah masuk log atau pesan galat. */
export function anthropicClient({ apiKey, model, maxTokens = 700, timeoutMs = 30_000, fetchImpl = fetch }: AnthropicOptions): LlmClient {
  return {
    async complete(system, messages) {
      let res: Response;
      try {
        res = await fetchImpl("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "content-type": "application/json", "x-api-key": apiKey, "anthropic-version": "2023-06-01" },
          body: JSON.stringify({ model, max_tokens: maxTokens, system, messages }),
          signal: AbortSignal.timeout(timeoutMs),
        });
      } catch {
        throw new LlmError("llm_unreachable");
      }
      if (!res.ok) throw new LlmError(`llm_http_${res.status}`);
      const json = (await res.json()) as { content?: { type: string; text?: string }[] };
      const text = (json.content ?? []).filter((b) => b.type === "text").map((b) => b.text ?? "").join("").trim();
      if (!text) throw new LlmError("llm_empty");
      return text;
    },
  };
}

export function llmFromEnv(env: { ANTHROPIC_API_KEY?: string; LLM_MODEL: string }): LlmClient | null {
  return env.ANTHROPIC_API_KEY ? anthropicClient({ apiKey: env.ANTHROPIC_API_KEY, model: env.LLM_MODEL }) : null;
}
