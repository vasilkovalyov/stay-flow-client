import { z } from 'zod';

import { schemaValidation } from './login-form.validation';

export type LoginFormValues = z.infer<typeof schemaValidation>;

export interface LoginProps {
  email: string;
  password: string;
}
