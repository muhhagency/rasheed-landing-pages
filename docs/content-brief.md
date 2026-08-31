# Rasheed Landing — Brief v2

Rebuild of rasheedapp.com. Multi-page architecture: a **hub** that routes to **three self-contained persona landing pages** (Consumer, Retailer, Corporate). EN default with AR toggle. AR deferred.

---

## 1. Information Architecture

```
/                    Hub — routes to 3 personas
├── /app             Consumer page (B2C — drives app downloads)
├── /for-retailers   Retailer page (B2B — Sign Up + Log in)
└── /for-corporates  Corporate page (B2B — Sign Up + Log in)
```

- **Hub** — minimal: nav + 3 persona sections + footer. No hero, no download buttons. Pure routing.
- **Persona pages** — self-contained. No persistent persona switcher. Only cross-nav is the logo → hub.
- **Sign Up** — unified self-serve form at `rasheedapp.com/signup`, persona toggle inside (Retailer / Corporate).
- **Log in** — routes to correct subdomain (`retailers.rasheedapp.com` / `corporates.rasheedapp.com`).

---

## 2. Objectives

**Primary** — B2C app installs via the Consumer page.
**Secondary** — B2B Sign Up leads via Retailer + Corporate pages.

---

## 3. Audiences

| Segment | Page | CTA |
|---|---|---|
| KSA mobile users | `/app` | Download app |
| Retailers | `/for-retailers` | Sign Up · Log in |
| Corporates | `/for-corporates` | Sign Up · Log in |

---

## 4. Product Terminology (locked)

- **Pockets** — Three types: **Personal**, **Business** (Corporates only), and **Shared**. Shared has two subtypes:
  - **Regular Shared** — permanent, with a fixed budget and cycle (weekly, monthly, or yearly). Behaves like Personal but multiplayer — used with family, workmates, or friends on an ongoing basis.
  - **Fallah** — accumulate → settle → close. For one-off pools like a trip or event. Cannot convert to Permanent.
  Not "Buckets," not "accounts."
- **Slices** — Budget allocations across categories inside a pocket. Slice ≠ Category.
- **Fallah** — Shared pocket product. Accumulate → settle → close. Family/kids angle on Consumer page.
- **TapCeipt** — NFC hardware at POS. One word, camel-cased: capital T, capital C. Not "TAPCEIPT," not "TapCeit," not "digital printer." **The name has its own typographic mark — always set in Michroma.** Applies wherever the name appears as a word mark; body copy mentions inherit it too.
- **Cabinet** — Stores Vouchers, Warranty Cards, Medicine Notes earned from receipt scanning.
- **Green Score** — Tiers: Leaf → Plant → Tree → Forest (four tiers).
- **Offers Hub** — Curated partner deals redeemable in-app.
- **Amazon** — Backend fulfillment only. Never in copy. Use "gifts," "rewards," or "partner deals."

---

## 5. Language & Localization

- EN default, AR toggle in every page's nav.
- Same URL, locale switch, full RTL flip.
- AR translation deferred; plan after EN launch.

---

## 6. Hub Page (`/`)

### 6.1 Sitemap
1. Nav
2. Persona 1 — For You (Consumer)
3. Persona 2 — For Retailers
4. Persona 3 — For Corporates
5. Footer

### 6.2 Nav
`Logo`

- Logo only. No download, no Sign Up, no Log in, no product nav — the hub is a
  pure router. The Log in dropdown that pointed at the two portal subdomains was
  removed while those are unbuilt, and does **not** become a Contact us: the B2B
  contact route lives on the two B2B pages, not here.

### 6.3 Persona sections (full-width stacked)

**Section 1 — For You**
Kicker: *For You*
Headline: *Rasheed for everyday life.*
Sub: *Capture receipts, organize your money, share with family, earn rewards.*
CTA: *Explore Rasheed for you →* → `/app`

**Section 2 — For Retailers**
Kicker: *For Retailers*
Headline: *Rasheed at the register.*
Sub: *Turn every checkout into a customer moment with TapCeipt and the retailer portal.*
CTA: *Explore Rasheed for retailers →* → `/for-retailers`

