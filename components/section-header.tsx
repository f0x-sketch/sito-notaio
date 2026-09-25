type SectionHeaderProps = {
  title: string;
  /** Optional deck under the title (≤ 25 words). */
  intro?: string;
  /** Compact variant for category group titles (DESIGN.md §6.3). */
  compact?: boolean;
  id?: string;
  className?: string;
};

/**
 * SectionHeader (DESIGN.md §5.6): stacked `heading-2` title over an optional
 * deck — never a split title/paragraph header.
 */
export function SectionHeader({ title, intro, compact, id, className }: SectionHeaderProps) {
  return (
    <div className={`max-w-[60ch] ${className ?? ''}`}>
      <h2 id={id} className={compact ? 'type-heading-3 hyphens-auto' : 'type-heading-2 hyphens-auto'}>
        {title}
      </h2>
      {intro ? <p className="type-body mt-2 text-text-muted">{intro}</p> : null}
    </div>
  );
}
