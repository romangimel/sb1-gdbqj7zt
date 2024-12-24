import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export function IconButton({ icon, label, onClick }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-1 md:p-1.5 rounded-lg hover:bg-[#0a8a5f]/5 transition-colors text-[#0a8a5f]"
      aria-label={label}
    >
      <div className="w-5 h-5 md:w-6 md:h-6">
        {icon}
      </div>
    </button>
  );
}