'use client';

import { cn } from '@/lib/utils';
import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import { type VariantProps, cva } from 'class-variance-authority';

const toggleVariants = cva(
  `
    group/toggle inline-flex items-center
    justify-center gap-[4px]

    rounded-xl
    font-semibold whitespace-nowrap
    transition-colors
    outline-none

    hover:bg-muted
    hover:text-foreground

    focus-visible:border-ring
    focus-visible:ring-[3px]
    focus-visible:ring-ring/30

    disabled:pointer-events-none
    disabled:opacity-50

    aria-invalid:border-destructive
    aria-invalid:ring-destructive/20

    aria-pressed:bg-muted

    [&_svg]:pointer-events-none
    [&_svg]:shrink-0
    [&_svg:not([class*='size-'])]:size-[14px]
  `,
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border border-input bg-transparent hover:bg-muted',
      },
      size: {
        default:
          'h-[31.5px] min-w-[31.5px] px-[10px] has-data-[icon=inline-end]:pr-[8px] has-data-[icon=inline-start]:pl-[8px]',
        sm: 'h-[28px] min-w-[28px] px-[10px] has-data-[icon=inline-end]:pr-[7px] has-data-[icon=inline-start]:pl-[7px]',
        lg: 'h-[35px] min-w-[35px] px-[14px] has-data-[icon=inline-end]:pr-[10px] has-data-[icon=inline-start]:pl-[10px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Toggle({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
