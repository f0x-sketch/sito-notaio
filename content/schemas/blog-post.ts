import type { ImageRef, ISODate, Markdown, Seo } from './shared';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Publication date, `YYYY-MM-DD`. */
  date: ISODate;
  /** Slug of the `TeamMember` who authored the post. */
  author: string;
  coverImage?: ImageRef;
  tags: string[];
  /** Estimated reading time in minutes. */
  readingTimeMinutes?: number;
  seo?: Seo;
  /** Post body, as Markdown. */
  body: Markdown;
};
