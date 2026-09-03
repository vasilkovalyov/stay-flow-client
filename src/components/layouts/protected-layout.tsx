import { PropsWithChildren } from 'react';

import { HydrationBoundaryProvider } from '@/providers';

import { DashboardSidebar } from './dashboard-sidebar';
import { Header } from './header';

export async function ProtectedLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <HydrationBoundaryProvider>
      <Header />
      <main>
        <section className="py-[32px]">
          <div className="container">
            <div className="flex gap-[32px]">
              <aside className="w-[224px] flex-shrink-0">
                <DashboardSidebar />
              </aside>
              {children}
            </div>
          </div>
        </section>
      </main>
    </HydrationBoundaryProvider>
  );
}
