import { useTranslations } from 'next-intl';

import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

type Step = { number: string; title: string; description: string };

export function Process() {
  const t = useTranslations('process');
  const steps = t.raw('steps') as Step[];

  return (
    <section id="process" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          label={t('label')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <ol className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.number}
              className="glass group relative flex flex-col gap-4 rounded-2xl p-6 transition duration-300 hover:-translate-y-0.5 hover:[border-color:var(--color-accent)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium uppercase tracking-widest text-[color:var(--color-accent)]">
                  {step.number}
                </span>
                <span
                  aria-hidden="true"
                  className="font-mono text-3xl font-medium text-[color:var(--color-fg-subtle)]/30 transition group-hover:text-[color:var(--color-accent)]/40"
                >
                  /{i + 1}
                </span>
              </div>
              <h3 className="text-lg font-medium tracking-tight sm:text-xl">{step.title}</h3>
              <p className="text-sm text-[color:var(--color-fg-muted)]">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
