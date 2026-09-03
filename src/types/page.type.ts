import { PAGES, PROTECTED_ROUTES_ARRAY } from '@/constants/page.constant';

export type PublicPageUrlType = (typeof PAGES)[keyof typeof PAGES];

export type ProtectedPageUrlType =
  (typeof PROTECTED_ROUTES_ARRAY)[keyof typeof PROTECTED_ROUTES_ARRAY];
