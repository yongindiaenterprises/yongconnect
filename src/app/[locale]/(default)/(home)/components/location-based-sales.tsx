'use client';

import { useTranslations } from 'next-intl';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

import { ChartContainer } from '@/components/ui/chart';
import { cn } from '@/lib/utils';

type DataAccess = {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
};

const COLORS = [
  'hsla(34, 100%, 70%, 1)',
  'hsla(53, 100%, 67%, 1)',
  'hsla(118, 40%, 51%, 1)',
  'hsla(119, 94%, 29%, 1)',
  'hsla(12, 100%, 58%, 1)',
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  name,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  percent: number;
  name: string;
  index: number;
}) => {
  const radius = outerRadius + 15;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const boxWidth = name.length > 6 ? 70 : 50;
  const boxHeight = 40;
  return (
    <g>
      <rect
        x={x < cx ? x - boxWidth + 10 : x - boxWidth / 2 + 20}
        y={y - boxHeight / 2}
        width={boxWidth}
        height={boxHeight}
        rx={2}
        className="fill-card stroke-gray-500 text-white"
      />
      <text
        x={x < cx ? x - 5 : x}
        y={y - 5}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize="10"
        fontWeight="bold"
      >
        {`${name}`}
      </text>
      <text
        x={x < cx ? x - 5 : x}
        y={y + 10}
        className={percent > 0.2 ? 'fill-accent-500' : 'fill-yellow-300'}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize="8"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

const LocationBasedSales = ({ className }: { className?: string }) => {
  const t = useTranslations('home');

  const data = Array.from({ length: 5 }).map((_, index) => {
    const row = (index + 1).toString() as keyof DataAccess;
    const value = Number.parseInt(
      t(`adminDashboard.locationBasedSales.chart.data.${row}.value`),
      10,
    );
    return {
      name: t(`adminDashboard.locationBasedSales.chart.data.${row}.name`),
      value,
    };
  });

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
        <PieChart data={data}>
          <Pie
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={70}
            labelLine={false}
            activeIndex={0}
            label={renderCustomizedLabel}
            data={data}
            fill="#8884d8"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ChartContainer>
    </div>
  );
};

export default LocationBasedSales;
