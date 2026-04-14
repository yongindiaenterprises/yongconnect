import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function VendingMachinePage({
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

  const whyUs = Object.values(
    t.raw('vendingmachine.whyUs.points' as any) || {},
  ) as string[];

  const trayDetails = Object.values(
    t.raw('vendingmachine.tray.details' as any) || {},
  ) as string[];

  const customers = Object.values(
    t.raw('vendingmachine.customers.list' as any) || {},
  ) as string[];

  return (
    <>
      {/* 🔷 HERO */}
      <section className="mx-8 mt-16 rounded-lg border border-white/10 bg-white/5 py-20 shadow-xl backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">
            {t('vendingmachine.title')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            {t('vendingmachine.description')}
          </p>
        </div>
      </section>

      {/* 🔷 ABOUT */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <Image
            src="/projects&products/vending_machine/vending-machine.png"
            alt="Snack Vending Machine"
            width={300}
            height={200}
            className="rounded-xl"
          />
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              {t('vendingmachine.about.title')}
            </h2>
            <p className="text-white/70">{t('vendingmachine.about.desc')}</p>
          </div>
        </div>
      </section>

      {/* 🔷 WHY US */}
      <section className="bg-white/5 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-8 text-3xl font-semibold text-white">
            {t('vendingmachine.whyUs.title')}
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {whyUs.map((item, i) => (
              <div key={i} className="rounded-xl bg-white/10 p-6 text-white">
                ✅ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 VISION & MISSION */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white/5 p-6">
            <h3 className="mb-3 text-2xl font-semibold text-white">
              {t('vendingmachine.vision.title')}
            </h3>
            <p className="text-white/70">{t('vendingmachine.vision.desc')}</p>
          </div>

          <div className="rounded-xl bg-white/5 p-6">
            <h3 className="mb-3 text-2xl font-semibold text-white">
              {t('vendingmachine.mission.title')}
            </h3>
            <p className="text-white/70">{t('vendingmachine.mission.desc')}</p>
          </div>
        </div>
      </section>

      {/* 🔷 FEATURES */}
      <section className="bg-white/5 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-semibold text-white">
            {t('vendingmachine.features.title')}
          </h2>

          <p className="leading-relaxed text-white/70">
            {t('vendingmachine.features.desc')}
          </p>
        </div>
      </section>

      {/* 🔷 TRAY STRUCTURE */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              {t('vendingmachine.tray.title')}
            </h2>

            <p className="mb-4 text-white/70">
              {t('vendingmachine.tray.desc')}
            </p>

            <ul className="mb-4 space-y-2 text-white/70">
              {trayDetails.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>

            <p className="text-sm text-yellow-400">
              ⚠ {t('vendingmachine.tray.note')}
            </p>
          </div>

          <Image
            src="/projects&products/vending_machine/tray_structure.png"
            alt="Tray Structure"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* 🔷 CUSTOMERS */}
      <section className="bg-white/5 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-10 text-3xl font-semibold text-white">
            {t('vendingmachine.customers.title')}
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {customers.map((item, i) => (
              <div key={i} className="rounded-xl bg-white/10 p-6 text-white">
                ⭐ {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
