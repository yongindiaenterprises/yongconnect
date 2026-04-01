import { setRequestLocale } from 'next-intl/server';

import AdminDashboard from './components/admin-dashboard';
import GlobalPresence from './components/global-presence';
import Hero from './components/hero';
import HowInvestmentWorks from './components/how-investment-works';
import PaymentServices from './components/payment';
import Plans from './components/plans';
import Products from './components/products';
import RelatedServices from './components/related-services';
import TrustedCompanies from './components/trusted-companies';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Plans />
      {/*
      <HowInvestmentWorks locale={locale} />
      */}
      <Products />
      <RelatedServices locale={locale} />
      <AdminDashboard />
      <PaymentServices locale={locale} />
      <GlobalPresence locale={locale} />
      {/*
      <TrustedCompanies locale={locale} />
      */}
    </>
  );
}
