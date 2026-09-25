import Link from 'next/link';
import { getUiStrings } from '@/lib/content';

export default function NotFound() {
  const ui = getUiStrings();

  return (
    <div className="container-page section-y">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
        <span aria-hidden="true" className="type-numeral block text-text-muted lg:col-span-2">
          404
        </span>
        <div className="mt-6 lg:col-span-7 lg:mt-0">
          <h1 className="type-title hyphens-auto">{ui.notFound.title}</h1>
          <p className="type-body mt-6 max-w-[45ch] text-text-muted">{ui.notFound.body}</p>
          <Link href="/" className="text-link type-body-small font-semibold mt-8 inline-block">
            {ui.homeLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
