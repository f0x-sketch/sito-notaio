import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Playfair_Display, Source_Serif_4 } from 'next/font/google';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getNavigation, getSiteConfig, getUiStrings } from '@/lib/content';
import { flattenNavItems, buildBreadcrumbLabels } from '@/lib/nav';
import { buildMetadata, siteViewport } from '@/lib/seo';
import { themeVariables } from '@/lib/theme';
import './globals.css';

/* Self-hosted boilerplate defaults (DESIGN.md §2.2 / PM decision). Firms
 * override the rendered families through `SiteConfig.branding.typography`. */
const displayFont = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display-default',
  display: 'swap',
});
const bodyFont = Source_Serif_4({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body-default',
  display: 'swap',
});

export const metadata: Metadata = buildMetadata();
export const viewport: Viewport = siteViewport();

export default function RootLayout({ children }: { children: ReactNode }) {
  const config = getSiteConfig();
  const navigation = getNavigation();
  const ui = getUiStrings();

  return (
    <html
      lang="it"
      className={`${displayFont.variable} ${bodyFont.variable}`}
      style={themeVariables(config)}
    >
      <body>
        <a href="#contenuto" className="skip-link type-body-small">
          {ui.skipToContent}
        </a>
        <SiteHeader
          brand={{ name: config.identity.name, logo: config.branding.logo.light }}
          navItems={flattenNavItems(navigation.header.items)}
          cta={navigation.header.cta}
          contact={{ phone: config.contact.phone, email: config.contact.email }}
          navLabel={ui.mainNavLabel}
          openMenuLabel={ui.openMenuLabel}
          closeMenuLabel={ui.closeMenuLabel}
          mobileNavLabel={ui.mobileNavLabel}
        />
        <main id="contenuto">
          <Breadcrumbs
            labels={buildBreadcrumbLabels()}
            homeLabel={ui.homeLabel}
            navLabel={ui.breadcrumbsLabel}
          />
          {children}
        </main>
        <SiteFooter config={config} navigation={navigation} ui={ui} />
      </body>
    </html>
  );
}
