import Link from 'next/link';
import { getUiStrings } from '@/lib/content';

export default function NotFound() {
  const ui = getUiStrings();

  return (
    <div className="container-page section-y">
      <div className="relative lg:pl-8">
        <span className="margin-rule" aria-hidden="true" />
        <h1 className="type-title hyphens-auto">{ui.notFound.title}</h1>
        <p className="type-body mt-4 max-w-[45ch] text-text-muted">{ui.notFound.body}</p>
        <Link href="/" className="text-link type-body-small font-semibold mt-6 inline-block">
          {ui.homeLabel}
        </Link>
      </div>
    </div>
  );
}
