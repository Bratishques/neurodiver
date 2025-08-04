'use client';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../Header/Header';

const FirstScreen = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('0xA1B2C3D4E5F67890ABCDEF1234567890ABCDEF12');
  };

  return (
    <div className="bg-firstScreenBg pb-50 flex flex-col h-full items-center">
      <div className="px-53">
        <Header />
        <div className="flex w-full text-white mt-26 justify-between">
          <div className="w-1/2 flex flex-col gap-12 mt-14">
            <p className="text-[80px] leading-20 font-secondary -tracking-wider">
              A new kind of OS.
              <br />
              For different kinds of minds.
            </p>

            <div className="flex flex-col gap-6">
              <span className="text-2xl leading-9">
                We're building the world's first operating system designed
                around neurodivergent cognition — and the AI agents that support
                it.
              </span>
              <div className="bg-[#B687FA] rounded-xl pl-6 p-4 flex items-center gap-6 max-w-[86%]">
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
                  className="bg-white/20 hover:bg-white/30 active:bg-white/40 transition-all duration-200 rounded-[6px] p-3 cursor-pointer flex items-center justify-center"
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
            <div className="flex gap-6">
              <Link
                href=""
                className="bg-white p-6 text-black rounded-xl text-xl max-w-41 leading-5"
              >
                Buy $NEURO
              </Link>
              <Link
                href=""
                className="rounded-xl text-xl p-6 max-w-65 leading-5 bg-white/20"
              >
                Take the Neurotype Test
              </Link>
            </div>
          </div>

          <div className="relative w-1/2">
            <div className="rounded-[36px] py-12 px-38 h-full min-h-[45vh] border-2 border-dashed border-white/30 relative">
              <div className="text-center mb-4">
                <p className="text-white/20 text-[32px] font-medium">
                  It's much more advantageous
                  <br /> to buy $NEURO here!
                </p>
              </div>

              <div className="absolute bottom-8 right-8">
                <button
                  className="bg-white text-black text-xl py-6 px-4 rounded-xl"
                  disabled={true}
                >
                  Receive Airdrop
                </button>
              </div>

              <div className="absolute bottom-0 top-5 left-0 w-[93%] h-full opacity-40 mix-blend-luminosity">
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
    </div>
  );
};

export default FirstScreen;
