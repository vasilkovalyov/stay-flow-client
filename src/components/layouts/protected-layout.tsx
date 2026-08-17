import { PropsWithChildren } from 'react';

import { Header } from './header';

export function ProtectedLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
