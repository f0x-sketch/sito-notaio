import type { PostalAddress } from '@/content';

const dateFormatter = new Intl.DateTimeFormat('it-IT', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

/** Formats a `YYYY-MM-DD` ISO date as Italian long form (timezone-safe). */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  if (!year || !month || !day) return iso;
  return dateFormatter.format(new Date(year, month - 1, day));
}

/** Multi-line display lines for a postal address. */
export function addressLines(address: PostalAddress): string[] {
  return [
    address.street,
    `${address.zip} ${address.city} (${address.province})`,
    address.country,
  ];
}

/** `tel:` href for a displayed phone number. */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/\s+/g, '')}`;
}
