import { notFound } from 'next/navigation';
import { getSite, getUiStrings } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/legal-page';

const page = getSite().pages.legal.find((entry) => entry.slug === 'cookie');

export const metadata = buildMetadata(page ? { title: page.title } : {});

export default function CookiePage() {
  if (!page) notFound();
  return <LegalPage page={page} lastUpdatedLabel={getUiStrings().lastUpdatedLabel} />;
}
