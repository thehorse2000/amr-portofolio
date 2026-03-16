import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'], // Example of disallowed content
    },
    sitemap: 'https://amrosama.dev/sitemap.xml',
  };
}