**Section 3 — For Corporates**
Kicker: *For Corporates*
Headline: *Rasheed for business.*
Sub: *Manage team spend with the Business Pocket, department slices, and audit-ready reports.*
CTA: *Explore Rasheed for business →* → `/for-corporates`

### 6.4 Footer
Minimal — logo · tagline · legal · social.

---

## 7. Consumer Page (`/app`)

Copy derived from the Consumer Value Proposition doc, translated to on-brand English.

### 7.1 Sitemap
1. Nav
2. Hero
3. Every receipt, your way — multi-modal capture + TapCeipt
4. Money that makes sense — Pockets · Slices · Fallah
5. Never lose a warranty — Cabinet
6. Grow with every purchase — Green Score · Offers Hub
7. Trust strip
8. Final CTA
9. Footer

### 7.2 Nav
`Logo · Features · TapCeipt · Cabinet · Rewards · [Download]`

### 7.3 Hero
**Kicker:** For You
**Headline:** Money that fits your life.
**Sub:** Capture receipts your way. Organize into Pockets. Share with family through Fallah. Earn rewards for greener habits — all in one Rasheed.
**CTAs:** [App Store] [Google Play]

### 7.4 Every receipt, your way
**Kicker:** Capture
**Headline:** Every receipt, your way.
**Body:** TapCeipt hands it to you at checkout. Or type it, say it with your voice, snap a photo, or attach a file. Rasheed takes it however it comes.

Four capture modes shown as cards:
- **TapCeipt** — Tap your phone at checkout. Done.
- **Voice** — Say it out loud. Rasheed logs it.
- **Photo** — Snap the paper receipt. Rasheed reads it.
- **File** — Attach a PDF, image, or bill. Rasheed sorts it.

### 7.5 Money that makes sense
**Kicker:** Organize
**Headline:** Where every riyal lives.
**Sub:** Money that's yours, money you share, and money you pool for a moment.

Three cards:

- **Personal Pockets** — Your own money, organized. Set a budget cycle, watch your spending, adjust as life shifts.
- **Shared Pockets** — Money you keep with family or friends on an ongoing basis. Set a shared budget and cycle — weekly, monthly, or yearly. Keep a household aligned with your partner, or teach your kids financial awareness inside a family pocket.
- **Fallah** — For one-off pools — a trip, an event, a project. Rasheed nets who owes whom, then closes the pool when everyone's settled.

Callout below: *"Inside any pocket, **Slices** let you budget by category. See what's left at a glance."*

### 7.6 Never lose a warranty
**Kicker:** Cabinet
**Headline:** Never lose a warranty. Or a voucher.
**Body:** Rasheed's Cabinet keeps your warranty cards, vouchers, and medicine notes safe — captured automatically from every receipt you scan. Ready when you need them, wherever you are.

### 7.7 Grow with every purchase
**Kicker:** Rewards
**Headline:** Spend smarter. Grow greener.

Two cards:
- **Green Score** — Nature-themed tiers from Leaf to Forest. Every mindful choice moves you up. Reduce waste, protect the environment, earn recognition for the difference you make.
- **Offers Hub** — Curated deals from partners, redeemable inside the app. Earn points as you spend, redeem them for gifts you actually want.

### 7.8 Trust strip
- KSA data protection
- Bank-grade encryption
- Aligned with Vision 2030 & Saudi Green Initiative
- No data selling
- Guest-first — try before you sign up

### 7.9 Final CTA
**Headline:** Ready to Rasheed?
**Sub:** Start scanning in seconds. No account required.
**CTAs:** [App Store] [Google Play] + QR codes

### 7.10 Footer
Logo · tagline · Features · TapCeipt · Cabinet · Rewards · Privacy · Terms · info@rasheedapp.com · social · © Rasheed 2026

---

## 8. Retailer Page (`/for-retailers`)

### 8.1 Sitemap
1. Nav
2. Hero
3. Meet TapCeipt — the hardware moment
4. The Retailer Portal — branches, terminals, staff, offers
5. Every checkout is a customer moment — loyalty angle
6. Vision 2030 & SGI alignment
7. How it works — 3 steps to deployment
8. Trust strip
9. Final CTA
10. Footer

