import { MetadataRoute } from 'next';
import { NATIONAL_TARGETS } from '@/config/national-targets';
import { slugify } from '@/lib/slugify';
import { getAllGuides } from '@/lib/mdx';
import { SOLAR_OPERATORS } from '@/data/operators';
import { SOLAR_BRANDS } from '@/data/solar-brands';
import { SOLAR_COMPARATIFS } from '@/data/solar-comparatifs';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.expertpanneausolaire.ch';

    // 1. CORE STATIC PAGES & TRIAD HUBS
    const coreRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/operateurs`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/marques`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/comparatifs`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/mentions-legales`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/cgv`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/guides`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
    ];

    // 2. OPERATEURS ROUTES
    const operateursRoutes: MetadataRoute.Sitemap = SOLAR_OPERATORS.map((op) => ({
        url: `${baseUrl}/operateurs/${op.slug}`,
        lastModified: new Date(op.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }));

    // 3. MARQUES ROUTES
    const marquesRoutes: MetadataRoute.Sitemap = SOLAR_BRANDS.map((b) => ({
        url: `${baseUrl}/marques/${b.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // 4. COMPARATIFS ROUTES
    const comparatifRoutes: MetadataRoute.Sitemap = SOLAR_COMPARATIFS.map((c) => ({
        url: `${baseUrl}/comparatif/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }));

    // 5. PARTNER CITIES
    const cityRoutes: MetadataRoute.Sitemap = NATIONAL_TARGETS.map((target) => ({
        url: `${baseUrl}/ville/${slugify(target.name)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // 6. BLOG GUIDES (Dynamic)
    const guides = getAllGuides();
    const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
        url: `${baseUrl}/guides/${guide.slug}`,
        lastModified: new Date(guide.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [
        ...coreRoutes,
        ...operateursRoutes,
        ...marquesRoutes,
        ...comparatifRoutes,
        ...cityRoutes,
        ...guideRoutes,
    ].map(item => ({
        ...item,
        url: item.url.toLowerCase()
    }));
}
