# DESIGN.md — Notary Boilerplate Design Handoff

Design system and page-level UX specifications for the reusable Italian notary-office website boilerplate (`sito-notaio`). This document is the single source of design truth for implementation. Every in-scope page, section, component, and state is specified here; implementers should not invent hierarchy, responsive rules, or states.

- **Audience of this document:** Next.js specialist, reviewers, QA.
- **Site language:** Italian (all UI strings, slugs, and sample copy in Italian).
- **Scope:** marketing/content site only. No booking, calendars, forms that submit, dashboards, or admin UI.
- **Theming contract:** everything a real firm replaces lives in the content/config layer. Tokens are named **roles**; a firm re-themes by remapping role values, never by editing components.

Coverage map (IA → spec section):

| Route | Spec |
|---|---|
| `/` | §6.1 Homepage |
| `/studio` | §6.2 Studio |
| `/servizi` | §6.3 Servizi index |
| `/servizi/[slug]` | §6.4 Servizio dettaglio |
| `/professionisti` | §6.5 Professionisti index |
| `/professionisti/[slug]` | §6.6 Profilo professionista |
| `/contatti` | §6.7 Contatti |
| `/insights` | §6.8 Insights index |
| `/insights/[slug]` | §6.9 Articolo |
| `/privacy`, `/cookie` | §6.10 Stub legali |
| Global chrome | §5 Header, Footer, Breadcrumbs, Drawer |

---

## 1. Visual thesis

**The site behaves like a well-typeset public deed: a calm, ruled document — generous margins, disciplined hierarchy, hairline structure, one restrained seal accent. Permanence and precision instead of decoration.**

An Italian notary is a public official; trust is built by order, legibility, and restraint, not by marketing flourish. The visual language therefore borrows from the register page and the written instrument:

1. **The margin rule** (signature element 1): a 1px vertical hairline aligned to the content grid's left edge, running through hero and page-title zones like the margin of a legal register. On mobile it becomes a short horizontal rule above major titles.
2. **The seal** (signature element 2): a small circular monogram mark (firm initials, configurable) used as hero fallback composition, section end-mark, and footer brand. Never a decorative illustration.
3. **Ruled rows over card soup:** repeated content is separated by hairlines and alignment, not by floating glass cards.

Explicitly rejected: gradient heroes, glassmorphism, decorative blobs, neon glows, stock handshake/gavel/scales-of-justice imagery, oversized empty padding as "elegance", mixed accent colors per section.

**Design dials** (global intent for every page):

| Dial | Value | Meaning |
|---|---|---|
| Layout variance | 4 / 10 | Ordered grid with occasional asymmetric spans; mobile = strict single column |
| Motion intensity | 2 / 10 | CSS state transitions only; no scroll choreography, no autoplay |
| Visual density | 4 / 10 | Comfortable editorial spacing; hairlines carry structure |

**Theme mode:** light is canonical. Tokens are theme-ready (see §2.1); a dark theme is an optional per-firm extension, never a per-section flip. Sections may tint within the light family (`surface` → `surface-tint` → `surface-inverse`) but never invert mid-page except the deliberate CTA band and footer.

---

## 2. Design tokens

All tokens are **named roles**. The reference values below are the boilerplate defaults; a firm re-themes by overriding role values in `SiteConfig` (or the theme token file), never by editing components. Reference hex values are illustrative defaults, not constraints — the **contrast contract (§2.7) overrides any value**.

### 2.1 Color roles

| Role | Default reference | Usage |
|---|---|---|
| `primary` | `#1E3A34` deep ink-green | Headings, primary buttons, brand mark, active nav underline, links on light |
| `primary-strong` | `#152B26` | Primary button hover/active |
| `primary-tint` | `#E8EDEB` | Subtle section tint, placeholder blocks, chip backgrounds |
| `accent` | `#A8432B` seal red | Seal mark, prose link hover, "Nota" callout rule, focus ring. Area ≤ 5% of any screen |
| `surface` | `#F4F4F0` | Page background (paper) |
| `surface-raised` | `#FBFBF8` | Cards, sticky header, drawer |
| `surface-inverse` | `#14231E` | Footer, CTA band |
| `text` | `#1A1A17` | Body and headings on light |
| `text-muted` | `#55554E` | Secondary copy, captions, meta |
| `text-inverse` | `#F4F4F0` | Text on `surface-inverse` |
| `text-inverse-muted` | `#B9C2BE` | Secondary text on inverse |
| `border` | `#DDDDD6` | Hairlines, card borders, dividers |
| `border-strong` | `#B9B9B0` | Hover borders, input borders, secondary button border |
| `focus` | `#A8432B` | Focus-visible ring (see §2.7) |
| `success` | `#2F6B4F` | Reserved (no interactive success flows in scope) |
| `warning` | `#8A6D1F` | Reserved |
| `error` | `#9B2C2C` | Inline error text if ever needed |

Roles a firm **must** map for a re-theme: `primary`, `primary-strong`, `primary-tint`, `accent`, `surface`, `surface-raised`, `surface-inverse`, `text`, `text-muted`, `border`, `border-strong`. Semantic roles (`success`/`warning`/`error`) may stay at defaults.

