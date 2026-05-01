import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';

import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  const t = useTranslations('about');
  const benefits = t.raw('benefits') as string[];

  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading label={t('label')} title={t('title')} />
            <div className="mt-8 flex flex-col gap-5 text-pretty text-base text-[color:var(--color-fg-muted)] sm:text-lg">
              <p>{t('intro')}</p>
              <p>{t('intro2')}</p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="glass-strong sticky top-24 flex flex-col gap-6 rounded-2xl p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-accent)] font-mono text-lg font-bold tracking-tight text-[color:var(--color-accent-fg)]">
                  jk
                </span>
                <div className="flex flex-col">
                  <span className="text-base font-medium">Jakub Kurdziel</span>
                  <span className="font-mono text-xs text-[color:var(--color-fg-muted)]">
                    @kubo550
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-[color:var(--color-border)] pt-5">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
                  {t('benefitsLabel')}
                </span>
                <ul className="flex flex-col gap-2.5">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-accent)]"
                        aria-hidden="true"
                      />
                      <span className="text-[color:var(--color-fg)]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-1.5 border-t border-[color:var(--color-border)] pt-5">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
                  {t('stackHintLabel')}
                </span>
                <span className="font-mono text-xs text-[color:var(--color-fg-muted)]">
                  {t('stackHint')}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
