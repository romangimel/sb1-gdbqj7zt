import { isRepeatedCharacters, containsMeaningfulWord } from './textAnalysis';

export interface SubjectValidationResult {
  isValid: boolean;
  message?: string;
}

export function validateSubject(subject: string): SubjectValidationResult {
  // Trim the input
  const trimmedSubject = subject.trim();

  // Check minimum length
  if (trimmedSubject.length < 2) {
    return {
      isValid: false,
      message: 'Please enter at least 2 characters'
    };
  }

  // Check for valid characters (now including minus sign)
  const validCharacterPattern = /^[a-zA-Z0-9\s./-]+$/;
  if (!validCharacterPattern.test(trimmedSubject)) {
    return {
      isValid: false,
      message: 'Only letters, numbers, spaces, periods, slashes, and hyphens are allowed'
    };
  }

  // Check for repeated characters
  if (isRepeatedCharacters(trimmedSubject)) {
    return {
      isValid: false,
      message: 'Please avoid repeating characters'
    };
  }

  // Check for meaningful content
  if (!containsMeaningfulWord(trimmedSubject)) {
    return {
      isValid: false,
      message: 'Your input seems too vague. Please provide more detail'
    };
  }

  return { isValid: true };
}