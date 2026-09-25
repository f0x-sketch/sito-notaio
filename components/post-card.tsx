import Link from 'next/link';
import type { BlogPost } from '@/content';
import { formatDate } from '@/lib/format';
import { MediaFrame } from '@/components/media-frame';

type PostCardProps = {
  post: BlogPost;
  /** Display name of the post author (already resolved from the team). */
  authorName?: string;
  /** Featured variant: larger `heading-2` title (DESIGN.md §6.8). */
  featured?: boolean;
  className?: string;
};

/**
 * PostCard (DESIGN.md §5.9): optional 16:9 cover, meta, clamped title and
 * excerpt, author line. Whole card is one link; tags and meta are not links.
 */
export function PostCard({ post, authorName, featured, className }: PostCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col gap-3 rounded-sm border border-border bg-surface-raised p-6 transition-colors duration-150 hover:border-border-strong has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-focus ${
        className ?? ''
      }`}
    >
      {post.coverImage ? (
        <MediaFrame
          image={post.coverImage}
          aspectClassName="aspect-video"
          decorative
          sizes="(min-width: 1024px) 30vw, 100vw"
        />
      ) : null}
      <p className="type-caption flex flex-wrap items-center gap-x-2 gap-y-1 text-text-muted">
        <time dateTime={post.date} className="tabular-nums">
          {formatDate(post.date)}
        </time>
        {post.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </p>
      <h3 className={`hyphens-auto ${featured ? 'type-heading-2' : 'type-heading-3 line-clamp-3'}`}>
        <Link
          href={`/insights/${post.slug}`}
          aria-label={post.title}
          className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
        >
          <span className="group-hover:text-primary group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
            {post.title}
          </span>
        </Link>
      </h3>
      <p className="type-body-small line-clamp-2 text-text-muted">{post.excerpt}</p>
      {authorName ? <p className="type-caption text-text-muted">{authorName}</p> : null}
      <span
        aria-hidden="true"
        className="mt-auto self-end text-primary transition-transform duration-150 group-hover:translate-x-1"
      >
        →
      </span>
    </article>
  );
}
