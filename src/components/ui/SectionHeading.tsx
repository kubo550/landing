import { cn } from '@/lib/cn';

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  className,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {label && (
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-fg-muted)]">
          <span className="h-1 w-1 rounded-full bg-[color:var(--color-accent)]" />
          {label}
        </span>
      )}
      <h2 className="text-balance text-3xl font-medium tracking-tight text-[color:var(--color-fg)] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'max-w-2xl text-pretty text-base text-[color:var(--color-fg-muted)] sm:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
