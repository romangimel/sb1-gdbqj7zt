import type { Language } from '../hooks/useLanguage';

const categoryExamples: Record<Language, Record<string, string>> = {
  en: {
    languages: 'e.g., Spanish, Japanese',
    technology: 'e.g., Web Development, Machine Learning',
    business: 'e.g., Marketing Strategy, Financial Planning',
    arts: 'e.g., Digital Illustration, Photography',
    science: 'e.g., Data Analysis, Molecular Biology',
  },
  ru: {
    languages: 'например, Испанский, Японский',
    technology: 'например, Веб-разработка, Машинное обучение',
    business: 'например, Маркетинговая стратегия, Финансовое планирование',
    arts: 'например, Цифровая иллюстрация, Фотография',
    science: 'например, Анализ данных, Молекулярная биология',
  },
};

export const getCategoryPlaceholder = (category: string, language: Language): string => {
  return categoryExamples[language][category] || '';
};