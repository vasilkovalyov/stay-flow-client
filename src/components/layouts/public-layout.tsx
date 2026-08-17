import { PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';

export function PublicLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
