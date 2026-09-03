'use client';

import { ReactNode } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChevronDown, LogOut } from 'lucide-react';

import { NAVIGATION_ICONS } from '@/components/shared';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui';

import { PAGES, TANSTACK_QUERY_KEY } from '@/constants';

import { LinkNavigation } from '@/types';

import { logoutApi } from '../../api/logout.api';
import { useMe } from '../../hooks';
import { UserAvatar } from '../user-avatar';
import { dropdownNavigation } from './user-dropdown.constant';

export interface UserDropdownLink extends LinkNavigation {
  icon: ReactNode;
}

export function UserDropdown() {
  const { data: user } = useMe();
  const router = useRouter();
  const queryClient = useQueryClient();

  const logoutMutation = useMutation({
    mutationFn: logoutApi,
    onSuccess: async () => {
      await queryClient.removeQueries({
        queryKey: [TANSTACK_QUERY_KEY.getMe],
      });

      router.push(PAGES.login);
    },
  });

  function onLogout() {
    logoutMutation.mutate();
  }

  if (!user?.success) return;

  const { firstName, lastName, email, activeMode } = user.data;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-[8px]">
          <UserAvatar size="sm" />
          <span className="font-semibold hidden sm:block">{firstName}</span>
          <ChevronDown size={14} className="text-foreground" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <div className="py-[10px] px-[12px]">
            <p className="font-bold">
              {firstName} {lastName}
            </p>
            <p className="text-xs text-muted-foreground">{email}</p>
          </div>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {dropdownNavigation[activeMode].map(({ name, href, icon }, index) => (
            <DropdownMenuItem
              key={`${href}-${index}`}
              nativeButton={false}
              render={<Link href={href} />}
            >
              {NAVIGATION_ICONS[icon]}
              {name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive" onClick={onLogout}>
            <LogOut />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
