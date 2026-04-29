'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight, Check } from 'lucide-react';

import { Button } from '../ui/Button';
import { cn } from '@/lib/cn';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputCls =
  'glass w-full rounded-xl px-3.5 py-2.5 text-sm text-[color:var(--color-fg)] placeholder:text-[color:var(--color-fg-subtle)] transition focus-visible:[border-color:var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[color:var(--color-accent)]';

const labelCls =
  'flex flex-col gap-1.5 text-sm font-medium text-[color:var(--color-fg)]';

export function ContactForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    // TODO: replace with real submission (e.g. POST to /api/contact)
    console.log('[contact]', payload);

    await new Promise((r) => setTimeout(r, 600));

    setStatus('success');
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelCls}>
          {t('form.name')}
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder={t('form.namePlaceholder')}
            className={inputCls}
          />
        </label>
        <label className={labelCls}>
          {t('form.email')}
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={t('form.emailPlaceholder')}
            className={inputCls}
          />
        </label>
      </div>

      <label className={labelCls}>
        <span className="flex items-center gap-2">
          {t('form.phone')}
          <span className="font-mono text-xs font-normal text-[color:var(--color-fg-subtle)]">
            {t('form.phoneOptional')}
          </span>
        </span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder={t('form.phonePlaceholder')}
          className={inputCls}
        />
      </label>

      <label className={labelCls}>
        {t('form.message')}
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t('form.messagePlaceholder')}
          className={cn(inputCls, 'resize-y')}
        />
      </label>

      <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          aria-live="polite"
          className={cn(
            'text-sm transition',
            status === 'success' && 'text-[color:var(--color-accent)]',
            status === 'error' && 'text-red-500',
            status !== 'success' && status !== 'error' && 'text-[color:var(--color-fg-subtle)]',
          )}
        >
          {status === 'success' && (
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4" aria-hidden="true" />
              {t('form.success')}
            </span>
          )}
          {status === 'error' && t('form.error')}
        </p>
        <Button type="submit" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? t('form.submitting') : t('form.submit')}
          {status !== 'submitting' && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
        </Button>
      </div>
    </form>
  );
}
