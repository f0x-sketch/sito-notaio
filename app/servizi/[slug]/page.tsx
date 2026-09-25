import { notFound } from 'next/navigation';
import type { Service } from '@/content';
import {
  getServiceBySlug,
  getServiceCategories,
  getServices,
  getSite,
  getSiteConfig,
  getUiStrings,
} from '@/lib/content';
import { buildPageMetadata } from '@/lib/seo';
import { CtaBand } from '@/components/cta-band';
import { Prose } from '@/components/prose';
import { SectionHeader } from '@/components/section-header';
import { ServiceCard } from '@/components/service-card';

const { ctaBand } = getSite().pages;

type Props = { params: Promise<{ slug: string }> };

/* Content is build-time static: unknown slugs must 404 (no runtime fallback). */
export const dynamicParams = false;

export function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return buildPageMetadata(service.seo, {
    title: service.title,
    description: service.summary,
  });
}

/** Related services: same category first, fill to 2 cards, then others by order. */
function relatedServices(all: Service[], current: Service): Service[] {
  const others = all.filter((service) => service.slug !== current.slug);
  const sameCategory = others.filter((service) => service.category === current.category);
  const rest = others.filter((service) => service.category !== current.category);
  return [...sameCategory, ...rest].slice(0, 2);
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const config = getSiteConfig();
  const ui = getUiStrings();
  const category = getServiceCategories().find((item) => item.slug === service.category);
  const related = relatedServices(getServices(), service);

  /* Sticky right rail only when the box has ≥ 6 rows. */
  const stickyRail = service.highlights.length >= 6;

  const highlightsBox = (
    <div>
      <span className="section-rule" aria-hidden="true" />
      <h2 className="type-label mt-5 text-primary">{ui.highlightsTitle}</h2>
      <ul className="mt-5 border-t border-text">
        {service.highlights.map((highlight) => (
          <li
            key={highlight}
            className="type-body-small flex gap-3 border-b border-border py-4 last:border-b-0"
          >
            <span aria-hidden="true" className="text-primary">
              —
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <header className="container-page py-14 lg:py-[var(--section-y)]">
        {category ? <p className="type-label text-primary">{category.title}</p> : null}
        <span className="kicker-rule" aria-hidden="true" />
        <h1 className="type-title hyphens-auto max-w-[18ch]">{service.title}</h1>
        <p className="type-body mt-6 max-w-[45ch] text-text-muted">{service.summary}</p>
      </header>

      <section className="container-page section-y">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7 lg:col-start-2">
            <Prose markdown={service.body} />
            {!stickyRail ? <div className="mt-12">{highlightsBox}</div> : null}
          </div>
          {stickyRail ? (
            <aside className="mt-12 lg:col-span-4 lg:col-start-9 lg:sticky lg:top-28 lg:mt-0 lg:self-start">
              {highlightsBox}
            </aside>
          ) : null}
        </div>
      </section>

      {related.length > 0 ? (
        <section className="container-page section-y" aria-label={ui.relatedServicesTitle}>
          <SectionHeader title={ui.relatedServicesTitle} />
          <ol className="mt-8">
            {related.map((item, index) => (
              <li key={item.slug}>
                <ServiceCard service={item} index={index + 1} />
              </li>
            ))}
            <li aria-hidden="true" className="border-t border-border" />
          </ol>
        </section>
      ) : null}

      <CtaBand content={ctaBand} phone={config.contact.phone} />
    </>
  );
}
