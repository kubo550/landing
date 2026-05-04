import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { AvailabilityBadge } from '../ui/AvailabilityBadge';
import { cn } from '@/lib/cn';

const STATS = ['years', 'speed', 'response'] as const;

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="top" className="relative overflow-hidden">
      <Container className="relative py-24 sm:py-32 lg:py-40">
        <div className="flex max-w-4xl flex-col items-start gap-7">
          <AvailabilityBadge />

          <h1 className="text-balance text-[2.5rem] font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {t('titleLine1')}{' '}
            <span className="text-[color:var(--color-fg-muted)]">{t('titleHighlight')}</span>
            <br />
            <span className="text-[color:var(--color-fg-muted)]">{t('titleLine2Pre')}</span>{' '}
            <span className="font-mono text-[color:var(--color-accent)]">
              {t('titleLine2Price')}
            </span>
            <span className="text-[color:var(--color-fg-muted)]">{t('titleLine2Mid')}</span>{' '}
            <span className="font-mono text-[color:var(--color-accent)]">{t('titleLine2Time')}</span>
            <span className="text-[color:var(--color-fg-muted)]">{t('titleLine2Post')}</span>
          </h1>

          <p className="max-w-2xl text-pretty text-base text-[color:var(--color-fg-muted)] sm:text-lg md:text-xl">
            {t('subtitle')}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="#contact" size="lg">
              {t('ctaPrimary')}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#services" variant="secondary" size="lg">
              {t('ctaSecondary')}
            </Button>
          </div>

          <dl className="glass mt-6 grid w-full grid-cols-3 gap-2 rounded-2xl p-5 sm:gap-6 sm:p-7">
            {STATS.map((key, i) => (
              <div
                key={key}
                className={cn(
                  'flex flex-col gap-1.5 px-2 sm:px-4',
                  i > 0 && 'border-l border-[color:var(--color-border)]',
                )}
              >
                <dt className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)] sm:text-xs">
                  {t(`stats.${key}Label`)}
                </dt>
                <dd className="text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
                  {t(`stats.${key}Value`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
