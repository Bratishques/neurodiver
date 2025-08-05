'use client';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../Header/Header';
import TrollingButton from './TrollingButton';
import FloatingLetter from '../FloatingLetter/FloatingLetter';
import NeuroTestPopup from '../NeuroTestPopup/NeuroTestPopup';
import { useNeuroTestContext } from '../NeuroTestPopup/NeuroTestContext';
import ColoredText from '../ColoredText';

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

      <div className="md:px-53 px-8 relative z-10">
        <Header mode={mode} />
        <div className="flex w-full text-white md:mt-26 mt-8 justify-between">
          <div className="md:w-[53%] flex flex-col sm:gap-12 md:gap-12 gap-6 md:mt-14 mt-8">
            <h3 className="sm:text-80 sm:leading-20 font-secondary -tracking-wider md:text-80 md:leading-20 text-4xl leading-7">
              {mode === 'dislexia' || mode === 'bipolar' ? (
                <>
                  <ColoredText
                    className="font-third text-[54px] leading-0 font-extrabold tracking-tighter"
                    text="A new kind of OS."
                    letterClassName="inline-block"
                  />
                  <br />
                  <ColoredText
                    className="font-third text-[54px] leading-13 font-extrabold text-left"
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
                className={`sm:leading-9 md:text-2xl md:leading-9 text-sm leading-5 ${mode === 'dislexia' || mode === 'bipolar' ? 'font-third tracking-tighter' : ''}`}
              >
                We're building the world's first operating system designed
                around neurodivergent cognition — and the AI agents that support
                it.
              </span>

              <div className="bg-firstScreenAccent rounded-xl md:pl-6 md:p-4 pl-3 p-2 flex items-center md:gap-6 gap-3 md:max-w-[86%]">
                <div className="font-bold opacity-50 font-secondary md:text-2xl text-sm">
                  CA
                </div>
                <div className="flex-1">
                  <div className="bg-transparent text-white font-main md:text-xl text-xs w-full outline-none select-all break-all">
                    0xA1B2C3D4E5F67890ABCDEF1234567890ABCDEF12
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  className={`bg-white/20 hover:bg-white/30 active:bg-white/40 transition-all ${mode === 'dislexia' || mode === 'bipolar' ? 'border-2 border-[#5DFAFF]' : ''} duration-200 rounded-[6px] md:p-3 p-2  cursor-pointer flex items-center justify-center`}
                  title="Copy to clipboard"
                >
                  <Image
                    src={
                      mode === 'dislexia' || mode === 'bipolar'
                        ? '/icons/copy-icon-mode.svg'
                        : '/icons/copy-icon.svg'
                    }
                    width="16"
                    height="16"
                    alt="copy-icon"
                  />
                </button>
              </div>
            </div>
            <div className="flex gap-2 md:gap-6 sm:gap-2">
              <Link
                href=""
                className="bg-white sm:p-6 p-3 md:p-6 p-1 text-black rounded-xl md:text-xl text-xs md:max-w-41 max-w-20 md:leading-5 leading-3"
              >
                Buy $NEURO
              </Link>
              <button
                onClick={openNeuroTest}
                className="rounded-xl  md:text-xl text-xs sm:p-6 p-3 md:p-6 p-1 cursor-pointer md:max-w-65 max-w-24 md:leading-5 leading-3 bg-white/20 hover:bg-white/30 active:bg-white/40 transition-all duration-200"
              >
                Take the Neurotype Test
              </button>
            </div>
          </div>

          <div className="relative w-1/2 z-20">
            <div className="rounded-[36px] py-12 px-30 h-full min-h-[45vh] border-2 border-dashed border-white/30 relative bg-firstScreenBg">
              <div className="text-center mb-4">
                <p className="text-white/20 text-[32px] font-medium">
                  It's much more advantageous
                  <br /> to buy $NEURO here!
                </p>
              </div>

              <div className="relative w-1/2 z-20 hidden md:block">
                <TrollingButton>Receive Airdrop</TrollingButton>
              </div>

              <div className="absolute bottom-0 top-0 left-0 w-[90%] h-full opacity-40 mix-blend-luminosity z-30">
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

      <NeuroTestPopup isOpen={isNeuroTestOpen} onClose={closeNeuroTest} />
    </div>
  );
};

export default FirstScreen;
