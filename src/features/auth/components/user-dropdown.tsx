import { ReactNode } from 'react';

import Link from 'next/link';

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

import { PROTECTED_PAGES } from '@/constants';

import { LinkNavigation } from '@/types';

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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-[8px]">
          <Avatar size="sm">
            <AvatarFallback>JH</AvatarFallback>
          </Avatar>
          <span className="font-semibold hidden sm:block">John</span>
          <ChevronDown size={14} className="text-foreground" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <div className="py-[10px] px-[12px]">
            <p className="font-bold">John Doe</p>
            <p className="text-xs text-muted-foreground">john@stayflow.com</p>
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
          <DropdownMenuItem variant="destructive">
            <LogOut />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
