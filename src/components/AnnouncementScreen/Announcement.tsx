'use client';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

const Announcement = () => {
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
      <div className="pt-17.5">
        <p className="font-secondary text-[80px] tracking-tighter leading-[80px] mx-auto w-fit text-center mb-12">
          Real reactions.
          <br /> Community memes. <br />
          Neurotype journeys.
        </p>

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
