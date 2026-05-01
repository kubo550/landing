'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

function nextAvailableStart(): Date {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const earliest = new Date(now);
  earliest.setDate(earliest.getDate() + 3);
  const day = earliest.getDay();
  const offset = (1 - day + 7) % 7;
  earliest.setDate(earliest.getDate() + offset);
  return earliest;
}

export function AvailabilityBadge() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const d = nextAvailableStart();
    setDate(
      d.toLocaleDateString(locale === 'pl' ? 'pl-PL' : 'en-US', {
        day: 'numeric',
        month: 'long',
      }),
    );
  }, [locale]);

  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs text-[color:var(--color-fg-muted)]">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-accent)] opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
      </span>
      {date ? t('availability', { date }) : t('badge')}
    </span>
  );
}
