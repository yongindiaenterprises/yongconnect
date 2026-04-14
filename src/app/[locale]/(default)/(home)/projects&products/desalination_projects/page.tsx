import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function DesalinationProjectPage({
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

  // ✅ Get categories from JSON
  const categories = t.raw("desalination.categories");

  return (
    <>
      {/* 🔷 HERO */}
      <section className="relative mx-8 mt-16 flex min-h-[60vh] flex-col items-center justify-center bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl px-4 py-20 text-center rounded-md">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          {t("desalination.title")}
        </h1>

        <p className="mt-4 max-w-2xl text-white/80 md:text-lg">
          {t("desalination.description")}
        </p>
      </section>

      {/* 🔷 INTRO */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">
          {t("desalination.introTitle")}
        </h2>

        <p className="max-w-3xl mx-auto text-white/70">
          {t("desalination.introDesc")}
        </p>
      </section>

      {/* 🔷 CATEGORY GRID */}
      <section className="mx-8 px-6 pb-20 ">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat: any) => (
            <div
              key={cat.id}
              className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl overflow-hidden hover:scale-[1.02] transition"
            >
              {/* Image */}
              <div className="relative h-52 w-full">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {cat.title}
                </h3>

                {/* Subcategories */}
                <div className="mb-4">
                  <h4 className="text-sm text-gray-300 mb-2">
                    Sub Categories:
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {cat.subcategories.map((sub: string, i: number) => (
                      <li
                        key={i}
                        className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full"
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Points */}
                <ul className="space-y-2 mb-4">
                  {cat.points.map((point: string, i: number) => (
                    <li
                      key={i}
                      className="text-sm text-white/70 flex items-start gap-2"
                    >
                      ✅ {point}
                    </li>
                  ))}
                </ul>

                {/* Plan Image */}
                <div className="relative h-64 w-full rounded-lg overflow-hidden border border-white/10">
                  <Image
                    src={cat.planImage}
                    alt="Plan"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}