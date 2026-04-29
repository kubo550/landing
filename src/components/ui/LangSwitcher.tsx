'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/cn';

export function LangSwitcher() {
  const t = useTranslations('lang');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: (typeof routing.locales)[number]) {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      role="group"
      aria-label={t('switchLabel')}
      className="glass inline-flex h-9 items-center gap-0.5 rounded-md p-0.5 font-mono text-xs"
    >
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => switchTo(l)}
            disabled={isPending || active}
            aria-current={active ? 'true' : undefined}
            className={cn(
              'h-full rounded px-2.5 uppercase tracking-wider transition',
              active
                ? 'bg-[color:var(--color-fg)] text-[color:var(--color-bg)]'
                : 'text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-fg)]',
            )}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
