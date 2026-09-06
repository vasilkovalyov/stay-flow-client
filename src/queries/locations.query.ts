import { getCountries, getPhoneCodes } from '@/api/locations.api';

import { TANSTACK_QUERY_KEY } from '@/constants';

const REFERENCE_DATA_STALE_TIME = 24 * 60 * 60 * 1000;

export const getCountriesQuery = () => ({
  queryKey: [TANSTACK_QUERY_KEY.getCountries],
  queryFn: getCountries,
  staleTime: REFERENCE_DATA_STALE_TIME,
});

export const getPhoneCodesQuery = () => ({
  queryKey: [TANSTACK_QUERY_KEY.getPhoneCodes],
  queryFn: getPhoneCodes,
  staleTime: REFERENCE_DATA_STALE_TIME,
});
