import type {
  Cta,
  IconName,
  ImageRef,
  ISODate,
  Markdown,
  PageHero,
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
  };
  studioTeaser: {
    title: string;
    body: Markdown;
    cta: Cta;
  };
  teamTeaser: {
    title: string;
    intro: string;
    cta: Cta;
  };
  insightsTeaser: {
    title: string;
    intro: string;
    cta: Cta;
  };
  ctaBand: {
    title: string;
    body: string;
    cta: Cta;
  };
};

export type StudioValue = {
  title: string;
  description: string;
  icon?: IconName;
};

export type StudioTimelineEntry = {
  /** Year displayed on the timeline, as text. */
  year: string;
  title: string;
  description: string;
};

export type StudioPageContent = {
  seo?: Seo;
  hero: PageHero;
  /** Firm story, as Markdown. */
  story: Markdown;
  values: StudioValue[];
  /** Credentials and memberships, one per entry. */
  credentials: string[];
  timeline?: StudioTimelineEntry[];
};

/** Shared shape for listing/index pages (services, team, insights). */
export type IndexPageContent = {
  seo?: Seo;
  hero: PageHero;
};

export type ContactPageContent = {
  seo?: Seo;
  hero: PageHero;
  intro: Markdown;
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

/** Editorial copy for the boilerplate's fixed pages. */
export type SitePages = {
  home: HomePageContent;
  studio: StudioPageContent;
  servicesIndex: IndexPageContent;
  teamIndex: IndexPageContent;
  insightsIndex: IndexPageContent;
  contact: ContactPageContent;
  legal: LegalPageContent[];
};
