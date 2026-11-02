# Rasheed Landing: Brief v3 (Redesign 2026)

Supersedes Brief v2. The approved design is the Claude Design canvas
"Rasheed redesign" (boards: Main, Mobile, Shoppers, Retailers, Corporates, News).
Every page in this repo is a port of that canvas.

## 1. Where the copy lives

- The exact strings for each page live in typed content objects under `content/v2/`
  (`hub.ts`, `shoppers.ts`, `retailers.ts`, `corporates.ts`, `news.ts`). They were ported
  verbatim from the approved canvas and are the copy source of truth.
- Change copy in the canvas first (or get the owner's sign-off), then update the content object.
  Do not paraphrase, rewrite or "improve" strings in code.
- If a needed string is missing (an empty state, an error, a new section), stop and flag it.
  Do not invent it.
- `content/*.tsx` (without `v2/`) is the retired Brief v2 copy and is no longer rendered.

## 2. Information architecture

| Route | Page | Header CTA | Primary CTAs on the page |
|---|---|---|---|
| `/` | Hub: full-screen hero that routes to the three audiences | none (own minimal header) | Get the app (opens the Shoppers page), For retailers, For corporates, news pill to `/news` |
| `/app` | Shoppers | Get the app | Get the app |
| `/for-retailers` | Retailers | Book a demo | Book a demo, Get a quote, WhatsApp, call |
| `/for-corporates` | Corporates | Book a demo | Book a demo, Get a quote, WhatsApp, call |
| `/news` | News and events | Get the app | Newsletter, event links |

- Header nav (inner pages): Shoppers, Retailers, Corporates, News, EN | AR placeholder, page CTA.
- B2B pages show **Book a demo only** in the header. Sign up and Log in are not in the header.
- Footer (inner pages): tagline, Rasheed links (shoppers, retailers, corporates, News and events),
  Company (Support, Privacy, Terms), Contact (info and sales email; on B2B pages also phone and WhatsApp),
  social icons, EN | AR placeholder.
- `/signup` and the portals remain out of scope for this repo.
- "Get the app" (header, footer, Shoppers page): opens the App Store on iPhone and iPad and Google Play on Android; on desktop it scrolls to the Shoppers download section, where "iPhone" and "Android" in the note link to each store. The hub's "Get the app" opens the Shoppers page instead.

## 3. Page outlines

Section order and the badge (eyebrow) above each heading.

### 3.1 Hub (`/`)
Background video at desktop (poster image under it, pause button, hidden under reduced motion);
a still photo on mobile. News pill, "The paperless receipt" badge, rotating headline
"One tap. / Every receipt." (gift, voucher, reward), lead, three CTAs, stats row, slim footer row.

### 3.2 Shoppers (`/app`)
1. Hero: For shoppers, rotating headline "Every receipt, ..." with the celebration animation.
2. Capture: "Add any expense, any way you like."
3. The flip: "Flip your receipt. Win something every time." (animated flip cards)
4. Points and gifts: "Use your points to get real gifts."
5. Store points: "All your store cards in one place."
6. Your spending: "See every detail of what you buy."
7. Pockets and statistics: "Share costs. See where your money goes."
8. Testimonials: "What people say"
9. FAQ: "Common questions."
10. Final CTA: "Start using Rasheed today."

### 3.3 Retailers (`/for-retailers`)
1. Hero: For retailers, rotating headline "Every checkout, ..."
2. Paperless: "Go paperless. Better for your store and the planet."
3. At checkout: "One tap. That is all."
4. The receipt is your media: "Your ad, on every receipt."
5. Rewards on the back: "A reason for customers to come back."
6. Your points program: "No points program? No worries. Rasheed is here."
7. The portal: "One portal. Every branch."
8. Partners and testimonials, news teasers
9. Getting started: "Start in three simple steps."
10. FAQ: "Common questions."
11. Final CTA: "See it at your store."

### 3.4 Corporates (`/for-corporates`)
1. Hero: For corporates, rotating headline "Team spending, ..."
2. Why switch: "No more collecting receipts by hand."
3. The Business Pocket: "One pocket. Every team member."
4. Control: "Set the budget. Follow the spending."
5. Capture: "Add a receipt. Rasheed files it."
6. Reports: "Clear records, with every receipt."
7. How it works: "Start in three simple steps."
8. News: "Latest from Rasheed" (may show TapCeipt news and expo cards, approved by the owner)
9. FAQ: "Common questions."
10. Final CTA: "Ready to stop collecting receipts?"

### 3.5 News and events (`/news`)
Intro "What is new at Rasheed.", featured story, "Latest news" grid, Events "Meet us in person.",
newsletter "Get the news first." Each item has an anchor id (kebab-case of its headline) so other
pages can deep-link to `/news#<slug>`.

## 4. Content rules (locked)

- **No countries.** Never name a country, city, nationality or national programme. Rasheed is
  launching in more than one market.
- **No currency.** No currency names or symbols. Amounts are plain numbers.
- **No real brands or trademarks** in copy or imagery (no retailer, marketplace or partner names).
  The placeholder store is "Rasheed Store". Never mention Amazon.
- **No em dashes**, anywhere.
- **Simple wording.** Short sentences an average reader (and later an Arabic translation) can follow.
- Product terminology as in `CLAUDE.md` (TapCeipt, Pockets, Slices, Cabinet, Green Score, Offers Hub).
- TapCeipt is always set with `<TapCeipt />` (Michroma, 0.9em).
- Imagery always shows the real TapCeipt device. No avatars or imagery implying demographic targeting.

## 5. Placeholders still open (owner input needed)

- Stats: values shown as `[000K+]`, `[0.0M+]`, `[000+]`, `[00K kg]` until real numbers are confirmed.
- Phone and WhatsApp: `+000 000 0000`.
- Partner logos, testimonial quotes, news items, event dates, POS integration list, pricing.
- Store points vs partner points naming; the barcode on the receipt front.

## 6. Language

English only. EN | AR toggle is a non-functional placeholder in the header and footer.
Layouts use logical properties so the RTL pass is not a rewrite.
