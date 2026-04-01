export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : `http://localhost:${port}`;

export enum locale {
  en = 'en',
  jp = 'jp',
}
export const locales: locale[] = [locale.en, locale.jp];
export const defaultLocale = locale.en;
export const products = ['INF4B', 'INF4C', 'SEC3530'] as const;
