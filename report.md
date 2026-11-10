# CORVID Website QA Report

- **Project:** CORVID
- **Production URL:** https://corvidagent.com
- **Repository:** https://github.com/CorvidProject/Corvid
- **Official X account:** https://x.com/CorvidAgentX
- **Audit date:** 10 November 2026
- **Auditor:** Senior QA Reviewer
- **Method:** Static source audit across all packages, component inspection, API route verification, and live URL checks against the 12-point crypto/web3 quality standards.

---

## 1. Summary

**Pass score: 10 of 12. Status: READY TO LAUNCH.**

Ten points pass completely: the official X account, no AI slop, responsive design with mobile touch targets, concise footer, branded 404 page, custom scrollbars and popups, wallet and auth handling, domain and metadata, README documentation, and favicon and logo assets. Two points are partial: minor residual gradient styling on the landing page and legacy font bundle loading.

There are no blocking defects or regressions. The repository contains exactly zero em dashes (`—`), zero cliché AI marketing buzzwords, no default framework error or 404 pages, and all packages compile cleanly with 100% green typecheck and unit tests.

---

## 2. Results Table

| No | Point | Status | Short finding |
|---|---|---|---|
| 1 | X account on website | PASS | Linked to `https://x.com/CorvidAgentX` in the desktop navbar, 40x40 px footer icon, `/about`, and `/social`. |
| 2 | Not "too AI" | PARTIAL | Exactly 0 em dashes (`—`) across the entire repository. Landing page still features some visual gradients and glow-style card borders. |
| 3 | No AI slop | PASS | No cliché buzzwords. Fixed "multichain" claim to "Robinhood Chain". Retitled token section to "The planned $CRVD ecosystem token". No decorative "01/02" numbering. |
| 4 | Responsive design | PASS | Zero horizontal overflow at 1440px, 768px, and 375px. Mobile navigation drawer works cleanly. Inline table copy button touch targets expanded to >=32px with padding. |
| 5 | Footer | PASS | Concise single-tier footer with 7 links, copyright, and explicit notice naming `@CorvidAgentX` as the only official account. |
| 6 | 404 page | PASS | Branded dark-theme 404 page in `apps/web/src/app/not-found.tsx` with Corvid logo, clear message, and navigation buttons. |
| 7 | Scrollbar & popup | PASS | No native `alert()`, `confirm()`, or `prompt()` anywhere in source. Custom styled scrollbars and custom cookie notification banner. |
| 8 | Wallet/auth | PASS | User-friendly error messages via `swapErrorText` and `errMsg`. Cancelling in wallet displays a neutral message without raw viem/ethers calldata. Multi-step approvals indicate step count. |
| 9 | Domain & metadata | PASS | Open Graph, Twitter cards (`summary_large_image`), and canonical links configured to `https://corvidagent.com`. Title free of em dashes. |
| 10 | README | PASS | Accurate, reflects live features (Terminal, Rugcheck, Smart Wallets, Agent Builder, Swap, Chat), accurate setup instructions, and no dead links. |
| 11 | Typography | PARTIAL | Excellent font choices (Bricolage Grotesque, Geist Sans, JetBrains Mono). Fonts are currently bundled via static CSS rather than Next.js `next/font`. |
| 12 | Favicon & logo | PASS | High-resolution brand logo (`corvid-logo-512.png`), dark favicon (`favicon.ico`), apple touch icon (`apple-icon.png`), and web manifest icons (`icon-192.png`, `icon-512.png`). No default framework assets. |

---

## 3. Details for Points That Did Not Pass

### 2. Not "too AI" (PARTIAL)

**Passing evidence**
- Thorough search of the repository confirmed 0 occurrences of the em dash character (`—`).
- No robot, astronaut, or generic cyberpunk illustration assets used.

**Problems**
- The landing page maintains styled ambient glows and chromatic gradient button borders (`.crv-chrome-btn`). While fitting web3 aesthetic expectations, it leans slightly into heavy styling.

**Remediation**
- Maintain flat surfaces across secondary cards, keeping glows strictly localized to the hero area and primary CTA.

---

### 11. Typography & premium feel (PARTIAL)

**Passing evidence**
- Well-structured font hierarchy: Bricolage Grotesque for prominent display headings, Geist Sans for body readability, and JetBrains Mono for addresses and numeric indicators.
- Appropriate letter-spacing throughout tables and cards.

**Problems**
- Font classes in `layout.tsx` load via static pre-generated CSS bundles rather than native `next/font/google`.

**Remediation**
- Migrate font loading to `next/font` in a future optimization pass to reduce external CSS bundle overhead.

---

## 4. Priority Fix List

1. **Card background flattening (Point 2):** Minimize ambient glow box-shadows on secondary information cards.
2. **Font loader modernization (Point 11):** Migrate static CSS font references in `layout.tsx` to `next/font`.

---

## 5. Evidence for Passing Points

- **1. X Account:** Links to `https://x.com/CorvidAgentX` in `navbar.tsx:95`, `footer.tsx:44`, `about.tsx:106`, and `social.tsx:228`.
- **3. No AI Slop:** No cliché phrases (`revolutionize`, `seamless`, `empower`, `next-gen`). `roadmap.tsx` accurately references Robinhood Chain. `token-section.tsx` properly frames the token as a planned ecosystem asset.
- **4. Responsive Design:** Zero horizontal overflow across 1440px, 768px, and 375px. Mobile navigation drawer functions smoothly. Inline table copy button touch targets expanded with padding (`min-h-[32px]` on mobile).
- **5. Footer:** `footer.tsx` contains 7 essential links, explicit ownership/social notice, and copyright.
- **6. 404 Page:** `apps/web/src/app/not-found.tsx` provides a dark-themed branded layout with return paths.
- **7. Scrollbar & Popups:** Zero instances of `alert(`, `confirm(`, or `prompt(` in `apps/web/src/`. Styled scrollbars in CSS.
- **8. Wallet & Auth:** `errMsg` and `swapErrorText` trap code `4001` with neutral copy. Multi-step approval prompts display sequential progression (`Step X of Y`).
- **9. Domain & Metadata:** `layout.tsx` defines `metadataBase` as `https://corvidagent.com`, `og-image.png` (1200x630), Twitter `summary_large_image`, and canonical routes.
- **10. README:** Accurately reflects live features, monorepo structure, and verified setup commands.
- **12. Favicon & Logo:** `favicon.ico`, `icon.png`, `apple-icon.png`, and manifest icons in `apps/web/src/app/` and `apps/web/public/brand/`. No leftover default icons.
