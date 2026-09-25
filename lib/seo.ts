import type { Metadata, Viewport } from 'next';
import { site } from '@/content';
import type { ImageRef, Seo } from '@/content';

function absoluteUrl(path: string | undefined, siteUrl: string | undefined): string | undefined {
  if (!path) return undefined;
  if (!siteUrl) return path;
  return new URL(path, siteUrl).toString();
}

function ogImages(image: ImageRef | undefined, siteUrl: string | undefined) {
  if (!image) return undefined;
  return [{ url: absoluteUrl(image.src, siteUrl) ?? image.src, alt: image.alt }];
}

function resolveTitle(title: string | undefined, template: string, defaultTitle: string): string {
  if (!title) return defaultTitle;
  return template.includes('%s') ? template.replace('%s', title) : title;
}

/**
 * Builds root/page metadata from `SiteConfig.seo`. The root layout calls it with
 * no arguments (site defaults + title template); pages pass their content
 * `Seo` block so page titles are composed through the template.
 */
export function buildMetadata(overrides: Seo = {}): Metadata {
  const { seo, branding, identity } = site.config;
  const { title } = overrides;
  const description = overrides.description ?? seo.defaultDescription;
  const ogImage = overrides.ogImage ?? seo.ogImage ?? branding.ogImage;
  const resolvedTitle = resolveTitle(title, seo.titleTemplate, seo.defaultTitle);

  return {
    ...(title === undefined
      ? { title: { default: seo.defaultTitle, template: seo.titleTemplate } }
      : { title }),
    description,
    ...(seo.siteUrl ? { metadataBase: new URL(seo.siteUrl) } : {}),
    ...(overrides.noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: 'website',
      locale: 'it_IT',
      title: resolvedTitle,
      description,
      siteName: identity.name,
      images: ogImages(ogImage, seo.siteUrl),
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description,
      images: ogImages(ogImage, seo.siteUrl),
      ...(seo.twitterHandle ? { creator: seo.twitterHandle } : {}),
    },
    icons: { icon: branding.favicon.src },
  };
}

export function siteViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: site.config.branding.colors.neutral.surfaceRaised,
  };
}
