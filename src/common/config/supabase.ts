import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our application data
export interface ApplicationData {
  name: string;
  year: string; // Store as text (e.g., "junior", "senior")
  major: string;
  email: string;
  phone: string;
  resume_filename: string;
  created_at?: string; // timestamptz type in database
}

// Storage bucket name for resumes
export const RESUMES_BUCKET = 'resumes'; 