import Link from 'next/link';

import { Button } from '@/components/ui';

export function AuthButtons() {
  return (
    <div className="flex gap-[8px]">
      <Button nativeButton={false} render={<Link href="/" />} size="sm" variant="ghost">
        Sign in
      </Button>
      <Button nativeButton={false} render={<Link href="/" />} size="sm">
        Sign up
      </Button>
    </div>
  );
}
