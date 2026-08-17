'use client';

import { cn } from '@/lib/utils';
import { Switch as SwitchPrimitive } from '@base-ui/react/switch';
import { VariantProps, cva } from 'class-variance-authority';

const switchVariants = cva(
  `peer group/switch
    relative inline-flex shrink-0 items-center
    
    rounded-full border-2
    outline-none
    transition-all

    after:absolute
    after:-inset-x-[10px] after:-inset-y-[7px]

    data-[size=default]:h-[24px]
    data-[size=default]:w-[48px]
    data-[size=sm]:h-[24px]
    data-[size=sm]:w-[40px]

    data-unchecked:border-transparent
    data-unchecked:bg-input/90

    focus-visible:border-ring
    focus-visible:ring-3
    focus-visible:ring-ring/30

    aria-invalid:border-destructive
    aria-invalid:ring-3
    aria-invalid:ring-destructive/20

    data-disabled:cursor-not-allowed
    data-disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: 'bg-primary',
        secondary: 'bg-success',
      },
    },

    defaultVariants: {
      variant: 'default',
    },
  },
);

type SwitchProps = SwitchPrimitive.Root.Props &
  VariantProps<typeof switchVariants> & {
    size?: 'sm' | 'default';
  };

function Switch({ className, size = 'default', variant, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(switchVariants({ variant, className }))}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={`
          pointer-events-none
          block
          rounded-full
          shadow-sm
          ring-0
          transition-transform
          not-dark:bg-clip-padding
          size-[16px]
          bg-background

          data-unchecked:translate-x-0

          group-data-[size=default]/switch:data-checked:translate-x-[28px]
          group-data-[size=sm]/switch:data-checked:translate-x-[20px]
        `}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
