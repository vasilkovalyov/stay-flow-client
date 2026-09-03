'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useMe } from '@/features/auth/hooks';
import { cn } from '@/lib/utils';

import { NAVIGATION_ICONS } from '@/components/shared';

import { navigation } from './dashboard-sidebar-navigation.const';

export function DashboardSidebarNavigation() {
  const pathname = usePathname();
  const { data: user } = useMe();

  if (!user?.success) return;

  return (
    <ul className="grid gap-[4px]">
      {navigation[user.data.activeMode].map(({ icon, name, href }) => (
        <li key={href}>
          <Link
            href={href}
            className={cn(
              'flex items-center gap-[10px] px-[12px] py-[10px] rounded-xl font-medium transition-colors text-foreground hover:bg-secondary',
              {
                'text-primary bg-destructive/10 hover:bg-destructive/10': pathname === href,
              },
            )}
          >
            <span
              className={cn('text-muted-foreground [&_svg]:size-[16px]', {
                'text-primary': pathname === href,
              })}
            >
              {NAVIGATION_ICONS[icon]}
            </span>
            <span className="flex-1 font-semibold">{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
