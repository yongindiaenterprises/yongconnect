import { getTranslations, setRequestLocale } from "next-intl/server";
import TypingText from "@/app/[locale]/(default)/(home)/components/typingText";
import Image from 'next/image';
import GalleryClient from "@/app/[locale]/(default)/(home)/components/galleryClient";


export default async function NapkinVendingPage({
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

  // ✅ convert object → array
  const features = Object.values(
    t.raw("napkinVending.features.list" as any) || {}
  ) as string[];

  const advantages = Object.values(
    t.raw("napkinVending.advantages.list" as any) || {}
  ) as string[];

  const specs = Object.values(
    t.raw("napkinVending.specs.list" as any) || {}
  ) as string[];

  const applications = Object.values(
    t.raw("napkinVending.applications.list" as any) || {}
  ) as string[];

  const images = Object.values(
    t.raw("napkinVending.gallery.images" as any) || {}
  ) as string[];

  return (
    <>
      {/* 🔷 HERO */}
      <section className="h-[400px] relative mx-8 mt-16 rounded-md overflow-hidden text-white">

        {/* 🌄 Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${t("images.headingbg.i6")})`,
          }}
        />

        {/* 🌑 Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* 🔷 Content */}
        <div className="relative z-10 px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            {t("napkinVending.title")}
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            <TypingText text={t('napkinVending.description')} />
          </p>
        </div>

      </section>

      {/* 🔷 ABOUT */}
      <section className="px-6 py-20 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold mb-4">
              {t("napkinVending.about.title")}
            </h2>
            <p className="text-white/70 leading-relaxed transition-all duration-300 hover:scale-110 hover:text-green-500">
              {t("napkinVending.about.desc")}
            </p>
          </div>

          {/* SVG */}
          <div className="flex justify-center">
            <Image
              src={t("images.illustrations.images.i1")}
              alt="About"
              width={350}
              height={350}
            />
          </div>

        </div>
      </section>

      {/* 🔷 FEATURES */}
      <section className="mx-8 py-20 text-center">
        <h2 className="text-3xl text-white mb-6">
          {t("napkinVending.features.title")}
        </h2>

        {/* SVG */}
        <div className="flex justify-center mb-10">
          <Image
            src={t("images.illustrations.images.i2")}
            alt="Features"
            width={280}
            height={280}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div key={index}
              className="p-6 text-white rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg 
        hover:bg-white/10 transition-all duration-300 hover:scale-105">
              ✅ {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 ADVANTAGES */}
      <section className="px-6 py-20 text-center text-white">
        <h2 className="text-3xl mb-6">
          {t("napkinVending.advantages.title")}
        </h2>

        <div className="flex justify-center mb-10">
          <Image
            src={t("images.illustrations.images.i10")}
            alt="Advantages"
            width={280}
            height={280}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <div key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg 
        hover:bg-white/10 transition-all duration-300 hover:scale-105">
              ⭐ {item}
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
              {t("napkinVending.specs.title")}
            </h2>

            <div className="space-y-3">
              {specs.map((item, index) => (
                <p key={index}
                  className="hover:text-green-500 hover:scale-105 transition">
                  ✔ {item}
                </p>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 🔷 APPLICATIONS */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl text-white mb-6">
          {t("napkinVending.applications.title")}
        </h2>

        <div className="flex justify-center mb-10">
          <Image
            src={t("images.illustrations.images.i4")}
            alt="Applications"
            width={280}
            height={280}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {applications.map((item, index) => (
            <div key={index}
              className="p-6 text-white rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg 
        hover:bg-white/10 transition-all duration-300 hover:scale-105">
              📍 {item}
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