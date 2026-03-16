import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

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
