import Link from 'next/link';
import type { Service, ServiceCategory } from '@/content';
import { ServiceIcon } from '@/components/icons';

type ServiceCardProps = {
  service: Service;
  category?: ServiceCategory;
  className?: string;
};

/**
 * ServiceCard (DESIGN.md §5.7): the whole card is one link to the service
 * detail page. States per §4; one interactive target per card.
 */
export function ServiceCard({ service, category, className }: ServiceCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col gap-2 rounded-sm border border-border bg-surface-raised p-6 transition-colors duration-150 hover:border-border-strong has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-focus ${
        className ?? ''
      }`}
    >
      {service.icon ? (
        <ServiceIcon name={service.icon} className="h-6 w-6 text-primary" />
      ) : null}
      {category ? <p className="type-caption text-text-muted">{category.title}</p> : null}
      <h3 className="type-heading-3 hyphens-auto">
        <Link
          href={`/servizi/${service.slug}`}
          className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
        >
          <span className="group-hover:text-primary group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
            {service.title}
          </span>
        </Link>
      </h3>
      {service.summary ? (
        <p className="type-body-small text-text-muted">{service.summary}</p>
      ) : null}
      <span
        aria-hidden="true"
        className="mt-auto self-end text-primary transition-transform duration-150 group-hover:translate-x-1"
      >
        →
      </span>
    </article>
  );
}
