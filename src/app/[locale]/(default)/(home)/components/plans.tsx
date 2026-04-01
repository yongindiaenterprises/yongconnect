'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { ContactSalesForm } from '@/components/ui/contact-sales-form';

const plans = [
  'rental',
  'retail',
  'hybrid',
  'partnership',
  'enterprise',
] as const;

const Plans = () => {
  const t = useTranslations('home');
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>();

  const handleContactSales = (plan: string) => {
    setSelectedPlan(plan);
    setIsContactFormOpen(true);
  };

  const renderPlans = (plan: (typeof plans)[number], index: number) => {
    return (
      <div
        key={`plans-${plan}`}
        className={`flex min-h-[30rem] min-w-80 max-w-80 flex-col justify-between rounded-3xl border bg-white bg-opacity-10 border-plan-${index + 1} p-8 shadow-md`}
      >
        <div className="relative flex justify-end">
          <Image
            className="absolute left-32 top-[-5rem] w-44"
            src={`/plans/${plan}.svg`}
            alt={`${t(`plans.${plan}.title`)}`}
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <h2 className={`text-plan-${index + 1} w-20 text-xl font-bold`}>
            {t(`plans.${plan}.title`)}
          </h2>
          <p className="mt-1 text-sm text-muted">
            {t(`plans.${plan}.subTitle`)}
          </p>
        </div>
        <ul className="ml-3 mt-4 flex list-disc flex-col items-start gap-y-2 text-sm text-white opacity-80">
          {t(`plans.${plan}.features.1`) ? (
            <li className="text-sm">{t(`plans.${plan}.features.1`)}</li>
          ) : (
            <></>
          )}
          {t(`plans.${plan}.features.2`) ? (
            <li className="text-sm">{t(`plans.${plan}.features.2`)}</li>
          ) : (
            <></>
          )}
          {t(`plans.${plan}.features.3`) ? (
            <li className="text-sm">{t(`plans.${plan}.features.3`)}</li>
          ) : (
            <></>
          )}
          {t(`plans.${plan}.features.4`) ? (
            <li className="text-sm">{t(`plans.${plan}.features.4`)}</li>
          ) : (
            <></>
          )}
          {t(`plans.${plan}.features.5`) ? (
            <li className="text-sm">{t(`plans.${plan}.features.5`)}</li>
          ) : (
            <></>
          )}
          {t(`plans.${plan}.features.6`) ? (
            <li className="text-sm">{t(`plans.${plan}.features.6`)}</li>
          ) : (
            <></>
          )}
          {t(`plans.${plan}.features.7`) ? (
            <li className="text-sm">{t(`plans.${plan}.features.7`)}</li>
          ) : (
            <></>
          )}
        </ul>
        <Button
          className={`bg-plan-${index + 1} mt-4 w-full text-black`}
          variant="destructive"
          onClick={() => handleContactSales(t(`plans.${plan}.title`))}
        >
          {t(`plans.${plan}.cta.label`)}
        </Button>
      </div>
    );
  };

  return (
    <>
      <div className="mx-auto mt-32 flex max-w-screen-xl flex-row flex-wrap items-center justify-center gap-x-10 gap-y-20">
        {plans.map(plan => renderPlans(plan, plans.indexOf(plan)))}
      </div>
      <ContactSalesForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        planTitle={selectedPlan}
      />
    </>
  );
};

export default Plans;
