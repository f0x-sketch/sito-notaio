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

const linkClassName =
  'rounded-xs text-text-muted underline-offset-4 hover:text-primary hover:underline';

/** Hairline-ruled column cell: horizontal rules stacked, vertical rules on desktop. */
const columnClassName =
  'flex flex-col gap-4 border-t border-border pt-8 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0 lg:border-l lg:border-border lg:pl-8 lg:first:border-l-0 lg:first:pl-0';

/**
 * Site footer (DESIGN.md §5.3): brand, contact channels, configured link
 * columns, legal data and social links on a hairline-ruled light surface.
 */
export function SiteFooter({ config, navigation, ui }: SiteFooterProps) {
  const { identity, branding, contact, legal, social } = config;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface pb-8 pt-[var(--section-y)] text-text">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className={columnClassName}>
            <BrandLogo name={identity.name} logo={branding.logo.light} href="/" />
            <p className="type-body-small text-text-muted">{identity.description}</p>
          </div>

          <div className={columnClassName}>
            <h2 className="type-label text-text">{ui.footerContactHeading}</h2>
            <address className="type-body-small flex flex-col gap-3 break-words not-italic text-text-muted">
              <span className="flex flex-col">
                {addressLines(contact.address).map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className={`tabular-nums ${linkClassName} w-fit`}
              >
                <span className="type-caption text-text-muted">{ui.contactLabels.phone}: </span>
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className={`${linkClassName} w-fit`}>
                <span className="type-caption text-text-muted">{ui.contactLabels.email}: </span>
                {contact.email}
              </a>
              <a href={`mailto:${contact.pec}`} className={`${linkClassName} w-fit`}>
                <span className="type-caption text-text-muted">{ui.contactLabels.pec}: </span>
                {contact.pec}
              </a>
              <span className="flex flex-col">
                <span className="type-caption text-text-muted">{ui.contactLabels.officeHours}</span>
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
              className={columnClassName}
            >
              <h2 className="type-label text-text">{column.title}</h2>
              <ul className="flex flex-col gap-2">
                {column.items.map((item) => (
                  <li key={item.href}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${linkClassName} type-body-small inline-block py-1`}
                      >
                        {item.label}
                        <span className="sr-only"> (si apre in una nuova scheda)</span>
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={`${linkClassName} type-body-small inline-block py-1`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className={columnClassName}>
            <h2 className="type-label text-text">{ui.footerLegalHeading}</h2>
            <ul className="flex flex-col gap-2">
              {navigation.footer.legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${linkClassName} type-body-small inline-block py-1`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="type-caption tabular-nums text-text-muted">
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
                      className={`${linkClassName} type-body-small inline-flex min-h-11 items-center py-1`}
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

        <p className="type-caption mt-12 border-t border-border pt-8 text-text-muted">
          © {year} {identity.legalName} · {ui.vatLabel} {legal.vatNumber}
        </p>
      </div>
    </footer>
  );
}
