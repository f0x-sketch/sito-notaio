import Link from 'next/link';
import { getUiStrings } from '@/lib/content';

export default function NotFound() {
  const ui = getUiStrings();

  return (
    <div className="container-page section-y-lg">
      <span aria-hidden="true" className="type-index-lg mb-6 block text-primary">
        404
      </span>
      <span className="kicker-rule" aria-hidden="true" />
      <h1 className="type-display hyphens-auto max-w-[12ch]">{ui.notFound.title}</h1>
      <p className="type-body mt-6 max-w-[45ch] text-text-muted">{ui.notFound.body}</p>
      <Link href="/" className="button-primary mt-10 inline-flex">
        {ui.homeLabel}
      </Link>
    </div>
  );
}
