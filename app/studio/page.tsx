import { getSite, getSiteConfig } from '@/lib/content';
import { buildPageMetadata } from '@/lib/seo';
import { CtaBand } from '@/components/cta-band';
import { MediaFrame } from '@/components/media-frame';
import { PageHero } from '@/components/page-hero';
import { PrincipleList } from '@/components/principle-list';
import { Prose } from '@/components/prose';

const { studio, ctaBand } = getSite().pages;

export const metadata = buildPageMetadata(studio.seo, {
  title: studio.hero.title,
  description: studio.hero.subtitle,
});

export default function StudioPage() {
  const config = getSiteConfig();

  return (
    <>
      <PageHero hero={studio.hero} />

      <section className="container-page section-y">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7 lg:col-start-2">
            <Prose markdown={studio.story} />
            {studio.timeline && studio.timeline.length > 0 ? (
              <ol className="mt-14 border-t-2 border-text">
                {studio.timeline.map((entry) => (
                  <li
                    key={`${entry.year}-${entry.title}`}
                    className="grid gap-2 border-b border-border py-7 lg:grid-cols-[120px_1fr] lg:gap-8 lg:py-9"
                  >
                    <span className="type-index text-primary">{entry.year}</span>
                    <div>
                      <h3 className="type-heading-2 hyphens-auto">{entry.title}</h3>
                      <p className="type-body-small mt-2 max-w-[48ch] text-text-muted">
                        {entry.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        </div>
      </section>

      <section className="container-page section-y">
        <PrincipleList content={studio.principles} />
      </section>

      {studio.sede ? (
        <section className="container-page section-y">
          <figure>
            <span className="section-rule mb-6" aria-hidden="true" />
            <MediaFrame
              image={studio.sede.image}
              aspectClassName="aspect-[4/3] lg:aspect-[21/9]"
              decorative={!studio.sede.caption}
              sizes="100vw"
            />
            {studio.sede.caption ? (
              <figcaption className="type-caption mt-3 text-text-muted">
                {studio.sede.caption}
              </figcaption>
            ) : null}
          </figure>
        </section>
      ) : null}

      <CtaBand content={ctaBand} phone={config.contact.phone} />
    </>
  );
}
