import type { PrincipleSection } from '@/content';
import { SectionHeader } from '@/components/section-header';

type PrincipleListProps = {
  content: PrincipleSection;
};

/**
 * PrincipleList: 3–4 items with oversized display numerals over
 * `heading-2` titles — no icons, no cards. Columns separated by vertical
 * hairlines on desktop; hairline rows on mobile.
 */
export function PrincipleList({ content }: PrincipleListProps) {
  return (
    <section aria-label={content.title}>
      <SectionHeader title={content.title} intro={content.intro} />
      <ol className="mt-10 lg:grid lg:grid-cols-3 lg:gap-x-10">
        {content.items.map((item, index) => (
          <li
            key={item.title}
            className="border-t border-border py-8 lg:border-t-0 lg:border-l lg:px-8 lg:py-0 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
          >
            <div className="flex flex-col gap-3">
              <span aria-hidden="true" className="type-index-lg text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="type-heading-2 hyphens-auto">{item.title}</h3>
              <p className="type-body-small max-w-[36ch] text-text-muted">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
