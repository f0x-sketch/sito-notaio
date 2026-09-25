import type { PageHero as PageHeroContent } from '@/content';

type PageHeroProps = {
  hero: PageHeroContent;
};

/**
 * PageHero variant (DESIGN.md §5.5 B): eyebrow + `title` H1 + deck + optional
 * meta line, left-aligned with the margin rule. No image.
 */
export function PageHero({ hero }: PageHeroProps) {
  return (
    <header className="container-page py-12 lg:py-[var(--section-y)]">
      <div className="relative lg:pl-8">
        {hero.eyebrow ? (
          <p className="type-label mb-3 text-text-muted">{hero.eyebrow}</p>
        ) : null}
        <span className="margin-rule" aria-hidden="true" />
        <h1 className="type-title hyphens-auto max-w-[20ch]">{hero.title}</h1>
        <p className="type-body mt-4 max-w-[45ch] text-text-muted">{hero.subtitle}</p>
        {hero.meta ? <p className="type-caption mt-4 tabular-nums text-text-muted">{hero.meta}</p> : null}
      </div>
    </header>
  );
}
