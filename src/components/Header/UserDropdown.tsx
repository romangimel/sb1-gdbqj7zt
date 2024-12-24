import React, { useState, useRef, useEffect } from 'react';
import { User as UserIcon, LogOut } from 'lucide-react';
import { User } from '@supabase/supabase-js';
import { useAuth } from '../../contexts/AuthContext';
import { IconButton } from '../UI/IconButton';

interface UserDropdownProps {
  user: User;
}

export function UserDropdown({ user }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { signOut } = useAuth();

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
        icon={<UserIcon />}
        label="User menu"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          <div className="px-4 py-2 text-xs text-gray-600 border-b border-gray-100">
            {user.email}
          </div>
          <button
            onClick={() => {
              signOut();
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 text-left text-sm text-[#0a8a5f] hover:bg-[#0a8a5f]/5 transition-colors flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Log out
          </button>
        </div>
      )}
    </div>
  );
}