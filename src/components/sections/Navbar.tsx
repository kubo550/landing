'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';

import { Container } from '../ui/Container';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LangSwitcher } from '../ui/LangSwitcher';
import { Button } from '../ui/Button';
import { cn } from '@/lib/cn';

const NAV_ITEMS = ['services', 'portfolio', 'calculator', 'process', 'about', 'faq', 'contact'] as const;

export function Navbar() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b border-transparent transition-all duration-300',
        scrolled &&
          'border-[color:var(--color-border)] bg-[color:var(--color-bg)]/40 shadow-[0_1px_0_0_rgb(255_255_255/0.05)_inset,0_8px_32px_-12px_rgb(0_0_0/0.25)] backdrop-blur-2xl backdrop-saturate-200',
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4" aria-label="Primary">
          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-tight text-[color:var(--color-fg)]"
          >
            <span className="text-[color:var(--color-accent)]">jk</span>
            <span className="text-[color:var(--color-fg-muted)]">.dev</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((key) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  className="rounded-md px-3 py-1.5 text-sm text-[color:var(--color-fg-muted)] transition hover:text-[color:var(--color-fg)]"
                >
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LangSwitcher />
            </div>
            <ThemeToggle />
            <Button href="#contact" className="hidden sm:inline-flex">
              {t('cta')}
            </Button>
            <button
              type="button"
              aria-label={open ? t('closeMenu') : t('openMenu')}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="glass inline-flex h-9 w-9 items-center justify-center rounded-md text-[color:var(--color-fg)] md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-[color:var(--color-border)] py-3 md:hidden">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-base text-[color:var(--color-fg-muted)] transition hover:bg-[color:var(--color-surface-2)] hover:text-[color:var(--color-fg)]"
                  >
                    {t(key)}
                  </a>
                </li>
              ))}
              <li className="flex items-center justify-between gap-3 pt-2">
                <LangSwitcher />
                <Button
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 justify-center"
                >
                  {t('cta')}
                </Button>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}
