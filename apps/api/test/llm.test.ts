import { describe, expect, it } from "vitest";
import { anthropicClient, LlmError, llmFromEnv } from "../src/llm";

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

  it("tanpa kunci: null", () => {
    expect(llmFromEnv({ LLM_MODEL: "m" })).toBeNull();
    expect(llmFromEnv({ ANTHROPIC_API_KEY: "k", LLM_MODEL: "m" })).not.toBeNull();
  });
});
