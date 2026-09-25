import type { LegalPageContent } from '@/content';
import { formatDate } from '@/lib/format';
import { Prose } from '@/components/prose';

type LegalPageProps = {
  page: LegalPageContent;
  /** `UiStrings.lastUpdatedLabel`, e.g. `Ultimo aggiornamento`. */
  lastUpdatedLabel: string;
};

/**
 * Legal stub page — classic institutional.
 * Centered title block with ornamental rules and a formal prose body.
 */
export function LegalPage({ page, lastUpdatedLabel }: LegalPageProps) {
  return (
    <div className="container-page section-y">
      <header className="flex flex-col items-center text-center">
        <span className="ornamental-rule ornamental-rule-short" aria-hidden="true" />
        <h1 className="type-title hyphens-auto max-w-[24ch] mt-6">{page.title}</h1>
        <p className="type-caption mt-3 tabular-nums text-text-muted">
          {lastUpdatedLabel}: {formatDate(page.lastUpdated)}
        </p>
        <div className="ornament-divider mt-6" aria-hidden="true">
          <span className="ornament-divider-diamond" />
        </div>
      </header>
      <div className="mt-10 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-8 lg:col-start-3">
          <Prose markdown={page.body} />
        </div>
      </div>
    </div>
  );
}
