interface FormData {
  name: string;
  email: string;
  category: string;
  subject: string;
  currentLevel: number;
  goal: string;
  hoursPerWeek: string;
  learningPreferences: {
    text: number;
    video: number;
    handson: number;
  };
}

export const validateSection = (section: number, formData: FormData): boolean => {
  switch (section) {
    case 0: // Basic Info
      return Boolean(
        formData.name.trim() && 
        formData.email.trim() &&
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
      );
    
    case 1: // Learning Focus
      return Boolean(formData.category && formData.subject.trim());
    
    case 2: // Current Level & Goals
      return Boolean(formData.currentLevel && formData.goal);
    
    case 3: // Time Commitment
      return Boolean(formData.hoursPerWeek);
    
    case 4: // Learning Preferences
      return Boolean(
        formData.learningPreferences.text &&
        formData.learningPreferences.video &&
        formData.learningPreferences.handson
      );
    
    default:
      return false;
  }
};