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
    throw new Error(response.data.message);
  }

  return response;
}
