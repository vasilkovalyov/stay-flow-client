import Link from 'next/link';

import { Button } from '@/components/ui';

import { PAGES } from '@/constants';

export function AuthButtons() {
  return (
    <div className="flex gap-[8px]">
      <Button nativeButton={false} render={<Link href={PAGES.signIn} />} size="sm" variant="ghost">
        Sign in
      </Button>
      <Button nativeButton={false} render={<Link href={PAGES.signUp} />} size="sm">
        Sign up
      </Button>
    </div>
  );
}
