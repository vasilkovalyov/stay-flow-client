import { apiFetch } from '@/config/api-fetch';
import { API_REQUEST } from '@/constants';

import { LoginDto } from './login-form.type';

export async function login(dto: LoginDto) {
  const response = await apiFetch(API_REQUEST.login, {
    method: 'POST',
    body: JSON.stringify(dto),
  });

  if (!response.success) {
    throw new Error(response.data.message);
  }

  return response;
}