### 8.2 Nav
`Logo · Why TapCeipt · Portal · Vision 2030 · [Contact us]`

### 8.3 Hero
**Kicker:** For Retailers
**Headline:** Turn every checkout into a customer moment.
**Sub:** One TapCeipt at the register replaces paper, speeds up checkout, and opens a live channel to the customer after they walk out. Manage branches, terminals, staff, and offers from a single portal.
**CTAs:** [Contact us] [+966 55 859 3522]

### 8.4 Meet TapCeipt
**Kicker:** A hardware first for KSA
**Headline:** One tap. Every receipt.
**Body:** TapCeipt sits at the checkout. The customer holds their phone close and their receipt drops straight into Rasheed. No paper, no email, no wasted print rolls.

### 8.5 The Retailer Portal
**Kicker:** Portal
**Headline:** One portal. Every branch.
**Body:** Deploy, monitor, and manage TapCeipt across your network from a single dashboard.

Four pillars (2×2):
- **Branches** — See every location's performance at a glance.
- **Terminals** — Provision, monitor, and troubleshoot each TapCeipt device.
- **Staff** — Roles, permissions, and activity by branch.
- **Offers** — Publish deals directly to customers who tapped at your registers.

### 8.6 Every checkout is a customer moment
**Kicker:** Loyalty
**Headline:** The receipt is only the beginning.
**Body:** After a customer taps, you have a direct channel to them inside Rasheed. Publish targeted offers, drive repeat visits, and turn one-time buyers into loyal customers.

### 8.7 Vision 2030 & SGI aligned
**Kicker:** Compliance & Sustainability
**Headline:** Built for a paperless Saudi Arabia.
**Body:** TapCeipt eliminates thermal receipt paper — a small change with a real environmental impact. Aligned with Vision 2030 and the Saudi Green Initiative from day one, with audit-ready digital records for every transaction.

### 8.8 How it works
**Headline:** From sign-up to first tap.

Three steps:
1. **Sign Up** — Create your Retailer account. Add branches and terminals.
2. **Deploy TapCeipt** — Install at every register. Customers tap to receive.
3. **Manage & Grow** — Track receipts, run offers, build loyalty from the portal.

### 8.9 Trust strip
Same 5-item strip as Consumer.

### 8.10 Final CTA
**Headline:** Ready to go paperless?
**Sub:** Sign up and start deploying TapCeipt across your branches.
**CTAs:** [Contact us] [+966 55 859 3522]

### 8.11 Footer
Logo · tagline · Why TapCeipt · Portal · Vision 2030 · Support · Privacy · Terms · +966 55 859 3522 · info@rasheedapp.com · social · © Rasheed 2026

---

## 9. Corporate Page (`/for-corporates`)

### 9.1 Sitemap
1. Nav
2. Hero
3. The Business Pocket — shared team spending
4. Team, roles, slices — control at the department level
5. In-app capture — employees scan, receipts route
6. Audit-ready — clean records for finance and tax
7. How it works — 3 steps to onboarding
8. Trust strip
9. Final CTA
10. Footer

### 9.2 Nav
`Logo · Business Pocket · Team · Reports · [Contact us]`

### 9.3 Hero
**Kicker:** For Corporates
**Headline:** The business pocket, built for teams.
**Sub:** Give your team a shared business pocket, set slices per department, onboard employees with the right permissions, and see every riyal spent — without chasing receipts at month-end.
**CTAs:** [Contact us] [+966 55 859 3522]

### 9.4 The Business Pocket
**Kicker:** Shared team spending
**Headline:** One pocket. Every team member.
**Body:** The Business Pocket is a shared money container your whole team can use — with the right permissions, the right limits, and full visibility from the corporate portal.

### 9.5 Team, roles, slices
**Kicker:** Control
**Headline:** Set the budget. Watch the burn.

Four pillars (2×2):
- **Team pockets & roles** — Control who spends and how much.
- **Slices by department** — Set the budget, watch the burn.
- **Employee onboarding** — Add, remove, or reassign employees with the right permissions.
- **Real-time visibility** — See every transaction as it happens.

