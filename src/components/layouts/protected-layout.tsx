import { PropsWithChildren } from 'react';

import { HydrationBoundaryProvider } from '@/providers';

import { Header } from './header';

export async function ProtectedLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <HydrationBoundaryProvider>
      <Header />
      <main>{children}</main>
    </HydrationBoundaryProvider>
  );
}
