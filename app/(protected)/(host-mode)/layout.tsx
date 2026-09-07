import { PropsWithChildren } from 'react';

import { redirect } from 'next/navigation';

import { getMeApi } from '@/features/auth';

import { PAGES, USER_ACTIVE_MODE } from '@/constants';

export default async function HostModeLayout({ children }: Readonly<PropsWithChildren>) {
  const user = await getMeApi();

  if (user.success && user.data.activeMode !== USER_ACTIVE_MODE.HOST) {
    redirect(PAGES.notFound);
  }

  return children;
}
