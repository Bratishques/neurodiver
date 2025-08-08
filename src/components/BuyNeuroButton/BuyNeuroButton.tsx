'use client';
import Link from 'next/link';
import ColoredText from '../ColoredText/ColoredText';
import { useState, useEffect } from 'react';

interface BuyNeuroButtonProps {
  className?: string;
  href?: string;
  variant?: 'default' | 'adhd' | 'colored' | 'dark';
  children?: React.ReactNode;
  customStyles?: string;
  disableColoredText?: boolean;
}

const ConditionalColoredText = ({
  text,
  hasMax2xlTextWhite,
}: {
  text: string;
  hasMax2xlTextWhite: boolean;
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1536);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (hasMax2xlTextWhite) {
    return isLargeScreen ? <ColoredText text={text} /> : <span>{text}</span>;
  }

  return <ColoredText text={text} />;
};

const BuyNeuroButton = ({
  className = '',
  href = '',
  variant = 'default',
  children = 'Buy $NEURO',
  customStyles = '',
  disableColoredText = false,
}: BuyNeuroButtonProps) => {
  const createColoredText = (text: string) => {
    const colors = [
      'var(--colorOrange)',
      'var(--colorWhite)',
      'var(--colorGreen)',
      'var(--colorCyan)',
    ];
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

  const hasMax2xlTextWhite = customStyles.includes('max-2xl:!text-white');
  const shouldDisableColoredText = disableColoredText;

  const baseClasses =
    variant === 'adhd' || variant === 'colored'
      ? 'bg-white/20 p-4 sm:p-6 md:p-6 flex items-center justify-center text-black border-3 max-sm:tracking-tighter border-colorBorder font-third rounded-xl text-center md:text-xl text-xs md:max-w-80 max-w-60 md:leading-5 leading-3'
      : variant === 'dark'
        ? 'bg-ctaButton hover:bg-buyNeuroDark p-4 sm:p-6 md:p-6 flex items-center justify-center text-white rounded-xl max-sm:tracking-tighter md:text-xl text-xs md:max-w-41 max-w-20 md:leading-5 leading-3'
        : 'bg-white p-4 sm:p-6 md:p-6 text-black flex items-center justify-center rounded-xl max-sm:tracking-tighter md:text-xl text-xs md:max-w-41 max-w-20 md:leading-5 leading-3';

  let content;
  if (variant === 'adhd' && !shouldDisableColoredText) {
    content = createColoredText(children as string);
  } else if (variant === 'colored' && !shouldDisableColoredText) {
    content = (
      <ConditionalColoredText
        text={children as string}
        hasMax2xlTextWhite={hasMax2xlTextWhite}
      />
    );
  } else if (variant === 'dark') {
    content = children; // Темный вариант всегда использует обычный текст
  } else {
    content = children;
  }

  return (
    <Link href={href} className={`${baseClasses} ${customStyles} ${className}`}>
      {content}
    </Link>
  );
};

export default BuyNeuroButton;
