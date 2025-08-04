'use client';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center h-14 justify-between bg-headerBg text-white mt-16 px-6 py-4 rounded-3xl w-full max-w-screen">
      <div className="text-white text-[22px] font-secondary font-bold tracking-tighter">
        NEURODIVERGENT
      </div>

      <nav className="flex items-center font-normal font-third gap-6 text-xs text-white">
        <span className="opacity-50">Modes</span>

        <div className="flex items-center gap-6">
          <Link href="/" className="flex gap-3">
            <Image
              src="/icons/classic-mode.svg"
              width="16"
              height="16"
              alt="classic-icon"
            />
            <span className="leading-4.5">Classic</span>
          </Link>
          <Link href="/dislexia" className="flex gap-3">
            <Image
              src="/icons/dislexia-mode.svg"
              width="16"
              height="16"
              alt="classic-icon"
            />
            <span className="">Dislexia</span>
          </Link>
          <Link href="/adhd" className="flex gap-3">
            <Image
              src="/icons/ahdh-mode.svg"
              width="16"
              height="16"
              alt="classic-icon"
            />
            <span className="">ADHD</span>
          </Link>
          <Link href="/bipolar" className="flex gap-3">
            <Image
              src="/icons/bipolar-mode.svg"
              width="16"
              height="16"
              alt="classic-icon"
            />
            <span className="">Bipolar</span>
          </Link>
        </div>
      </nav>

      <div className="flex items-center gap-2">
        <Link href="">
          <Image src="/icons/x.svg" width="24" height="24" alt="x-icon" />
        </Link>
        <Link href="">
          <Image src="/icons/tg.svg" width="24" height="24" alt="tg-icon" />
        </Link>
        <Link href="">
          <Image
            src="/icons/tiktok.svg"
            width="24"
            height="24"
            alt="tiktok-icon"
          />
        </Link>
        <Link href="">
          <Image
            src="/icons/bird.svg"
            className="max-h-6"
            width="24"
            height="24"
            alt="bird-icon"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
