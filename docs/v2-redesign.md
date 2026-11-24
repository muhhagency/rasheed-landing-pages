# V2 redesign notes

Branch `redesign/design-system-v2`. Nothing in v1 was deleted: the old section
components under `components/sections/` are unused by the routes and can be
removed once v2 is approved.

## Idea
The Pocket card's curved lip and dashed stitch become the page structure. Every
hero tucks into a pocket and every page closes inside one.

## Copy
Approved strings are reused as they were unless listed here.

| Where | Change |
|---|---|
| Hub h1 | The approved tagline is now the visible headline (was screen-reader only) |
| Hub subhead | NEW: "One place for what you buy, what you share and what your team spends." |
| Hub nav | NEW: For you, For retailers, For corporates |
| Hub steps | NEW section: "One receipt, three people helped." with three steps |
| `/app` | Rewards now comes before Cabinet; nav order follows. Kickers on hero removed |
| `/app`, `/for-retailers`, `/for-corporates` | NEW "Questions people ask" sections. Answers restate the content brief |
| Retailer and corporate heroes | URL indicator (portal address) not shown, the portals are not live |
| Portal images | Captioned "Portal design preview, sample data" |
| "From sign-up to first..." | Non-breaking hyphen only |

## Needs a decision
1. `/privacy`, `/terms` and `/support` are linked in the footer but have no page here. This was already so in v1.
2. `sign up` wording remains in B2B copy while the button says Contact us, as in v1.
3. `CLAUDE.md` points to Figma file `3hcXxu77vHXA0NU5OAP9Mq`. The maintained one is `u2QVrJusUpAHpuls7TFhsy`.
4. `copy-audit.mjs` will report the NEW strings until `content-brief.md` is updated.
5. All names, amounts and stores inside product images are sample data.
