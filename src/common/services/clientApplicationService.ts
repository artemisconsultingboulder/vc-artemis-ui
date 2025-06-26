import { supabase } from '../config/supabase';
import type { ClientApplicationData } from '../config/supabase';

export interface ClientApplicationFormData {
  name: string;
  company: string;
  email: string;
  description: string;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Submits a client application to Supabase
 * Inserts client application data into the client-applications table
 */
export const submitClientApplication = async (
  formData: ClientApplicationFormData
): Promise<SubmissionResult> => {
  try {
    // Prepare client application data for database
    const clientApplicationData: ClientApplicationData = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      description: formData.description
    };

    // Insert client application data into database
    const { error: insertError } = await supabase
      .from('client-applications')
      .insert([clientApplicationData]);

    if (insertError) {
      console.error('Database insert error:', insertError);
      return {
        success: false,
        message: 'Failed to save your message',
        error: insertError.message
      };
    }

    return {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you soon.'
    };

  } catch (error) {
    console.error('Client application submission error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}; 