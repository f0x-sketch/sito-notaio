import type { IconName, Markdown, Seo } from './shared';

export type ServiceCategory = {
  slug: string;
  title: string;
  description?: string;
  order: number;
};

export type Service = {
  slug: string;
  title: string;
  /** One-line summary used on cards and teasers. */
  summary: string;
  /** Slug of the `ServiceCategory` this service belongs to. */
  category: string;
  order: number;
  icon?: IconName;
  /** Short bullet points rendered as key benefits of the service. */
  highlights: string[];
  /** Long-form body of the service detail page, as Markdown. */
  body: Markdown;
  seo?: Seo;
};
