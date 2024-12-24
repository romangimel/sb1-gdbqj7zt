import React from 'react';
import { UserPlus, LogIn } from 'lucide-react';

interface AuthModalHeaderProps {
  isLogin: boolean;
}

export function AuthModalHeader({ isLogin }: AuthModalHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {isLogin ? (
        <LogIn className="w-8 h-8 text-[#0a8a5f]" />
      ) : (
        <UserPlus className="w-8 h-8 text-[#0a8a5f]" />
      )}
      <h2 className="text-2xl font-semibold text-[#0a8a5f]">
        {isLogin ? 'Welcome back' : 'Create account'}
      </h2>
    </div>
  );
}