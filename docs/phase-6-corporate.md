# Phase 6 — Corporate (`/for-corporates`)

Copy comes from `docs/content-brief.md` §9. Verbatim.

The most restrained page of the four. Professional and data-forward — but still Rasheed, not enterprise-beige.

---

## ⚠ Critical guardrail

**Corporates do not get TapCeipt hardware.** Value is delivered entirely through the app and the corporate portal.

- No TapCeipt in any section, heading, body copy, pillar, media label, or alt text on this page.
- The Capture section lists **photo, voice, and file only** — three modes, not four.
- Do not carry over the capture layout from `/app`, which is built around TapCeipt dominance. This section needs its own treatment with three equal modes.

The previous two pages both lead with TapCeipt. Pattern-matching from them is the most likely failure mode on this page.

---

## Anchors

Map cleanly to the Phase 2 nav — no reordering needed:

| Anchor | Section |
|---|---|
| `#business-pocket` | The Business Pocket (§9.4) |
| `#team` | Set the budget. Watch the burn. (§9.5) |
| `#reports` | Clean records. Every riyal traced. (§9.7) |

---

## Section-by-section

### 1. Hero
Copy §9.3. CTAs: `Sign Up` (primary → `/signup`) and `Log in` (secondary → `https://corporates.rasheedapp.com`). Small URL indicator beneath: `corporates.rasheedapp.com`.

Media: `PlaceholderMedia` `16/9`, label *"Corporate portal dashboard"*, alt *"The Rasheed corporate portal showing department spend and team activity"*.

Note the ratio differs from the other two heroes — this page's hero is a dashboard, which is landscape, not a phone or a counter.

### 2. The Business Pocket — `#business-pocket`
Copy §9.4. Introduces the core concept before the feature detail.

Worth reinforcing visually that this is one of the three Pocket types established on `/app` — the same family, configured for teams. A single pocket with multiple members attached reads the idea faster than prose.

### 3. Control — `#team`
Copy §9.5. Four pillars in a 2×2 grid: Team pockets & roles, Slices by department, Employee onboarding, Real-time visibility.

Reuse the pillar treatment from `/for-retailers`. Do not invent a third card style.

### 4. Capture
Copy §9.6. `tone="subtle"`.

**Three modes only — photo, voice, file.** Equal weight, no hero mode. See the guardrail above.

### 5. Reports — `#reports`
Copy §9.7.

Media: `PlaceholderMedia` `4/3`, label *"Department spend report with export"*, alt *"A Rasheed corporate report broken down by department with an export action"*.

Restrained. Table rows, a department breakdown, an export action. This is the section finance buyers scan for — legibility over drama.

### 6. How it works
`<HowItWorks />` with the three steps from §9.8: Sign Up, Onboard your team, Track & report.

### 7. Trust strip
`<TrustStrip />`

### 8. Final CTA
```tsx
<FinalCta
  headline="Ready to stop chasing receipts?"
  body="Sign up and put your business spend on autopilot."
  actions="business"
  loginHref="https://corporates.rasheedapp.com"
/>
```

---

## Page shell

```tsx
<SiteHeader variant="corporate" />
<main id="main">…</main>
<SiteFooter variant="corporate" />
```

## Metadata

- Title: `Rasheed for Corporates — The business pocket, built for teams.`
- Description: from §9.3 sub, trimmed to ~155 characters.

---

## Done when

- **Zero occurrences of `TapCeipt` on this page.** Verify: `grep -rni "tapceipt" app/for-corporates` returns nothing.
- Capture section shows three modes, not four
- Three anchors scroll correctly with sticky-header offset
- Footer uses `sales@rasheedapp.com`
- Renders at 1440 / 1024 / 768 / 390
- No hardcoded hex, spacing, or radius outside `tokens.css`
- No Amazon mention anywhere, including alt text and metadata
