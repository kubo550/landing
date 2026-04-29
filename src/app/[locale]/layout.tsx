import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { ConsoleGreeting } from '@/components/ui/ConsoleGreeting';
import { MouseSpotlight } from '@/components/ui/MouseSpotlight';
import { siteConfig, type Locale } from '@/lib/site';

import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  const isDefault = locale === routing.defaultLocale;
  const path = isDefault ? '/' : `/${locale}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: t('title'), template: t('titleTemplate') },
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: path,
      languages: {
        'pl-PL': '/',
        'en-US': '/en',
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'pl' ? 'pl_PL' : 'en_US',
      alternateLocale: locale === 'pl' ? ['en_US'] : ['pl_PL'],
      url: `${siteConfig.url}${path}`,
      title: t('ogTitle'),
      description: t('ogDescription'),
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    icons: {
      icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    },
    formatDetection: { email: false, address: false, telephone: false },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'meta' });

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    jobTitle: siteConfig.jobTitle[locale as Locale],
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: ['Web Development', 'Next.js', 'React', 'TypeScript', 'SEO', 'Web Analytics'],
  };

  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: t('description'),
    areaServed: { '@type': 'Country', name: 'Poland' },
    address: { '@type': 'PostalAddress', addressCountry: 'PL' },
    priceRange: 'PLN 299+',
    sameAs: [siteConfig.github, siteConfig.linkedin],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-dvh font-sans`}
      >
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
            >
              Skip to content
            </a>
            <MouseSpotlight />
            {children}
            <ConsoleGreeting />
          </NextIntlClientProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </body>
    </html>
  );
}
