import React from 'react';
import { BookOpen } from 'lucide-react';

interface BasicInfoSectionProps {
  name: string;
  email: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  t: {
    title: string;
    description: string;
    nameLabel: string;
    emailLabel: string;
  };
}

export function BasicInfoSection({ 
  name, 
  email, 
  onNameChange, 
  onEmailChange,
  t 
}: BasicInfoSectionProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-[#0a8a5f]" />
          {t.title}
        </h2>
        <p className="text-gray-600">{t.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">{t.nameLabel}</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0a8a5f]/20 focus:border-[#0a8a5f] outline-none transition-all"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">{t.emailLabel}</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0a8a5f]/20 focus:border-[#0a8a5f] outline-none transition-all"
            required
          />
        </div>
      </div>
    </div>
  );
}