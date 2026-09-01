import { RegistrationFormValues } from './registration-form.type';

export const defaultValues: RegistrationFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  terms: false,
};

export const EMAIL_COOKIE_EXPIRATION = 1 * 60;
