import React, { useState, useRef, useEffect } from 'react';
import { Languages } from 'lucide-react';
import { IconButton } from '../UI/IconButton';
import type { Language } from '../../hooks/useLanguage';

interface LanguageToggleProps {
  language: Language;
  onToggle: (lang: Language) => void;
}

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
];

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

  return (
    <div className="relative" ref={dropdownRef}>
      <IconButton
        icon={<Languages className="w-5 h-5" />}
        label="Select language"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onToggle(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors
                ${language === lang.code ? 'text-[#0a8a5f] font-medium' : 'text-gray-700'}`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}