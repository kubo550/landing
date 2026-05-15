import { ArrowRight } from 'lucide-react';

import type { BlogPost } from '@/content/blog';
import type { Locale } from '@/lib/site';
import { formatDate } from './PostMeta';

export function PostCard({
  post,
  locale,
  href,
  readingLabel,
  readMoreLabel,
}: {
  post: BlogPost;
  locale: Locale;
  href: string;
  readingLabel: string;
  readMoreLabel: string;
}) {
  const localized = post.content[locale];

  return (
    <a
      href={href}
      className="glass group flex flex-col gap-5 rounded-2xl p-7 transition hover:-translate-y-0.5 hover:[border-color:var(--color-accent)]"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[color:var(--color-fg-subtle)]">
        <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
        <span aria-hidden="true">·</span>
        <span>
          {post.readingMinutes} {readingLabel}
        </span>
      </div>

      {localized.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {localized.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[color:var(--color-fg-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <h3 className="text-balance text-xl font-medium tracking-tight text-[color:var(--color-fg)] sm:text-2xl">
        {localized.title}
      </h3>

      <p className="text-pretty text-[color:var(--color-fg-muted)]">{localized.lead}</p>

      <span className="mt-auto inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-accent)] transition group-hover:gap-2.5">
        {readMoreLabel}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </a>
  );
}
