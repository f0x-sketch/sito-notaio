import Link from 'next/link';
import type { HomePageContent } from '@/content';
import { MediaFrame } from '@/components/media-frame';
import { SealMonogram } from '@/components/seal-monogram';

type HomeHeroProps = {
  hero: HomePageContent['hero'];
  identity: {
    tagline: string;
    initials?: string;
  };
};

/**
 * HomeHero — classic institutional composition.
 * Centered, symmetric formal rhythm: eyebrow, ornamental rule,
 * display headline, deck, CTAs in a vertical stack. Imagery below
 * in a formal frame or seal composition.
 */
export function HomeHero({ hero, identity }: HomeHeroProps) {
  const fallbackPanel = (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 p-12 text-center">
      <SealMonogram initials={identity.initials} className="h-28 w-28" />
      <p className="type-body italic text-primary">{identity.tagline}</p>
    </div>
  );

  return (
    <section className="container-page">
      <div className="flex flex-col items-center gap-10 py-16 text-center lg:gap-12 lg:py-28">
        {hero.eyebrow ? (
          <p className="type-label text-accent">{hero.eyebrow}</p>
        ) : null}

        <span className="ornamental-rule ornamental-rule-short" aria-hidden="true" />

        <h1 className="type-display hyphens-auto max-w-[22ch]">{hero.title}</h1>

        <p className="type-body max-w-[52ch] text-text-muted">{hero.subtitle}</p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link href={hero.primaryCta.href} className="button-primary w-full sm:w-auto">
            {hero.primaryCta.label}
          </Link>
          {hero.secondaryCta ? (
            <Link href={hero.secondaryCta.href} className="button-secondary w-full sm:w-auto">
              {hero.secondaryCta.label}
            </Link>
          ) : null}
        </div>

        <div className="ornament-divider mt-4" aria-hidden="true">
          <span className="ornament-divider-diamond" />
        </div>

        <div className="w-full max-w-[720px]">
          <MediaFrame
            image={hero.image}
            aspectClassName="aspect-[4/3] lg:aspect-[16/9]"
            fallback={fallbackPanel}
            priority
            sizes="(min-width: 1024px) 720px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
