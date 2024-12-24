import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle, Users, FileQuestion } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '../UI/IconButton';

export function HelpButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <IconButton
        icon={<HelpCircle className="w-5 h-5" />}
        label="Help"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          <button 
            onClick={() => handleNavigation('/about')}
            className="w-full px-4 py-2 text-left text-sm text-gray-900 hover:bg-[#0a8a5f]/5 transition-colors flex items-center gap-2"
          >
            <Users className="w-4 h-4 text-[#0a8a5f]" />
            About us
          </button>
          <button 
            onClick={() => handleNavigation('/faq')}
            className="w-full px-4 py-2 text-left text-sm text-gray-900 hover:bg-[#0a8a5f]/5 transition-colors flex items-center gap-2"
          >
            <FileQuestion className="w-4 h-4 text-[#0a8a5f]" />
            FAQ
          </button>
        </div>
      )}
    </div>
  );
}