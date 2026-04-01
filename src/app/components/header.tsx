'use client';

import { Bars3Icon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { MeetingForm } from '@/components/ui/meeting-form';

import logo from '../../../public/logo.svg';

const Header = ({ locale }: { locale: string }) => {
  const t = useTranslations('header');
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 mx-auto max-h-32 bg-background text-white sm:bg-background">
      <div className="flex w-full items-center justify-between px-10 py-5 md:px-20 md:py-10 lg:px-32">
        <div className="flex w-full items-center justify-between">
          <Link className="flex-shrink-0" href={`/${locale}`}>
            <Image src={logo} alt="logo" width={150} height={200} />
          </Link>
          <nav className="hidden items-center justify-center space-x-4 sm:flex md:space-x-5 lg:space-x-10">
            <Link
              href={`/${locale}`}
              className="font-medium text-white hover:text-gray-300"
            >
              {t('links.yongConnect')}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="font-medium text-white hover:text-gray-300"
            >
              {t('links.aboutUs')}
            </Link>
            <Link
              href={`/${locale}/support`}
              className="font-medium text-white hover:text-gray-300"
            >
              {t('links.support')}
            </Link>
            <Button
              className="h-12 font-medium"
              onClick={() => setIsFormOpen(true)}
            >
              {t('cta.schedule')}
            </Button>
          </nav>
          {/* Hamburger Menu for Mobile */}
          <div className="align-center flex flex-1 justify-end sm:hidden">
            <input
              type="checkbox"
              id="menu-toggle"
              className="peer hidden"
              checked={isOpen}
              onChange={() => setIsOpen(!isOpen)}
            />
            <label htmlFor="menu-toggle" className="cursor-pointer text-white">
              <Bars3Icon className="h-6 w-6 peer-checked:hidden" />
            </label>
            <nav className="absolute left-0 top-full w-full origin-top scale-0 transform space-y-4 bg-background p-5 pl-12 transition-transform peer-checked:scale-100">
              <Link
                href={`/${locale}`}
                className="block font-medium text-white hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {t('links.yongConnect')}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="block font-medium text-white hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {t('links.aboutUs')}
              </Link>
              <Link
                href={`/${locale}/support`}
                className="block font-medium text-white hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {t('links.support')}
              </Link>
              <button
                className="block font-medium text-accent-500 hover:text-primary"
                onClick={() => {
                  setIsOpen(false);
                  setIsFormOpen(true);
                }}
              >
                {t('cta.schedule')}
              </button>
            </nav>
          </div>
        </div>
      </div>
      <MeetingForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </header>
  );
};

export default Header;
