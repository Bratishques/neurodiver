'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneImage } from './PhoneImage';

interface PhoneSectionProps {
  onShowThirdSection: (show: boolean) => void;
}

export function PhoneSection({ onShowThirdSection }: PhoneSectionProps) {
  const phoneRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [hasShownThirdSection, setHasShownThirdSection] = useState(false);

  // Контент для экранов телефона
  const screenData = [
    {
      image: '/images/scroll-screens/phone-slide1.png',
      title: 'WHAT IS\nTHE PROJECT?',
      description:
        'A future-facing system for alternative minds.\nRespecting cognitive difference. Powered by\nneurotype-modeled AI.',
    },
    {
      image: '/images/scroll-screens/phone-slide2.png',
      title: 'Who is\nthe character?',
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

  useEffect(() => {
    const handleScroll = () => {
      if (!phoneRef.current || !scrollContainerRef.current) return;

      const phoneSection = phoneRef.current;
      const rect = phoneSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Проверяем, находимся ли мы в секции с телефоном
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        // Вычисляем прогресс скролла внутри секции телефона
        const sectionHeight = phoneSection.offsetHeight - windowHeight;
        const scrolled = Math.abs(rect.top);
        const progress = Math.min(scrolled / sectionHeight, 1);

        // Вычисляем текущий индекс слайда на основе прогресса
        const progressPerScreen = 1 / screenData.length;
        const newSlideIndex = Math.min(
          Math.floor(progress / progressPerScreen),
          screenData.length - 1
        );

        setCurrentSlideIndex(newSlideIndex);

        // Показываем третий блок только когда пользователь доскроллил до последнего слайда
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
      className="relative pb-100"
      style={{ height: `${(screenData.length - 1) * 100}vh` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/phone-bg.png)',
          backgroundAttachment: 'fixed',
        }}
      />

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
                <div className="flex-1 bg-phoneContent pl-9 pt-9 pr-7.5 pb-4 flex flex-col justify-start">
                  <div className="">
                    <h1 className="font-secondary text-[32px] font-bold">
                      NEUROTOK
                    </h1>
                  </div>

                  <div className="mt-12">
                    <h2 className="font-secondary text-5xl font-bold leading-12 tracking-tighter">
                      {screenData[currentSlideIndex].title}
                    </h2>
                  </div>

                  <div className="mt-6">
                    <p className="font-main text-base leading-6">
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
                  index === currentSlideIndex ? 'bg-yellow-400' : 'bg-gray-600'
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
