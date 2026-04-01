import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const PaymentServices = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <section className="mx-auto mt-20 flex max-w-80 flex-col items-center justify-center gap-4 text-white md:max-w-screen-md md:flex-row lg:max-w-screen-lg">
      <div className="flex flex-col gap-4">
        <h2 className="px-12 text-center text-2xl font-black opacity-80 md:px-0 md:text-start">
          {t('paymentServices.title')}
        </h2>
        <p className="text-center text-sm font-bold opacity-80 md:text-start">
          {t('paymentServices.description')}
        </p>
        <div className="flex flex-col items-center justify-center gap-2 md:items-start md:justify-start">
          <p className="text-center text-sm font-medium lowercase opacity-60">
            {t('paymentServices.label')}
          </p>
          <Image src="/payment/paytm.svg" alt="paytm" width={100} height={40} />
        </div>
      </div>
      <div className="hidden w-full flex-col items-center md:flex">
        <Image
          src="/payment/overall.svg"
          alt="overall"
          width={550}
          height={500}
        />
        <p className="text-center text-sm font-medium lowercase opacity-60 md:text-start">
          {t('paymentServices.manyMore')}
        </p>
      </div>
    </section>
  );
};

export default PaymentServices;
