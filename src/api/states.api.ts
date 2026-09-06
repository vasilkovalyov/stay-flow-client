import { apiFetch } from '@/config/api-fetch';
import { API_REQUEST } from '@/constants';

import { ApiResponse, State } from '@/types';

export async function getStates(countryId: string): ApiResponse<State[]> {
  const response = await apiFetch<State[]>(`${API_REQUEST.countries}/${countryId}/states`, {
    method: 'GET',
  });

  return response;
}

export async function getCities(stateId: string): ApiResponse<State[]> {
  const response = await apiFetch<State[]>(`/states/${stateId}/cities`, {
    method: 'GET',
  });

  return response;
}
