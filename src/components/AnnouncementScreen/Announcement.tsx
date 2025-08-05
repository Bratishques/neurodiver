'use client';
import Image from 'next/image';
import Link from 'next/link';
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

  return (
    <div className="w-full bg-announcement relative pb-50">
      <FloatingLetter 
        src="/icons/letters/b.svg" 
        alt="Letter B" 
        className="sm:block hidden left-15 top-32 z-10 opacity-100" 
        size={43}
      />
      <FloatingLetter 
        src="/icons/letters/a.svg" 
        alt="Letter a" 
        className="sm:block hidden right-1/2 bottom-10 z-10" 
        size={78}
      />
      <FloatingLetter 
        src="/icons/letters/x-letter.svg" 
        alt="Letter x" 
        className="sm:block hidden right-1/4 top-10 z-10" 
        size={78}
      />
      <FloatingLetter 
        src="/icons/letters/p.svg" 
        alt="Letter P" 
        className="sm:block hidden left-20 bottom-20 z-10 opacity-95" 
        size={78}
      />

      <div className="pt-17.5">
        {mode === 'dislexia' || mode === 'bipolar' ? (
         <h3 className="font-secondary sm:text-80 text-5xl tracking-tighter mx-auto w-fit text-center mb-12">
            <ColoredText
              text="Real reactions."
              className="font-third text-[64px] font-bold tracking-tighter"
              colors={['#329BFE', '#A30606', '#74B116', '#FF50BF', '#FFD11A']}
            />
            <br />
            <ColoredText
              text="Community memes."
              className="font-third text-[64px] font-bold tracking-tighter"
              colors={['#329BFE', '#A30606', '#74B116', '#FF50BF', '#FFD11A']}
            />
            <br />
            <ColoredText
              text="Neurotype journeys."
              className="font-third text-[64px] font-bold tracking-tighter"
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

        <div className="relative h-126.5 overflow-hidden">
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
        </div>
      </div>
    </div>
  );
};

export default Announcement;
