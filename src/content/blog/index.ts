import type { Locale } from '@/lib/site';
import type { BlogPost, LocalizedPost } from './types';
import { post as wordpressCasinoPost } from './wordpress-bez-aktualizacji-kasyno-online';

export const BLOG_POSTS: BlogPost[] = [wordpressCasinoPost];

export const SORTED_POSTS = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllPosts(): BlogPost[] {
  return SORTED_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getLocalized(post: BlogPost, locale: Locale): LocalizedPost {
  return post.content[locale];
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  return SORTED_POSTS.filter((post) => post.slug !== slug).slice(0, limit);
}

export type { BlogPost, LocalizedPost } from './types';
