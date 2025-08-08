'use client';
import Image from 'next/image';
import Link from 'next/link';
import MetricsTable from './MetricsTable';
import FloatingLetter from '../FloatingLetter/FloatingLetter';
import ColoredText from '../ColoredText';
import BuyNeuroButton from '../BuyNeuroButton/BuyNeuroButton';

interface MetricsScreenProps {
  mode?: string;
}

const MetricsScreen = ({ mode }: MetricsScreenProps) => {
  return (
    <div className="flex flex-col w-full bg-metrics pt-12 sm:pt-16 md:pt-22 -mt-3 relative">
      <FloatingLetter
        src="/icons/letters/b.svg"
        alt="Letter B"
        className="left-4 max-md:hidden sm:left-8 md:left-15 top-16 sm:top-24 md:top-32 z-10 opacity-100"
        size={43}
      />
      <FloatingLetter
        src="/icons/letters/x-letter.svg"
        alt="Letter X"
        className="right-4 max-md:hidden sm:right-6 md:right-8 top-8 sm:top-12 md:top-16 z-10"
        size={80}
      />
      <FloatingLetter
        src="/icons/letters/d.svg"
        alt="Letter D"
        className="right-8 max-md:hidden sm:right-12 md:right-20 top-1/2 z-10 opacity-70"
        size={78}
      />
      <FloatingLetter
        src="/icons/letters/p.svg"
        alt="Letter P"
        className="left-8 max-md:hidden sm:left-12 md:left-20 top-1/2 z-10 opacity-95"
        size={78}
      />

      <div className="flex flex-col w-full sm:w-[90%] lg:w-[90%] 2xl:w-[64%] text-center mx-auto text-white font-secondary px-4 sm:px-6 md:px-0">
        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-80 tracking-tighter leading-tight">
          {mode === 'dislexia' || mode === 'bipolar' ? (
            <ColoredText
              text="Live Metrics"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-80 tracking-tighter font-bold font-third"
              colors={['#78FF7F', '#5AF7FF', '#FFF', '#FFF75A']}
            />
          ) : (
            'Live Metrics'
          )}
        </h3>

        <MetricsTable mode={mode} />

        <div className="flex flex-col items-center gap-6 sm:gap-7 md:gap-9">
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-80 tracking-tighter leading-tight">
            {mode === 'dislexia' || mode === 'bipolar' ? (
              <ColoredText
                text="CEX Listings"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-80 tracking-tighter font-bold font-third"
                colors={['#78FF7F', '#5AF7FF', '#FFF', '#FFF75A']}
              />
            ) : (
              'CEX Listings'
            )}
          </p>
          <p
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-[64px] leading-6 sm:leading-8 md:leading-12 lg:leading-19 tracking-[2px] sm:tracking-[4px] md:tracking-[8px] lg:tracking-[20px] ${mode === 'dislexia' || mode === 'bipolar' ? 'font-third' : ''}`}
          >
            Coming Soon
          </p>
          {mode === 'dislexia' || mode === 'bipolar' ? (
            <BuyNeuroButton
              href=""
              variant="colored"
              className="mt-4"
              customStyles="max-2xl:!bg-black hover:border-white max-2xl:!text-white max-2xl:!font-main max-2xl:!border-0"
            />
          ) : (
            <Link
              href=""
              className="bg-white mt-4 p-4 hover:bg-buyNeuro transition-all sm:p-5 md:p-6 px-6 sm:px-8 md:px-10 text-black font-main rounded-xl text-base sm:text-lg md:text-xl leading-5"
            >
              Buy $NEURO
            </Link>
          )}
        </div>
      </div>

      <div className="w-full mt-8 sm:mt-12 md:mt-16">
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
