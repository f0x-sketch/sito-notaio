import Link from 'next/link';
import type { Navigation, SiteConfig, UiStrings } from '@/content';
import { BrandLogo } from '@/components/brand-logo';

type SiteFooterProps = {
  config: SiteConfig;
  navigation: Navigation;
  ui: UiStrings;
};

function addressLines(address: SiteConfig['contact']['address']): string[] {
  return [
    address.street,
    `${address.zip} ${address.city} (${address.province})`,
    address.country,
  ];
}

const inverseLinkClassName =
  'rounded-xs text-text-inverse-muted underline-offset-4 hover:text-text-inverse hover:underline';

/**
 * Site footer — classic institutional.
 * Ornamental top rule, formal grid with serif headings,
 * classical legal data and social links on the inverse surface.
 */
export function SiteFooter({ config, navigation, ui }: SiteFooterProps) {
  const { identity, branding, contact, legal, social } = config;
  const year = new Date().getFullYear();

  return (
    <footer className="surface-inverse bg-surface-inverse pb-8 pt-[var(--section-y)] text-text-inverse">
      <div className="container-page">
        <div className="ornament-divider mb-12" aria-hidden="true">
          <span className="ornament-divider-diamond" />
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-5">
            <BrandLogo
              name={identity.name}
              logo={branding.logo.dark}
              href="/"
              className="text-text-inverse"
            />
            <p className="type-body-small text-text-inverse-muted">{identity.description}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="type-label text-text-inverse">{ui.footerContactHeading}</h2>
            <address className="type-body-small flex flex-col gap-3 break-words not-italic text-text-inverse-muted">
              <span className="flex flex-col">
                {addressLines(contact.address).map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className={`tabular-nums ${inverseLinkClassName} w-fit`}
              >
                <span className="type-caption text-text-inverse-muted">{ui.contactLabels.phone}: </span>
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className={`${inverseLinkClassName} w-fit`}>
                <span className="type-caption text-text-inverse-muted">{ui.contactLabels.email}: </span>
                {contact.email}
              </a>
              <a href={`mailto:${contact.pec}`} className={`${inverseLinkClassName} w-fit`}>
                <span className="type-caption text-text-inverse-muted">{ui.contactLabels.pec}: </span>
                {contact.pec}
              </a>
              <span className="flex flex-col">
                <span className="type-caption text-text-inverse-muted">{ui.contactLabels.officeHours}</span>
                {contact.officeHours.map((slot) => (
                  <span key={`${slot.days}-${slot.hours}`} className="tabular-nums">
                    {slot.days}: {slot.hours}
                    {slot.note ? ` (${slot.note})` : ''}
                  </span>
                ))}
              </span>
            </address>
          </div>

          {navigation.footer.columns.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className="flex flex-col gap-4"
            >
              <h2 className="type-label text-text-inverse">{column.title}</h2>
              <ul className="flex flex-col gap-2">
                {column.items.map((item) => (
                  <li key={item.href}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${inverseLinkClassName} type-body-small inline-block py-1`}
                      >
                        {item.label}
                        <span className="sr-only"> (si apre in una nuova scheda)</span>
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={`${inverseLinkClassName} type-body-small inline-block py-1`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="flex flex-col gap-4">
            <h2 className="type-label text-text-inverse">{ui.footerLegalHeading}</h2>
            <ul className="flex flex-col gap-2">
              {navigation.footer.legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${inverseLinkClassName} type-body-small inline-block py-1`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="type-caption tabular-nums text-text-inverse-muted">
              {ui.vatLabel} {legal.vatNumber}
              {legal.fiscalCode ? (
                <>
                  <br />
                  {ui.fiscalCodeLabel} {legal.fiscalCode}
                </>
              ) : null}
            </p>
            {social.length > 0 ? (
              <ul className="flex flex-col gap-2">
                {social.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${inverseLinkClassName} type-body-small inline-flex min-h-11 items-center py-1`}
                    >
                      {link.label}
                      <span className="sr-only"> (si apre in una nuova scheda)</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="type-caption text-center tabular-nums text-text-inverse-muted">
            © {year} {identity.legalName} · {ui.vatLabel} {legal.vatNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
