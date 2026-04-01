'use client';

import { useTranslations } from 'next-intl';
import { Area, AreaChart, ReferenceDot, Tooltip, XAxis, YAxis } from 'recharts';

import { type ChartConfig, ChartContainer } from '@/components/ui/chart';
import { cn } from '@/lib/utils';

type DataAccess = {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
};
const CustomTooltip = ({
  active,
  payload,
  t,
}: {
  active: boolean;
  payload: any;
  t: any;
}) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="rounded-lg bg-background bg-opacity-85 p-2 text-white">
        <p className="text-xs font-medium text-white">
          {t('adminDashboard.salesGraph.chart.currency')}
          {(payload[0].value * 1000).toLocaleString()}
        </p>
        <p className="text-xs font-medium text-accent-500">
          {payload[0].payload.diff}
        </p>
      </div>
    );
  }

  return;
};

const SalesGraph = ({ className }: { className?: string }) => {
  const t = useTranslations('home');

  const data = Array.from({ length: 7 }, (_, index) => {
    const key = (index + 1).toString() as keyof DataAccess;
    const value = Number.parseInt(
      t(`adminDashboard.salesGraph.chart.data.${key}.value`),
      10,
    );
    return {
      name: t(`adminDashboard.salesGraph.chart.data.${key}.name`),
      value: value,
      diff: t(`adminDashboard.salesGraph.chart.data.${key}.diff`),
    };
  });

  const highlightIndex = 5;
  const highlightedData = data[highlightIndex];
  return (
    <div
      className={cn(
        'mx-auto flex max-w-80 flex-col justify-center rounded-xl bg-white bg-opacity-5 p-4',
        className,
      )}
    >
      <div className="flex w-full items-start justify-start border-b border-gray-700 border-opacity-50 pb-4 text-white">
        <h3 className="text-sm opacity-80">
          {t('adminDashboard.salesGraph.title')}
        </h3>
      </div>
      <ChartContainer config={{}} className="min-h-[14rem] w-full py-4">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="hsl(var(--primary))"
                stopOpacity={1}
              />
              <stop
                offset="100%"
                stopColor="hsl(var(--primary))"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            stroke="hsl(var(--secondary))"
            tick={{ fill: '#aaa' }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="hsl(var(--secondary))"
            tick={{ fill: '#aaa' }}
            label={{
              value: t('adminDashboard.salesGraph.chart.yAxis'),
              angle: -90,
              dx: 10,
              dy: 50,
              position: 'insideLeft',
            }}
            tickLine={false}
            axisLine={false}
          />
          <Area
            dataKey="value"
            stroke="hsl(var(--accent-500))"
            fillOpacity={1}
            fill="url(#colorValue)"
            activeDot={{ r: 6 }}
          />
          <Tooltip
            content={
              <CustomTooltip
                t={t}
                active={true}
                payload={[
                  { name: highlightedData.name, value: highlightedData.value },
                ]}
              />
            }
            active={true}
            payload={[
              { name: highlightedData.name, value: highlightedData.value },
            ]}
            cursor={false}
            wrapperStyle={{ pointerEvents: 'none' }}
            position={{ x: 130, y: 10 }}
          />
          <ReferenceDot
            x={highlightedData.name}
            y={highlightedData.value}
            r={6}
            fill="hsl(var(--secondary))"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default SalesGraph;
