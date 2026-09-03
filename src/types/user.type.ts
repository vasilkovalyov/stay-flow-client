import { UserActiveModeType } from './user-active-mode';

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  emailVerifiedAt: string;
  activeMode: UserActiveModeType;
}
