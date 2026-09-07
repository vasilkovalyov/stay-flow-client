'use client';

import { useMe } from '@/features/auth/hooks';

import { PageHeading } from '@/components/shared';

export default function Dashboard() {
  const { data: user } = useMe();

  const userName = user?.success ? user.data.firstName : '';

  return (
    <div>
      <PageHeading
        title="Dashboard"
        subtitle={`Welcome back, ${userName}! Here's what's happening.`}
      />
    </div>
  );
}
