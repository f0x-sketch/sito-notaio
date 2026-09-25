// Contenuti dimostrativi fittizi per un immaginario "Studio Notarile Esempio".
// Sostituire questo studio con un modulo equivalente per ogni nuovo studio.

import type { FirmContent } from '../schemas';
import { blogPosts } from './blog';
import { navigation } from './navigation';
import { pages } from './pages';
import { siteConfig } from './site-config';
import { serviceCategories, services } from './services';
import { team } from './team';
import { uiStrings } from './ui-strings';

/** Fictional demo firm used to exercise every page of the boilerplate. */
export const demoFirm: FirmContent = {
  config: siteConfig,
  navigation,
  ui: uiStrings,
  serviceCategories,
  services,
  team,
  posts: blogPosts,
  pages,
};
