import { supabase } from '../lib/supabase';
import type { LearningProfile } from '../types/profile';

export async function saveLearningProfile(profile: LearningProfile) {
  const { error } = await supabase
    .from('learning_profiles')
    .insert([{
      ...profile,
      created_at: new Date().toISOString()
    }]);

  if (error) {
    console.error('Supabase error:', error);
    throw new Error('Failed to save learning profile');
  }
}