'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { products } from '@/config';

type Product = (typeof products)[number];

const ImageSelector = ({ product }: { product: Product }) => {
  const t = useTranslations('products');
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex h-full min-h-[30rem] w-full min-w-60 flex-grow items-center justify-center overflow-hidden rounded-lg bg-white">
        <Image
          src={`/products/${product}/image-${imageIndex}.png`}
          alt={t(`products.${product}.title`)}
          width="0"
          height="0"
          sizes="100vw"
          className="aspect-square h-full w-full object-contain"
        />
      </div>
      <Carousel
        opts={{
          align: 'center',
        }}
        className="mx-auto w-full max-w-sm px-12 py-10 md:max-w-screen-sm md:px-20 md:py-20"
      >
        <CarouselContent className="h-14 gap-x-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/4 cursor-pointer items-center justify-center bg-white"
              onClick={() => setImageIndex(index)}
            >
              <div className="flex h-full min-h-10 w-full min-w-12 items-center justify-center">
                <Image
                  src={`/products/${product}/image-${index}.png`}
                  alt={t(`products.${product}.title`)}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="aspect-square h-full w-full items-center justify-center object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[1rem] top-1/2 z-10 text-white" />
        <CarouselNext className="absolute right-[1rem] top-1/2 z-10 text-white" />
      </Carousel>
    </div>
  );
};
export default ImageSelector;
