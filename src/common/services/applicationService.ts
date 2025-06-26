import { supabase, RESUMES_BUCKET } from '../config/supabase';
import type { ApplicationData } from '../config/supabase';
import { generateUniqueFilename, validateResumeFile } from '../utils/fileUtils';

export interface ApplicationFormData {
  name: string;
  year: string;
  major: string;
  email: string;
  phone: string;
  resume: File | null;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Submits an application to Supabase
 * 1. Validates the resume file
 * 2. Generates unique filename
 * 3. Uploads file to Supabase storage
 * 4. Inserts application data into database
 */
export const submitApplication = async (
  formData: ApplicationFormData
): Promise<SubmissionResult> => {
  try {
    // Validate resume file
    if (!formData.resume) {
      return {
        success: false,
        message: 'Resume file is required',
        error: 'No resume file provided'
      };
    }

    const validation = validateResumeFile(formData.resume);
    if (!validation.isValid) {
      return {
        success: false,
        message: validation.error || 'Invalid file',
        error: validation.error
      };
    }

    // Generate unique filename
    const uniqueFilename = generateUniqueFilename(formData.resume);

    // Upload file to Supabase storage
    const { error: uploadError } = await supabase.storage
      .from(RESUMES_BUCKET)
      .upload(uniqueFilename, formData.resume, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.error('File upload error:', uploadError);
      return {
        success: false,
        message: 'Failed to upload resume file',
        error: uploadError.message
      };
    }

    // Prepare application data for database
    const applicationData: ApplicationData = {
      name: formData.name,
      year: formData.year, // Store year as text directly
      major: formData.major,
      email: formData.email,
      phone: formData.phone,
      resume_filename: uniqueFilename
    };

    // Insert application data into database
    const { error: insertError } = await supabase
      .from('applications')
      .insert([applicationData]);

    if (insertError) {
      console.error('Database insert error:', insertError);
      
      // If database insert fails, try to delete the uploaded file
      await supabase.storage
        .from(RESUMES_BUCKET)
        .remove([uniqueFilename]);

      return {
        success: false,
        message: 'Failed to save application data',
        error: insertError.message
      };
    }

    return {
      success: true,
      message: 'Application submitted successfully!'
    };

  } catch (error) {
    console.error('Application submission error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}; 