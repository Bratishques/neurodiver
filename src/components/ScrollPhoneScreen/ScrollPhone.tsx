'use client';
import Image from 'next/image';

const ScrollPhone = () => {
  return (
    <div className="flex flex-col w-full bg-scrollPhone pt-24">
      <div className="mx-auto flex gap-2">
        <p className="font-third text-base leading-6">scroll down</p>
        <Image
          src="/icons/arrow.svg"
          alt="arrow"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </div>
        
      <div className="w-full mt-16">
        <Image
          src="/images/metrics-bunny.png"
          alt="Announcement bunny"
          width={1920}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ScrollPhone;
