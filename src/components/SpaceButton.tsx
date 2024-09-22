import React from 'react';
import { useRouter } from 'next/router';

interface SpaceButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Updated onClick type
}

const SpaceButton: React.FC<SpaceButtonProps> = ({ children, href, onClick, type = 'button', ...props }) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick(event); // Pass the event argument to onClick handler
    }
  };

  return (
    <button
      className="px-6 py-3 bg-space-light text-space-dark rounded-full hover:bg-space-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-space-light focus:ring-opacity-50"
      onClick={handleClick}
      type={type} // Set the button type (default is 'button')
      {...props} // Pass any other props to the button
    >
      {children}
    </button>
  );
};

export default SpaceButton;
