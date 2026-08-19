import { PropsWithChildren } from 'react';

import { PublicLayout } from '@/components/layouts';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <PublicLayout useFooter={false}>
      <div className="min-h-[calc(100vh-65px)] flex items-center justify-center py-[40px]">
        <div className="container-xs">{children}</div>
      </div>
    </PublicLayout>
  );
}
