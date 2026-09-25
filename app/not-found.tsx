import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-page section-y">
      <h1 className="type-title">Pagina non trovata</h1>
      <p className="type-body mt-4">La pagina richiesta non è disponibile.</p>
      <Link href="/" className="type-body-small mt-6 inline-block rounded-xs text-primary underline underline-offset-4">
        Torna alla home
      </Link>
    </div>
  );
}
