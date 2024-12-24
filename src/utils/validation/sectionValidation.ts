import { validateSubject } from './subjectValidation';
import type { FormData } from '../../types/form';

export interface SectionValidationResult {
  isValid: boolean;
  message?: string;
}

export function validateSection(section: number, formData: FormData): SectionValidationResult {
  switch (section) {
    case 0: // Basic Info
      if (!formData.name.trim() || !formData.email.trim()) {
        return { isValid: false, message: 'Please complete all fields in this section before continuing' };
      }
      if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
        return { isValid: false, message: 'Please enter a valid email address' };
      }
      return { isValid: true };
    
    case 1: // Learning Focus
      if (!formData.category || !formData.subject.trim()) {
        return { isValid: false, message: 'Please complete all fields in this section before continuing' };
      }
      const subjectValidation = validateSubject(formData.subject);
      if (!subjectValidation.isValid) {
        return subjectValidation;
      }
      return { isValid: true };
    
    case 2: // Current Level & Goals
      if (!formData.currentLevel || !formData.goal) {
        return { isValid: false, message: 'Please complete all fields in this section before continuing' };
      }
      return { isValid: true };
    
    case 3: // Time Commitment
      if (!formData.hoursPerWeek) {
        return { isValid: false, message: 'Please complete all fields in this section before continuing' };
      }
      return { isValid: true };
    
    case 4: // Learning Preferences
      const { text, video, handson } = formData.learningPreferences;
      if (!text || !video || !handson) {
        return { isValid: false, message: 'Please complete all fields in this section before continuing' };
      }
      return { isValid: true };
    
    default:
      return { isValid: false, message: 'Invalid section' };
  }
}