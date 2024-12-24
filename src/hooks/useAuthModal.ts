import { useState } from 'react';

export function useAuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'generate' | 'login'>('generate');

  const openModal = (newMode: 'generate' | 'login' = 'generate') => {
    setMode(newMode);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    mode,
    openModal,
    closeModal,
  };
}