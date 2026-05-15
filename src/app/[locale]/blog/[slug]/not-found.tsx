import { ArrowLeft } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';

import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default async function BlogPostNotFound() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'blog' });
  const blogHref = locale === 'pl' ? '/blog' : `/${locale}/blog`;

  return (
    <>
      <Navbar variant="subpage" />
      <main id="main" className="flex min-h-[60vh] items-center pb-24 pt-16">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-start gap-6 text-left">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-fg-muted)]">
              404
            </p>
            <h1 className="text-balance text-3xl font-medium tracking-tight text-[color:var(--color-fg)] sm:text-4xl">
              {t('notFoundTitle')}
            </h1>
            <p className="text-pretty text-[color:var(--color-fg-muted)]">{t('notFoundBody')}</p>
            <Button href={blogHref} size="md">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {t('backToList')}
            </Button>
          </div>
        </Container>
      </main>
      <Footer variant="subpage" />
    </>
  );
}
