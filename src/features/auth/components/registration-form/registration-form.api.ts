import { ApiError } from '@/lib/api-error';

import { apiFetch } from '@/config/api-fetch';
import { API_REQUEST } from '@/constants';

import { ApiResponse } from '@/types';

import { RegistrationDto, RegistrationResponseDto } from './registration-form.type';

export async function registration(dto: RegistrationDto): ApiResponse<RegistrationResponseDto> {
  const response = await apiFetch<RegistrationResponseDto>(API_REQUEST.registration, {
    method: 'POST',
    body: JSON.stringify(dto),
  });

  if (!response.success) {
    const { message, status, error } = response.data;
    throw new ApiError(message, status, error);
  }

  return response;
}
