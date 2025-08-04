'use client';
import Image from 'next/image';
import Link from 'next/link';

const AdhdContent = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('0xA1B2C3D4E5F67890ABCDEF1234567890ABCDEF12');
  };

  const createColoredText = (text: string) => {
    const colors = ['var(--colorOrange)', 'var(--colorWhite)', 'var(--colorGreen)', 'var(--colorCyan)'];
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
    <div className="px-53 relative z-10">
      <div className="flex w-full text-white mt-74 justify-between">
        <div className="flex flex-col gap-7 items-center w-full">
          <p className="font-secondary uppercase text-[58px] leading-24 tracking-tighter">
            Neurodivergent
          </p>
          <div className="flex flex-col gap-4 w-full items-center">
            <div className="flex flex-col w-[60%]">
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
              className="bg-white/20 p-6 text-black border-3 border-colorBorder font-third rounded-xl text-center text-xl w-[60%] leading-5"
            >
              {createColoredText('Buy $NEURO')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdhdContent;
