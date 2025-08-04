'use client';
import Image from 'next/image';
import styles from './FloatingLetter.module.css';

interface FloatingLetterProps {
  src: string;
  alt: string;
  className: string;
  size?: number;
  customClasses?: string;
}

const FloatingLetter = ({ 
  src, 
  alt, 
  className,
  size = 40,
  customClasses = ""
}: FloatingLetterProps) => {
  return (
    <div className={`absolute ${styles.floating} ${className} ${customClasses}`}>
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