import { apiFetch } from '@/config/api-fetch';
import { API_REQUEST } from '@/constants';

import { ApiResponse } from '@/types';

interface VerifyEmailResponse {
  message: string;
}

export async function verifyEmailApi(): ApiResponse<VerifyEmailResponse> {
  const response = await apiFetch<VerifyEmailResponse>(API_REQUEST.verifyEmail, {
    method: 'POST',
  });

  return response;
}
