import React from 'react';
import { Settings2 } from 'lucide-react';
import { LearningScaleInput } from './LearningScaleInput';

interface LearningPreferences {
  text: number;
  video: number;
  handson: number;
}

interface LearningPreferencesSectionProps {
  preferences: LearningPreferences;
  onChange: (key: keyof LearningPreferences, value: number) => void;
  t: {
    title: string;
    description: string;
    textLabel: string;
    videoLabel: string;
    handsonLabel: string;
  };
}

export function LearningPreferencesSection({ 
  preferences, 
  onChange,
  t,
}: LearningPreferencesSectionProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <Settings2 className="w-6 h-6 text-[#0a8a5f]" />
          {t.title}
        </h2>
        <p className="text-gray-600">{t.description}</p>
      </div>
      <div className="space-y-6">
        <LearningScaleInput
          label={t.textLabel}
          value={preferences.text}
          onChange={(value) => onChange('text', value)}
        />
        
        <LearningScaleInput
          label={t.videoLabel}
          value={preferences.video}
          onChange={(value) => onChange('video', value)}
        />
        
        <LearningScaleInput
          label={t.handsonLabel}
          value={preferences.handson}
          onChange={(value) => onChange('handson', value)}
        />
      </div>
    </div>
  );
}