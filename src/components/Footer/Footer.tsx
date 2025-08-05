'use client';
import Image from 'next/image';
import Link from 'next/link';
import ColoredText from '../ColoredText';
import NeuroTestPopup from '../NeuroTestPopup/NeuroTestPopup';
import { useNeuroTestContext } from '../NeuroTestPopup/NeuroTestContext';

interface FooterProps {
  mode?: string;
}
const Footer = ({ mode }: FooterProps) => {
  const { isNeuroTestOpen, openNeuroTest, closeNeuroTest } =
    useNeuroTestContext();

  return (
    <footer className="bg-footerBg p-2.5 text-white flex flex-row my-auto items-center justify-between px-4 sm:px-8 md:px-17 pt-8 sm:pt-10 md:pt-13 pb-12 sm:pb-16 md:pb-20">
      <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-6 lg:gap-0">
      <div className="flex flex-col gap-3 sm:gap-4">
          {mode === 'dislexia' || mode === 'bipolar' ? (
            <ColoredText
              text="Neurodivergent"
              colors={['#63B3FF', '#ACFF2B', '#FCFF33', '#FF50BF']}
              className="font-secondary text-[75px] tracking-tighter"
            />
          ) : (
            <p className="font-secondary text-4xl sm:text-5xl md:text-6xl lg:text-[75px] tracking-tighter leading-tight">
              Neurodivergent
            </p>
          )}
          <span className="text-sm sm:text-base leading-5 sm:leading-6">
            $NEURO is a memecoin powered by curiosity — not financial promises.
            <br />
            It has no intrinsic value, no roadmap to riches, and no expectation
            of return.
            <br /> It exists to celebrate neurodivergent minds, build community,
            and have fun along the way.
          </span>
          <p className="text-sm sm:text-base opacity-50 mt-3 sm:mt-4">
            © 2025 Neuro. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-start lg:items-end gap-4 sm:gap-6 mt-2 lg:mt-4 w-full lg:w-auto">
          <Link
            href=""
            className="bg-ctaButton p-4 sm:p-5 md:p-6 rounded-xl text-base sm:text-lg md:text-xl max-w-full lg:max-w-41 leading-5 text-center"
          >
            Buy $NEURO
          </Link>
          <button
            onClick={openNeuroTest}
            className="rounded-xl text-base sm:text-lg md:text-xl p-4 sm:p-5 md:p-6 cursor-pointer max-w-full lg:max-w-65 leading-5 bg-white/20 hover:bg-white/30 active:bg-white/40 transition-all duration-200 text-center"
          >
            Take the Neurotype Test
          </button>
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8.5">
            <Link href="">
              <Image src="/icons/x.svg" width="32" height="32" className="sm:w-10 sm:h-10 md:w-12 md:h-12" alt="x-icon" />
            </Link>
            <Link href="">
              <Image src="/icons/tg.svg" width="32" height="32" className="sm:w-10 sm:h-10 md:w-12 md:h-12" alt="tg-icon" />
            </Link>
            <Link href="">
              <Image
                src="/icons/tiktok.svg"
                width="32"
                height="32"
                className="sm:w-10 sm:h-10 md:w-12 md:h-12"
                alt="tiktok-icon"
              />
            </Link>
            <Link href="">
              <Image
                src="/icons/bird.svg"
                width="32"
                height="32"
                className="sm:w-10 sm:h-10 md:w-12 md:h-12"
                alt="bird-icon"
              />
            </Link>
          </div>
        </div>
      </div>

      <NeuroTestPopup isOpen={isNeuroTestOpen} onClose={closeNeuroTest} />
    </footer>
  );
};

export default Footer;
