import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail } from 'lucide-react';

import { Container } from '../ui/Container';
import { siteConfig } from '@/lib/site';

const NAV_KEYS = ['services', 'portfolio', 'process', 'about', 'faq', 'contact'] as const;

export function Footer() {
  const tNav = useTranslations('nav');
  const tFooter = useTranslations('footer');
  const tContact = useTranslations('contact.info');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-border)] py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-3 lg:col-span-5">
            <a
              href="#top"
              className="inline-flex items-center font-mono text-base font-bold tracking-tight"
            >
              <span className="text-[color:var(--color-accent)]">jk</span>
              <span className="text-[color:var(--color-fg-muted)]">.dev</span>
            </a>
            <p className="max-w-xs text-pretty text-sm text-[color:var(--color-fg-muted)]">
              {tFooter('tagline')}
            </p>
          </div>

          <nav aria-label={tFooter('navTitle')} className="lg:col-span-3">
            <h2 className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
              {tFooter('navTitle')}
            </h2>
            <ul className="flex flex-col gap-2 text-sm">
              {NAV_KEYS.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="text-[color:var(--color-fg-muted)] transition hover:text-[color:var(--color-fg)]"
                  >
                    {tNav(key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
              {tFooter('contactTitle')}
            </h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-[color:var(--color-fg-muted)] transition hover:text-[color:var(--color-fg)]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[color:var(--color-fg-muted)] transition hover:text-[color:var(--color-fg)]"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  {tContact('github')} / @{siteConfig.githubHandle}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[color:var(--color-fg-muted)] transition hover:text-[color:var(--color-fg)]"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  {tContact('linkedin')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[color:var(--color-border)] pt-6 text-xs text-[color:var(--color-fg-subtle)] sm:flex-row sm:items-center">
          <p className="font-mono">
            © {year} {siteConfig.name}. {tFooter('rights')}
          </p>
          <p className="font-mono">
            <span className="text-[color:var(--color-accent)]">{'<'}</span>
            built with Next.js + Tailwind
            <span className="text-[color:var(--color-accent)]">{'/>'}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
