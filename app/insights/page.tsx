import {
  getPosts,
  getSite,
  getTeamMemberBySlug,
  getUiStrings,
} from '@/lib/content';
import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/page-hero';
import { PostCard } from '@/components/post-card';

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
            <div className="grid gap-[var(--card-gap)] lg:grid-cols-3">
              <PostCard
                post={posts[0]}
                authorName={getTeamMemberBySlug(posts[0].author)?.name ?? ''}
                featured
                className="lg:col-span-2"
              />
            </div>
            {posts.length > 1 ? (
              <div
                className={`mt-[var(--card-gap)] grid gap-[var(--card-gap)] md:grid-cols-2 ${
                  posts.length < 4 ? '' : 'lg:grid-cols-3'
                }`}
              >
                {posts.slice(1).map((post) => (
                  <PostCard
                    key={post.slug}
                    post={post}
                    authorName={getTeamMemberBySlug(post.author)?.name ?? ''}
                  />
                ))}
              </div>
            ) : null}
          </>
        )}
      </section>
    </>
  );
}
