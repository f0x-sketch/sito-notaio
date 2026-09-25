import Image from 'next/image';
import Link from 'next/link';
import type { ImageRef } from '@/content';

type BrandLogoProps = {
  /** Public firm name; rendered as a wordmark when no logo image is configured. */
  name: string;
  logo: ImageRef | undefined;
  href: string;
  className?: string;
};

/**
 * Brand lockup: logo image when configured, display-serif wordmark text
 * otherwise (the seal monogram is not a logo fallback).
 * The link is always labelled by the firm name from `SiteConfig`.
 */
export function BrandLogo({ name, logo, href, className }: BrandLogoProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xs ${className ?? ''}`}
    >
      {logo ? (
        <>
          <Image
            src={logo.src}
            alt=""
            width={logo.width ?? 240}
            height={logo.height ?? 64}
            unoptimized={logo.src.endsWith('.svg')}
            className="h-9 w-auto"
            priority
          />
          <span className="sr-only">{name}</span>
        </>
      ) : (
        <span className="type-heading-3 text-text">{name}</span>
      )}
    </Link>
  );
}
