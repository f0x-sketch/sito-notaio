import Link from 'next/link';
import type { HomePageContent } from '@/content';
import { MediaFrame } from '@/components/media-frame';
import { SealMonogram } from '@/components/seal-monogram';

type HomeHeroProps = {
  hero: HomePageContent['hero'];
  /** `SiteConfig.identity` values used by the missing-imagery composition. */
  identity: {
    tagline: string;
    initials?: string;
  };
};

/**
 * Magazine-cover hero: oversized display type in a surface panel that
 * overlaps a full-bleed image running to the viewport edge. Stacked with
 * the image last on mobile. Exactly two CTAs; missing imagery becomes a
 * seal composition.
 */
export function HomeHero({ hero, identity }: HomeHeroProps) {
  const fallbackPanel = (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-10 text-center">
      <SealMonogram initials={identity.initials} className="h-28 w-28" />
      <p className="type-heading-2 max-w-[18ch] text-primary">{identity.tagline}</p>
    </div>
  );

  return (
    <section className="flex flex-col lg:grid lg:min-h-[calc(100dvh-88px)] lg:grid-cols-12">
      <div className="bleed-align-left relative z-10 order-1 flex flex-col justify-center bg-surface py-14 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:self-center lg:py-16 lg:pr-16">
        {hero.eyebrow ? (
          <p className="type-label mb-4 text-primary">{hero.eyebrow}</p>
        ) : null}
        <span className="kicker-rule" aria-hidden="true" />
        <h1 className="type-display hyphens-auto max-w-[13ch]">{hero.title}</h1>
        <p className="type-body mt-6 max-w-[42ch] text-text-muted">{hero.subtitle}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href={hero.primaryCta.href} className="button-primary w-full sm:w-auto">
            {hero.primaryCta.label}
          </Link>
          {hero.secondaryCta ? (
            <Link href={hero.secondaryCta.href} className="button-secondary w-full sm:w-auto">
              {hero.secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>
      <div className="relative order-2 min-h-[78vw] sm:min-h-[60vw] lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:min-h-full">
        <MediaFrame
          image={hero.image}
          fill
          fallback={fallbackPanel}
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
        />
      </div>
    </section>
  );
}
