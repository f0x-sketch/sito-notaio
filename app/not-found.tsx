import Link from 'next/link';
import { getUiStrings } from '@/lib/content';

export default function NotFound() {
  const ui = getUiStrings();

  return (
    <div className="container-page section-y-lg">
      <div className="flex flex-col items-center text-center">
        <span className="ornamental-rule ornamental-rule-short" aria-hidden="true" />
        <h1 className="type-display hyphens-auto max-w-[20ch] mt-8">{ui.notFound.title}</h1>
        <p className="type-body mt-4 max-w-[48ch] text-text-muted">{ui.notFound.body}</p>
        <div className="ornament-divider mt-8" aria-hidden="true">
          <span className="ornament-divider-diamond" />
        </div>
        <Link href="/" className="button-primary mt-8">
          {ui.homeLabel}
        </Link>
      </div>
    </div>
  );
}
