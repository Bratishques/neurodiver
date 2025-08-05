'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import FloatingLetter from '../FloatingLetter/FloatingLetter';
import ColoredText from '../ColoredText';

interface AnnouncementProps {
  mode?: string;
}

const Announcement = ({ mode }: AnnouncementProps) => {
  const tiktokPosts = [
    '/images/tiktok-posts/post1.png',
    '/images/tiktok-posts/post2.png',
    '/images/tiktok-posts/post3.png',
    '/images/tiktok-posts/post4.png',
    '/images/tiktok-posts/post5.png',
    '/images/tiktok-posts/post6.png',
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const container = refs.current[0]?.parentElement;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      refs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementCenterX = rect.left + rect.width / 2;
          const distance = Math.abs(containerCenterX - elementCenterX);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    if (Math.abs(translateX) > 50) {
      if (translateX > 0) {
        const newIndex = activeIndex === 0 ? 0 : (activeIndex || 0) - 1;
        goToSlide(newIndex);
      } else {
        const newIndex = Math.min(
          (activeIndex || 0) + 1,
          tiktokPosts.length - 1
        );
        goToSlide(newIndex);
      }
    }

    setTranslateX(0);
  };

  const goToSlide = (index: number) => {
    const slideElement = refs.current[index];
    if (slideElement) {
      slideElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  return (
    <div className="w-full bg-announcement relative pb-50 max-lg:pb-20">
      <FloatingLetter
        src="/icons/letters/b.svg"
        alt="Letter B"
        className="sm:block hidden left-15 top-32 z-10 max-lg:top-10"
        size={43}
      />
      <FloatingLetter
        src="/icons/letters/a.svg"
        alt="Letter a"
        className="sm:block hidden right-1/2 bottom-10 z-10 max-lg:w-10 max-lg:bottom-0 max-lg:right-10"
        size={78}
      />
      <FloatingLetter
        src="/icons/letters/x-letter.svg"
        alt="Letter x"
        className="sm:block hidden right-1/4 top-10 z-10 max-lg:top-0 max-lg:w-15"
        size={78}
      />
      <FloatingLetter
        src="/icons/letters/p.svg"
        alt="Letter P"
        className="sm:block hidden left-20 bottom-20 z-10 opacity-95 max-lg:bottom-4 max-lg:w-10"
        size={78}
      />

      <div className="pt-17.5">
        {mode === 'dislexia' || mode === 'bipolar' ? (
          <h3 className="font-secondary sm:text-80 text-5xl tracking-tighter mx-auto w-fit text-center mb-12">
            <ColoredText
              text="Real reactions."
              className="font-third text-[64px] max-md:text-5xl max-md:leading-14.5 max-sm:text-[32px] max-sm:leading-9.5 font-bold max-md:tracking-[-2.7px] tracking-tighter"
              colors={['#329BFE', '#A30606', '#74B116', '#FF50BF', '#FFD11A']}
            />
            <br />
            <ColoredText
              text="Community memes."
              className="font-third text-[64px] max-md:text-5xl max-md:leading-14.5 max-sm:text-[32px] max-sm:leading-9.5 font-bold max-md:tracking-[-2.7px] tracking-tighter"
              colors={['#329BFE', '#A30606', '#74B116', '#FF50BF', '#FFD11A']}
            />
            <br />
            <ColoredText
              text="Neurotype journeys."
              className="font-third text-[64px] max-md:text-5xl max-md:leading-14.5 max-sm:text-[32px] max-sm:leading-9.5 font-bold max-md:tracking-[-2.7px] tracking-tighter"
              colors={['#329BFE', '#A30606', '#74B116', '#FF50BF', '#FFD11A']}
            />
          </h3>
        ) : (
          <h3 className="font-secondary sm:text-80 text-5xl tracking-tighter mx-auto w-fit text-center mb-12">
            Real reactions.
            <br /> Community memes. <br />
            Neurotype journeys.
          </h3>
        )}

        <div className="relative h-126.5 max-md:h-140 overflow-hidden max-md:flex max-md:justify-center max-md:items-center">
          {!isMobile ? (
            <Marquee
              speed={40}
              gradient={false}
              pauseOnHover={true}
              className="py-4 mt-4"
              delay={0}
              loop={0}
            >
              {[...tiktokPosts, ...tiktokPosts, ...tiktokPosts].map(
                (post, index) => (
                  <Link
                    key={index}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mx-5 transform transition-transform duration-300 hover:scale-105"
                  >
                    <Image
                      src={post}
                      alt={`TikTok post ${(index % tiktokPosts.length) + 1}`}
                      width={258}
                      height={460}
                      className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </Link>
                )
              )}
            </Marquee>
          ) : (
            <div className="relative w-full h-full pb-10">
              <div
                ref={containerRef}
                className="flex gap-4 px-4 snap-x snap-mandatory scroll-smooth max-md:h-full max-md:items-center overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  paddingLeft: 'calc(50vw - 128px)',
                  paddingRight: 'calc(50vw - 128px)',
                }}
              >
                {tiktokPosts.map((post, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      refs.current[index] = el;
                    }}
                    className={`flex-shrink-0 w-64 snap-center transition-transform duration-300 ${
                      index === activeIndex
                        ? 'scale-112 z-10'
                        : 'scale-90 opacity-70'
                    }`}
                  >
                    <Image
                      src={post}
                      alt={`TikTok post ${index + 1}`}
                      width={258}
                      height={460}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 left-1/2 bg-black/30 p-2 rounded-xl transform -translate-x-1/2 flex space-x-2 z-30">
                {tiktokPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full bg-black/40 transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-white scale-125'
                        : 'bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
