# Asset Manifest

All ten photographic slots are **swapped in**. Every `PlaceholderMedia` in the
persona pages is gone; the only placeholders left are the two QR codes in
`FinalCta` (generated at build time, not photography) and `/kitchen-sink`, which
demos the primitive itself.

## How images are served

Originals live in `assets/source-images/` — **outside `public/`**, and
git-ignored. Next copies `public/` into the build verbatim with no way to
exclude a subfolder, so keeping 18 MB of source PNGs under `public/` would ship
them to production.

`scripts/optimize-images.mjs` encodes each source PNG to a WebP (q82) and a JPEG
(q85) in `public/images/`. `scripts/derive-hub-crops.mjs` cuts the two hub crops
as real files first — they are not CSS crops of the full-size originals, so the
browser downloads only the pixels it shows.

Rendering goes through `<ResponsiveImage>` (`components/ui/ResponsiveImage.tsx`):
a `<picture>` with a WebP `<source>` and a `next/image` JPEG fallback. Intrinsic
dimensions come from `components/ui/assetManifest.ts` and are passed as explicit
`width`/`height`, so the layout box is reserved before the bytes arrive.

In practice every current browser takes the WebP — the JPEG is insurance, and
measured network traffic shows **0 JPEG requests** across all four routes.

## Slot table — as shipped

Ratio is the box the slot reserves; the file's own dimensions are its intrinsic
size. `object-fit: cover` reconciles the two.

| # | Slot | Ratio | File (`public/images/`) | Dimensions | WebP | JPEG | Loading |
|---|---|---|---|---|---|---|---|
| 1 | Hub → For You band | 3:4 | `hub-for-you.{webp,jpg}` | 896×1200 | 66 KB | 101 KB | **priority** |
| 2 | Hub → For Retailers band | 4:3 | `hub-retailers.{webp,jpg}` | 1195×896 | 63 KB | 109 KB | lazy |
| 3 | Hub → For Corporates band | 4:3 | `hub-corporates.{webp,jpg}` | 1024×768 | 65 KB | 103 KB | lazy |
| 4 | `/app` → Hero | 3:4 | `consumer-hero-grocery.{webp,jpg}` | 896×1200 | 58 KB | 97 KB | **priority** |
| 5 | `/app` → Capture, purple TapCeipt card | 16:9 | `tapceipt-tap-macro.{webp,jpg}` | 1200×896 | 49 KB | 85 KB | lazy |
| 6 | `/for-retailers` → Hero | 4:3 | `retailer-hero-checkout.{webp,jpg}` | 1200×896 | 63 KB | 109 KB | **priority** |
| 7 | `/for-retailers` → Meet TapCeipt (dark showpiece) | 1:1 | `tapceipt-hero-dark.{webp,jpg}` | 1024×1024 | 22 KB | 44 KB | lazy |
| 8 | `/for-retailers` → Portal | 16:9 | `retailer-portal-context.{webp,jpg}` | 1376×768 | 132 KB | 172 KB | lazy |
| 9 | `/for-corporates` → Hero | 16:9 | `corporate-hero-office.{webp,jpg}` | 1376×768 | 82 KB | 132 KB | **priority** |
| 10 | `/for-corporates` → Reports | 4:3 | `corporate-reports-desk.{webp,jpg}` | 1200×896 | 56 KB | 96 KB | lazy |

Four `priority` slots — one per route, each the above-the-fold hero. Each emits a
single WebP `<link rel="preload" fetchpriority="high">`; everything else is
`loading="lazy"`.

**Shipped weight:** 656 KB WebP across all ten (1.02 MB if a client fell all the
way back to JPEG), down from 18.37 MB of source PNG — **−96.5%**.

## Hub crops

| Crop | Derived from | Source | Result | Gravity |
|---|---|---|---|---|
| `hub-retailers.png` | #6 `retailer-hero-checkout` | 1200×896 | 1195×896 | centre — source is already ~4:3, so the trim is a few px and the TapCeipt stand stays centre-frame |
| `hub-corporates.png` | #9 `corporate-hero-office` | 1376×768 (16:9) | 1024×768 | **east** — 16:9→4:3 discards ~350px; an east window keeps the whole meeting group and the window light, dropping only empty lounge furniture at far left. A centred crop clipped the right-hand colleague. |

Regenerate with:

```bash
node scripts/derive-hub-crops.mjs && node scripts/optimize-images.mjs
```

## Higgsfield job IDs

Kept for regeneration.

