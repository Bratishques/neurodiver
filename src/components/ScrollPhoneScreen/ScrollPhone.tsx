'use client';
import Image from 'next/image';
import { PhoneImage } from './PhoneImage';

const screenData = [
  {
    image: '/images/scroll-screens/phone-slide1.png',
    title: 'WHAT IS\nTHE PROJECT?',
    description:
      'A future-facing system for alternative minds.\nRespecting cognitive difference. Powered by\nneurotype-modeled AI.',
  },
  {
    image: '/images/scroll-screens/phone-slide2.png',
    title: 'Who is\nthe character?',
    description:
      'Meet our symbol of perception beyond the norm.\nA figure representing the beauty of different minds.',
  },
  {
    image: '/images/scroll-screens/phone-slide3.png',
    title: 'The AI Agents',
    description:
      'Autistic, ADHD, bipolar, dyslexic and more —\nSimulated agents that help explore and embody diverse perceptions.',
  },
];

const ScrollPhone = () => {
  return (
    <div className="flex flex-col w-full bg-scrollPhone pt-24 pb-40">
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

      <div className="w-full h-full flex justify-center mt-27 z-10 relative">
        <PhoneImage>
          <div className="w-full h-full flex flex-col">
            <div className="flex-1 bg-phoneContent pl-9 pt-13 pr-7.5 pb-4 flex flex-col justify-start">
              <div className="">
                <h1 className="font-secondary text-[32px] font-bold">
                  NEUROTOK
                </h1>
              </div>

              <div className="mt-16">
                <h2 className="font-secondary text-5xl font-bold leading-12 tracking-tighter">
                  {screenData[0].title}
                </h2>
              </div>

              <div className="mt-8">
                <p className="font-main text-base leading-6">
                  {screenData[0].description}
                </p>
              </div>
            </div>

            <Image
              width="444"
              height="579"
              className=""
              src={screenData[0].image}
              alt="phone-slide"
            />
          </div>
        </PhoneImage>

        <div className="absolute -bottom-40 left-0 right-0 z-20">
          <Image
            src="/images/metrics-bunny.png"
            alt="Announcement bunny"
            width={1920}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollPhone;
