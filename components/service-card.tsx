import Link from 'next/link';
import type { Service, ServiceCategory } from '@/content';

type ServiceCardProps = {
  service: Service;
  category?: ServiceCategory;
  /** Positional numeral for the contents-page index treatment. */
  index?: number;
  className?: string;
};

/**
 * Service index row: a ruled contents-page entry with an oversized numeral,
 * display-serif title and arrow. The whole row is one link to the service
 * detail page; one interactive target per row.
 */
export function ServiceCard({ service, category, index, className }: ServiceCardProps) {
  return (
    <article
      className={`group relative border-t border-border has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-focus ${className ?? ''}`}
    >
      {index !== undefined ? (
        <span
          aria-hidden="true"
          className="type-index pointer-events-none absolute left-0 top-5 text-primary lg:top-7"
        >
          {String(index).padStart(2, '0')}
        </span>
      ) : null}
      <div
        className={`relative flex flex-col gap-2 py-6 lg:flex-col lg:py-8 ${
          index !== undefined ? 'pl-12 lg:pl-20' : ''
        }`}
      >
        {category ? <p className="type-label text-text-muted">{category.title}</p> : null}
        <h3 className="type-heading-2 hyphens-auto max-w-[24ch]">
          <Link
            href={`/servizi/${service.slug}`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            <span className="transition-colors duration-150 group-hover:text-primary group-hover:underline group-hover:decoration-2 group-hover:underline-offset-[6px]">
              {service.title}
            </span>
          </Link>
        </h3>
        {service.summary ? (
          <p className="type-body-small max-w-[52ch] text-text-muted">{service.summary}</p>
        ) : null}
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
