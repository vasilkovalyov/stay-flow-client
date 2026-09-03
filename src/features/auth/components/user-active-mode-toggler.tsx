'use client';

import { Button } from '@/components/ui';

import { USER_ACTIVE_MODE } from '@/constants';

import { useMe } from '../hooks';

export function UserActiveModeToggler() {
  const { data: user } = useMe();

  if (!user?.success) return;

  let role = 'Guest';

  if (user.data.activeMode === USER_ACTIVE_MODE.GUEST) {
    role = 'Role';
  }

  return (
    <div>
      <Button variant="ghost" size="sm">
        {role} View
      </Button>
    </div>
  );
}
