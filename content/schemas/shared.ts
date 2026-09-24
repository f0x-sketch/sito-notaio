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

/** A themed color role. Shades are hex colors defined by the firm's brand. */
export type ColorRamp = {
  /** Core shade of the role. */
  base: string;
  light?: string;
  dark?: string;
  /** Text/icon color readable when placed on `base`. */
  onBase?: string;
};

export type NeutralRamp = ColorRamp & {
  /** Page background. */
  surface?: string;
  /** Subtle background for cards and bands. */
  muted?: string;
  /** Hairline color for borders and dividers. */
  border?: string;
  /** Body text color. */
  text?: string;
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

/** Button-style call to action. */
export type Cta = {
  label: string;
  href: string;
};

/** Shared hero block used by index and secondary pages. */
export type PageHero = {
  title: string;
  subtitle: string;
};
