import type { PageHero as PageHeroContent } from '@/content';

type PageHeroProps = {
  hero: PageHeroContent;
};

/**
 * Editorial page opener: kicker rule + oversized display title + deck +
 * optional meta line, left-aligned on the content grid. No image.
 */
export function PageHero({ hero }: PageHeroProps) {
  return (
    <header className="container-page py-14 lg:py-[var(--section-y)]">
      {hero.eyebrow ? (
        <p className="type-label mb-4 text-primary">{hero.eyebrow}</p>
      ) : null}
      <span className="kicker-rule" aria-hidden="true" />
      <h1 className="type-title hyphens-auto max-w-[18ch]">{hero.title}</h1>
      <p className="type-body mt-6 max-w-[45ch] text-text-muted">{hero.subtitle}</p>
      {hero.meta ? (
        <p className="type-caption mt-5 tabular-nums text-text-muted">{hero.meta}</p>
      ) : null}
    </header>
  );
}
