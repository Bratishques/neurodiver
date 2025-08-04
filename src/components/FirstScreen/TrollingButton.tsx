'use client';
import { useState, useRef, useEffect } from 'react';

interface TrollingButtonProps {
  className?: string;
  children: React.ReactNode;
}

const TrollingButton = ({ className = '', children }: TrollingButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setInitialPosition = () => {
      if (containerRef.current && buttonRef.current) {
        const container = containerRef.current;
        const button = buttonRef.current;

        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        const initialY = (containerRect.height - buttonRect.height) / 2;
        const initialX = containerRect.width - buttonRect.width - 40;

        setPosition({ x: initialX, y: initialY });
        setIsInitialized(true);
      }
    };

    const timer = setTimeout(setInitialPosition, 100);
    return () => clearTimeout(timer);
  }, []);

  const moveButton = () => {
    if (!containerRef.current || !buttonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = buttonRef.current.getBoundingClientRect();

    const containerWidth = container.width;
    const containerHeight = container.height;
    const buttonWidth = button.width;
    const buttonHeight = button.height;

    const maxX = containerWidth - buttonWidth;
    const maxY = containerHeight - buttonHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setPosition({ x: newX, y: newY });
  };

  const handleMouseEnter = () => {
    moveButton();
  };

  const handleClick = () => {
    moveButton();
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{ width: '100%', height: '100%' }}
    >
      <div
        ref={buttonRef}
        className="absolute transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isInitialized ? 1 : 0,
        }}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        <button
          className={`bg-white text-black text-xl py-6 px-4 rounded-xl ${className}`}
          disabled={true}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default TrollingButton;
