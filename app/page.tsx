import Link from 'next/link';
import {
  getPosts,
  getServiceCategories,
  getServices,
  getSite,
  getSiteConfig,
  getTeamMemberBySlug,
  getTeamMembers,
  getUiStrings,
} from '@/lib/content';
import { buildMetadata } from '@/lib/seo';
import { CtaBand } from '@/components/cta-band';
import { HomeHero } from '@/components/home-hero';
import { MediaFrame } from '@/components/media-frame';
import { PostCard } from '@/components/post-card';
import { PrincipleList } from '@/components/principle-list';
import { Prose } from '@/components/prose';
import { SectionHeader } from '@/components/section-header';
import { ServiceCard } from '@/components/service-card';
import { TeamCard } from '@/components/team-card';

const { pages } = getSite();

export const metadata = buildMetadata(pages.home.seo);

export default function HomePage() {
  const config = getSiteConfig();
  const ui = getUiStrings();
  const { home, ctaBand } = pages;

  const categories = getServiceCategories();
  const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));
  const services = getServices();
  const featuredServices = services.slice(0, 4);
  const team = getTeamMembers().slice(0, 3);
  const posts = getPosts().slice(0, 3);

  return (
    <>
      <HomeHero
        hero={home.hero}
        identity={{
          tagline: config.identity.tagline,
          initials: config.identity.initials,
        }}
      />

      <section className="container-page section-y" aria-label={home.servicesTeaser.title}>
        <SectionHeader title={home.servicesTeaser.title} intro={home.servicesTeaser.intro} />
        {featuredServices.length > 0 ? (
          <div className="mt-8 grid gap-[var(--card-gap)] md:grid-cols-2">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                category={categoryBySlug.get(service.category)}
              />
            ))}
          </div>
        ) : (
          <p className="type-body mt-4 text-text-muted">{ui.emptyStates.services}</p>
        )}
        <Link href={home.servicesTeaser.cta.href} className="text-link type-body-small font-semibold mt-8 inline-block">
          {home.servicesTeaser.cta.label}
        </Link>
      </section>

      <section className="container-page section-y" aria-label={home.studioTeaser.title}>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <MediaFrame
              image={home.studioTeaser.image}
              aspectClassName="aspect-[4/3]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="flex flex-col items-start lg:col-span-6 lg:col-start-7">
            <h2 className="type-heading-2 hyphens-auto">{home.studioTeaser.title}</h2>
            <Prose markdown={home.studioTeaser.body} className="mt-4" />
            {home.studioTeaser.note ? (
              <p className="type-caption mt-4 tabular-nums text-text-muted">
                {home.studioTeaser.note}
              </p>
            ) : null}
            <Link
              href={home.studioTeaser.cta.href}
              className="text-link type-body-small font-semibold mt-4"
            >
              {home.studioTeaser.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary-tint">
        <div className="container-page section-y">
          <PrincipleList content={home.method} />
        </div>
      </section>

      <section className="container-page section-y" aria-label={home.teamTeaser.title}>
        <SectionHeader title={home.teamTeaser.title} intro={home.teamTeaser.intro} />
        {team.length > 0 ? (
          <div className="mt-8 grid gap-[var(--card-gap)] md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        ) : (
          <p className="type-body mt-4 text-text-muted">{ui.emptyStates.team}</p>
        )}
        <Link
          href={home.teamTeaser.cta.href}
          className="text-link type-body-small font-semibold mt-8 inline-block"
        >
          {home.teamTeaser.cta.label}
        </Link>
      </section>

      <section className="container-page section-y" aria-label={home.insightsTeaser.title}>
        <SectionHeader title={home.insightsTeaser.title} intro={home.insightsTeaser.intro} />
        {posts.length > 0 ? (
          <div className="mt-8 grid gap-[var(--card-gap)] md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                post={post}
                authorName={getTeamMemberBySlug(post.author)?.name ?? ''}
              />
            ))}
          </div>
        ) : (
          <p className="type-body mt-4 text-text-muted">{ui.emptyStates.posts}</p>
        )}
        <Link
          href={home.insightsTeaser.cta.href}
          className="text-link type-body-small font-semibold mt-8 inline-block"
        >
          {home.insightsTeaser.cta.label}
        </Link>
      </section>

      <CtaBand content={ctaBand} phone={config.contact.phone} />
    </>
  );
}
