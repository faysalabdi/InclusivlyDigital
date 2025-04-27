import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  invert?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, invert = false }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <svg viewBox="0 0 300 80" className={cn("h-12", invert ? "invert" : "")} aria-label="Inclusively Digital Marketing Logo">
        <text x="0" y="40" fontFamily="Arial" fontSize="35" fontWeight="bold" style={{ fontStyle: 'italic' }} fill="#000000">
          INCLUSIVELY
        </text>
        <text x="88" y="60" fontFamily="Arial" fontSize="12" fontWeight="medium" fill="#000000">
          DIGITAL MARKETING
        </text>
      </svg>
    </div>
  );
};

export default Logo;
