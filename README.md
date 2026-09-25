# sito-notaio

Reusable website boilerplate for Italian notary offices. The repository separates a
**firm content layer** (everything a real firm replaces) from the **presentation layer**
(the Next.js shell in `app/`, `components/`, `lib/`; page bodies are added in later
work). Nothing firm-specific is hard-coded outside the content layer.

## Where firm-specific data lives

| What | File |
| --- | --- |
| Firm identity, branding, colors, fonts, address, contacts, social, SEO, legal data | `content/demo-firm/site-config.ts` |
| Header and footer navigation | `content/demo-firm/navigation.ts` |
| Italian UI strings (labels, section titles, empty states) | `content/demo-firm/ui-strings.ts` |
| Service categories and services | `content/demo-firm/services.ts` |
| Team members | `content/demo-firm/team.ts` |
| Blog posts (Markdown bodies included) | `content/demo-firm/blog.ts` |
| Editorial copy for home, studio, contact, index heroes, CTA band, legal stubs | `content/demo-firm/pages.ts` |
| Logo, favicon, OG image, photo and cover placeholders | `public/images/demo-firm/` |
| Typed schemas (do not edit per firm) | `content/schemas/` |
| Active-firm pointer consumed by the app | `content/index.ts` |

The files under `content/demo-firm/` describe one **fictional** studio and exist only to
exercise every page. All its values are placeholders. Theme values map the named design
roles documented in `DESIGN.md` (§2.1); components consume roles, never raw values.

## How to swap in a new firm

1. Copy `content/demo-firm/` to `content/<your-firm>/`.
2. Replace every value with the firm's real data (see the field notes below).
3. Point the `site` export in `content/index.ts` at your new module.
4. Drop the firm's real assets into `public/images/<your-firm>/` and update the `src`
   paths in `site-config.ts` and the content files.

No component or page needs to change: the presentation layer renders exclusively from
`site` in `content/index.ts`.

## Required vs optional fields

Required fields are non-optional properties in the schemas; anything marked `?` can be
omitted and the UI must handle its absence.

- **SiteConfig** (`content/schemas/site-config.ts`): identity (name, legal name, tagline,
  description), branding (logo light/dark, favicon, OG image, color roles, typography),
  contact (phone, email, PEC, full address, office hours), social links, SEO defaults
  (title template, default title and description), and legal data (P.IVA, privacy/cookie
  routes) are required. Optional: `initials`, `foundingYear`, `fiscalCode`, `geo`,
  `mapUrl`, `seo.siteUrl`, `seo.twitterHandle`, `seo.ogImage`, `primary.strong/tint`,
  `accent.strong/tint`, `secondary`, `focus`, `semantic`, per-ramp `onBase`,
  `neutral.textInverse/textInverseMuted`, `mono` font, `baseSizePx`.
- **Service** (`content/schemas/service.ts`): `slug`, `title`, `summary`, `category`
  (must match a `ServiceCategory.slug`), `order`, `highlights`, `body` (Markdown) are
  required. Optional: `icon`, `seo`, and on a category its `description`.
- **TeamMember** (`content/schemas/team-member.ts`): `slug`, `name`, `title`, `role`,
  `bio`, `specializations`, `order` are required. Optional: `photo` (falls back to the
  seal monogram panel), `email`, `seo`.
- **BlogPost** (`content/schemas/blog-post.ts`): `slug`, `title`, `excerpt`, `date`
  (`YYYY-MM-DD`), `author` (a `TeamMember.slug`), `tags`, `body` (Markdown) are
  required. Optional: `coverImage`, `coverCaption`, `readingTimeMinutes`, `seo`.
- **Navigation** (`content/schemas/navigation.ts`): header items and footer columns and
  legal links are required. Optional: `header.cta`, `external`, `description` on links.
- **UiStrings** (`content/schemas/ui-strings.ts`): all fields required — they carry the
  Italian defaults of the boilerplate (labels, section titles, empty states, 404 copy)
  and can be re-worded per firm.
- **SitePages** (`content/schemas/page-content.ts`): every page block is required except
  `seo` overrides, `hero.eyebrow`/`hero.meta`, home hero `image`/`secondaryCta`,
  `studioTeaser.image`/`note`, `principles`/`method` `intro`, `studio.timeline`,
  `studio.sede` (and its `caption`), and `ctaBand.body`.

## Conventions

- `slug` values are URL segments: kebab-case, stable, unique within their collection.
- Long text fields (`body`, `bio`, `story`) are Markdown; short fields are plain text.
  The prose renderer (`components/prose.tsx`) supports ATX headings (`#`–`###`),
  paragraphs, ordered/unordered lists, blockquotes, thematic breaks, links,
  `**strong**`/`*emphasis*`, and `` `code` `` — one nesting level of lists and no raw
  HTML.
- Colors are hex strings inside the firm's config, expressed as the named roles from
  `DESIGN.md` §2.1.
- Fonts are configured as a `family` CSS stack in `site-config.ts`; the boilerplate ships self-hosted defaults via `next/font`.
- Icons use the shared `IconName` keys declared in `content/schemas/shared.ts`.
- Copy-length constraints (headings, decks, card summaries) live in `DESIGN.md` §7.
- The site is Italian-first. Localisation is a future extension and would wrap this
  content layer rather than change it.

## Presentation layer (Next.js shell)

The App Router scaffold renders everything from `site` in `content/index.ts`:

| Concern | File |
| --- | --- |
| Root layout: `lang="it"`, theme tokens, SEO metadata, shell chrome | `app/layout.tsx` |
| Global tokens: color/type/spacing roles, focus, reduced motion | `app/globals.css` |
| Header + mobile drawer + footer + breadcrumbs | `components/` |
| Typed content accessors (`getServices`, `getTeamMembers`, `getPosts`, …) | `lib/content.ts` |
| SEO helpers (`buildMetadata(pageSeo)`, `siteViewport`) | `lib/seo.ts` |
| `SiteConfig` → design-role CSS variables | `lib/theme.ts` |
| Nav flattening + breadcrumb label map | `lib/nav.ts` |

Pages consume content through the `lib/content.ts` accessors, build metadata with
`buildMetadata` (passing their block's `seo`), and style with the role utilities
(`bg-surface`, `text-primary`, `border-border`, …), type roles (`.type-title`,
`.type-body`, …), and `.button-primary` / `.button-secondary`. Firm values never
appear in components — only in `SiteConfig` and the content files.

## Verification

```bash
npm install
npm run typecheck
npm run lint
npm run build
```

To confirm nothing firm-specific has leaked outside the content layer, search the
repository for a firm value (name, phone, address) and check that matches only occur
under `content/` and `public/images/`.
