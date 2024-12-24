import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { GradientButton } from '../UI/GradientButton';
import { AuthModalHeader } from './AuthModalHeader';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'generate' | 'login';
}

export function AuthModal({ isOpen, onClose, mode = 'generate' }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(mode === 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signUp, error, user } = useAuth();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user) {
      onClose();
      setEmail('');
      setPassword('');
    }
  }, [user, onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div ref={modalRef} className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#0a8a5f] hover:text-[#12b37d] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <AuthModalHeader isLogin={isLogin} />

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-[#0a8a5f]/20 focus:border-[#0a8a5f] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-[#0a8a5f]/20 focus:border-[#0a8a5f] outline-none"
              required
            />
          </div>

          <GradientButton type="submit" className="w-full">
            {isLogin ? 'Sign in' : 'Create account'}
          </GradientButton>

          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-[#0a8a5f] hover:underline mt-4 w-full text-center"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}