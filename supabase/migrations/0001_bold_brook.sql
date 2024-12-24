/*
  # Create Learning Profiles Table

  1. New Tables
    - `learning_profiles`
      - Basic Info: name, email
      - Learning Focus: category, subject
      - Current Level: current_level (1-5), learning_goal
      - Time Commitment: hours_per_week
      - Learning Preferences: text_preference, video_preference, handson_preference (all 1-5)
      - Metadata: created_at

  2. Security
    - Enable RLS
    - Add policies for users to:
      - Read their own profiles
      - Create their own profile
*/

CREATE TABLE IF NOT EXISTS learning_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  name text NOT NULL,
  email text NOT NULL,
  category text NOT NULL,
  subject text NOT NULL,
  current_level integer NOT NULL CHECK (current_level BETWEEN 1 AND 5),
  learning_goal text NOT NULL,
  hours_per_week text NOT NULL,
  text_preference integer NOT NULL CHECK (text_preference BETWEEN 1 AND 5),
  video_preference integer NOT NULL CHECK (video_preference BETWEEN 1 AND 5),
  handson_preference integer NOT NULL CHECK (handson_preference BETWEEN 1 AND 5),
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

ALTER TABLE learning_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profiles"
  ON learning_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own profile"
  ON learning_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);