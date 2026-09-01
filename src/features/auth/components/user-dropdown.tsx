'use client';

import { ReactNode } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Calendar, ChevronDown, CreditCard, Heart, LogOut, Settings, User } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui';

import { PAGES, PROTECTED_PAGES, TANSTACK_QUERY_KEY } from '@/constants';

import { LinkNavigation } from '@/types';

import { getUserInitials } from '@/utils';

import { logoutApi } from '../api/logout.api';
import { useMe } from '../hooks/use-me';

export interface UserDropdownLink extends LinkNavigation {
  icon: ReactNode;
}

const DROPDOWN_NAVIGATION: UserDropdownLink[] = [
  {
    icon: <User />,
    href: PROTECTED_PAGES.dashboard,
    text: 'Profile',
  },
  {
    icon: <Calendar />,
    href: PROTECTED_PAGES.dashboard,
    text: 'My Trips',
  },
  {
    icon: <Heart />,
    href: PROTECTED_PAGES.dashboard,
    text: 'Saved Homes',
  },
  {
    icon: <CreditCard />,
    href: PROTECTED_PAGES.dashboard,
    text: 'Payments',
  },
  {
    icon: <Settings />,
    href: PROTECTED_PAGES.dashboard,
    text: 'Settings',
  },
];

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

  const { firstName, lastName, email } = user.data;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-[8px]">
          <Avatar size="sm">
            <AvatarFallback>{getUserInitials(firstName, lastName)}</AvatarFallback>
          </Avatar>
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
          {DROPDOWN_NAVIGATION.map(({ text, href, icon }, index) => (
            <DropdownMenuItem
              key={`${href}-${index}`}
              nativeButton={false}
              render={<Link href={href} />}
            >
              {icon}
              {text}
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
