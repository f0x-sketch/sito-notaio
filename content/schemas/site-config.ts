import type {
  ColorRamp,
  GeoCoordinates,
  ImageRef,
  NeutralRamp,
  OfficeHours,
  PostalAddress,
  TypographyConfig,
} from './shared';

/** Firm identity shown across the site. */
export type FirmIdentity = {
  /** Public display name of the firm. */
  name: string;
  /** Full registered legal name. */
  legalName: string;
  tagline: string;
  /** Short description used in teasers, footer, and metadata. */
  description: string;
  /** Initials used by the seal monogram fallback. */
  initials?: string;
  foundingYear?: number;
};

export type BrandColors = {
  /** Headings, buttons, links, brand mark. */
  primary: ColorRamp & {
    /** Hover/active shade (design role `primary-strong`). */
    strong: string;
    /** Subtle section tint (design role `primary-tint`). */
    tint: string;
  };
  /** Optional second brand hue. */
  secondary: ColorRamp;
  /** Seal accent (design role `accent`); area kept small. */
  accent: ColorRamp;
  neutral: NeutralRamp;
  /** Focus-visible ring (design role `focus`). Defaults to `accent`. */
  focus?: string;
  /** Reserved semantic roles. */
  semantic?: {
    success: string;
    warning: string;
    error: string;
  };
};

/** Branding assets and theme values. Swapping these re-skins the whole site. */
export type Branding = {
  logo: {
    /** Logo variant for light backgrounds. */
    light: ImageRef;
    /** Logo variant for dark backgrounds. */
    dark: ImageRef;
  };
  favicon: ImageRef;
  ogImage: ImageRef;
  colors: BrandColors;
  typography: TypographyConfig;
};

export type ContactInfo = {
  /** Public phone number, international format. */
  phone: string;
  email: string;
  /** Certified electronic mail (PEC). */
  pec: string;
  address: PostalAddress;
  geo?: GeoCoordinates;
  /** External map link ("Apri in mappa"). */
  mapUrl?: string;
  officeHours: OfficeHours[];
};

export type SocialPlatform =
  | 'linkedin'
  | 'facebook'
  | 'instagram'
  | 'youtube'
  | 'x';

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

/** Site-wide SEO defaults applied whenever a page has no overrides. */
export type SeoDefaults = {
  /** Site title template, e.g. `%s | Studio …`. */
  titleTemplate: string;
  /** Title used when a page does not define one. */
  defaultTitle: string;
  defaultDescription: string;
  ogImage?: ImageRef;
  /** Absolute URL of the deployed site, used for canonical and OG links. */
  siteUrl?: string;
  /** Twitter/X handle, including the leading `@`. */
  twitterHandle?: string;
};

export type LegalInfo = {
  /** Partita IVA. */
  vatNumber: string;
  /** Codice Fiscale, when different from the VAT number. */
  fiscalCode?: string;
  /** Route path of the privacy policy page. */
  privacyPolicyHref: string;
  /** Route path of the cookie policy page. */
  cookiePolicyHref: string;
};

/** The single typed object holding everything a firm replaces. */
export type SiteConfig = {
  identity: FirmIdentity;
  branding: Branding;
  contact: ContactInfo;
  social: SocialLink[];
  seo: SeoDefaults;
  legal: LegalInfo;
};
