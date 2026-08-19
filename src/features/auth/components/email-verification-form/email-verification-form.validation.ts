import { VALIDATION_MESSAGES } from '@/features/auth/constants';
import { z } from 'zod';

export const schemaValidation = z.object({
  code: z.string().length(6, VALIDATION_MESSAGES.code.invalid),
});
