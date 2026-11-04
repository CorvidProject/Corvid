// Definisi pipeline builder agent (port dari referensi): langkah, field, dan preset.
// Chain: hanya Solana, "native coin" = SOL.
export type PipelineKey = "follow_wallet" | "new_tokens" | "token_trading";
export type Preset = "safety" | "balanced" | "degen";
export type Mode = "signal" | "trading";

export type Field = {
  key: string;
  label: string;
  hint?: string;
  placeholder?: string;
  type: "text" | "number" | "toggle" | "select";
  required?: boolean;
  advanced?: boolean;
  showInMode?: Mode;
  options?: { value: string; label: string }[];
};
export type Step = { id: string; label: string; prompt: string; alwaysOn?: boolean; fields: Field[] };
export type Pipeline = { key: PipelineKey; name: string; tagline: string; signalDesc: string; tradingDesc: string; steps: Step[] };

export const PRESETS: { preset: Preset; label: string; hint: string }[] = [
  { preset: "safety", label: "Careful", hint: "Tighter filters and smaller trades" },
  { preset: "balanced", label: "Balanced", hint: "Moderate filters and trade sizing" },
  { preset: "degen", label: "Fast", hint: "Looser filters and larger trades" },
];

export const PIPELINES: Pipeline[] = [
  {
    key: "follow_wallet",
    name: "Follow Wallet",
    tagline: "Automatically copy a whale's trades with your own rules",
    signalDesc: "Get notified when the wallet buys, sells, or accumulates",
    tradingDesc: "Automatically mirror trades with your own wallet",
    steps: [
      { id: "monitor", label: "Watch", prompt: "Which wallet do you want to track?", alwaysOn: true, fields: [{ key: "wallet_address", label: "Wallet Address", hint: "Solana wallet address", type: "text", required: true }] },
      {
        id: "filter",
        label: "Filter",
        prompt: "What trades should pass through?",
        fields: [
          { key: "only_buys", label: "Only Buys", hint: "Ignore sells from source wallet", type: "toggle" },
          { key: "min_source_trade_sol", label: "Min Trade Size (SOL)", hint: "Skip dust trades below this amount", placeholder: "0.05", type: "number" },
          { key: "min_source_win_rate", label: "Min Wallet Win Rate %", hint: "Only copy if wallet win rate is above this", placeholder: "0", type: "number", advanced: true },
        ],
      },
      {
        id: "execute",
        label: "Execute",
        prompt: "How should trades be executed?",
        fields: [
          { key: "max_sol_per_copy", label: "Max SOL per Trade", hint: "Hard cap per mirrored trade", placeholder: "0.05", type: "number", showInMode: "trading" },
          { key: "slippage_bps", label: "Slippage (bps)", hint: "100 = 1%. Higher fills more, worse price", placeholder: "200", type: "number", showInMode: "trading" },
          { key: "cancel_if_quote_moved_pct", label: "Cancel if Price Moved %", hint: "Abort if price drifts more than this", placeholder: "3", type: "number", showInMode: "trading", advanced: true },
          { key: "take_profit_pct", label: "Take Profit %", hint: "Auto-sell copied position at this profit", placeholder: "30", type: "number", showInMode: "trading", advanced: true },
          { key: "stop_loss_pct", label: "Stop Loss %", hint: "Auto-sell to limit losses on copied trade", placeholder: "15", type: "number", showInMode: "trading", advanced: true },
        ],
      },
      { id: "notify", label: "Notify", prompt: "How you receive alerts", fields: [] },
    ],
  },
  {
    key: "new_tokens",
    name: "New Tokens",
    tagline: "Discover fresh launches and snipe them before the crowd",
    signalDesc: "Get alerts when new pools pass your safety filters",
    tradingDesc: "Auto-buy tokens that match your criteria",
    steps: [
      { id: "scan", label: "Scan", prompt: "Automatic - scans fresh pools on Solana", alwaysOn: true, fields: [] },
      {
        id: "filter",
        label: "Filter",
        prompt: "What makes a token safe enough?",
        fields: [
          { key: "min_lp_usd", label: "Min Liquidity (USD)", hint: "Skip pools with less initial liquidity", placeholder: "5000", type: "number" },
          { key: "no_mint_authority", label: "Require Mint Renounced", hint: "Only pass if supply is locked", type: "toggle" },
          { key: "no_freeze_authority", label: "Require No Freeze", hint: "Only pass if token can't be frozen", type: "toggle", advanced: true },
          { key: "lp_locked", label: "Require LP Locked", hint: "Only pass if LP tokens are burned", type: "toggle", advanced: true },
          { key: "lp_burn_pct_min", label: "Min LP Burn %", hint: "Minimum percent of LP burned", placeholder: "90", type: "number", advanced: true },
          { key: "max_dev_wallet_pct", label: "Max Dev Wallet %", hint: "Skip if deployer holds too much supply", placeholder: "10", type: "number" },
          {
            key: "markets",
            label: "Markets",
            hint: "Which pool source to scan",
            type: "select",
            advanced: true,
            options: [
              { value: "", label: "All markets" },
              { value: "raydium", label: "Raydium only" },
              { value: "pumpfun", label: "Pump.fun only" },
            ],
          },
        ],
      },
      {
        id: "execute",
        label: "Execute",
        prompt: "How should buys be executed?",
        fields: [
          { key: "max_sol_per_trade", label: "Max SOL per Trade", hint: "Maximum SOL per auto-buy", placeholder: "0.1", type: "number", showInMode: "trading" },
          { key: "slippage_bps", label: "Slippage (bps)", hint: "100 = 1%", placeholder: "300", type: "number", showInMode: "trading" },
          { key: "take_profit_pct", label: "Take Profit %", hint: "Auto-sell when token reaches this profit", placeholder: "50", type: "number", showInMode: "trading", advanced: true },
          { key: "stop_loss_pct", label: "Stop Loss %", hint: "Auto-sell to cut losses", placeholder: "20", type: "number", showInMode: "trading", advanced: true },
        ],
      },
      { id: "notify", label: "Notify", prompt: "How you receive alerts", fields: [] },
    ],
  },
  {
    key: "token_trading",
    name: "Token Trading",
    tagline: "Set price triggers and automate your trading strategy",
    signalDesc: "Get notified when price hits your conditions",
    tradingDesc: "Auto-execute trades on your conditions",
    steps: [
      { id: "monitor", label: "Watch", prompt: "Which token do you want to watch?", alwaysOn: true, fields: [{ key: "token_mint", label: "Token Address", hint: "Token mint address on Solana", type: "text", required: true }] },
      {
        id: "filter",
        label: "Trigger",
        prompt: "What condition should trigger the action?",
        fields: [
          {
            key: "trigger_type",
            label: "Trigger Condition",
            hint: "What triggers the action",
            placeholder: "price_drop",
            type: "select",
            options: [
              { value: "price_drop", label: "Price drop" },
              { value: "price_surge", label: "Price surge" },
              { value: "percent_change", label: "Percent change" },
              { value: "volume_spike", label: "Volume spike" },
              { value: "lp_drop", label: "LP drop" },
            ],
          },
          { key: "trigger_threshold", label: "Trigger Threshold %", hint: "Price change that triggers", placeholder: "5", type: "number" },
          { key: "volume_multiplier", label: "Volume Multiplier", hint: "Volume spike ratio (for volume_spike trigger)", placeholder: "5", type: "number", advanced: true },
          { key: "lp_drop_threshold", label: "LP Drop Threshold %", hint: "Liquidity drop that triggers exit (for lp_drop trigger)", placeholder: "30", type: "number", advanced: true },
          {
            key: "entry_condition_type",
            label: "Entry Condition",
            hint: "Wait until this is true before first buy",
            type: "select",
            advanced: true,
            options: [
              { value: "", label: "None" },
              { value: "price_below", label: "Price below" },
              { value: "mc_below", label: "Market cap below" },
              { value: "dump_pct", label: "After dump %" },
            ],
          },
          { key: "entry_condition_value", label: "Entry Condition Value", hint: "USD price / market cap / dump %", placeholder: "", type: "number", advanced: true },
        ],
      },
      {
        id: "execute",
        label: "Execute",
        prompt: "How should the trade work?",
        fields: [
          { key: "max_sol_per_trade", label: "Max SOL per Trade", hint: "Maximum SOL per execution", placeholder: "0.1", type: "number", showInMode: "trading" },
          { key: "slippage_bps", label: "Slippage (bps)", hint: "100 = 1%. Higher fills more, worse price", placeholder: "200", type: "number", showInMode: "trading" },
          { key: "cancel_if_quote_moved_pct", label: "Cancel if Price Moved %", hint: "Abort if price drifts before execution", placeholder: "5", type: "number", showInMode: "trading", advanced: true },
          { key: "take_profit_pct", label: "Take Profit %", hint: "Auto-sell when profit reaches this", placeholder: "20", type: "number", showInMode: "trading", advanced: true },
          { key: "stop_loss_pct", label: "Stop Loss %", hint: "Auto-sell to limit losses", placeholder: "10", type: "number", showInMode: "trading", advanced: true },
        ],
      },
      { id: "notify", label: "Notify", prompt: "How you receive alerts", fields: [] },
    ],
  },
];

