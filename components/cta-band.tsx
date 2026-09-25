import Link from 'next/link';
import type { CtaBandContent } from '@/content';
import { telHref } from '@/lib/format';

type CtaBandProps = {
  content: CtaBandContent;
  /** Optional secondary `tel:` link from `SiteConfig.contact.phone`. */
  phone?: string;
};

/**
 * CTA band (DESIGN.md §5.13): one per page maximum, always after the last
 * content section. Never used on `/contatti` or on the legal stubs. The one
 * inverse surface of the page: a hard-cut near-black band, hairline-aligned.
 */
export function CtaBand({ content, phone }: CtaBandProps) {
  return (
    <section className="surface-inverse bg-surface-inverse py-[var(--section-y)] text-text-inverse">
      <div className="container-page grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-x-12">
        <div className="lg:col-span-7">
          <h2 className="type-title hyphens-auto">{content.title}</h2>
          {content.body ? (
            <p className="type-body-small mt-4 max-w-[50ch] text-text-inverse-muted">
              {content.body}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:col-start-9">
          <Link href={content.cta.href} className="button-inverse w-full lg:w-auto">
            {content.cta.label}
          </Link>
          {phone ? (
            <a href={telHref(phone)} className="text-link-inverse type-body-small tabular-nums">
              {phone}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