| # | Slot | Job |
|---|---|---|
| 1 | Hub → For You | `04000061-f583-488a-a033-d3c02eb85451` |
| 4 | `/app` Hero | `61ea546e-25b8-4623-a4a9-0b2e20144817` |
| 5 | `/app` Capture | `6842fc25-32b9-4453-844f-cf3c01d65f4f` |
| 6 | `/for-retailers` Hero | `9209f496-23e3-4254-bd3c-68b3c3ff9f11` |
| 7 | Meet TapCeipt | `2bd7b827-9494-4aed-95d9-f995670c9fc5` |
| 8 | `/for-retailers` Portal | `cd912f47-806a-4f07-8f6d-e3e0ac5cf181` |
| 9 | `/for-corporates` Hero | `af4442f8-33b3-4605-89f5-b70a27582d2f` |
| 10 | `/for-corporates` Reports | `428327dc-4106-4b96-8bdc-fd2565e2cdea` |

Second screen mockup used: `e152217e-53a3-4294-b312-fbbd7c61d664` — Dashboard.png (Stats screen).

Source references used for conditioning (Higgsfield media_ids):
- `20c3842d-c48f-4537-ac2d-f51d07bc471d` — TapCeipt render
- `ee75d4ce-8e4c-4c2b-94bd-053de6c5d558` — TapCeipt photo
- `744b0960-490d-4b46-887b-0624026a796b` — TapCeipt photo
- `589813b6-d81a-4d1e-9709-7caac38866c5` — Expense Details screen mockup

## Alt text

`alt` on slots #1, #2 and #4–#7 was carried across verbatim from the
`PlaceholderMedia` it replaced — that copy was authored for the real asset and
still describes it.

Slots **#3, #8, #9 and #10 were rewritten** after the swap. Those four were later
resolved as environmental photography rather than portal UI (see the next
section), so the original copy described product screenshots that are not in the
frame — a screen-reader user was being told they were looking at a dashboard.

| # | File | `alt` as shipped | Note |
|---|---|---|---|
| 3 | `hub-corporates` | "A team working together in a bright modern office" | 4:3 crop of #9, so it carries the same alt |
| 8 | `retailer-portal-context` | "A modern Saudi supermarket interior with several checkout lanes" | |
| 9 | `corporate-hero-office` | "A team working together in a bright modern office" | |
| 10 | `corporate-reports-desk` | "Printed documents and a notebook on a desk beside a laptop" | |

#3 and #9 intentionally share wording: they are the same photograph, one cropped
from the other, and they never appear on the same page (#3 is the hub band, #9 is
the `/for-corporates` hero).

Hub bands 1 and 2 are accurate as written and were left alone: band 1 does show
the app UI on a phone, and band 2 does show a TapCeipt device at a counter.

No alt text on the site now describes portal or dashboard UI that is not in the
photograph.

---

## Portal slots — resolved as environmental photography

The portals were not ready to screenshot, so **#8, #9, and #10 use contextual photography instead of product UI**.

The rule applied: any screen in frame is angled away, out of focus, or cropped. Nothing claims to be the Rasheed portal, so nothing is contradicted when the portals ship.

- **#8** — Saudi retail interior, multiple checkout lanes. Carries "one portal, every branch."
- **#9** — modern office workspace, laptops turned away.
- **#10** — desk detail, documents with a blurred screen behind.

**These are final, not placeholders.** They don't need swapping when the portals ship. Real screenshots can be added later as a supplementary section, but these three slots are done.

**Consequence for copy:** `/for-corporates` no longer shows software anywhere. The pillar text carries the entire "this is a real product" burden. Do not trim it.

**Standing rule:** never generate a fake portal or app dashboard. A generated UI shows invented data structures and navigation that won't match what a customer sees after signing up — a credibility problem on the pages where credibility converts.

---

## Non-photographic, still open

- Logo — horizontal wordmark + icon mark
- Favicon + apple-touch-icon
- OG images ×4 — currently generated with the icon mark; needs the horizontal wordmark
- QR codes ×2 — generated at build time; need a scan test on real devices
- Social handles — footer hrefs are `#`

---

## Generation notes

All shots were produced with `nano_banana_2`. Seedream 4.5 returned a plan-tier error, so the whole set shares one model — which also keeps the look consistent.

**Device shots (#4, #5, #6, #7)** were conditioned on the three TapCeipt references so the hardware keeps its real form factor rather than being invented. Every scene is hands-only, no faces — keeps focus on the device and avoids demographic representation concerns.

The two heroes (#4, #6) had the phone screen replaced with the Expense Details mockup in a second compositing pass. #5 is edge-on at the point of contact, so no screen replacement was needed.

**Environmental shots (#8, #9, #10)** were generated without references, matched to the same warm sand and cream palette so the site holds together across pages.

**Hub shot (#1)** was generated in a single pass — scene and screen together, using the Stats mockup as reference. No TapCeipt in frame, so no device consistency to hold. Warmer, more domestic register than the four device shots, which gives the hub its own feel.

Two screen mockups are in use across the site: the Expense Details receipt on `/app` and `/for-retailers` heroes, and the Stats screen on the hub. Keeping them distinct avoids showing the same screen twice on pages that link to each other.
