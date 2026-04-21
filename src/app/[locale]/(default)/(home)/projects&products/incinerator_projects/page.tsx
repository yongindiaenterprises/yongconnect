import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import TypingText from "@/app/[locale]/(default)/(home)/components/typingText";
import GalleryClient from "@/app/[locale]/(default)/(home)/components/galleryClient";




export default async function IncineratorPage({
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
    t.raw("incinerator.features.list" as any) || {}
  ) as string[];

  const types = Object.values(
    t.raw("incinerator.types.list" as any) || {}
  ) as string[];

  const specs = Object.values(
    t.raw("incinerator.specs.list" as any) || {}
  ) as string[];

  const components = Object.values(
    t.raw("incinerator.components.list" as any) || {}
  ) as string[];

  const applications = Object.values(
    t.raw("incinerator.applications.list" as any) || {}
  ) as string[];

   const images = Object.values(
    t.raw("incinerator.gallery.images" as any) || {}
  ) as string[];

  return (
    <>
      {/* 🔷 HERO */}
      <section className="relative h-[400px] mx-8 mt-16 rounded-md overflow-hidden text-white">

        {/* 🌄 Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${t("images.headingbg.i3")})`,
          }}
        />

        {/* 🌑 Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* 🔷 Content */}
        <div className="relative z-10 px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            {t("incinerator.title")}
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            <TypingText text={t('incinerator.description')} />
          </p>
        </div>

      </section>

      {/* 🔷 ABOUT */}
      <section className="px-6 py-16 text-center text-white">
        <h2 className="text-3xl mb-4">
          {t("incinerator.about.title")}
        </h2>
        <p className="max-w-4xl mx-auto text-white/70 transition-all duration-300 hover:scale-125 hover:text-green-500">
          {t("incinerator.about.desc")}
        </p>
      </section>

      {/* 🔷 FEATURES */}
      <section className="mx-8 py-16">
        <h2 className="text-3xl text-white text-center mb-10">
          {t("incinerator.features.title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg 
                   hover:bg-white/10 transition-all duration-300 hover:scale-105 text-white">
              ✅ {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 TYPES */}
      <section className="px-6 py-16 text-white">
        <h2 className="text-3xl text-center mb-10">
          {t("incinerator.types.title")}
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {types.map((item, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg 
                   hover:bg-white/10 transition-all duration-300 hover:scale-105">
              ⚙ {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 SPECIFICATIONS */}
      <section className="mx-8 py-16 text-white">
        <h2 className="text-3xl text-center mb-10">
          {t("incinerator.specs.title")}
        </h2>

        <div className="max-w-4xl mx-auto space-y-3">
          {specs.map((item, index) => (
            <p className="hover:text-green-500 transition-transform duration-300 hover:scale-105" key={index}>✔ {item}</p>
          ))}
        </div>
      </section>

      {/* 🔷 COMPONENTS */}
      <section className="px-6 py-16">
        <h2 className="text-3xl text-white text-center mb-10">
          {t("incinerator.components.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {components.map((item, index) => (
            <div key={index} className="p-6 text-white rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg 
                   hover:bg-white/10 transition-all duration-300 hover:scale-105">
              🔧 {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 APPLICATIONS */}
      <section className="mx-8 py-16">
        <h2 className="text-3xl text-white text-center mb-10">
          {t("incinerator.applications.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {applications.map((item, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg 
                   hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center text-white">
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