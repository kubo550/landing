import { useTranslations } from 'next-intl';
import { Quote, Star } from 'lucide-react';

import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

type Item = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

const AVATAR_GRADIENTS = [
  'linear-gradient(135deg, #ff6b9d 0%, #ff8a4a 100%)',
  'linear-gradient(135deg, #0a84ff 0%, #5ac8fa 100%)',
  'linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)',
];

export function Testimonials() {
  const t = useTranslations('testimonials');
  const items = t.raw('items') as Item[];

  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <Container>
        <SectionHeading label={t('label')} title={t('title')} subtitle={t('subtitle')} />

        <ul className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li
              key={item.name}
              className="glass relative flex h-full flex-col gap-5 rounded-2xl p-6 sm:p-7"
            >
              <Quote
                className="absolute right-5 top-5 h-8 w-8 text-[color:var(--color-accent)]/30"
                aria-hidden="true"
              />

              <div
                className="flex gap-0.5 text-[color:var(--color-accent)]"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-[color:var(--color-accent)]"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="text-pretty text-[15px] leading-relaxed text-[color:var(--color-fg)] sm:text-base">
                <span aria-hidden="true">„</span>
                {item.quote}
                <span aria-hidden="true">"</span>
              </blockquote>

              <figcaption className="mt-auto flex items-center gap-3 border-t border-[color:var(--color-border)] pt-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold text-white shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2)]"
                  style={{ background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length] }}
                >
                  {item.initials}
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate text-sm font-medium text-[color:var(--color-fg)]">
                    {item.name}
                  </span>
                  <span className="truncate font-mono text-xs text-[color:var(--color-fg-muted)]">
                    {item.role} · {item.company}
                  </span>
                </span>
              </figcaption>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
