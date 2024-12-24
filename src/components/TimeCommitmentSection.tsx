import React from 'react';
import { Clock } from 'lucide-react';

interface TimeCommitmentSectionProps {
  hoursPerWeek: string;
  onChange: (value: string) => void;
  t: {
    title: string;
    description: string;
    hoursLabel: string;
  };
  timeOptions: Record<string, string>;
}

const timeIds = ['1-5', '5-10', '10-15', '15-20', '20+'];

export function TimeCommitmentSection({ 
  hoursPerWeek, 
  onChange,
  t,
  timeOptions,
}: TimeCommitmentSectionProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <Clock className="w-6 h-6 text-[#0a8a5f]" />
          {t.title}
        </h2>
        <p className="text-gray-600">{t.description}</p>
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          {t.hoursLabel}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {timeIds.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              className={`p-4 rounded-lg border-2 text-left transition-all
                ${hoursPerWeek === id
                  ? 'border-[#0a8a5f] bg-[#0a8a5f]/5 text-[#0a8a5f]'
                  : 'border-gray-200 hover:border-[#0a8a5f] hover:text-[#0a8a5f]'
                }`}
            >
              {timeOptions[id]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}