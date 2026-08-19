import { z } from 'zod';

import { schemaValidation } from './reset-password-form.validation';

export type ResetPasswordFormValues = z.infer<typeof schemaValidation>;
