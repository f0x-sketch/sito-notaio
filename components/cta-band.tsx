import Link from 'next/link';
import type { CtaBandContent } from '@/content';
import { telHref } from '@/lib/format';

type CtaBandProps = {
  content: CtaBandContent;
  /** Optional secondary `tel:` link from `SiteConfig.contact.phone`. */
  phone?: string;
};

/**
 * Oversized CTA band: full-bleed inverse surface with display-serif
 * headline and a single primary action. One per page maximum, always after
 * the last content section. Never used on `/contatti` or on the legal stubs.
 */
export function CtaBand({ content, phone }: CtaBandProps) {
  return (
    <section className="surface-inverse bg-surface-inverse py-[var(--section-y-lg)] text-text-inverse">
      <div className="container-page">
        <span
          aria-hidden="true"
          className="mb-8 block h-1 w-24 bg-text-inverse"
        />
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-x-12">
          <div className="lg:col-span-7">
            <h2 className="type-display hyphens-auto">{content.title}</h2>
            {content.body ? (
              <p className="type-body mt-5 max-w-[48ch] text-text-inverse-muted">
                {content.body}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:col-start-9">
            <Link href={content.cta.href} className="button-inverse w-full sm:w-auto">
              {content.cta.label}
            </Link>
            {phone ? (
              <a href={telHref(phone)} className="text-link-inverse type-body tabular-nums">
                {phone}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
