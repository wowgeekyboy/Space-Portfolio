import React from 'react';
import { useRouter } from 'next/router';

interface SpaceButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const SpaceButton: React.FC<SpaceButtonProps> = ({ children, href, onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="px-6 py-3 bg-space-light text-space-dark rounded-full hover:bg-space-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-space-light focus:ring-opacity-50"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default SpaceButton;