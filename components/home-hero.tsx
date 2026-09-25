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
 * HomeHero split (DESIGN.md §6.1, composed for the homepage only per §9):
 * text cols 1–6 + imagery cols 8–12 on desktop, stacked with the image last
 * on mobile. Exactly two CTAs; missing imagery becomes a seal composition.
 */
export function HomeHero({ hero, identity }: HomeHeroProps) {
  const fallbackPanel = (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center">
      <SealMonogram initials={identity.initials} className="h-24 w-24" />
      <p className="type-body italic text-primary">{identity.tagline}</p>
    </div>
  );

  return (
    <section className="container-page">
      <div className="flex flex-col gap-8 py-12 lg:grid lg:min-h-[calc(100dvh-72px)] lg:grid-cols-12 lg:items-center lg:gap-x-12 lg:py-24">
        <div className="relative lg:col-span-6 lg:pl-8">
          {hero.eyebrow ? (
            <p className="type-label mb-3 text-text-muted">{hero.eyebrow}</p>
          ) : null}
          <span className="margin-rule" aria-hidden="true" />
          <h1 className="type-display hyphens-auto">{hero.title}</h1>
          <p className="type-body mt-4 max-w-[45ch] text-text-muted">{hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
        <div className="lg:col-span-5 lg:col-start-8">
          <MediaFrame
            image={hero.image}
            aspectClassName="aspect-[4/3] lg:aspect-[4/5]"
            fallback={fallbackPanel}
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
