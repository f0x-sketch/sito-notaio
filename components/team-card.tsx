import Link from 'next/link';
import type { TeamMember } from '@/content';
import { MediaFrame } from '@/components/media-frame';
import { SealMonogram } from '@/components/seal-monogram';

type TeamCardProps = {
  member: TeamMember;
  className?: string;
};

/** Joined caption line: professional title and role inside the firm. */
export function memberCaptionLine(member: TeamMember): string {
  return [member.title, member.role].filter(Boolean).join(' · ');
}

/**
 * TeamCard: editorial contributor block — sharp 4:5 portrait under a strong
 * ink rule, display-serif name, tracked caption. Whole card is one link.
 * Horizontal row with a compact portrait on mobile.
 */
export function TeamCard({ member, className }: TeamCardProps) {
  return (
    <article
      className={`group relative flex items-start gap-5 border-t border-border pt-5 md:flex-col md:gap-0 md:border-t-2 md:border-text md:pt-0 md:[&>div:first-child]:mt-0 ${
        className ?? ''
      }`}
    >
      <div className="w-[88px] shrink-0 md:mt-6 md:w-auto">
        <MediaFrame
          image={member.photo}
          aspectClassName="aspect-[4/5]"
          fallback={<SealMonogram className="h-16 w-16" />}
          sizes="(min-width: 768px) 30vw, 88px"
        />
      </div>
      <div className="flex min-w-0 flex-col gap-2 pb-5 md:pb-8 md:pt-5">
        <h3 className="type-heading-2 hyphens-auto">
          <Link
            href={`/professionisti/${member.slug}`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            <span className="transition-colors duration-150 group-hover:text-primary group-hover:underline group-hover:decoration-2 group-hover:underline-offset-[6px]">
              {member.name}
            </span>
          </Link>
        </h3>
        <p className="type-label text-text-muted">{memberCaptionLine(member)}</p>
        {member.specializations.length > 0 ? (
          <p className="type-body-small line-clamp-2 text-text-muted">
            {member.specializations.join(' · ')}
          </p>
        ) : null}
      </div>
    </article>
  );
}
