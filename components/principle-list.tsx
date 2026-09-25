import type { PrincipleSection } from '@/content';
import { SectionHeader } from '@/components/section-header';

type PrincipleListProps = {
  content: PrincipleSection;
};

/**
 * PrincipleList — classic institutional.
 * 3–4 numbered items with classical serif numbering,
 * vertical hairlines on desktop, hairline rows on mobile.
 */
export function PrincipleList({ content }: PrincipleListProps) {
  return (
    <section aria-label={content.title}>
      <SectionHeader title={content.title} intro={content.intro} />
      <ol className="mt-10 border-t border-border lg:grid lg:grid-cols-3 lg:border-t-0">
        {content.items.map((item, index) => (
          <li
            key={item.title}
            className="border-b border-border py-7 last:border-b-0 lg:border-b-0 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
          >
            <div className="flex flex-col gap-3">
              <span className="type-display text-accent" style={{ fontSize: '28px', lineHeight: '1' }}>
                {String(index + 1).padStart(2, '0')}
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
