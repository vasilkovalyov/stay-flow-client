'use client';

import Link from 'next/link';

import { useMe } from '@/features/auth/hooks';

import { NAVIGATION_ICONS } from '@/components/shared';

import { navigation } from './dashboard-sidebar-navigation.const';

export function DashboardSidebarNavigation() {
  const { data: user } = useMe();

  if (!user?.success) return;

  return (
    <ul>
      {navigation[user.data.activeMode].map(({ icon, name, href }) => (
        <li key={href}>
          <Link
            href={href}
            className="flex items-center gap-[10px] px-[12px] py-[10px] rounded-xl font-medium transition-colors text-foreground hover:bg-secondary"
          >
            <span className="text-muted-foreground [&_svg]:size-[16px]">
              {NAVIGATION_ICONS[icon]}
            </span>
            <span className="flex-1">{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
