import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { Button } from '@/components/ui/button';
import { products } from '@/config';

import ImageSelector from './image-selector';

type Product = (typeof products)[number];
const featureDescriptions = [
  'touchScreen',
  'iotEnabled',
  'payment',
  'efficiency',
  'warranty',
] as const;

const features = [
  'capacity',
  'touchScreen',
  'iotEnabled',
  'payment',
  'efficiency',
  'customization',
  'durable',
  'idealFor',
] as const;

const keyFeatures = ['efficiency', 'packets', 'payment'] as const;

const specs = [
  'model',
  'dimensions',
  'power',
  'weight',
  'refrigerant',
] as const;
export const dynamicParams = false;

export async function generateStaticParams() {
  return products.map((p: string) => ({ id: p }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const t = await getTranslations({ locale, namespace: 'products' });
  const product = id as Product;
  return (
    <>
      <section className="mx-auto mt-10 flex max-w-screen-sm flex-col gap-8 text-white md:max-w-screen-md md:flex-row lg:max-w-screen-lg">
        <div className="flex w-full flex-1 flex-col px-4 py-6 font-semibold text-white">
          <h1 className="mb-4 text-start text-xl font-bold opacity-80 md:hidden md:text-start">
            {t(`products.${product}.title`)}
          </h1>
        </div>
        <ImageSelector product={product} />
        <div className="mx-auto flex max-w-sm flex-col items-start justify-center gap-8 md:justify-between md:pb-32 md:pt-8">
          <div className="flex flex-col gap-y-4">
            <h1 className="hidden text-center text-4xl font-bold md:flex md:text-start">
              {t(`products.${product}.title`)}
            </h1>
            <p className="text-start text-lg font-medium">
              {t(`products.${product}.shortTitle`)}
            </p>
          </div>
          <div className="mx-auto flex w-full flex-col gap-y-4">
            <ul className="flex list-disc flex-col gap-y-2 px-4 md:gap-y-8">
              {featureDescriptions.map(feature => (
                <li key={feature} className="">
                  <p className="text-start text-base font-medium opacity-60">
                    {t(
                      `products.${product}.featureDescriptions.${feature}.label`,
                    )}
                    {': '}
                    <span className="text-start text-sm opacity-60">
                      {t(
                        `products.${product}.featureDescriptions.${feature}.description`,
                      )}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-10 flex max-w-screen-sm flex-col gap-8 text-white md:max-w-screen-md lg:max-w-screen-lg">
        <div className="mx-auto flex w-full max-w-sm flex-col items-start justify-center gap-4 bg-card md:max-w-screen-md lg:max-w-screen-lg">
          <div
            className={`flex h-fit w-full flex-col gap-y-4 md:flex-row-reverse md:bg-[url("/products/feature-banner.jpeg")] md:bg-cover md:bg-no-repeat`}
          >
            <Image
              src={`/products/feature-banner.jpeg`}
              alt="feature-list"
              width="0"
              height="0"
              sizes="100vw"
              className="h-full w-full min-w-96 max-w-60 object-contain md:hidden"
            />
            <div
              className={`flex w-full flex-col gap-y-1 px-5 py-6 md:bg-gradient-to-r md:from-black md:to-transparent`}
            >
              <h2 className="text-start text-xl font-black text-green-400">
                {t(`products.${product}.shortTitle`)}
              </h2>
              <p className="text-start text-sm font-medium opacity-60">
                {t(`products.${product}.title`)}
              </p>

              <div className="mt-4 flex w-full flex-col gap-y-4">
                {keyFeatures.map(feature => (
                  <div
                    key={feature}
                    className="flex w-full flex-row items-start justify-center gap-x-4"
                  >
                    <Image
                      src={`/icons/${feature}.svg`}
                      alt={'feature-icon-' + feature}
                      width={20}
                      height={20}
                    />
                    <div className="flex flex-1 flex-col gap-y-1">
                      <p className="flex flex-1 text-start text-sm font-medium opacity-80">
                        {t(`products.${product}.keyFeatures.${feature}.title`)}
                      </p>
                      <p className="flex flex-1 text-start text-xs opacity-60">
                        {t(
                          `products.${product}.keyFeatures.${feature}.description`,
                        )}
                      </p>
                    </div>
                  </div>
                ))}
                <p className="mt-8 text-start text-[0.6rem] opacity-60">
                  {t(`conditionWarning`)}
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-y-4 px-4 py-6">
            {features.map(feature => (
              <div
                key={feature}
                className="flex w-full flex-row items-start justify-start"
              >
                <p className="flex flex-1 text-start text-base font-medium opacity-80 md:max-w-64">
                  {t(`products.${product}.features.${feature}.title`)}
                </p>
                <p className="flex flex-1 whitespace-pre-line text-start text-sm opacity-60">
                  {t(`products.${product}.features.${feature}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-sm flex-col justify-center gap-x-4 md:max-w-screen-md md:flex-row lg:max-w-screen-lg">
          <div className="flex w-full flex-col items-center justify-center gap-y-4 rounded-xl bg-black bg-opacity-5 p-4 md:min-h-80 md:max-w-80">
            <Image
              src={`/products/feature-iot-enabled.svg`}
              alt="feature-list-iot"
              width="0"
              height="0"
              sizes="100vw"
              className="h-full w-full min-w-32 max-w-56 object-contain px-10 grayscale"
            />
            <h2 className="self-start text-start text-xl font-black">
              {t(`commonFeatures.iotEnabled.title`)}
            </h2>
            <p className="text-start text-base opacity-60">
              {t(`commonFeatures.iotEnabled.description`)}
            </p>
          </div>

          <div className="mt-10 flex min-h-48 w-full flex-col justify-end gap-y-4 bg-[url('/products/tft-feature.png')] bg-cover bg-center bg-no-repeat md:min-h-80">
            <div className="flex w-full flex-col items-start justify-center gap-y-1 bg-gradient-to-t from-black to-transparent px-4 py-6">
              <Image
                src={`/products/tft-certifications.svg`}
                alt="feature-list-tft-certifications"
                width="0"
                height="0"
                sizes="100vw"
                className="h-full w-full max-w-32 object-contain md:max-w-56"
              />
              <h3 className="w-full text-start text-sm font-black md:text-xl">
                {t(`commonFeatures.tftScreen.title`)}
              </h3>
              <p className="text-start text-xs opacity-60 md:text-base">
                {t(`commonFeatures.tftScreen.description`)}
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-sm flex-col justify-center gap-y-4 bg-card px-4 py-6 md:max-w-screen-md lg:max-w-screen-lg">
          {specs.map(spec => (
            <div
              key={spec}
              className="flex w-full flex-row items-start justify-start"
            >
              <p className="flex max-w-64 flex-1 text-start text-base font-medium opacity-80">
                {t(`products.${product}.specs.${spec}.title`)}
              </p>
              <p className="flex flex-1 whitespace-pre-line text-start text-sm opacity-60">
                {t(`products.${product}.specs.${spec}.description`)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
