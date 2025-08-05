'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneImage } from './PhoneImage';
import ColoredText from '../ColoredText';
import FloatingLetter from '../FloatingLetter/FloatingLetter';

interface PhoneSectionProps {
  onShowThirdSection: (show: boolean) => void;
  mode?: string;
}

export function PhoneSection({ onShowThirdSection, mode }: PhoneSectionProps) {
  const phoneRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [hasShownThirdSection, setHasShownThirdSection] = useState(false);

  const screenData = [
    {
      image: '/images/scroll-screens/phone-slide1.png',
      title: 'What is\n the project?',
      description:
        'A future-facing system for alternative minds.\nRespecting cognitive difference. Powered by\nneurotype-modeled AI.',
    },
    {
      image: '/images/scroll-screens/phone-slide2.png',
      title: 'Who is\n the character?',
      description:
        'Meet our symbol of perception beyond the norm.\nA figure representing the beauty of different minds.',
    },
    {
      image: '/images/scroll-screens/phone-slide3.png',
      title: 'The AI Agents',
      description:
        'Autistic, ADHD, bipolar, dyslexic and more —\nSimulated agents that help explore and embody diverse perceptions.',
    },
  ];

  const floatingImages = [
    {
      src: '/images/phone-bunnies/green.png',
      alt: 'Floating phone slide 1',
      className:
        'top-1/4 left-30 max-2xl:left-20 max-md:left-0 max-md:size-25 max-sm:w-15',
      size: 210,
      customClasses: 'z-20',
    },
    {
      src: '/images/phone-bunnies/pink2.png',
      alt: 'Floating phone slide 2',
      className:
        'top-[10%] right-1/5 max-2xl:right-10 max-2xl:w-40 max-sm:right-0 max-sm:w-17',
      size: 230,
      customClasses: 'z-20',
    },
    {
      src: '/images/phone-bunnies/green2.png',
      alt: 'Floating phone slide 3',
      className:
        'top-1/3 right-20 max-2xl:right-15 max-2xl:w-45 max-md:w-25 max-md:right-4 max-sm:w-15',
      size: 230,
      customClasses: 'z-20',
    },
    {
      src: '/images/phone-bunnies/orange.png',
      alt: 'Floating phone slide 4',
      className:
        'bottom-1/4 right-1/5 max-2xl:right-20 max-sm:bottom-50 max-sm:right-0 max-sm:w-20',
      size: 220,
      customClasses: 'z-20',
    },
    {
      src: '/images/phone-bunnies/pink.png',
      alt: 'Floating phone slide 5',
      className:
        'bottom-1/4 left-1/5 max-2xl:left-10 max-md:left-0 max-md:size-30',
      size: 240,
      customClasses: 'z-20',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!phoneRef.current || !scrollContainerRef.current) return;

      const phoneSection = phoneRef.current;
      const rect = phoneSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const sectionHeight = phoneSection.offsetHeight - windowHeight;
        const scrolled = Math.abs(rect.top);
        const progress = Math.min(scrolled / sectionHeight, 1);

        const progressPerScreen = 1 / screenData.length;
        const newSlideIndex = Math.min(
          Math.floor(progress / progressPerScreen),
          screenData.length - 1
        );

        setCurrentSlideIndex(newSlideIndex);

        if (newSlideIndex >= screenData.length - 1 && !hasShownThirdSection) {
          setHasShownThirdSection(true);
          onShowThirdSection(true);
        }
      } else {
        if (rect.bottom < windowHeight) {
          setCurrentSlideIndex(screenData.length - 1);
          if (!hasShownThirdSection) {
            setHasShownThirdSection(true);
            onShowThirdSection(true);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [onShowThirdSection, screenData.length, hasShownThirdSection]);

  return (
    <section
      ref={phoneRef}
      className="relative pb-100 max-3xl:pb-140 max-md:pb-40 max-sm:pb-20"
      style={{ height: `${(screenData.length - 1) * 100}vh` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/phone-bg.png)',
          backgroundAttachment: 'fixed',
        }}
      />

      {floatingImages.map((image, index) => (
        <FloatingLetter
          key={index}
          src={image.src}
          alt={image.alt}
          className={image.className}
          size={image.size}
          customClasses={image.customClasses}
        />
      ))}

      <div
        ref={scrollContainerRef}
        className="sticky -top-30 h-screen flex flex-col items-center pt-24 px-4 relative z-10"
      >
        <div className="mx-auto flex gap-2">
          <p className="font-third text-base leading-6">scroll down</p>
          <Image
            src="/icons/arrow.svg"
            alt="arrow"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
        <div className="w-full flex justify-center mt-27 z-10 relative">
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 -translate-y-full bg-black/25 p-2 rounded-3xl flex gap-2 mb-6">
            {screenData.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentSlideIndex ? 'bg-white' : 'bg-gray-600'
                }`}
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{
                  scale: index === currentSlideIndex ? 1.2 : 0.8,
                  opacity: index === currentSlideIndex ? 1 : 0.5,
                }}
                transition={{ duration: 0.06, ease: 'easeOut' }}
              />
            ))}
          </div>

          <PhoneImage>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlideIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: 'circInOut' }}
                className="w-full h-full flex flex-col"
              >
                <div className="flex-1 bg-phoneContent pl-9 pt-9 pr-7.5 pb-4 flex flex-col justify-start max-sm:px-5">
                  <div className="">
                    <h1 className="font-secondary text-[32px] font-bold max-sm:text-lg max-sm:leading-4.5">
                      NEUROTOK
                    </h1>
                  </div>

                  <div className="mt-12 max-md:mt-9">
                    <h2 className="font-secondary text-5xl max-sm:text-[32px] max-sm:leading-8 font-bold leading-12 tracking-tighter">
                      {mode === 'dislexia' || mode === 'bipolar' ? (
                        <ColoredText
                          text={screenData[currentSlideIndex].title}
                          className="font-third text-4xl font-extrabold leading-12"
                          letterClassName="inline"
                          colors={[
                            '#329BFE',
                            '#A30606',
                            '#74B116',
                            '#FF50BF',
                            '#FFD11A',
                          ]}
                          preserveSpaces={false}
                        />
                      ) : (
                        screenData[currentSlideIndex].title
                      )}
                    </h2>
                  </div>

                  <div className="mt-6">
                    <p
                      className={`font-main text-base leading-6 ${mode === 'dislexia' || mode === 'bipolar' ? 'font-third' : ''}`}
                    >
                      {screenData[currentSlideIndex].description}
                    </p>
                  </div>
                </div>

                <Image
                  width="444"
                  height="579"
                  className=""
                  src={screenData[currentSlideIndex].image}
                  alt="phone-slide"
                />
              </motion.div>
            </AnimatePresence>
          </PhoneImage>

          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
            {screenData.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentSlideIndex ? 'bg-white' : 'bg-gray-600'
                }`}
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{
                  scale: index === currentSlideIndex ? 1.2 : 0.8,
                  opacity: index === currentSlideIndex ? 1 : 0.5,
                }}
                transition={{ duration: 0.06, ease: 'easeOut' }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <Image
          src="/images/metrics-bunny.png"
          alt="Announcement bunny"
          width={1920}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
