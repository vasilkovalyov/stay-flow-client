import { LightOverlay } from '@/components/shared';
import { Separator } from '@/components/ui';

import { DashboardSidebarNavigation, DashboardSidebarUser } from './components';

export function DashboardSidebar() {
  return (
    <LightOverlay className="sticky top-[96px]">
      <div className="grid gap-[8px] p-[8px]">
        <DashboardSidebarUser />
        <Separator />
        <DashboardSidebarNavigation />
      </div>
    </LightOverlay>
  );
}
