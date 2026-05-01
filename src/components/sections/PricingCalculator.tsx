'use client';

import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { cn } from '@/lib/cn';

type PackageId = 'card' | 'landing' | 'multipage' | 'custom';
type AddonId =
  | 'seo'
  | 'analytics'
  | 'multilang'
  | 'cms'
  | 'blog'
  | 'crm'
  | 'chat'
  | 'leadAlerts'
  | 'automations'
  | 'payments'
  | 'aiChat'
  | 'aiSearch'
  | 'aiCalc'
  | 'maintenance';

const PACKAGES: Array<{ id: PackageId; price: number; fromOnly?: boolean }> = [
  { id: 'card', price: 349 },
  { id: 'landing', price: 1199, fromOnly: true },
  { id: 'multipage', price: 2499, fromOnly: true },
  { id: 'custom', price: 4999, fromOnly: true },
];

const ADDONS: Array<{ id: AddonId; price: number; perYear?: boolean; ai?: boolean }> = [
  { id: 'seo', price: 349 },
  { id: 'analytics', price: 249 },
  { id: 'multilang', price: 399 },
  { id: 'cms', price: 899 },
  { id: 'blog', price: 599 },
  { id: 'crm', price: 299 },
  { id: 'chat', price: 249 },
  { id: 'leadAlerts', price: 199 },
  { id: 'automations', price: 599 },
  { id: 'payments', price: 699 },
  { id: 'aiChat', price: 1499, ai: true },
  { id: 'aiSearch', price: 2499, ai: true },
  { id: 'aiCalc', price: 1999, ai: true },
  { id: 'maintenance', price: 899, perYear: true },
];

function formatPrice(value: number, locale: string): string {
  return new Intl.NumberFormat(locale === 'pl' ? 'pl-PL' : 'en-US').format(value);
}

