/**
 * Italian UI strings that belong to the content layer: labels, section titles,
 * and empty states rendered by fixed pages and shared components.
 */
export type UiStrings = {
  /** Root breadcrumb label. */
  homeLabel: string;
  /** Skip-to-content link in the root layout. */
  skipToContent: string;
  /** Accessible label for the primary desktop navigation. */
  mainNavLabel: string;
  /** Accessible label for the mobile navigation panel. */
  mobileNavLabel: string;
  /** Toggle label when the mobile menu is closed. */
  openMenuLabel: string;
  /** Toggle label when the mobile menu is open. */
  closeMenuLabel: string;
  /** Accessible label for the breadcrumb navigation. */
  breadcrumbsLabel: string;
  /** Footer column heading for the contact block. */
  footerContactHeading: string;
  /** Footer column heading for the legal links block. */
  footerLegalHeading: string;
  /** Reading-time unit suffix, e.g. ` min`. */
  readingTimeSuffix: string;
  /** Section heading above the team card grid on `/professionisti`. */
  teamSectionTitle: string;
  /** Section heading above the post card grid on `/insights`. */
  insightsSectionTitle: string;
  contactLabels: {
    phone: string;
    email: string;
    pec: string;
    address: string;
    officeHours: string;
  };
  /** Section title above the map placeholder on the contact page. */
  mapSectionTitle: string;
  /** External link label on the map placeholder. */
  openInMap: string;
  /** Highlight box title on service detail pages. */
  highlightsTitle: string;
  /** Related-section titles on detail pages. */
  relatedServicesTitle: string;
  relatedPostsTitle: string;
  /** Section title for an author's posts; `{name}` is replaced by the member name. */
  postsByAuthorTitle: string;
  /** Meta prefix on legal stubs. */
  lastUpdatedLabel: string;
  /** Copy for the 404 page. */
  notFound: {
    title: string;
    body: string;
  };
  vatLabel: string;
  fiscalCodeLabel: string;
  emptyStates: {
    services: string;
    team: string;
    posts: string;
  };
};
