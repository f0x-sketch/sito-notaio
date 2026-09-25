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

/** DESIGN.md §6.4: same category first, fill to 2 cards, then others by order. */
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

  /* Sticky right rail only when the box has ≥ 6 rows (DESIGN.md §6.4). */
  const stickyRail = service.highlights.length >= 6;

  const highlightsBox = (
    <div className="border border-border-strong bg-surface-raised p-7">
      <h2 className="type-heading-3">{ui.highlightsTitle}</h2>
      <ul className="mt-4 border-t border-border">
        {service.highlights.map((highlight) => (
          <li
            key={highlight}
            className="type-body-small flex gap-3 border-b border-border py-3 last:border-b-0"
          >
            <span aria-hidden="true" className="text-text-muted">
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
      <header className="container-page py-12 lg:py-[var(--section-y)]">
        <div className="flex flex-col items-center text-center">
          {category ? <p className="type-label text-accent">{category.title}</p> : null}
          <span className="ornamental-rule ornamental-rule-short mt-4" aria-hidden="true" />
          <h1 className="type-title hyphens-auto max-w-[24ch] mt-6">{service.title}</h1>
          <p className="type-body mt-4 max-w-[52ch] text-text-muted">{service.summary}</p>
          <div className="ornament-divider mt-8" aria-hidden="true">
            <span className="ornament-divider-diamond" />
          </div>
        </div>
      </header>

      <section className="container-page section-y">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7 lg:col-start-2">
            <Prose markdown={service.body} dropCap />
            {!stickyRail ? <div className="mt-10">{highlightsBox}</div> : null}
          </div>
          {stickyRail ? (
            <aside className="mt-10 lg:col-span-4 lg:col-start-9 lg:sticky lg:top-24 lg:mt-0 lg:self-start">
              {highlightsBox}
            </aside>
          ) : null}
        </div>
      </section>

      {related.length > 0 ? (
        <section className="container-page section-y" aria-label={ui.relatedServicesTitle}>
          <SectionHeader title={ui.relatedServicesTitle} />
          <div className="mt-8 grid gap-[var(--card-gap)] md:grid-cols-2">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </section>
      ) : null}

      <CtaBand content={ctaBand} phone={config.contact.phone} />
    </>
  );
}
