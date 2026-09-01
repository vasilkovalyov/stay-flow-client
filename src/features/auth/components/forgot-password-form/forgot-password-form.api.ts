import { apiFetch } from '@/config/api-fetch';
import { API_REQUEST } from '@/constants';

import { ForgotPasswordDto } from './forgot-password-form.type';

export async function forgotPasswordApi(dto: ForgotPasswordDto) {
  const response = await apiFetch(API_REQUEST.forgotPassword, {
    method: 'POST',
    body: JSON.stringify(dto),
  });

  if (!response.success) {
    throw new Error(response.data.message);
  }

  return response;
}
