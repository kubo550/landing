import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { getAllPosts } from '@/content/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts();

  const entries: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          pl: siteConfig.url,
          en: `${siteConfig.url}/en`,
        },
      },
    },
    {
      url: `${siteConfig.url}/en`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          pl: `${siteConfig.url}/blog`,
          en: `${siteConfig.url}/en/blog`,
        },
      },
    },
    {
      url: `${siteConfig.url}/en/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  for (const post of posts) {
    const lastModified = new Date(`${post.date}T00:00:00Z`);
    entries.push({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          pl: `${siteConfig.url}/blog/${post.slug}`,
          en: `${siteConfig.url}/en/blog/${post.slug}`,
        },
      },
    });
    entries.push({
      url: `${siteConfig.url}/en/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  return entries;
}
