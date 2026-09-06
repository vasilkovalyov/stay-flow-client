import { z } from 'zod';

export const schemaValidation = z.object({
  firstName: z.string().nonempty('Field is required'),
  lastName: z.string().nonempty('Field is required'),
  phoneCode: z.string().optional().or(z.literal('')),
  phone: z.string().optional().or(z.literal('')),
  email: z.email(),
  birthDate: z
    .string()
    .optional()
    .or(z.literal(''))
    .refine((value) => {
      if (!value) return true;

      const birthDate = new Date(value);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();

      const hasBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

      if (!hasBirthdayPassed) {
        age--;
      }

      return age >= 18;
    }, 'You must be at least 18 years old'),
  bio: z.string().max(500, 'Bio must be 500 characters or less').optional().or(z.literal('')),
  country: z.string().optional().or(z.literal('')),
  state: z.string().optional().or(z.literal('')),
  city: z.string().optional().or(z.literal('')),
});
