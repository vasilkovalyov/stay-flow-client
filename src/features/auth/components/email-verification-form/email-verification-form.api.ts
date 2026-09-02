import { ApiError } from '@/lib/api-error';

import { apiFetch } from '@/config/api-fetch';
import { API_REQUEST } from '@/constants';

import { EmailVerificationCodeDto, EmailVerificationDto } from './email-verification-form.type';

export async function emailVerification(dto: EmailVerificationDto) {
  const response = await apiFetch(API_REQUEST.verifyEmail, {
    method: 'PATCH',
    body: JSON.stringify(dto),
  });

  if (!response.success) {
    const { message, status, error } = response.data;
    throw new ApiError(message, status, error);
  }

  return response;
}

export async function emailVerificationCode(dto: EmailVerificationCodeDto) {
  const response = await apiFetch(API_REQUEST.verificationCodeEmail, {
    method: 'POST',
    body: JSON.stringify(dto),
  });

  if (!response.success) {
    const { message, status, error } = response.data;
    throw new ApiError(message, status, error);
  }

  return response;
}
