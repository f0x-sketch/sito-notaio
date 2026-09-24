# sito-notaio

Reusable website boilerplate for Italian notary offices. The repository separates a
**firm content layer** (everything a real firm replaces) from the **presentation layer**
(components and pages, added in later work). Nothing firm-specific is hard-coded outside
the content layer.

## Where firm-specific data lives

| What | File |
| --- | --- |
| Firm identity, branding, colors, fonts, address, contacts, social, SEO, legal data | `content/demo-firm/site-config.ts` |
| Header and footer navigation | `content/demo-firm/navigation.ts` |
| Service categories and services | `content/demo-firm/services.ts` |
| Team members | `content/demo-firm/team.ts` |
| Blog posts (Markdown bodies included) | `content/demo-firm/blog.ts` |
| Editorial copy for home, studio, contact, index heroes, legal stubs | `content/demo-firm/pages.ts` |
| Logo, favicon, OG image, portrait and cover placeholders | `public/images/demo-firm/` |
| Typed schemas (do not edit per firm) | `content/schemas/` |
| Active-firm pointer consumed by the app | `content/index.ts` |

The files under `content/demo-firm/` describe one **fictional** studio and exist only to
exercise every page. All its values are placeholders.

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

- **SiteConfig** (`content/schemas/site-config.ts`): identity, branding (logo light/dark,
  favicon, OG image, color ramps, typography), contact (phone, email, PEC, full address,
  office hours), social links, SEO defaults and legal data (P.IVA, privacy/cookie
  routes) are required. Optional: `foundingYear`, `fiscalCode`, `geo`,
  `seo.siteUrl`, `seo.twitterHandle`, `seo.ogImage`, per-ramp shades (`light`, `dark`,
  `onBase`), `neutral.surface/muted/border/text`, `mono` font, `baseSizePx`.
- **Service** (`content/schemas/service.ts`): `slug`, `title`, `summary`, `category`
  (must match a `ServiceCategory.slug`), `order`, `highlights`, `body` (Markdown) are
  required. Optional: `icon`, `seo`, and on a category its `description`.
- **TeamMember** (`content/schemas/team-member.ts`): `slug`, `name`, `title`, `role`,
  `bio`, `photo`, `specializations`, `order` are required. Optional: `email`, `seo`.
- **BlogPost** (`content/schemas/blog-post.ts`): `slug`, `title`, `excerpt`, `date`
  (`YYYY-MM-DD`), `author` (a `TeamMember.slug`), `tags`, `body` (Markdown) are
  required. Optional: `coverImage`, `readingTimeMinutes`, `seo`.
- **Navigation** (`content/schemas/navigation.ts`): header items and footer columns and
  legal links are required. Optional: `header.cta`, `external`, `description` on links.
- **SitePages** (`content/schemas/page-content.ts`): every page block is required except
  `seo` overrides, `studio.timeline`, and the hero `image`/`secondaryCta` on the home page.

## Conventions

- `slug` values are URL segments: kebab-case, stable, unique within their collection.
- Long text fields (`body`, `bio`, `story`) are Markdown; short fields are plain text.
- Colors are hex strings inside the firm's config; components consume named roles
  (`primary`, `secondary`, `accent`, `neutral`), never raw values.
- Fonts are configured as `family` + optional `source` URL in `site-config.ts`.
- Icons use the shared `IconName` keys declared in `content/schemas/shared.ts`.
- The site is Italian-first. Localisation is a future extension and would wrap this
  content layer rather than change it.

## Verification

```bash
npm install
npm run typecheck
```

To confirm nothing firm-specific has leaked outside the content layer, search the
repository for a firm value (name, phone, address) and check that matches only occur
under `content/` and `public/images/`.
