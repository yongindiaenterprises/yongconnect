import { getTranslations, setRequestLocale } from "next-intl/server";
import TypingText from "@/app/[locale]/(default)/(home)/components/typingText";
import GalleryClient from "@/app/[locale]/(default)/(home)/components/galleryClient";
import Image from 'next/image';


export default async function MenstrualCupPage({
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

  // ✅ object → array
  const benefits = Object.values(
    t.raw("menstrualCup.benefits.list" as any) || {}
  ) as string[];

  const why = Object.values(
    t.raw("menstrualCup.why.list" as any) || {}
  ) as string[];

  const standards = Object.values(
    t.raw("menstrualCup.standards.list" as any) || {}
  ) as string[];

  const kit = Object.values(
    t.raw("menstrualCup.kit.list" as any) || {}
  ) as string[];

  const images = Object.values(
    t.raw("menstrualCup.gallery.images" as any) || {}
  ) as string[];

  return (
    <>
      {/* 🔷 HERO */}
      <section className="h-[400px] relative mx-8 mt-16 rounded-md overflow-hidden text-white">

        {/* 🌄 Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${t("images.headingbg.i4")})`,
          }}
        />

        {/* 🌑 Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* 🔷 Content */}
        <div className="relative z-10 px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            {t("menstrualCup.title")}
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-white/80 ">
            <TypingText text={t('menstrualCup.description')} />
          </p>
        </div>

      </section>

      {/* 🔷 ABOUT */}
      <section className="px-6 py-16 text-center text-white">
        <h2 className="text-3xl mb-4">
          {t("menstrualCup.about.title")}
        </h2>
        <p className="max-w-4xl mx-auto text-white/70 transition-all duration-300 hover:scale-125 hover:text-green-500">
          {t("menstrualCup.about.desc")}
        </p>
      </section>

      {/* 🔷 WORKING */}
      <section className="mx-8 py-16 text-white text-center">
        <h2 className="text-3xl mb-4">
          {t("menstrualCup.working.title")}
        </h2>
        <p className="max-w-3xl mx-auto text-white/70 transition-all duration-300 hover:scale-125 hover:text-green-500">
          {t("menstrualCup.working.desc")}
        </p>
      </section>

      {/* 🔷 BENEFITS */}
      <section className="px-6 py-16">
        <h2 className="text-3xl text-white text-center mb-10">
          {t("menstrualCup.benefits.title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div key={index} className="p-6 text-white rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg 
                   hover:bg-white/10 transition-all duration-300 hover:scale-105">
              ✅ {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 WHY */}
      <section className="mx-8 py-16">
        <h2 className="text-3xl text-white text-center mb-10">
          {t("menstrualCup.why.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {why.map((item, index) => (
            <div key={index} className="p-6 text-white rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg 
                   hover:bg-white/10 transition-all duration-300 hover:scale-105">
              ⭐ {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 STANDARDS */}
      <section className="px-6 py-16 text-white">
        <h2 className="text-3xl text-center mb-10">
          {t("menstrualCup.standards.title")}
        </h2>

        <div className="max-w-4xl mx-auto space-y-3">
          {standards.map((item, index) => (
            <p className="hover:text-green-500 transition-transform duration-300 hover:scale-105" key={index}>✔ {item}</p>
          ))}
        </div>
      </section>

      {/* 🔷 KIT */}
      <section className="mx-8 py-16">
        <h2 className="text-3xl text-white text-center mb-10">
          {t("menstrualCup.kit.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {kit.map((item, index) => (
            <div key={index} className="p-6 text-white rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg 
                   hover:bg-white/10 transition-all duration-300 hover:scale-105">
              🎁 {item}
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