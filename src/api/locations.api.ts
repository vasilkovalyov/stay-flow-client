'use server';

import { serverApiFetch } from '@/config/server-api-fetch';
import { API_REQUEST } from '@/constants';

import { Country, PhoneCode } from '@/types';
import { ApiResponse } from '@/types';

export async function getCountries(): ApiResponse<Country[]> {
  const response = await serverApiFetch<Country[]>(API_REQUEST.countries, {
    method: 'GET',
  });

  return response;
}

export async function getPhoneCodes(): ApiResponse<PhoneCode[]> {
  const response = await serverApiFetch<PhoneCode[]>(API_REQUEST.phoneCodes, {
    method: 'GET',
  });

  return response;
}
