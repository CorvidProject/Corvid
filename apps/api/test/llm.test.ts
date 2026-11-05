import { describe, expect, it } from "vitest";
import { anthropicClient, LlmError, llmFromEnv, openAiCompatClient } from "../src/llm";
import { loadEnv } from "../src/env";

const res = (status: number, body: unknown) => new Response(JSON.stringify(body), { status });

describe("anthropicClient", () => {
  it("mengirim permintaan Messages API dan mengambil teks", async () => {
    let seen: { url: string; init: RequestInit } | null = null;
    const c = anthropicClient({
      apiKey: "sk-test-secret",
      model: "m1",
      fetchImpl: (async (url: string, init: RequestInit) => {
        seen = { url, init };
        return res(200, { content: [{ type: "text", text: "halo " }, { type: "text", text: "dunia" }] });
      }) as unknown as typeof fetch,
    });
    expect(await c.complete("sys", [{ role: "user", content: "hi" }])).toBe("halo dunia");
    const body = JSON.parse(String(seen!.init.body));
    expect(seen!.url).toBe("https://api.anthropic.com/v1/messages");
    expect(body).toMatchObject({ model: "m1", system: "sys", messages: [{ role: "user", content: "hi" }] });
    expect((seen!.init.headers as Record<string, string>)["x-api-key"]).toBe("sk-test-secret");
  });

  it("galat HTTP/kosong/jaringan menjadi LlmError tanpa membocorkan kunci", async () => {
    const mk = (f: () => Promise<Response>) => anthropicClient({ apiKey: "sk-test-secret", model: "m1", fetchImpl: f as unknown as typeof fetch });
    await expect(mk(async () => res(401, { error: "bad key sk-test-secret" })).complete("s", [])).rejects.toThrow("llm_http_401");
    await expect(mk(async () => res(200, { content: [] })).complete("s", [])).rejects.toThrow("llm_empty");
    const err = await mk(async () => {
      throw new Error("connect sk-test-secret");
    })
      .complete("s", [])
      .catch((e: unknown) => e);
    expect(err).toBeInstanceOf(LlmError);
    expect(String((err as Error).message)).not.toContain("sk-test-secret");
  });

  it("tanpa konfigurasi: null; pemilihan penyedia lewat env", () => {
    expect(llmFromEnv({})).toBeNull();
    expect(llmFromEnv({ ANTHROPIC_API_KEY: "k" })).not.toBeNull();
    expect(llmFromEnv({ LLM_BASE_URL: "http://localhost:11434/v1" })).toBeNull(); // model wajib untuk penyedia OpenAI-compatible
    expect(llmFromEnv({ LLM_BASE_URL: "http://localhost:11434/v1", LLM_MODEL: "llama3.1" })).not.toBeNull(); // Ollama: tanpa kunci
    expect(llmFromEnv({ LLM_PROVIDER: "anthropic", ANTHROPIC_API_KEY: "" })).toBeNull();
  });

  it("variabel kosong di .env dianggap tidak diisi", () => {
    const env = loadEnv({ DATABASE_URL: "postgres://x", LLM_BASE_URL: "", LLM_API_KEY: "", ANTHROPIC_API_KEY: "", LLM_MODEL: "", LLM_PROVIDER: "" });
    expect(llmFromEnv(env)).toBeNull();
  });
});

describe("openAiCompatClient", () => {
  it("memanggil /chat/completions dengan pesan sistem dan kunci opsional", async () => {
    const calls: { url: string; init: RequestInit }[] = [];
    const mk = (apiKey?: string) =>
      openAiCompatClient({
        baseUrl: "https://example.test/v1/",
        apiKey,
        model: "m2",
        fetchImpl: (async (url: string, init: RequestInit) => {
          calls.push({ url, init });
          return res(200, { choices: [{ message: { content: " jawaban " } }] });
        }) as unknown as typeof fetch,
      });
    expect(await mk("sk-x").complete("sys", [{ role: "user", content: "hi" }])).toBe("jawaban");
    expect(calls[0].url).toBe("https://example.test/v1/chat/completions");
    expect(JSON.parse(String(calls[0].init.body))).toMatchObject({ model: "m2", messages: [{ role: "system", content: "sys" }, { role: "user", content: "hi" }] });
    expect((calls[0].init.headers as Record<string, string>).authorization).toBe("Bearer sk-x");
    await mk().complete("s", []);
    expect((calls[1].init.headers as Record<string, string>).authorization).toBeUndefined();
  });

  it("galat HTTP atau jawaban kosong menjadi LlmError", async () => {
    const mk = (f: () => Promise<Response>) => openAiCompatClient({ baseUrl: "https://e.test", apiKey: "sk-secret", model: "m", fetchImpl: f as unknown as typeof fetch });
    await expect(mk(async () => res(429, {})).complete("s", [])).rejects.toThrow("llm_http_429");
    await expect(mk(async () => res(200, { choices: [] })).complete("s", [])).rejects.toThrow("llm_empty");
  });
});
