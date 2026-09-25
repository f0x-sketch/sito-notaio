import Link from 'next/link';
import type { BlogPost } from '@/content';
import { formatDate } from '@/lib/format';
import { MediaFrame } from '@/components/media-frame';

type PostCardProps = {
  post: BlogPost;
  /** Display name of the post author (already resolved from the team). */
  authorName?: string;
  /** Featured variant: cover + oversized title beside it. */
  featured?: boolean;
  /** Positional numeral for the numbered insights list. */
  index?: number;
  className?: string;
};

function MetaLine({
  post,
  authorName,
  className,
}: {
  post: BlogPost;
  authorName?: string;
  className?: string;
}) {
  return (
    <p className={`type-caption flex flex-wrap items-center gap-x-2 gap-y-1 text-text-muted ${className ?? ''}`}>
      <time dateTime={post.date} className="tabular-nums">
        {formatDate(post.date)}
      </time>
      {post.tags.map((tag) => (
        <span key={tag} className="type-label text-text-muted">
          {tag}
        </span>
      ))}
      {authorName ? <span>{authorName}</span> : null}
    </p>
  );
}

/**
 * Post entry (DESIGN.md §5.9 restructured for editorial contemporary):
 * `featured` renders a magazine feature (cover + display title); the default
 * is a numbered contents-page row. Whole entry is one link; tags and meta
 * are not links.
 */
export function PostCard({ post, authorName, featured, index, className }: PostCardProps) {
  if (featured) {
    return (
      <article className={`group relative grid gap-6 lg:grid-cols-12 lg:gap-x-10 ${className ?? ''}`}>
        {post.coverImage ? (
          <div className="lg:col-span-7">
            <MediaFrame
              image={post.coverImage}
              aspectClassName="aspect-video"
              decorative
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
        ) : null}
        <div
          className={`flex flex-col justify-center gap-3 ${
            post.coverImage ? 'lg:col-span-5' : 'lg:col-span-8'
          }`}
        >
          <MetaLine post={post} authorName={authorName} />
          <h3 className="type-title hyphens-auto max-w-[20ch]">
            <Link
              href={`/insights/${post.slug}`}
              aria-label={post.title}
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
            >
              <span className="transition-colors duration-150 group-hover:text-primary group-hover:underline group-hover:decoration-2 group-hover:underline-offset-[6px]">
                {post.title}
              </span>
            </Link>
          </h3>
          <p className="type-body max-w-[48ch] text-text-muted">{post.excerpt}</p>
        </div>
      </article>
    );
  }

  return (
    <article className={`group relative border-t border-border ${className ?? ''}`}>
      {index !== undefined ? (
        <span
          aria-hidden="true"
          className="type-index pointer-events-none absolute left-0 top-5 text-primary lg:top-7"
        >
          {String(index).padStart(2, '0')}
        </span>
      ) : null}
      <div
        className={`relative flex flex-col gap-2 py-6 lg:py-8 ${
          index !== undefined ? 'pl-12 lg:pl-20' : ''
        }`}
      >
        <h3 className="type-heading-2 hyphens-auto max-w-[28ch]">
          <Link
            href={`/insights/${post.slug}`}
            aria-label={post.title}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            <span className="transition-colors duration-150 group-hover:text-primary group-hover:underline group-hover:decoration-2 group-hover:underline-offset-[6px]">
              {post.title}
            </span>
          </Link>
        </h3>
        <MetaLine post={post} authorName={authorName} />
        <p className="type-body-small line-clamp-2 max-w-[52ch] text-text-muted">{post.excerpt}</p>
        <span
          aria-hidden="true"
          className="absolute right-0 top-6 text-xl text-primary transition-transform duration-150 group-hover:translate-x-1 lg:top-8"
        >
          →
        </span>
      </div>
    </article>
  );
}
