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
      </div>

      <div className="px-53 relative z-10">
        <Header mode={mode} />
        <div className="flex w-full text-white mt-26 justify-between">
          <div className="w-[53%] flex flex-col gap-12 mt-14 mr-4">
            <h3 className="text-80 leading-20 font-secondary -tracking-wider">
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

            <div className="flex flex-col gap-6">
              <span
                className={`text-2xl leading-9 ${mode === 'dislexia' || mode === 'bipolar' ? 'font-third tracking-tighter' : ''}`}
              >
                We're building the world's first operating system designed
                around neurodivergent cognition — and the AI agents that support
                it.
              </span>

              <div className="bg-firstScreenAccent rounded-xl pl-6 p-4 flex items-center gap-6 max-w-[86%]">
                <div className="font-bold opacity-50 font-secondary text-2xl">
                  CA
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    value="0xA1B2C3D4E5F67890ABCDEF1234567890ABCDEF12"
                    readOnly
                    className="bg-transparent text-white font-main text-xl w-full outline-none"
                  />
                </div>
                <button
                  onClick={handleCopy}
                  className={`bg-white/20 hover:bg-white/30 active:bg-white/40 transition-all ${mode === 'dislexia' || mode === 'bipolar' ? 'border-2 border-[#5DFAFF]' : ''} duration-200 rounded-[6px] p-3 cursor-pointer flex items-center justify-center`}
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
            <div className="flex gap-6">
              <Link
                href=""
                className="bg-white p-6 text-black rounded-xl text-xl max-w-41 leading-5"
              >
                Buy $NEURO
              </Link>
              <button
                onClick={openNeuroTest}
                className="rounded-xl text-xl p-6 cursor-pointer max-w-65 leading-5 bg-white/20 hover:bg-white/30 active:bg-white/40 transition-all duration-200"
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

              <div className="absolute inset-0 z-100">
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
