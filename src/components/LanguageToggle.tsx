import React, { useState, useRef, useEffect } from 'react';
import { Languages } from 'lucide-react';
import type { Language } from '../hooks/useLanguage';

interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
}

const languages: LanguageOption[] = [
  { code: 'en', label: 'English', shortLabel: 'En' },
  { code: 'ru', label: 'Русский', shortLabel: 'Ру' },
];

interface LanguageToggleProps {
  language: Language;
  onToggle: (lang: Language) => void;
}

export function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    onToggle(lang);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Select language"
      >
        <Languages className="w-5 h-5 text-[#0a8a5f]" />
        <span className="text-sm font-medium text-gray-600">
          {currentLanguage?.shortLabel}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors
                ${language === lang.code ? 'text-[#0a8a5f] font-medium' : 'text-gray-700'}`}
            >
              <span className="mr-2">{lang.shortLabel}</span>
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}