import { TANSTACK_QUERY_KEY } from '@/constants';

import { getMeApi } from '../api/get-me.api';

export const getMeQuery = () => ({
  queryKey: [TANSTACK_QUERY_KEY.getMe],
  queryFn: getMeApi,
  retry: false,
  staleTime: 60 * 1000,
});