export function PricingCalculator() {
  const t = useTranslations('calculator');
  const locale = useLocale();
  const [pkg, setPkg] = useState<PackageId | null>(null);
  const [addons, setAddons] = useState<Set<AddonId>>(new Set());

  const selectedPackage = pkg ? PACKAGES.find((p) => p.id === pkg) : null;

  const total = useMemo(() => {
    let sum = selectedPackage?.price ?? 0;
    addons.forEach((id) => {
      const addon = ADDONS.find((a) => a.id === id);
      if (addon) sum += addon.price;
    });
    return sum;
  }, [selectedPackage, addons]);

  const isFromPrice = useMemo(() => {
    if (!selectedPackage) return false;
    if (selectedPackage.fromOnly) return true;
    return false;
  }, [selectedPackage]);

  function toggleAddon(id: AddonId) {
    setAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section id="calculator" className="py-20 sm:py-28">
      <Container>
        <SectionHeading label={t('label')} title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-8 lg:col-span-7">
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
                {t('step1')}
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {PACKAGES.map((p) => {
                  const active = pkg === p.id;
                  return (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => setPkg(p.id)}
                        aria-pressed={active}
                        className={cn(
                          'glass flex w-full flex-col items-start gap-2 rounded-2xl p-5 text-left transition duration-200',
                          'hover:-translate-y-0.5 hover:[border-color:var(--color-accent)]',
                          active &&
                            '[border-color:var(--color-accent)] shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-accent)_40%,transparent),0_18px_40px_-18px_color-mix(in_oklab,var(--color-accent)_45%,transparent)]',
                        )}
                      >
                        <div className="flex w-full items-start justify-between gap-3">
                          <span className="text-base font-medium tracking-tight">
                            {t(`packages.${p.id}.name`)}
                          </span>
                          {active && (
                            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-[color:var(--color-accent-fg)]">
                              <Check className="h-3 w-3" aria-hidden="true" />
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[color:var(--color-fg-muted)]">
                          {t(`packages.${p.id}.description`)}
                        </p>
                        <div className="mt-1 flex items-baseline gap-1.5 font-mono">
                          {p.fromOnly && (
                            <span className="text-xs uppercase tracking-wider text-[color:var(--color-fg-subtle)]">
                              {t('fromPrefix')}
                            </span>
                          )}
                          <span className="text-xl font-medium text-[color:var(--color-fg)]">
                            {formatPrice(p.price, locale)}
                          </span>
                          <span className="text-sm text-[color:var(--color-fg-muted)]">
                            {t('currency')}
                          </span>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
                {t('step2')}
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {ADDONS.map((a) => {
                  const active = addons.has(a.id);
                  return (
                    <li key={a.id}>
                      <button
                        type="button"
                        onClick={() => toggleAddon(a.id)}
                        aria-pressed={active}
                        className={cn(
                          'glass flex w-full items-start gap-3 rounded-xl p-4 text-left transition duration-200',
                          'hover:-translate-y-0.5 hover:[border-color:var(--color-accent)]',
                          active && '[border-color:var(--color-accent)]',
                        )}
                      >
                        <span
                          className={cn(
                            'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border transition',
                            active
                              ? 'border-[color:var(--color-accent)] bg-[color:var(--color-accent)] text-[color:var(--color-accent-fg)]'
                              : 'border-[color:var(--color-border)]',
                          )}
                          aria-hidden="true"
                        >
                          {active && <Check className="h-3 w-3" />}
                        </span>
                        <div className="flex flex-1 flex-col gap-1">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-sm font-medium tracking-tight">
                              {t(`addons.${a.id}.name`)}
                            </span>
                            {a.ai && (
                              <span className="inline-flex items-center gap-1 rounded-full border border-[color:var(--color-accent)] px-1.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-[color:var(--color-accent)]">
                                <Sparkles className="h-2.5 w-2.5" aria-hidden="true" />
                                AI
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[color:var(--color-fg-muted)]">
                            {t(`addons.${a.id}.description`)}
                          </p>
                        </div>
                        <span className="shrink-0 font-mono text-sm text-[color:var(--color-fg)]">
                          +{formatPrice(a.price, locale)} {t('currency')}
                          {a.perYear && (
                            <span className="block text-right text-[0.65rem] uppercase tracking-wider text-[color:var(--color-fg-subtle)]">
                              /{t('perYear')}
                            </span>
                          )}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="glass-strong sticky top-24 flex flex-col gap-5 rounded-2xl p-6 sm:p-7">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
                {t('summaryTitle')}
              </h3>

              {!selectedPackage ? (
                <p className="text-sm text-[color:var(--color-fg-muted)]">{t('summaryEmpty')}</p>
              ) : (
                <>
                  <ul className="flex flex-col gap-2 border-b border-[color:var(--color-border)] pb-4 text-sm">
                    <li className="flex items-baseline justify-between gap-3">
                      <span className="text-[color:var(--color-fg)]">
                        {t(`packages.${selectedPackage.id}.name`)}
                      </span>
                      <span className="font-mono text-[color:var(--color-fg-muted)]">
                        {selectedPackage.fromOnly && `${t('fromPrefix')} `}
                        {formatPrice(selectedPackage.price, locale)} {t('currency')}
                      </span>
                    </li>
                    {Array.from(addons).map((id) => {
                      const a = ADDONS.find((x) => x.id === id);
                      if (!a) return null;
                      return (
                        <li key={id} className="flex items-baseline justify-between gap-3">
                          <span className="text-[color:var(--color-fg-muted)]">
                            + {t(`addons.${id}.name`)}
                          </span>
                          <span className="font-mono text-[color:var(--color-fg-muted)]">
                            {formatPrice(a.price, locale)} {t('currency')}
                            {a.perYear && (
                              <span className="ml-1 text-[0.65rem] uppercase tracking-wider text-[color:var(--color-fg-subtle)]">
                                /{t('perYear')}
                              </span>
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
                      {isFromPrice ? t('totalFromLabel') : t('totalLabel')}
                    </span>
                    <span className="font-mono text-3xl font-medium tracking-tight text-[color:var(--color-fg)] sm:text-4xl">
                      {formatPrice(total, locale)}
                      <span className="ml-1 text-base text-[color:var(--color-fg-muted)]">
                        {t('currency')}
                      </span>
                    </span>
                  </div>

                  <p className="text-xs text-[color:var(--color-fg-subtle)]">{t('disclaimer')}</p>

                  {addons.size >= 2 && (
                    <p className="rounded-lg border border-[color:var(--color-accent)] bg-[color:color-mix(in_oklab,var(--color-accent)_10%,transparent)] p-3 text-xs text-[color:var(--color-fg)]">
                      {t('negotiable')}
                    </p>
                  )}

                  <a
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[color:var(--color-accent)] px-5 text-sm font-medium text-[color:var(--color-accent-fg)] shadow-[0_8px_24px_-8px_color-mix(in_oklab,var(--color-accent)_60%,transparent)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-accent-hover)]"
                  >
                    {t('cta')}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </>
              )}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
