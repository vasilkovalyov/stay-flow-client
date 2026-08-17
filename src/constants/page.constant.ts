export const PAGES = {
  home: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  emailVerification: '/email-verification',
  twoFactorAuth: '/two-factor-auth',
  about: '/about',
  contact: '/contact',
  faq: '/faq',
  terms: '/terms',
  privacy: '/privacy',
} as const;

export const PROTECTED_PAGES = {
  dashboard: '/dashboard',
} as const;
