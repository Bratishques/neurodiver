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

const navigationItems = [
  {
    id: 'classic',
    href: '/',
    icon: '/icons/classic-mode.svg',
    label: 'Classic',
  },
  {
    id: 'dislexia',
    href: '/dislexia',
    icon: '/icons/dislexia-mode.svg',
    label: 'Dislexia',
  },
  { id: 'adhd', href: '/adhd', icon: '/icons/ahdh-mode.svg', label: 'ADHD' },
  {
    id: 'bipolar',
    href: '/bipolar',
    icon: '/icons/bipolar-mode.svg',
    label: 'Bipolar',
  },
];

const socialIcons = [
  { href: '', icon: '/icons/x.svg', alt: 'x-icon' },
  { href: '', icon: '/icons/tg.svg', alt: 'tg-icon' },
  { href: '', icon: '/icons/tiktok.svg', alt: 'tiktok-icon' },
  { href: '', icon: '/icons/bird.svg', alt: 'bird-icon' },
];

const Header = ({ mode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex items-center h-10 md:h-12 lg:h-14 justify-between bg-headerBg text-white mt-8 md:mt-12 lg:mt-16 px-4 md:px-5 lg:px-6 py-2 md:py-3 lg:py-4 rounded-2xl md:rounded-3xl w-full lg:max-w-screen">
        <motion.button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-6 h-6"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <BurgerIcon />
        </motion.button>

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
            {navigationItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <Link href={item.href} className="flex gap-1 md:gap-1 group">
                  <motion.div
                    animate={{ rotate: hoveredItem === item.id ? 360 : 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  >
                    <Image
                      src={item.icon}
                      width="12"
                      height="12"
                      className="md:w-4 md:h-4"
                      alt={`${item.id}-icon`}
                    />
                  </motion.div>
                  <span
                    className={`${item.id === 'classic' ? 'leading-4.5' : ''} text-[7px] md:text-[10px] relative`}
                  >
                    {item.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-1 md:gap-2">
          {socialIcons.map((social, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link href={social.href}>
                <Image
                  src={social.icon}
                  width="16"
                  height="16"
                  className={`${social.alt === 'bird-icon' ? 'max-h-4 md:max-h-6 w-4 h-4 md:w-6 md:h-6' : 'md:w-6 md:h-6'}`}
                  alt={social.alt}
                />
              </Link>
            </motion.div>
          ))}
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
                {navigationItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.2 + navigationItems.indexOf(item) * 0.1,
                      duration: 0.3,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
                      onClick={toggleMenu}
                    >
                      <Image
                        src={item.icon}
                        width="20"
                        height="20"
                        alt={`${item.id}-icon`}
                      />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
