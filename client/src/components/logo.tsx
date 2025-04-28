import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  invert?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, invert = false }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src="/new-logo.jpeg"
        alt="Inclusively Digital Logo"
        className={cn("h-12 w-auto", invert ? "invert" : "")}
      />
    </div>
  );
};

export default Logo;
