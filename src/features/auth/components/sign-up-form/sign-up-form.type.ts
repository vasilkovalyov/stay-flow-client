import { z } from 'zod';

import { schemaValidation } from './sign-up-form.validation';

export type SignUpFormValues = z.infer<typeof schemaValidation>;
