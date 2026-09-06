import { ApiError } from '@/lib/api-error';

import { apiFetch } from '@/config/api-fetch';
import { API_REQUEST } from '@/constants';

import { UserProfileDto } from './profile-form.type';

export async function updateProfile(dto: UserProfileDto) {
  const response = await apiFetch(API_REQUEST.updateProfile, {
    method: 'PATCH',
    body: JSON.stringify(dto),
  });

  if (!response.success) {
    const { message, status, error } = response.data;
    throw new ApiError(message, status, error);
  }

  return response;
}
