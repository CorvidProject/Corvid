#  Rebrand Dev Brief — Apevisor Clone → [BRAND_NAME]

Status: draft · identity not yet decided · scope = skin swap + copy rewrite · target host = Railway

---

## 1. Current state (audit)

This project is a **static crawl of apevisor.tech** (Next.js app, pre-rendered to HTML) plus a hand-written Node server and mock backend. No build step, no npm dependencies — `server.js` only uses Node core modules.

| Area | Detail |
|---|---|
| Runtime | `server.js` — plain `http` server, port `process.env.PORT \|\| 4176`, already reads `PORT` from env (Railway-compatible) |
| Pages | 44 static `index.html` files under `about/`, `apevisor/`, `application/*` (16 app screens: agents, alpha, chat, gainers, inbox, leaderboard, marketplace, memescope, portfolio, pro, refund, rugcheck, settings, swap, terminal, tokenomics, tokens, volume), `auth/signin`, `chains/`, `docs/*` (9 doc pages), `privacy`, `social`, `terms` |
| Backend | `be/mock-api.js` serves `/api/*` from seeded JSON in `be/data/*.json`; `LIVE_API=1` env var proxies instead to the real `apevisor.tech` — **must be removed/repointed**, see §4.3 |
| Brand name hits | "apevisor" (case-insensitive) in 44 HTML files + 23 compiled JS chunks |
| Hardcoded domain | `https://apevisor.tech` appears in 3 JS chunks (`78571-*.js`, `98278-*.js`, `app/page-*.js`) — JSON-LD org schema, a roadmap/portfolio widget, and a sibling-product card |
| Brand identity fields (from JSON-LD block) | `name`, `tagline`, `url`, `logo` (`/apevisor/logo-v2.png`), `tokenTicker` (**$APE**), `tokenName` (**APE**), `contactEmail` (**hello@apevisor.tech**) — Apevisor is positioned as having its own token, not just a product |
| Logo/favicon | Single file: `apevisor/logo-v2.png`, referenced as both favicon and in-page logo |
| OG image | `<meta property="og:image">` points at `https://apevisor.tech/opengraph-image?...` — a **live remote URL on the old domain**, not a local asset. Must be replaced with a local static image or it will silently keep serving the old brand's social card. |
| Color tokens (CSS vars, 3 files in `_next/static/css/`) | `--color-accent-orange:#ff6b00`, `--color-accent-cyan:#22d3ee`, `--color-primary-50..700` (orange ramp), `--lumex-amber-*` (same orange ramp, different alias), `--lumex-cobalt-*` (blue ramp, appears unused on key screens — check before reusing), dark backgrounds `--color-bg-base:#08080a` / `#0a0a0f`, `--lumex-bg-0..2` |
| Fonts | Display: `Bricolage Grotesque Variable`; body: Geist Sans; alt display: `Space Grotesk`; mono/numeric: `JetBrains Mono`; serif fallback: `Instrument Serif` (used sparingly, likely a quote/testimonial accent) |
| Repo | Not a git repo yet, no `package.json` |

**Side finding:** the shared JS chunk that holds the JSON-LD data also contains brand records for *other* unrelated clones in this workspace (`luminara`, `lunaris`, `lumex`, `byteforge`, `monolyth`, `senara`). Only touch the **`apevisor:` entry** in that object — do not edit the sibling entries, and strip/hide the "sibling product" card on the about/roadmap page so the new site doesn't advertise unrelated projects.

---

## 2. Decisions already locked in

- **Brand identity:** not decided yet → Phase 0 below is a required first step, not optional.
- **Visual scope:** *skin swap, not redesign.* Keep the existing dark layout, grid, and components. Only change: logo, color tokens, (optionally) the display font, favicon, OG image.
- **Copy scope:** *rewrite positioning*, not a mechanical find-replace. Hero copy, feature descriptions, docs intros, and meta descriptions should be rewritten to fit the new brand's voice/positioning — the old Apevisor copy is a structural reference, not final text.
- **Target host:** Railway. Needs a `package.json` + start script (none exists today) and a repo (none exists today) — see §4.5.

---

## 3. Phase 0 — Define the brand identity (blocks everything else)

Fill this worksheet before touching code. These are exactly the fields the codebase has slots for (from the JSON-LD + meta tags), so filling it in gives a direct map to what gets edited in Phase 2.

| Field | Old value (Apevisor) | New value |
|---|---|---|
| Brand name | Apevisor | ⬜ |
| One-line tagline | "Autonomous trading agents across EVM and Solana" | ⬜ |
| Positioning paragraph (2–3 sentences, drives hero + meta description) | Token risk reports, smart-money tracking, autonomous trading agents across 6 chains | ⬜ |
| Primary accent color | `#ff6b00` (orange) | ⬜ |
| Secondary accent color | `#22d3ee` (cyan) | ⬜ |
| Display font (optional swap) | Bricolage Grotesque | ⬜ keep / ⬜ replace with: ___ |
| Logo file | `apevisor/logo-v2.png` | ⬜ need a square mark (≥512×512 PNG, transparent bg) + favicon-ready version |
| Domain (for meta/OG/canonical) | apevisor.tech | ⬜ (Railway subdomain is fine for v1: `[app].up.railway.app`) |
| Contact email | hello@apevisor.tech | ⬜ |
| Does the brand keep a "token" concept ($TICKER)? | Yes — $APE | ⬜ yes (ticker: ___) / ⬜ no, drop token references entirely |

