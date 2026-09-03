'use client';

import { useMe } from '@/features/auth/hooks';

import { Avatar, AvatarFallback } from '@/components/ui';

import { getUserInitials } from '@/utils';

interface UserAvatarProps {
  size?: 'default' | 'sm' | 'lg';
}

export function UserAvatar({ size = 'default' }: UserAvatarProps) {
  const { data: user } = useMe();

  if (!user?.success) return;

  const { firstName, lastName } = user.data;

  return (
    <Avatar size={size}>
      <AvatarFallback>{getUserInitials(firstName, lastName)}</AvatarFallback>
    </Avatar>
  );
}
