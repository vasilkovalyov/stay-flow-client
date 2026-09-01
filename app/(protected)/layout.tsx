import { PropsWithChildren } from 'react';

import { ProtectedLayout } from '@/components/layouts';

export default async function Layout({ children }: Readonly<PropsWithChildren>) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