If you want help brainstorming the name/tagline/palette, say so separately — this brief assumes those values land in the table above and then execution proceeds mechanically.

---

## 4. Execution phases

### 4.1 Asset & color swap
- Drop new logo at `apevisor/logo-v2.png` (reuse the path so every reference keeps working) — or rename the folder/file and update the ~2 references (favicon `<link>`, logo `<img>`).
- In all 3 CSS files under `_next/static/css/`: replace `--color-accent-orange`, `--color-accent-cyan`, `--color-primary-50..700`, `--lumex-amber-*` with new hex values from the Phase 0 table. Keep variable *names* as-is (component CSS references them by name) — only change the hex values.
- If swapping the display font: add the new font's `@font-face`/variable declaration, update `font-family` for `var(--font-display)` / the Bricolage reference, and drop the old font files if unused elsewhere.
- Generate a new static OG image (1200×630) and change `og:image` to a **local path** (e.g. `/og-image.png`) instead of the live `apevisor.tech` URL.

### 4.2 Brand name & copy
- Global replace "Apevisor"/"apevisor" across the 44 HTML files **and** the 23 JS chunks that reference it — but copy (not just the name) needs rewriting per the Phase 0 positioning, so this is a review pass per page, not a blind sed.
- Priority pages for rewritten copy: `index.html` (hero), `about/`, `docs/index.html` and `docs/quick-start/`, meta `<title>`/`<meta description>`/OG tags on every page.
- In `_next/static/chunks/78571-*.js`: update the `apevisor:` JSON-LD entry only — `name`, `tagline`, `url`, `logo`, `tokenTicker`, `tokenName`, `contactEmail` per the Phase 0 table (or drop `tokenTicker`/`tokenName` if dropping the token concept).
- In `_next/static/chunks/98278-*.js`: update the matching `apevisor:` object (`landingUrl`, `status`, `launchDate` if relevant).
- In `_next/static/chunks/app/page-*.js`: this renders a sibling-products card — either update the `apevisor` card's `name`/`tags`/`accent`/`href`, or remove the card/section entirely if the new brand shouldn't advertise sibling projects.
- Update footer/social links (`social/index.html`) and legal pages (`terms/`, `privacy/`) — replace entity name and contact email; **flag for a human legal read**, don't auto-rewrite terms substantively.

### 4.3 Decouple from the old domain/backend
- `server.js`: `UPSTREAM = 'https://apevisor.tech'` is the fallback proxy target for any unhandled `/api/*` or missing static file. Since the new site has no real backend of its own, either (a) remove the proxy fallback and let unmocked routes 404 cleanly, or (b) point it at a backend you actually control. **Do not ship pointing at apevisor.tech** — that's the previous owner's live infra.
- Remove/replace the live `og:image` URL as noted in 4.1.
- Decide (Phase 0 table) whether the new brand keeps mock data as permanent "demo mode" data or whether `be/data/*.json` content (wallet samples, token samples) should also be relabeled/regenerated so numbers don't visibly reference old seed data if that matters to the new positioning.

### 4.4 Verification pass (before packaging)
- `grep -ril "apevisor" .` (excluding this brief and `_crawl.js`, which is just the crawler tool and fine to leave or delete) should return **zero** hits in HTML/JS once done.
- `grep -rl "apevisor.tech" .` should return zero hits.
- Run locally (`node server.js`), click through all 16 `application/*` screens + `auth/signin` + docs + legal pages, confirm: new logo/colors render, no broken images, mock API still returns data (numbers will look like old seed data unless 4.3's data relabel is done — acceptable for a skin-swap scope).
- Check favicon in a real browser tab, not just the file.

### 4.5 Package for Railway
- Add `package.json`:
  ```json
  {
    "name": "[brand-name-kebab-case]",
    "version": "1.0.0",
    "private": true,
    "scripts": { "start": "node server.js" },
    "engines": { "node": ">=18" }
  }
  ```
- `server.js` already binds to `process.env.PORT` — no code change needed for Railway's dynamic port.
- Initialize git (`git init`, commit) — Railway deploys either from a connected GitHub repo or via `railway up` from the local directory; a repo makes future redeploys easier either way.
- `railway login` → `railway init` → `railway up` (or connect the GitHub repo in the Railway dashboard for auto-deploy on push).
- No build command needed (static assets + plain Node server) — set Railway's start command to `npm start` if it doesn't auto-detect.
- After first deploy: set the custom domain (if any) in Railway's dashboard, and update any remaining "domain" placeholder in meta tags/JSON-LD from Phase 0 to the real Railway URL or custom domain.

---

## 5. Definition of done

- [ ] Phase 0 worksheet filled in
- [ ] Logo + favicon replaced
- [ ] Color tokens replaced in all 3 CSS files
- [ ] OG image is local, not pointing at apevisor.tech
- [ ] Zero remaining "apevisor" / "apevisor.tech" string hits in HTML/JS
- [ ] Hero + about + docs intro + all page titles/meta descriptions rewritten to new positioning
- [ ] Sibling-products card handled (updated or removed)
- [ ] `server.js` UPSTREAM no longer points at apevisor.tech
- [ ] `package.json` added, `node server.js` runs clean locally on a fresh `PORT`
- [ ] Deployed to Railway, live URL smoke-tested (home + at least 3 app screens + docs + legal)
