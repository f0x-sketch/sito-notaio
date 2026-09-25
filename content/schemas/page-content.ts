import type {
  Cta,
  ImageRef,
  ISODate,
  Markdown,
  PageHero,
  PrincipleSection,
  Seo,
} from './shared';

export type HomePageContent = {
  seo?: Seo;
  hero: PageHero & {
    primaryCta: Cta;
    secondaryCta?: Cta;
    image?: ImageRef;
  };
  servicesTeaser: {
    title: string;
    intro: string;
    /** Text link below the cards. */
    cta: Cta;
  };
  studioTeaser: {
    title: string;
    body: Markdown;
    /** Text link to the studio page. */
    cta: Cta;
    /** Split image next to the text. */
    image?: ImageRef;
    /** Marginal note, e.g. the founding year. */
    note?: string;
  };
  /** Numbered principle list section. */
  method: PrincipleSection;
  teamTeaser: {
    title: string;
    intro: string;
    cta: Cta;
  };
  insightsTeaser: {
    title: string;
    intro: string;
    /** Text link below the cards. */
    cta: Cta;
  };
};

export type StudioPageContent = {
  seo?: Seo;
  hero: PageHero;
  /** Firm story, as Markdown. */
  story: Markdown;
  /** Optional year markers rendered alongside the story. */
  timeline?: StudioTimelineEntry[];
  /** Numbered principle list section. */
  principles: PrincipleSection;
  /** "La sede": full-width image with optional caption. */
  sede?: {
    image: ImageRef;
    caption?: string;
  };
};

export type StudioTimelineEntry = {
  /** Year displayed on the timeline, as text. */
  year: string;
  title: string;
  description: string;
};

/** Shared shape for listing/index pages (services, team, insights). */
export type IndexPageContent = {
  seo?: Seo;
  hero: PageHero;
};

export type ContactPageContent = {
  seo?: Seo;
  hero: PageHero;
  /** Alt text for the map placeholder shown next to the address. */
  mapPlaceholderAlt: string;
};

export type LegalPageContent = {
  /** Route slug of the page, e.g. `privacy`. */
  slug: string;
  title: string;
  lastUpdated: ISODate;
  /** Legal text, as Markdown. */
  body: Markdown;
};

export type CtaBandContent = {
  title: string;
  body?: string;
  cta: Cta;
};

/** Editorial copy for the boilerplate's fixed pages. */
export type SitePages = {
  /** Shared CTA band rendered at most once per page, never on contact or legal pages. */
  ctaBand: CtaBandContent;
  home: HomePageContent;
  studio: StudioPageContent;
  servicesIndex: IndexPageContent;
  teamIndex: IndexPageContent;
  insightsIndex: IndexPageContent;
  contact: ContactPageContent;
  legal: LegalPageContent[];
};
