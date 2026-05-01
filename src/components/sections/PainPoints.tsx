import { useTranslations } from 'next-intl';
import { ArrowRight, Check, X } from 'lucide-react';

import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

type Item = {
  pain: string;
  painDesc: string;
  solution: string;
  solutionDesc: string;
};

export function PainPoints() {
  const t = useTranslations('painPoints');
  const items = t.raw('items') as Item[];

  return (
    <section id="pains" className="py-20 sm:py-28">
      <Container>
        <SectionHeading label={t('label')} title={t('title')} subtitle={t('subtitle')} />

        <ul className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-2">
          {items.map((item, i) => (
            <li key={i}>
              <article className="glass flex h-full flex-col gap-4 rounded-2xl p-6 sm:p-7">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:color-mix(in_oklab,var(--color-fg-subtle)_25%,transparent)] text-[color:var(--color-fg-muted)]">
                    <X className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-medium tracking-tight text-[color:var(--color-fg)]">
                      {item.pain}
                    </h3>
                    <p className="text-sm text-[color:var(--color-fg-muted)]">{item.painDesc}</p>
                  </div>
                </div>

                <div className="border-t border-[color:var(--color-border)] pt-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-[color:var(--color-accent-fg)]">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-medium tracking-tight text-[color:var(--color-accent)]">
                        {item.solution}
                      </h4>
                      <p className="text-sm text-[color:var(--color-fg-muted)]">
                        {item.solutionDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center sm:mt-14">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[color:var(--color-accent)] px-6 text-sm font-medium text-[color:var(--color-accent-fg)] shadow-[0_8px_24px_-8px_color-mix(in_oklab,var(--color-accent)_60%,transparent)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-accent-hover)]"
          >
            {t('cta')}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
