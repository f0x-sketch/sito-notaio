import {
  getSite,
  getSiteConfig,
  getTeamMembers,
  getUiStrings,
} from '@/lib/content';
import { buildPageMetadata } from '@/lib/seo';
import { CtaBand } from '@/components/cta-band';
import { PageHero } from '@/components/page-hero';
import { TeamCard } from '@/components/team-card';

const { teamIndex, ctaBand } = getSite().pages;

export const metadata = buildPageMetadata(teamIndex.seo, {
  title: teamIndex.hero.title,
  description: teamIndex.hero.subtitle,
});

export default function TeamIndexPage() {
  const config = getSiteConfig();
  const ui = getUiStrings();
  const team = getTeamMembers();

  return (
    <>
      <PageHero hero={teamIndex.hero} />

      <section className="container-page section-y">
        {team.length === 0 ? (
          <p className="type-body text-text-muted">{ui.emptyStates.team}</p>
        ) : (
          <div
            className={`grid gap-[var(--card-gap)] ${
              team.length < 3 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {team.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        )}
      </section>

      <CtaBand content={ctaBand} phone={config.contact.phone} />
    </>
  );
}
