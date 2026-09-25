import { site } from '@/content';
import type {
  BlogPost,
  FirmContent,
  Navigation,
  Service,
  ServiceCategory,
  SiteConfig,
  TeamMember,
  UiStrings,
} from '@/content';

/** The active firm content module (swap in `content/index.ts` to rebrand). */
export function getSite(): FirmContent {
  return site;
}

export function getSiteConfig(): SiteConfig {
  return site.config;
}

export function getNavigation(): Navigation {
  return site.navigation;
}

export function getUiStrings(): UiStrings {
  return site.ui;
}

export function getServiceCategories(): ServiceCategory[] {
  return [...site.serviceCategories].sort((a, b) => a.order - b.order);
}

export function getServices(): Service[] {
  return [...site.services].sort((a, b) => a.order - b.order);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return site.services.find((service) => service.slug === slug);
}

export function getServicesByCategory(categorySlug: string): Service[] {
  return getServices().filter((service) => service.category === categorySlug);
}

export function getTeamMembers(): TeamMember[] {
  return [...site.team].sort((a, b) => a.order - b.order);
}

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return site.team.find((member) => member.slug === slug);
}

export function getPosts(): BlogPost[] {
  return [...site.posts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return site.posts.find((post) => post.slug === slug);
}

export function getPostsByAuthor(authorSlug: string): BlogPost[] {
  return getPosts().filter((post) => post.author === authorSlug);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getPosts().filter((post) => post.tags.includes(tag));
}
