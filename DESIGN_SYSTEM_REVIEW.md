# Design System Migration — Review Guide

This document explains, in plain terms, what changed on the
`design-system-migration` branch and why, so you can review by *intent* rather
than by reading every diff. It pairs with two reference docs already in the
repo: **`DESIGN_SYSTEM_MIGRATION.md`** (the original audit/plan) and
**`DESIGN_TOKENS.md`** (the token reference).

Branch: `design-system-migration` · 4 commits · build passes (eslint,
prettier, TypeScript, SEO). Nothing merged to main.

---

## 1. The core idea

The goal was to make every component in the site look and feel like the
**AmolinoAI Design System v2** Figma file.

The single most important realization: that Figma file is a **product/app UI
kit** (it's built on GitHub's Primer system — Buttons, Tables, Modals,
ActionMenus, sidebars at 1440/1920px). It is **not** a marketing-site design.
So "match the design system" really means two different things:

1. **Adopt its foundation everywhere** — the colors, typography, shadows, and
   radii. This is what actually makes things *feel* like the design system, and
   it flows into every component automatically.
2. **Match its primitives where we use them** — Button, Badge, Breadcrumb,
   inputs, tables, modals.

Everything else on the site (Hero, Bento, LogoCloud, the resource/guide pages,
etc.) has no Figma counterpart and never will — those just consume the new
foundation tokens.

Two consequences worth keeping in mind while reviewing:

- **Responsiveness stays in code.** The Figma file has no mobile/tablet
  breakpoints — only a single desktop grid. So we took *appearance* from Figma
  and kept all the `sm:`/`md:`/`lg:` responsive logic exactly as it was. No
  layout/breakpoint behavior was changed.
- **The blog stays its own thing.** Blog/MDX prose keeps its distinct spacing
  and rhythm; we only re-based its *colors* onto the shared tokens.

---

## 2. The foundation (this is the high-leverage part)

Everything starts from `src/styles/tailwind.css`. We rewrote the token set to
match Figma:

- **Font → Manrope** (was Switzer, which was actually never even loaded). This
  is the most visible single change — the whole site now renders in the design
  system's typeface.
- **Colors** re-mapped to the Figma palette: our brand blue already matched, so
  `primary` was confirmed; `neutral` moved from a warm zinc-grey to the design
  system's cooler blue-slate; and the accent scales (orange/purple/green/
  yellow/red) were re-pointed to the exact Figma hues. Two new accent families
  the design system defines — `teal` and `pink` — were added.
- **Shadows and radii** now exist as tokens (they didn't before): an elevation
  scale (`shadow-xs…lg`), a brand "glow" shadow, and named radii
  (`rounded-control` 5px, `rounded-card` 16px, `rounded-pill`).
- We also deleted some buggy/leftover tokens (duplicate stops, an invalid
  value, and two stray `test-*` tokens — one of which turned out to still be in
  use; see §7).

Because Tailwind applies these tokens globally, fixing this one file shifted the
entire site toward the design-system look before we touched a single component.

The token rules are now documented in **`DESIGN_TOKENS.md`** (which `CLAUDE.md`
referenced but didn't previously exist).

---

## 3. How the components changed

We worked outward from the foundation, in layers:

**Typography.** The heading/sub-heading/lead primitives were re-mapped to the
design system's type scale (semibold titles, tighter tracking, the Manrope
sub-heading style — which means eyebrow labels are no longer monospace). Blog
prose (the MDX renderer) had its colors re-based to tokens while keeping its own
spacing.

**Core UI primitives.**
- **Button** became one "uber" component with a new `shape` prop. The
  **default is now the design-system control shape (5px radius)**; the old
  marketing pill is available via `shape="pill"`. (See §5 — this is the one
  change you most want to eyeball.)
- **Badge** became the single canonical label/chip component. The old `Tag` and
  `Eyebrow` components still exist but are now thin wrappers that forward to
  `Badge`, so nothing that used them broke.
- Breadcrumb, search input, the video modal, and comparison tables were aligned
  to tokens.

**Pixel-accurate rebuilds.** For three primitives you specifically asked to
match exactly, we pulled the precise specs out of Figma and reproduced them:
- **Text input** (the search field): 6px radius, neutral-200 border,
  border-only focus (the design system uses no focus ring/shadow), the exact
  placeholder and hover colors.
- **Table** (MDX tables): subtle neutral-50 header with 12px medium text (not
  uppercase), the exact cell padding and divider color.
- **Modal**: the design system's container geometry (16px radius, layered
  shadow). Note the only modal in the app is the video player; there's no
  form/dialog modal to rebuild, so the full spec is documented for when one is
  added.

