import type { LegalPageContent } from '@/content';
import { formatDate } from '@/lib/format';
import { Prose } from '@/components/prose';

type LegalPageProps = {
  page: LegalPageContent;
  /** `UiStrings.lastUpdatedLabel`, e.g. `Ultimo aggiornamento`. */
  lastUpdatedLabel: string;
};

/**
 * Legal stub page (DESIGN.md §6.10): title block with the last-updated meta
 * and a prose body. No CTA band, no imagery, no related content.
 */
export function LegalPage({ page, lastUpdatedLabel }: LegalPageProps) {
  return (
    <div className="container-page section-y">
      <header className="relative lg:pl-8">
        <span className="margin-rule" aria-hidden="true" />
        <h1 className="type-title hyphens-auto">{page.title}</h1>
        <p className="type-caption mt-2 tabular-nums text-text-muted">
          {lastUpdatedLabel}: {formatDate(page.lastUpdated)}
        </p>
      </header>
      <div className="mt-8 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-7 lg:col-start-2">
          <Prose markdown={page.body} />
        </div>
      </div>
    </div>
  );
}
