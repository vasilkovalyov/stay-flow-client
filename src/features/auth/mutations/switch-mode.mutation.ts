import { TANSTACK_QUERY_KEY } from '@/constants';

import { switchModeApi } from '../api/switch-mode.api';

export const switchModeMutation = () => ({
  queryKey: [TANSTACK_QUERY_KEY.switchMode],
  queryFn: switchModeApi,
  retry: false,
  staleTime: 60 * 1000,
});
