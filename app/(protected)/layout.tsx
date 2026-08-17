import { PropsWithChildren } from 'react';

import { ProtectedLayout } from '@/components/layouts';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
