export const API_REQUEST = {
  refresh: '/auth/refresh',
  getMe: '/user/me',
  login: '/auth/sign-in',
  logout: '/auth/logout',
  registration: '/auth/sign-up',
  verificationCodeEmail: '/auth/verification-code-email',
  verifyEmail: '/auth/verify-email',
} as const;

export const API_REQUEST_SERVER = {} as const;
