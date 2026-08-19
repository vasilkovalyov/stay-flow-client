import { VALIDATION_MESSAGES, validationPassword } from '@/features/auth/constants';
import { z } from 'zod';

export const schemaValidation = z
  .object({
    password: validationPassword,
    confirmPassword: z.string().min(1, VALIDATION_MESSAGES.confirmPassword.required),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: VALIDATION_MESSAGES.password.mismatch,
    path: ['confirmPassword'],
  });
