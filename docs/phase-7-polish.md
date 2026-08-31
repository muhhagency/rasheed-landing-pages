# Phase 7 — Polish & Launch Readiness

All four pages exist. This phase makes them consistent, accessible, and shippable.

Work top to bottom. The cross-page audit comes first because it can surface changes that affect everything after it.

---

## 1. Cross-page consistency audit

Four pages were built in sequence, which means later ones may have drifted from earlier ones. Check each item across all four pages side by side, not page by page.

- **Pillar cards** — `/for-retailers` and `/for-corporates` both use 2×2 pillar grids. They must be the same component with the same treatment, not two lookalikes.
- **Section vertical rhythm** — spacing between sections should be identical across pages. Any page that feels tighter or looser than the others has drifted.
- **Kicker usage** — every section leads with one, same size, same tone logic.
- **Heading scale** — one hero `display-lg` per page, section headings all at the same level. No page should have a section H2 competing with its hero.
- **Media placeholder styling** — identical border, radius, and label treatment everywhere.
- **CTA patterns** — B2B pages should present Sign Up / Log in identically, including the small URL indicator.
- **`TrustStrip`** — must be literally the same component on all three persona pages, not reimplemented.
- **Tone alternation** — check the default/subtle/dark sequence on each page reads with cadence rather than arbitrary switching.

Fix drift by consolidating into the shared component, not by patching the outlier.

---

## 2. Responsive pass

Test every page at **1440 / 1280 / 1024 / 768 / 430 / 390**.

- No horizontal scroll at any width.
- Mobile menu: opens, traps focus, closes on `Escape`, closes on navigation, locks body scroll.
- Pillar 2×2 grids collapse sensibly (2×2 → 1 column, not 2×2 squeezed).
- Green Score tier ramp stays legible at 390px — it's the most likely thing to break.
- Hero media doesn't dominate above the fold on mobile; copy and CTAs should be reachable without scrolling past a large placeholder.
- Long headings don't produce orphans or awkward breaks at 768px.

---

## 3. Motion

Subtle scroll-reveal on section entry — opacity and a small translate, nothing more. No parallax, no counters, no staggered card cascades.

Wrap everything in `prefers-reduced-motion: reduce` and disable entirely when set. Verify by toggling the OS setting, not just the media query.

---

## 4. Metadata & SEO

Per route: title, description, canonical, OG and Twitter tags, and an OG image.

- OG images don't exist yet. Generate simple token-based ones (brand surface, wordmark, page title) rather than shipping none.
- Favicon and apple-touch-icon.
- `sitemap.xml` with all four routes. `robots.txt` allowing all except `/kitchen-sink`.
- One `<h1>` per page. Heading order never skips a level.
- `lang="en"` on `<html>`.

---

## 5. Accessibility

Target WCAG AA.

- Skip link is the first focusable element and actually moves focus to `<main id="main">`.
- Every interactive element has a visible focus state using `--border-focus`. Test with keyboard only, never the mouse, on all four pages.
- Contrast: verify all text on `dark` and `brand` tones. These were broken once already at kitchen-sink stage — re-verify now that real content sits on them.
- All images and placeholders have meaningful `alt`. Decorative elements get `alt=""`.
- Nav dropdown is keyboard-operable and announces expanded state.
- Tab order matches visual order on all four pages.

---

## 6. Performance

- Lighthouse 95+ on Performance and Accessibility, all four routes.
- Fonts: `next/font` with `display: swap`, preloaded, subset to Latin. Michroma loads on all pages — confirm it isn't blocking render.
- Verify the static export builds clean: `next build` with zero warnings.

---

## 7. Assertions

Run these. All four must return nothing.

Each one is scoped to avoid false positives that made the original versions
un-actionable — they matched comments, anchor hrefs, and metadata strings, so
"returns nothing" was never achievable and the checks got ignored. Corrected in
Phase 7 against the real tree.

