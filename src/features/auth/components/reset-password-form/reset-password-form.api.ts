import { apiFetch } from '@/config/api-fetch';
import { API_REQUEST } from '@/constants';

import { ResetPasswordDto } from './reset-password-form.type';

export async function resetPasswordApi(dto: ResetPasswordDto) {
  const response = await apiFetch(API_REQUEST.resetPassword, {
    method: 'POST',
    body: JSON.stringify(dto),
  });

  if (!response.success) {
    throw new Error(response.data.message);
  }

  return response;
}
