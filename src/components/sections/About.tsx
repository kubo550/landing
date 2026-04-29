import { useTranslations } from 'next-intl';

import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  const t = useTranslations('about');
  const stack = t.raw('stack') as string[];

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
                  {t('stackLabel')}
                </span>
                <ul className="flex flex-wrap gap-1.5">
                  {stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-2.5 py-1 font-mono text-xs text-[color:var(--color-fg)]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