const PRESET_VALUES: Record<PipelineKey, Record<Preset, Record<string, string>>> = {
  follow_wallet: {
    degen: { max_sol_per_copy: "0.2", slippage_bps: "500", only_buys: "true", min_source_trade_sol: "0.02", min_source_win_rate: "0", cancel_if_quote_moved_pct: "8", take_profit_pct: "50", stop_loss_pct: "20" },
    balanced: { max_sol_per_copy: "0.05", slippage_bps: "200", only_buys: "true", min_source_trade_sol: "0.05", min_source_win_rate: "0", cancel_if_quote_moved_pct: "3", take_profit_pct: "30", stop_loss_pct: "15" },
    safety: { max_sol_per_copy: "0.02", slippage_bps: "100", only_buys: "true", min_source_trade_sol: "0.1", min_source_win_rate: "40", cancel_if_quote_moved_pct: "2", take_profit_pct: "20", stop_loss_pct: "10" },
  },
  new_tokens: {
    degen: { min_lp_usd: "2000", no_mint_authority: "false", no_freeze_authority: "false", lp_locked: "false", lp_burn_pct_min: "0", max_dev_wallet_pct: "25", markets: "", max_sol_per_trade: "0.2", slippage_bps: "500", take_profit_pct: "100", stop_loss_pct: "30" },
    balanced: { min_lp_usd: "5000", no_mint_authority: "true", no_freeze_authority: "true", lp_locked: "true", lp_burn_pct_min: "80", max_dev_wallet_pct: "10", markets: "", max_sol_per_trade: "0.1", slippage_bps: "300", take_profit_pct: "50", stop_loss_pct: "20" },
    safety: { min_lp_usd: "20000", no_mint_authority: "true", no_freeze_authority: "true", lp_locked: "true", lp_burn_pct_min: "95", max_dev_wallet_pct: "5", markets: "", max_sol_per_trade: "0.05", slippage_bps: "200", take_profit_pct: "30", stop_loss_pct: "10" },
  },
  token_trading: {
    degen: { trigger_threshold: "3", volume_multiplier: "3", max_sol_per_trade: "0.25", slippage_bps: "300", cancel_if_quote_moved_pct: "8", take_profit_pct: "50", stop_loss_pct: "20" },
    balanced: { trigger_threshold: "5", volume_multiplier: "5", max_sol_per_trade: "0.1", slippage_bps: "200", cancel_if_quote_moved_pct: "5", take_profit_pct: "30", stop_loss_pct: "10" },
    safety: { trigger_threshold: "10", volume_multiplier: "10", max_sol_per_trade: "0.05", slippage_bps: "100", cancel_if_quote_moved_pct: "3", take_profit_pct: "20", stop_loss_pct: "7" },
  },
};

