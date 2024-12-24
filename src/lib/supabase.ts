import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lrpjdkdpkpncnfwrmzln.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxycGpka2Rwa3BuY25md3JtemxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MzIzODMsImV4cCI6MjA1MDIwODM4M30.lCqaZooVkhpaAZi_v3jcjLP-YsGsNk-HgR4byM78prE';

export const supabase = createClient(supabaseUrl, supabaseKey);