```bash
# 1. No hardcoded colors outside the token file.
#    Matches a hex ONLY in a style/color context (fill=, stroke=, color:,
#    background:, border:, …), so `href="#features"` and `// #cabinet` comments
#    no longer trip it.
#    StoreButton.tsx is a documented exemption: it carries Google's official
#    Play Store trademark colors, which must not be tokenized. See the
#    GOOGLE_PLAY_BRAND block in that file.
grep -rnE '(fill|stroke|color|background|border|shadow|outline)[^;]*[:=]\s*"?#[0-9a-fA-F]{3,8}' \
  app components --include="*.tsx" \
  | grep -v "components/ui/StoreButton.tsx"

# 2. Every rendered TapCeipt goes through the <TapCeipt /> component.
#    Excludes: the component's own file, JSX usage, line and block comments,
#    and bare string literals (route `metadata` exports, where a React
#    component cannot be used — those render into <meta> tags, not the DOM,
#    so the Michroma rule does not apply).
#    Still catches a real violation such as `<p>Meet TapCeipt today</p>`.
grep -rn "TapCeipt" app components --include="*.tsx" \
  | grep -v "components/ui/TapCeipt" \
  | grep -v "<TapCeipt" \
  | grep -vE ':[0-9]+:\s*(//|/\*|\*)' \
  | grep -vE ':[0-9]+:\s*\{?/\*.*\*/\}?\s*$' \
  | grep -vE ':[0-9]+:\s*"[^"]*",?\s*$' \
  | grep -vE '(alt|label|title|description|content)\s*[:=]'

# 3. TapCeipt must not appear anywhere on the corporate page.
#    NOTE: the path is app/(marketing)/for-corporates — the route group
#    parenthesis is part of the real path. The previously documented
#    `app/for-corporates` does not exist, so this silently exited 2
#    ("No such file or directory") and asserted nothing at all.
#    Quote the path: the parentheses are shell metacharacters.
#    The trailing filter drops the guard comment in page.tsx.
grep -rni "tapceipt" "app/(marketing)/for-corporates" \
  | grep -vE ':[0-9]+:\s*(//|/\*|\*)'

