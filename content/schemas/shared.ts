/** Reference to an image asset served from the site's public directory. */
export type ImageRef = {
  /** Public URL path of the asset, e.g. `/images/demo-firm/logo-light.svg`. */
  src: string;
  /** Accessible alternative text. */
  alt?: string;
  width?: number;
  height?: number;
};

/** Long-form text authored as Markdown. */
export type Markdown = string;

/** Calendar date in `YYYY-MM-DD` form. */
export type ISODate = `${number}-${number}-${number}`;

/** Per-page SEO overrides. Anything omitted falls back to the site SEO defaults. */
export type Seo = {
  /** Page title, without the site title template applied. */
  title?: string;
  description?: string;
  ogImage?: ImageRef;
  /** Ask search engines not to index the page. */
  noIndex?: boolean;
};

/**
 * A themed color role (hex). Maps to the design roles `primary` / `accent`:
 * `base` → role value, `strong` → `*-strong` (hover/active), `tint` → `*-tint`
 * (subtle section wash).
 */
export type ColorRamp = {
  /** Core shade of the role. */
  base: string;
  /** Hover/active shade. */
  strong?: string;
  /** Subtle wash for tinted sections and placeholder blocks. */
  tint?: string;
  /** Text/icon color readable when placed on `base`. */
  onBase?: string;
};

/** Neutral theme roles (surfaces, text, borders). */
export type NeutralRamp = {
  /** Page background (design role `surface`). */
  surface: string;
  /** Cards, sticky header, drawer (role `surface-raised`). */
  surfaceRaised: string;
  /** Footer and CTA band (role `surface-inverse`). */
  surfaceInverse: string;
  /** Body text (role `text`). */
  text: string;
  /** Secondary copy, captions, meta (role `text-muted`). */
  textMuted: string;
  /** Hairlines, card borders, dividers (role `border`). */
  border: string;
  /** Hover borders, input borders (role `border-strong`). */
  borderStrong: string;
  /** Text on `surfaceInverse` (role `text-inverse`). */
  textInverse?: string;
  /** Secondary text on `surfaceInverse` (role `text-inverse-muted`). */
  textInverseMuted?: string;
};

/** A typeface chosen by the firm. Fonts are configured here, never hard-coded in CSS. */
export type FontDefinition = {
  /** CSS font-family stack. */
  family: string;
  /** Optional URL the font files are loaded from (e.g. a Google Fonts stylesheet URL). */
  source?: string;
  /** Font weights to load. */
  weights?: number[];
};

export type TypographyConfig = {
  heading: FontDefinition;
  body: FontDefinition;
  mono?: FontDefinition;
  /** Root font size for body text, in px. */
  baseSizePx?: number;
};

/** Named icon keys resolved by the presentation layer. */
export type IconName =
  | 'home'
  | 'key'
  | 'building'
  | 'briefcase'
  | 'file-text'
  | 'scale'
  | 'handshake'
  | 'shield'
  | 'users'
  | 'pen'
  | 'globe'
  | 'clock';

export type PostalAddress = {
  street: string;
  city: string;
  zip: string;
  /** Italian province code (sigla), e.g. `RM`. */
  province: string;
  country: string;
};

export type GeoCoordinates = {
  lat: number;
  lng: number;
};

export type OfficeHours = {
  /** Days the hours apply to, e.g. `lunedì – venerdì`. */
  days: string;
  /** Opening hours, e.g. `09:00 – 13:00`. */
  hours: string;
  note?: string;
};

/** Button-style or text-link call to action. */
export type Cta = {
  label: string;
  href: string;
};

/** Hero block used by interior pages (and as the base of the home hero). */
export type PageHero = {
  /** Small overline label above the title. */
  eyebrow?: string;
  title: string;
  subtitle: string;
  /** Optional supporting meta line under the deck. */
  meta?: string;
};

/** One principle in a numbered list ("Il metodo", "Il nostro impegno"). */
export type Principle = {
  title: string;
  description: string;
};

export type PrincipleSection = {
  title: string;
  intro?: string;
  /** Three to four items render best. */
  items: Principle[];
};
