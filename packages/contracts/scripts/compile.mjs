// Mengompilasi TestUSDG.sol dan mengekspor abi + bytecode. Jalankan: pnpm --filter @corvid/contracts compile
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import solc from "solc";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
export function compile() {
  const source = fs.readFileSync(path.join(root, "src", "TestUSDG.sol"), "utf8");
  const input = {
    language: "Solidity",
    sources: { "TestUSDG.sol": { content: source } },
    settings: { optimizer: { enabled: true, runs: 200 }, outputSelection: { "*": { "*": ["abi", "evm.bytecode.object"] } } },
  };
  const out = JSON.parse(solc.compile(JSON.stringify(input)));
  const errors = (out.errors ?? []).filter((e) => e.severity === "error");
  if (errors.length) throw new Error(errors.map((e) => e.formattedMessage).join("\n"));
  const c = out.contracts["TestUSDG.sol"].TestUSDG;
  return { abi: c.abi, bytecode: `0x${c.evm.bytecode.object}` };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { abi, bytecode } = compile();
  fs.mkdirSync(path.join(root, "build"), { recursive: true });
  fs.writeFileSync(path.join(root, "build", "TestUSDG.json"), JSON.stringify({ abi, bytecode }, null, 2));
  console.log(`OK: ${abi.length} entri ABI, bytecode ${(bytecode.length - 2) / 2} byte -> build/TestUSDG.json`);
}
