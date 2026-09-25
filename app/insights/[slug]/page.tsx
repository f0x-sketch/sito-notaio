import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { BlogPost } from '@/content';
import {
  getPostBySlug,
  getPosts,
  getTeamMemberBySlug,
  getUiStrings,
} from '@/lib/content';
import { buildPageMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/format';
import { MediaFrame } from '@/components/media-frame';
import { PostCard } from '@/components/post-card';
import { Prose } from '@/components/prose';
import { SectionHeader } from '@/components/section-header';
import { SealMonogram } from '@/components/seal-monogram';
import { memberCaptionLine } from '@/components/team-card';

type Props = { params: Promise<{ slug: string }> };

/* Content is build-time static: unknown slugs must 404 (no runtime fallback). */
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  return buildPageMetadata(post.seo, { title: post.title, description: post.excerpt });
}

/** DESIGN.md §6.9: same tag first, fill to 2 cards, then others. */
function relatedPosts(all: BlogPost[], current: BlogPost): BlogPost[] {
  const others = all.filter((post) => post.slug !== current.slug);
  const sharesTag = (post: BlogPost) => post.tags.some((tag) => current.tags.includes(tag));
  return [...others.filter(sharesTag), ...others.filter((post) => !sharesTag(post))].slice(0, 2);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const ui = getUiStrings();
  const author = getTeamMemberBySlug(post.author);
  const related = relatedPosts(getPosts(), post);

  return (
    <>
      <header className="container-page py-12 lg:py-[var(--section-y)]">
        <div className="relative lg:pl-8">
          {post.tags.length > 0 ? (
            <p className="type-caption flex flex-wrap items-center gap-x-2 text-text-muted">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </p>
          ) : null}
          <span className="margin-rule" aria-hidden="true" />
          <h1 className="type-title hyphens-auto">{post.title}</h1>
          <p className="type-caption mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 tabular-nums text-text-muted">
            {author ? (
              <Link href={`/professionisti/${author.slug}`} className="text-link">
                {author.name}
              </Link>
            ) : null}
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.readingTimeMinutes ? (
              <>
                <span aria-hidden="true">·</span>
                <span>{post.readingTimeMinutes}{ui.readingTimeSuffix}</span>
              </>
            ) : null}
          </p>
        </div>
      </header>

      {post.coverImage ? (
        <div className="container-page lg:grid lg:grid-cols-12">
          <figure className="lg:col-span-10">
            <MediaFrame
              image={post.coverImage}
              aspectClassName="aspect-video"
              decorative
              sizes="(min-width: 1024px) 80vw, 100vw"
            />
            {post.coverCaption ? (
              <figcaption className="type-caption mt-2 text-text-muted">
                {post.coverCaption}
              </figcaption>
            ) : null}
          </figure>
        </div>
      ) : null}

      <section className="container-page section-y">
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-2">
            <Prose markdown={post.body} />
          </div>
        </div>
      </section>

      {author ? (
        <section className="container-page pb-[var(--section-y)]">
          <div className="flex items-center gap-4 border-t border-border pt-8">
            {author.photo ? (
              <MediaFrame
                image={author.photo}
                aspectClassName="aspect-square h-12 w-12"
                shape="circle"
                decorative
                sizes="48px"
              />
            ) : (
              <SealMonogram className="h-12 w-12" />
            )}
            <div>
              <p className="type-heading-3">
                <Link
                  href={`/professionisti/${author.slug}`}
                  className="text-link decoration-1"
                >
                  {author.name}
                </Link>
              </p>
              <p className="type-caption text-text-muted">{memberCaptionLine(author)}</p>
            </div>
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="container-page section-y" aria-label={ui.relatedPostsTitle}>
          <SectionHeader title={ui.relatedPostsTitle} />
          <div className="mt-8 grid gap-[var(--card-gap)] md:grid-cols-2">
            {related.map((item) => (
              <PostCard
                key={item.slug}
                post={item}
                authorName={getTeamMemberBySlug(item.author)?.name ?? ''}
              />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
