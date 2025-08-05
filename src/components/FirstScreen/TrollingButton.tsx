'use client';
import { useState, useRef, useEffect } from 'react';
import GradientButton from '../GradientButton/GradientButton';

interface TrollingButtonProps {
  className?: string;
  children: React.ReactNode;
  mode?: string;
}

const TrollingButton = ({ className = '', children, mode }: TrollingButtonProps) => {
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

        const buttonWidth = buttonRect.width;
        const buttonHeight = buttonRect.height;
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;

        // Проверяем, помещается ли кнопка в контейнер
        if (buttonWidth > containerWidth || buttonHeight > containerHeight) {
          // Если кнопка больше контейнера, центрируем её
          const centerX = (containerWidth - buttonWidth) / 2;
          const centerY = (containerHeight - buttonHeight) / 2;
          setPosition({ x: centerX, y: centerY });
        } else {
          // Иначе используем стандартную позицию
          const initialY = (containerHeight - buttonHeight) / 2;
          const initialX = containerWidth - buttonWidth - 40;
          setPosition({ x: initialX, y: initialY });
        }
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

    // Ограничиваем максимальные значения, чтобы кнопка не выезжала за границы
    const maxX = Math.max(0, containerWidth - buttonWidth);
    const maxY = Math.max(0, containerHeight - buttonHeight);

    // Если контейнер меньше кнопки, центрируем кнопку
    if (maxX <= 0 || maxY <= 0) {
      const centerX = (containerWidth - buttonWidth) / 2;
      const centerY = (containerHeight - buttonHeight) / 2;
      setPosition({ x: centerX, y: centerY });
      return;
    }

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
        {mode === 'dislexia' || mode === 'bipolar' ? (
          <GradientButton
            type="button"
            className={`max-w-full ${className}`}
            textClassName="text-white"
            onClick={handleClick}
          >
            {children}
          </GradientButton>
        ) : (
          <button
            className={`bg-white text-black text-xl py-6 px-4 rounded-xl max-w-full overflow-hidden ${className}`}
            disabled={true}
          >
            {children}
          </button>
        )}
      </div>
    </div>
  );
};

export default TrollingButton;
