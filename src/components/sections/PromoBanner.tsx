'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight, Sparkles } from 'lucide-react';

import { Container } from '../ui/Container';

function getTimeLeft() {
  const now = new Date();
  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999);
  const ms = Math.max(0, endOfDay.getTime() - now.getTime());
  const totalSec = Math.floor(ms / 1000);
  return {
    hours: Math.floor(totalSec / 3600),
    minutes: Math.floor((totalSec % 3600) / 60),
    seconds: totalSec % 60,
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export function PromoBanner() {
  const t = useTranslations('promo');
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const countdown = time ? `${pad(time.hours)}:${pad(time.minutes)}:${pad(time.seconds)}` : '--:--:--';

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div
          className={
            'glass-strong relative overflow-hidden rounded-3xl p-7 sm:p-10 ' +
            '[border-color:color-mix(in_oklab,var(--color-accent)_55%,transparent)] ' +
            'shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-accent)_30%,transparent),0_36px_80px_-30px_color-mix(in_oklab,var(--color-accent)_45%,transparent)]'
          }
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-accent)] opacity-15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[color:var(--color-accent)] opacity-10 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[color:var(--color-accent)] px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-widest text-[color:var(--color-accent-fg)]">
                <Sparkles className="h-3 w-3" aria-hidden="true" /> {t('label')}
              </span>
              <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">{t('title')}</h3>
              <p className="max-w-lg text-pretty text-[color:var(--color-fg-muted)]">
                {t('subtitle')}
              </p>
              <ul className="mt-1 flex flex-col gap-1.5 text-sm text-[color:var(--color-fg-muted)]">
                <li className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-accent)]"
                  />
                  {t('feature1')}
                </li>
                <li className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-accent)]"
                  />
                  {t('feature2')}
                </li>
                <li className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-accent)]"
                  />
                  {t('feature3')}
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end lg:text-right">
              <div className="flex flex-wrap items-baseline gap-3 lg:justify-end">
                <span className="font-mono text-2xl text-[color:var(--color-fg-subtle)] line-through">
                  {t('originalPrice')} {t('currency')}
                </span>
                <span className="font-mono text-5xl font-medium tracking-tight text-[color:var(--color-accent)] sm:text-6xl">
                  {t('promoPrice')}
                </span>
                <span className="font-mono text-2xl text-[color:var(--color-fg-muted)]">
                  {t('currency')}
                </span>
              </div>

              <p className="font-mono text-sm font-medium text-[color:var(--color-accent)]">
                {t('savings')}
              </p>

              <p
                className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]"
                suppressHydrationWarning
              >
                {t('validUntil')} ·{' '}
                <span className="text-[color:var(--color-accent)]">{countdown}</span>
              </p>

              <a
                href="#contact"
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[color:var(--color-accent)] px-6 text-sm font-medium text-[color:var(--color-accent-fg)] shadow-[0_8px_24px_-8px_color-mix(in_oklab,var(--color-accent)_60%,transparent)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-accent-hover)]"
              >
                {t('cta')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
