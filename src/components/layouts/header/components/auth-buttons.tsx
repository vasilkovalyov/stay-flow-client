'use client';
import { ReactNode } from 'react';

import Link from 'next/link';

import { useMe } from '@/features/auth/hooks/use-me';

import { Button } from '@/components/ui';

import { PAGES } from '@/constants';

interface AuthButtonsProps {
  children?: ReactNode;
}

export function AuthButtons({ children }: AuthButtonsProps) {
  const { data: user } = useMe();

  return (
    <div className="flex gap-[8px] items-center">
      {user?.success ? (
        children
      ) : (
        <div className="flex gap-[8px]">
          <Button
            nativeButton={false}
            render={<Link href={PAGES.login} />}
            size="sm"
            variant="ghost"
          >
            Sign in
          </Button>
          <Button nativeButton={false} render={<Link href={PAGES.registration} />} size="sm">
            Sign up
          </Button>
        </div>
      )}
    </div>
  );
}
