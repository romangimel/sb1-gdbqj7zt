import { useState } from 'react';
import type { FormState, FormData } from '../types/form';
import { initialFormData } from '../types/form';
import { validateSection } from '../utils/validation/sectionValidation';
import type { SectionValidationResult } from '../utils/validation/sectionValidation';

export function useFormState() {
  const [formState, setFormState] = useState<FormState>({
    ...initialFormData,
    isSubmitting: false,
    error: null,
    success: false,
    validationError: null,
  });

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updatePreference = (key: keyof FormData['learningPreferences'], value: number) => {
    setFormState((prev) => ({
      ...prev,
      learningPreferences: {
        ...prev.learningPreferences,
        [key]: value,
      },
    }));
  };

  const setSubmitting = (isSubmitting: boolean) => {
    setFormState((prev) => ({ ...prev, isSubmitting }));
  };

  const setError = (error: string | null) => {
    setFormState((prev) => ({ ...prev, error }));
  };

  const setSuccess = (success: boolean) => {
    setFormState((prev) => ({ ...prev, success }));
  };

  const setValidationError = (error: string | null) => {
    setFormState((prev) => ({ ...prev, validationError: error }));
  };

  const validateCurrentSection = (section: number): SectionValidationResult => {
    return validateSection(section, formState);
  };

  return {
    formState,
    updateField,
    updatePreference,
    setSubmitting,
    setError,
    setSuccess,
    setValidationError,
    validateCurrentSection,
  };
}