'use client';
import Image from 'next/image';
import Link from 'next/link';

const AdhdContent = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('0xA1B2C3D4E5F67890ABCDEF1234567890ABCDEF12');
  };

  const createColoredText = (text: string) => {
    const colors = [
      'var(--colorOrange)',
      'var(--colorWhite)',
      'var(--colorGreen)',
      'var(--colorCyan)',
    ];
    return text.split('').map((letter, index) => (
      <span
        key={index}
        style={{ color: colors[index % colors.length] }}
        className="inline-block"
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  return (
    <div className="px-53 max-1xl:px-20 max-lg:px-10 max-sm:px-0 max-md:px-0 relative z-10">
      <div className="flex w-full text-white mt-74 max-1xl:mt-60 max-lg:mt-45 justify-between">
        <div className="flex flex-col gap-7 max-md:gap-6 items-center w-full">
          <p className="font-secondary uppercase text-[58px] leading-24 tracking-tighter max-sm:leading-6 max-sm:text-[42px]">
            Neurodivergent
          </p>
          <div className="flex flex-col gap-4 w-full items-center">
            <div className="flex flex-col w-[60%] max-xl:w-[90%] max-sm:w-full">
              <div className="bg-firstScreenAccent rounded-xl pl-6 p-4 flex items-center gap-6">
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

            <Link
              href=""
              className="bg-white/20 p-6 text-black border-3 max-xl:w-[90%] max-sm:w-full border-colorBorder max-1xl:bg-black max-1xl:border-none font-third rounded-xl text-center text-xl w-[60%] leading-5"
            >
              <span className="hidden 1xl:inline">
                {createColoredText('Buy $NEURO')}
              </span>

              <span className="inline 1xl:hidden text-white font-main">
                Buy $NEURO
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdhdContent;
