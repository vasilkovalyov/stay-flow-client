import { apiFetch } from '@/config/api-fetch';
import { API_REQUEST } from '@/constants';

import { ApiResponse, UserActiveModeType } from '@/types';

interface SwitchModeResponse {
  activeMode: UserActiveModeType;
}

export async function switchModeApi(): ApiResponse<SwitchModeResponse> {
  const response = await apiFetch<SwitchModeResponse>(API_REQUEST.switchMode, {
    method: 'PUT',
  });

  return response;
}
