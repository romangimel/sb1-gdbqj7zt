import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export function GradientButton({ 
  children, 
  onClick, 
  className = '', 
  type = 'button' 
}: GradientButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gradient-to-br from-[#0a8a5f] via-[#12b37d] to-[#0a8a5f] 
        text-white px-2 md:px-4 py-1.5 md:py-2 rounded-lg hover:opacity-90 transition-opacity 
        font-medium flex items-center justify-center gap-2 text-sm md:text-base ${className}`}
    >
      {children}
    </button>
  );
}