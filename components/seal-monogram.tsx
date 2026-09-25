type SealMonogramProps = {
  /** Firm initials from `SiteConfig.identity.initials`. */
  initials?: string;
  /** Extra size classes; defaults to a compact 64px panel. */
  className?: string;
  /** Accessible name when the monogram stands in for a person's photo. */
  label?: string;
  /** Inverse treatment for dark bands. */
  tone?: 'default' | 'inverse';
};

/**
 * Seal monogram (DESIGN.md §5.11): the brand fallback for missing media —
 * never a logo fallback. Decorative unless `label` is provided (e.g. when it
 * stands in for a person's photo).
 */
export function SealMonogram({
  initials,
  className,
  label,
  tone = 'default',
}: SealMonogramProps) {
  const toneClassName =
    tone === 'inverse'
      ? 'bg-surface-inverse text-text-inverse'
      : 'bg-primary-tint text-primary';

  return (
    <div
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
      className={`flex items-center justify-center rounded-full ${toneClassName} ${className ?? 'h-16 w-16'}`}
    >
      <span className="type-heading-3 select-none">{initials ?? '—'}</span>
    </div>
  );
}
