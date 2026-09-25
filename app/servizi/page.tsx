import {
  getServiceCategories,
  getServices,
  getServicesByCategory,
  getSite,
  getSiteConfig,
  getUiStrings,
} from '@/lib/content';
import { buildPageMetadata } from '@/lib/seo';
import { CtaBand } from '@/components/cta-band';
import { PageHero } from '@/components/page-hero';
import { SectionHeader } from '@/components/section-header';
import { ServiceCard } from '@/components/service-card';

const { servicesIndex, ctaBand } = getSite().pages;

export const metadata = buildPageMetadata(servicesIndex.seo, {
  title: servicesIndex.hero.title,
  description: servicesIndex.hero.subtitle,
});

export default function ServicesIndexPage() {
  const config = getSiteConfig();
  const ui = getUiStrings();
  const categories = getServiceCategories();
  const hasServices = getServices().length > 0;

  return (
    <>
      <PageHero hero={servicesIndex.hero} />

      <section className="container-page section-y">
        {!hasServices ? (
          <p className="type-body text-text-muted">{ui.emptyStates.services}</p>
        ) : (
          <div className="flex flex-col gap-16">
            {categories
              .map((category) => ({ category, services: getServicesByCategory(category.slug) }))
              .filter(({ services }) => services.length > 0)
              .map(({ category, services }, index) => (
                <section key={category.slug} aria-label={category.title}>
                  <SectionHeader
                    title={category.title}
                    intro={category.description}
                    compact
                    index={index + 1}
                  />
                  <div
                    className={`mt-6 grid gap-[var(--card-gap)] md:grid-cols-2 ${
                      services.length >= 7 ? 'xl:grid-cols-3' : ''
                    }`}
                  >
                    {services.map((service) => (
                      <ServiceCard key={service.slug} service={service} />
                    ))}
                  </div>
                </section>
              ))}
          </div>
        )}
      </section>

      <CtaBand content={ctaBand} phone={config.contact.phone} />
    </>
  );
}
