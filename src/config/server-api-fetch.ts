import { cookies } from 'next/headers';

import { API_REQUEST, STATUS_RESPONSE } from '@/constants';

import { ApiResponse } from '@/types';

import { mergeCookies } from '@/utils';

export async function serverApiFetch<T>(
  url: string,
  options?: RequestInit,
): Promise<ApiResponse<T>> {
  const cookieStore = await cookies();
  const API_URL = `${process.env.API_URL}/api`;
  const cookieHeader = cookieStore.toString();

  const headersInit: HeadersInit = {
    'Content-Type': 'application/json',
    Cookie: cookieHeader,
  };

  const data = await fetch(`${API_URL}${url}`, {
    headers: {
      ...headersInit,
      ...options?.headers,
    },
    credentials: 'include',
    ...options,
  });

  if (data.status === STATUS_RESPONSE.UNAUTHORIZED) {
    const refreshResponse = await fetch(`${API_URL}${API_REQUEST.refresh}`, {
      method: 'POST',
      headers: headersInit,
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

    const setCookies = refreshResponse.headers.getSetCookie();

    const retryResponse = await fetch(`${API_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        Cookie: mergeCookies(cookieHeader, setCookies),
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

    for (const cookie of setCookies) {
      const [cookiePair] = cookie.split(';');

      if (cookiePair) {
        const [name, value] = cookiePair.split('=');

        if (name && value) {
          cookieStore.set(name, value);
        }
      }
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
