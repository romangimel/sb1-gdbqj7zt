import React from 'react';
import { Target } from 'lucide-react';
import { LearningScaleInput } from './LearningScaleInput';

interface LearningLevelSectionProps {
  currentLevel: number;
  goal: string;
  onCurrentLevelChange: (value: number) => void;
  onGoalChange: (value: string) => void;
  t: {
    title: string;
    description: string;
    levelLabel: string;
    goalLabel: string;
  };
  goals: Record<string, string>;
}

const goalIds = ['basic', 'hobby', 'expert', 'career'];

export function LearningLevelSection({
  currentLevel,
  goal,
  onCurrentLevelChange,
  onGoalChange,
  t,
  goals,
}: LearningLevelSectionProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-[#0a8a5f]" />
          {t.title}
        </h2>
        <p className="text-gray-600">{t.description}</p>
      </div>
      
      <div className="space-y-6">
        <LearningScaleInput
          label={t.levelLabel}
          value={currentLevel}
          onChange={onCurrentLevelChange}
        />

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t.goalLabel}
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {goalIds.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => onGoalChange(id)}
                className={`p-4 rounded-lg border-2 text-left transition-all
                  ${goal === id
                    ? 'border-[#0a8a5f] bg-[#0a8a5f]/5 text-[#0a8a5f]'
                    : 'border-gray-200 hover:border-[#0a8a5f] hover:text-[#0a8a5f]'
                  }`}
              >
                {goals[id]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}