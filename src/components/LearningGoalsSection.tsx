import React from 'react';
import { Brain, Languages, MonitorSmartphone, Briefcase, Palette, Calculator } from 'lucide-react';
import { SubjectInput } from './LearningGoals/SubjectInput';
import type { Language } from '../hooks/useLanguage';

interface LearningGoalsSectionProps {
  category: string;
  subject: string;
  onCategoryChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  language: Language;
  t: {
    title: string;
    description: string;
    categoryLabel: string;
    subjectLabel: string;
  };
  categories: Record<string, string>;
}

const categoryIds = ['technology', 'business', 'science', 'arts', 'languages'];

const CategoryIcon = ({ category, isSelected }: { category: string; isSelected: boolean }) => {
  const iconClass = `w-5 h-5 ${isSelected ? 'text-[#0a8a5f]' : 'text-[#0a8a5f]/70'}`;
  
  switch (category) {
    case 'languages':
      return <Languages className={iconClass} />;
    case 'technology':
      return <MonitorSmartphone className={iconClass} />;
    case 'business':
      return <Briefcase className={iconClass} />;
    case 'arts':
      return <Palette className={iconClass} />;
    case 'science':
      return <Calculator className={iconClass} />;
    default:
      return null;
  }
};

export function LearningGoalsSection({
  category,
  subject,
  onCategoryChange,
  onSubjectChange,
  language,
  t,
  categories,
}: LearningGoalsSectionProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <Brain className="w-6 h-6 text-[#0a8a5f]" />
          {t.title}
        </h2>
        <p className="text-gray-600">{t.description}</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t.categoryLabel}
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {categoryIds.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => onCategoryChange(id)}
                className={`p-4 rounded-lg border-2 text-left transition-all flex items-center gap-2
                  ${category === id
                    ? 'border-[#0a8a5f] bg-[#0a8a5f]/5 text-[#0a8a5f]'
                    : 'border-gray-200 hover:border-[#0a8a5f] hover:text-[#0a8a5f]'
                  }`}
              >
                <CategoryIcon category={id} isSelected={category === id} />
                <span>{categories[id]}</span>
              </button>
            ))}
          </div>
        </div>

        <SubjectInput
          value={subject}
          onChange={onSubjectChange}
          category={category}
          language={language}
          label={t.subjectLabel}
        />
      </div>
    </div>
  );
}