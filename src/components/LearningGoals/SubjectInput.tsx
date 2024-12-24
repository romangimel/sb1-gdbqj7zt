import React from 'react';
import type { Language } from '../../hooks/useLanguage';
import { getCategoryPlaceholder } from '../../utils/categoryExamples';

interface SubjectInputProps {
  value: string;
  onChange: (value: string) => void;
  category: string;
  language: Language;
  label: string;
}

export function SubjectInput({ 
  value, 
  onChange, 
  category, 
  language, 
  label 
}: SubjectInputProps) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={getCategoryPlaceholder(category, language)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0a8a5f]/20 focus:border-[#0a8a5f] outline-none transition-all"
      />
    </div>
  );
}