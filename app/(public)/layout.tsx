import { PropsWithChildren } from 'react';

import { PublicLayout } from '@/components/layouts';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return <PublicLayout>{children}</PublicLayout>;
}
