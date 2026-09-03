'use client';

import { UserAvatar } from '@/features/auth/components';
import { useMe } from '@/features/auth/hooks';

export function DashboardSidebarUser() {
  const { data: user } = useMe();

  if (!user?.success) return;

  const { firstName, lastName, email } = user.data;

  return (
    <div className="grid gap-[8px] px-[12px] py-[8px]">
      <UserAvatar />
      <div>
        <p className="font-bold text-sm">
          {firstName} {lastName}
        </p>
        <p className="text-xs text-muted-foreground">{email}</p>
      </div>
    </div>
  );
}
