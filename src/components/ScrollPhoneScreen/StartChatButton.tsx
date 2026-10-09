'use client';

import Link from 'next/link';
import Marquee from 'react-fast-marquee';

interface StartChatButtonProps {
  mode?: string;
  href?: string;
}

export function StartChatButton({ mode, href = '' }: StartChatButtonProps) {
  const isSpecialMode = mode === 'dislexia' || mode === 'bipolar';

  if (isSpecialMode) {
    return (
      <Link href={href} className="relative overflow-hidden rounded-xl block">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
          <Marquee
            gradient={false}
            speed={40}
            direction="left"
            className="w-full h-full overflow-hidden"
          >
            <img
              src="/icons/start-chat_bg.svg"
              alt="start chat background"
              className="h-full w-auto"
            />
            <img
              src="/icons/start-chat_bg.svg"
              alt="start chat background duplicate"
              className="h-full w-auto"
            />
          </Marquee>
        </div>
        <div className="relative z-10 p-6 max-md:py-4 max-sm:py-3 max-md:px-6 font-third text-black hover:text-white transition-all leading-5">
          Start Chat
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="bg-white text-black p-6 max-md:py-4 max-sm:py-3 max-md:px-6 rounded-xl hover:bg-gray-100 transition-all inline-block"
    >
      Start Chat
    </Link>
  );
}
