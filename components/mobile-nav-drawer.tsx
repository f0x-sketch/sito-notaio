'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import type { NavLink } from '@/content';

type MobileNavDrawerProps = {
  open: boolean;
  onClose: () => void;
  items: NavLink[];
  cta: NavLink | undefined;
  contact: { phone: string; email: string };
  currentPath: string;
  panelId: string;
  navLabel: string;
};

function isCurrent(href: string, pathname: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Mobile navigation panel — classic institutional.
 * Stacked nav links with classical hairline dividers and formal contact block.
 * Focus is trapped while open.
 */
export function MobileNavDrawer({
  open,
  onClose,
  items,
  cta,
  contact,
  currentPath,
  panelId,
  navLabel,
}: MobileNavDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
      return;
    }
    if (event.key !== 'Tab') return;

    const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    if (!focusables || focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      id={panelId}
      ref={panelRef}
      inert={!open}
      onKeyDown={handleKeyDown}
      className={`absolute inset-x-0 top-full z-40 min-h-[calc(100dvh-5rem)] border-b border-border bg-surface-raised shadow-elevation-2 transition-[opacity,transform] duration-150 ease-standard lg:hidden ${
        open
          ? 'pointer-events-auto translate-x-0 opacity-100'
          : 'pointer-events-none invisible translate-x-2 opacity-0'
      }`}
    >
      <nav aria-label={navLabel} className="flex min-h-[calc(100dvh-5rem)] flex-col">
        <ul className="border-b border-border">
          {items.map((item, index) => (
            <li key={item.href} className="border-t border-border first:border-t-0">
              <Link
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                aria-current={isCurrent(item.href, currentPath) ? 'page' : undefined}
                onClick={onClose}
                className={`type-heading-3 flex min-h-12 items-center px-[var(--page-gutter)] py-3 ${
                  isCurrent(item.href, currentPath)
                    ? 'border-b-2 border-accent text-primary font-semibold'
                    : 'text-text hover:text-primary hover:underline'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-4 px-[var(--page-gutter)] py-8">
          <span className="ornamental-rule ornamental-rule-short" aria-hidden="true" />
          <a
            href={`tel:${contact.phone.replace(/\s+/g, '')}`}
            className="type-body-small tabular-nums rounded-xs text-text underline underline-offset-4 hover:text-primary"
          >
            {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="type-body-small rounded-xs text-text underline underline-offset-4 hover:text-primary"
          >
            {contact.email}
          </a>
          {cta ? (
            <Link
              href={cta.href}
              onClick={onClose}
              className="button-primary w-full"
            >
              {cta.label}
            </Link>
          ) : null}
        </div>
      </nav>
    </div>
  );
}
