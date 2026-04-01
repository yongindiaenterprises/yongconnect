'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MeetingForm } from '@/components/ui/meeting-form';

const Hero = () => {
  const t = useTranslations('home');
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="h-fit min-h-full bg-background text-white">
      <div className="mx-auto flex flex-row items-center justify-center gap-x-20 py-10 md:mx-10">
        <div className="flex max-w-xl flex-col items-center justify-center md:items-start md:text-left">
          <Badge
            className="w-fit rounded-full text-center text-base"
            variant="default"
          >
            {t('hero.catchPhrase')}
          </Badge>

          <h1 className="mt-4 justify-center px-10 text-center text-3xl text-white md:px-0 md:text-left md:text-4xl">
            {t('hero.caption.main')}
            <span className="ml-3 text-accent-500">
              {t('hero.caption.sub')}
            </span>
          </h1>

          <div className="mt-10 flex flex-col items-center text-center md:hidden">
            <p className="text-center text-xl">{t('hero.cta.label')}</p>
            <Button
              className="mt-4 bg-accent-500"
              variant="default"
              onClick={() => setIsFormOpen(true)}
            >
              {t('hero.cta.button')}
            </Button>
          </div>

          <div className="mt-16 flex max-w-md flex-col items-center md:items-start">
            <div className="font-base flex flex-col text-center font-extralight opacity-80 md:items-start md:text-xl">
              {t('hero.businessModel.label')}
            </div>
            <ul className="font-base mt-4 flex list-disc flex-col gap-y-3 px-10 font-extralight opacity-80">
              <li className="text-sm md:text-lg">
                {t('hero.businessModel.1')}
              </li>
              <li className="text-sm md:text-lg">
                {t('hero.businessModel.2')}
              </li>
              <li className="text-sm md:text-lg">
                {t('hero.businessModel.3')}
              </li>
              <li className="text-sm md:text-lg">
                {t('hero.businessModel.4')}
              </li>
            </ul>
            <div className="mt-4 px-10 text-center text-sm font-thin opacity-80 md:px-0 md:text-left md:text-lg">
              {t('hero.businessModel.moreInfo')}
            </div>
          </div>
        </div>
        <div className="mt-10 hidden min-h-80 max-w-md flex-col text-black md:flex">
          <div className="rounded-lg bg-white px-16 py-10">
            <h1 className="flex flex-col text-left text-3xl font-black md:items-start">
              {t('hero.cta.label')}
            </h1>
            <p className="mt-4 text-center text-base md:text-left">
              {t('hero.cta.subLabel')}
            </p>
            <Button
              className="mt-10 h-16 w-full bg-accent-500 text-xl font-bold hover:bg-accent-500 hover:bg-opacity-80 hover:shadow-2xl"
              variant="default"
              onClick={() => setIsFormOpen(true)}
            >
              {t('hero.cta.button')}
            </Button>
          </div>
        </div>
      </div>
      <MeetingForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default Hero;
