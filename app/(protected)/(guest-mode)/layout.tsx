import { PropsWithChildren } from 'react';

import { redirect } from 'next/navigation';

import { getMeApi } from '@/features/auth';

import { PAGES, USER_ACTIVE_MODE } from '@/constants';

export default async function GuestModeLayout({ children }: Readonly<PropsWithChildren>) {
  const user = await getMeApi();

  if (user.success && user.data.activeMode !== USER_ACTIVE_MODE.GUEST) {
    redirect(PAGES.notFound);
  }

  return children;
}
