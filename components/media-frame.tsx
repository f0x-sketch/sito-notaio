import Image from 'next/image';
import type { ReactNode } from 'react';
import type { ImageRef } from '@/content';
import { SealMonogram } from '@/components/seal-monogram';

type MediaFrameProps = {
  /** Content-layer image; when omitted the fallback panel is rendered. */
  image?: ImageRef;
  /** Tailwind aspect utilities, e.g. `aspect-[4/5]` or `aspect-[4/3] lg:aspect-[4/5]`. */
  aspectClassName?: string;
  /** Panel rendered when no image is configured (defaults to the seal monogram). */
  fallback?: ReactNode;
  /** Force empty alt text (decorative media). */
  decorative?: boolean;
  priority?: boolean;
  sizes?: string;
  /** `rounded` = square editorial frames; `circle` = avatar chips. */
  shape?: 'rounded' | 'circle';
  /** Fill the positioned parent instead of reserving an aspect ratio. */
  fill?: boolean;
  className?: string;
};

function isSvg(src: string): boolean {
  return src.endsWith('.svg');
}

/**
 * Media frame: either reserves its final aspect ratio (no layout shift) or
 * fills a positioned parent. Crops with `object-fit: cover`, falls back to a
 * monogram panel at the same footprint when the image is not configured.
 * Square corners throughout — editorial treatment.
 */
export function MediaFrame({
  image,
  aspectClassName,
  fallback,
  decorative,
  priority,
  sizes,
  shape = 'rounded',
  fill,
  className,
}: MediaFrameProps) {
  const frameClassName = fill
    ? `absolute inset-0 overflow-hidden bg-primary-tint ${className ?? ''}`
    : `relative overflow-hidden bg-primary-tint ${
        shape === 'circle' ? 'rounded-full' : ''
      } ${aspectClassName ?? ''} ${className ?? ''}`;

  if (!image) {
    return (
      <div className={frameClassName}>
        <div className="absolute inset-0 flex items-center justify-center">
          {fallback ?? <SealMonogram className="h-20 w-20" />}
        </div>
      </div>
    );
  }

  return (
    <div className={frameClassName}>
      <Image
        src={image.src}
        alt={decorative ? '' : image.alt ?? ''}
        fill
        sizes={sizes ?? '100vw'}
        priority={priority}
        unoptimized={isSvg(image.src)}
        className="object-cover"
      />
    </div>
  );
}
