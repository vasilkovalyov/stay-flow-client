'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Button } from '@/components/ui';

import { PROTECTED_COMMON_PAGES, TANSTACK_QUERY_KEY, USER_ACTIVE_MODE } from '@/constants';

import { UserActiveModeType } from '@/types';

import { switchModeApi } from '../api/switch-mode.api';
import { SwitchModeDialog } from '../dialogs/switch-mode-dialog';
import { useMe } from '../hooks';

export function UserActiveModeToggler() {
  const router = useRouter();

  const { data: user } = useMe();
  const queryClient = useQueryClient();
  const [activeDialog, setActiveDialog] = useState<boolean>(false);
  const [activeMode, setActiveMode] = useState<UserActiveModeType | null>(null);

  const switchModeMutation = useMutation({
    mutationFn: switchModeApi,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: [TANSTACK_QUERY_KEY.getMe],
      });

      if (data.success) {
        setActiveDialog(true);
        setActiveMode(data.data.activeMode);
        router.push(PROTECTED_COMMON_PAGES.dashboard);
      }
    },
    onError: (e) => {
      if (e instanceof Error) {
        console.log('success', e.message);
      }
    },
  });

  if (!user?.success) return;

  let role = 'Guest';

  if (user.data.activeMode === USER_ACTIVE_MODE.GUEST) {
    role = 'Host';
  }

  function onHandleSwitchMode() {
    switchModeMutation.mutate();
  }

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={onHandleSwitchMode}
        disabled={switchModeMutation.isPending}
      >
        {switchModeMutation.isPending ? 'loading...' : <>{role} View</>}
      </Button>
      <SwitchModeDialog
        open={activeDialog}
        activeMode={
          activeMode === USER_ACTIVE_MODE.GUEST ? USER_ACTIVE_MODE.HOST : USER_ACTIVE_MODE.GUEST
        }
        onClose={() => setActiveDialog(false)}
      />
    </>
  );
}
