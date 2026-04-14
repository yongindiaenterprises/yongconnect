import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function DesalinationProjectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: 'projects&products',
  });

  // ✅ Get categories from JSON (object → array)
  const categories = Object.values(
    t.raw('desalination.categories' as any) || {},
  ) as any[];

  return (
    <>
      {/* 🔷 HERO */}
      <section className="relative mx-8 mt-16 flex min-h-[60vh] flex-col items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-20 text-center shadow-xl backdrop-blur-lg">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          {t('desalination.title')}
        </h1>

        <p className="mt-4 max-w-2xl text-white/80 md:text-lg">
          {t('desalination.description')}
        </p>
      </section>

      {/* 🔷 INTRO */}
      <section className="px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-white">
          {t('desalination.introTitle')}
        </h2>

        <p className="mx-auto max-w-3xl text-white/70">
          {t('desalination.introDesc')}
        </p>
      </section>

      {/* 🔷 CATEGORY GRID */}
      <section className="mx-8 px-6 pb-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat: any, i: number) => {
            // ✅ FIX: convert inside map
            const subcategories = Object.values(
              cat.subcategories || {},
            ) as string[];
            const points = Object.values(cat.points || {}) as string[];

            return (
              <div
                key={cat.id || i}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-lg transition hover:scale-[1.02]"
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
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {cat.title}
                  </h3>

                  {/* Subcategories */}
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm text-gray-300">
                      Sub Categories:
                    </h4>

                    <ul className="flex flex-wrap gap-2">
                      {subcategories.map((sub, j) => (
                        <li
                          key={j}
                          className="rounded-full bg-blue-600/20 px-3 py-1 text-xs text-blue-400"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Points */}
                  <ul className="mb-4 space-y-2">
                    {points.map((point, k) => (
                      <li
                        key={k}
                        className="flex items-start gap-2 text-sm text-white/70"
                      >
                        ✅ {point}
                      </li>
                    ))}
                  </ul>

                  {/* Plan Image */}
                  <div className="relative h-64 w-full overflow-hidden rounded-lg border border-white/10">
                    <Image
                      src={cat.planImage}
                      alt="Plan"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
