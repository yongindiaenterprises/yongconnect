'use client';

import { useTranslations } from 'next-intl';

import { SupportForm } from '@/components/ui/support-form';

const Support = () => {
  const t = useTranslations('support');

  return (
    <section className="mx-auto flex min-h-dvh max-w-screen-lg scroll-mt-40 flex-col items-center justify-center gap-y-8 text-white md:max-w-screen-md lg:max-w-screen-lg">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-accent-500">{t('title')}</h1>
        <p className="mt-2 text-base font-thin text-white opacity-80">
          {t('subTitle')}
        </p>
      </div>
      <SupportForm />
    </section>
  );
};

export default Support;
