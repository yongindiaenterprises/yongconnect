import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ImageLightbox from "@/app/[locale]/(default)/(home)/components/ImageLightbox";
import TypingText from "@/app/[locale]/(default)/(home)/components/typingText";
import DesalinationCircle from "@/app/[locale]/(default)/(home)/components/desalinationCircle";
import DesalinationTable from "@/app/[locale]/(default)/(home)/components/DesalinationTable";
import DesalinationTableViewer from "@/app/[locale]/(default)/(home)/components/DesalinationTableViewer";
import styles from "./DesalinationCircle.module.css";

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

  const projects = Object.values(
    t.raw("desalination.projects.list" as any) || {}
  ) as {
    name: string;
    image: string;
    desc: string;
  }[];
  const table = t.raw("desalination.categories.c1.table" as any);

  return (
    <>
      {/* 🔷 HERO */}
      <section className="relative mx-8 mt-16 rounded-md overflow-hidden text-white">

        {/* 🌄 Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${t("images.headingbg.i2")})`,
          }}
        />

        {/* 🌑 Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* 🔷 Content */}
        <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
          <h1 className="text-4xl font-bold md:text-6xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            {t('desalination.title')}
          </h1>

          <p className="mt-4 max-w-2xl text-white/80 md:text-lg">
            <TypingText text={t('desalination.description')} />
          </p>
        </div>

      </section>

      {/* 🔷 INTRO */}
      <section className="px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-white">
          {t('desalination.introTitle')}
        </h2>

        <p className="mx-auto max-w-3xl text-white/70 transition-all duration-300 hover:scale-125 hover:text-green-500">
          {t('desalination.introDesc')}
        </p>
      </section>

      {/* graph grid  */}

      <div className="w-full flex justify-center">
        <div
          className="relative w-[560px] h-[660px] overflow-hidden isolate"
          style={{ contain: "layout paint size", willChange: "transform" }}
        >
          <DesalinationCircle projects={projects} />
        </div>
      </div>




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
                <ImageLightbox
                  src={cat.image}
                  alt={cat.title}
                  className="h-52 w-full rounded-t-2xl overflow-hidden"
                />

                {/* Content */}
                <div className="p-6 text-left">
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {cat.title}
                  </h3>

                  {/* 🔷 Treated Water Volume */}
                  {cat.volumes && (
                    <div className="mb-4">
                      <div className="inline-block rounded-md hover:bg-black/60 px-4 py-2 text-sm text-white border border-white/10">
                        <span className="text-white/70">Treated water volume</span>
                        <br />
                        <span className="text-lg font-semibold text-white">
                          {cat.volumes}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Subcategories */}
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm text-gray-300">
                      Variants:
                    </h4>

                    <ul className="flex flex-wrap gap-2">
                      {subcategories.map((sub, j) => (
                        <li
                          key={j}
                          className="rounded-full bg-green-600/20 px-3 py-1 text-xs text-green-400 transition-transform duration-300 hover:scale-110 hover:bg-white hover:text-black"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 🔷 Specifications / Points */}
                  <div className="mb-4 space-y-3">

                    {cat.points?.title1 && (
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                        <p className="text-green-400 font-semibold">
                          {cat.points.title1}
                        </p>
                        <p className="text-white/70 text-sm mt-1">
                          {cat.points.desc1}
                        </p>
                      </div>
                    )}

                    {cat.points?.title2 && (
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                        <p className="text-green-400 font-semibold">
                          {cat.points.title2}
                        </p>
                        <p className="text-white/70 text-sm mt-1">
                          {cat.points.desc2}
                        </p>
                      </div>
                    )}

                  </div>

                  {/* Plan Image */}
                  <ImageLightbox
                    src={cat.planImage}
                    alt="Plan"
                    className="h-64 w-full rounded-lg border border-white/10 overflow-hidden"
                  />
                  {cat?.table && (
                    <DesalinationTableViewer
                      models={cat.table.models}
                      rowLabels={cat.table.rowLabels}
                    />
                  )}

                </div>

              </div>

            );
          })}

        </div>

      </section>
    </>
  );
}