# 4. No fulfillment-partner name anywhere users can reach.
#    Scoped to source and build output. docs/ and CLAUDE.md are excluded on
#    purpose: they STATE the rule, so a repo-wide grep always matched itself.
#    `out/` is included so alt text, metadata, and OG tags are covered.
grep -rni "amazon" app/ components/ content/ out/
```

Run assertion 4 against a fresh `out/` — build first, or it checks a stale
export.

## 8. Content QA

Read all four pages against `docs/content-brief.md` and confirm nothing was paraphrased during the build.

Terminology sweep — check for these specific failures:

- "Buckets" or "accounts" anywhere → must be "Pockets"
- "TapCeit" or "TAPCEIPT" → must be "TapCeipt"
- Green Score tiers: exactly **Leaf → Plant → Tree → Forest**. No Seed, no Sprout.
- Slices described as categories, or used interchangeably with them
- Fallah described as convertible to a permanent pocket — it is not
- Any implication that Corporates receive hardware

---

## 9. Cleanup — done

- ~~Delete `/kitchen-sink` and its route directory.~~ Deleted. `public/robots.txt`
  no longer needs its `Disallow: /kitchen-sink` line (the route is gone), so that
  was removed too. Note: deleting a route leaves a stale reference in
  `.next/dev/types/`, which fails the build's type check — clear `.next` after
  removing a route.
- ~~Remove any unused components created during earlier phases.~~ Audited every
  component against real imports: all are live. Nothing removed.
  `PlaceholderMedia` deliberately stays — `FinalCta` still uses it for the two QR
  slots, which are generated at build time rather than photographed.
- ~~Remove console statements and commented-out code.~~ None found in `app/`,
  `components/`, or `content/`.

---

## Temporarily removed — restore before B2B launch

`/signup` is unbuilt (it lives outside this repo) and neither portal subdomain
resolves. Rather than ship buttons that 404, the B2B conversion path is
temporarily **a single contact route**: email and phone.

Nothing was deleted outright. Every replacement leaves a restore snippet in a
comment at the change site; this section is the index. Search the codebase for
`TEMPORARILY` to find them all.

Contact details live in one place — `components/layout/contact.ts`:

| Constant | Value |
|---|---|
| `PHONE_HREF` | `tel:+966558593522` (E.164, no spaces — never use the display form in an href) |
| `PHONE_LABEL` | `+966 55 859 3522` |
| `CONTACT_EMAIL` / `CONTACT_EMAIL_HREF` | `info@rasheedapp.com` / `mailto:…` |
| `CONTACT_CTA_LABEL` | `Contact us` |

`tel:` is deliberate: a large share of B2B traffic is mobile, where tapping to
dial beats selecting and copying a number.

### 1. Sign Up / Log in → Contact us

| Where | File | Now | Was |
|---|---|---|---|
| Hub header | `navConfig.tsx` | nothing | `loginDropdown` → the two portals |
| Retailer header | `navConfig.tsx` | one `Contact us` primary → mailto | `Log in` (ghost) + `Sign Up` (primary) |
| Corporate header | `navConfig.tsx` | same | same |
| Retailer hero | `sections/retailer/Hero.tsx` | `Contact us` primary + phone as secondary `tel:` | both buttons + `.b2b-hero__url` indicator |
| Corporate hero | `sections/corporate/Hero.tsx` | same | same |

The **hub deliberately gets no Contact us.** It is a pure router; the B2B contact
route belongs on the two B2B pages. `docs/content-brief.md` §6.2 was updated to
say so.

The portal **URL indicators** under both heroes are gone — those subdomains are
not public, so naming them was an unkept promise.

`PORTAL_RETAILER` / `PORTAL_CORPORATE` in `navConfig.tsx` are **kept** (with an
`eslint-disable` for `no-unused-vars`) — they are the canonical hosts and the
restore snippets reference them. Drop the disables when the CTAs return.

**`UrlIndicator` was NOT deleted.** It is still used by the `actions="business"`
branch of `FinalCta`, which is deliberately preserved. Deleting it would break
the branch that is meant to come back. The only live reference is
`FinalCta.tsx:109`; the two hero hits are inside restore comments.

### 2. FinalCta — `actions="contact"`

`actions` now takes four values:

- `"stores"` — store buttons + QR codes. **Unchanged, in use on `/app`.**
- `"business"` — Sign Up + Log in + URL indicator. **Intact but currently unused.**
- `"contact"` — Contact us (mailto) + phone (tel:). **In use on both B2B pages.**
- `"none"` — headline and body only. Retained; currently unused.

Restore per page in `app/(marketing)/for-{retailers,corporates}/page.tsx`:

```tsx
actions="business"
loginHref="https://retailers.rasheedapp.com"   // or corporates.
loginUrlLabel="retailers.rasheedapp.com"       // or corporates.
```

### 3. Footer — phone added, sales@ → info@

Both B2B footers: the **Company** column gained the phone as a `tel:` link, and
the email moved from `sales@rasheedapp.com` to `info@rasheedapp.com`.

**Note on the spec:** the instruction referred to a "Business column". There is
no such column — the B2B footers have **Product** and **Company** only, and
neither ever contained Sign Up or Log in. Contact details already lived in
Company, so the phone went there beside the email. Verified against the rendered
footer.

`SALES_EMAIL` is kept in `footerConfig.tsx` behind an `eslint-disable`. Restore
it on both B2B variants when the portals ship, and update `docs/content-brief.md`
§8.11 and §9.11 to match.

### 4. EN/AR toggle

Removed from all four variants: desktop header actions, mobile menu footer (the
whole `.mobile-menu__footer` wrapper went with it — an empty one still renders
its border and padding), and the site footer.

`components/layout/LangToggle.tsx` is **kept** and has no importers. It is a
complete, working component; restore by re-adding `<LangToggle />` at the three
sites.

**The logical-property CSS is untouched**, as required — every
`margin-inline-*`, `padding-inline-*`, `inset-inline-*`, `inline-size`,
`block-size` and `text-align: start` is exactly as written, and there are zero
physical `left`/`right` margins or padding anywhere. That is the RTL groundwork
and it is independent of whether the toggle is visible.

### Side effect on the hub, verified correct

With `loginDropdown` gone the hub variant has no nav links and no CTA, so
`hasNav` is false and the mobile hamburger no longer renders — it would otherwise
open an empty menu. The hub header is now the logo alone. Hub tab stops: 13 → 12.
Reverses automatically if a hub CTA ever returns.

### Copy still to resolve

Both B2B final-CTA **subs** still open with "Sign up and…", which no longer
matches a Contact us button:

- `/for-retailers` — "Sign up and start deploying TapCeipt across your branches."
- `/for-corporates` — "Sign up and put your business spend on autopilot."

Verbatim from `docs/content-brief.md` §8.10 / §9.10, so not rewritten here — the
headline/sub copy was not in scope. Either reword both (brief first, then
`content/{retailer,corporate}.tsx`), or accept the mismatch until `/signup`
ships, at which point restoring `actions="business"` resolves it with no copy
change.

### Restore checklist

1. `navConfig.tsx` — restore `hub.loginDropdown` and both B2B `ctas`; drop the two `eslint-disable` lines.
2. `retailer/Hero.tsx` + `corporate/Hero.tsx` — swap the Contact us / phone row back to Sign Up / Log in, restore the URL indicator and the `UrlIndicator` import.
3. Both B2B `page.tsx` — `actions="contact"` → the three `"business"` props.
4. `footerConfig.tsx` — drop the phone row, `CONTACT_EMAIL` → `SALES_EMAIL`, remove its `eslint-disable`.
5. `SiteHeader.tsx` ×2 + `SiteFooter.tsx` — restore `<LangToggle />` and its import (only once Arabic is actually wired).
6. `docs/content-brief.md` — restore §6.2, §8.2/8.3/8.10/8.11, §9.2/9.3/9.10/9.11.
7. Re-run: build, the four §7 assertions, the responsive pass, Lighthouse.

---

## Launch blockers — not fixable in code

Flag these as a list rather than working around them:

1. **Photography and portal screenshots** — every page still ships `PlaceholderMedia`. This is the single largest gap between current state and launchable.
2. ~~**Social media handles**~~ — **done.** All four accounts wired:
   Instagram `instagram.com/rasheedapp_`, Facebook
   `facebook.com/Rasheed.application`, TikTok `tiktok.com/@rasheed_app`,
   LinkedIn `linkedin.com/company/rasheedapp/`. X and YouTube were
   build-phase guesses and were dropped. All open in a new tab with
   `rel="noopener noreferrer"`. Not yet click-tested against the live
   accounts — worth one pass before launch.


3. **`/signup`** — all four B2B CTAs link to a route that doesn't exist yet. Confirm it's live before launch or the primary B2B conversion path 404s.
4. ~~**QR codes**~~ — **done.** Both decode to exactly the URL their store
   button links to, verified at the 140px they render at (1x and 2x) by
   `scripts/qr-scan-test.mjs`, not just at source size. Worth one real-device
   camera check before launch.
5. **Portal subdomains** — confirm `retailers.rasheedapp.com` and `corporates.rasheedapp.com` resolve.
6. **Arabic** — EN/AR toggle is a non-functional placeholder. Either wire it or hide it before launch; a visible dead control is worse than no control.

---

## Design system debt — push back to Figma

Found during token extraction, still unresolved upstream:

- `type/fontFamily/scondary` is misspelled — missing the `e`.
- `--font-secondary` and `--font-primary` are both Inter. The system has no display face.
- `surface/action-hover 2` — token named with a space and a numeral, almost certainly accidental.
- Four brand ramps unmapped: `softlavender`, `warmpeach`, `electricblue`, and `deepgreen`. DeepGreen is now in production use for Green Score and should be formally mapped.
- The `MARKETING EXTENSIONS` block in `tokens.css` (display type scale) exists only in code. It needs to go back into Figma or the two systems diverge.
- The design system library is published twice under two different keys.
