import React from 'react';

interface LearningScaleInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export function LearningScaleInput({ label, value, onChange }: LearningScaleInputProps) {
  const handleClick = (e: React.MouseEvent, num: number) => {
    e.preventDefault();
    onChange(num);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-700 font-medium">{label}</label>
      <div className="flex items-center gap-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            type="button"
            onClick={(e) => handleClick(e, num)}
            className={`w-10 h-10 rounded-full border-2 transition-all duration-300
              ${value === num 
                ? 'bg-gradient-to-br from-[#0a8a5f] via-[#12b37d] to-[#0a8a5f] text-white border-transparent shadow-md hover:shadow-lg hover:scale-105' 
                : 'border-gray-300 hover:border-[#0a8a5f] hover:text-[#0a8a5f]'
              }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}