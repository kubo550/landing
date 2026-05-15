import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PostCard } from '@/components/blog/PostCard';
import { getAllPosts } from '@/content/blog';
import { routing } from '@/i18n/routing';
import { siteConfig, type Locale } from '@/lib/site';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });

  const path = locale === routing.defaultLocale ? '/blog' : `/${locale}/blog`;
  const title = t('metaListTitle');
  const description = t('metaListDescription');

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        'pl-PL': '/blog',
        'en-US': '/en/blog',
        'x-default': '/blog',
      },
    },
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${path}`,
      title,
      description,
      locale: locale === 'pl' ? 'pl_PL' : 'en_US',
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const typedLocale = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'blog' });

  const posts = getAllPosts();
  const localePrefix = typedLocale === 'pl' ? '' : `/${typedLocale}`;

  return (
    <>
      <Navbar variant="subpage" />
      <main id="main" className="pb-24 pt-12 sm:pt-16">
        <Container>
          <SectionHeading
            label={t('label')}
            title={t('title')}
            subtitle={t('subtitle')}
            align="left"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {posts.length === 0 ? (
              <p className="text-[color:var(--color-fg-muted)]">{t('empty')}</p>
            ) : (
              posts.map((post) => (
                <PostCard
                  key={post.slug}
                  post={post}
                  locale={typedLocale}
                  href={`${localePrefix}/blog/${post.slug}`}
                  readingLabel={t('readingSuffix')}
                  readMoreLabel={t('readMore')}
                />
              ))
            )}
          </div>
        </Container>
      </main>
      <Footer variant="subpage" />
    </>
  );
}
