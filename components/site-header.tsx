'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ImageRef, NavLink } from '@/content';
import { BrandLogo } from '@/components/brand-logo';
import { MobileNavDrawer } from '@/components/mobile-nav-drawer';

type SiteHeaderProps = {
  brand: { name: string; logo: ImageRef | undefined };
  navItems: NavLink[];
  cta: NavLink | undefined;
  contact: { phone: string; email: string };
  navLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  mobileNavLabel: string;
};

const DRAWER_ID = 'mobile-nav-drawer';

function isCurrent(href: string, pathname: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Compact sticky site header (DESIGN.md §5.1): brand lockup, single-line
 * desktop nav in tracked labels, contact CTA, and the mobile menu toggle.
 * A hairline elevation appears after ~24px of scroll.
 */
export function SiteHeader({
  brand,
  navItems,
  cta,
  contact,
  navLabel,
  openMenuLabel,
  closeMenuLabel,
  mobileNavLabel,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [previousPathname, setPreviousPathname] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);

  if (previousPathname !== pathname) {
    setPreviousPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function closeDrawer() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  return (
    <header
      className={`sticky top-0 z-50 overflow-x-clip border-b border-border bg-surface transition-shadow duration-150 ${
        scrolled ? 'shadow-elevation-1' : ''
      }`}
    >
      <div className="container-page flex h-14 items-center justify-between lg:h-16">
        <BrandLogo name={brand.name} logo={brand.logo} href="/" />

        <nav aria-label={navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const current = isCurrent(item.href, pathname);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? 'page' : undefined}
                    className={`type-label flex h-16 items-center rounded-xs ${
                      current ? 'text-primary' : 'text-text-muted hover:text-text'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {cta ? (
          <Link href={cta.href} className="button-primary hidden lg:inline-flex">
            {cta.label}
          </Link>
        ) : null}

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls={DRAWER_ID}
          aria-label={open ? closeMenuLabel : openMenuLabel}
          onClick={() => (open ? closeDrawer() : setOpen(true))}
          className="-mr-3 flex h-11 w-11 items-center justify-center rounded-xs text-text hover:bg-primary-tint lg:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <MobileNavDrawer
        open={open}
        onClose={closeDrawer}
        items={navItems}
        cta={cta}
        contact={contact}
        currentPath={pathname}
        panelId={DRAWER_ID}
        navLabel={mobileNavLabel}
      />
    </header>
  );
}
