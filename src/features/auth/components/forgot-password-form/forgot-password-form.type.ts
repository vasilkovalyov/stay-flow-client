import { z } from 'zod';

import { schemaValidation } from './forgot-password-form.validation';

export type ForgotPasswordFormValues = z.infer<typeof schemaValidation>;

export interface ForgotPasswordDto {
  email: string;
}
