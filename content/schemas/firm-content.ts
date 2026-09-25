import type { BlogPost } from './blog-post';
import type { Navigation } from './navigation';
import type { SitePages } from './page-content';
import type { Service, ServiceCategory } from './service';
import type { SiteConfig } from './site-config';
import type { TeamMember } from './team-member';
import type { UiStrings } from './ui-strings';

/** Complete, swappable content for one firm. */
export type FirmContent = {
  config: SiteConfig;
  navigation: Navigation;
  ui: UiStrings;
  serviceCategories: ServiceCategory[];
  services: Service[];
  team: TeamMember[];
  posts: BlogPost[];
  pages: SitePages;
};
