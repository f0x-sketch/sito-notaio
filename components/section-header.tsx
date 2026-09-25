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
 * SectionHeader — classic institutional centered section title.
 * Ornamental rule above, centered display title, optional deck,
 * ornamental rule below for full sections.
 */
export function SectionHeader({ title, intro, compact, id, className }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className ?? ''}`}>
      {!compact ? (
        <span className="ornamental-rule ornamental-rule-short mb-5" aria-hidden="true" />
      ) : null}
      <h2
        id={id}
        className={
          compact
            ? 'type-heading-3 hyphens-auto'
            : 'type-heading-2 hyphens-auto max-w-[32ch]'
        }
      >
        {title}
      </h2>
      {intro ? (
        <p className="type-body mt-3 max-w-[52ch] text-text-muted">{intro}</p>
      ) : null}
      {!compact ? (
        <div className="ornament-divider mt-5" aria-hidden="true">
          <span className="ornament-divider-diamond" />
        </div>
      ) : null}
    </div>
  );
}
