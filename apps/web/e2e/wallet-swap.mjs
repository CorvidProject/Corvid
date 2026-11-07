// Uji E2E wallet + swap (Playwright, wallet palsu EIP-6963 dengan kunci acak sungguhan). Jalankan server dev lalu:
//   PLAYWRIGHT_BROWSERS_PATH=D:/.dev/playwright BASE=http://localhost:3199 OUT=<folder> node e2e/wallet-swap.mjs
// Server dev harus memakai NEXT_PUBLIC_CHAIN_ENV=mainnet (swap mati di testnet). Login SIWE membuat user uji di Supabase bila provider Web3 aktif.
import { chromium } from "playwright";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";

const BASE = process.env.BASE ?? "http://localhost:3100";
const OUT = process.env.OUT;
const CASH = "0x020bfc650a365f8bb26819deaabf3e21291018b4";
const WETH = "0x0bd7d308f8e1639fab988df18a8011f41eacad73"; // kontrak ber-ETH: dipakai sebagai akun "berdana" untuk estimateGas
const log = (...a) => console.log(...a);

async function session(browser, { name, address, signer }) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
  page.on("console", (m) => m.type() === "error" && errors.push("console: " + m.text().slice(0, 200)));
  await page.exposeFunction("__sign", async (msg) => (signer ? signer(msg) : "0x" + "00".repeat(65)));
  await page.addInitScript(
    ({ address }) => {
      let chain = "0x1"; // sengaja chain salah supaya uji "Switch network"
      const L = {};
      const emit = (ev, v) => (L[ev] || []).forEach((f) => f(v));
      window.__sent = [];
      window.__calls = [];
      const provider = {
        on: (ev, fn) => ((L[ev] ||= []).push(fn)),
        removeListener: (ev, fn) => (L[ev] = (L[ev] || []).filter((x) => x !== fn)),
        request: async ({ method, params }) => {
          window.__calls.push(method);
          if (method === "eth_requestAccounts" || method === "eth_accounts") return [address.toLowerCase()];
          if (method === "eth_chainId") return chain;
          if (method === "wallet_switchEthereumChain") {
            if (params[0].chainId !== "0x1237" && params[0].chainId !== "0xb626") throw Object.assign(new Error("unrecognized"), { code: 4902 });
            chain = params[0].chainId;
            emit("chainChanged", chain);
            return null;
          }
          if (method === "wallet_addEthereumChain") {
            chain = params[0].chainId;
            emit("chainChanged", chain);
            return null;
          }
          if (method === "personal_sign") return await window.__sign(params[0]);
          if (method === "eth_sendTransaction") {
            window.__sent.push(params[0]);
            throw new Error("TIDAK BOLEH terkirim pada mode dry");
          }
          throw new Error("unsupported " + method);
        },
      };
      const announce = () =>
        window.dispatchEvent(
          new CustomEvent("eip6963:announceProvider", {
            detail: { info: { uuid: "mock-1", name: "Mock Wallet", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23888'/%3E%3C/svg%3E", rdns: "test.mock" }, provider },
          }),
        );
      window.addEventListener("eip6963:requestProvider", announce);
      announce();
    },
    { address },
  );
  return { ctx, page, errors, name };
}

const browser = await chromium.launch();
const results = [];
const check = (label, ok, extra = "") => {
  results.push({ label, ok });
  log(`${ok ? "PASS" : "FAIL"}  ${label}${extra ? "  | " + extra : ""}`);
};

// ===== Sesi A: kunci acak sungguhan, uji connect + login SIWE + swap =====
{
  const pk = generatePrivateKey();
  const acct = privateKeyToAccount(pk);
  const s = await session(browser, { name: "A", address: acct.address, signer: (m) => acct.signMessage({ message: m }) });
  const { page } = s;
  await page.goto(`${BASE}/application/swap?mint=${CASH}`, { waitUntil: "networkidle", timeout: 120000 });
  check("Halaman swap termuat tanpa pageerror", s.errors.filter((e) => e.startsWith("pageerror")).length === 0, s.errors.join(" | ").slice(0, 200));
  const hdr = await page.locator("header:visible").first().innerText();
  check("Header menampilkan nama chain aktif", /Robinhood Chain/.test(hdr), hdr.replace(/\s+/g, " ").slice(0, 120));
  check("Header tidak menyebut Solana", !/solana/i.test(await page.content()));

  // Connect melalui modal login
  await page.locator("header button:visible:has-text('Connect')").first().click();
  await page.waitForSelector("text=Continue with Mock Wallet", { timeout: 15000 });
  check("Modal login menampilkan wallet terdeteksi (EIP-6963)", true);
  await page.screenshot({ path: `${OUT}/a1-modal.png` });
  await page.click("text=Continue with Mock Wallet");
  await page.waitForTimeout(6000);
  const calls = await page.evaluate(() => window.__calls);
  check("Connect → eth_requestAccounts dipanggil", calls.includes("eth_requestAccounts"));
  check("Wallet diminta pindah ke chain Corvid", calls.includes("wallet_switchEthereumChain"));
  check("Pesan SIWE ditandatangani (personal_sign)", calls.includes("personal_sign"));
  const modalOpen = await page.locator("[role=dialog][aria-label='Log In']").count();
  const modalText = modalOpen ? (await page.locator("[role=dialog]").innerText()).replace(/\s+/g, " ").slice(0, 300) : "(modal tertutup = login berhasil)";
  log("   modal setelah login wallet:", modalText);
  const session_ = await page.evaluate(() => localStorage.getItem("corvid.auth.session"));
  check("Login wallet ke Supabase menghasilkan sesi", !!session_, session_ ? "sesi tersimpan" : "tidak ada sesi (provider Web3 belum aktif/ditolak)");
  await page.screenshot({ path: `${OUT}/a2-after-login.png` });

  const hdr2 = await page.locator("header:visible").first().innerText();
  const short = acct.address.slice(0, 6);
  check("Header menampilkan alamat wallet / menu akun", hdr2.includes(short) || /0x/i.test(hdr2) || !!session_, hdr2.replace(/\s+/g, " ").slice(0, 100));

  // Kuotasi swap (tidak perlu saldo)
  await page.goto(`${BASE}/application/swap?mint=${CASH}`, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForTimeout(2500); // restore wallet
  await page.fill("input[inputmode=decimal]", "0.01");
  await page.waitForTimeout(5000);
  const info = await page.locator("text=Uniswap v3").first().innerText().catch(() => "");
  check("Kuotasi nyata muncul (Uniswap v3 · fee · min received)", /fee/.test(info), info.slice(0, 140));
  const buyBox = await page.locator("div.num.text-\\[38px\\]").first().innerText().catch(() => "");
  log("   jumlah diterima untuk 0,01 ETH:", buyBox);
  check("Jumlah diterima ≈ 226 CASHCAT (± pasar)", Number(buyBox.replace(/,/g, "")) > 150 && Number(buyBox.replace(/,/g, "")) < 330, buyBox);
  const cta = await page.locator(".crv-swap-cta").first().innerText();
  check("Tombol utama mode dry", /Simulate swap \(dry mode\)|Switch to/.test(cta), cta);
  await page.screenshot({ path: `${OUT}/a3-swap-quote.png` });
  await page.click(".crv-swap-cta");
  await page.waitForTimeout(6000);
  const body = (await page.locator("main, body").first().innerText()).replace(/\s+/g, " ");
  const simMsg = /Dry run OK|insufficient|exceeds|funds|Simulation failed|rejected|Request/i.exec(body)?.[0] ?? "(tidak ada pesan)";
  log("   hasil simulasi akun tanpa saldo:", simMsg);
  const sent = await page.evaluate(() => window.__sent.length);
  check("Tidak ada transaksi terkirim pada mode dry (akun tanpa saldo)", sent === 0, `eth_sendTransaction: ${sent}`);
  await page.screenshot({ path: `${OUT}/a4-sim-unfunded.png` });
  await s.ctx.close();
}

// ===== Sesi B: akun "berdana" (kontrak WETH) agar estimateGas berhasil =====
{
  const s = await session(browser, { name: "B", address: WETH, signer: null });
  const { page } = s;
  await page.goto(`${BASE}/application/swap?mint=${CASH}`, { waitUntil: "networkidle", timeout: 120000 });
  await page.locator("header button:visible:has-text('Connect')").first().click();
  await page.click("text=Continue with Mock Wallet");
  await page.waitForTimeout(5000);
  await page.keyboard.press("Escape");
  await page.fill("input[inputmode=decimal]", "0.01");
  await page.waitForTimeout(5000);
  const cta = await page.locator(".crv-swap-cta").first().innerText();
  log("   CTA sesi B:", cta);
  if (/Simulate swap/.test(cta)) {
    await page.click(".crv-swap-cta");
    await page.waitForTimeout(6000);
    const body = (await page.locator("body").innerText()).replace(/\s+/g, " ");
    const m = /Dry run OK[^.]*\.[^.]*\./.exec(body)?.[0] ?? /insufficient[^.]*|Simulation failed[^.]*|execution reverted[^.]*/i.exec(body)?.[0] ?? "(tidak ada pesan)";
    log("   hasil simulasi akun berdana:", m);
    check("Simulasi dry berhasil (Dry run OK) untuk akun berdana", /Dry run OK/.test(body), m.slice(0, 160));
    const sent = await page.evaluate(() => window.__sent.length);
    check("Tidak ada transaksi terkirim pada mode dry (akun berdana)", sent === 0);
  } else {
    check("Tombol Simulate swap tersedia untuk akun berdana", false, cta);
  }
  await page.screenshot({ path: `${OUT}/b1-sim-funded.png` });
  await s.ctx.close();
}

await browser.close();
const failed = results.filter((r) => !r.ok);
log(`\nRINGKASAN: ${results.length - failed.length}/${results.length} lulus`);
process.exit(failed.length ? 1 : 0);
