import React from 'react';
import { cn } from '@/lib/utils';
import logoPath from '@assets/new-logo.png';

interface LogoProps {
  className?: string;
  invert?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, invert = false }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src={logoPath} 
        alt="Inclusively Digital Marketing Logo" 
        className={cn("h-12", invert ? "invert" : "")}
      />
    </div>
  );
};

export default Logo;
