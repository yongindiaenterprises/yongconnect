'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { MeetingForm } from '@/components/ui/meeting-form';
import { cn } from '@/lib/utils';

import LocationBasedSales from './location-based-sales';
import SalesGraph from './sales-graph';

enum AdminDashboardFeatures {
  liveStockStatus = 'liveStockStatus',
  salesPrediction = 'salesPrediction',
  notificationAlerts = 'notificationAlerts',
  maintenanceStatus = 'maintenanceStatus',
  accounting = 'accounting',
  plReports = 'plReports',
  salesGraph = 'salesGraph',
}

const AdminDashboardFeaturesList = [
  AdminDashboardFeatures.liveStockStatus,
  AdminDashboardFeatures.salesPrediction,
  AdminDashboardFeatures.notificationAlerts,
  AdminDashboardFeatures.maintenanceStatus,
  AdminDashboardFeatures.accounting,
  AdminDashboardFeatures.plReports,
  AdminDashboardFeatures.salesGraph,
];

const TopSalesTable = ({ t, className }: { t: any; className?: string }) => {
  return (
    <div
      className={cn(
        'mt-8 flex max-w-80 flex-wrap justify-center rounded-xl bg-white bg-opacity-5 p-6',
        className,
      )}
    >
      <div className="flex w-full items-start justify-start border-b border-gray-700 border-opacity-50 pb-4 text-white">
        <h3 className="text-sm opacity-80">
          {t('adminDashboard.topSalesTable.title')}
        </h3>
      </div>

      <div className="mt-2 w-full">
        <table className="w-full text-sm text-white">
          <thead className="">
            <tr className="font-medium">
              <th className="text-left font-medium text-accent-500">
                {t('adminDashboard.topSalesTable.header.id')}
              </th>
              <th className="text-left font-medium text-accent-500">
                {t('adminDashboard.topSalesTable.header.name')}
              </th>
              <th className="text-left font-medium text-accent-500">
                {t('adminDashboard.topSalesTable.header.category')}
              </th>
              <th className="hidden text-left font-medium text-accent-500 lg:table-cell">
                {t('adminDashboard.topSalesTable.header.unitsSold')}
              </th>
              <th className="hidden text-left font-medium text-accent-500 lg:table-cell">
                {t(
                  'adminDashboard.topSalesTable.header.pecentageGrowthInSales',
                )}
              </th>
              <th className="hidden text-left font-medium text-accent-500 lg:table-cell">
                {t(
                  'adminDashboard.topSalesTable.header.percentageShareInProfit',
                )}
              </th>
              <th className="hidden text-left font-medium text-accent-500 lg:table-cell">
                {t(
                  'adminDashboard.topSalesTable.header.profitMarginPercentage',
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => {
              const row = index + 1;
              return (
                <tr key={'table-row-' + row} className="text text-white">
                  <td className="text-left font-medium">
                    {t(`adminDashboard.topSalesTable.rows.${row}.id`)}
                  </td>
                  <td className="text-left font-medium">
                    {t(`adminDashboard.topSalesTable.rows.${row}.name`)}
                  </td>
                  <td className="text-left font-medium">
                    {t(`adminDashboard.topSalesTable.rows.${row}.category`)}
                  </td>
                  <td className="hidden text-left font-medium lg:table-cell">
                    {t(`adminDashboard.topSalesTable.rows.${row}.unitsSold`)}
                  </td>
                  <td className="hidden text-left font-medium lg:table-cell">
                    {t(
                      `adminDashboard.topSalesTable.rows.${row}.pecentageGrowthInSales`,
                    )}
                  </td>
                  <td className="hidden text-left font-medium lg:table-cell">
                    {t(
                      `adminDashboard.topSalesTable.rows.${row}.percentageShareInProfit`,
                    )}
                  </td>
                  <td className="hidden text-left font-medium lg:table-cell">
                    {t(
                      `adminDashboard.topSalesTable.rows.${row}.profitMarginPercentage`,
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const t = useTranslations('home');
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="mx-auto mt-10 flex w-full max-w-screen-lg flex-col justify-between bg-background align-middle md:mt-24 md:gap-x-4 lg:flex-row">
        <div className="flex flex-col justify-center gap-8">
          <h2 className="text-center text-xl font-bold text-white lg:text-start">
            {t('adminDashboard.title')}
          </h2>

          <div className="mx-auto flex max-w-80 flex-wrap justify-center gap-4 lg:justify-start">
            {AdminDashboardFeaturesList.map(feature => (
              <Badge key={feature} variant={'secondary'}>
                <span className="text-xs font-medium opacity-80">
                  {t(`adminDashboard.features.${feature}`)}
                </span>
              </Badge>
            ))}
            <TopSalesTable t={t} className="lg:hidden" />
          </div>
          <div className="mx-auto flex max-w-80 flex-wrap justify-center gap-4">
            <div className="flex flex-col justify-center">
              <h3 className="text-center text-xl font-bold text-accent-500 lg:text-start">
                {t('adminDashboard.subTitle')}
              </h3>
            </div>
          </div>
          <div className="mx-auto flex flex-col gap-x-2 md:flex-row lg:hidden">
            <SalesGraph className="max-w-80 lg:hidden" />
            <LocationBasedSales className="lg:hiddeni max-w-80" />
          </div>
          <div className="mx-auto flex max-w-80 flex-col gap-8 text-center text-sm text-white lg:text-start">
            <p className="text-sm font-medium opacity-80">
              {t('adminDashboard.description')}
            </p>

            <button
              className="hover:bg-accent-600 w-full rounded-lg bg-accent-500 px-4 py-2 text-white transition-colors"
              onClick={() => setIsFormOpen(true)}
            >
              {t('adminDashboard.cta.label')}
            </button>
          </div>
        </div>
        <div className="mx-auto hidden max-w-screen-md flex-col justify-center gap-2 lg:flex">
          <div className="flex flex-row justify-between gap-4">
            <SalesGraph className="max-w-80" />
            <LocationBasedSales className="max-w-96" />
          </div>

          <TopSalesTable t={t} className="mt-0 max-w-screen-md" />
        </div>
      </section>
      <MeetingForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default AdminDashboard;
