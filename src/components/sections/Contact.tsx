import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ContactForm } from './ContactForm';
import { siteConfig } from '@/lib/site';

type Item = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  labelKey: 'email' | 'github' | 'linkedin' | 'location';
  value: string;
  href?: string;
};

const ITEMS: Item[] = [
  {
    Icon: Mail,
    labelKey: 'email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    Icon: Github,
    labelKey: 'github',
    value: `@${siteConfig.githubHandle}`,
    href: siteConfig.github,
  },
  {
    Icon: Linkedin,
    labelKey: 'linkedin',
    value: `in/${siteConfig.linkedinHandle}`,
    href: siteConfig.linkedin,
  },
  {
    Icon: MapPin,
    labelKey: 'location',
    value: '',
  },
];

export function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <SectionHeading label={t('label')} title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-5">
            <ul className="flex flex-col gap-3">
              {ITEMS.map(({ Icon, labelKey, value, href }) => {
                const display = labelKey === 'location' ? t('info.locationValue') : value;
                const wrapperClass =
                  'glass group flex items-center gap-4 rounded-2xl p-4 transition duration-300 hover:-translate-y-0.5 hover:[border-color:var(--color-accent)]';
                const inner = (
                  <>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[color:var(--color-surface-2)] text-[color:var(--color-fg)] transition group-hover:bg-[color:var(--color-accent)] group-hover:text-[color:var(--color-accent-fg)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
                        {t(`info.${labelKey}`)}
                      </span>
                      <span className="truncate text-sm text-[color:var(--color-fg)] sm:text-base">
                        {display}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={labelKey}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={wrapperClass}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className={wrapperClass}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
