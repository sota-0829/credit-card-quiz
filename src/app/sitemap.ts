import { MetadataRoute } from 'next';
import { articles } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://credit-optimizer.jp';

    // Static pages
    const staticPages = [
        '',
        '/articles',
        '/about',
        '/privacy',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Article pages
    const articlePages = articles.map((article) => ({
        url: `${baseUrl}/articles/${article.slug}`,
        lastModified: new Date(article.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...articlePages];
}
