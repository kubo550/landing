import { useTranslations } from 'next-intl';
import {
  BarChart3,
  Check,
  LayoutPanelTop,
  LifeBuoy,
  Plug,
  Search,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { cn } from '@/lib/cn';

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const SECONDARY_ITEMS: Array<{ key: 'seo' | 'analytics' | 'integrations' | 'maintenance'; Icon: Icon }> = [
  { key: 'seo', Icon: Search },
  { key: 'analytics', Icon: BarChart3 },
  { key: 'integrations', Icon: Plug },
  { key: 'maintenance', Icon: LifeBuoy },
];

export function Services() {
  const t = useTranslations('services');
  const cardFeatures = t.raw('card.features') as string[];

  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          label={t('label')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-12">
          {/* Featured card */}
          <article
            className={cn(
              'glass-strong relative overflow-hidden rounded-3xl p-7 lg:col-span-7 lg:row-span-2 lg:p-10',
              '[border-color:color-mix(in_oklab,var(--color-accent)_55%,transparent)]',
              'shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-accent)_30%,transparent),0_36px_80px_-30px_color-mix(in_oklab,var(--color-accent)_45%,transparent)]',
            )}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-accent)] opacity-15 blur-3xl"
            />

            <div className="relative flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[color:var(--color-accent)] text-[color:var(--color-accent-fg)]">
                  <LayoutPanelTop className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-accent)] px-2.5 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-widest text-[color:var(--color-accent-fg)]">
                  ★ {t('popular')}
                </span>
              </div>

              <p className="font-mono text-sm text-[color:var(--color-fg-muted)]">
                {t('card.tagline')}
              </p>

              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">
                  {t('card.title')}
                </h3>
                <p className="max-w-lg text-pretty text-[color:var(--color-fg-muted)]">
                  {t('card.description')}
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-mono text-sm uppercase tracking-wider text-[color:var(--color-fg-subtle)]">
                  {t('fromPrice')}
                </span>
                <span className="font-mono text-5xl font-medium tracking-tight text-[color:var(--color-fg)] sm:text-6xl">
                  {t('card.price')}
                </span>
                <span className="font-mono text-2xl text-[color:var(--color-fg-muted)]">
                  {t('currency')}
                </span>
              </div>

              <ul className="flex flex-col gap-2.5 border-t border-[color:var(--color-border)] pt-6">
                {cardFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-accent)]"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button href="#contact" size="lg" className="w-full sm:w-auto">
                {t('card.title')} → {t('fromPrice')} {t('card.price')} {t('currency')}
              </Button>
            </div>
          </article>

          {/* Secondary cards */}
          {SECONDARY_ITEMS.map(({ key, Icon }) => {
            const features = t.raw(`${key}.features`) as string[];
            return (
              <article
                key={key}
                className="glass group flex flex-col gap-4 rounded-2xl p-6 transition duration-300 hover:-translate-y-0.5 hover:[border-color:var(--color-accent)] lg:col-span-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] text-[color:var(--color-fg)] transition group-hover:border-[color:var(--color-accent)] group-hover:text-[color:var(--color-accent)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[color:var(--color-fg-subtle)]">
                    {t('individual')}
                  </span>
                </div>
                <h3 className="text-xl font-medium tracking-tight">{t(`${key}.title`)}</h3>
                <p className="text-sm text-[color:var(--color-fg-muted)]">
                  {t(`${key}.description`)}
                </p>
                <ul className="mt-2 flex flex-col gap-1.5 border-t border-[color:var(--color-border)] pt-4 text-sm">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-[color:var(--color-fg-muted)]">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-accent)]"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
