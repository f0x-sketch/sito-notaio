import { getSiteConfig } from '@/lib/content';

/**
 * Placeholder route: page bodies (homepage included) are implemented by a
 * separate sub-issue. This exists so the shell renders on a real route.
 */
export default function HomePage() {
  const { identity } = getSiteConfig();

  return (
    <div className="container-page section-y">
      <h1 className="type-title">{identity.name}</h1>
      <p className="type-body-small mt-6 text-text-muted">
        Pagina segnaposto. I contenuti di questa pagina saranno implementati in
        una fase successiva.
      </p>
    </div>
  );
}
