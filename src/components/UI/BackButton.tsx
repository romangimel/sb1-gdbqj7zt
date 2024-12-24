import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="absolute top-16 left-4 p-2 text-[#0a8a5f] hover:bg-[#0a8a5f]/5 rounded-lg transition-colors"
      aria-label="Go back to home"
    >
      <ArrowLeft className="w-8 h-8" />
    </button>
  );
}