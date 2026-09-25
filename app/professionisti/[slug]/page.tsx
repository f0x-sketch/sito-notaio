import { notFound } from 'next/navigation';
import {
  getPostsByAuthor,
  getSite,
  getSiteConfig,
  getTeamMemberBySlug,
  getTeamMembers,
  getUiStrings,
} from '@/lib/content';
import { buildPageMetadata } from '@/lib/seo';
import { splitMarkdownLede, fillTemplate } from '@/lib/text';
import { CtaBand } from '@/components/cta-band';
import { MediaFrame } from '@/components/media-frame';
import { PostCard } from '@/components/post-card';
import { Prose } from '@/components/prose';
import { SectionHeader } from '@/components/section-header';
import { SealMonogram } from '@/components/seal-monogram';
import { memberCaptionLine } from '@/components/team-card';

const { ctaBand } = getSite().pages;

type Props = { params: Promise<{ slug: string }> };

/* Content is build-time static: unknown slugs must 404 (no runtime fallback). */
export const dynamicParams = false;

export function generateStaticParams() {
  return getTeamMembers().map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();
  return buildPageMetadata(member.seo, { title: member.name });
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();

  const config = getSiteConfig();
  const ui = getUiStrings();
  const posts = getPostsByAuthor(member.slug);
  const { lede, rest } = splitMarkdownLede(member.bio);

  return (
    <>
      <section className="container-page py-14 lg:py-[var(--section-y)]">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-12">
          <div className="mx-auto w-full max-w-[320px] lg:col-span-4 lg:mx-0 lg:max-w-none">
            <MediaFrame
              image={member.photo}
              aspectClassName="aspect-[4/5]"
              fallback={<SealMonogram className="h-20 w-20" label={member.name} />}
              sizes="(min-width: 1024px) 30vw, 320px"
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6 lg:self-center lg:pr-10">
            <p className="type-label text-primary">{memberCaptionLine(member)}</p>
            <span className="kicker-rule" aria-hidden="true" />
            <h1 className="type-title hyphens-auto">{member.name}</h1>
            {member.specializations.length > 0 ? (
              <p className="type-label mt-4 text-text-muted">
                {member.specializations.join(' · ')}
              </p>
            ) : null}
            {lede ? <p className="type-body mt-5 max-w-[45ch] text-text-muted">{lede}</p> : null}
            {member.email ? (
              <p className="mt-6">
                <a href={`mailto:${member.email}`} className="text-link type-body-small">
                  {member.email}
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {rest ? (
        <section className="container-page section-y">
          <div className="lg:grid lg:grid-cols-12">
            <div className="lg:col-span-7 lg:col-start-2">
              <Prose markdown={rest} />
            </div>
          </div>
        </section>
      ) : null}

      {posts.length > 0 ? (
        <section className="container-page section-y">
          <SectionHeader
            title={fillTemplate(ui.postsByAuthorTitle, { name: member.name })}
          />
          <ol className="mt-8">
            {posts.map((post, index) => (
              <li key={post.slug}>
                <PostCard post={post} authorName={member.name} index={index + 1} />
              </li>
            ))}
            <li aria-hidden="true" className="border-t border-border" />
          </ol>
        </section>
      ) : null}

      <CtaBand content={ctaBand} phone={config.contact.phone} />
    </>
  );
}
