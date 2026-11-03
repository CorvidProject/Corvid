// Self-contained mock backend for the Corvid FE.
// Seeded from real response shapes captured from https://apevisor.tech/api/*
// (see data/*.json). Numbers get light jitter per request so the dashboards
// still feel "live" without needing the real backend online.
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(process.cwd(), 'src', 'server', 'data');
function loadJSON(file) {
  return JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf8'));
}

const seed = {
  stats: loadJSON('stats.json'),
  liveAgent: loadJSON('live-agent.json'),
  trendingTrending: loadJSON('trending-solana-trending.json'),
  trendingNew: loadJSON('trending-solana-new.json'),
  memescopeNew: loadJSON('memescope-new.json'),
  memescopeStretch: loadJSON('memescope-stretch.json'),
  memescopeMigrated: loadJSON('memescope-migrated.json'),
  curatedWallets: loadJSON('curated-wallets.json'),
  tokenSample: loadJSON('token-sample.json'),
  tokenTradesSample: loadJSON('token-trades-sample.json'),
  tokenSecuritySample: loadJSON('token-security-sample.json'),
};

function jitter(value, pct = 0.02) {
  if (typeof value !== 'number' || !isFinite(value)) return value;
  const delta = value * pct * (Math.random() * 2 - 1);
  return Math.round((value + delta) * 1e6) / 1e6;
}

function jitterTokenList(list) {
  return list.map((t) => ({
    ...t,
    price: jitter(t.price, 0.01),
    marketCap: jitter(t.marketCap, 0.01),
    volume: jitter(t.volume, 0.03),
    change5m: jitter(t.change5m, 0.1),
    change1h: jitter(t.change1h, 0.05),
  }));
}

function sendJSON(res, status, body) {
  const text = JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(text);
}

// Deterministic pseudo-random token synthesized for any mint not in our seed set,
// so "analyze any token" still returns a plausible-looking payload.
function synthesizeToken(mint) {
  let h = 0;
  for (let i = 0; i < mint.length; i++) h = (h * 31 + mint.charCodeAt(i)) >>> 0;
  const rnd = (n) => ((h = (h * 1103515245 + 12345) >>> 0) % n) / n;
  const price = +(rnd(1) * 0.01).toFixed(9);
  return {
    token: {
      name: 'Unknown Token',
      symbol: mint.slice(0, 4).toUpperCase(),
      mint,
      image: null,
      description: '',
      links: [],
      decimals: 9,
      price,
      marketCap: Math.round(price * 1e9),
      liquidity: Math.round(rnd(1) * 200000),
      lpBurn: 0,
      volume: Math.round(rnd(1) * 500000),
      buys: Math.round(rnd(1) * 500),
      sells: Math.round(rnd(1) * 500),
      txns: Math.round(rnd(1) * 1000),
      change1m: jitter(0, 1),
      change5m: jitter(0, 1),
      change1h: jitter(0, 1),
      change6h: jitter(0, 1),
      change24h: jitter(0, 1),
      risk: { score: Math.round(rnd(1) * 10), rugged: false, risks: [] },
      security: { freezeAuthority: null, mintAuthority: null },
      totalSupply: 1000000000,
      topHoldersPercent: null,
      devHoldingsPercent: null,
    },
  };
}

/**
 * Attempts to answer `req` locally. Returns true if handled (response sent),
 * false if the caller should fall back to another strategy (e.g. proxying).
 */
function handleMockApi(req, res, pathname, searchParams) {
  if (pathname === '/api/stats') {
    sendJSON(res, 200, {
      ...seed.stats,
      swapsExecuted: seed.stats.swapsExecuted + Math.floor(Math.random() * 3),
    });
    return true;
  }

  if (pathname === '/api/public/live-agent') {
    sendJSON(res, 200, seed.liveAgent);
    return true;
  }

  if (pathname === '/api/tokens/trending') {
    const tab = searchParams.get('tab') || 'trending';
    const base = tab === 'new' ? seed.trendingNew : seed.trendingTrending;
    sendJSON(res, 200, { tokens: jitterTokenList(base.tokens) });
    return true;
  }

  if (pathname === '/api/tokens/trades') {
    const mint = searchParams.get('mint');
    const trades = seed.tokenTradesSample.trades || [];
    sendJSON(res, 200, { trades: mint ? trades.map((t) => ({ ...t, mint })) : trades });
    return true;
  }

  if (pathname.startsWith('/api/tokens/') && pathname.endsWith('/security')) {
    sendJSON(res, 200, seed.tokenSecuritySample);
    return true;
  }

  if (pathname.startsWith('/api/tokens/')) {
    const mint = decodeURIComponent(pathname.slice('/api/tokens/'.length));
    if (mint === seed.tokenSample.token?.mint) {
      sendJSON(res, 200, seed.tokenSample);
    } else {
      sendJSON(res, 200, synthesizeToken(mint));
    }
    return true;
  }

  if (pathname === '/api/solana/memescope') {
    const stage = searchParams.get('stage') || 'new';
    const base =
      stage === 'stretch' ? seed.memescopeStretch : stage === 'migrated' ? seed.memescopeMigrated : seed.memescopeNew;
    sendJSON(res, 200, base);
    return true;
  }

  if (pathname === '/api/alpha/curated') {
    const limit = Math.max(1, Math.min(seed.curatedWallets.wallets.length, Number(searchParams.get('limit')) || 6));
    sendJSON(res, 200, { wallets: seed.curatedWallets.wallets.slice(0, limit) });
    return true;
  }

  if (pathname === '/api/corvid/token') {
    sendJSON(res, 200, { token: null });
    return true;
  }

  if (pathname === '/api/img-proxy') {
    const target = searchParams.get('url');
    if (!target) {
      sendJSON(res, 400, { error: 'missing url' });
      return true;
    }
    fetch(target)
      .then(async (upstream) => {
        const buf = Buffer.from(await upstream.arrayBuffer());
        res.writeHead(upstream.status, {
          'Content-Type': upstream.headers.get('content-type') || 'application/octet-stream',
          'Access-Control-Allow-Origin': '*',
        });
        res.end(buf);
      })
      .catch(() => {
        res.writeHead(502, { 'Content-Type': 'text/plain' });
        res.end('img-proxy failed');
      });
    return true;
  }

  return false;
}

module.exports = { handleMockApi };
