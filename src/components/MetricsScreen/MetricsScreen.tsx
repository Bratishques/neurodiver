'use client';
import Image from 'next/image';
import Link from 'next/link';
import MetricsDiagram from './MetricsDiagram';
import FloatingLetter from '../FloatingLetter/FloatingLetter';
import ColoredText from '../ColoredText';
import BuyNeuroButton from '../BuyNeuroButton/BuyNeuroButton';

interface MetricsScreenProps {
  mode?: string;
}

const MetricsScreen = ({ mode }: MetricsScreenProps) => {
  const partners = [
    {
      name: 'CoinMarketCap',
      icon: '/icons/coinMarket.svg',
      href: 'https://dex.coinmarketcap.com/token/solana/oxynABVJXUEc9PLNx4m1XVdiFtRhStzRXG1G6qosni1/',
      borderColor: '#FFA65D',
      buttonBg: null,
    },
    {
      name: 'coingecko',
      icon: '/icons/coinGecko.svg',
      href: 'https://www.geckoterminal.com/solana/pools/EXJPhjuBhmfb9FXKLrxctWUcDkRdemJnT9Hv4GhYwPr8',
      borderColor: '#88D7FF',
      buttonBg: '#FFF75A',
    },
    {
      name: 'GMGN',
      icon: '/icons/gmgn.svg',
      href: 'https://gmgn.ai/sol/token/oxynABVJXUEc9PLNx4m1XVdiFtRhStzRXG1G6qosni1?tag=top_holder',
      borderColor: '#FFF75A',
      buttonBg: '#78FF7F',
    },
    {
      name: 'DEXSCREENER',
      icon: '/icons/dex.svg',
      href: 'https://jup.ag/tokens/oxynABVJXUEc9PLNx4m1XVdiFtRhStzRXG1G6qosni1',
      borderColor: null,
      buttonBg: null,
    },
  ];

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

      <div className="flex flex-col w-full text-center mx-auto text-white font-secondary px-4 sm:px-6 md:px-0">
        <h3 className="text-5xl sm:text-6xl lg:text-80 tracking-tighter leading-tight">
          {mode === 'dislexia' || mode === 'bipolar' ? (
            <ColoredText
              text="Tokenomics"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-80 tracking-tighter font-bold font-third"
              colors={['#78FF7F', '#5AF7FF', '#FFF', '#FFF75A']}
            />
          ) : (
            <span className="text-cream">Tokenomics</span>
          )}
        </h3>

        <MetricsDiagram mode={mode} />

        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-5xl sm:text-6xl tracking-tighter leading-tight">
            {mode === 'dislexia' || mode === 'bipolar' ? (
              <ColoredText
                text="Our Solana partners"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold font-third"
                colors={['#78FF7F', '#5AF7FF', '#FFF', '#FFF75A']}
              />
            ) : (
              <span className="text-cream">OUR SOLANA PARTNERS</span>
            )}
          </h3>

          <div className="flex flex-wrap max-lg:flex-nowrap max-md:flex-wrap justify-center gap-4 max-lg:gap-3">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.href}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 max-lg:px-3 max-lg:py-[9px] h-16 max-lg:h-12 hover:bg-gray-80 hover:scale-105 transition-all duration-200"
                style={{
                  border:
                    (mode === 'dislexia' || mode === 'bipolar') &&
                    partner.borderColor
                      ? `3px solid ${partner.borderColor}`
                      : 'none',
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="max-w-44 max-lg:max-w-35 flex items-center justify-center">
                  <Image
                    src={partner.icon}
                    alt={partner.name}
                    width={32}
                    height={32}
                    className="w-full h-7 max-md:h-5"
                  />
                </div>
                <div
                  className="w-10 h-10 max-lg:w-7.5 max-lg:h-7.5 max-sm:h-6 max-sm:w-6 p-2 rounded-md flex items-center justify-center"
                  style={{
                    backgroundColor:
                      (mode === 'dislexia' || mode === 'bipolar') &&
                      partner.buttonBg
                        ? partner.buttonBg
                        : '#00000010',
                  }}
                >
                  <img
                    src="/icons/arrow-partners.svg"
                    alt="arrow"
                    className="w-4 h-4 max-lg:h-3 max-lg:w-3"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 sm:gap-7 md:gap-9">
          <p className="text-5xl sm:text-6xl lg:text-80 tracking-tighter leading-tight">
            {mode === 'dislexia' || mode === 'bipolar' ? (
              <ColoredText
                text="CEX Listings"
                className="text-5xl sm:text-6xl lg:text-80 tracking-tighter font-bold font-third"
                colors={['#78FF7F', '#5AF7FF', '#FFF0CF', '#FFF75A']}
              />
            ) : (
              <span className="text-cream">CEX Listings</span>
            )}
          </p>
          <p
            className={`text-4xl sm:text-5xl lg:text-[64px] leading-6 sm:leading-8 md:leading-12 lg:leading-19 tracking-[2px] sm:tracking-[4px] md:tracking-[8px] lg:tracking-[20px] ${mode === 'dislexia' || mode === 'bipolar' ? 'text-white font-third' : 'text-cream'}`}
          >
            Coming Soon
          </p>
          {mode === 'dislexia' || mode === 'bipolar' ? (
            <BuyNeuroButton
              href="https://dexscreener.com/solana/exjphjubhmfb9fxklrxctwucdkrdemjnt9hv4ghywpr8"
              variant="colored"
              className="mt-4"
              customStyles="max-2xl:!bg-black hover:border-white max-2xl:!text-white max-2xl:!font-main max-2xl:!border-0"
            />
          ) : (
            <Link
              href="https://dexscreener.com/solana/exjphjubhmfb9fxklrxctwucdkrdemjnt9hv4ghywpr8"
              className="bg-white mt-4 p-4 hover:bg-buyNeuro transition-all sm:p-5 md:p-6 px-6 sm:px-8 md:px-10 text-black font-main rounded-xl text-base sm:text-lg md:text-xl leading-5"
            >
              Buy $0xy
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
