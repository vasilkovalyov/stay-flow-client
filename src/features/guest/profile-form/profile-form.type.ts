import { z } from 'zod';

import { schemaValidation } from './profile-form.validation';

export type ProfileFormValues = z.infer<typeof schemaValidation>;

export type FormFieldName = keyof ProfileFormValues;

export interface UserProfileDto {
  firstName: string;
  lastName: string;
  phoneCode?: string;
  phone?: string;
  birthDate?: string;
  bio?: string;
  countryId?: number;
  stateId?: number;
  cityId?: number;
}
