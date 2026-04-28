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

  const seawaterCategories = Object.values(
    t.raw('desalination.seawater_desalination_plants.categories' as any) || {}
  ) as any[];

  const brackishCategories = Object.values(
    t.raw('desalination.brackish_desalination_plants.categories' as any) || {}
  ) as any[];

  const projects = Object.values(
    t.raw("desalination.projects.list" as any) || {}
  ) as {
    name: string;
    image: string;
    desc: string;
  }[];


  function renderCategoryGrid(categories: any[]) {
    return (
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat: any, i: number) => {
          const subcategories = Object.values(cat.subcategories || {}) as string[];

          return (
            <div
              key={cat.id || i}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-lg transition hover:scale-[1.02]"
            >
              <ImageLightbox
                src={cat.image}
                alt={cat.title}
                className="h-52 w-full rounded-t-2xl overflow-hidden"
              />

              <div className="p-6 text-left">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {cat.title}
                </h3>

                {cat.volumes && (
                  <div className="mb-4">
                    <div className="rounded-md px-4 py-2 text-sm border border-white/10 transition">
                      <div className="inline-block hover:scale-[1.05] hover:border-green-300 transition border border-transparent rounded-md px-2 py-1">

                        <span className="text-white/70">Treated water volume</span>
                        <br />

                        <span className="text-lg font-semibold text-white">
                          {cat.volumes}
                        </span>

                      </div>

                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="mb-2 text-sm text-gray-300">Variants:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {subcategories.map((sub, j) => (
                      <li
                        key={j}
                        className="rounded-full bg-green-600/20 px-3 py-1 text-xs text-green-400 hover:bg-white hover:text-black transition hover:scale-[1.1]"
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Points */}

                {cat.points?.title1 && (
                  <div className="mb-3 bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-green-400 font-semibold">
                      {cat.points.title1}
                    </p>
                    <p className="text-white/70 text-sm mt-1">
                      {cat.points.desc1}
                    </p>
                  </div>
                )}

                {cat.points?.title2 && (
                  <div className="mb-3 bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-green-400 font-semibold">
                      {cat.points.title2}
                    </p>
                    <p className="text-white/70 text-sm mt-1">
                      {cat.points.desc2}
                    </p>
                  </div>
                )}

                {/* Plan */}
                <ImageLightbox
                  src={cat.planImage}
                  alt="Plan"
                  className="h-64 w-full rounded-lg border border-white/10 overflow-hidden"
                />

                {/* Table */}
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
    );
  }

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




      <section className="mx-8 px-6 pb-20 space-y-20">

        {/* 🌊 SEAWATER */}
        {seawaterCategories.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-white text-center">
              Seawater Desalination Plants
            </h2>

            {renderCategoryGrid(seawaterCategories)}
          </>
        )}

        {/* 💧 BRACKISH */}
        {brackishCategories.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-white text-center">
              Brackish Water Plants
            </h2>

            {renderCategoryGrid(brackishCategories)}
          </>
        )}

      </section>
    </>
  );
}
