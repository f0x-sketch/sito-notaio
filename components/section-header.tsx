type SectionHeaderProps = {
  title: string;
  /** Optional deck under the title (≤ 25 words). */
  intro?: string;
  /** Compact variant for category group titles (DESIGN.md §6.3). */
  compact?: boolean;
  /** Section number in the page's running order; renders the oversized numeral. */
  index?: number;
  id?: string;
  className?: string;
};

/**
 * SectionHeader (DESIGN.md §5.6): stacked `heading-2` title over an optional
 * deck — never a split title/paragraph header. When `index` is set, a hairline
 * rule and an oversized numeral open the section (modern-minimal signature):
 * numeral in cols 1–2, title column in cols 3–9 of the 12-col grid.
 */
export function SectionHeader({ title, intro, compact, index, id, className }: SectionHeaderProps) {
  const numbered = index !== undefined;

  return (
    <div className={`border-t border-border pt-6 lg:pt-8 ${className ?? ''}`}>
      <div className={numbered ? 'lg:grid lg:grid-cols-12 lg:gap-x-12' : ''}>
        {numbered ? (
          <span aria-hidden="true" className="type-numeral mb-4 block text-text-muted lg:col-span-2 lg:mb-0">
            {String(index).padStart(2, '0')}
          </span>
        ) : null}
        <div className={numbered ? 'lg:col-span-7' : 'max-w-[60ch]'}>
          <h2 id={id} className={compact ? 'type-heading-3 hyphens-auto' : 'type-heading-2 hyphens-auto'}>
            {title}
          </h2>
          {intro ? <p className="type-body mt-2 max-w-[45ch] text-text-muted">{intro}</p> : null}
        </div>
      </div>
    </div>
  );
}
