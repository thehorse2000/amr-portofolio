import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://amrosama.dev';
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/projects',
    '/open-source',
    '/skills-tools',
    '/experience',
    '/education',
    '/contact',
    '/stats',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
