interface Translation {
  header: {
    subtitle: string;
  };
  sections: {
    basicInfo: {
      title: string;
      description: string;
      nameLabel: string;
      emailLabel: string;
    };
    learningFocus: {
      title: string;
      description: string;
      categoryLabel: string;
      subjectLabel: string;
    };
    levelAndGoals: {
      title: string;
      description: string;
      levelLabel: string;
      goalLabel: string;
    };
    timeCommitment: {
      title: string;
      description: string;
      hoursLabel: string;
    };
    preferences: {
      title: string;
      description: string;
      textLabel: string;
      videoLabel: string;
      handsonLabel: string;
    };
  };
  navigation: {
    previous: string;
    next: string;
    generate: string;
    generating: string;
  };
  categories: {
    languages: string;
    technology: string;
    business: string;
    arts: string;
    science: string;
  };
  goals: {
    basic: string;
    career: string;
    expert: string;
    hobby: string;
  };
  timeOptions: {
    '1-5': string;
    '5-10': string;
    '10-15': string;
    '15-20': string;
    '20+': string;
  };
  messages: {
    success: string;
    validationError: string;
    generalError: string;
  };
}

export const translations: Record<'en' | 'ru', Translation> = {
  en: {
    header: {
      subtitle: 'Discover your personalized learning journey. Tell us about yourself, and we\'ll create a custom path to help you achieve your learning goals.',
    },
    sections: {
      basicInfo: {
        title: 'Basic Information',
        description: 'Let\'s start with your basic details to personalize your learning experience.',
        nameLabel: 'Name',
        emailLabel: 'Email',
      },
      learningFocus: {
        title: 'Learning Focus',
        description: 'Choose your area of interest and tell us what you\'d like to learn.',
        categoryLabel: 'What category interests you?',
        subjectLabel: 'What would you like to learn?',
      },
      levelAndGoals: {
        title: 'Current Level & Goals',
        description: 'Help us understand your current expertise and what you want to achieve.',
        levelLabel: 'Current knowledge level',
        goalLabel: 'What is your learning goal?',
      },
      timeCommitment: {
        title: 'Time Commitment',
        description: 'Let us know how much time you can dedicate to your learning journey.',
        hoursLabel: 'How many hours can you dedicate per week?',
      },
      preferences: {
        title: 'Learning Preferences',
        description: 'Tell us how you prefer to learn to get your best, personalized learning experience.',
        textLabel: 'Text-based learning',
        videoLabel: 'Video-based learning',
        handsonLabel: 'Hands-on practice',
      },
    },
    navigation: {
      previous: 'Previous',
      next: 'Next',
      generate: 'Generate Learning Path',
      generating: 'Saving...',
    },
    categories: {
      languages: 'Languages',
      technology: 'Technology',
      business: 'Business',
      arts: 'Arts & Design',
      science: 'Science & Math',
    },
    goals: {
      basic: 'Basic Introduction',
      career: 'Career Change',
      expert: 'Expert Mastery',
      hobby: 'Hobby Development',
    },
    timeOptions: {
      '1-5': '1-5 hours',
      '5-10': '5-10 hours',
      '10-15': '10-15 hours',
      '15-20': '15-20 hours',
      '20+': '20+ hours',
    },
    messages: {
      success: 'Your learning profile has been saved successfully!',
      validationError: 'Please complete all fields in this section before continuing.',
      generalError: 'Failed to save your learning profile. Please try again.',
    },
  },
  ru: {
    header: {
      subtitle: 'Откройте для себя персонализированный путь обучения. Расскажите о себе, и мы создадим индивидуальный план для достижения ваших целей.',
    },
    sections: {
      basicInfo: {
        title: 'Основная информация',
        description: 'Начнем с ваших основных данных для персонализации обучения.',
        nameLabel: 'Имя',
        emailLabel: 'Электронная почта',
      },
      learningFocus: {
        title: 'Фокус обучения',
        description: 'Выберите интересующую вас область и расскажите, что хотите изучить.',
        categoryLabel: 'Какая категория вас интересует?',
        subjectLabel: 'Что бы вы хотели изучить?',
      },
      levelAndGoals: {
        title: 'Текущий уровень и цели',
        description: 'Помогите нам понять ваш текущий опыт и чего вы хотите достичь.',
        levelLabel: 'Текущий уровень знаний',
        goalLabel: 'Какова ваша цель обучения?',
      },
      timeCommitment: {
        title: 'Временные обязательства',
        description: 'Дайте нам знать, сколько времени вы можете посвятить обучению.',
        hoursLabel: 'Сколько часов в неделю вы можете уделить?',
      },
      preferences: {
        title: 'Предпочтения в обучении',
        description: 'Расскажите, как вы предпочитаете учиться, чтобы получить наилучший опыт.',
        textLabel: 'Обучение по текстам',
        videoLabel: 'Обучение по видео',
        handsonLabel: 'Практические занятия',
      },
    },
    navigation: {
      previous: 'Назад',
      next: 'Далее',
      generate: 'Создать план обучения',
      generating: 'Сохранение...',
    },
    categories: {
      languages: 'Языки',
      technology: 'Технологии',
      business: 'Бизнес',
      arts: 'Искусство и дизайн',
      science: 'Наука и математика',
    },
    goals: {
      basic: 'Базовое введение',
      career: 'Смена карьеры',
      expert: 'Экспертное владение',
      hobby: 'Развитие хобби',
    },
    timeOptions: {
      '1-5': '1-5 часов',
      '5-10': '5-10 часов',
      '10-15': '10-15 часов',
      '15-20': '15-20 часов',
      '20+': '20+ часов',
    },
    messages: {
      success: 'Ваш профиль обучения успешно сохранен!',
      validationError: 'Пожалуйста, заполните все поля в этом разделе, прежде чем продолжить.',
      generalError: 'Не удалось сохранить профиль обучения. Пожалуйста, попробуйте снова.',
    },
  },
};