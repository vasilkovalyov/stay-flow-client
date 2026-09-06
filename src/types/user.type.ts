import { UserActiveModeType } from './user-active-mode';

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  bio?: string;
  phoneCode?: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
  emailVerifiedAt: string;
  activeMode: UserActiveModeType;
  countryId?: number;
  stateId?: number;
  cityId?: number;
}
