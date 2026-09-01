import { API_REQUEST, STATUS_RESPONSE } from '@/constants';

import { ApiResponse } from '@/types';

export async function apiFetch<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

  const data = await fetch(`${API_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    ...options,
  });

  if (data.status === STATUS_RESPONSE.UNAUTHORIZED) {
    const refreshResponse = await fetch(`${API_URL}${API_REQUEST.refresh}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const refreshResponseData = await refreshResponse.json();

    if (!refreshResponse.ok) {
      return {
        success: false,
        data: {
          status: refreshResponse.status,
          error: refreshResponseData.error,
          message: refreshResponseData.message,
        },
      };
    }

    const retryResponse = await fetch(`${API_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      credentials: 'include',
      ...options,
    });

    const retryResponseData = await retryResponse.json();

    if (!retryResponse.ok) {
      return {
        success: false,
        data: {
          status: retryResponseData.status,
          error: retryResponseData.error,
          message: retryResponseData.message,
        },
      };
    }

    return retryResponseData;
  }

  if (!data.ok) {
    const error = await data.json();
    return {
      success: false,
      data: {
        status: data.status,
        error: error.error,
        message: error.message,
      },
    };
  }

  const response: ApiResponse<T> = await data.json();

  return response;
}
