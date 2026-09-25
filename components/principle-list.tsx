import type { PrincipleSection } from '@/content';
import { SectionHeader } from '@/components/section-header';

type PrincipleListProps = {
  content: PrincipleSection;
  /** Section number in the page's running order. */
  index?: number;
};

/**
 * PrincipleList (DESIGN.md §5.6): 3–4 numbered items — tabular number +
 * `heading-3` + `body-small`, no icons, no cards. Columns separated by
 * vertical hairlines on desktop; hairline rows on mobile.
 */
export function PrincipleList({ content, index }: PrincipleListProps) {
  return (
    <section aria-label={content.title}>
      <SectionHeader title={content.title} intro={content.intro} index={index} />
      <ol className="mt-8 border-t border-border lg:grid lg:grid-cols-3 lg:border-t-0">
        {content.items.map((item, itemIndex) => (
          <li
            key={item.title}
            className="border-b border-border py-6 last:border-b-0 lg:border-b-0 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
          >
            <div className="flex flex-col gap-2 lg:gap-3">
              <span className="type-caption tabular-nums text-text-muted">
                {String(itemIndex + 1).padStart(2, '0')}
              </span>
              <h3 className="type-heading-3">{item.title}</h3>
              <p className="type-body-small text-text-muted">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
