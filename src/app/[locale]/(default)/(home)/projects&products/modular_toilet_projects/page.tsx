

import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import GalleryClient from "@/app/[locale]/(default)/(home)/components/galleryClient";
import TypingText from "@/app/[locale]/(default)/(home)/components/typingText";


export default async function ModularToiletPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "projects&products",
  });

  // ✅ Convert object → array safely
  const features = Object.values(
    t.raw("modularToilet.features.list" as any) || {}
  ) as string[];

  const specs = Object.values(
    t.raw("modularToilet.specs.list" as any) || {}
  ) as string[];

  const applications = Object.values(
    t.raw("modularToilet.applications.list" as any) || {}
  ) as string[];

  const images = Object.values(
    t.raw("modularToilet.gallery.images" as any) || {}
  ) as string[];


  return (
    <>
      {/* 🔷 HERO */}
      <section className="h-[400px] relative mx-8 mt-16 rounded-md overflow-hidden text-white">

        {/* 🌄 Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${t("images.headingbg.i1")})`,
          }}
        />

        {/* 🌑 Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* 🔷 Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              {t("modularToilet.title")}
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-white/80">
              <TypingText text={t('modularToilet.description')} />
            </p>
          </div>
        </div>

      </section>

      {/* 🔷 ABOUT */}
      <section className="px-6 py-20 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold mb-4">
              {t("modularToilet.about.title")}
            </h2>
            <p className="text-white/70 leading-relaxed transition-all duration-300 hover:scale-125 hover:text-green-500">
              {t("modularToilet.about.desc")}
            </p>
          </div>

          {/* SVG */}
          <div className="flex justify-center">
            <Image
              src={t("images.illustrations.images.i1")}
              alt="About"
              width={400}
              height={400}
              className="opacity-90"
            />
          </div>

        </div>
      </section>

      {/* 🔷 FEATURES */}
      <section className="mx-8 py-20">
        <h2 className="text-3xl text-white text-center mb-6">
          {t("modularToilet.features.title")}
        </h2>

        {/* SVG */}
        <div className="flex justify-center mb-10">
          <Image
            src={t("images.illustrations.images.i2")}
            alt="Features"
            width={300}
            height={300}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg 
                   hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <p className="text-white">✨ {item}</p>
            </div>
          ))}
        </div>
      </section>
      {/* 🔷 SPECIFICATIONS */}
      <section className="px-6 py-20 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* SVG */}
          <div className="flex justify-center">
            <Image
              src={t("images.illustrations.images.i3")}
              alt="Specifications"
              width={350}
              height={350}
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl mb-6">
              {t("modularToilet.specs.title")}
            </h2>

            <div className="space-y-3 text-white/80 ">
              {specs.map((item, index) => (
                <p
                  key={index}
                  className="hover:text-green-500 transition-transform duration-300 hover:scale-105"
                >
                  ✔ {item}
                </p>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 🔷 APPLICATIONS */}
      <section className="mx-8 py-20 text-center">
        <h2 className="text-3xl text-white mb-6">
          {t("modularToilet.applications.title")}
        </h2>

        {/* SVG */}
        <div className="flex justify-center mb-10">
          <Image
            src={t("images.illustrations.images.i4")}
            alt="Applications"
            width={300}
            height={300}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {applications.map((item, index) => (
            <div
              key={index}
              className="p-6 text-white rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg 
                   hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              ⭐ {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 GALLERY */}
      <section className="px-6 pb-20">
        <h2 className="text-3xl text-white text-center mb-6">
          {t("modularToilet.gallery.title")}
        </h2>

        {/* SVG */}
        <div className="flex justify-center mb-10">
          <Image
            src={t("images.illustrations.images.i5")}
            alt="Gallery"
            width={280}
            height={280}
          />
        </div>

        <GalleryClient images={images} />


      </section>
    </>
  );
}