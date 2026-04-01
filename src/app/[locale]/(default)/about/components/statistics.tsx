import { getTranslations } from 'next-intl/server';

const Statistics = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: 'about' });

  const statistics = [
    {
      count: '20+',
      subHeading: 'Years of Experience',
      heading: 'Trusted Vending Solutions',
    },
    {
      count: '1000+',
      subHeading: 'Happy Clients',
      heading: 'Satisfied Customers',
    },
    {
      count: '10000+',
      subHeading: 'Machines Deployed',
      heading: 'Active Vending Units',
    },
    {
      count: '24/7',
      subHeading: 'Support',
      heading: 'Dedicated Service',
    },
  ] as const;

  return (
    <div className="mb-12 grid grid-cols-2 gap-6 p-4 md:mx-2 lg:mx-4 lg:grid-cols-4">
      {statistics.map((statistic, index) => (
        <div
          key={`statistic-${index}`}
          className="group relative flex flex-col overflow-hidden rounded-xl bg-theme-700 p-6 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative z-10">
            <div className="mb-2 font-geist text-3xl font-bold tracking-tight xl:text-5xl">
              {statistic.count}
            </div>
            <div className="mb-1 text-xs font-medium uppercase tracking-wider text-accent-500">
              {statistic.subHeading}
            </div>
            <div className="text-sm font-semibold text-white/90">
              {statistic.heading}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
