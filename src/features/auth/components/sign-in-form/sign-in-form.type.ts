import { z } from 'zod';

import { schemaValidation } from './sign-in-form.validation';

export type SignInFormValues = z.infer<typeof schemaValidation>;
