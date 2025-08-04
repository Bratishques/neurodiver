'use client';
import Image from 'next/image';
import Link from 'next/link';
import MetricsTable from './MetricsTable';
import FloatingLetter from '../FloatingLetter/FloatingLetter';

const MetricsScreen = () => {
  return (
    <div className="flex flex-col w-full bg-metrics pt-22 -mt-3 relative">
      <FloatingLetter 
        src="/icons/letters/b.svg" 
        alt="Letter B" 
        className="left-15 top-32 z-10 opacity-100" 
        size={43}
      />
      <FloatingLetter 
        src="/icons/letters/x-letter.svg" 
        alt="Letter X" 
        className="right-8 top-16 z-10" 
        size={80}
      />
      <FloatingLetter 
        src="/icons/letters/d.svg" 
        alt="Letter D" 
        className="right-20 top-1/2 z-10 opacity-70" 
        size={78}
      />
      <FloatingLetter 
        src="/icons/letters/p.svg" 
        alt="Letter P" 
        className="left-20 top-1/2 z-10 opacity-95" 
        size={78}
      />

      <div className="flex flex-col w-[64%] text-center mx-auto text-white font-secondary">
        <h3 className="text-80 tracking-tighter">Live Metrics</h3>

        <MetricsTable />

        <div className="flex flex-col items-center gap-9">
          <p className="text-80 tracking-tighter">CEX Listings</p>
          <p className="text-[64px] leading-19 tracking-[20px]">Coming Soon</p>
          <Link
            href=""
            className="bg-white mt-4 p-6 px-10 text-black font-main rounded-xl text-xl leading-5"
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
