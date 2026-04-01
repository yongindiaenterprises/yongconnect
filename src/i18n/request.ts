import { getRequestConfig } from 'next-intl/server';

import { locale } from '@/config';

import { routing } from './routing';

export default getRequestConfig(
  async ({ requestLocale = routing.defaultLocale }) => {
    let locale = await requestLocale;

    if (!locale) {
      locale = routing.defaultLocale;
    }
    if (!routing.locales.includes(locale as locale)) {
      locale = routing.defaultLocale;
    }

    const { default: messages } = await import(`../../locales/${locale}.json`);
    return {
      locale,
      messages,
    };
  },
);
