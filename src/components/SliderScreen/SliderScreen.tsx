'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useState } from 'react';

const SliderScreen = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    '/images/neuro_slide.png',
    '/images/neuro_slide.png',
    '/images/neuro_slide.png',
    '/images/neuro_slide.png',
    '/images/neuro_slide.png',
    '/images/neuro_slide.png',
  ];

  const handlePrev = () => {
    if (mainSwiper) {
      mainSwiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (mainSwiper) {
      mainSwiper.slideNext();
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
    <div className="w-full h-screen relative max-xl:h-[80vh]">
      <Swiper
        modules={[Thumbs]}
        onSwiper={setMainSwiper}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={0}
        className="w-full h-full"
        onSlideChange={handleSlideChange}
        loop={true}
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full relative">
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />
      <button
        onClick={handlePrev}
        className="absolute top-1/2 rounded-xl cursor-pointer left-15 transform -translate-y-1/2 max-w-16 max-h-16 z-10 p-4 bg-white hover:bg-gray-100 transition-colors flex items-center justify-center"
      >
        <Image
          src="/icons/slider-arrow.svg"
          alt="Previous"
          width={33}
          height={26}
        />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 rounded-xl cursor-pointer right-15 transform -translate-y-1/2 max-w-16 max-h-16 z-10 p-4 bg-white hover:bg-gray-100 transition-colors flex items-center justify-center"
      >
        <Image
          src="/icons/slider-arrow.svg"
          alt="Next"
          width={33}
          height={26}
          className="rotate-180"
        />
      </button>

      <div className="absolute bottom-11 left-0 right-0 flex items-center justify-center z-10">
        <div className="w-full max-w-[70%] px-4 max-3xl:max-w-[95%] max-2xl:max-w-full">
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={12}
            slidesPerView={6}
            loop={true}
            watchSlidesProgress
            className="!h-37.5"
          >
            {slides.map((src, idx) => (
              <SwiperSlide className="!max-3xl:mr-0" key={idx}>
                <div className="w-50 max-xl:w-40 max-lg:w-35 h-37.5 max-xl:h-30 relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 shadow-md group">
                  <Image
                    src={src}
                    alt={`Thumb ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {activeSlide === idx && (
                    <div className="absolute inset-0 border-8 border-white rounded-2xl pointer-events-none transition-all duration-300" />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SliderScreen;