export type Config = Record<string, string>;

export const getPipeline = (k: PipelineKey) => PIPELINES.find((p) => p.key === k)!;

export function buildConfig(key: PipelineKey, preset: Preset = "balanced"): Config {
  const c: Config = {};
  for (const s of getPipeline(key).steps)
    for (const f of s.fields) c[f.key] = f.type === "toggle" ? "false" : (f.placeholder ?? "");
  return Object.assign(c, PRESET_VALUES[key][preset]);
}

const short = (a: string) => (a.length > 12 ? `${a.slice(0, 4)}…${a.slice(-4)}` : a);
export const shortAddr = short;
export const isSolanaAddress = (a: string) => /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(a.trim());

/** Ringkasan pipeline (judul + butir) untuk panel "Saved/Draft". */
export function summarize(key: PipelineKey, mode: Mode, c: Config): { title: string; lines: string[] } {
  const lines: string[] = [];
  let title = "";
  if (key === "follow_wallet") {
    title = c.wallet_address ? `Following ${short(c.wallet_address)}` : "No wallet selected";
    lines.push(c.only_buys === "true" ? "Copies only buy trades" : "Copies buys and sells");
    if (c.min_source_trade_sol) lines.push(`Skips trades under ${c.min_source_trade_sol} SOL`);
    if (Number(c.min_source_win_rate) > 0) lines.push(`Only wallets above ${c.min_source_win_rate}% win rate`);
  } else if (key === "new_tokens") {
    title = "Scanning every new pool";
    if (c.min_lp_usd) lines.push(`Liquidity at least $${Number(c.min_lp_usd).toLocaleString("en-US")}`);
    if (c.no_mint_authority === "true") lines.push("Mint authority renounced");
    if (c.no_freeze_authority === "true") lines.push("No freeze authority");
    if (c.lp_locked === "true") lines.push("LP locked");
    if (c.max_dev_wallet_pct) lines.push(`Dev holds at most ${c.max_dev_wallet_pct}%`);
    if (c.markets) lines.push(c.markets === "pumpfun" ? "Pump.fun pools only" : "Raydium pools only");
  } else {
    title = c.token_mint ? `Watching ${short(c.token_mint)}` : "No token selected";
    const t = (c.trigger_type || "price_drop").replace(/_/g, " ");
    lines.push(`Trigger: ${t}${c.trigger_threshold ? ` ${c.trigger_threshold}%` : ""}`);
    if (c.entry_condition_type && c.entry_condition_value) lines.push(`Entry gate: ${c.entry_condition_type.replace(/_/g, " ")} ${c.entry_condition_value}`);
  }
  if (mode === "signal") lines.push("Sends signal alerts, no trades");
  else {
    const max = c.max_sol_per_copy || c.max_sol_per_trade;
    if (max) lines.push(`Each trade uses up to ${max} SOL`);
    if (c.slippage_bps) lines.push(`Slippage tolerance ${(Number(c.slippage_bps) / 100).toFixed(1)}%`);
    if (c.take_profit_pct || c.stop_loss_pct) lines.push(`TP ${c.take_profit_pct || "—"}% · SL ${c.stop_loss_pct || "—"}%`);
  }
  return { title, lines };
}

/** Teks kecil di bawah tiap node kanvas. */
export function nodeSubtitle(step: string, key: PipelineKey, mode: Mode, c: Config): string {
  if (step === "monitor") return key === "follow_wallet" ? (c.wallet_address ? short(c.wallet_address) : "No wallet set") : c.token_mint ? short(c.token_mint) : "No token set";
  if (step === "scan") return "Fresh pools";
  if (step === "filter") {
    if (key === "follow_wallet") return `${c.only_buys === "true" ? "Buys only" : "Buys + sells"}, ≥${c.min_source_trade_sol || "0"} native`;
    if (key === "new_tokens") return `LP ≥ $${Number(c.min_lp_usd || 0).toLocaleString("en-US")}${c.no_mint_authority === "true" ? " · mint off" : ""}`;
    return `${(c.trigger_type || "price_drop").replace(/_/g, " ")} ${c.trigger_threshold || ""}%`.trim();
  }
  if (step === "execute") return mode === "signal" ? "Signal mode" : `Up to ${c.max_sol_per_copy || c.max_sol_per_trade || "?"} SOL`;
  return "";
}
