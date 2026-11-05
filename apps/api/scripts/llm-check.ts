// Cek koneksi penyedia LLM dari env (.env di ROOT). Mengirim satu pesan kecil; hanya status dan panjang jawaban yang dicetak.
// Jalankan di: ROOT -> pnpm --filter @corvid/api llm:check
import { llmFromEnv } from "../src/llm";

const llm = llmFromEnv(process.env as Record<string, string | undefined>);
if (!llm) {
  console.error("LLM belum dikonfigurasi. Isi LLM_BASE_URL + LLM_MODEL (+ LLM_API_KEY), atau ANTHROPIC_API_KEY, di ROOT/.env.");
  process.exit(1);
}
const t0 = Date.now();
try {
  const out = await llm.complete("You are a connectivity test. Reply with the single word: ok", [{ role: "user", content: "ping" }]);
  console.log(`OK (${Date.now() - t0} ms), jawaban ${out.length} karakter: ${JSON.stringify(out.slice(0, 40))}`);
} catch (e) {
  console.error(`GAGAL: ${e instanceof Error ? e.message : "unknown"} (${Date.now() - t0} ms)`);
  process.exit(1);
}
