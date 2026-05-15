import type { Locale } from '@/lib/site';

export type InlineNode =
  | { kind: 'text'; value: string }
  | { kind: 'strong'; value: string }
  | { kind: 'em'; value: string }
  | { kind: 'code'; value: string };

export type Block =
  | { kind: 'h2'; text: string }
  | { kind: 'p'; nodes: InlineNode[] }
  | { kind: 'ul'; items: InlineNode[][] }
  | { kind: 'ol'; items: InlineNode[][] };

export type LocalizedPost = {
  title: string;
  lead: string;
  tags: string[];
  blocks: Block[];
};

export type BlogPost = {
  slug: string;
  date: string;
  readingMinutes: number;
  content: Record<Locale, LocalizedPost>;
};

export const t = (value: string): InlineNode => ({ kind: 'text', value });
export const b = (value: string): InlineNode => ({ kind: 'strong', value });
export const i = (value: string): InlineNode => ({ kind: 'em', value });
export const c = (value: string): InlineNode => ({ kind: 'code', value });