### 9.6 In-app capture
**Kicker:** Capture
**Headline:** Employees scan. Rasheed sorts.
**Body:** Employees capture receipts in the Rasheed app — by photo, voice, or file. Entries route to the right slice automatically. No expense reports, no lost receipts, no month-end chase.

<!-- CORRECTED COPY ERROR: original read "by TapCeipt, photo, or voice". Corporates do
     not get TapCeipt hardware (CLAUDE.md §Product terminology: "Never imply hardware on
     /for-corporates"), and the Phase 6 guardrail requires photo/voice/file only. The
     TapCeipt reference leaked in from the consumer capture copy. -->


### 9.7 Audit-ready
**Kicker:** Reports
**Headline:** Clean records. Every riyal traced.
**Body:** Export by department, by slice, by employee, or by date range. Finance-grade reports for tax, audit, and internal review.

### 9.8 How it works
**Headline:** From sign-up to first report.

Three steps:
1. **Sign Up** — Create your Corporate account. Set up your Business Pocket.
2. **Onboard your team** — Add employees, assign roles, define slices.
3. **Track & report** — Watch spend in real time, export audit-ready reports.

### 9.9 Trust strip
Same 5-item strip.

### 9.10 Final CTA
**Headline:** Ready to stop chasing receipts?
**Sub:** Sign up and put your business spend on autopilot.
**CTAs:** [Contact us] [+966 55 859 3522]

### 9.11 Footer
Logo · tagline · Business Pocket · Team · Reports · Support · Privacy · Terms · +966 55 859 3522 · info@rasheedapp.com · social · © Rasheed 2026

---

## 10. Design Notes

- Each persona page has its own visual language within the shared brand system.
- Consumer page — warm, personal, human. Family and everyday-life imagery.
- Retailer page — retail-forward, hardware-photography-heavy. Cleaner, more product-shot.
- Corporate page — professional, restrained, dashboard-forward.
- Brand purple `#301473` used as supportive accent, not decoration.
- **TapCeipt is always set in Michroma**, everywhere it appears — headlines, body, nav, buttons, footers. Michroma runs wide and heavy; set it ~0.9em relative to surrounding text and watch for awkward line breaks in large headlines.
- Green Score section uses nature palette (Leaf → Forest gradient).
- No avatars implying demographic targeting.
- No mention of Amazon.

---

## 11. Technical

- 4 routes: `/`, `/app`, `/for-retailers`, `/for-corporates`.
- Two portal subdomains: `retailers.rasheedapp.com`, `corporates.rasheedapp.com`.
- Sign Up: unified self-serve form at `rasheedapp.com/signup` with persona toggle.
- App Store links (from current site):
  - iOS: `apps.apple.com/us/app/rasheed/id6458787414`
  - Android: `play.google.com/store/apps/details?id=com.rasheed.app&pcampaignid=web_share`

---

## 12. Trust & Compliance

- KSA data protection surfaced on every page's trust strip.
- Vision 2030 + SGI called out — required on Consumer and Retailer pages, optional on Corporate.
- Guest-first onboarding referenced on Consumer page's final CTA.
- No Amazon.

---

## 13. Open Items

1. **Sign Up form spec** — Field list, persona toggle behavior, validation, and post-submit routing.
2. **Proof assets** — App screenshots, TapCeipt hardware photography, retailer/partner logos, portal screenshots.
3. **Brand guardrails** — Final palette, wordmark rules, typography spec.
4. **Portal readiness** — Confirm subdomains route correctly before launch.
5. **AR pass** — Deferred to post-launch.
6. **Consumer hero visual direction** — Photographic (lifestyle) vs product-shot (phone + TapCeipt) vs illustrative. Currently unresolved.

---

## 14. Out of Scope (v2)

- Blog, press, about, careers, support pages.
- Interactive scan-a-receipt demo.
- Live pricing page for PRO tier.
- Testimonials, case studies, press logos (until proof assets exist).
- Persistent persona switcher across pages.
