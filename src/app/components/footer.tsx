'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { locales } from '@/config';
import { Link } from '@/i18n/routing';

import logo from '../../../public/logo.svg';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

const addresses = ['trivandrum', 'malappuram', 'cochin'] as const;

const Footer = ({ locale }: { locale: string }) => {
  const t = useTranslations('footer');

  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(`/${newLocale}`);
  };
  return (
    <footer className="items-c:enter flex w-full bg-background py-5 text-center text-white md:items-start">
      <div className="mx-auto flex flex-col justify-center gap-x-10 gap-y-5 border-t border-dotted border-white border-t-white py-10 md:flex-row">
        <div className="flex flex-col items-start justify-center gap-x-10 gap-y-5 md:min-w-60 md:flex-row">
          <div className="logo flex w-full justify-center text-center md:w-fit md:justify-start md:text-left">
            <Image src={logo} alt="logo" width={150} height={150} />
          </div>
          <div className="hidden flex-col gap-y-6 text-center md:flex md:text-left">
            {addresses.map(address => (
              <div
                className="address flex w-fit max-w-60 flex-col gap-y-2"
                key={'address-' + address}
              >
                <div className="text-sm">{t(`offices.${address}.address`)}</div>
                <div className="text-sm">{t(`offices.${address}.phone`)}</div>
                <div className="text-sm">{t(`offices.${address}.email`)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-y-4 text-center md:w-52 md:text-left">
          <Link className="text-base font-bold" href="#">
            {t('links.plans')}
          </Link>
          <Link className="text-base font-bold" href={`/#related-services`}>
            {t('links.relatedServices')}
          </Link>
          <Link className="text-base font-bold" href={`/#products`}>
            {t('links.products')}
          </Link>
          <Link className="text-base font-bold" href={`/#global-presence`}>
            {t('links.globalPresence')}
          </Link>
          <Link className="text-base font-bold" href="#">
            {t('links.yongConnect')}
          </Link>
          <Link className="text-base font-bold" href="/support">
            {t('links.support')}
          </Link>
          <Link className="text-base font-bold" href="/support">
            {t('links.contact')}
          </Link>
          <Link className="text-base font-bold" href="/about">
            {t('links.about')}
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-y-4">
          {/*
          <div className="flex w-fit min-w-96 flex-col gap-y-4 px-4 text-center md:px-0 md:text-right">
            <Input
              type="email"
              placeholder={t('action.emailAddress')}
              className="h-14 w-full rounded-lg bg-secondary"
            />
            <Button className="h-14 w-full rounded-lg bg-accent-500 text-base font-bold">
              {t('action.getCatalog')}
            </Button>
          </div>
          */}
          <div className="flex w-fit min-w-96 flex-col text-center text-accent md:text-right">
            <div className="text-sm">{t('copyright')}</div>
          </div>
          <div className="flex w-fit min-w-96 flex-col items-center text-center text-accent md:items-end md:text-left">
            <Select defaultValue={locale} onValueChange={handleLocaleChange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {locales.map(locale => (
                  <SelectItem key={locale} value={locale}>
                    {t(`locales.${locale}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
