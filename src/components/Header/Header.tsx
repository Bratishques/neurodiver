'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BurgerIcon } from './BurgerIcon';
import ColoredText from '../ColoredText';


interface HeaderProps {
  mode?: string;
}
const Header = ({ mode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
     <header className="flex items-center h-10 md:h-12 lg:h-14 justify-between bg-headerBg text-white mt-8 md:mt-12 lg:mt-16 px-4 md:px-5 lg:px-6 py-2 md:py-3 lg:py-4 rounded-2xl md:rounded-3xl w-full lg:max-w-screen">
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-6 h-6"
          aria-label="Toggle menu"
        >
          <BurgerIcon />
        </button>

        <Link
          href="/"
          className="text-white text-[20px] md:text-base lg:text-lg xl:text-[22px] font-secondary font-bold tracking-tighter"
        >
          {mode === 'dislexia' || mode === 'bipolar' ? (
            <ColoredText
              text="NEURODIVERGENT"
              colors={['#63B3FF', '#ACFF2B', '#FCFF33', '#FF50BF']}
            />
          ) : (
            'NEURODIVERGENT'
          )}
        </Link>

        <nav className="hidden md:flex items-center font-normal font-third gap-1 md:gap-4 lg:gap-6 text-[7px] text-white">
          <span className="opacity-50 text-[7px] md:text-sm">Modes</span>

          <div className="flex items-center gap-1 md:gap-2 lg:gap-6">
            <Link href="/" className="flex gap-1 md:gap-1">
              <Image
                src="/icons/classic-mode.svg"
                width="12"
                height="12"
                className="md:w-4 md:h-4"
                alt="classic-icon"
              />
              <span className="leading-4.5 text-[7px] md:text-[10px]">
                Classic
              </span>
            </Link>
            <Link href="/dislexia" className="flex gap-1 md:gap-1">
              <Image
                src="/icons/dislexia-mode.svg"
                width="12"
                height="12"
                className="md:w-4 md:h-4"
                alt="classic-icon"
              />
              <span className="text-[7px] md:text-[10px]">Dislexia</span>
            </Link>
            <Link href="/adhd" className="flex gap-1 md:gap-1">
              <Image
                src="/icons/ahdh-mode.svg"
                width="12"
                height="12"
                className="md:w-4 md:h-4"
                alt="classic-icon"
              />
              <span className="text-[7px] md:text-[10px]">ADHD</span>
            </Link>
            <Link href="/bipolar" className="flex gap-1 md:gap-1">
              <Image
                src="/icons/bipolar-mode.svg"
                width="12"
                height="12"
                className="md:w-4 md:h-4"
                alt="classic-icon"
              />
              <span className="text-[7px] md:text-[10px]">Bipolar</span>
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-1 md:gap-2">
          <Link href="">
            <Image
              src="/icons/x.svg"
              width="16"
              height="16"
              className="md:w-6 md:h-6"
              alt="x-icon"
            />
          </Link>
          <Link href="">
            <Image
              src="/icons/tg.svg"
              width="16"
              height="16"
              className="md:w-6 md:h-6"
              alt="tg-icon"
            />
          </Link>
          <Link href="">
            <Image
              src="/icons/tiktok.svg"
              width="16"
              height="16"
              className="md:w-6 md:h-6"
              alt="tiktok-icon"
            />
          </Link>
          <Link href="">
            <Image
              src="/icons/bird.svg"
              className="max-h-4 md:max-h-6 w-4 h-4 md:w-6 md:h-6"
              width="16"
              height="16"
              alt="bird-icon"
            />
          </Link>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            ></motion.div>

            <motion.div
              className="absolute left-0 top-0 h-full w-full bg-headerBg p-6"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200,
                duration: 0.3,
              }}
            >
              <motion.div
                className="flex items-center justify-between mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <span className="text-white text-lg font-secondary font-bold">
                  Modes
                </span>
                <button
                  onClick={toggleMenu}
                  className="text-white text-2xl"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </motion.div>

              <nav className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Link
                    href="/"
                    className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
                    onClick={toggleMenu}
                  >
                    <Image
                      src="/icons/classic-mode.svg"
                      width="20"
                      height="20"
                      alt="classic-icon"
                    />
                    <span className="text-sm">Classic</span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <Link
                    href="/dislexia"
                    className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
                    onClick={toggleMenu}
                  >
                    <Image
                      src="/icons/dislexia-mode.svg"
                      width="20"
                      height="20"
                      alt="dislexia-icon"
                    />
                    <span className="text-sm">Dislexia</span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Link
                    href="/adhd"
                    className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
                    onClick={toggleMenu}
                  >
                    <Image
                      src="/icons/ahdh-mode.svg"
                      width="20"
                      height="20"
                      alt="adhd-icon"
                    />
                    <span className="text-sm">ADHD</span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <Link
                    href="/bipolar"
                    className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
                    onClick={toggleMenu}
                  >
                    <Image
                      src="/icons/bipolar-mode.svg"
                      width="20"
                      height="20"
                      alt="bipolar-icon"
                    />
                    <span className="text-sm">Bipolar</span>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
