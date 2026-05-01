'use client';

import { useEffect } from 'react';

import { siteConfig } from '@/lib/site';

let printed = false;

export function ConsoleGreeting() {
  useEffect(() => {
    if (printed) return;
    printed = true;

    const banner = `
       ██╗██╗  ██╗
       ██║██║ ██╔╝
       ██║█████╔╝
  ██   ██║██╔═██╗
  ╚█████╔╝██║  ██╗
   ╚════╝ ╚═╝  ╚═╝
`;

    const accent = '#0a84ff';
    const muted = '#9ca0ac';
    const fg = '#ecebe8';

    /* eslint-disable no-console */
    console.log(`%c${banner}`, `color: ${accent}; font-family: ui-monospace, Menlo, monospace; font-size: 12px; line-height: 1.1;`);
    console.log(
      '%c Hey, fellow dev. ',
      `background: ${accent}; color: white; padding: 4px 10px; border-radius: 4px; font-weight: 700; font-size: 12px;`,
    );
    console.log(
      `%cStack%c   Next.js 15 · TypeScript · Tailwind v4 · next-intl · next-themes
%cSource%c  ${siteConfig.github}
%cHire%c    ${siteConfig.email}`,
      `color: ${muted}; font-weight: 700;`, `color: ${fg};`,
      `color: ${muted}; font-weight: 700;`, `color: ${accent};`,
      `color: ${muted}; font-weight: 700;`, `color: ${accent};`,
    );
    console.log(
      '%cPsst, masz fajny gust w narzędziach. Jeśli szukasz kogoś do współpracy, wiesz gdzie pisać.',
      `color: ${muted}; font-style: italic; font-size: 11px;`,
    );
    /* eslint-enable no-console */
  }, []);

  return null;
}
