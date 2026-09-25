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
          <ol className="mt-10">
            {featuredServices.map((service, index) => (
              <li key={service.slug}>
                <ServiceCard
                  service={service}
                  category={categoryBySlug.get(service.category)}
                  index={index + 1}
                />
              </li>
            ))}
            <li aria-hidden="true" className="border-t border-border" />
          </ol>
        ) : (
          <p className="type-body mt-5 text-text-muted">{ui.emptyStates.services}</p>
        )}
        <Link
          href={home.servicesTeaser.cta.href}
          className="text-link type-body-small font-semibold mt-10 inline-block"
        >
          {home.servicesTeaser.cta.label} →
        </Link>
      </section>

      <section className="container-page section-y" aria-label={home.studioTeaser.title}>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-6">
            <MediaFrame
              image={home.studioTeaser.image}
              aspectClassName="aspect-[4/3]"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <div className="flex flex-col items-start lg:col-span-5 lg:col-start-8 lg:pt-16">
            <span className="section-rule" aria-hidden="true" />
            <h2 className="type-heading-2 hyphens-auto mt-5">{home.studioTeaser.title}</h2>
            <Prose markdown={home.studioTeaser.body} className="mt-5" />
            {home.studioTeaser.note ? (
              <p className="type-label mt-5 tabular-nums text-primary">
                {home.studioTeaser.note}
              </p>
            ) : null}
            <Link
              href={home.studioTeaser.cta.href}
              className="text-link type-body-small font-semibold mt-6"
            >
              {home.studioTeaser.cta.label} →
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
          <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        ) : (
          <p className="type-body mt-5 text-text-muted">{ui.emptyStates.team}</p>
        )}
        <Link
          href={home.teamTeaser.cta.href}
          className="text-link type-body-small font-semibold mt-10 inline-block"
        >
          {home.teamTeaser.cta.label} →
        </Link>
      </section>

      <section className="container-page section-y" aria-label={home.insightsTeaser.title}>
        <SectionHeader title={home.insightsTeaser.title} intro={home.insightsTeaser.intro} />
        {posts.length > 0 ? (
          <ol className="mt-10">
            {posts.map((post, index) => (
              <li key={post.slug}>
                <PostCard
                  post={post}
                  authorName={getTeamMemberBySlug(post.author)?.name ?? ''}
                  index={index + 1}
                />
              </li>
            ))}
            <li aria-hidden="true" className="border-t border-border" />
          </ol>
        ) : (
          <p className="type-body mt-5 text-text-muted">{ui.emptyStates.posts}</p>
        )}
        <Link
          href={home.insightsTeaser.cta.href}
          className="text-link type-body-small font-semibold mt-10 inline-block"
        >
          {home.insightsTeaser.cta.label} →
        </Link>
      </section>

      <CtaBand content={ctaBand} phone={config.contact.phone} />
    </>
  );
}
