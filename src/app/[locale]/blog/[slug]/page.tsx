import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { PostBody } from '@/components/blog/PostBody';
import { PostMeta } from '@/components/blog/PostMeta';
import { PostCard } from '@/components/blog/PostCard';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/content/blog';
import { routing } from '@/i18n/routing';
import { siteConfig, type Locale } from '@/lib/site';

export function generateStaticParams() {
  const posts = getAllPosts();
  return routing.locales.flatMap((locale) =>
    posts.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const typedLocale = locale as Locale;
  const localized = post.content[typedLocale] ?? post.content.pl;
  const localePrefix = typedLocale === 'pl' ? '' : `/${typedLocale}`;
  const path = `${localePrefix}/blog/${post.slug}`;

  return {
    title: localized.title,
    description: localized.lead,
    alternates: {
      canonical: path,
      languages: {
        'pl-PL': `/blog/${post.slug}`,
        'en-US': `/en/blog/${post.slug}`,
        'x-default': `/blog/${post.slug}`,
      },
    },
    openGraph: {
      type: 'article',
      url: `${siteConfig.url}${path}`,
      title: localized.title,
      description: localized.lead,
      locale: typedLocale === 'pl' ? 'pl_PL' : 'en_US',
      siteName: siteConfig.name,
      publishedTime: post.date,
      tags: localized.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: localized.title,
      description: localized.lead,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  setRequestLocale(locale);
  const typedLocale = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'blog' });
  const localized = post.content[typedLocale];

  const localePrefix = typedLocale === 'pl' ? '' : `/${typedLocale}`;
  const blogHref = `${localePrefix}/blog`;
  const contactHref = `${localePrefix || '/'}#contact`;
  const related = getRelatedPosts(post.slug, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: localized.title,
    description: localized.lead,
    datePublished: post.date,
    inLanguage: typedLocale === 'pl' ? 'pl-PL' : 'en-US',
    keywords: localized.tags.join(', '),
    author: { '@type': 'Person', name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}${localePrefix}/blog/${post.slug}`,
  };

  return (
    <>
      <Navbar variant="subpage" />
      <main id="main" className="pb-24 pt-12 sm:pt-16">
        <Container>
          <a
            href={blogHref}
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-fg-muted)] transition hover:text-[color:var(--color-fg)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            {t('backToList')}
          </a>

          <article className="mx-auto mt-8 max-w-3xl">
            <header className="flex flex-col gap-5">
              <PostMeta
                date={post.date}
                readingMinutes={post.readingMinutes}
                locale={typedLocale}
                readingLabel={t('readingSuffix')}
                tags={localized.tags}
              />
              <h1 className="text-balance text-3xl font-medium tracking-tight text-[color:var(--color-fg)] sm:text-4xl md:text-5xl">
                {localized.title}
              </h1>
              <p className="text-pretty text-lg text-[color:var(--color-fg-muted)]">
                {localized.lead}
              </p>
            </header>

            <div className="mt-12">
              <PostBody blocks={localized.blocks} />
            </div>

            <aside className="glass mt-16 flex flex-col gap-4 rounded-2xl p-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-1">
                <h2 className="text-balance text-xl font-medium tracking-tight text-[color:var(--color-fg)]">
                  {t('ctaTitle')}
                </h2>
                <p className="text-pretty text-sm text-[color:var(--color-fg-muted)]">
                  {t('ctaSubtitle')}
                </p>
              </div>
              <Button href={contactHref} size="lg" className="shrink-0">
                {t('ctaButton')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </aside>
          </article>

          {related.length > 0 && (
            <section className="mt-20">
              <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-fg-muted)]">
                {t('relatedTitle')}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {related.map((rel) => (
                  <PostCard
                    key={rel.slug}
                    post={rel}
                    locale={typedLocale}
                    href={`${localePrefix}/blog/${rel.slug}`}
                    readingLabel={t('readingSuffix')}
                    readMoreLabel={t('readMore')}
                  />
                ))}
              </div>
            </section>
          )}
        </Container>
      </main>
      <Footer variant="subpage" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
