import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://amrosama.dev';
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/projects',
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