**Navigation & chrome.** The navbar, dropdowns, header, mobile nav, and footer
were aligned to tokens. (The design system's "Header/Navigation" are app
sidebar components that don't map to a marketing top-nav + footer, so this was
foundation adoption, not a restructure.)

**Everything else (the big sweep).** Across ~70 files — the marketing
components and all the app/resource/guide pages — every remaining raw Tailwind
color (`gray-500`, `blue-600`, `indigo-…`, etc.) was converted to its semantic
token (`neutral-…`, `primary-…`, etc.) using a consistent family-by-family
mapping. After this, **zero raw Tailwind colors remain in `src`** — the project's
own "use semantic tokens" rule is now actually enforced by reality.

**The Section primitive.** Several section components were each hand-rolling the
same wrapper (`max-w-7xl mx-auto px-6 …` plus an ad-hoc background). We
introduced one `Section` layout primitive that owns that chrome
(background + padding + centered container) and adopted it in `ProblemSection`
and `ComparisonSection`. The genuinely bespoke ones (the 3D-tilt hero, the
GSAP-pinned outcome section) and the already-clean `Hero` were left intact.

---

## 4. Cleanup

- **Dead components removed.** Ten components had zero usage; seven were truly
  unused and deleted. Three (`ContentNavigation`, `Guides`, `Resources`) turned
  out to be imported by MDX *content* pages, so they were kept (and swept).
- **Dark-mode classes stripped.** The site doesn't use dark mode, so all the
  inert `dark:` (media-query) classes were removed site-wide. The *live*
  `data-dark:` styling — which is a real feature (white text on dark
  backgrounds, driven by a `dark` prop) — was preserved.

---

## 5. Decisions you made that change how things look

Most of the work is invisible plumbing, but a few choices intentionally change
the visual result. These are the things worth looking at on a running site:

| Change | Effect | How to revert if you dislike it |
|--------|--------|---------------------------------|
| **Font → Manrope** | Whole site is in a new typeface | Point `--font-sans` back / pick another |
| **Neutrals → cool slate** | Text/borders/backgrounds read cooler, less warm | Re-map `neutral-*` in `tailwind.css` |
| **Button default shape = 5px (not pill)** | Every CTA that doesn't say `shape="pill"` is now a slightly-rounded rectangle instead of a pill | Add `shape="pill"`, or flip the default in `Button.tsx` |
| **Eyebrow labels no longer monospace** | Small uppercase labels are now Manrope | Restore `font-mono` in the label variant |
| **Blog body warm-grey → cool slate** | Consistent with the rest of the site | Adjust the prose tokens |

The **button shape** is the biggest one — it touches every call-to-action on
the site. You explicitly chose "default to the design-system shape," so that's
what's wired, but it's the first thing to check visually.

---

## 6. How to review efficiently

1. **Run it** (`npm run dev`) and look at a few representative pages — the home
   page, a use-case page, a resource/guide page, and a blog post. You're
   checking the *gestalt*: Manrope everywhere, cooler greys, button shapes,
   eyebrow labels.
2. **Foundations first.** `src/styles/tailwind.css` and `DESIGN_TOKENS.md` are
   the source of truth — if the tokens are right, most components are right.
3. **Spot-check the primitives** you care about: `Button.tsx`, `Badge.tsx`,
   `Section.tsx`.
4. Don't try to read all ~70 swept files — the color mapping was mechanical and
   consistent; the build (TypeScript + lint + SEO) passed after every step.

---

## 7. Bugs found and fixed along the way

- **`OutcomeSection` had no background.** It referenced a `bg-test-one` token
  that the Phase 0 cleanup removed, so since then that dark section was
  rendering white-text-on-white (Tailwind silently ignores unknown utilities,
  so the build never complained). Fixed to `bg-primary-900`.
- **`data-dark` near-miss.** The dark-class stripper initially over-matched the
  *live* `data-dark:` styling and corrupted three files; this was caught,
  restored, and verified before committing. (Mentioned so you know that area was
  scrutinized, not glossed over.)

---

## 8. What we intentionally did *not* do

- Did **not** change any layout, breakpoint, or responsive behavior.
- Did **not** restructure the bespoke heroes or the GSAP outcome section.
- Did **not** create a generic dialog/Modal component (there's no place that
  needs one yet; the spec is on file for when there is).
- Did **not** touch the `editorial` blog template — it's a deliberate
  off-design-system style and stays that way.

---

## 9. Housekeeping

- **Revoke the Figma personal access token** (it's in `.env`, gitignored) now
  that all the spec pulls are done.
- The work is four commits on `design-system-migration`; review at your pace and
  merge when you're comfortable. (Branch is pushed; nothing is on main or
  deployed to production.)
