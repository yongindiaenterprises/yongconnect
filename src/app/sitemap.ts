import { MetadataRoute } from 'next';

import { host } from '@/config';
import { getPathname, Locale, routing } from '@/i18n/routing';

// Define your static routes
const staticRoutes = ['', '/about', '/support'];

// Define your dynamic routes (products)
const products = ['INF4B', 'INF4C', 'SEC3530', 'SEC3531', 'SEC3532', 'SEC3533'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Add static routes
  staticRoutes.forEach(route => {
    routes.push({
      url: getUrl(route, routing.defaultLocale),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map(locale => [locale, getUrl(route, locale)]),
        ),
      },
    });
  });

  // Add product routes
  products.forEach(product => {
    routes.push({
      url: getUrl(`/products/${product}`, routing.defaultLocale),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map(locale => [
            locale,
            getUrl(`/products/${product}`, locale),
          ]),
        ),
      },
    });
  });

  return routes;
}

function getUrl(href: string, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return host + pathname;
}
