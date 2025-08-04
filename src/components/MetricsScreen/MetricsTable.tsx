'use client';
import Image from 'next/image';

const MetricsTable = () => {
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
    <div className="mt-10 mb-18">
      <table className="border-collapse border-4 border-metricsBorder text-white font-secondary w-full">
        <tbody>
          {Array.from({ length: 4 }, (_, rowIndex) => (
            <tr key={rowIndex} className="flex">
              {metricsData
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((metric, colIndex) => (
                  <td
                    key={colIndex}
                    className="border-4 border-metricsBorder bg-metricsBg p-9 text-xl w-1/2 flex justify-between items-center max-h-38"
                  >
                    <div className="flex flex-col text-left">
                      <div className="text-2xl font-main mb-5 text-white/50">
                        {metric.title}
                      </div>
                      <div
                        className={`text-5xl ${metric.isGreen ? 'text-green-400' : ''}`}
                      >
                        {metric.value}
                      </div>
                    </div>
                    <Image
                      src={metric.image}
                      alt={metric.title}
                      width={64}
                      height={64}
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
