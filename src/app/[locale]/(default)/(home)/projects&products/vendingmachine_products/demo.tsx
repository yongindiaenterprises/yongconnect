import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function VendingmachineProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'projects&products' });

  return (
    <>
      {/* Hero */}
      <div className="relative mt-16 flex min-h-[60vh] flex-col items-center justify-center bg-gradient-to-b from-background to-background/80 px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          {t('vendingmachine.title')}
        </h1>

        <p className="mt-4 text-white/80">{t('toshin.description')}</p>
      </div>

      {/* Content */}
      <div className="relative mt-16 flex min-h-[60vh] flex-col items-center justify-center bg-gradient-to-b from-background to-background/80 px-4 py-20 text-center text-white">
        <h2 className="mb-4 text-2xl font-semibold">{t('toshin.section1')}</h2>

        <p>{t('toshin.section1Desc')}</p>

        <div className="mt-6 overflow-hidden rounded-xl">
          <Image
            src="/projects/toshin.jpg"
            alt="toshin water meter"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </>
  );
}
