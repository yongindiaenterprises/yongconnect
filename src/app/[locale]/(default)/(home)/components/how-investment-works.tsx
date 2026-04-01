import { getTranslations } from 'next-intl/server';

const HowInvestmentWorks = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: 'home' });
  return (
    <section className="mt-4 flex h-fit min-h-fit flex-col items-center justify-center gap-4 px-4 py-4 text-white md:mt-10 md:py-12">
      <div className="mb-4 flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-black md:text-4xl">
          {t('howInvestmentWorks.title')}
        </h1>

        <p className="text-sm font-bold text-muted opacity-80 md:text-base">
          {t('howInvestmentWorks.subTitle')}
        </p>
      </div>
      <div className="mt-4 flex max-w-6xl justify-center md:mx-auto md:mt-8 md:min-w-96 md:flex-col">
        <div className="arrow mb-2 hidden grid-flow-row-dense grid-cols-12 grid-rows-1 justify-center md:grid">
          <div className="col-span-5 col-start-4 flex h-10 flex-col items-center justify-center gap-y-2 px-10 pr-4">
            <p className="text-center text-xs text-muted opacity-80">
              {t('howInvestmentWorks.header.planDays')}
            </p>
            <div className="h-10 w-full text-center text-sm font-bold">
              <svg
                viewBox="0 0 544 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18.4938L11.7735 8.49377H0.226497L6 18.4938ZM537.373 19.0292L543.146 9.02908L531.599 9.02935L537.373 19.0292ZM537.373 2.99995L536.373 2.99998L537.373 2.99995ZM7 9.49377V3H5V9.49377H7ZM8 2H535.373V0H8V2ZM536.373 2.99998L536.373 10.0292L538.373 10.0292L538.373 2.99993L536.373 2.99998ZM535.373 2C535.925 2 536.373 2.4477 536.373 2.99998L538.373 2.99993C538.372 1.34311 537.029 0 535.373 0V2ZM7 3C7 2.44772 7.44771 2 8 2V0C6.34315 0 5 1.34314 5 3H7Z"
                  fill="#70C86D"
                  fillOpacity="0.6"
                />
              </svg>
            </div>
          </div>
          <div className="col-span-2 col-end-12 flex h-10 flex-col items-center justify-center text-start text-sm font-bold">
            {t('howInvestmentWorks.header.total')}
          </div>
        </div>

        <div className="mx-auto flex w-full min-w-96 max-w-5xl flex-col justify-center rounded-2xl bg-background from-accent-500 to-white p-px text-sm md:bg-gradient-to-t">
          <div className="hidden grid-cols-8 grid-rows-4 justify-center gap-x-8 gap-y-4 rounded-t-2xl bg-background bg-opacity-80 p-6 text-center md:grid">
            <div className="text-bold col-span-2 flex h-10 flex-col items-start justify-start text-start">
              {t('howInvestmentWorks.splitup.r1.title')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r1.c1')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r1.c2')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r1.c3')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r1.c4')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60"></div>

            <div className="text-bold col-span-2 flex h-10 flex-col items-start justify-start text-start">
              {t('howInvestmentWorks.splitup.r2.title')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r2.c1')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r2.c2')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r2.c3')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r2.c4')}
            </div>
            <div className="col-span-2 flex h-10 flex-col items-start justify-center opacity-60"></div>

            <div className="text-bold col-span-2 flex h-10 flex-col items-start justify-start text-start">
              {t('howInvestmentWorks.splitup.r3.title')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r3.c1')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r3.c2')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r3.c3')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r3.c4')}
            </div>
            <div className="col-span-2 col-end-9 flex h-10 flex-col items-center justify-center font-bold">
              {t('howInvestmentWorks.splitup.r3.c5')}
            </div>

            <div className="text-bold col-span-2 flex h-10 flex-col items-start justify-start text-start">
              {t('howInvestmentWorks.splitup.r4.title')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r4.c1')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r4.c2')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r4.c3')}
            </div>
            <div className="flex h-10 flex-col items-start justify-center opacity-60">
              {t('howInvestmentWorks.splitup.r4.c4')}
            </div>
            <div className="col-span-2 col-end-9 flex h-10 flex-col items-center justify-center font-bold">
              {t('howInvestmentWorks.splitup.r4.c5')}
            </div>
          </div>

          <div className="grid h-fit grid-cols-8 gap-x-8 gap-y-4 rounded-t-2xl border-l-0 border-r-0 border-white border-opacity-50 bg-white bg-opacity-5 p-6 text-white md:rounded-t-none md:border md:bg-card md:bg-opacity-95">
            <div className="col-span-5 flex h-10 items-center justify-start text-start md:col-span-3 md:col-start-4">
              {t('howInvestmentWorks.profitDetails.c1.label')}
            </div>
            <div className="col-span-2 col-end-9 flex h-10 items-center justify-center font-bold">
              {t('howInvestmentWorks.profitDetails.c1.value')}
            </div>
            <div className="col-span-5 flex h-10 items-center justify-start text-start md:col-span-3 md:col-start-4">
              {t('howInvestmentWorks.profitDetails.c2.label')}
            </div>
            <div className="col-span-2 col-end-9 flex h-10 items-center justify-center font-bold">
              {t('howInvestmentWorks.profitDetails.c2.value')}
            </div>
            <div className="col-span-5 flex h-10 items-center justify-start text-start md:col-span-3 md:col-start-4">
              {t('howInvestmentWorks.profitDetails.c3.label')}
            </div>
            <div className="col-span-2 col-end-9 flex h-10 items-center justify-center font-bold">
              {t('howInvestmentWorks.profitDetails.c3.value')}
            </div>
            <div className="col-span-5 flex h-10 items-center justify-start text-start md:col-span-3 md:col-start-4">
              {t('howInvestmentWorks.profitDetails.c4.label')}
            </div>
            <div className="col-span-2 col-end-9 flex h-10 items-center justify-center font-bold">
              {t('howInvestmentWorks.profitDetails.c4.value')}
            </div>
            <div className="col-span-5 flex h-10 items-center justify-start text-start md:col-span-3 md:col-start-4">
              {t('howInvestmentWorks.profitDetails.c5.label')}
            </div>
            <div className="col-span-2 col-end-9 flex h-10 items-center justify-center font-bold">
              {t('howInvestmentWorks.profitDetails.c5.value')}
            </div>
          </div>

          <div className="grid h-fit grid-cols-8 gap-x-8 gap-y-4 rounded-b-2xl bg-white bg-opacity-5 p-6 text-center text-white md:bg-background md:bg-opacity-75">
            <div className="col-span-5 flex h-10 items-center justify-start text-start md:col-span-3 md:col-start-4">
              {t('howInvestmentWorks.profitDetails.total.label')}
            </div>
            <div className="col-span-2 col-end-9 flex h-10 items-center justify-center text-center font-black text-secondary-warn">
              {t('howInvestmentWorks.profitDetails.total.value')}
            </div>
          </div>
          <button className="flex h-fit justify-center py-2 underline md:hidden">
            {t('howInvestmentWorks.download')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowInvestmentWorks;
