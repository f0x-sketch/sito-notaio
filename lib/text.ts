/**
 * Splits a Markdown body into its leading paragraph ("lede") and the rest.
 * Headings, lists, quotes and rules never become the lede — the whole body is
 * returned as `rest` in that case.
 */
export function splitMarkdownLede(markdown: string): { lede: string; rest: string } {
  const blocks = markdown.split(/\n{2,}/);
  const first = (blocks[0] ?? '').trim();
  const isLede =
    first.length > 0 &&
    !first.startsWith('#') &&
    !first.startsWith('>') &&
    !/^([-*+]|\d+[.)])\s/.test(first) &&
    !/^(-{3,}|\*{3,}|_{3,})$/.test(first);

  if (!isLede) return { lede: '', rest: markdown };
  return { lede: first, rest: blocks.slice(1).join('\n\n').trim() };
}

/** Replaces the `{name}` placeholder used by section titles. */
export function fillTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
