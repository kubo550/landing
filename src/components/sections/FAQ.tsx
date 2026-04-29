import { useTranslations } from 'next-intl';
import { Plus } from 'lucide-react';

import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

type Item = { q: string; a: string };

export function FAQ() {
  const t = useTranslations('faq');
  const items = t.raw('items') as Item[];

  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container>
        <SectionHeading label={t('label')} title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-10 sm:mt-14">
          <ul className="mx-auto flex max-w-3xl flex-col gap-3">
            {items.map((item, i) => (
              <li key={i}>
                <details className="glass group rounded-2xl transition open:[border-color:color-mix(in_oklab,var(--color-accent)_55%,transparent)]">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-5 text-left text-base font-medium tracking-tight sm:p-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="font-mono text-xs text-[color:var(--color-fg-subtle)]"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{item.q}</span>
                    </span>
                    <Plus
                      className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-fg-muted)] transition-transform duration-200 group-open:rotate-45 group-open:text-[color:var(--color-accent)]"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="ml-0 max-w-prose text-pretty text-sm text-[color:var(--color-fg-muted)] sm:ml-9 sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
