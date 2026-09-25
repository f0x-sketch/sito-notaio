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
      <section className="container-page py-12 lg:py-[var(--section-y)]">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-12">
          <div className="mx-auto w-full max-w-[320px] lg:col-span-4 lg:mx-0 lg:max-w-[320px]">
            <MediaFrame
              image={member.photo}
              aspectClassName="aspect-[4/5]"
              fallback={<SealMonogram className="h-20 w-20" label={member.name} />}
              sizes="320px"
            />
          </div>
          <div className="relative lg:col-span-7 lg:col-start-6 lg:pl-8">
            <span className="ornamental-rule ornamental-rule-short mb-5" aria-hidden="true" />
            <h1 className="type-title hyphens-auto">{member.name}</h1>
            <p className="type-caption mt-2 text-accent">{memberCaptionLine(member)}</p>
            {member.specializations.length > 0 ? (
              <p className="type-caption mt-3 text-text-muted">
                {member.specializations.join(' · ')}
              </p>
            ) : null}
            {lede ? <p className="type-body mt-4 max-w-[48ch] text-text-muted">{lede}</p> : null}
            {member.email ? (
              <p className="mt-5">
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
              <Prose markdown={rest} dropCap />
            </div>
          </div>
        </section>
      ) : null}

      {posts.length > 0 ? (
        <section className="container-page section-y">
          <SectionHeader
            title={fillTemplate(ui.postsByAuthorTitle, { name: member.name })}
          />
          <div className="mt-8 grid gap-[var(--card-gap)] md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} authorName={member.name} />
            ))}
          </div>
        </section>
      ) : null}

      <CtaBand content={ctaBand} phone={config.contact.phone} />
    </>
  );
}
