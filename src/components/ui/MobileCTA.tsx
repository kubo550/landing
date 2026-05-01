'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

export function MobileCTA() {
  const t = useTranslations('nav');
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const target = document.getElementById('contact');
    if (!target) return;

    const heroThreshold = 320;
    const onScroll = () => {
      const scrolledPastHero = window.scrollY > heroThreshold;
      const rect = target.getBoundingClientRect();
      const contactInView = rect.top < window.innerHeight * 0.8;
      setHidden(!scrolledPastHero || contactInView);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#contact"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      className={`fixed inset-x-4 bottom-4 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-medium text-[color:var(--color-accent-fg)] shadow-[0_12px_32px_-8px_color-mix(in_oklab,var(--color-accent)_55%,transparent)] backdrop-blur transition-all duration-300 hover:bg-[color:var(--color-accent-hover)] sm:hidden ${
        hidden ? 'pointer-events-none translate-y-4 opacity-0' : 'opacity-100'
      }`}
    >
      {t('cta')}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
