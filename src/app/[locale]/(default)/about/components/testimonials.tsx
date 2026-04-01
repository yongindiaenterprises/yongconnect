import { getTranslations } from 'next-intl/server';

import TestimonialQuotationImage from './testimonial-quotation-image';

const Testimonials = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: 'about' });

  const testimonials = [
    {
      feedback: `detail-12.feedback-1`,
      icon: { 'bg-color': 'fill-theme-700', color: 'fill-palatte-1' },
    },
    {
      feedback: `detail-12.feedback-2`,
      icon: { 'bg-color': 'fill-theme-700', color: 'fill-palatte-2' },
    },
    {
      feedback: `detail-12.feedback-3`,
      icon: { 'bg-color': 'fill-theme-700', color: 'fill-palatte-3' },
    },
    {
      feedback: `detail-12.feedback-4`,
      icon: { 'bg-color': 'fill-theme-700', color: 'fill-palatte-4' },
    },
    {
      feedback: `detail-12.feedback-5`,
      icon: { 'bg-color': 'fill-theme-700', color: 'fill-palatte-5' },
    },
  ] as const;

  return (
    <section className="mx-auto mb-10 flex max-w-screen-lg flex-col items-center justify-center">
      <div className="grid grid-cols-1 gap-6 text-white lg:grid-cols-3">
        {testimonials.map((testimony, index) => (
          <div key={`testimony-${index}`} className="mx-4">
            <div className="-mb-8 ml-4">
              <TestimonialQuotationImage
                width="62"
                height="62"
                bgColor={`${testimony.icon['bg-color']}`}
                quotationMarkColor={`${testimony.icon.color}`}
              />
            </div>
            <div className="flex w-full flex-col items-start rounded-lg border-solid border-white bg-gradient-to-t from-green-800/10 to-white/10 p-6 lg:max-h-[500px] lg:min-h-[500px]">
              <div className="mt-10 flex w-full items-start justify-start gap-x-4 gap-y-4 md:mt-4 md:flex-col md:items-start">
                <h3 className="flex min-h-10 flex-col items-start justify-center align-middle text-sm leading-relaxed text-green-50 sm:text-base md:justify-start md:align-top lg:text-lg">
                  {t(`${testimony.feedback}.feedback`)}
                </h3>
              </div>
              <div className="mt-7 flex w-full flex-grow flex-col justify-end space-y-0 text-left">
                <h3 className="text-lg font-bold">
                  {t(`${testimony.feedback}.client.name`)}
                </h3>
                <h4 className="font-bold text-accent-500">
                  {t(`${testimony.feedback}.client.designation`)}
                </h4>
                <h4 className="font-bold text-accent-500">
                  {t(`${testimony.feedback}.client.organization`)}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
