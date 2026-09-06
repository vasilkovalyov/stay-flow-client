'use client';

import { getPhoneCodesQuery } from '@/queries/locations.query';
import { useQuery } from '@tanstack/react-query';

export function usePhoneCodes() {
  return useQuery(getPhoneCodesQuery());
}
