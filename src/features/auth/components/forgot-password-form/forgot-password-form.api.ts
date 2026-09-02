import { ApiError } from '@/lib/api-error';

import { apiFetch } from '@/config/api-fetch';
import { API_REQUEST } from '@/constants';

import { ForgotPasswordDto } from './forgot-password-form.type';

export async function forgotPasswordApi(dto: ForgotPasswordDto) {
  const response = await apiFetch(API_REQUEST.forgotPassword, {
    method: 'POST',
    body: JSON.stringify(dto),
  });

  if (!response.success) {
    const { message, status, error } = response.data;
    throw new ApiError(message, status, error);
  }

  return response;
}
