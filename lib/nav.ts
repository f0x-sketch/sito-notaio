import type { NavLink, NavItem } from '@/content';
import { getNavigation, getPosts, getServices, getTeamMembers } from '@/lib/content';

/**
 * Flattens header nav items for the single-line header and the drawer.
 * Dropdown groups render as their child links (the design specifies a
 * single-line link nav with no dropdown states).
 */
export function flattenNavItems(items: NavItem[]): NavLink[] {
  return items.flatMap((item) => (item.kind === 'link' ? [item] : item.items));
}

/**
 * Route-tree label map for breadcrumbs (DESIGN.md §5.4): known routes get
 * their configured label/title, dynamic segments fall back to a humanized slug.
 */
export function buildBreadcrumbLabels(): Record<string, string> {
  const labels: Record<string, string> = {};
  const navigation = getNavigation();

  const configLinks = [
    ...flattenNavItems(navigation.header.items),
    ...(navigation.header.cta ? [navigation.header.cta] : []),
    ...navigation.footer.columns.flatMap((column) => column.items),
    ...navigation.footer.legalLinks,
  ];
  for (const link of configLinks) {
    labels[link.href] = link.label;
  }

  for (const service of getServices()) {
    labels[`/servizi/${service.slug}`] = service.title;
  }
  for (const member of getTeamMembers()) {
    labels[`/professionisti/${member.slug}`] = member.name;
  }
  for (const post of getPosts()) {
    labels[`/insights/${post.slug}`] = post.title;
  }

  return labels;
}
