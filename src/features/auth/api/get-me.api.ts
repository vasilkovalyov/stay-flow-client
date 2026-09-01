'use server';

import { serverApiFetch } from '@/config/server-api-fetch';
import { API_REQUEST } from '@/constants';

import { User } from '@/types';
import { ApiResponse } from '@/types';

export async function getMeApi(): Promise<ApiResponse<User>> {
  const response = await serverApiFetch<User>(API_REQUEST.getMe, {
    method: 'GET',
  });

  return response;
}
