import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TabNavigationProps {
  currentTab: number;
  totalTabs: number;
  onNext: () => void;
  onPrevious: () => void;
  t: {
    previous: string;
    next: string;
  };
}

export function TabNavigation({ 
  currentTab, 
  totalTabs, 
  onNext, 
  onPrevious,
  t,
}: TabNavigationProps) {
  return (
    <div className="space-y-6 mt-8">
      <div className="flex justify-between items-center gap-4">
        {currentTab > 0 && (
          <button
            onClick={onPrevious}
            className="px-4 py-1.5 text-[#0a8a5f] bg-white border border-gray-200 rounded-lg hover:border-[#0a8a5f] transition-colors font-medium flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            {t.previous}
          </button>
        )}
        {currentTab < totalTabs - 1 && (
          <button
            onClick={onNext}
            className="px-4 py-1.5 bg-gradient-to-br from-[#0a8a5f] via-[#12b37d] to-[#0a8a5f] text-white rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center gap-2 ml-auto"
          >
            {t.next}
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}