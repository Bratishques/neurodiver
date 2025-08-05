'use client';

import { useEffect, useState } from 'react';
import { useNeuroTestContext } from '@/components/NeuroTestPopup/NeuroTestContext';

interface BipolarMaskProps {
  mode?: string;
  currentQuestion?: number;
}

const BipolarMask = ({ mode, currentQuestion }: BipolarMaskProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [maskPosition, setMaskPosition] = useState<'left' | 'right' | 'center'>('left');
  const { isNeuroTestOpen, showResults } = useNeuroTestContext();

  useEffect(() => {
    if (mode === 'bipolar') {
      setIsVisible(true);
      
      if (isNeuroTestOpen && showResults) {
        setMaskPosition('center');
      } else if (isNeuroTestOpen && currentQuestion !== undefined && currentQuestion >= 0) {
        const questionNumber = currentQuestion + 1; // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        const isOddQuestion = questionNumber % 2 === 1; // 1, 3, 5, 7, 9
        setMaskPosition(isOddQuestion ? 'left' : 'right');
      } else {
        setMaskPosition('left');
      }
      
      document.body.classList.add('bipolar-mode');
      document.body.classList.remove('bipolar-mode-left', 'bipolar-mode-right', 'bipolar-mode-center');
      document.body.classList.add(`bipolar-mode-${maskPosition}`);
    } else {
      setIsVisible(false);
      document.body.classList.remove('bipolar-mode', 'bipolar-mode-left', 'bipolar-mode-right', 'bipolar-mode-center');
    }

    return () => {
      document.body.classList.remove('bipolar-mode', 'bipolar-mode-left', 'bipolar-mode-right', 'bipolar-mode-center');
    };
  }, [mode, currentQuestion, maskPosition]);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className={`fixed top-0 h-full z-[9999] pointer-events-none ${
          maskPosition === 'left' ? 'left-0 w-1/2' : 
          maskPosition === 'right' ? 'right-0 w-1/2' : 
          'left-1/4 w-1/2'
        }`}
        style={{
          background: maskPosition === 'left' 
            ? 'linear-gradient(to right, rgba(100, 100, 100, 0.7), rgba(140, 140, 140, 0.5))'
            : maskPosition === 'right'
            ? 'linear-gradient(to left, rgba(100, 100, 100, 0.7), rgba(140, 140, 140, 0.5))'
            : 'linear-gradient(to right, rgba(100, 100, 100, 0.7), rgba(140, 140, 140, 0.5))',
          backdropFilter: 'grayscale(100%)',
          filter: 'grayscale(100%) brightness(0.9) contrast(1.05)',
          mixBlendMode: 'multiply'
        }}
      />
      
      <div 
        className={`fixed top-0 h-full z-[10000] pointer-events-none ${
          maskPosition === 'left' ? 'left-0 w-1/2' : 
          maskPosition === 'right' ? 'right-0 w-1/2' : 
          'left-1/4 w-1/2'
        }`}
        style={{
          background: maskPosition === 'left'
            ? 'linear-gradient(to right, rgba(100, 100, 100, 0.5), rgba(140, 140, 140, 0.3))'
            : maskPosition === 'right'
            ? 'linear-gradient(to left, rgba(100, 100, 100, 0.5), rgba(140, 140, 140, 0.3))'
            : 'linear-gradient(to right, rgba(100, 100, 100, 0.5), rgba(140, 140, 140, 0.3))',
          backdropFilter: 'grayscale(100%)',
          filter: 'grayscale(100%) brightness(0.95) contrast(1.02)',
          mixBlendMode: 'multiply'
        }}
      />
    </>
  );
};

export default BipolarMask; 