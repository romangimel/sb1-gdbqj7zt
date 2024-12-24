import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Wand2 } from 'lucide-react';
import { TopBar } from './Header/TopBar';
import { BasicInfoSection } from './BasicInfoSection';
import { LearningGoalsSection } from './LearningGoalsSection';
import { LearningLevelSection } from './LearningLevelSection';
import { TimeCommitmentSection } from './TimeCommitmentSection';
import { LearningPreferencesSection } from './LearningPreferencesSection';
import { TabNavigation } from './TabNavigation';
import { ProgressBar } from './ProgressBar';
import { AuthModal } from './Auth/AuthModal';
import { useFormState } from '../hooks/useFormState';
import { useLanguage } from '../hooks/useLanguage';
import { useAuthModal } from '../hooks/useAuthModal';
import { useAuth } from '../contexts/AuthContext';
import { saveLearningProfile } from '../services/supabase';
import type { LearningProfile } from '../types/profile';

export function MainApp() {
  const [currentTab, setCurrentTab] = useState(0);
  const { language, toggleLanguage, t } = useLanguage();
  const { isOpen, mode, openModal, closeModal } = useAuthModal();
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    formState,
    updateField,
    updatePreference,
    setSubmitting,
    setError,
    setSuccess,
    setValidationError,
    validateCurrentSection,
  } = useFormState();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentTab !== 4) return;
    const validation = validateCurrentSection(4);
    if (!validation.isValid) {
      setValidationError(validation.message);
      return;
    }

    if (!user) {
      openModal('generate');
      return;
    }

    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const profile: LearningProfile = {
        name: formState.name,
        email: formState.email,
        category: formState.category,
        subject: formState.subject,
        current_level: formState.currentLevel,
        learning_goal: formState.goal,
        hours_per_week: formState.hoursPerWeek,
        text_preference: formState.learningPreferences.text,
        video_preference: formState.learningPreferences.video,
        handson_preference: formState.learningPreferences.handson,
      };

      await saveLearningProfile(profile);
      setSuccess(true);
      navigate('/thank-you');
    } catch (err) {
      setError(err instanceof Error ? err.message : t.messages.generalError);
    } finally {
      setSubmitting(false);
    }
  };

  const handleNext = () => {
    const validation = validateCurrentSection(currentTab);
    if (validation.isValid) {
      setCurrentTab((prev) => Math.min(prev + 1, 4));
      setValidationError(null);
    } else {
      setValidationError(validation.message);
    }
  };

  const handlePrevious = () => {
    setValidationError(null);
    setSuccess(false);
    setCurrentTab((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#0a8a5f]/10 to-transparent">
        <div className="container mx-auto px-4 py-16 text-center pt-16">
          <div className="flex justify-center mb-6 pt-4">
            <LineChart className="w-20 h-12 text-[#0a8a5f] transform rotate-6" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span>
              <span className="bg-gradient-to-br from-[#0a8a5f] via-[#12b37d] to-[#0a8a5f] bg-clip-text text-transparent animate-gradient">
                E
              </span>-Lumina
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.header.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 relative">
          <div className="mb-8">
            <ProgressBar currentStep={currentTab} totalSteps={5} />
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent pointer-events-none" 
                 style={{
                   backgroundImage: `radial-gradient(circle at 1px 1px, #0a8a5f10 1px, transparent 0)`,
                   backgroundSize: '40px 40px'
                 }} 
            />
            
            <div className="relative">
              {currentTab === 0 && (
                <BasicInfoSection
                  name={formState.name}
                  email={formState.email}
                  onNameChange={(value) => updateField('name', value)}
                  onEmailChange={(value) => updateField('email', value)}
                  t={t.sections.basicInfo}
                />
              )}
              
              {currentTab === 1 && (
                <LearningGoalsSection
                  category={formState.category}
                  subject={formState.subject}
                  onCategoryChange={(value) => updateField('category', value)}
                  onSubjectChange={(value) => updateField('subject', value)}
                  language={language}
                  t={t.sections.learningFocus}
                  categories={t.categories}
                />
              )}
              
              {currentTab === 2 && (
                <LearningLevelSection
                  currentLevel={formState.currentLevel}
                  goal={formState.goal}
                  onCurrentLevelChange={(value) => updateField('currentLevel', value)}
                  onGoalChange={(value) => updateField('goal', value)}
                  t={t.sections.levelAndGoals}
                  goals={t.goals}
                />
              )}
              
              {currentTab === 3 && (
                <TimeCommitmentSection
                  hoursPerWeek={formState.hoursPerWeek}
                  onChange={(value) => updateField('hoursPerWeek', value)}
                  t={t.sections.timeCommitment}
                  timeOptions={t.timeOptions}
                />
              )}
              
              {currentTab === 4 && (
                <LearningPreferencesSection
                  preferences={formState.learningPreferences}
                  onChange={updatePreference}
                  t={t.sections.preferences}
                />
              )}
              
              {formState.validationError && (
                <div className="mt-4 p-4 bg-orange-50 text-orange-700 rounded-lg">
                  {formState.validationError}
                </div>
              )}

              {formState.error && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                  {formState.error}
                </div>
              )}

              <TabNavigation
                currentTab={currentTab}
                totalTabs={5}
                onNext={handleNext}
                onPrevious={handlePrevious}
                t={t.navigation}
              />

              {currentTab === 4 && (
                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="w-full bg-gradient-to-br from-[#0a8a5f] via-[#12b37d] to-[#0a8a5f] text-white py-3 px-6 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold text-lg mt-8 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{formState.isSubmitting ? t.navigation.generating : t.navigation.generate}</span>
                  <Wand2 className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}