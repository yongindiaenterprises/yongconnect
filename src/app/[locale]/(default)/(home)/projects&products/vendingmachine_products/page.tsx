import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function VendingMachinePage({
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

  const whyUs = Object.values(
  t.raw("vendingmachine.whyUs.points" as any) || {}
) as string[];

const trayDetails = Object.values(
  t.raw("vendingmachine.tray.details" as any) || {}
) as string[];

const customers = Object.values(
  t.raw("vendingmachine.customers.list" as any) || {}
) as string[];

  return (
    <>
      {/* 🔷 HERO */}
      <section className="mt-16 bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl mx-8 rounded-lg py-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            {t("vendingmachine.title")}
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            {t("vendingmachine.description")}
          </p>
        </div>
      </section>

      {/* 🔷 ABOUT */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/projects&products/vending_machine/vending-machine.png"
            alt="Snack Vending Machine"
            width={300}
            height={200}
            className="rounded-xl"
          />
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">
              {t("vendingmachine.about.title")}
            </h2>
            <p className="text-white/70">
              {t("vendingmachine.about.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* 🔷 WHY US */}
      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-8">
            {t("vendingmachine.whyUs.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
  <div key={i} className="p-6 rounded-xl bg-white/10 text-white">
    ✅ {item}
  </div>
))}
          </div>
        </div>
      </section>

      {/* 🔷 VISION & MISSION */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold text-white mb-3">
              {t("vendingmachine.vision.title")}
            </h3>
            <p className="text-white/70">
              {t("vendingmachine.vision.desc")}
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold text-white mb-3">
              {t("vendingmachine.mission.title")}
            </h3>
            <p className="text-white/70">
              {t("vendingmachine.mission.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* 🔷 FEATURES */}
      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">
            {t("vendingmachine.features.title")}
          </h2>

          <p className="text-white/70 leading-relaxed">
            {t("vendingmachine.features.desc")}
          </p>
        </div>
      </section>

      {/* 🔷 TRAY STRUCTURE */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">
              {t("vendingmachine.tray.title")}
            </h2>

            <p className="text-white/70 mb-4">
              {t("vendingmachine.tray.desc")}
            </p>

            <ul className="space-y-2 text-white/70 mb-4">
              {trayDetails.map((item, i) => (
  <li key={i}>✔ {item}</li>
))}
            </ul>

            <p className="text-yellow-400 text-sm">
              ⚠ {t("vendingmachine.tray.note")}
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
      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-10">
            {t("vendingmachine.customers.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
  {customers.map((item, i) => (
    <div key={i} className="p-6 bg-white/10 rounded-xl text-white">
      ⭐ {item}
    </div>
  ))}
</div>
        </div>
      </section>
    </>
  );
}