import { z } from 'zod';

import { schemaValidation } from './email-verification-form.validation';

export type EmailVerificationFormValues = z.infer<typeof schemaValidation>;

export interface EmailVerificationDto {
  email: string;
  code: string;
}

export interface EmailVerificationCodeDto {
  email: string;
}
