import type { Language } from '../hooks/useLanguage';

export interface FormData {
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

export interface FormState extends FormData {
  isSubmitting: boolean;
  error: string | null;
  success: boolean;
  validationError: string | null;
}

export const initialFormData: FormData = {
  name: '',
  email: '',
  category: 'technology',
  subject: '',
  currentLevel: 1,
  goal: '',
  hoursPerWeek: '',
  learningPreferences: {
    text: 1,
    video: 1,
    handson: 1,
  },
};