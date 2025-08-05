'use client';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../Header/Header';
import TrollingButton from './TrollingButton';
import FloatingLetter from '../FloatingLetter/FloatingLetter';
import NeuroTestPopup from '../NeuroTestPopup/NeuroTestPopup';
import { useNeuroTestContext } from '../NeuroTestPopup/NeuroTestContext';
import BuyNeuroButton from '../BuyNeuroButton/BuyNeuroButton';
import GradientButton from '../GradientButton/GradientButton';
import ColoredText from '../ColoredText/ColoredText';

interface FirstScreenProps {
  mode?: string;
}

const FirstScreen = ({ mode }: FirstScreenProps) => {
  const { isNeuroTestOpen, openNeuroTest, closeNeuroTest } =
    useNeuroTestContext();

  const handleCopy = () => {
    navigator.clipboard.writeText('0xA1B2C3D4E5F67890ABCDEF1234567890ABCDEF12');
  };

  return (
    <div className="bg-firstScreenBg pb-50 flex flex-col h-full items-center relative">
      <FloatingLetter
        src="/icons/bipolar.svg"
        alt="bipolar"
        className="right-20 top-1/2 z-10"
        size={78}
      />
      <FloatingLetter
        src="/icons/autism.svg"
        alt="autism"
        className="right-1/3 bottom-35 z-10 opacity-100"
        size={93}
      />
      <FloatingLetter
        src="/icons/ahdh.svg"
        alt="adhd"
        className="left-1/4 bottom-30 z-10 opacity-95"
        size={78}
      />
      <div className="absolute inset-0 z-0">
        <Image
          src="/icons/bg.svg"
          fill
          alt="Background pattern"
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 sm:w-[40%] h-1/4 opacity-40 mix-blend-luminosity z-30 block sm:hidden">
          <Image
            src="/images/bunny-adaptive.png"
            fill
            alt="Bunny"
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] opacity-100 mix-blend-luminosity z-10 lg:hidden">
        <Image
          src="/images/first-screen-bunny.png"
          fill
          alt="Bunny"
          className="object-contain"
        />
      </div>

      <div className="max-1xl:px-6 2xl:px-40 lg:px-12 px-6 relative z-10">
        <Header />
        <div className="flex max-1xl:flex-col flex-row w-full text-white md:mt-26 mt-8 justify-between md:gap-4">
          <div className="1xl:w-1/2 flex flex-col md:gap-12 gap-6 md:mt-14 mt-8">
            <h3
              className={`text-4xl leading-7 lg:text-[80px] lg:leading-[80px] -tracking-wider ${mode === 'dislexia' || mode === 'bipolar' ? 'font-third' : 'font-secondary'}`}
            >
              {mode === 'dislexia' || mode === 'bipolar' ? (
                <>
                  <ColoredText
                    className="lg:text-[54px] max-sm:text-[40px] text-4xl leading-16 tracking-[-2.7px] font-bold"
                    text="A new kind of OS."
                  />
                  <br className="max-sm:hidden"/>
                  <ColoredText
                    className="lg:text-[54px] text-4xl max-sm:text-[40px] lg:leading-16 tracking-[-2.7px] font-bold"
                    text="For different kinds of minds."
                  />
                </>
              ) : (
                <>
                  A new kind of OS.
                  <br />
                  For different kinds of minds.
                </>
              )}
            </h3>

            <div className="flex flex-col md:gap-6 gap-4">
              <span
                className={`md:leading-9 md:text-2xl text-sm leading-5 max-md:max-w-[76%] max-sm:max-w-full ${mode === 'dislexia' || mode === 'bipolar' ? 'font-third' : ''}`}
              >
                We&apos;re building the world&apos;s first operating system designed
                around neurodivergent cognition — and the AI agents that support
                it.
              </span>
              <div className="bg-firstScreenAccent rounded-xl pl-6 p-4 md:pl-6 md:p-4 pl-3 p-2 flex items-center md:gap-6 gap-3">
                <div className="font-bold opacity-50 font-secondary md:text-2xl text-sm">
                  CA
                </div>
                <div className="flex-1">
                  <div className="bg-transparent text-white font-main md:text-xl text-xs w-full outline-none select-all break-all md:whitespace-nowrap">
                    0xA1B2C3D4E5F67890ABCDEF1234567890ABCDEF12
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  className="bg-white/20 hover:bg-white/30 active:bg-white/40 transition-all duration-200 rounded-[6px] md:p-3 p-2 cursor-pointer flex items-center justify-center"
                  title="Copy to clipboard"
                >
                  <Image
                    src="/icons/copy-icon.svg"
                    width="16"
                    height="16"
                    alt="copy-icon"
                  />
                </button>
              </div>
            </div>
            {mode === 'dislexia' || mode === 'bipolar' ? (
               <div className="flex gap-2 md:gap-6 sm:gap-2 max-1xl:flex-col">
                <BuyNeuroButton
                  href=""
                  variant="adhd"
                  className="md:max-w-41 max-w-fit xl:flex-shrink-0"
                />
                <GradientButton
                  onClick={openNeuroTest}
                  type="button"
                  className="xl:flex-1 font-third w-full max-1xl:w-[62%]"
                  textClassName="text-black"
                >
                  Take the Neurotype Test
                </GradientButton>
              </div>
            ) : (
              <div className="flex gap-2 md:gap-6 sm:gap-2">
                <Link
                  href=""
                  className="bg-white max-sm:rounded-md sm:p-6 p-3 md:p-6 p-1 text-black rounded-xl md:text-xl text-xl max-sm:text-xs md:max-w-43 max-md:max-w-80 md:leading-5 leading-3"
                >
                  Buy $NEURO
                </Link>
                <button
                  onClick={openNeuroTest}
                  className="rounded-xl max-sm:rounded-md md:text-xl max-sm:text-xs text-xl sm:p-6 p-3 p-1 cursor-pointer md:max-w-65 md:leading-5 max-md:max-w-80 leading-3 bg-white/20 hover:bg-white/30 active:bg-white/40 transition-all duration-200"
                >
                  Take the Neurotype Test
                </button>
              </div>
            )}
          </div>

          <div className="relative w-1/2 max-1xl:w-full max-1xl:mt-10 z-20 hidden lg:block">
            <div className="rounded-[36px] py-12 px-38 h-full min-h-[45vh] border-2 border-dashed border-white/30 relative bg-firstScreenBg">
              <div className="text-center mb-4">
                <p className="text-white/20 text-[32px] font-medium">
                  It&apos;s much more advantageous
                  <br /> to buy $NEURO here!
                </p>
              </div>

              <div className="absolute inset-0 z-100">
                <TrollingButton mode={mode}>Receive Airdrop</TrollingButton>
              </div>

              <div className="absolute bottom-0 top-0 max-1xl:w-[42%] left-0 w-[90%] h-full opacity-40 mix-blend-luminosity z-30">
                <Image
                  src="/images/first-screen-bunny.png"
                  fill
                  alt="Bunny"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <NeuroTestPopup
        isOpen={isNeuroTestOpen}
        onClose={closeNeuroTest}
        mode={mode}
      />
    </div>
  );
};

export default FirstScreen;
