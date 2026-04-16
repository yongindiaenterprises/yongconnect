import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

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
      <section className="mx-8 mt-16 rounded-md border border-white/10 bg-white/5 px-6 py-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          {t("modularToilet.title")}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-white/80">
          {t("modularToilet.description")}
        </p>
      </section>

      {/* 🔷 ABOUT */}
      <section className="px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">
          {t("modularToilet.about.title")}
        </h2>
        <p className="max-w-4xl mx-auto text-white/70">
          {t("modularToilet.about.desc")}
        </p>
      </section>

      {/* 🔷 FEATURES */}
      <section className="mx-8 py-16">
        <h2 className="text-3xl text-white text-center mb-10">
          {t("modularToilet.features.title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/10 text-white"
            >
              ✅ {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 SPECIFICATIONS */}
      <section className="px-6 py-16 text-white">
        <h2 className="text-3xl text-center mb-10">
          {t("modularToilet.specs.title")}
        </h2>

        <div className="max-w-4xl mx-auto space-y-3 text-white/80">
          {specs.map((item, index) => (
            <p key={index}>✔ {item}</p>
          ))}
        </div>
      </section>

      {/* 🔷 APPLICATIONS */}
      <section className="mx-8 py-16">
        <h2 className="text-3xl text-white text-center mb-10">
          {t("modularToilet.applications.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {applications.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 rounded-xl text-white text-center"
            >
              ⭐ {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 GALLERY */}
      <section className="px-6 pb-20">
        <h2 className="text-3xl text-white text-center mb-10">
          {t("modularToilet.gallery.title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-64 w-full rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                alt="Modular Toilet"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}