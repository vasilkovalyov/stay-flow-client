import { TANSTACK_QUERY_KEY } from '@/constants';

import { verifyEmailApi } from '../api/verfiy-email.api';

export const verifyEmailMutation = () => ({
  queryKey: [TANSTACK_QUERY_KEY.verifyEmail],
  queryFn: verifyEmailApi,
  retry: false,
  staleTime: 60 * 1000,
});
