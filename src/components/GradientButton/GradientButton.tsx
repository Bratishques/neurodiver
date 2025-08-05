import Link from 'next/link';
import Marquee from 'react-fast-marquee';

interface GradientButtonProps {
  className?: string;
  href?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'link';
  textClassName?: string;
}

const GradientButton = ({
  className = '',
  href = '',
  children = 'Take the Neurotype Test',
  onClick,
  type = 'link',
  textClassName,
}: GradientButtonProps) => {
  const baseClasses =
    'rounded-2xl md:text-xl text-xs sm:p-6 p-3 md:p-6 p-1 cursor-pointer leading-5 md:leading-5 leading-3 relative overflow-hidden font-medium text-center';

  const ButtonContent = (
    <div
      className={`relative z-10 ${baseClasses} ${textClassName}`}
      onClick={onClick}
    >
      {children}
    </div>
  );

  const GradientBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
      <Marquee
        gradient={false}
        speed={40}
        direction="left"
        className="w-full h-full"
      >
        <img
          src="/icons/Gradient.svg"
          alt="gradient"
          className="h-full w-auto"
        />
        <img
          src="/icons/Gradient.svg"
          alt="gradient duplicate"
          className="h-full w-auto"
        />
      </Marquee>
    </div>
  );

  const content = (
    <div className={`relative ${className}`}>
      <GradientBackground />
      {ButtonContent}
    </div>
  );

  if (type === 'link' && href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

export default GradientButton;
