export const API_REQUEST = {
  refresh: '/auth/refresh',
  getMe: '/user/me',
  login: '/auth/sign-in',
  logout: '/auth/logout',
  registration: '/auth/sign-up',
  resetPassword: '/auth/reset-password',
  verificationCodeEmail: '/auth/verification-code-email',
  verifyEmail: '/auth/verify-email',
  forgotPassword: '/auth/forgot-password',
} as const;

export const API_REQUEST_SERVER = {} as const;
