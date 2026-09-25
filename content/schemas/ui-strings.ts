/**
 * Italian UI strings that belong to the content layer: labels, section titles,
 * and empty states rendered by fixed pages and shared components.
 */
export type UiStrings = {
  /** Root breadcrumb label. */
  homeLabel: string;
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
