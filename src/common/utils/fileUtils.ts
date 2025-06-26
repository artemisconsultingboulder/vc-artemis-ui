/**
 * Generates a unique filename for resume uploads
 * Format: resume_{timestamp}_{randomString}_{originalName}
 */
export const generateUniqueFilename = (originalFile: File): string => {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  const fileExtension = originalFile.name.split('.').pop();
  const baseName = originalFile.name.replace(`.${fileExtension}`, '');
  
  const cleanBaseName = baseName.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  
  return `resume_${timestamp}_${randomString}_${cleanBaseName}.${fileExtension}`;
};

/**
 * Validates file size and type for resume uploads
 */
export const validateResumeFile = (file: File): { isValid: boolean; error?: string } => {
  // Check file size (3MB limit)
  const maxSize = 3 * 1024 * 1024; // 3MB in bytes
  if (file.size > maxSize) {
    return { isValid: false, error: 'File size must be less than 3MB' };
  }
  
  // Check file type
  const allowedTypes = [
    'application/pdf', 
    'application/msword', 
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  
  if (!allowedTypes.includes(file.type)) {
    return { isValid: false, error: 'Please upload a PDF, DOC, or DOCX file' };
  }
  
  return { isValid: true };
}; 