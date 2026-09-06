'use client';

import { getCountriesQuery } from '@/queries/locations.query';
import { useQuery } from '@tanstack/react-query';

export function useCountries() {
  return useQuery(getCountriesQuery());
}
