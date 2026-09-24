export type NavLink = {
  kind: 'link';
  label: string;
  href: string;
  /** Marks links that leave the site. */
  external?: boolean;
  description?: string;
};

export type NavDropdown = {
  kind: 'dropdown';
  label: string;
  items: NavLink[];
};

export type NavItem = NavLink | NavDropdown;

export type FooterColumn = {
  title: string;
  items: NavLink[];
};

/** Header and footer navigation trees, rendered as configured. */
export type Navigation = {
  header: {
    items: NavItem[];
    /** Optional button-style action rendered in the header. */
    cta?: NavLink;
  };
  footer: {
    columns: FooterColumn[];
    /** Legal links rendered in the footer bottom bar. */
    legalLinks: NavLink[];
  };
};
