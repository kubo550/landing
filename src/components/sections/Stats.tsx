import { useTranslations } from 'next-intl';
import { Gauge, HeartHandshake, Rocket } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import { Container } from '../ui/Container';

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const ITEMS: Array<{ key: 'lighthouse' | 'satisfied' | 'delivery'; Icon: Icon }> = [
  { key: 'lighthouse', Icon: Gauge },
  { key: 'satisfied', Icon: HeartHandshake },
  { key: 'delivery', Icon: Rocket },
];

export function Stats() {
  const t = useTranslations('trustBar');

  return (
    <section
      aria-label={t('ariaLabel')}
      className="border-y border-[color:var(--color-border)] bg-[color:var(--color-surface)]/30 py-10 sm:py-14"
    >
      <Container>
        <ul className="grid gap-6 sm:grid-cols-3 sm:gap-8">
          {ITEMS.map(({ key, Icon }) => (
            <li
              key={key}
              className="flex items-start gap-4 sm:flex-col sm:items-center sm:gap-3 sm:text-center"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] text-[color:var(--color-accent)]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-0.5 sm:items-center">
                <span className="text-3xl font-medium tracking-tight text-[color:var(--color-fg)] sm:text-4xl">
                  {t(`${key}.value`)}
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)] sm:text-xs">
                  {t(`${key}.label`)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
