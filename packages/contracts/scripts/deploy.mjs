// Deploy tUSDG ke Robinhood Chain TESTNET dengan wallet milik Anda.
//   DEPLOYER_PRIVATE_KEY=0x...  pnpm --filter @corvid/contracts deploy:testnet
// Kunci dibaca dari env saja, tidak pernah ditulis ke file atau log. Wallet butuh ETH testnet untuk gas.
// Opsional: MINT_TO=0x... MINT_AMOUNT=1000 (tUSDG) untuk langsung mencetak saldo uji.
import { createPublicClient, createWalletClient, defineChain, getAddress, http, parseUnits } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { getChain } from "@corvid/shared/chains";
import { compile } from "./compile.mjs";

const chain = getChain("testnet"); // sengaja dikunci ke testnet
const key = process.env.DEPLOYER_PRIVATE_KEY;
if (!key || !/^0x[0-9a-fA-F]{64}$/.test(key)) {
  console.error("Isi DEPLOYER_PRIVATE_KEY (0x + 64 hex) di environment shell Anda, bukan di file.");
  process.exit(1);
}
const rpc = process.env.RPC_URL || chain.publicRpcUrl;
const def = defineChain({ id: chain.id, name: chain.name, nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 }, rpcUrls: { default: { http: [rpc] } } });
const account = privateKeyToAccount(key);
const pub = createPublicClient({ chain: def, transport: http(rpc) });
const wallet = createWalletClient({ account, chain: def, transport: http(rpc) });

const live = await pub.getChainId();
if (live !== chain.id) throw new Error(`RPC berada di chain ${live}, bukan testnet ${chain.id}. Batal.`);
const bal = await pub.getBalance({ address: account.address });
console.log(`Deployer ${account.address}, saldo ${bal} wei`);
if (bal === 0n) throw new Error("Saldo ETH testnet 0: isi dari faucet dulu (BLOCKERS no. 23).");

const { abi, bytecode } = compile();
const hash = await wallet.deployContract({ abi, bytecode });
console.log("tx deploy:", hash);
const rc = await pub.waitForTransactionReceipt({ hash });
if (rc.status !== "success" || !rc.contractAddress) throw new Error("deploy gagal");
const addr = getAddress(rc.contractAddress);
console.log(`\ntUSDG di ${addr}`);
console.log(`Explorer: ${chain.explorerUrl}/address/${addr}`);

if (process.env.MINT_TO) {
  const amount = parseUnits(process.env.MINT_AMOUNT || "1000", 6);
  const h = await wallet.writeContract({ address: addr, abi, functionName: "mint", args: [getAddress(process.env.MINT_TO), amount] });
  await pub.waitForTransactionReceipt({ hash: h });
  console.log(`Mint ${amount} unit ke ${process.env.MINT_TO}`);
}
console.log(`\nLangkah berikut (Railway @corvid/api): PAYMENT_TOKEN_ADDRESS=${addr}`);
