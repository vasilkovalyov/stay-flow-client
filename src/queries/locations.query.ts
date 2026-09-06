import { getCountries, getPhoneCodes } from '@/api/locations.api';

import { TANSTACK_QUERY_KEY } from '@/constants';

export const getCountriesQuery = () => ({
  queryKey: [TANSTACK_QUERY_KEY.getCountries],
  queryFn: getCountries,
});

export const getPhoneCodesQuery = () => ({
  queryKey: [TANSTACK_QUERY_KEY.getPhoneCodes],
  queryFn: getPhoneCodes,
});
