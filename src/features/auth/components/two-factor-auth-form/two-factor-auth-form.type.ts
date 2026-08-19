import { z } from 'zod';

import { schemaValidation } from './two-factor-auth-form.validation';

export type TwoFactorAuthFormValues = z.infer<typeof schemaValidation>;
