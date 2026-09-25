import type { ImageRef, Markdown, Seo } from './shared';

export type TeamMember = {
  slug: string;
  name: string;
  /** Professional title, e.g. `Notaio`. */
  title: string;
  /** Role inside the firm, e.g. `Fondatrice`. */
  role: string;
  bio: Markdown;
  /** Missing photos fall back to the seal monogram panel (DESIGN.md §5.8). */
  photo?: ImageRef;
  email?: string;
  specializations: string[];
  order: number;
  seo?: Seo;
};
