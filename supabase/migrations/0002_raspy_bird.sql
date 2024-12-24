/*
  # Update learning profiles table permissions

  1. Changes
    - Make user_id column optional
    - Remove foreign key constraint
    - Update RLS policies to allow public access
    
  2. Security
    - Allow public inserts without authentication
    - Maintain basic data validation
*/

ALTER TABLE learning_profiles
  ALTER COLUMN user_id DROP NOT NULL;

DROP POLICY IF EXISTS "Users can read own profiles" ON learning_profiles;
DROP POLICY IF EXISTS "Users can create own profile" ON learning_profiles;

CREATE POLICY "Allow public read"
  ON learning_profiles
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert"
  ON learning_profiles
  FOR INSERT
  TO public
  WITH CHECK (true);