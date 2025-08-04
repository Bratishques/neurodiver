'use client';
import Image from 'next/image';
import Link from 'next/link';
import NeuroTestPopup from '../NeuroTestPopup/NeuroTestPopup';
import { useNeuroTestContext } from '../NeuroTestPopup/NeuroTestContext';

const Footer = () => {
  const { isNeuroTestOpen, openNeuroTest, closeNeuroTest } = useNeuroTestContext();

  return (
    <footer className="bg-footerBg p-2.5 text-white flex flex-row my-auto items-center justify-between px-17 pt-13 pb-20">
      <div className="flex justify-between w-full items-start">
        <div className="flex flex-col gap-4">
          <p className="font-secondary text-[75px] tracking-tighter">
            Neurodivergent
          </p>
          <span className="text-base leading-6 ">
            $NEURO is a memecoin powered by curiosity — not financial promises.
            <br />
            It has no intrinsic value, no roadmap to riches, and no expectation
            of return.
            <br /> It exists to celebrate neurodivergent minds, build community,
            and have fun along the way.
          </span>
          <p className="text-base opacity-50 mt-4">
            © 2025 Neuro. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-end gap-6 mt-4">
          <Link
            href=""
            className="bg-ctaButton p-6 rounded-xl text-xl max-w-41 leading-5"
          >
            Buy $NEURO
          </Link>
          <button
            onClick={openNeuroTest}
            className="rounded-xl text-xl p-6 max-w-65 leading-5 bg-white/20 hover:bg-white/30 active:bg-white/40 transition-all duration-200"
          >
            Take the Neurotype Test
          </button>
          <div className="flex items-center gap-8.5">
            <Link href="">
              <Image src="/icons/x.svg" width="48" height="48" alt="x-icon" />
            </Link>
            <Link href="">
              <Image src="/icons/tg.svg" width="48" height="48" alt="tg-icon" />
            </Link>
            <Link href="">
              <Image
                src="/icons/tiktok.svg"
                width="48"
                height="48"
                alt="tiktok-icon"
              />
            </Link>
            <Link href="">
              <Image
                src="/icons/bird.svg"
                width="48"
                height="48"
                alt="bird-icon"
              />
            </Link>
          </div>
        </div>
      </div>

      <NeuroTestPopup 
        isOpen={isNeuroTestOpen} 
        onClose={closeNeuroTest} 
      />
    </footer>
  );
};

export default Footer;
