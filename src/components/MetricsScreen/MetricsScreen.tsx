'use client';
import Image from 'next/image';
import Link from 'next/link';
import MetricsTable from './MetricsTable';

const MetricsScreen = () => {
  return (
    <div className="flex flex-col w-full bg-metrics pt-22 -mt-3">
      <div className="flex flex-col w-[64%] text-center mx-auto text-white font-secondary">
        <h3 className="text-80 tracking-tighter">Live Metrics</h3>

        <MetricsTable />

        <div className="flex flex-col items-center gap-16">
          <p className="text-80 tracking-tighter">CEX Listings</p>
          <p className="text-[64px] leading-19 tracking-[20px]">Coming Soon</p>
          <Link
            href=""
            className="bg-white p-6 px-10 text-black font-main rounded-xl text-xl leading-5"
          >
            Buy $NEURO
          </Link>
        </div>
      </div>

      <div className="w-full mt-16">
        <Image
          src="/images/announcement-banner.png"
          alt="Announcement Banner"
          width={1920}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default MetricsScreen;
