interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;
  
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-8">
      <div 
        className="h-full bg-gradient-to-r from-[#0a8a5f] via-[#12b37d] to-[#0a8a5f] shadow-sm transition-all duration-300 ease-in-out animate-gradient"
        style={{ 
          width: `${progress}%`,
          backgroundSize: '200% 100%',
          animation: 'gradient 2s linear infinite'
        }}
      />
    </div>
  );
}