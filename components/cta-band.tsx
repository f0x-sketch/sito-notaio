import Link from 'next/link';
import type { CtaBandContent } from '@/content';
import { telHref } from '@/lib/format';

type CtaBandProps = {
  content: CtaBandContent;
  /** Optional secondary `tel:` link from `SiteConfig.contact.phone`. */
  phone?: string;
};

/**
 * CTA band — classic institutional.
 * Centered, symmetric formal composition on the inverse surface
 * with ornamental rule and generous whitespace.
 */
export function CtaBand({ content, phone }: CtaBandProps) {
  return (
    <section className="surface-inverse bg-surface-inverse py-[var(--section-y)] text-text-inverse">
      <div className="container-page flex flex-col items-center text-center">
        <span
          className="ornamental-rule ornamental-rule-short"
          style={{ borderColor: 'var(--brand-text-inverse-muted)' }}
          aria-hidden="true"
        />

        <h2 className="type-heading-2 hyphens-auto max-w-[32ch] mt-6">{content.title}</h2>

        {content.body ? (
          <p className="type-body-small mt-3 max-w-[52ch] text-text-inverse-muted">
            {content.body}
          </p>
        ) : null}

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Link href={content.cta.href} className="button-inverse w-full sm:w-auto">
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
