import React from 'react';

interface ColoredTextProps {
  text: string;
  colors?: string[];
  className?: string;
  letterClassName?: string;
  preserveSpaces?: boolean;
}

const ColoredText: React.FC<ColoredTextProps> = ({
  text,
  colors = [
    'var(--colorOrange)',
    'var(--colorWhite)',
    'var(--colorGreen)',
    'var(--colorCyan)',
  ],
  className = '',
  letterClassName = 'inline-block',
  preserveSpaces = true,
}) => {
  return (
    <span className={className}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          style={{ color: colors[index % colors.length] }}
          className={letter === ' ' && !preserveSpaces ? '' : letterClassName}
        >
          {letter === ' ' ? (preserveSpaces ? '\u00A0' : ' ') : letter}
        </span>
      ))}
    </span>
  );
};

export default ColoredText;
