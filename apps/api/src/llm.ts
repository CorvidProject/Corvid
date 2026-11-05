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

export interface OpenAiCompatOptions {
  /** Contoh: https://openrouter.ai/api/v1, https://api.groq.com/openai/v1, http://localhost:11434/v1 (Ollama). */
  baseUrl: string;
  /** Kosong untuk server lokal tanpa autentikasi (mis. Ollama). */
  apiKey?: string;
  model: string;
  maxTokens?: number;
  timeoutMs?: number;
  fetchImpl?: typeof fetch;
}

/** Endpoint /chat/completions bergaya OpenAI: dipakai banyak penyedia dan server lokal. Kunci tidak masuk log atau pesan galat. */
export function openAiCompatClient({ baseUrl, apiKey, model, maxTokens = 700, timeoutMs = 30_000, fetchImpl = fetch }: OpenAiCompatOptions): LlmClient {
  const url = `${baseUrl.replace(/\/+$/, "")}/chat/completions`;
  return {
    async complete(system, messages) {
      let res: Response;
      try {
        res = await fetchImpl(url, {
          method: "POST",
          headers: { "content-type": "application/json", ...(apiKey ? { authorization: `Bearer ${apiKey}` } : {}) },
          body: JSON.stringify({ model, max_tokens: maxTokens, messages: [{ role: "system", content: system }, ...messages] }),
          signal: AbortSignal.timeout(timeoutMs),
        });
      } catch {
        throw new LlmError("llm_unreachable");
      }
      if (!res.ok) throw new LlmError(`llm_http_${res.status}`);
      const json = (await res.json()) as { choices?: { message?: { content?: string | null } }[] };
      const text = json.choices?.[0]?.message?.content?.trim();
      if (!text) throw new LlmError("llm_empty");
      return text;
    },
  };
}

export interface LlmEnv {
  /** "anthropic" | "openai" (kompatibel OpenAI). Kosong: openai bila LLM_BASE_URL ada, anthropic bila ANTHROPIC_API_KEY ada. */
  LLM_PROVIDER?: "anthropic" | "openai";
  LLM_BASE_URL?: string;
  LLM_API_KEY?: string;
  ANTHROPIC_API_KEY?: string;
  LLM_MODEL?: string;
}

/** null = chat tidak dikonfigurasi (API menjawab 503). Model untuk penyedia OpenAI-compatible wajib diisi eksplisit. */
export function llmFromEnv(env: LlmEnv): LlmClient | null {
  const provider = env.LLM_PROVIDER ?? (env.LLM_BASE_URL ? "openai" : env.ANTHROPIC_API_KEY ? "anthropic" : null);
  if (provider === "openai") {
    if (!env.LLM_BASE_URL || !env.LLM_MODEL) return null;
    return openAiCompatClient({ baseUrl: env.LLM_BASE_URL, apiKey: env.LLM_API_KEY, model: env.LLM_MODEL });
  }
  if (provider === "anthropic" && env.ANTHROPIC_API_KEY) return anthropicClient({ apiKey: env.ANTHROPIC_API_KEY, model: env.LLM_MODEL ?? "claude-haiku-5-5" });
  return null;
}
