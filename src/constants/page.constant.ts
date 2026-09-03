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

export const PROTECTED_COMMON_PAGES = {
  dashboard: '/dashboard',
  messages: '/messages',
  notifications: '/notifications',
  security: '/security',
  deleteAccount: '/delete-account',
} as const;

export const PROTECTED_GUEST_PAGES = {
  myTrips: '/my-trips',
  savedHomes: '/saved-homes',
  profile: '/profile',
  payments: '/payments',
} as const;

export const PROTECTED_HOST_PAGES = {
  properties: '/properties',
  addProperty: '/add-property',
  bookings: '/bookings',
  revenue: '/revenue',
  guests: '/guests',
  reviews: '/reviews',
  payouts: '/payouts',
  settings: '/settings',
} as const;

export const PROTECTED_ROUTES_ARRAY = [
  ...Object.values(PROTECTED_COMMON_PAGES),
  ...Object.values(PROTECTED_GUEST_PAGES),
  ...Object.values(PROTECTED_HOST_PAGES),
];
