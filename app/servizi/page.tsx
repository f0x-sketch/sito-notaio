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
          <div className="flex flex-col gap-20">
            {categories.map((category) => {
              const services = getServicesByCategory(category.slug);
              if (services.length === 0) return null;
              return (
                <section key={category.slug} aria-label={category.title}>
                  <SectionHeader
                    title={category.title}
                    intro={category.description}
                    compact
                  />
                  <ol className="mt-8">
                    {services.map((service, index) => (
                      <li key={service.slug}>
                        <ServiceCard service={service} index={index + 1} />
                      </li>
                    ))}
                    <li aria-hidden="true" className="border-t border-border" />
                  </ol>
                </section>
              );
            })}
          </div>
        )}
      </section>

      <CtaBand content={ctaBand} phone={config.contact.phone} />
    </>
  );
}
