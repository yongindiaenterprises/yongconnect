import { getTranslations, setRequestLocale } from "next-intl/server";

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

  return (
    <>
      {/* 🔷 HERO */}
      <section className="mx-8 mt-16  px-6 py-20 rounded-md border border-white/10 bg-white/5 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          {t("incinerator.title")}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-white/80">
          {t("incinerator.description")}
        </p>
      </section>

      {/* 🔷 ABOUT */}
      <section className="px-6 py-16 text-center text-white">
        <h2 className="text-3xl mb-4">
          {t("incinerator.about.title")}
        </h2>
        <p className="max-w-4xl mx-auto text-white/70">
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
            <div key={index} className="p-6 bg-white/10 rounded-xl text-white">
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
            <div key={index} className="p-6 bg-white/10 rounded-xl">
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
            <p key={index}>✔ {item}</p>
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
            <div key={index} className="p-6 bg-white/10 rounded-xl text-white">
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
            <div key={index} className="p-6 bg-white/10 rounded-xl text-white text-center">
              ⭐ {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}