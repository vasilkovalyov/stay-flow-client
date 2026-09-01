import { VALIDATION_MESSAGES, validationPassword } from '@/features/auth/constants';
import { z } from 'zod';

export const schemaValidation = z
  .object({
    firstName: z.string().min(1, VALIDATION_MESSAGES.firstName.required),
    lastName: z.string().min(1, VALIDATION_MESSAGES.lastName.required),
    email: z.email(VALIDATION_MESSAGES.email.invalid),
    password: validationPassword,
    confirmPassword: z.string().min(1, VALIDATION_MESSAGES.confirmPassword.required),
    terms: z.boolean().refine((value) => value, {
      message: VALIDATION_MESSAGES.terms.required,
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: VALIDATION_MESSAGES.password.mismatch,
    path: ['confirmPassword'],
  });
