import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';

import { routing } from '@/i18n/routing';

import enMessages from '../../../locales/en.json';
import jpMessages from '../../../locales/jp.json';

const inter = Inter({ subsets: ['latin'] });

export const revalidate = 3600; // revalidate the data at most every hour

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata(props: { params: { locale: string } }) {
  const locale = props.params.locale;
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: {
      template: '%s | YongConnect',
      default: t('title'),
    },
    description: t('description'),
    metadataBase: new URL('https://yongconnect.com'),
    alternates: {
      languages: {
        en: '/en',
        jp: '/jp',
        'x-default': '/en',
      },
    },
  };
}

const messages = {
  en: enMessages,
  jp: jpMessages,
};

export default async function RootLayout(props: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = props.params.locale;
  if (!routing.locales.includes(locale as any)) notFound();

  const localeMessages = messages[locale as keyof typeof messages];
  if (!localeMessages) notFound();

  return (
    <html className="" lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={''}>
        <NextIntlClientProvider locale={locale} messages={localeMessages}>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
