import React from 'react';
import { cn } from '@/lib/utils';
// Use relative path instead of alias to avoid build issues
import logoPath from '../../assets/logo.png';

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
