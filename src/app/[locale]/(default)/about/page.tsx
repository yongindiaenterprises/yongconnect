import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import Statistics from './components/statistics';
import TableOfContents from './components/table-of-contents';
import TextSection from './components/text-section';

const AboutPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'about' });
  return (
    <>
      {/* Hero Section */}
      <div className="relative mt-16 flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80 px-4 py-20 text-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/about/about-image-1.png"
            alt="Background Pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-4 inline-block rounded-full bg-accent-500/10 px-4 py-2 text-sm font-medium text-accent-500">
            {t('detail-1.excellence')}
          </div>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            {t('detail-1.title')}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl">
            {t('detail-1.description')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-16 flex flex-col items-center gap-y-10 sm:flex-row sm:gap-x-10 sm:gap-y-20 md:justify-center md:px-4">
        <div className="flex flex-row items-start justify-center gap-y-20 md:mt-16 md:gap-x-10">
          <div className="sticky top-32">
            <TableOfContents
              headings={[
                t('detail-1.title'),
                t('detail-2.title'),
                t('detail-3.title'),
                t('detail-5.title'),
                t('detail-6.title'),
                t('detail-7.title'),
                t('detail-10.title'),
                t('detail-11.title'),
              ]}
            />
          </div>
          <div className="sm:w-full md:max-w-full">
            <TextSection
              title={t('detail-2.title')}
              body={t('detail-2.description')}
            />
            <TextSection
              title={t('detail-3.title')}
              body={t('detail-3.description')}
            />
            <div className="group relative overflow-hidden rounded-xl px-4 text-primary-foreground transition-all duration-300 hover:shadow-2xl sm:px-6 lg:px-8">
              <Image
                src={`/about/about-image-1.png`}
                alt={'about_image_1'}
                width="1025"
                height="481"
                className="transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <Statistics locale={locale} />
            <TextSection
              title={t('detail-5.title')}
              body={t('detail-5.description')}
            />
            <TextSection
              title={t('detail-6.title')}
              iconPrefix="/about/usp-icon"
              bulletPoints={[
                t('detail-6.point-1'),
                t('detail-6.point-2'),
                t('detail-6.point-3'),
                t('detail-6.point-4'),
              ]}
            />
            <TextSection
              title={t('detail-7.title')}
              isBullet={true}
              bulletPoints={[
                t('detail-7.point-1'),
                t('detail-7.point-2'),
                t('detail-7.point-3'),
                t('detail-7.point-4'),
              ]}
            />
            <div className="group relative mb-12 overflow-hidden rounded-xl px-4 text-primary-foreground transition-all duration-300 hover:shadow-2xl sm:px-6 lg:px-8">
              <Image
                src={`/about/about-image-2.png`}
                alt={'about_image_2'}
                width="1025"
                height="481"
                className="transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <TextSection
              title={t('detail-10.title')}
              body={t('detail-10.description')}
            />
            <TextSection
              title={t('detail-11.title')}
              body={t('detail-11.description')}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
