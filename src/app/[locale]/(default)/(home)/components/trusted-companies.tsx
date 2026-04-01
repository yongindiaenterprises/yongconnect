import { ScrollArea } from '@radix-ui/react-scroll-area';
import { getTranslations } from 'next-intl/server';

const companies = [
  'samsung',
  'apple',
  'hp',
  'sony',
  'lg',
  'toshiba',
  'mitsubishi',
  'fujitsu',
] as const;

const TrustedCompanies = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: 'home' });
  return (
    <section className="mx-auto mt-20 flex w-full flex-col items-center justify-center gap-4 text-white md:max-w-screen-md md:flex-row lg:max-w-screen-lg">
      <ScrollArea className="w-full justify-center overflow-x-auto whitespace-nowrap">
        <div className="flex w-max md:max-w-screen-lg md:flex-wrap md:justify-center">
          {companies.map((name, index) => (
            <div
              key={'trusted-companies-' + index}
              className="flex min-w-32 items-center justify-center overflow-hidden bg-card px-4 py-6 text-center md:min-w-64 md:border-dotted md:border-white md:px-10 md:py-10"
            >
              {t(`trustedCompanies.companies.${name}.title`)}
            </div>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default TrustedCompanies;
