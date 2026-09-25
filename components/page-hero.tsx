import type { PageHero as PageHeroContent } from '@/content';

type PageHeroProps = {
  hero: PageHeroContent;
};

/**
 * PageHero — classic institutional centered header.
 * Symmetric formal layout with ornamental rules above and below,
 * centered eyebrow, title, deck, and optional meta.
 */
export function PageHero({ hero }: PageHeroProps) {
  return (
    <header className="container-page flex flex-col items-center py-16 text-center lg:py-[var(--section-y)]">
      {hero.eyebrow ? (
        <p className="type-label text-accent">{hero.eyebrow}</p>
      ) : null}

      <span className="ornamental-rule ornamental-rule-short mt-4" aria-hidden="true" />

      <h1 className="type-title hyphens-auto max-w-[24ch] mt-6">{hero.title}</h1>

      <p className="type-body mt-4 max-w-[52ch] text-text-muted">{hero.subtitle}</p>

      {hero.meta ? (
        <p className="type-caption mt-4 tabular-nums text-text-muted">{hero.meta}</p>
      ) : null}

      <div className="ornament-divider mt-8" aria-hidden="true">
        <span className="ornament-divider-diamond" />
      </div>
    </header>
  );
}
