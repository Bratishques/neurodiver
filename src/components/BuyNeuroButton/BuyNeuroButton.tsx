'use client';
import Link from 'next/link';

interface BuyNeuroButtonProps {
  className?: string;
  href?: string;
  variant?: 'default' | 'adhd';
  children?: React.ReactNode;
}

const BuyNeuroButton = ({ 
  className = '', 
  href = '', 
  variant = 'default',
  children = 'Buy $NEURO'
}: BuyNeuroButtonProps) => {
  const createColoredText = (text: string) => {
    const colors = ['var(--colorOrange)', 'var(--colorWhite)', 'var(--colorGreen)', 'var(--colorCyan)'];
    return text.split('').map((letter, index) => (
      <span
        key={index}
        style={{ color: colors[index % colors.length] }}
        className="inline-block"
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  const baseClasses = variant === 'adhd' 
    ? 'bg-white/20 sm:p-6 md:p-6 p-1 flex items-center justify-center text-black border-3 max-sm:tracking-tighter border-colorBorder font-third rounded-xl text-center md:text-xl text-xs md:max-w-80 max-w-60 md:leading-5 leading-3'
    : 'bg-white sm:p-6 md:p-6 p-1 text-black flex items-center justify-center rounded-xl max-sm:tracking-tighter md:text-xl text-xs md:max-w-41 max-w-20 md:leading-5 leading-3';

  const content = variant === 'adhd' ? createColoredText(children as string) : children;

  return (
    <Link
      href={href}
      className={`${baseClasses} ${className}`}
    >
      {content}
    </Link>
  );
};

export default BuyNeuroButton; 