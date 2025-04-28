import React from 'react';
import { cn } from '@/lib/utils';
// No import needed for public assets

interface LogoProps {
  className?: string;
  invert?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, invert = false }) => {
  return (
    <div className={cn("flex items-center", className)}>
      {/* Temporary placeholder SVG until image loading issue is fixed */}
      <svg 
        width="180" 
        height="48" 
        viewBox="0 0 180 48" 
        className={cn("h-12", invert ? "invert" : "")}
      >
        <rect width="180" height="48" fill="#4F46E5" />
        <text x="12" y="30" fill="white" fontSize="16" fontWeight="bold">
          Inclusively Digital
        </text>
      </svg>
    </div>
  );
};

export default Logo;