**Role rules**

- One accent per site. A section never introduces a second hue.
- `accent` is never used for large fills or body text.
- Surfaces never use pure `#000000` or pure `#FFFFFF`.
- Warm/cool family of neutrals must be consistent across the site (defaults are warm-neutral stone).

### 2.2 Typography roles

Two configurable families: a **serif for display/headings** (institutional authority of the written instrument) and a **sans for body/UI** (neutral legibility for all ages). Defaults: **Source Serif 4** (display) + **Inter** (body/UI) — both open-license, variable, self-hostable via `next/font`. A firm may substitute families via config; the roles below stay fixed.

| Role | Family | Desktop | Mobile | Weight | Line-height | Notes |
|---|---|---|---|---|---|---|
| `display` | display serif | 56px | 36px | 600 | 1.05 | Homepage H1 only; max 2 lines desktop |
| `title` | display serif | 40px | 30px | 600 | 1.12 | Interior page H1s |
| `heading-2` | display serif | 32px | 26px | 600 | 1.2 | Section titles |
| `heading-3` | body sans | 20px | 18px | 600 | 1.3 | Card titles, h3 |
| `body` | body sans | 17px | 16px | 400 | 1.65 | Paragraphs; measure 60–70ch |
| `body-small` | body sans | 15px | 15px | 400 | 1.55 | Card summaries, footer text |
| `caption` | body sans | 14px | 13px | 400 | 1.5 | Dates, meta, breadcrumbs, image captions |
| `label` | body sans | 12px | 12px | 600 | 1.4 | Eyebrow labels only: uppercase, letter-spacing 0.12em |

Rules:

- Headings use the serif; UI chrome (nav, buttons, cards, meta) uses the sans.
- `label` (eyebrow) max **1 per 3 sections** per page. Prefer dropping the eyebrow entirely.
- Numerals in dates, phones, P.IVA: `font-variant-numeric: tabular-nums` (role `caption`/`body-small` with tabular figures).
- Emphasis inside headings: bold/italic of the **same** family, never a mixed family.
- Prose links: always underlined (not color-alone), `accent` on hover.

### 2.3 Spacing and density

4px base grid. Scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128` px.

| Token | Desktop (≥1024) | Mobile (<768) | Usage |
|---|---|---|---|
| `page-gutter` | 48px (64px ≥1280) | 20px | Left/right page padding |
| `section-y` | 96px | 56px | Vertical padding of standard sections |
| `section-y-lg` | 128px | 72px | Homepage hero, CTA band |
| `stack-gap` | 24px | 16px | Between blocks inside a section |
| `card-gap` | 24px | 16px | Grid gutters for card grids |
| `prose-measure` | 68ch | full width | Article/paragraph measure |

Density principle: **document margins** — whitespace is margin, not emptiness. Content sits on a strict grid; vertical rhythm comes from the spacing scale only (no arbitrary one-off values). Long lists never become denser than one row per item with a hairline; if a list exceeds 5 items on a marketing page, group it or turn it into cards (see §5.6 PrincipleList).

### 2.4 Grid and layout

- Max content width: **1200px**, centered.
- Desktop grid: 12 columns, 24px gutters, aligned to `page-gutter`.
- Composition defaults (variance 4): full-width bands with inner 12-col content; 5/7 and 6/6 splits; occasional 7/5 asymmetric spans. Never more than one "large empty margin" composition per page.
- Page anatomy: skip link → header (sticky) → main (one `h1`) → CTA band (where specified) → footer.

### 2.5 Radius and elevation

Single near-square radius scale (document feel):

| Token | Value | Usage |
|---|---|---|
| `radius-xs` | 2px | Buttons, chips, inputs |
| `radius-sm` | 4px | Cards, image frames, drawer panel, callouts |
| `radius-full` | 999px | Seal monogram, avatar chips only |

Buttons are never pill-shaped. Cards and buttons stay within 2–4px so the system never mixes pill and square families.

Elevation is flat-first; hairlines do the work. Shadows are tinted with `surface-inverse` hue, never pure black:

| Token | Value | Usage |
|---|---|---|
| `elevation-0` | none + `1px solid border` | Cards, default surfaces |
| `elevation-1` | `0 1px 0 border` + `0 8px 24px rgba(20,35,30,.06)` | Sticky header after scroll |
| `elevation-2` | `0 16px 48px rgba(20,35,30,.16)` | Mobile drawer overlay |

### 2.6 Motion principles

| Token | Value |
|---|---|
| `duration-fast` | 150ms |
| `duration-base` | 200ms |
| `duration-slow` | 300ms |
| `easing-standard` | `cubic-bezier(0.2, 0, 0, 1)` |

- Motion exists only to confirm interaction (hover, focus, drawer open/close, header state). Never to decorate or to delay reading.
- Animate **only** `opacity` and `transform` (translate ≤ 8px). Never `top/left/width/height`.
- No scroll-triggered reveals, parallax, marquees, count-up numbers, or autoplay carousels.
- **Reduced motion:** under `prefers-reduced-motion: reduce`, all durations collapse to ~0ms, translations are removed, and the drawer appears/disappears instantly. State changes remain perceivable via color/underline/icon.

### 2.7 Contrast and focus contract (overrides any hex)

- Body text ≥ 4.5:1 against its surface; large text (≥ 24px / 18.66px bold) ≥ 3:1; UI borders and focus rings ≥ 3:1 against adjacent colors.
- Reference values in §2.1 must be verified at implementation; if a firm's theme fails contrast, adjust the theme value, not the type scale.
- **Focus-visible:** 2px solid `focus` outline, 2px offset, on every interactive element, on all surfaces (on `surface-inverse`, switch the ring to `text-inverse`). Focus is never removed without replacement.
- State is never communicated by color alone (use underline, icon, weight, or border change too).

---

## 3. Responsive model

- **Mobile-first.** Base styles = mobile.
- Breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`.
- Primary contrast axis: **mobile (<768)** vs **desktop (≥1024)**. Tablet (768–1023) inherits mobile stacking unless a section explicitly states `md` columns; navigation stays collapsed until `lg`.
- Every multi-column composition in §5–§6 states its own collapse rule. "Make it responsive" is never the rule.
- Touch targets: minimum 44×44px on mobile (icon buttons, links in the drawer, CTA buttons).
- Images and embeds always reserve aspect-ratio space (no CLS). Use `aspect-ratio` + `object-fit: cover`.
- Long Italian words/titles must wrap; `hyphens: auto` for prose headings; card titles clamp at 2–3 lines per their spec, never overflow.

