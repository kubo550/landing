import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowUpRight, Sparkles } from 'lucide-react';

import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

type Item = {
  title: string;
  domain: string;
  description: string;
  tags: string[];
  url: string;
  image?: string;
  monogram: string;
};

const GRADIENTS = [
  'linear-gradient(135deg, #0a84ff 0%, #5ac8fa 60%, #a3e1ff 100%)',
  'linear-gradient(135deg, #ff6b9d 0%, #ff8a4a 60%, #ffb86b 100%)',
  'linear-gradient(135deg, #7c3aed 0%, #6366f1 60%, #38bdf8 100%)',
];

export function Portfolio() {
  const t = useTranslations('portfolio');
  const items = t.raw('items') as Item[];

  return (
    <section id="portfolio" className="py-20 sm:py-28">
      <Container>
        <SectionHeading label={t('label')} title={t('title')} subtitle={t('subtitle')} />

        <ul className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <li key={item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:[border-color:var(--color-accent)]"
                >
                  <div
                    className="relative aspect-[16/10] overflow-hidden"
                    style={item.image ? undefined : { background: gradient }}
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={`${item.title}, ${item.domain}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <>
                        <div
                          className="absolute inset-0"
                          aria-hidden="true"
                          style={{
                            backgroundImage:
                              'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.18) 0%, transparent 55%)',
                          }}
                        />
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 flex items-center justify-center font-mono text-7xl font-bold text-white/95 mix-blend-overlay drop-shadow-[0_4px_20px_rgba(0,0,0,0.25)] sm:text-8xl"
                        >
                          {item.monogram}
                        </span>
                      </>
                    )}
                    <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition group-hover:bg-white/30">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
                      <span className="font-mono text-xs text-[color:var(--color-fg-subtle)]">
                        {item.domain}
                      </span>
                    </div>
                    <p className="text-sm text-[color:var(--color-fg-muted)]">
                      {item.description}
                    </p>
                    <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-[color:var(--color-fg-muted)]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-accent)]">
                      {t('viewLive')}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 flex items-start gap-2 text-pretty text-sm text-[color:var(--color-fg-subtle)] sm:mt-14">
          <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color:var(--color-accent)]" aria-hidden="true" />
          <span>{t('ndaNote')}</span>
        </p>
      </Container>
    </section>
  );
}
