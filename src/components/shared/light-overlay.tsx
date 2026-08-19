import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const lightOverlayVariants = cva('border border-border overflow-hidden', {
  variants: {
    background: {
      light: 'bg-light',
      secondary: 'bg-secondary',
      error: 'bg-red-50 border border-red-200',
    },
    radius: {
      default: 'rounded-lg',
      lg: 'rounded-xl',
      xl: 'rounded-2xl',
    },
  },
  defaultVariants: {
    radius: 'default',
    background: 'light',
  },
});

type LightOverlayProps = PropsWithChildren &
  VariantProps<typeof lightOverlayVariants> & {
    className?: string;
  };

export function LightOverlay({ className, radius, background, children }: LightOverlayProps) {
  return (
    <div className={cn(lightOverlayVariants({ radius, background, className }))}>{children}</div>
  );
}
