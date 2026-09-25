import type { CSSProperties } from 'react';
import type { SiteConfig } from '@/content';

/** Reserved semantic roles, used when a firm omits them. */
const SEMANTIC_DEFAULTS = {
  success: '#2F6B4F',
  warning: '#8A6D1F',
  error: '#9B2C2C',
} as const;

/**
 * The boilerplate's self-hosted defaults (`next/font` variables set on <html>
 * by the root layout). When a firm's `TypographyConfig` asks for one of these
 * family names, the stack is rewritten to prefer the self-hosted files while
 * keeping the configured stack as fallback; any other family is used verbatim.
 */
const SELF_HOSTED_FAMILIES: Record<string, string> = {
  Fraunces: 'var(--font-serif-default, "Fraunces")',
  Archivo: 'var(--font-sans-default, "Archivo")',
};

function resolveFontStack(stack: string): string {
  return Object.entries(SELF_HOSTED_FAMILIES).reduce((acc, [family, mapped]) => {
    const pattern = new RegExp(`(['"])${family}\\1|\\b${family}\\b`);
    return acc.replace(pattern, mapped);
  }, stack);
}

function hexToRgba(hex: string, alpha: number): string {
  const value = hex.replace('#', '');
  const full =
    value.length === 3
      ? value
          .split('')
          .map((char) => char + char)
          .join('')
      : value;
  const number = Number.parseInt(full, 16);
  const r = (number >> 16) & 255;
  const g = (number >> 8) & 255;
  const b = number & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Maps `SiteConfig.branding` onto the named design roles as CSS custom
 * properties. Components and utilities consume roles (e.g. `bg-surface`,
 * `text-primary`) via the Tailwind theme — never raw values.
 */
export function themeVariables(config: SiteConfig): CSSProperties {
  const { colors, typography } = config.branding;
  const { neutral } = colors;
  const semantic = colors.semantic ?? SEMANTIC_DEFAULTS;

  const textInverse = neutral.textInverse ?? neutral.surface;
  const textInverseMuted = neutral.textInverseMuted ?? textInverse;

  const variables: Record<string, string> = {
    '--brand-primary': colors.primary.base,
    '--brand-primary-strong': colors.primary.strong ?? colors.primary.base,
    '--brand-primary-tint': colors.primary.tint ?? colors.primary.base,
    '--brand-primary-on': colors.primary.onBase ?? neutral.surfaceRaised,
    '--brand-accent': colors.accent.base,
    '--brand-accent-strong': colors.accent.strong ?? colors.accent.base,
    '--brand-accent-tint': colors.accent.tint ?? colors.primary.tint ?? colors.accent.base,
    '--brand-surface': neutral.surface,
    '--brand-surface-raised': neutral.surfaceRaised,
    '--brand-surface-inverse': neutral.surfaceInverse,
    '--brand-text': neutral.text,
    '--brand-text-muted': neutral.textMuted,
    '--brand-text-inverse': textInverse,
    '--brand-text-inverse-muted': textInverseMuted,
    '--brand-border': neutral.border,
    '--brand-border-strong': neutral.borderStrong,
    '--brand-focus': colors.focus ?? colors.accent.base,
    '--brand-success': semantic.success,
    '--brand-warning': semantic.warning,
    '--brand-error': semantic.error,
    '--brand-font-display': resolveFontStack(typography.heading.family),
    '--brand-font-body': resolveFontStack(typography.body.family),
    '--brand-shadow-1': `0 1px 0 ${neutral.border}, 0 8px 24px ${hexToRgba(neutral.surfaceInverse, 0.06)}`,
    '--brand-shadow-2': `0 16px 48px ${hexToRgba(neutral.surfaceInverse, 0.16)}`,
  };

  if (typography.mono) {
    variables['--brand-font-mono'] = resolveFontStack(typography.mono.family);
  }
  if (typography.baseSizePx) {
    variables['--brand-base-size'] = `${typography.baseSizePx}px`;
  }

  return variables as CSSProperties;
}
