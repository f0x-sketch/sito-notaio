import Image from 'next/image';
import type { ReactNode } from 'react';
import type { ImageRef } from '@/content';
import { SealMonogram } from '@/components/seal-monogram';

type MediaFrameProps = {
  /** Content-layer image; when omitted the fallback panel is rendered. */
  image?: ImageRef;
  /** Tailwind aspect utilities, e.g. `aspect-[4/5]` or `aspect-[4/3] lg:aspect-[4/5]`. */
  aspectClassName: string;
  /** Panel rendered when no image is configured (defaults to the seal monogram). */
  fallback?: ReactNode;
  /** Force empty alt text (decorative media). */
  decorative?: boolean;
  priority?: boolean;
  sizes?: string;
  /** `rounded` = small radius (cards, photos); `circle` = avatar chips. */
  shape?: 'rounded' | 'circle';
  className?: string;
};

function isSvg(src: string): boolean {
  return src.endsWith('.svg');
}

/**
 * Fixed-aspect media frame (DESIGN.md §3 / §8): always reserves its final
 * aspect ratio (no layout shift), crops with `object-fit: cover`, and falls
 * back to a monogram panel at the same ratio when the image is not configured.
 */
export function MediaFrame({
  image,
  aspectClassName,
  fallback,
  decorative,
  priority,
  sizes,
  shape = 'rounded',
  className,
}: MediaFrameProps) {
  const frameClassName = `relative overflow-hidden bg-primary-tint ${
    shape === 'circle' ? 'rounded-full' : 'rounded-sm'
  } ${aspectClassName} ${className ?? ''}`;

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
