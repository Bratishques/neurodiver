'use client';
import Image from 'next/image';

interface MetricsTableProps {
  mode?: string;
}

const MetricsTable = ({ mode }: MetricsTableProps) => {
  const metricsData = [
    {
      title: 'Token Price',
      value: '$0.00028570',
      image: '/icons/metrics/dollar.svg',
    },
    {
      title: 'Market Cap',
      value: '$120.8M',
      image: '/icons/metrics/graph.svg',
    },
    {
      title: 'Volume 24h',
      value: '$265.1K',
      image: '/icons/metrics/chart.svg',
    },
    {
      title: '24h Change',
      value: '+43,923%',
      image: '/icons/metrics/arrow-up.svg',
      isGreen: true,
    },
    {
      title: 'Liquidity',
      value: '$1.5M',
      image: '/icons/metrics/liquidity.svg',
    },
    {
      title: 'Holders',
      value: '1,695',
      image: '/icons/metrics/user.svg',
    },
    {
      title: 'Community',
      value: '999,695',
      image: '/icons/metrics/tg-line.svg',
    },
    {
      title: 'Followers',
      value: '999,695',
      image: '/icons/x.svg',
    },
  ];

  return (
    <div className="mt-6 sm:mt-8 md:mt-10 mb-12 sm:mb-14 md:mb-18">
      <table className={`border-collapse border-2 sm:border-3 md:border-4 border-metricsBorder text-white font-secondary w-full ${mode === 'dislexia' || mode === 'bipolar' ? 'font-third' : ''}`}>
        <tbody>
          {Array.from({ length: 4 }, (_, rowIndex) => (
            <tr key={rowIndex} className="flex">
              {metricsData
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((metric, colIndex) => (
                  <td
                    key={colIndex}
                    className="border-2 sm:border-3 md:border-4 border-metricsBorder bg-metricsBg p-4 sm:p-6 md:p-9 text-sm sm:text-lg md:text-xl w-1/2 flex justify-between items-center max-h-24 sm:max-h-28 md:max-h-38"
                  >
                    <div className="flex flex-col text-left">
                      <div className={`text-sm sm:text-lg md:text-2xl font-main mb-2 sm:mb-3 md:mb-5 text-white/50 ${mode === 'dislexia' || mode === 'bipolar' ? 'font-third' : ''}`}>
                        {metric.title}
                      </div>
                      <div
                        className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl ${metric.isGreen ? 'text-[#75FF7C]' : ''}`}
                      >
                        {metric.value}
                      </div>
                    </div>
                    <Image
                      src={metric.image}
                      alt={metric.title}
                      width={32}
                      height={32}
                      className="sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
                    />
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MetricsTable;
