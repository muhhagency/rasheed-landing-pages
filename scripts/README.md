# Scripts

Verification tooling for the Phase 7 checks (`docs/phase-7-polish.md`) and the
image pipeline. All are plain Node ESM — no test runner.

Most read the **static export**, so build and serve it first:

```bash
npm run build
npx serve out -l 4321
```

## Verification

| Script | Checks |
|---|---|
| `responsive-check.mjs` | Horizontal scroll at 1440/1280/1024/768/430/390 on all four routes (§2) |
| `responsive-behaviour.mjs` | Pillar-grid collapse, hero above-the-fold balance, mobile menu focus trap / Escape / scroll lock (§2) |
| `photo-responsive.mjs` | Photography-specific: `object-fit: cover` crop retention per width, image share of the mobile fold |
| `orphan-check.mjs` | Heading orphans at 768px (§2) |
| `motion-check.mjs` | Scroll-reveal fires, and is fully disabled under `prefers-reduced-motion` (§3) |
| `contrast-check.mjs` | WCAG AA over every rendered text node, grouped by tone scope (§5) |
| `keyboard-pass.mjs` | Tab from skip link to footer: focus order vs visual order, visible focus ring on every stop (§5) |
| `a11y-misc.mjs` | Skip link moves focus to `main`, alt coverage, nav dropdown keyboard + `aria-expanded` (§5) |
| `lighthouse-run.mjs` | Performance + Accessibility per route, with failing audits (§6) |
| `picture-check.mjs` | Confirms browsers take the WebP `<source>` and no redundant JPEG is fetched |
| `font-check.mjs` | Font files per route, paint timing, Michroma not render-blocking (§6) |
| `copy-audit.mjs` | Every visible string traced back to `docs/content-brief.md` (§8) |
| `qr-scan-test.mjs` | Decodes the store QR codes **from the live page at their rendered size**, and fails if either does not resolve to its store URL |

## Image pipeline

Run in this order after adding or regenerating source art:

```bash
node scripts/derive-hub-crops.mjs   # 4:3 hub crops from the two B2B heroes
node scripts/optimize-images.mjs    # assets/source-images/*.png -> public/images/*.{webp,jpg}
```

`optimize-qr.mjs` handles the store QR codes separately — losslessly, since
lossy encoding makes flat line art bigger and harder to scan. It verifies each
output by decoding it.

`generate-icons.mjs` rebuilds the favicon set from the brand icon SVG in the
design-system folder — `app/favicon.ico` (16/32/48), `app/icon.png` (512), and
`public/apple-touch-icon.png` (180, on brand purple, since iOS composites
transparency onto black).

`generate-og.mjs` rebuilds the four Open Graph cards from design tokens. Re-run
it after changing page titles or brand colours.

Originals live in `assets/source-images/` — outside `public/` and git-ignored,
so they are never copied into the build. See `docs/asset-manifest.md`.
