'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { products } from '@/config';

const Products = () => {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('products');
  const [showSlider, setShowSlider] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (!contentRef.current) return;
      const container = contentRef.current;
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setShowSlider(container.scrollWidth > container.clientWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="mx-auto mt-10 scroll-mt-40 md:max-w-screen-lg"
      id="products"
    >
      <div className="relative">
        <Carousel
          opts={{
            align: 'start',
            loop: false,
            skipSnaps: false,
            containScroll: 'keepSnaps',
            dragFree: false,
            slidesToScroll: 1,
            watchDrag: true,
            watchResize: true,
            watchSlides: true,
          }}
          className="mx-auto w-full max-w-sm md:max-w-screen-lg"
        >
          {/* Show arrows on mobile too */}
          <CarouselPrevious className="left-2 md:left-4" />
          <CarouselContent
            ref={contentRef}
            className="flex"
            style={{
              // Ensure proper touch scrolling on mobile
              touchAction: 'pan-x',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {products.map(product => (
              <CarouselItem
                key={product}
                className="basis-full md:basis-1/3 lg:basis-1/4"
              >
                <Link
                  className="flex justify-center p-1"
                  href={`/${locale}/products/${product}`}
                >
                  <Card className="border-1 min-w-60 rounded-sm p-0">
                    <CardContent className="flex items-center justify-center p-0">
                      <div className="flex min-h-96 flex-1 flex-col items-center justify-center">
                        <div className="flex max-h-60 min-h-60 w-full flex-grow overflow-hidden bg-white">
                          <Image
                            className="aspect-square object-contain"
                            src={`/products/${product}/image-0.png`}
                            alt={t(`products.${product}.title`)}
                            width={200}
                            height={200}
                          />
                        </div>
                        <div className="flex w-full flex-1 flex-col px-4 py-6 font-semibold text-white">
                          <div className="flex w-full flex-1 text-start text-xl font-bold">
                            {t(`products.${product}.title`)}
                          </div>
                          <div className="text-sm font-medium text-white">
                            {t(`products.${product}.price`) !== 'N/A' &&
                              t(`products.${product}.price`)}
                            {t(`products.${product}.mrp`) !== 'N/A' && (
                              <span className="ml-2 font-light text-muted-foreground line-through">
                                {t(`products.${product}.mrp`)}
                              </span>
                            )}
                          </div>
                          <Button className="mt-4">
                            {t(`products.${product}.cta.label`)}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-2 md:right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default Products;
