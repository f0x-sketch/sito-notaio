'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Crumb = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  /** Route-tree label map built server-side (`lib/nav.ts`). */
  labels: Record<string, string>;
  homeLabel: string;
  navLabel: string;
};

function humanize(segment: string): string {
  const words = segment.replace(/-/g, ' ');
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function buildCrumbs(
  pathname: string,
  labels: Record<string, string>,
  homeLabel: string,
): Crumb[] {
  const segments = pathname.split('/').filter((segment) => segment && !segment.startsWith('_'));
  const crumbs: Crumb[] = [{ label: homeLabel, href: '/' }];

  let href = '';
  for (const segment of segments) {
    href += `/${segment}`;
    crumbs.push({ label: labels[href] ?? humanize(segment), href });
  }

  // Keep at most 4 items (DESIGN.md §5.4): drop intermediate levels.
  if (crumbs.length > 4) {
    return [crumbs[0], { label: '…', href: '' }, ...crumbs.slice(-2)];
  }
  return crumbs;
}

/**
 * Route-driven breadcrumbs — classic institutional.
 * Centered, serif caption with `·` separators and classical rhythm.
 */
export function Breadcrumbs({ labels, homeLabel, navLabel }: BreadcrumbsProps) {
  const pathname = usePathname();
  const crumbs = buildCrumbs(pathname, labels, homeLabel);

  // Hide on the homepage and on paths that do not match any known route.
  if (crumbs.length <= 1) return null;
  const firstSegment = crumbs[1]?.href ?? '';
  if (firstSegment && !(firstSegment in labels) && !Object.keys(labels).some((k) => k.startsWith(`${firstSegment}/`))) {
    return null;
  }

  return (
    <nav aria-label={navLabel} className="container-page pt-8">
      <ol className="type-caption flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-text-muted">
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;
          return (
            <li key={`${crumb.href}-${crumb.label}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-border-strong">
                  ·
                </span>
              ) : null}
              {last ? (
                <span aria-current="page" className="text-text">
                  {crumb.label}
                </span>
              ) : crumb.href ? (
                <Link
                  href={crumb.href}
                  className="rounded-xs text-text-muted underline-offset-4 hover:text-primary hover:underline"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span aria-hidden="true">{crumb.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
