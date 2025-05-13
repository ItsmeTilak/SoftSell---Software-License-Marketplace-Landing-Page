/**
 * Validates an email address
 * @param email - The email address to validate
 * @returns boolean - True if the email is valid, false otherwise
 */
export const validateEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

/**
 * Validates a form field
 * @param value - The field value to validate
 * @param required - Whether the field is required
 * @param minLength - Minimum length (optional)
 * @param maxLength - Maximum length (optional)
 * @returns string | null - Error message or null if valid
 */
export const validateField = (
  value: string, 
  required: boolean = true, 
  minLength?: number, 
  maxLength?: number
): string | null => {
  if (required && !value.trim()) {
    return 'This field is required';
  }
  
  if (minLength && value.length < minLength) {
    return `This field must be at least ${minLength} characters`;
  }
  
  if (maxLength && value.length > maxLength) {
    return `This field must be no more than ${maxLength} characters`;
  }
  
  return null;
};