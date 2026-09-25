import {
  getPosts,
  getSite,
  getTeamMemberBySlug,
  getUiStrings,
} from '@/lib/content';
import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/page-hero';
import { PostCard } from '@/components/post-card';
import { SectionHeader } from '@/components/section-header';

const { insightsIndex } = getSite().pages;

export const metadata = buildPageMetadata(insightsIndex.seo, {
  title: insightsIndex.hero.title,
  description: insightsIndex.hero.subtitle,
});

export default function InsightsIndexPage() {
  const ui = getUiStrings();
  const posts = getPosts();

  return (
    <>
      <PageHero hero={insightsIndex.hero} />

      <section className="container-page section-y">
        {posts.length === 0 ? (
          <p className="type-body text-text-muted">{ui.emptyStates.posts}</p>
        ) : (
          <>
            <SectionHeader title={ui.insightsSectionTitle} />
            <div className="mt-10">
              <PostCard
                post={posts[0]}
                authorName={getTeamMemberBySlug(posts[0].author)?.name ?? ''}
                featured
              />
            </div>
            {posts.length > 1 ? (
              <ol className="mt-16">
                {posts.slice(1).map((post, index) => (
                  <li key={post.slug}>
                    <PostCard
                      post={post}
                      authorName={getTeamMemberBySlug(post.author)?.name ?? ''}
                      index={index + 2}
                    />
                  </li>
                ))}
                <li aria-hidden="true" className="border-t border-border" />
              </ol>
            ) : null}
          </>
        )}
      </section>
    </>
  );
}
