import { PAGES, PROTECTED_PAGES } from '@/constants/page.constant';

export type PublicPageUrlType = (typeof PAGES)[keyof typeof PAGES];

export type ProtectedPageUrlType = (typeof PROTECTED_PAGES)[keyof typeof PROTECTED_PAGES];
