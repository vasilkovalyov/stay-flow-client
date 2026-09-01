export const PAGES = {
  home: '/',
  login: '/login',
  registration: '/registration',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  emailVerification: '/email-verification',
  twoFactorAuth: '/two-factor-auth',
  about: '/about',
  contact: '/contact',
  faq: '/faq',
  terms: '/terms',
  privacy: '/privacy',
  notFound: '/404',
} as const;

export const PROTECTED_PAGES = {
  dashboard: '/dashboard',
} as const;

export const PROTECTED_ROUTES_ARRAY = Object.values(PROTECTED_PAGES);
