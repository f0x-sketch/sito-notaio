import type { ReactNode } from 'react';
import type { Markdown } from '@/content';

type Block =
  | { type: 'heading'; level: number; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'hr' };

const HEADING_RE = /^(#{1,6})\s+(.+?)\s*#*\s*$/;
const HR_RE = /^(-{3,}|\*{3,}|_{3,})$/;
const LIST_ITEM_RE = /^([-*+]|\d+[.)])\s+(.*)$/;
const INLINE_RE =
  /`([^`]+)`|\[([^\]]+)\]\(([^()\s]+)\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\n]+)\*|_([^_\n]+)_/g;

function parseBlocks(markdown: string): Block[] {
  const lines = markdown.replace(/\r\n?/g, '\n').split('\n');
  const blocks: Block[] = [];
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: 'paragraph', text: paragraph.join(' ').trim() });
      paragraph = [];
    }
  };

  let i = 0;
  while (i < lines.length) {
    const trimmed = lines[i].trim();

    if (trimmed === '') {
      flushParagraph();
      i += 1;
      continue;
    }

    const heading = HEADING_RE.exec(trimmed);
    if (heading) {
      flushParagraph();
      blocks.push({ type: 'heading', level: heading[1].length, text: heading[2] });
      i += 1;
      continue;
    }

    if (HR_RE.test(trimmed)) {
      flushParagraph();
      blocks.push({ type: 'hr' });
      i += 1;
      continue;
    }

    if (trimmed.startsWith('>')) {
      flushParagraph();
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i += 1;
      }
      blocks.push({ type: 'quote', text: quoteLines.join('\n') });
      continue;
    }

    const listItem = LIST_ITEM_RE.exec(trimmed);
    if (listItem) {
      flushParagraph();
      const ordered = /\d/.test(listItem[1]);
      const items: string[] = [listItem[2]];
      i += 1;
      while (i < lines.length) {
        const next = lines[i].trim();
        if (next === '') break;
        const nextItem = LIST_ITEM_RE.exec(next);
        if (nextItem) {
          if (/\d/.test(nextItem[1]) !== ordered) break;
          items.push(nextItem[2]);
          i += 1;
          continue;
        }
        if (HEADING_RE.test(next) || HR_RE.test(next) || next.startsWith('>')) break;
        items[items.length - 1] += ` ${next}`;
        i += 1;
      }
      blocks.push({ type: 'list', ordered, items });
      continue;
    }

    paragraph.push(trimmed);
    i += 1;
  }
  flushParagraph();
  return blocks;
}

function sanitizeHref(href: string): string | null {
  if (/^(https?:\/\/|mailto:|tel:)/i.test(href)) return href;
  if (/^[/#]/.test(href)) return href;
  return null;
}

function plainText(text: string): string {
  return text.replace(/[`*_[\]()#]/g, '').trim();
}

function slugify(text: string): string {
  return plainText(text)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const inlineLinkClassName =
  'rounded-xs underline decoration-1 underline-offset-4 hover:text-accent';

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let keyIndex = 0;

  for (const match of text.matchAll(INLINE_RE)) {
    const start = match.index ?? 0;
    if (start > cursor) nodes.push(text.slice(cursor, start));
    const key = `${keyPrefix}-${keyIndex++}`;
    const [full, code, linkText, href, strongStar, strongUnder, emStar, emUnder] = match;

    if (code !== undefined) {
      nodes.push(
        <code key={key} className="rounded-xs bg-primary-tint px-1 py-0.5 font-mono text-[0.9em]">
          {code}
        </code>,
      );
    } else if (linkText !== undefined && href !== undefined) {
      const safeHref = sanitizeHref(href);
      nodes.push(
        safeHref ? (
          <a key={key} href={safeHref} className={inlineLinkClassName}>
            {renderInline(linkText, key)}
          </a>
        ) : (
          <span key={key}>{renderInline(linkText, key)}</span>
        ),
      );
    } else if (strongStar !== undefined || strongUnder !== undefined) {
      nodes.push(<strong key={key}>{renderInline(strongStar ?? strongUnder ?? '', key)}</strong>);
    } else {
      nodes.push(<em key={key}>{renderInline(emStar ?? emUnder ?? '', key)}</em>);
    }
    cursor = start + full.length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

function renderBlock(block: Block, key: string): ReactNode {
  switch (block.type) {
    case 'heading': {
      const id = slugify(block.text) || undefined;
      const content = renderInline(block.text, key);
      return block.level <= 2 ? (
        <h2 key={key} id={id} className="type-heading-2 hyphens-auto mt-12 lg:mt-16">
          {content}
        </h2>
      ) : (
        <h3 key={key} id={id} className="type-heading-3 hyphens-auto mt-10">
          {content}
        </h3>
      );
    }
    case 'paragraph':
      return (
        <p key={key} className="type-body mt-5 first:mt-0">
          {renderInline(block.text, key)}
        </p>
      );
    case 'list': {
      const items = block.items.map((item, index) => (
        <li key={`${key}-i${index}`} className="type-body">
          {renderInline(item, `${key}-i${index}`)}
        </li>
      ));
      return block.ordered ? (
        <ol key={key} className="mt-5 list-decimal space-y-2 pl-5">
          {items}
        </ol>
      ) : (
        <ul key={key} className="mt-5 list-disc space-y-2 pl-5">
          {items}
        </ul>
      );
    }
    case 'quote':
      return (
        <blockquote
          key={key}
          className="my-10 border-y-2 border-text py-8 lg:my-14 lg:py-10"
        >
          <div className="type-heading-2 hyphens-auto">
            {parseBlocks(block.text).map((inner, index) =>
              inner.type === 'paragraph' ? (
                <p key={`${key}-q${index}`} className="mt-4 first:mt-0">
                  {renderInline(inner.text, `${key}-q${index}`)}
                </p>
              ) : (
                renderBlock(inner, `${key}-q${index}`)
              ),
            )}
          </div>
        </blockquote>
      );
    case 'hr':
      return <hr key={key} className="my-10 border-0 border-t border-border" />;
  }
}

type ProseProps = {
  markdown: Markdown;
  className?: string;
};

/**
 * Markdown prose renderer. Server-only: the Markdown subset of the content
 * layer (headings, paragraphs, lists, blockquotes, rules, links, emphasis,
 * code) becomes fully typed React nodes — no raw HTML. Blockquotes render as
 * editorial pull quotes between ink rules.
 */
export function Prose({ markdown, className }: ProseProps) {
  return (
    <div className={`max-w-[var(--prose-measure)] ${className ?? ''}`}>
      {parseBlocks(markdown).map((block, index) => renderBlock(block, `b${index}`))}
    </div>
  );
}
