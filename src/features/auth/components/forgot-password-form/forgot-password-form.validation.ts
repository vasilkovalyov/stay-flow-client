import { VALIDATION_MESSAGES } from '@/features/auth/constants';
import { z } from 'zod';

export const schemaValidation = z.object({
  email: z.email(VALIDATION_MESSAGES.email.invalid),
});
