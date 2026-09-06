import { PropsWithChildren, cache } from 'react';

import { getMeQuery } from '@/features/auth';
import { getCountriesQuery, getPhoneCodesQuery } from '@/queries/locations.query';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

export async function HydrationBoundaryProvider({ children }: Readonly<PropsWithChildren>) {
  const queryClient = cache(() => new QueryClient({}));

  await queryClient().prefetchQuery(getMeQuery());
  await queryClient().prefetchQuery(getCountriesQuery());
  await queryClient().prefetchQuery(getPhoneCodesQuery());

  return <HydrationBoundary state={dehydrate(queryClient())}>{children}</HydrationBoundary>;
}
