import React from 'react';
import { Logo } from './Logo';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { HelpButton } from './HelpButton';
import { GradientButton } from '../UI/GradientButton';
import { UserDropdown } from './UserDropdown';
import { User } from '@supabase/supabase-js';
import type { Language } from '../../hooks/useLanguage';

interface TopBarProps {
  language: Language;
  onLanguageToggle: (lang: Language) => void;
  onLogin: () => void;
  user: User | null;
}

export function TopBar({ language, onLanguageToggle, onLogin, user }: TopBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white/50 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 h-12 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2 md:gap-2">
          <LanguageToggle language={language} onToggle={onLanguageToggle} />
          <ThemeToggle />
          <HelpButton />
          {user ? (
            <UserDropdown user={user} />
          ) : (
            <GradientButton 
              onClick={onLogin}
              className="h-7 md:h-8 py-0 px-3 md:px-4 text-xs md:text-sm ml-2 md:ml-2"
            >
              Sign in
            </GradientButton>
          )}
        </div>
      </div>
    </div>
  );
}