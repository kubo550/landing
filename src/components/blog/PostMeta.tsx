import { Calendar, Clock } from 'lucide-react';
import type { Locale } from '@/lib/site';

export function formatDate(iso: string, locale: Locale) {
  const date = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat(locale === 'pl' ? 'pl-PL' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function PostMeta({
  date,
  readingMinutes,
  locale,
  readingLabel,
  tags,
}: {
  date: string;
  readingMinutes: number;
  locale: Locale;
  readingLabel: string;
  tags?: string[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-[color:var(--color-fg-subtle)]">
      <span className="inline-flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
        <time dateTime={date}>{formatDate(date, locale)}</time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
        {readingMinutes} {readingLabel}
      </span>
      {tags && tags.length > 0 && (
        <span className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-2.5 py-0.5 text-[0.65rem] tracking-[0.12em]"
            >
              {tag}
            </span>
          ))}
        </span>
      )}
    </div>
  );
}
