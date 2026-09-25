import { getSite, getSiteConfig, getUiStrings } from '@/lib/content';
import { addressLines } from '@/lib/format';
import { buildPageMetadata } from '@/lib/seo';
import { MapPinIcon } from '@/components/icons';
import { ContactInfoBlock } from '@/components/contact-info-block';
import { PageHero } from '@/components/page-hero';
import { SectionHeader } from '@/components/section-header';

const { contact: contactPage } = getSite().pages;

export const metadata = buildPageMetadata(contactPage.seo, {
  title: contactPage.hero.title,
  description: contactPage.hero.subtitle,
});

export default function ContactPage() {
  const config = getSiteConfig();
  const ui = getUiStrings();
  const { contact, legal } = config;

  return (
    <>
      <PageHero hero={contactPage.hero} />

      <section className="container-page section-y" aria-label={contactPage.hero.title}>
        <ContactInfoBlock contact={contact} labels={ui.contactLabels} />
      </section>

      <section className="container-page section-y" aria-label={ui.mapSectionTitle}>
        <SectionHeader title={ui.mapSectionTitle} />
        <figure
          aria-label={contactPage.mapPlaceholderAlt}
          className="mt-6 flex aspect-[4/3] w-full flex-col items-center justify-center gap-4 rounded-sm bg-primary-tint p-8 text-center lg:aspect-video lg:max-h-[420px]"
        >
          <MapPinIcon className="h-10 w-10 text-primary" />
          <address className="type-body-small not-italic">
            {addressLines(contact.address).map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          {contact.mapUrl ? (
            <a
              href={contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link type-body-small font-semibold"
            >
              {ui.openInMap}
              <span className="sr-only"> (si apre in una nuova scheda)</span>
            </a>
          ) : null}
        </figure>
        <p className="type-caption mt-4 tabular-nums text-text-muted">
          {ui.vatLabel} {legal.vatNumber}
          {legal.fiscalCode ? (
            <>
              {' · '}
              {ui.fiscalCodeLabel} {legal.fiscalCode}
            </>
          ) : null}
        </p>
      </section>
    </>
  );
}
