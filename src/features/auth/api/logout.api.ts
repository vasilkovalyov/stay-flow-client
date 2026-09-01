import { apiFetch } from '@/config/api-fetch';
import { API_REQUEST } from '@/constants';

export async function logoutApi() {
  const response = await apiFetch(API_REQUEST.logout, {
    method: 'POST',
  });

  if (!response.success) {
    throw new Error(response.data.message);
  }

  return response;
}
