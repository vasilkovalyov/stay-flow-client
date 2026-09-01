import { PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';

export async function PublicLayout({
  children,
  useFooter = true,
}: Readonly<PropsWithChildren & { useFooter?: boolean }>) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      {useFooter && <Footer />}
    </>
  );
}