---

## 4. Interaction state catalog

States apply to every instance of the pattern. Disabled states are specified for completeness; this release has no disabled controls in the happy path.

**Text link** (nav, footer, inline, breadcrumb)
- default: `text` (or `text-inverse` on inverse), underline only for prose links
- hover: color → `primary`; prose links → underline + `accent`
- focus-visible: focus ring (§2.7)
- active: `opacity .75`
- current page: `aria-current="page"` + 2px bottom rule in `primary` (not color alone)

**Primary button**
- default: `primary` bg, `surface-raised` text, `radius-xs`, height 44px (mobile) / 40px (desktop), horizontal padding 24px
- hover: `primary-strong` bg
- active: `translateY(1px)` + `primary-strong`
- focus-visible: focus ring
- disabled: `opacity .5`, `cursor: not-allowed`, no shadow, no hover change

**Secondary button** (outline)
- default: transparent bg, 1px `border-strong`, `text`
- hover: border → `primary`, bg `primary-tint`
- active: `translateY(1px)`
- focus-visible: focus ring

**Clickable card** (service, team, post — whole card is one link)
- default: `surface-raised`, 1px `border`, `radius-sm`
- hover: border → `border-strong`; title underline or `primary` color; arrow affordance translates +4px on x (fast)
- focus-visible: focus ring around the card (or its title link)
- visited: no visual change (title color stable)
- Note: the card contains exactly one interactive target (the stretched link); tags/meta inside are not links on cards.

**Mobile menu toggle**
- closed: hamburger icon, `aria-expanded="false"`
- open: close (X) icon, `aria-expanded="true"`, `aria-controls` → drawer id
- hover/active: bg `primary-tint` on the 44px hit area

**Skip link**
- hidden (visually) until keyboard focus; on focus: visible block at top-left of viewport, `surface-raised` + border + focus ring

**Media states**
- loading/unresolved image: `primary-tint` block at the final aspect ratio
- missing image configured: monogram seal panel (§5.11) at the final aspect ratio
- decorative rule/seal: `aria-hidden="true"`

---

## 5. Reusable components

Everything here is generalized content-config driven. Page-specific compositions in §6 consume these; they do not fork them.

### 5.1 SiteHeader

- Sticky top, `surface-raised`, height 72px desktop / 64px mobile, 1px bottom `border`.
- Contents: brand lockup (logo image, or wordmark text from `SiteConfig.firmName` if no logo; max-height 32px) → primary nav → (desktop) contact button.
- **Desktop (≥1024):** nav on a single line: `Studio`, `Servizi`, `Professionisti`, `Insights`, then `Contatti` rendered as the **primary button** (this is the one contact-intent control in the header; no second "Contattaci" elsewhere in the header). Nav must fit one line; condense labels before wrapping.
- **Mobile (<1024):** brand left, menu toggle right (44×44). No inline nav links.
- Header scroll state: at rest, flat `elevation-0`; once the page scrolls past ~24px, `elevation-1` (transition `duration-fast`). No logo shrink animation.
- States per §4. Active item = `aria-current="page"` + 2px bottom rule.

### 5.2 MobileNavDrawer (open/close states)

