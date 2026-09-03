import { USER_ACTIVE_MODE } from '@/constants/user-active-mode';

export type UserActiveModeType = (typeof USER_ACTIVE_MODE)[keyof typeof USER_ACTIVE_MODE];
