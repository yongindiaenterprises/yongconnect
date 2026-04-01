import { setRequestLocale } from 'next-intl/server';
import React from 'react';

import Footer from '@/app/components/footer';
import Header from '@/app/components/header';

export const revalidate = 3600;
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  );
}
