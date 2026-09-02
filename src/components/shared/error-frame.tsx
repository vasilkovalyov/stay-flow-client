import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

import { LightOverlay } from '@/components/shared';

interface ErrorFrame extends PropsWithChildren {
  className?: string;
}
export function ErrorFrame({ children, className }: ErrorFrame) {
  return (
    <LightOverlay className={cn('p-[10px] w-full', className)} background="error">
      <p className="text-destructive text-center">{children}</p>
    </LightOverlay>
  );
}
