'use client';
import Image from 'next/image';
import styles from './FloatingLetter.module.css';

interface FloatingLetterProps {
  src: string;
  alt: string;
  className: string;
  size?: number;
  customClasses?: string;
  animationType?: 'normal' | 'slow' | 'fast';
}

const FloatingLetter = ({ 
  src, 
  alt, 
  className,
  size = 40,
  customClasses = "",
  animationType = 'normal'
}: FloatingLetterProps) => {
  const getAnimationClass = () => {
    switch (animationType) {
      case 'slow':
        return styles.floatingSlow;
      case 'fast':
        return styles.floatingFast;
      default:
        return styles.floating;
    }
  };

  return (
    <div className={`absolute ${getAnimationClass()} ${className} ${customClasses}`}>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={`w-${size/4} h-${size/4}`}
      />
    </div>
  );
};

export default FloatingLetter; 