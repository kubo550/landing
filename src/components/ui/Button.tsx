import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition focus-visible:outline-2 focus-visible:outline-offset-3 disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-[color:var(--color-accent)] text-[color:var(--color-accent-fg)] shadow-[0_8px_24px_-8px_color-mix(in_oklab,var(--color-accent)_60%,transparent)] hover:bg-[color:var(--color-accent-hover)] hover:-translate-y-0.5',
  secondary:
    'glass text-[color:var(--color-fg)] hover:[border-color:var(--color-accent)] hover:-translate-y-0.5',
  ghost:
    'text-[color:var(--color-fg)] hover:bg-[color:var(--color-surface)]',
};

const sizes: Record<Size, string> = {
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonProps | LinkProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props;
  const cls = cn(base, variants[variant], sizes[size], className);

  if ('href' in rest && rest.href) {
    return (
      <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} className={cls}>
      {children}
    </button>
  );
}
