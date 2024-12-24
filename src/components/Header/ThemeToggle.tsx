import React from 'react';
import { Moon } from 'lucide-react';
import { IconButton } from '../UI/IconButton';

export function ThemeToggle() {
  return (
    <IconButton
      icon={<Moon className="w-5 h-5" />}
      label="Toggle theme"
    />
  );
}