- Trigger: menu toggle (§4). Panel: full width, `surface-raised`, `elevation-2`, positioned below the header, min-height `calc(100dvh - header)`, right-edge slide-in ≤ 200ms (opacity + 8px translate).
- Content order: nav links stacked (font `heading-3`, row height ≥ 48px, hairline dividers) → spacer → contact block (phone as `tel:`, email as `mailto:`, primary "Contatti" button full width).
- **Open state:** `aria-expanded="true"` on toggle; body scroll locked; focus moves to the first nav link; `Escape` closes; backdrop (if any) click closes; choosing any link closes.
- **Closed state:** panel removed from tab order (`inert` or unmounted); focus returns to the toggle.
- Focus is trapped within the drawer while open.
- Reduced motion: no slide, instant appearance.

### 5.3 SiteFooter

- `surface-inverse`, `text-inverse`, top padding `section-y` / bottom 32px.
- **Desktop (≥768):** 4-column grid:
  1. Brand: logo/wordmark + 1–2 sentence description (`SiteConfig.description`) + seal monogram optional
  2. Contatti: address (multi-line), phone (`tel:`), email (`mailto:), PEC (`mailto:`), orari
  3. Esplora: links to Studio, Servizi, Professionisti, Insights
  4. Legale: Privacy, Cookie, P.IVA (and C.F. if present), optional social icon buttons (44×44)
- **Mobile:** stacked groups in the same order (brand → contatti → esplora → legale), hairline dividers between groups, 32px gaps.
- Bottom line: `© {year} {legalName}` + P.IVA, `caption` size, `text-inverse-muted`.
- Link states per §4 (inverse variant). External social links open in a new tab with an accessible name.

### 5.4 Breadcrumbs

- `nav` with `aria-label="Percorso"`; `caption` size; separators `›` (`aria-hidden`); last item `aria-current="page"` not linked.
- Trail patterns: `Home › Servizi › {Service}`, `Home › Professionisti › {Name}`, `Home › Insights › {Post}` (post title may be omitted past 3 levels — implementer keeps max 4 items, wrapping allowed, no JS truncation).
- **Desktop/mobile:** identical; wrapping allowed; hidden on the homepage (no breadcrumb there).

### 5.5 Hero variants

**A. HomeHero (homepage only)** — see §6.1.
**B. PageHero (all interior pages)** — eyebrow (`label`, optional) + `title` H1 + deck (`body`, ≤ 20 words, measure 45ch) + optional supporting meta line. Left-aligned with the margin rule. Vertical padding: `section-y` desktop / 48px mobile. No image.
Both variants: H1 max 2–3 lines; hero content always fits the first viewport on desktop.

### 5.6 SectionHeader + PrincipleList

- SectionHeader: `heading-2` + optional deck (`body`, ≤ 25 words). No split "big title left / paragraph right" header — stack title over deck (measure 60ch).
- PrincipleList ("Il metodo", "Valori"): 3–4 items, each = small tabular number (`01`) + `heading-3` + 2–3 line `body-small`.
  - Desktop: N columns separated by vertical hairlines (3 items → 3 cols).
  - Mobile: stacked rows separated by horizontal hairlines; number inline above the title.
  - No icons, no cards. Entire block sits on `surface` or `primary-tint`.

### 5.7 ServiceCard

- Anatomy: optional small line icon (24px, one icon family for the whole site) / category `caption` / `heading-3` title / summary `body-small` (≤ 12 words) / arrow affordance (→) bottom-right.
- Whole card is one link to `/servizi/[slug]`. States per §4.
- Desktop: 2-col grid (`card-gap`), or 3-col at `xl` if > 6 cards in one grid. Mobile: 1-col.
- Missing icon: omit, do not substitute emoji. Missing summary: omit the line (title + arrow only).

### 5.8 TeamCard

- Anatomy: photo **4:5** (`radius-sm`) / name `heading-3` / role `caption` / specializations `body-small` (single line, clamp 2 lines) / arrow.
- Whole card links to `/professionisti/[slug]`.
- **Desktop:** 3-col grid. **Mobile:** horizontal row — photo 88×110px left, text right (name, role, specializations), hairline divider between rows.
- Missing photo: monogram seal panel at the same aspect ratio (§5.11).

### 5.9 PostCard

- Anatomy: cover image **16:9** (`radius-sm`, optional) / date `caption` (tabular) + tag labels `caption` / title `heading-3` (clamp 3 lines) / excerpt `body-small` (clamp 2 lines) / author line `caption`.
- Whole card links to `/insights/[slug]`.
- **Desktop:** 3-col grid (index) or 2-col (related sections). **Mobile:** 1-col; image stays 16:9 above the text.
- Missing cover: omit the image block entirely (text-only card), never a gray box.
- Long titles wrap to 3 lines then ellipsis; the full title is on the detail page and in `aria-label`.

### 5.10 ContactInfoBlock

- Grid of channels, each: label `caption` (e.g. `Telefono`) above value `heading-3`/`body`.
- Channels: Telefono (`tel:`), Email (`mailto:`), PEC (`mailto:`), Indirizzo (plain multi-line text), Orari (plain text).
- Desktop: 2-col grid, hairline separators. Mobile: stacked rows, each row min-height 64px, whole row is a link when actionable (`tel:`/`mailto:`), hairline separators.
- Values come only from `SiteConfig.contact`. A channel that is not configured is omitted entirely (no "N/D" placeholders).

### 5.11 Seal monogram (brand fallback)

- Circle (`radius-full`) with the firm initials in `display` serif on `primary-tint` / `primary` text, or `surface-inverse` treatment on dark bands.
- Used when: logo image is not configured (header/footer), team photo missing, hero image missing.
- `aria-hidden` when decorative; when it stands in for a person's photo, the person's name is the accessible name of the link.

### 5.12 Prose / article layout

- Measure 68ch, left-aligned in the content column (cols 2–8 of 12 on desktop; full width minus `page-gutter` on mobile).
- Type: `body` for p; `heading-2`/`heading-3` for h2/h3; lists with 8px item gaps; blockquote with 2px `accent` left rule + `text-muted`; `figure`/`figcaption` (caption role); horizontal rule = hairline `border`.
- h2 gets 48px top margin (32px mobile); paragraphs 16px apart.
- Inline links always underlined. Headings get anchor ids (for breadcrumbs/linking), no visible anchor buttons required.

### 5.13 CTA band

- Full-width `surface-inverse` band, `section-y` desktop / 56px mobile padding.
- Content: `heading-2` (one line) + optional `body-small` line (≤ 15 words) + primary button (`surface-raised` bg / `primary` text on inverse — inverse button variant) + optional phone `tel:` link as secondary.
- Desktop: text left (cols 1–7), button right (cols 9–12), vertically centered. Mobile: stacked, button full width.
- **One CTA band per page maximum**, placed after the last content section. Not used on `/contatti` (the page is the CTA) or on legal stubs.
- Button label is always `Contatti` (one label per intent site-wide).

### 5.14 Header/section margin rule

- The 1px `border` vertical rule at the left edge of the grid in hero/page-title zones (desktop); on mobile it renders as a 32px horizontal rule above the H1. Decorative (`aria-hidden`).

---

## 6. Page specifications

Each page states: objective (one sentence), ordered layout hierarchy, dominant element, and desktop vs mobile behavior for every important section.

### 6.1 Homepage `/`

**Objective:** within seconds, communicate what the studio does, why it is trustworthy, and how to reach it.

**Dominant element:** HomeHero H1 + right-hand imagery panel.

**Hierarchy (top → bottom)**

1. **HomeHero**
2. **Servizi in evidenza** (service cards)
3. **Lo Studio** (image + text)
4. **Il metodo** (PrincipleList)
5. **Aggiornamenti** (post cards)
6. **CTA band**

**1. HomeHero**
- Desktop (≥1024): 12-col split — text cols 1–6 (eyebrow optional `label`; `display` H1 ≤ 2 lines, ≤ 8 words; deck `body` ≤ 20 words; CTA row: primary `Servizi` + secondary `Contatti`), imagery cols 8–12 (photo 4:5, `radius-sm`, architectural/interior detail). Margin rule at the text column edge. Hero occupies the first viewport minus the header (no `h-screen`; use `min-h` with content-driven height), top padding capped at 96px.
- Mobile (<768): order = eyebrow, H1 (36px), deck, CTA row (buttons side-by-side if both fit, else stacked full-width), image last (full width, 4:3 crop). Total hero must not push the CTAs below the fold by more than one small scroll; keep copy shorter rather than shrinking type.
- Imagery missing: right panel becomes a seal-monogram composition (`primary-tint` panel, large monogram + short italic line from `SiteConfig.tagline`). Never an empty white box.
- CTAs: exactly two — `Servizi` (primary, → `/servizi`) and `Contatti` (secondary, → `/contatti`). No third CTA, no micro-trust strip inside the hero.

**2. Servizi in evidenza**
- SectionHeader: `heading-2` (`Di cosa ci occupiamo`) + 1-line deck.
- Desktop: 2×2 grid of ServiceCards (top 4 by `order`). Below: text link `Vedi tutti i servizi` → `/servizi`.
- Mobile: 1-col stack (same 4 cards), link below the last card.
- Card states per §4. If fewer than 4 services exist, render 1-col/2-col grid without empty cells (bento cell-count rule: never pad with blanks).

**3. Lo Studio**
- Layout family: image + text split (this is the **second and last** image/text split on the page — hero is the first; a third consecutive split is a defect).
- Desktop: image cols 1–5 (4:3 photo), text cols 7–12 (`heading-2`, 2 short paragraphs ≤ 40 words total, text link `Lo studio` → `/studio`, optional marginal note with founding year `caption`).
- Mobile: image first (full width, 4:3), then text; link is a plain underlined text link (not a button).

**4. Il metodo**
- Full-width band on `primary-tint` using PrincipleList (3 items). No cards, no icons.
- Desktop: 3 columns with vertical hairlines. Mobile: 3 stacked rows with horizontal hairlines.

**5. Aggiornamenti**
- SectionHeader (`Aggiornamenti`) + 3 PostCards (most recent).
- Desktop: 3-col grid. Mobile: 1-col stack. Text link `Tutti gli articoli` → `/insights` under the grid.
- If no posts exist: render SectionHeader + one muted line `Nessun articolo pubblicato.` and no grid (empty state).

**6. CTA band** — §5.13.

### 6.2 Studio `/studio`

**Objective:** convey the studio's history, role as public official, and working method so the visitor trusts the people behind the deed.

**Dominant element:** `title` H1 in PageHero (the page is prose-led).

**Hierarchy**

1. **PageHero** — eyebrow `Lo Studio`, H1 (e.g. `Uno studio al servizio di chi compie scelte importanti`), deck ≤ 20 words.
2. **Storia** — prose block.
3. **Il nostro impegno** — PrincipleList (3 items).
4. **La sede** — full-width image with caption.
5. **CTA band**.

**Section behavior**

- **Storia:** Prose component (measure 68ch), 2–3 paragraphs + optional year markers. Desktop: text in cols 2–8; years render in the left margin rail (`caption`, tabular) when the content layer provides a timeline; if no timeline, years are inline bold lead-ins. Mobile: single column, years inline. No image here (avoids a third split).
- **Il nostro impegno:** PrincipleList on `surface` (not tinted, to alternate with the homepage pattern).
- **La sede:** photo 21:9 desktop / 4:3 mobile (`radius-sm`), `figcaption` in `caption` (e.g. `La sede dello studio`). Decorative if the caption is absent → `alt=""`.
- Mobile: same order, all blocks full width.

### 6.3 Servizi index `/servizi`

**Objective:** let visitors identify the service they need and open its detail page.

**Dominant element:** the service-card grid.

**Hierarchy**

1. **PageHero** — eyebrow `Servizi`, H1, deck.
2. **Category sections** (one per category in the content layer, ordered by config): SectionHeader (`heading-3`-level category title) + ServiceCard grid.
3. **CTA band**.

**Behavior**
- No filter UI, no tabs (a static site must not fake interactivity). Categories are plain stacked sections in a fixed order from config.
- Desktop: each category grid 2-col (`xl`: 3-col if ≥ 7 services in one category). Mobile: 1-col.
- Category with 1 service: single card full width (mobile) / 6 cols (desktop).
- Empty services list: PageHero + muted line `Nessun servizio disponibile.` (empty state).

### 6.4 Servizio dettaglio `/servizi/[slug]`

**Objective:** explain one service — what it is, when it is needed, how the studio handles it — and route the visitor to contact.

**Dominant element:** the service `title` H1 with its lede.

**Hierarchy**

1. **Breadcrumbs** — `Home › Servizi › {Title}`.
2. **Article header** — category `caption`, H1 (`title`), lede (`body`, ≤ 30 words, measure 45ch).
3. **Body prose** — markdown sections (che cos'è / quando serve / documenti / come si svolge).
4. **In sintesi** — highlight list ("Cosa include").
5. **Altri servizi** — 2 related ServiceCards.
6. **CTA band**.

**Behavior**
- Desktop: body prose cols 2–8; optional right rail (cols 9–12) may hold the "In sintesi" box sticky at `top: 96px` — if the box is short (< 6 rows) it sits inline after the prose instead. Decision rule: sticky rail only when the box has ≥ 6 rows.
- Mobile: linear order above; "In sintesi" is a bordered `surface-raised` box (`radius-sm`, hairline) between prose and related cards.
- **In sintesi:** semantic `ul`, one hairline row per item, tabular bullets (— or numbers). Not checkboxes (nothing is selectable).
- **Altri servizi:** same category first, fill to 2 cards, then others by `order`. If only 1 other service exists, show 1 card. Omit the section if none.
- Long H1: wraps to max 3 lines at `title` size; no forced shortening.

### 6.5 Professionisti index `/professionisti`

**Objective:** introduce the team as qualified, reachable professionals.

**Dominant element:** the team grid.

**Hierarchy**

1. **PageHero** — eyebrow `Professionisti`, H1, deck.
2. **Team grid** — TeamCards (all members by `order`).
3. **CTA band**.

**Behavior**
- Desktop: 3-col grid (2-col at `md` if < 3 members). Mobile: horizontal rows (photo 88×110 + text), hairline dividers.
- 4 members → 3 + 1; the last row leaves an empty cell visually — acceptable (natural list end), but never add filler cards.
- Empty state: PageHero + `Nessun professionista pubblicato.`

### 6.6 Profilo professionista `/professionisti/[slug]`

**Objective:** present one professional's role, expertise, and the path to reach the studio.

**Dominant element:** the portrait + name lockup.

**Hierarchy**

1. **Breadcrumbs** — `Home › Professionisti › {Name}`.
2. **Profile hero** — photo 4:5 + name `title` + role `caption` + specializations line + bio lede (≤ 30 words).
3. **Bio prose**.
4. **Articoli di {name}** — PostCards (authored posts), omit if none.
5. **CTA band**.

**Behavior**
- Desktop: photo cols 1–4 (max-width 320px), text cols 6–12. Mobile: photo first (full width capped at 320px height, centered crop, `radius-sm`), then name/role/lede.
- Specializations render as `caption` text separated by `·` (no color chips).
- "Articoli di {name}": 2-col grid desktop / 1-col mobile; section **omitted entirely** when there are no posts (no empty-state line here — the absence is natural).
- No `tel:`/`email` on the public profile unless the content layer provides a professional email (optional field); the CTA band is the contact path.

### 6.7 Contatti `/contatti`

**Objective:** give visitors every channel to reach the studio and show where it is (display-only; no form).

**Dominant element:** ContactInfoBlock.

**Hierarchy**

1. **PageHero** — eyebrow `Contatti`, H1, deck (e.g. `Siamo a disposizione per un primo contatto`).
2. **ContactInfoBlock** — all configured channels.
3. **Dove siamo** — map placeholder + address.
4. **Legal line** — P.IVA / C.F. (`caption`).

**No CTA band on this page.** No contact form (explicitly out of scope — do not render a disabled or fake form).

**Behavior**
- ContactInfoBlock per §5.10. Desktop 2-col; mobile stacked rows.
- **Map placeholder:** `primary-tint` panel `radius-sm` — desktop 16:9 (max-height 420px), mobile 4:3. Contents: pin glyph, address `body-small`, link `Apri in mappa` (external, to configured map URL) — this is a placeholder for a future embed; the firm config carries optional `geo` and `mapUrl`.
  - If `mapUrl` is absent: panel shows the address only and no external link.
  - If a firm later embeds a map provider, the embed keeps the same aspect ratios and `radius-sm`.
- Legal line: `caption`, `text-muted`, below the map; never styled as a banner.

### 6.8 Insights index `/insights`

**Objective:** let visitors scan recent articles and open one.

**Dominant element:** the featured post (first card).

**Hierarchy**

1. **PageHero** — eyebrow `Insights`, H1, deck.
2. **Post list** — featured PostCard + remaining cards.
3. *(no CTA band)*

**Behavior**
- Desktop: featured post spans 2 of 3 columns (cover 16:9 + larger title `heading-2`); remaining posts 3-col grid below (or 2-col when < 4 total). Mobile: strict 1-col stack, featured first (its cover full width).
- Tags are static `caption` labels (no filter behavior). Sorting: `date` descending from config.
- Empty state: PageHero + `Nessun articolo pubblicato.`
- Pagination: not in this release (boilerplate content volume is small); list all posts. Future extension note goes in the content README, not in the UI.

### 6.9 Articolo `/insights/[slug]`

**Objective:** deliver one article comfortably and lead the reader to the author or related articles.

**Dominant element:** the article H1 (serif `title`).

**Hierarchy**

1. **Breadcrumbs** — `Home › Insights › {Post title}`.
2. **Article header** — tags `caption`, H1 (`title`, long titles wrap to 3 lines), meta row: author link (→ profile) · date (`caption`, tabular) · reading time (optional).
3. **Cover image** 16:9 (omit if not configured) + optional caption.
4. **Body prose** (§5.12).
5. **Author strip** — small photo (monogram fallback) + name + role + link to profile.
6. **Altri articoli** — 2 PostCards (same tag first); omit if none.

**Behavior**
- Desktop: prose cols 2–8 (68ch); optional right rail with a sticky "share" is **out of scope** — no share buttons. Cover image may span cols 1–10 for emphasis.
- Mobile: linear order; cover 16:9 full width; author strip becomes a compact horizontal row (photo 48×48 monogram-crop + text).
- H1 rule: at `title` size the heading wraps naturally with `hyphens: auto`; never shrink below 28px mobile / 36px desktop to force one line.
- Prose content states: markdown headings, lists, blockquote, figure, links; no interactive widgets inside articles in this release.

### 6.10 Legal stubs `/privacy`, `/cookie`

**Objective:** hold mandatory prose in the site chrome with zero visual competition.

**Dominant element:** none by design (prose-led pages).

**Hierarchy**

1. **Breadcrumbs** — `Home › Privacy` / `Home › Cookie`.
2. **Title block** — H1 (`title`, e.g. `Informativa privacy`) + `caption` meta `Ultimo aggiornamento: {date}`.
3. **Prose** — h2 sections only.

**Behavior**
- Identical for both routes; both use Prose (§5.12).
- Desktop: 68ch measure in cols 2–8. Mobile: full width minus gutter.
- No CTA band, no imagery, no related content. Footer follows directly.

---

## 7. Content and copy requirements

Representative Italian placeholder copy is enough to express hierarchy; final marketing copy is written later against these constraints:

| Slot | Constraint |
|---|---|
| Home H1 | ≤ 8 words, ≤ 2 lines desktop |
| Page H1 | ≤ 10 words, ≤ 3 lines mobile |
| Hero deck | ≤ 20 words, ≤ 4 lines |
| Section deck | ≤ 25 words |
| Card summary | ≤ 12 words |
| Post excerpt | ≤ 25 words |
| CTA heading | 1 line (≤ 8 words) |
| Button labels | 1–2 words; contact intent = `Contatti` everywhere |

UI strings (navigation, footer, buttons, empty states) are part of the content layer with Italian defaults: `Studio`, `Servizi`, `Professionisti`, `Insights`, `Contatti`, `Vedi tutti i servizi`, `Tutti gli articoli`, `Altri servizi`, `Altri articoli`, `Apri in mappa`, `Ultimo aggiornamento`, `Nessun articolo pubblicato.`, `Nessun servizio disponibile.`

Label discipline: button CTAs use exactly one label per intent site-wide — contact intent = `Contatti`, services intent = `Servizi`. Section-level "view all" text links (`Vedi tutti i servizi`, `Tutti gli articoli`) are navigation affordances inside a section, not CTAs, and never appear as buttons.

---

## 8. Assets and imagery

**Direction:** architecture and interior details, documents and desks in natural light, facades, doors, stairwells, material close-ups (wood, stone, paper). Slightly desaturated, consistent warm-neutral grade. People appear only as team portraits.

**Avoid:** handshakes, gavels, scales of justice, columns-and-sky clichés, smiling stock families, saturated HDR, gradient overlays.

| Slot | Aspect | Notes |
|---|---|---|
| Home hero | 4:5 | Portrait crop; fallback = seal monogram panel |
| Studio split image | 4:3 | Interior/detail |
| La sede | 21:9 desktop / 4:3 mobile | Facade or interior |
| Team portrait | 4:5 | Neutral background, consistent framing across members |
| Post cover | 16:9 | Optional per post |
| OG image | 1200×630 | From `SiteConfig.branding` |

All images come from the content layer with required `alt` text (decorative → `alt=""`). Missing images always fall back to the monogram/`primary-tint` panel at the correct aspect ratio — never to a broken image or an unrelated stock photo.

---

## 9. Reusable components vs page-specific compositions

**Generalize (shared components):** SiteHeader, MobileNavDrawer, SiteFooter, Breadcrumbs, PageHero, SectionHeader, PrincipleList, ServiceCard, TeamCard, PostCard, ContactInfoBlock, Prose, CTA band, Seal monogram, buttons (primary/secondary), skip link.

**Compose per page (do not over-generalize):** HomeHero split (its own composition using shared type/buttons), Studio "La sede" figure, Servizi category stacking, Profilo hero (photo + name lockup), Insights featured-post layout, map placeholder panel, legal title block.

---

## 10. Accessibility requirements (design constraints)

- Landmarks: `header > nav`, `main`, `footer`; skip link as first focusable element.
- Exactly one `h1` per page; heading levels never skip (h2 sections, h3 cards).
- `html lang="it"`.
- Focus-visible ring on all interactive elements (§2.7); never `outline: none` without replacement.
- Keyboard: drawer focus trap + `Escape` + focus return; all cards/links keyboard reachable; no click-only affordances.
- Contrast contract §2.7 binds all themes, including firm re-themes.
- Non-color state: current page = underline + `aria-current`; hover/active always change more than hue.
- Reduced motion path §2.6 is mandatory.
- Touch targets ≥ 44px on mobile; drawer rows ≥ 48px.
- Images: meaningful `alt` from content; decorative rules/seals `aria-hidden`.
- Breadcrumbs: `nav aria-label="Percorso"`; external links have accessible names indicating new tab.
- Reading order on mobile equals visual order for every section (no CSS reordering that breaks tab/reading order).

---

## 11. Theming and swappability checklist

A firm swap must change **only** the content/config layer:

- Colors: remap the roles in §2.1 (values only).
- Typography: remap display/body family references (roles in §2.2 stay).
- Logo/wordmark, seal initials, favicon, OG image.
- All strings: firm name, tagline, descriptions, nav labels if needed (defaults in §7).
- Content: services, team, posts, contact, hours, legal texts, P.IVA.
- Imagery: all photo slots in §8.

Locked by design (never per-firm): layout hierarchy, grid, spacing scale, radius scale, motion tokens, component anatomy, state behavior, responsive rules, accessibility constraints.

---

## 12. Open questions for the PM

These do not block implementation — each has a documented default below; flag a change only if the PM disagrees.

1. **IA labels:** the PM planning comment referenced in the task was not yet posted when this spec was written; page set and slugs follow the sub-issue scope (`/studio`, `/servizi`, `/professionisti`, `/insights`, `/contatti`). Default: keep these slugs; the Insights *label* may be renamed per firm (e.g. `News`) via the content layer without design changes.
2. **Dark mode:** required at launch or light-only? Default: light canonical; tokens are theme-ready; dark is a per-firm extension that must honor the same contrast contract (§2.7).
3. **Logo asset:** design supports logo image or wordmark-text fallback. Default: firms may ship either; the monogram fallback covers neither.
4. **Service categories:** fixed taxonomy vs free per firm. Default: free strings in config with a stable display order; no design impact.
5. **Map:** static placeholder at launch vs provider embed. Default: placeholder panel (§6.7) with `mapUrl` external link; an embed keeps the same aspect ratio and radius.
6. **Legal stubs:** who supplies privacy/cookie text? Default: content layer holds placeholder sections; layout (§6.10) does not depend on length.
7. **Insights taxonomy:** tags only vs categories. Default: tags only (labels on cards, no filter UI).
