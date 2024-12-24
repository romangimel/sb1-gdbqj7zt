import React from 'react';
import { TopBar } from '../Header/TopBar';
import { useLanguage } from '../../hooks/useLanguage';
import { useAuth } from '../../contexts/AuthContext';
import { useAuthModal } from '../../hooks/useAuthModal';
import { AuthModal } from '../Auth/AuthModal';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { language, toggleLanguage } = useLanguage();
  const { user } = useAuth();
  const { isOpen, mode, openModal, closeModal } = useAuthModal();

  const handleLogin = () => {
    openModal('login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar 
        language={language} 
        onLanguageToggle={toggleLanguage}
        onLogin={handleLogin}
        user={user}
      />
      {children}
      <AuthModal 
        isOpen={isOpen} 
        onClose={closeModal}
        mode={mode}
      />
    </div>
  );
}