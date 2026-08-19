import { VALIDATION_MESSAGES } from '@/features/auth/constants';
import { z } from 'zod';

export const schemaValidation = z.object({
  email: z.email(VALIDATION_MESSAGES.email.invalid),
  password: z.string().min(1, VALIDATION_MESSAGES.password.required),
  rememberMe: z.boolean(),
});
