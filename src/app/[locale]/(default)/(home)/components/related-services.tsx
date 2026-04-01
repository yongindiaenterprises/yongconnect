import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

enum RelatedServicesOptions {
  sales = 'sales',
  iotIntegration = 'iotIntegration',
  analytics = 'analytics',
  repairs = 'repairs',
  whiteLabel = 'whiteLabel',
  maintenance = 'maintenance',
}

const RELATED_SERVICES_OPTIONS = [
  RelatedServicesOptions.sales,
  RelatedServicesOptions.iotIntegration,
  RelatedServicesOptions.analytics,
  RelatedServicesOptions.repairs,
  RelatedServicesOptions.whiteLabel,
  RelatedServicesOptions.maintenance,
];

const RelatedServices = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <section
      className="mx-auto mb-10 mt-10 flex max-w-screen-lg scroll-mt-40 flex-col items-center justify-center md:mt-20"
      id="related-services"
    >
      <h1 className="text-2xl font-bold text-accent-500">
        {t('relatedServices.title')}
      </h1>

      <div className="mt-10 flex w-full flex-wrap items-center gap-x-2 gap-y-6 text-white">
        {RELATED_SERVICES_OPTIONS.map(
          (service: RelatedServicesOptions, index: number) => (
            <div
              key={`related-services-${service}`}
              className="mx-auto flex max-h-80 w-full max-w-72 flex-col items-center rounded-sm border-b border-dotted border-b-white md:min-h-80 md:rounded-2xl md:border md:border-solid md:border-green-800 md:bg-gradient-to-t md:from-green-800/10 md:to-white/10 md:p-6"
            >
              <div className="mt-10 flex w-full items-center justify-start gap-x-4 gap-y-4 md:mt-4 md:flex-col md:items-start">
                <Image
                  className="h-10 w-10"
                  src={`/services/service-${index + 1}.svg`}
                  alt={t(`relatedServices.services.${service}.title`)}
                  width={100}
                  height={100}
                />
                <h3 className="flex min-h-10 flex-col items-center justify-center align-middle text-base font-bold text-green-50 md:justify-start md:align-top">
                  {t(`relatedServices.services.${service}.title`)}
                </h3>
              </div>
              <ul className="flex list-disc flex-col items-start gap-y-4 px-6 py-5 text-sm opacity-80 marker:text-accent-500 md:px-4">
                <li className="text-sm font-bold">
                  {t(`relatedServices.services.${service}.options.1`)}
                </li>
                <li className="text-sm font-bold">
                  {t(`relatedServices.services.${service}.options.2`)}
                </li>
              </ul>
            </div>
          ),
        )}
      </div>
      <div className="mt-5 hidden px-10 py-5 text-center text-sm text-muted md:flex">
        {t('relatedServices.moreInfo')}
      </div>
    </section>
  );
};

export default RelatedServices;
