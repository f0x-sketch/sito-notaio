import type { LegalPageContent } from '@/content';
import { formatDate } from '@/lib/format';
import { Prose } from '@/components/prose';

type LegalPageProps = {
  page: LegalPageContent;
  /** `UiStrings.lastUpdatedLabel`, e.g. `Ultimo aggiornamento`. */
  lastUpdatedLabel: string;
};

/**
 * Legal stub page: editorial title block with the last-updated meta and a
 * prose body. No CTA band, no imagery, no related content.
 */
export function LegalPage({ page, lastUpdatedLabel }: LegalPageProps) {
  return (
    <div className="container-page section-y">
      <header>
        <span className="kicker-rule" aria-hidden="true" />
        <h1 className="type-title hyphens-auto max-w-[18ch]">{page.title}</h1>
        <p className="type-caption mt-4 tabular-nums text-text-muted">
          {lastUpdatedLabel}: {formatDate(page.lastUpdated)}
        </p>
      </header>
      <div className="mt-12 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-7 lg:col-start-2">
          <Prose markdown={page.body} />
        </div>
      </div>
    </div>
  );
}
