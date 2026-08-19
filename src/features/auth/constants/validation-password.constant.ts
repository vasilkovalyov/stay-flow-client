import { z } from 'zod';

import { VALIDATION_MESSAGES } from './validation-messages.constant';

export const validationPassword = z
  .string()
  .min(8, VALIDATION_MESSAGES.password.min)
  .regex(/[A-Z]/, VALIDATION_MESSAGES.password.uppercase)
  .regex(/\d/, VALIDATION_MESSAGES.password.number);
