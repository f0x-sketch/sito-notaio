type SectionHeaderProps = {
  title: string;
  /** Optional deck under the title (≤ 25 words). */
  intro?: string;
  /** Compact variant for category group titles. */
  compact?: boolean;
  id?: string;
  className?: string;
};

/**
 * Magazine section opener: a strong ink rule over the title (and optional
 * deck) — never a split title/paragraph header.
 */
export function SectionHeader({ title, intro, compact, id, className }: SectionHeaderProps) {
  return (
    <div className={className ?? ''}>
      <span className="section-rule" aria-hidden="true" />
      <div className="max-w-[60ch] pt-5 lg:pt-7">
        <h2
          id={id}
          className={compact ? 'type-heading-3 hyphens-auto' : 'type-heading-2 hyphens-auto'}
        >
          {title}
        </h2>
        {intro ? <p className="type-body mt-3 text-text-muted">{intro}</p> : null}
      </div>
    </div>
  );
}
