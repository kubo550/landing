import Link from 'next/link';

import './globals.css';

export default function NotFound() {
  return (
    <html lang="pl">
      <body className="bg-[color:var(--color-bg)] text-[color:var(--color-fg)]">
        <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center font-sans">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-fg-muted)]">
            404
          </p>
          <h1 className="text-balance text-4xl font-medium tracking-tight md:text-6xl">
            Page not found
          </h1>
          <Link
            href="/"
            className="inline-flex h-10 items-center rounded-md bg-[color:var(--color-accent)] px-5 text-sm font-medium text-[color:var(--color-accent-fg)] transition hover:bg-[color:var(--color-accent-hover)]"
          >
            ← Home
          </Link>
        </main>
      </body>
    </html>
  );
}
