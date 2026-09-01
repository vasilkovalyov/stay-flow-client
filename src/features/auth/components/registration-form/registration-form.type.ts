import { z } from 'zod';

import { schemaValidation } from './registration-form.validation';

export type RegistrationFormValues = z.infer<typeof schemaValidation>;

export interface RegistrationDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegistrationResponseDto {
  email: string;
  message: string;
}
