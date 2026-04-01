import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

//const countries = [
//  'country-1',
//  'country-2',
//  'country-3',
//  'country-4',
//  'country-5',
//] as const;

const countries = ['country-1'] as const;

const GlobalPresence = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: 'home' });
  return (
    <section
      className="mx-auto mt-20 flex max-w-96 scroll-mt-40 flex-col items-center justify-center gap-4 text-white md:max-w-screen-md md:flex-row lg:max-w-screen-lg"
      id="global-presence"
    >
      <div className="flex w-full flex-col gap-y-8">
        <h2 className="text-center text-xl font-black text-accent-500 md:px-0">
          {t('globalPresence.title')}
        </h2>
        <div className="flex h-fit w-full flex-col justify-between gap-y-4 md:h-full md:flex-row-reverse">
          <Image
            src="/global-presence.svg"
            alt="global-presence"
            width="0"
            height="0"
            sizes="100vw"
            className="h-full w-full md:max-w-screen-sm lg:max-w-screen-md"
          />
          <div className="flex w-fit flex-wrap justify-center gap-y-8 md:max-w-96 md:flex-col md:gap-y-4">
            {countries.map((country, index) => (
              <div
                key={'global-presence-' + index}
                className="flex w-fit flex-col items-start justify-start border-l-2 border-l-accent-500 px-3"
              >
                <p className="text-start text-base font-medium">
                  {t(`globalPresence.countries.${country}.title`)}
                </p>
                <p className="text-start text-sm opacity-60">
                  {t(`globalPresence.countries.${country}.label`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
